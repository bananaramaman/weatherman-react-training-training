import { SagaIterator } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchLocationsAction, FetchLocationsPayload } from '../search/actions'
import { fetchLocations } from '../api/functions'
import { Location } from '../api/types'
import { fetchForecastAction, FetchForecastPayload } from '../details/actions'
import { fetchForecast } from '../api/functions'
import { FetchForecastResponse } from '../api/types'

function* handleFetchLocations(action: FetchLocationsPayload): SagaIterator {
	const query: string = action.payload
	try {
		const result: Location[] | undefined = yield call(fetchLocations, query)
		if (result) {
			yield put(fetchLocationsAction.done({ params: action.payload, result }))
		}
	} catch (error) {
		yield put(fetchLocationsAction.failed({ params: action.payload, error: error as Error }))
	}
}

function* handleFetchForecast(action: FetchForecastPayload): SagaIterator {
	// TODO implement saga to fetch forecast
	const locationId: number = action.payload
	try {
		// Call the API function to fetch the forecast
		const result: FetchForecastResponse = yield call(fetchForecast, locationId)
		// Dispatch success action with the result
		yield put(fetchForecastAction.done({ params: locationId, result }))
	} catch (error) {
		// Dispatch failure action with the error
		yield put(fetchForecastAction.failed({ params: locationId, error: error as Error }))
	}
}

export default function* (): SagaIterator {
	yield takeEvery(fetchLocationsAction.started, handleFetchLocations)
	yield takeEvery(fetchForecastAction.started, handleFetchForecast)
}
