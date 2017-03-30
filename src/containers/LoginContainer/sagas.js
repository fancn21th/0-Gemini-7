import { LOGIN } from './constants'
import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { loginSucceed, loginFailed } from './actions'
import fetch from 'isomorphic-fetch'

export const loginToServer = () => {
	return fetch('http://localhost:10010/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		})
	}).then(response => response.json())
}

function* login() {
	try {
		const user = yield call(loginToServer)
		yield put(loginSucceed(user))
	} catch (e) {
		yield put(loginFailed(e.message))
	}
}

export function* loginSaga() {
	yield takeLatest(LOGIN, login)
}

export default loginSaga
