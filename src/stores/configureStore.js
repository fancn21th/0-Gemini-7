import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import saga from '../containers/LoginContainer/sagas'
import { routerMiddleware, routerReducer } from 'react-router-redux'

/* eslint-disable no-underscore-dangle */
const configureStore = ( browserHistory ) => {
	const sagaMiddleware = createSagaMiddleware()
	const _routerMiddleware = routerMiddleware(browserHistory)

	const middlewares = [
		sagaMiddleware,
		_routerMiddleware,
	]

	const middleware = applyMiddleware(...middlewares)

	const store = createStore(
		combineReducers({
			...reducers,
			routing: routerReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		middleware
	)

	sagaMiddleware.run(saga)

	return store
}
/* eslint-enable */

export default configureStore
