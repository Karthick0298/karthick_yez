import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'
import {csrf} from '../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'multipart/form-data',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}
const headers1 = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
	'X-SECURITY': csrf(),
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	HealthRecordsFile: (custUuid, currentUuid) => {
		const tentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('tentUuid') : null
		return axios.get(API_ENDPOINTS.HEALTH_RECORDS_DETAILS_LIST, {headers: {...headers, isPhp: true, path: {custUuid, currentUuid, tentUuid}}})
	},
	RecordShare: body => {
		return axios.post(API_ENDPOINTS.SHARE_RECORD, body, {headers: {...headers1, isPhp: true}})
	},
}
