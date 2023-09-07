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
	AppointmentDetails: (appointmentUuid, tentUuid) => {
		return axios.get(API_ENDPOINTS.APPOINTMENT_DETAILS, {headers: {...headers, isPhp: true, path: {appointmentUuid, tentUuid}}})
	},
	BillingDetails: appointmentUuid => {
		const Appointmentuuid = appointmentUuid
		return axios.get(API_ENDPOINTS.BILLING_LIST, {headers: {...headers, isPhp: true, path: {appointmentUuid}}})
	},
}
