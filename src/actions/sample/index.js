import { v4 } from 'node-uuid'
import * as actionTypes from '../../constants/actionTypes'

export const sample = () => ({
	type: actionTypes.GENERATE_UUID,
	id: v4()
})
