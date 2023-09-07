import {API_ENDPOINTS} from '../../../src/constants'
import axios from 'axios'
import {csrf} from '../../../lib/Utils/csrf'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: true,
	'X-SECURITY': csrf(),
	withCredentials: false,
}

const body = {
	appMail: true,
	appSms: true,
	emailAnnouncement: true,
	smsAnnouncement: true,
	emailFeedback: true,
	smsFeedback: true,
	emailHealthtips: true,
	smsHealthtips: true,
	emailSavings: true,
	smsSavings: true,
	emailInfo: true,
	smsInfo: true,
	whatsappAllinfo: true,
	userType: 'CUS',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	NotificationUpdate: () => {
		const custId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
		return axios.post(API_ENDPOINTS.NOTIFICATION_UPDATE, body, {headers: {...headers, isJava: true, path: {custId}}})
	},
}
