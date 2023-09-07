import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'

const headers = {
	isAuthRequired: true,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	CancelAppointmentList: () => {
		const mastLookuptype = 'APC'
		return axios.get(API_ENDPOINTS.MASTER_LOOKUP, {headers: {...headers, isCancel: true, path: {mastLookuptype}}})
	},
}
