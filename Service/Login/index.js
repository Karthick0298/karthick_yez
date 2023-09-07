import {API_ENDPOINTS} from '../../src/constants'
import axios from 'axios'

const headers = {
	// 'Content-Type': 'application/json;charset=UTF-8',
	// 'Access-Control-Allow-Origin': '*',
	// 'Access-Control-Allow-Credentials': 'true',
	// isAuthRequired: false,
	// withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	CountryCodeGet: () => {
		return axios.get(API_ENDPOINTS.LOOK_UP, {headers: {...headers, isPhp: true}}, {timeout: 1})
	},
}
