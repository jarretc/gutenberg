/**
 * Generates theme.json documentation using theme.json schema.
 * Reads from  : schemas/json/theme.json
 * Publishes to: docs/reference-guides/theme-json-reference/theme-json-living.md
 */

/**
 * External dependencies
 */
import fs from 'node:fs/promises';
import $RefParser from '@apidevtools/json-schema-ref-parser';

/**
 * @typedef {import('@apidevtools/json-schema-ref-parser').JSONSchema} JSONSchema
 */

/**
 * Path to theme json schema file.
 *
 * @type {URL}
 */
const THEME_JSON_SCHEMA_FILE = new URL(
	'../../schemas/json/theme.json',
	import.meta.url
);

/**
 * Path to docs file.
 *
 * @type {URL}
 */
const THEME_JSON_REF_DOC = new URL(
	'../../docs/reference-guides/theme-json-reference/theme-json-living.md',
	import.meta.url
);

/**
 * Start token for matching string in doc file.
 *
 * @type {string}
 */
const START_TOKEN = '<!-- START TOKEN Autogenerated - DO NOT EDIT -->';

/**
 * Start token for matching string in doc file.
 *
 * @type {string}
 */
const END_TOKEN = '<!-- END TOKEN Autogenerated - DO NOT EDIT -->';

/**
 * Regular expression using tokens for matching in doc file.
 * Note: `.` does not match new lines, so [^] is used.
 *
 * @type {RegExp}
 */
const TOKEN_PATTERN = new RegExp( START_TOKEN + '[^]*' + END_TOKEN );

/**
 * @typedef {(schema: JSONSchema) => boolean} PredicateFunction
 */

/**
 * @typedef {(schema: JSONSchema) => string} SerializerFunction
 */

/**
 * Serialize a schema that may use `anyOf` or `oneOf`.
 *
 * @see {@link https://json-schema.org/understanding-json-schema/reference/combining.html}
 *
 * @param {PredicateFunction}  predicate
 * @param {SerializerFunction} serializer
 * @param {JSONSchema}         schema
 * @return {string} flattened schema
 */
function serialize( predicate, serializer, schema ) {
	const schemas = predicate( schema )
		? [ schema ]
		: schema.anyOf || schema.oneOf || [];
	const formatted = schemas.filter( predicate ).map( serializer );
	return [ ...new Set( formatted ) ].join( ', ' );
}

/**
 * Format list of types.
 *
 * @type {SerializerFunction}
 */
const formatType = serialize.bind(
	null,
	( schema ) => schema.type,
	( schema ) => schema.type
);

/**
 * Format list of properties.
 *
 * @type {SerializerFunction}
 */
const formatProperties = serialize.bind(
	null,
	( schema ) => schema.properties,
	( schema ) => `_{ ${ Object.keys( schema.properties ).join( ', ' ) } }_`
);

/**
 * Format list of array properties.
 *
 * @type {SerializerFunction}
 */
const formatArrayProperties = serialize.bind(
	null,
	( schema ) => schema.items && schema.items.properties,
	( schema ) =>
		`_[ { ${ Object.keys( schema.items.properties ).join( ', ' ) } } ]_`
);

/**
 * Generate documentation from theme.json schema.
 *
 * @param {JSONSchema} themejson
 * @return {string} generated documentation
 */
function generateDocs( themejson ) {
	let autogen = '';

	// Settings
	const settings = themejson.definitions.settingsProperties.allOf.flatMap(
		( settingsProperties ) =>
			Object.entries( settingsProperties.properties )
	);
	// This property is only available at the root level, so it isn't included in the settingsProperties.
	settings.unshift( [
		'useRootPaddingAwareAlignments',
		themejson.properties.settings.allOf[ 1 ].properties
			.useRootPaddingAwareAlignments,
	] );
	autogen += '## Settings\n\n';
	for ( const [ section, data ] of settings ) {
		autogen += `### ${ section }\n\n`;
		autogen += `${ data.description }\n\n`;
		if ( data.properties ) {
			autogen += '| Property  | Type   | Default | Props  |\n';
			autogen += '| ---       | ---    | ---     | ---    |\n';
			const properties = Object.entries( data.properties );
			for ( const [ property, subschema ] of properties ) {
				const type = formatType( subschema );
				const defaultValue = subschema.default ?? '';
				const props =
					formatArrayProperties( subschema ) ||
					formatProperties( subschema );
				autogen += `| ${ property } | ${ type } | ${ defaultValue } | ${ props } |\n`;
			}
			autogen += '\n';
		}
		autogen += `---\n\n`;
	}

	// Styles
	const styles = Object.entries(
		themejson.definitions.stylesProperties.properties
	);
	autogen += '## Styles\n\n';
	for ( const [ section, data ] of styles ) {
		autogen += `### ${ section }\n\n`;
		autogen += `${ data.description }\n\n`;
		if ( data.properties ) {
			autogen += '| Property  | Type   | Props  |\n';
			autogen += '| ---       | ---    | ---    |\n';
			const properties = Object.entries( data.properties );
			for ( const [ property, subschema ] of properties ) {
				const props = formatProperties( subschema );
				const type = formatType( subschema );
				autogen += `| ${ property } | ${ type } | ${ props } |\n`;
			}
			autogen += '\n';
		}
		autogen += `---\n\n`;
	}

	// customTemplates
	autogen += '## customTemplates\n\n';
	autogen += `${ themejson.properties.customTemplates.description }\n\n`;
	autogen += `Type: \`${ themejson.properties.customTemplates.items.type }\`.\n\n`;
	autogen += '| Property | Description | Type |\n';
	autogen += '| ---      | ---         | ---  |\n';
	const customTemplatesProperties = Object.entries(
		themejson.properties.customTemplates.items.properties
	);
	for ( const [ property, subschema ] of customTemplatesProperties ) {
		const { description, type } = subschema;
		autogen += `| ${ property } | ${ description } | ${ type } |\n`;
	}
	autogen += '\n';

	// templateParts
	autogen += '## templateParts\n\n';
	autogen += `${ themejson.properties.templateParts.description }\n\n`;
	autogen += `Type: \`${ themejson.properties.templateParts.items.type }\`.\n\n`;
	autogen += '| Property | Description | Type |\n';
	autogen += '| ---      | ---         | ---  |\n';
	const templatePartsProperties = Object.entries(
		themejson.properties.templateParts.items.properties
	);
	for ( const [ property, subschema ] of templatePartsProperties ) {
		const { description, type } = subschema;
		autogen += `| ${ property } | ${ description } | ${ type } |\n`;
	}
	autogen += '\n';

	// Patterns
	autogen += '## patterns' + '\n\n';
	autogen += themejson.properties.patterns.description + '\n';
	autogen += 'Type: `' + themejson.properties.patterns.type + '`.\n\n';

	return `${ START_TOKEN }\n${ autogen }\n${ END_TOKEN }`;
}

/**
 * Main function.
 */
async function main() {
	const themejson = await $RefParser.dereference(
		THEME_JSON_SCHEMA_FILE.pathname,
		{
			parse: { binary: false, text: false, yaml: false },
			resolve: { external: false },
		}
	);

	let docsContent = await fs.readFile( THEME_JSON_REF_DOC, {
		encoding: 'utf8',
		flag: 'r',
	} );

	// Replace auto generated part with new generated docs.
	const autogen = generateDocs( themejson );
	docsContent = docsContent.replace( TOKEN_PATTERN, autogen );

	// Write back out.
	await fs.writeFile( THEME_JSON_REF_DOC, docsContent, { encoding: 'utf8' } );
}

main().catch( ( error ) => {
	console.error( error );
	process.exit( 1 );
} );
