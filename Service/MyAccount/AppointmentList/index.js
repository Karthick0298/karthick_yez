import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

export default {
	AppointmentList: () => {
		const custId = secureLocalStorage.getItem('userId')
		return axios.get(API_ENDPOINTS.APPOINTMENT_LIST, {headers: {...headers, isPhp: true, path: {custId}}})
	},
}
