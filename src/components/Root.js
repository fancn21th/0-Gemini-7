import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Home from './Home'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
