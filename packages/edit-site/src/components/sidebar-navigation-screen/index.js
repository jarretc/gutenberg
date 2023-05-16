/**
 * WordPress dependencies
 */
import {
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalNavigatorToParentButton as NavigatorToParentButton,
	__experimentalNavigatorBackButton as NavigatorBackButton,
	__experimentalHeading as Heading,
} from '@wordpress/components';
import { isRTL, __, sprintf } from '@wordpress/i18n';
import { chevronRight, chevronLeft } from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as editSiteStore } from '../../store';
import { unlock } from '../../private-apis';
import SidebarButton from '../sidebar-button';
import {
	isPreviewingTheme,
	currentlyPreviewingTheme,
} from '../../utils/is-previewing-theme';

export default function SidebarNavigationScreen( {
	isRoot,
	title,
	actions,
	content,
	description,
	backToPreviousScreen = false,
} ) {
	const { dashboardLink } = useSelect( ( select ) => {
		const { getSettings } = unlock( select( editSiteStore ) );
		return {
			dashboardLink: getSettings().__experimentalDashboardLink,
		};
	}, [] );
	const { getTheme } = useSelect( coreStore );
	const theme = getTheme( currentlyPreviewingTheme() );
	const NavigatorReturnButton = backToPreviousScreen
		? NavigatorBackButton
		: NavigatorToParentButton;
	return (
		<VStack spacing={ 2 }>
			<HStack
				spacing={ 4 }
				alignment="flex-start"
				className="edit-site-sidebar-navigation-screen__title-icon"
			>
				{ ! isRoot ? (
					<NavigatorReturnButton
						as={ SidebarButton }
						icon={ isRTL() ? chevronRight : chevronLeft }
						label={ __( 'Back' ) }
					/>
				) : (
					<SidebarButton
						icon={ isRTL() ? chevronRight : chevronLeft }
						label={
							! isPreviewingTheme()
								? __( 'Go back to the Dashboard' )
								: __( 'Go back to the theme showcase' )
						}
						href={
							! isPreviewingTheme()
								? dashboardLink || 'index.php'
								: 'themes.php'
						}
					/>
				) }
				<Heading
					className="edit-site-sidebar-navigation-screen__title"
					color={ 'white' }
					level={ 2 }
					size={ 20 }
				>
					{ ! isPreviewingTheme()
						? title
						: sprintf(
								'Previewing %1$s: %2$s',
								theme?.name?.rendered,
								title
						  ) }
				</Heading>
				{ actions }
			</HStack>

			<nav className="edit-site-sidebar-navigation-screen__content">
				{ description && (
					<p className="edit-site-sidebar-navigation-screen__description">
						{ description }
					</p>
				) }
				{ content }
			</nav>
		</VStack>
	);
}
