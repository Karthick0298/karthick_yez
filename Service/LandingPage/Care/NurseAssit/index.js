import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'

const headers = {
	// 'Content-Type': 'application/json;charset=UTF-8',
	// 'Access-Control-Allow-Origin': '*',
	// 'Access-Control-Allow-Credentials': 'true',
	// isAuthRequired: true,
	// withCredentials: false,
}

export default {
	NurseAssist: params => {
		return axios.get(API_ENDPOINTS.NURSE_ASSIST, {headers: {...headers, isJavaList: true}, params: {...params}})
	},
}
