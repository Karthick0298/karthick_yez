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
	getClientMembership: params => {
		return axios.get(`${API_ENDPOINTS.GET_MEMBERSHIP_DETAILS_OF_CLIENT}`, {
			headers: {...headers, isJavaList: true},
			params: {...params},
		})
	},
}
