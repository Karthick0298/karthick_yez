import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}
export default {
	getQaAnswered: (tentUserUuid, mastTentUuid, qaFilter) => {
		return axios.get(API_ENDPOINTS.PROFILE_QA_ANSWERED, {
			headers: {
				...headers,
				isPhp: true,
				path: {tentUserUuid, mastTentUuid, qaFilter},
			},
		})
	},
}
