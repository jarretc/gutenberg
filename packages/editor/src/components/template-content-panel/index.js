/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { privateApis as blockEditorPrivateApis } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { store as interfaceStore } from '@wordpress/interface';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';
import { TEMPLATE_POST_TYPE } from '../../store/constants';
import { store as editorStore } from '../../store';

const { BlockQuickNavigation } = unlock( blockEditorPrivateApis );

const POST_CONTENT_BLOCK_TYPES = [
	'core/post-title',
	'core/post-featured-image',
	'core/post-content',
];

const TEMPLATE_PART_BLOCK = 'core/template-part';

export default function TemplateContentPanel( { renderingMode } ) {
	const postContentBlockTypes = applyFilters(
		'editor.postContentBlockTypes',
		POST_CONTENT_BLOCK_TYPES
	);

	const { clientIds, postType } = useSelect(
		( select ) => {
			const { getCurrentPostType, getPostBlocksByName } =
				select( editorStore );
			const _postType = getCurrentPostType();
			return {
				postType: _postType,
				clientIds: getPostBlocksByName(
					TEMPLATE_POST_TYPE === _postType
						? TEMPLATE_PART_BLOCK
						: postContentBlockTypes
				),
			};
		},
		[ postContentBlockTypes ]
	);

	const { enableComplementaryArea } = useDispatch( interfaceStore );

	if ( renderingMode === 'post-only' && postType !== TEMPLATE_POST_TYPE ) {
		return null;
	}

	return (
		<PanelBody title={ __( 'Content' ) }>
			<BlockQuickNavigation
				clientIds={ clientIds }
				onSelect={ () => {
					enableComplementaryArea( 'core', 'edit-post/document' );
				} }
			/>
		</PanelBody>
	);
}
