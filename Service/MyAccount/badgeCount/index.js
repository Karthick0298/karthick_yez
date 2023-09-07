import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	CountIntegration: (custId, mastTentUuid) => {
		return axios.get(API_ENDPOINTS.COUNT_INTEGRATION_LIST, {headers: {...headers, isPhp: true, path: {custId, mastTentUuid}}})
	},
}
