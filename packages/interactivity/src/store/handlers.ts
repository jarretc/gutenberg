/**
 * External dependencies
 */
import { signal, type Signal } from '@preact/signals';

/**
 * Internal dependencies
 */
import { proxify, getProxy, shouldProxy } from './proxies';
import { Property } from './properties';
import { withScope } from '../utils';

const proxyToProps: WeakMap< object, Map< string, Property > > = new WeakMap();
const objToIterable = new WeakMap< object, Signal< number > >();

const getProperty = ( target: object, key: string ) => {
	const proxy = getProxy( target );
	if ( ! proxyToProps.has( proxy ) ) {
		proxyToProps.set( proxy, new Map() );
	}
	const props = proxyToProps.get( proxy )!;
	if ( ! props.has( key ) ) {
		props.set( key, new Property( proxy ) );
	}
	return props.get( key )!;
};

const descriptor = Object.getOwnPropertyDescriptor;

export const stateHandlers: ProxyHandler< object > = {
	get( target: object, key: string, receiver: object ): any {
		/*
		 * First, we get a reference of the property we want to access. The
		 * property object is automatically instanciated if needed.
		 */
		const prop = getProperty( target, key );

		/*
		 * When the value is a getter, it updates the internal getter value.
		 * This change triggers the signal only when the getter value changes.
		 */
		const getter = descriptor( target, key )?.get;
		if ( getter ) {
			prop.update( { get: getter } );
			const value = prop.getComputed( withScope ).value;
			return value;
		}

		/*
		 * When it is not a getter, we get the actual value an apply different
		 * logic depending on the type of value. As before, the internal signal
		 * is updated, which only triggers a re-render when the value changes.
		 */
		const value = Reflect.get( target, key, receiver );
		prop.update( {
			value: shouldProxy( value )
				? proxify( value, stateHandlers, prop.namespace )
				: value,
		} );

		return prop.getComputed().value;
	},

	set(
		target: object,
		key: string,
		value: unknown,
		receiver: object
	): boolean {
		if ( typeof descriptor( target, key )?.set === 'function' ) {
			return Reflect.set( target, key, value, receiver );
		}

		const isNew = ! ( key in target );
		const result = Reflect.set( target, key, value, receiver );

		if ( result ) {
			if ( isNew && objToIterable.has( target ) ) {
				objToIterable.get( target )!.value++;
			}

			if ( Array.isArray( target ) ) {
				const length = getProperty( target, 'length' );
				length.update( { value: target.length } );
			}
		}

		return result;
	},

	defineProperty(
		target: object,
		key: string,
		desc: PropertyDescriptor
	): boolean {
		const prop = getProperty( target, key );
		let { value } = desc;
		if ( value && shouldProxy( value ) ) {
			value = proxify( value, stateHandlers, prop.namespace );
		}
		const result = Reflect.defineProperty(
			target,
			key,
			value ? { ...desc, value } : desc
		);

		if ( result ) {
			prop.update( desc );
		}
		return result;
	},

	deleteProperty( target: object, key: string ): boolean {
		const result = Reflect.deleteProperty( target, key );

		if ( result ) {
			const prop = getProperty( target, key );
			prop.update( {} );

			if ( objToIterable.has( target ) ) {
				objToIterable.get( target )!.value++;
			}
		}

		return result;
	},

	ownKeys( target: object ): ( string | symbol )[] {
		if ( ! objToIterable.has( target ) ) {
			objToIterable.set( target, signal( 0 ) );
		}
		( objToIterable as any )._ = objToIterable.get( target )!.value;
		return Reflect.ownKeys( target );
	},
};
