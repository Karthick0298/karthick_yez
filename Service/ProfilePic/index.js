import {API_ENDPOINTS} from '../../src/constants'
import axios from 'axios'
import {csrf} from '../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	withCredentials: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getCusProfilePic: (custUuid, token) => {
		return axios.get(API_ENDPOINTS.GET_PROFILE_PIC, {
			headers: {
				...headers,
				Authorization: token,
				isJavaList: true,
				path: {custUuid},
			},
		})
	},
}
