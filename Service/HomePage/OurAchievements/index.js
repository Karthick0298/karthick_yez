import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: false,
	withCredentials: false,
}

export default {
	LandingPageCount: () => {
		return axios.get(API_ENDPOINTS.LANDING_PAGE_COUNT, {headers: {...headers, isPhp: true}})
	},
}
