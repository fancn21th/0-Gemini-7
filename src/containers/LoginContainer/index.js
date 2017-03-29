import React from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login'
import { login } from './actions'

class LoginContainer extends React.Component {
	render() {
		return (
            <div>
                <Login {...this.props} />
            </div>
		)
	}
}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = (dispatch) => ({
	login: (mobile, password, captcha) => dispatch(login(mobile, password, captcha))
})

LoginContainer.propTypes = {
	login: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
