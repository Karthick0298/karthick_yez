import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	Authorization: `${typeof window !== 'undefined' && secureLocalStorage.getItem('token')}`,
	withCredentials: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	UserProfileList: custUuid => {
		return axios.get(API_ENDPOINTS.USER_PROFILE_LIST, {
			headers: {
				...headers,
				isJavaList: true,
			},
		})
	},
}
