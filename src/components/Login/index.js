import React from 'react'
import { phoneValidator } from '../../utilities/validator'

class Login extends React.Component {
    static propTypes = {
        login: React.PropTypes.func.isRequired
    }

    state = {}

    login = () => {
        if(!this.isPhoneValidated()){
            this.setState({
                errorText: '请填写有效的邮箱'
            })
        }else{
            this.setState({
                errorText: null
            })
        }
    }

    isPhoneValidated = () => {
        const phone = this.phoneField.value
        return phoneValidator.validate(phone)
    }

    render() {
        const phoneErrorField = this.state.errorText ? (
            <div> {this.state.errorText} </div>
            ) : null

        return (
            <div class="container">
                <div class="form-signin">
                    <h2 class="form-signin-heading">用户注册</h2>

                    <label for="_inputPhone" class="sr-only">手机号</label>
                    <input type="email"
                           id="_inputPhone"
                           class="form-control"
                           placeholder="手机号"
                           required
                           ref={(f) => {
                               this.phoneField = f
                           }}
                    />
                    {phoneErrorField}
                    <label for="_inputPassword" class="sr-only">密码</label>
                    <input type="password"
                           id="_inputPassword"
                           class="form-control"
                           placeholder="密码"
                           required
                           ref={(f) => {
                               this.passwordField = f
                           }}
                    />

                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/> 自动登录
                        </label>
                        <a>忘记密码</a>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block"
                            onClick={this.login}>登录
                    </button>
                </div>
            </div>
        )
    }
}

export default Login
