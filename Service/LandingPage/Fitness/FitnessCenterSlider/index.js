import {API_ENDPOINTS} from '../../../../src/constants'
import axios from 'axios'

const headers = {
	// 'Content-Type': 'application/json;charset=UTF-8',
	// 'Access-Control-Allow-Origin': '*',
	// 'Access-Control-Allow-Credentials': 'true',
}

export default {
	FitnessCenters: () => {
		return axios.get(API_ENDPOINTS.FITNESS_CENTERS, {headers: {...headers, isJavaList: true}})
	},
}
