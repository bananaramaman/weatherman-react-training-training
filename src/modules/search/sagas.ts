import { SagaIterator } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'

import * as actions from '../search/actions'
import * as RootNavigation from '../navigation/NavigationManager'

function handleLocationSelected() {
	// could extract location information from the action payload to put into url (eg /details/{locationId})
	RootNavigation.navigateToDetails()
}

export default function* (): SagaIterator {
	yield takeEvery(actions.locationSelectedAction, handleLocationSelected)
}
