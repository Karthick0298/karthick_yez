import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	ActiveDeviceList: () => {
		const custId = secureLocalStorage.getItem('userId')
		return axios.get(API_ENDPOINTS.ACTIVE_DEVICE_LIST, {headers: {...headers, isJava: true, path: {custId}}})
	},
}
