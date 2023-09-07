import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'
import {csrf} from '../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	Authorization: typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null,
	'X-SECURITY': csrf(),
	withCredentials: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	AddCart: body => {
		return axios.post(API_ENDPOINTS.ADD_CART, body, {headers: {...headers, isJavaList: true}})
	},
}
