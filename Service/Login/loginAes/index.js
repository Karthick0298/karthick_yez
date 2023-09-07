import axios from 'axios'
import {API_ENDPOINTS} from '../../../src/constants'
import {csrf} from '../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: false,
	'X-SECURITY': csrf(),
	withCredentials: false,
}

const headers1 = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	'X-SECURITY': csrf(),
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	setSignUp: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.SIGN_UP}`, result, {headers: {...headers, isAes: true, key: `${ivKey}`}})
	},
	sendOtp: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.MOBILE_RESEND_OTP}`, result, {headers: {...headers, isAes: true, key: `${ivKey}`}})
	},
	emailResend: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.EMAIL_RESEND_OTP}`, result, {headers: {...headers, isAes: true, key: `${ivKey}`}})
	},
	validateOtp: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.VALIDATE_OTP}`, result, {headers: {...headers, isAes: true, key: `${ivKey}`}})
	},
	saveDevice: (publicKey, ivKey, userId, token) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.SAVE_ACTIVE_DEVICE}`, result, {
			headers: {...headers1, Authorization: `${token}`, isJava: true, key: `${ivKey}`, path: {userId}},
		})
	},
	verifyEmail: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.post(`${API_ENDPOINTS.VERIFY_EMAIL_TOKEN}`, result, {headers: {...headers, isAes: true, key: `${ivKey}`}})
	},
	multiuser: (userId, token) => {
		return axios.get(`${API_ENDPOINTS.MULTI_TENT_USER}`, {headers: {...headers, Authorization: `${token}`, isJava: true, path: {userId}}})
	},
}
