import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../../lib/Utils/csrf'

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
	UserProfileListUpdate: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.put(API_ENDPOINTS.USER_PROFILE_LIST_UPDATE, result, {headers: {...headers, isJavaList: true, key: `${ivKey}`}})
	},
	UserProfileListSave: (publicKey, ivKey, token) => {
		const result = {data: publicKey}
		return axios.put(API_ENDPOINTS.USER_PROFILE_LIST_UPDATE, result, {
			headers: {...headers, Authorization: token, isJavaList: true, key: `${ivKey}`},
		})
	},
}
