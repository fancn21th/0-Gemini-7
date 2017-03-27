import React from 'react'
import { connect } from 'react-redux'
import { sample } from '../../actions'

const Login = () => (
    <div class="container">
        <form class="form-signin">
            <h2 class="form-signin-heading">用户注册</h2>

            <label for="_inputPhone" class="sr-only">Email address</label>
            <input type="email" id="_inputPhone" class="form-control" placeholder="手机号" required />

            <label for="_inputPassword" class="sr-only">Password</label>
            <input type="password" id="_inputPassword" class="form-control" placeholder="密码" required />
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> 自动登录
                    </label>
                    <a>忘记密码</a>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
        </form>
    </div>
)

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch) => ({
	onLoginClick() {
		dispatch(sample())
	}
})

Login.propTypes = {
	onLoginClick: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
