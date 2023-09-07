import {API_ENDPOINTS} from '../../src/constants/index'
import axios from 'axios'
import {csrf} from '../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: false,
	withCredentials: false,
	'X-SECURITY': csrf(),
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	requestDemo: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.post(API_ENDPOINTS.REQUEST_DEMO, result, {headers: {...headers, key: `${ivKey}`, isPhp: true}})
	},
}
