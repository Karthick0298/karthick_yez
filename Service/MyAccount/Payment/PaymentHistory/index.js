import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

export default {
	PaymentList: params => {
		return axios.get(API_ENDPOINTS.PAYMENT_HISTORY_LIST, {headers: {...headers, isPhp: true}, params: {...params}})
	},
}
