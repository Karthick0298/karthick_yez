import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	DietPlanDetails: body => {
		return axios.post(API_ENDPOINTS.GET_DIET_PLAN_DETAILS, body, {headers: {...headers, isPhp: true, 'X-SECURITY': csrf()}})
	},
	DietPlanList: params => {
		return axios.get(API_ENDPOINTS.GET_DIET_PLAN_LIST, {
			headers: {
				...headers,
				isPhp: true,
			},
			params: {...params},
		})
	},
}
