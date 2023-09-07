import axios from 'axios'
import {API_ENDPOINTS} from '../../../src/constants'
import {csrf} from '../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: false,
	'X-SECURITY': csrf(),
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	setPinCode: (publicKey, ivKey, token) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.SET_PIN_CODE}`, result, {headers: {...headers, Authorization: `${token}`, isAes: true, key: `${ivKey}`}})
	},
	setValidatePin: (publicKey, ivKey, token) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.VALIDATE_PIN}`, result, {headers: {...headers, isAes: true, key: `${ivKey}`}})
	},
}
