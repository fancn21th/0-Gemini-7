import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import saga from '../containers/LoginContainer/sagas'
import { routerMiddleware, routerReducer } from 'react-router-redux'

/* eslint-disable no-underscore-dangle */
const configureStore = ( initialState = {}, history ) => {
	const sagaMiddleware = createSagaMiddleware()

	const middlewares = [
		sagaMiddleware,
		routerMiddleware(history),
	]

	const enhancers = [
		applyMiddleware(...middlewares),
	]

	const store = createStore(
		combineReducers({
			...reducers,
			routing: routerReducer
		}),
		initialState,
		compose(...enhancers)
	)

	sagaMiddleware.run(saga)

	return store
}
/* eslint-enable */

export default configureStore
