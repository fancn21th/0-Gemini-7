import React from 'react'
import { connect } from 'react-redux'
import { sample } from '../../actions'
import Login from '../../components/Login'

class LoginContainer extends React.Component {
	render() {
		return (
            <div>
                <Login {...this.props} />
            </div>
		)
	}
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch) => ({
	login: (phone, password) => dispatch()
})

Login.propTypes = {
	login: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
