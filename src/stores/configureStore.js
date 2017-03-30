import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import saga from '../containers/LoginContainer/sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware)

/* eslint-disable no-underscore-dangle */
const configureStore = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	middleware
)
/* eslint-enable */

sagaMiddleware.run(saga)

export default configureStore
