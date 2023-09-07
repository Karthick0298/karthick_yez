import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../lib/Utils/csrf'

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
	DeleteUser: data => {
		return axios.delete(API_ENDPOINTS.DELETE_USER, {headers: {...headers, isJava: true}, data: {...data}})
	},
}
