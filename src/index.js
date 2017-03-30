import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores/configureStore'

import Home from './containers/Home'
import LoginContainer from './containers/LoginContainer'

import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.css'

const store = configureStore(browserHistory)

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={ store }>
		<Router histroy={ history }>
			<Route path="/" component={Home} />
			<Route path="/login" component={LoginContainer} />
		</Router>
	</Provider>,
    document.getElementById('root')
)
