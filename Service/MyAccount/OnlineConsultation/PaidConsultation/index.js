import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	OnlineConsultationList: custUuid => {
		return axios.get(API_ENDPOINTS.ONLINECONSULTATION_PAID_LIST, {
			headers: {
				...headers,
				isPhp: true,
				path: {custUuid},
			},
			// params: {...params},
		})
	},

	PaymentRefund: body => {
		return axios.post(API_ENDPOINTS.PAYMENT_REFUND, body, {
			headers: {
				...headers,
				isJavaList: true,
				'X-SECURITY': csrf(),
			},
		})
	},
}
