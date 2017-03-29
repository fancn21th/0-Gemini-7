import { LOGIN } from './constants'

const login = (state = {}, action) => {
	switch (action.type){
	case LOGIN:
		return {
			...state,
			token : action.token
		}
	default:
		return state
	}
}

export default login