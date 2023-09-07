import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: false,
}

export default {
	YearList: () => {
		return axios.get(API_ENDPOINTS.YEAR_PICKER_LIST, {headers: {...headers, isPhp: true}})
	},
}
