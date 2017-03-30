import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Home from '../Home'
import LoginContainer from '../LoginContainer'

const Root = ({ store }) => {

	const history = syncHistoryWithStore(browserHistory, store)

	return (
        <Provider store={store}>
            <Router histroy={ history }>
                <Route path="/" component={Home} />
                <Route path="/login" component={LoginContainer} />
            </Router>
        </Provider>
	)
}

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
