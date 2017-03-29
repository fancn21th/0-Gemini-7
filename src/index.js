import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root/Root'
import configureStore from './stores/configureStore'

import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.css'

render(
    <Root store={configureStore}/>,
    document.getElementById('root')
)
