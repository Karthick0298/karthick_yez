import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../lib/Utils/csrf'
import secureLocalStorage from 'react-secure-storage'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	Authorization: typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null,
	'X-SECURITY': csrf(),
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	PaymentResponse: data => {
		return axios.post(API_ENDPOINTS.PAYMENT_RESPONSE, data, {headers: {...headers, isJavaList: true}})
	},
}
