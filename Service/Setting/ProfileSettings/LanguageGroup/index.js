import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'

const headers = {
	// 'Content-Type': 'application/json;charset=UTF-8',
	// 'Access-Control-Allow-Origin': '*',
	// 'Access-Control-Allow-Credentials': 'true',
	// isAuthRequired: false,
	// withCredentials: false,
}

export default {
	LanguageGroup: () => {
		return axios.get(API_ENDPOINTS.LANGUAGE_GROUP, {headers: {...headers, isCancel: true}}, {timeout: 1})
	},
}
