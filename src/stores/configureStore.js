import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import saga from '../containers/LoginContainer/sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware)

const configureStore = createStore(rootReducer, middleware)

sagaMiddleware.run(saga)

export default configureStore
