/* eslint-disable import/no-anonymous-default-export */
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
	TentList: (tentUserId, tentUserUuid) => {
		const exactUuid = tentUserId ? tentUserId : tentUserUuid
		return axios.get(API_ENDPOINTS.TENT_LIST, {headers: {...headers, isJava: true, path: {exactUuid}}})
	},
	tentUserList: params => {
		return axios.get(API_ENDPOINTS.TENT_USER_LIST, {headers: {...headers, isPhp: true}, params: { ...params }})
	},
}
