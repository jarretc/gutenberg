<?php
/**
 * Temporary compatibility code for new functionalitites/changes related to block bindings APIs present in Gutenberg.
 *
 * @package gutenberg
 */

/**
 * Adds the block bindings sources registered in the server to the editor settings.
 *
 * This allows to bootstrap them in the editor.
 *
 * @param array $settings The block editor settings from the `block_editor_settings_all` filter.
 * @return array The editor settings including the block bindings sources.
 */
function gutenberg_add_server_block_bindings_sources_to_editor_settings( $editor_settings ) {
	$registered_block_bindings_sources = get_all_registered_block_bindings_sources();
	if ( ! empty( $registered_block_bindings_sources ) ) {
		// Initialize array.
		$editor_settings['blockBindings'] = array();
		foreach ( $registered_block_bindings_sources as $source_name => $source_properties ) {
			// Add source with the label to editor settings.
			$editor_settings['blockBindings'][ $source_name ] = array(
				'label' => $source_properties->label,
			);
			// Add `usesContext` property if exists.
			if ( ! empty( $source_properties->uses_context ) ) {
				$editor_settings['blockBindings'][ $source_name ]['usesContext'] = $source_properties->uses_context;
			}
		}
	}
	return $editor_settings;
}

add_filter( 'block_editor_settings_all', 'gutenberg_add_server_block_bindings_sources_to_editor_settings', 10 );
