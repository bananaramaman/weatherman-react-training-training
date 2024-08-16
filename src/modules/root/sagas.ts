import { all } from 'redux-saga/effects'

import apiSaga from '../api/sagas'
import searchSaga from '../search/sagas'

export default function* rootSaga(): Generator {
	yield all([
		apiSaga(),
		searchSaga(),
	])
}