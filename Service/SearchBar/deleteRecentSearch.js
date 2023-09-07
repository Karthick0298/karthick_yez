import {API_ENDPOINTS} from '../../src/constants'
import axios from 'axios'
import {csrf} from '../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: false,
	withCredentials: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	deleteRecentSearch: searchHistoryUuid => {
		return axios.delete(API_ENDPOINTS.DELETE_RECENT_SEARCH, {
			headers: {...headers, 'X-SECURITY': csrf(), isJavaList: true, path: {searchHistoryUuid}},
		})
	},
}
