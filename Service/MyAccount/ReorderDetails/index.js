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
	ReorderDetails: () => {
		const orderDetails = secureLocalStorage.getItem('orderDetails')
		const body = {
			reOrderId: orderDetails,
		}
		return axios.post(API_ENDPOINTS.REORDER_DETAILS, body, {headers: {...headers, isPhp: true, 'X-SECURITY': csrf(), path: {orderDetails}}})
	},
}
