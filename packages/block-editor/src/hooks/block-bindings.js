/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { store as blocksStore } from '@wordpress/blocks';
import {
	BaseControl,
	PanelBody,
	MenuGroup,
	MenuItem,
	privateApis as componentsPrivateApis,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { plus, reset } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	canBindAttribute,
	getBindableAttributes,
} from '../hooks/use-bindings-attributes';
import { unlock } from '../lock-unlock';
import InspectorControls from '../components/inspector-controls';
import { store as blockEditorStore } from '../store';

const {
	DropdownMenuV2: DropdownMenu,
	DropdownMenuItemV2: DropdownMenuItem,
	DropdownMenuItemLabelV2: DropdownMenuItemLabel,
	DropdownMenuItemHelpTextV2: DropDownMenuItemHelpText,
} = unlock( componentsPrivateApis );

export const BlockBindingsPanel = ( { name, metadata } ) => {
	const { bindings } = metadata || {};
	const { sources } = useSelect( ( select ) => {
		const _sources = unlock(
			select( blocksStore )
		).getAllBlockBindingsSources();
		return {
			sources: _sources,
		};
	}, [] );

	const bindableAttributes = getBindableAttributes( name );

	// Don't show not allowed attributes.
	// Don't show the bindings connected to pattern overrides in the inspectors panel.
	// TODO: Explore if this should be abstracted to let other sources decide.
	const filteredBindings = { ...bindings };
	Object.keys( filteredBindings ).forEach( ( key ) => {
		if (
			! canBindAttribute( name, key ) ||
			filteredBindings[ key ].source === 'core/pattern-overrides'
		) {
			delete filteredBindings[ key ];
		}
	} );
	const data = useSelect( ( select ) => {
		// Access the core/editor store
		const { getEditedPostAttribute } = select( 'core/editor' );

		// Fetch the meta data for the current post
		const metaData = getEditedPostAttribute( 'meta' );
		// Return the meta data if you need to use it in your component
		return metaData;
	}, [] );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	const { _id } = useSelect( ( select ) => {
		const { getSelectedBlockClientId } = select( blockEditorStore );

		const selectedBlockClientId = getSelectedBlockClientId();
		return {
			_id: selectedBlockClientId,
		};
	}, [] );

	const onCloseNewConnection = ( value, attribute ) => {
		// Assuming the block expects a flat structure for its metadata attribute
		const newMetadata = {
			...metadata,
			// Adjust this according to the actual structure expected by your block
			bindings: {
				...bindings,
				[ attribute ]: {
					source: 'core/post-meta',
					args: { key: value },
				},
			},
		};

		// Update the block's attributes with the new metadata
		updateBlockAttributes( _id, {
			metadata: newMetadata,
		} );
	};

	const removeConnection = ( key ) => {
		const newMetadata = { ...metadata };
		delete newMetadata.bindings[ key ];
		if ( Object.keys( newMetadata.bindings ).length === 0 ) {
			delete newMetadata.bindings;
		}
		updateBlockAttributes( _id, {
			metadata:
				Object.keys( newMetadata ).length === 0
					? undefined
					: newMetadata,
		} );
	};

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Attributes' ) }
				className="components-panel__block-bindings-panel"
			>
				<BaseControl
					help={ __( 'Attributes connected to various sources.' ) }
				>
					<MenuGroup isBordered isSeparated size="large">
						{ /* TODO: Hide this input if all metadata attributes are bind */ }
						<DropdownMenu
							trigger={
								<MenuItem
									iconPosition="right"
									icon={ plus }
									className="block-editor-link-control__search-item"
								>
									{ __( 'Add new connection' ) }
								</MenuItem>
							}
							placement="left"
							gutter={ 20 }
						>
							{ bindableAttributes.map( ( attribute ) => (
								<DropdownMenu
									key={ attribute }
									trigger={
										<DropdownMenuItem>
											<DropdownMenuItemLabel>
												{ attribute }
											</DropdownMenuItemLabel>
										</DropdownMenuItem>
									}
									placement="left"
									gutter={ 10 }
								>
									{ Object.keys( data ).map( ( key ) => (
										<DropdownMenuItem
											key={ key }
											onClick={ () => {
												onCloseNewConnection(
													key,
													attribute
												);
											} }
										>
											<DropdownMenuItemLabel>
												{ data[ key ] }
											</DropdownMenuItemLabel>
											<DropDownMenuItemHelpText>
												{ key }
											</DropDownMenuItemHelpText>
										</DropdownMenuItem>
									) ) }
								</DropdownMenu>
							) ) }
						</DropdownMenu>
						<MenuGroup>
							{ Object.keys( filteredBindings ).map( ( key ) => {
								const source = sources[
									filteredBindings[ key ].source
								]
									? sources[ filteredBindings[ key ].source ]
											.label
									: filteredBindings[ key ].source;
								return (
									<MenuItem
										key={ key }
										onClick={ () =>
											removeConnection( key )
										}
										icon={ reset }
									>
										{ key } - { source }
									</MenuItem>
								);
							} ) }
						</MenuGroup>
					</MenuGroup>
				</BaseControl>
			</PanelBody>
		</InspectorControls>
	);
};

export default {
	edit: BlockBindingsPanel,
	attributeKeys: [ 'metadata' ],
	hasSupport() {
		return true;
	},
};
