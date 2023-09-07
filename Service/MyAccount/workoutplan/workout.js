/* eslint-disable import/no-anonymous-default-export */
import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	withCredentials: false,
}

export default {
	WorkoutPlanDetails: () => {
		const custUuid = secureLocalStorage.getItem('custUuid')

		return axios.get(API_ENDPOINTS.GET_WORKOUT_PLAN, {
			headers: {
				...headers,
				isPhp: true,
				path: {custUuid},
			},
		})
	},

	workOuts: uuid => {
		const clientExerciseNameuuid = uuid?.clientExerciseNameuuid
		console.log('clientExerciseNameuuid', clientExerciseNameuuid)
		return axios.get(API_ENDPOINTS.GET_WORKOUTS, {
			headers: {
				...headers,
				isPhp: true,
				path: {clientExerciseNameuuid},
			},
		})
	},
}
