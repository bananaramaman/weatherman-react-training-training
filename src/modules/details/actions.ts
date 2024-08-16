import actionCreatorFactory, { Action } from 'typescript-fsa'
import { FetchForecastResponse } from '../api/types'

const actionCreator = actionCreatorFactory('Details')

// location id is the payload
export type FetchForecastPayload = Action<number>

// TODO create action to fetch forecast for a location id
export const fetchForecastAction = actionCreator.async<number, FetchForecastResponse, Error>('FETCH_FORECAST')
