import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../../lib/Utils/csrf'
import secureLocalStorage from 'react-secure-storage'

const headers = {
	'Content-Type': 'multipart/form-data',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	'X-SECURITY': csrf(),
	withCredentials: false,
}

const headers1 = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	'X-SECURITY': csrf(),
	withCredentials: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	sendUploadFile: data => {
		const custId = secureLocalStorage.getItem('custUuid')
		return axios.post(API_ENDPOINTS.PROFILE_PHOTO_UPLOAD, data, {headers: {...headers, isPhp: true, path: {custId}}})
	},
	deleteFile: (data, logoUuid) => axios.delete(API_ENDPOINTS.FILE_DELETE, {headers: {...headers1, isPhp: true, path: {logoUuid}}, data: {...data}}),
}
