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
	DoctorDetails: (mastTentUuid, tentUserUuid) => {
		const userType = typeof window !== 'undefined' ? secureLocalStorage.getItem('userType') : null
		return axios.get(API_ENDPOINTS.DOCTOR__DETAILS, {
			headers: {
				...headers,
				isJavaList: true,
				path: {mastTentUuid, userType, tentUserUuid},
			},
		})
	},
}
