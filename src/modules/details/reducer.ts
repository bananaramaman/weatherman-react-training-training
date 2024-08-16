import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Location, FetchForecastResponse } from '../api/types'
import * as searchActions from '../search/actions'
import { fetchForecastAction } from './actions'

export interface StoreState {
	readonly selectedLocation?: Location

	readonly forecast?: FetchForecastResponse
	readonly loading: boolean
	readonly error?: Error
}

/**
 * The initial store state for this module.
 */
const INITIAL_STATE: StoreState = {
	loading: false,
}

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(INITIAL_STATE)
	// set selected location
	.case(searchActions.locationSelectedAction, (state, payload): StoreState => ({
		...state, selectedLocation: payload,
	}))
	// handle forecast fetching started
	.case(fetchForecastAction.started, (state): StoreState => ({
		// set loading to true and clear existing forecast and error
		...state, loading: true, forecast: undefined, error: undefined,
	}))
	// handle forecast fetching failed
	.case(fetchForecastAction.failed, (state, payload): StoreState => ({
		// set loading to false and store error
		...state, loading: false, error: payload.error,
	}))
	// handle forecast fetching succeeded
	.case(fetchForecastAction.done, (state, payload): StoreState => ({
		// set loading to false and store the fetched forecast
		...state, loading: false, forecast: payload.result,
	}))