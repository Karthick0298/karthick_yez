import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import moment from 'moment'
import {csrf} from '../../../lib/Utils/csrf'

// const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	'X-SECURITY': csrf(),
	withCredentials: false,
}

const currentTime = moment().format()

const body = {
	status: false,
	logoutTime: currentTime,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	LogoutDevice: (deviceUuid, token) => {
		return axios.post(API_ENDPOINTS.LOGOUT_DEVICE, body, {headers: {...headers, Authorization: token, isJavaList: true, path: {deviceUuid}}})
	},
}
