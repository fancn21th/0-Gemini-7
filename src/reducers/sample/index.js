import * as actionTypes from '../../constants/actionTypes'

const Sample = (state = '', action) => {
	switch (action.type) {
	case actionTypes.GENERATE_UUID:
		return action.id
	default:
		return state
	}
}

export default Sample
