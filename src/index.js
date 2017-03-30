import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores/configureStore'

import App from './containers/App'
import Home from './containers/Home'
import LoginContainer from './containers/LoginContainer'

import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.css'

const initialState = {}
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

history.listen( location => {
	console.log(location)
})

const About = () => (
	<div>About</div>
)

render(
	<Provider store={ store }>
		<Router histroy={ history }>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="login" component={LoginContainer} />
				<Route path="about" component={About} />
			</Route>
		</Router>
	</Provider>,
    document.getElementById('root')
)
