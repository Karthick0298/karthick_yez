import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	// 'Content-Type': 'application/json;charset=UTF-8',
	// 'Access-Control-Allow-Origin': '*',
	// 'Access-Control-Allow-Credentials': 'true',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	SpecialitiesPriceList: symtomsUuid => {
		return axios.get(API_ENDPOINTS.Specialities_Price_List, {headers: {...headers, isJavaList: true, path: {symtomsUuid}}})
	},
}
