import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

export default {
	FeedbackListYear: async params => {
		return await axios.get(API_ENDPOINTS.FEEDBACK_LIST_YEAR, {
			headers: {
				...headers,
				isB2b: true,
			},
			params: {...params},
		})
	},
}
