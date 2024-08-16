import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from './actions'
import { Location } from '../api/types'

export interface StoreState {
	readonly searchResults: Location[]
	readonly loading: boolean
	readonly error?: Error
}

/**
 * The initial store state for this module.
 */
const INITIAL_STATE: StoreState = {
	searchResults: [],
	loading: false,
}

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(actions.fetchLocationsAction.started, (state): StoreState => ({
		// set loading to true and clear existing results and error
		...state, loading: true, searchResults: [], error: undefined,
	}))
	.case(actions.fetchLocationsAction.failed, (state, payload): StoreState => ({
		// set loading to false and store error
		...state, loading: false, error: payload.error,
	}))
	.case(actions.fetchLocationsAction.done, (state, payload): StoreState => ({
		// set loading to false and store results
		...state, loading: false, searchResults: payload.result,
	}))
