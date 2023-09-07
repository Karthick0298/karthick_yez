import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import _ from 'lodash'
import {csrf} from '../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'multipart/form-data',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
	'X-SECURITY': csrf(),
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	sendUploadFile: (data, custUuid, currentUuid, temp) => {
		return axios.post(API_ENDPOINTS.UPLOAD_FILE, data, {
			headers: {...headers, isPhp: true, path: {currentUuid, custUuid}},
			params: _.isEmpty(temp?.title) ? {} : {...temp},
		})
	},
}
