import actionCreatorFactory, { Action } from 'typescript-fsa'
import { Location } from '../api/types'

const actionCreator = actionCreatorFactory('Search')

// Fetches locations based on a query
export type FetchLocationsPayload = Action<string>
export const fetchLocationsAction = actionCreator.async<string, Location[], Error>('FETCH_LOCATIONS')

// Selects a location
export const locationSelectedAction = actionCreator<Location>('LOCATION_SELECTED')