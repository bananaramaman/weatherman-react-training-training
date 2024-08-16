import { createStore, combineReducers, compose, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

/* Import reducers from our modules */
import * as search from '../search/reducer'
import * as details from '../details/reducer'
import rootSaga from './sagas'
import loggerMiddleware from '../../utils/logger'

/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
export interface RootStoreState {
	readonly search: search.StoreState
	readonly details: details.StoreState
}

/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
const reducer = (combineReducers<RootStoreState>({
	search: search.reducer,
	details: details.reducer,
}))

/**
 * Create the redux-saga middleware - which run constantly and listens for redux actions
 */
const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware, loggerMiddleware]

/**
 * Enhancers for the store.
 */
const enhancers = compose(
	/* Add the middlewares */
	applyMiddleware(...middlewares),
)

/**
 * Create the store. We do not include an initial state, as each of the module / duck
 * reducers includes its own initial state.
 */
export const store = createStore(reducer, enhancers)

/* Run the root saga */
sagaMiddleware.run(rootSaga)
