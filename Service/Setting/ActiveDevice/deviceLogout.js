import {API_ENDPOINTS} from '../../../src/constants'
import secureLocalStorage from 'react-secure-storage'
import {csrf} from '../../../lib/Utils/csrf'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	'X-SECURITY': csrf(),
	withCredentials: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	activeDeviceLogout: (currentDeviceUuid, data) => {
		const deviceUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('DeviceUuuid') : null
		return axios.post(API_ENDPOINTS.LOGOUT_DEVICE, data, {
			headers: {...headers, isJavaList: true, path: {deviceUuid: (currentDeviceUuid && currentDeviceUuid) || deviceUuid}},
		})
	},
}
