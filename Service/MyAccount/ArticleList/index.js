import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

export default {
	ArticleList: async (params, year) => {
		return await axios.get(API_ENDPOINTS.ARTICLE_LIST, {
			headers: {
				...headers,
				isPhp: true,
			},
			params: {...params, year},
		})
	},
}
