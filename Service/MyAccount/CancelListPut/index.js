import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../lib/Utils/csrf'
import secureLocalStorage from 'react-secure-storage'

const headers = {
	isAuthRequired: true,
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	CancelListPutList: appointmentUuid => {
		const body = {
			uuid: appointmentUuid,
			reason: secureLocalStorage.getItem('reason'),
			type: 'CUST',
		}
		return axios.put(API_ENDPOINTS.CANCEL_APPOINTMENT, body, {headers: {...headers, 'X-SECURITY': csrf(), isPhp: true}})
	},
}
