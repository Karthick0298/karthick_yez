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
	CityOptions: params => {
		return axios.get(API_ENDPOINTS.CITY_OPTIONS, {headers: {...headers, isCancel: true}, params: {...params}})
	},
}
