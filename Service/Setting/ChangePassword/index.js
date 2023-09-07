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
	ChangePassword: body => {
		return axios
			.post(API_ENDPOINTS.CHANGE_PASSWORD, body, {headers: {...headers, isJava: true}})
			.then(response => {
				console.log('changePassword', response)
			})
			.catch(error => {
				console.log('cp error', error)
			})
	},
}
