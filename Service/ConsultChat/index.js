import {API_ENDPOINTS} from '../../src/constants/index'
import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'
import {csrf} from '../../lib/Utils/csrf'

const getHeaders = () => {
	const bToken = typeof window !== 'undefined' && secureLocalStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': 'true',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		Authorization: `Bearer ${bToken}`,
	}
	return headers
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getFileDownloadUrl: (uuid, token) => {
		return `https://sit.rigelsoft.com/services/file/download/${uuid}?token=${encodeURIComponent(token)}`
	},
	consultMessageSaveText: body => {
		return axios.post(API_ENDPOINTS.ONLINECONSULT_MESSAGE_SAVE_TEXT, body, {
			headers: {...getHeaders(), isConsult: true, 'X-SECURITY': csrf()},
		})
	},
	consultMessageSaveEmoji: body => {
		return axios.post(API_ENDPOINTS.ONLINECONSULT_MESSAGE_SAVE_EMOJI, body, {
			headers: {...getHeaders(), isConsult: true, 'X-SECURITY': csrf()},
		})
	},
	consultMessageSaveFile: body => {
		return axios.post(API_ENDPOINTS.ONLINECONSULT_MESSAGE_SAVE_FILE, body, {
			headers: {...getHeaders(), isConsult: true, 'X-SECURITY': csrf()},
		})
	},
	consultMessageSaveDeclineCall: body => {
		return axios.post(API_ENDPOINTS.ONLINDCONSULT_MESSAGE_SAVEDECLINECALL, body, {
			headers: {...getHeaders(), isConsult: true, 'X-SECURITY': csrf()},
		})
	},
	uploadingFileToCustomer: (body, custUuid, consultUuid) => {
		return axios.post(API_ENDPOINTS.ONLINECONSULT_UPLOAD_FILE, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isPhp: true, path: {custUuid, consultUuid}},
		})
	},
	consultMeetingInitiate: body => {
		return axios.post(API_ENDPOINTS.ONLINECONSULT_MEETING_SAVE, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},
	consultMeetingCallDecline: body => {
		return axios.put(API_ENDPOINTS.ONLINECONSULT_MEETING_CALLDECLINE, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},
	consultMeetingCallLeave: body => {
		return axios.put(API_ENDPOINTS.ONLINECONSULT_MEETING_CALL_LEAVE, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},
	consultMeetingCustomerCallAccept: body => {
		return axios.put(API_ENDPOINTS.ONLINECONSULT_MEETING_CUSTOMERCALLACCEPT, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},

	consultDeleteSpecificMeeting: (appointmentUuid, meetingUuid) => {
		return axios.delete(`${API_ENDPOINTS.ONLINECONSULT_DELETE_SPECIFICMEETING}?appointmentUuid=${appointmentUuid}&meetingUuid=${meetingUuid}`, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},
	// consultDeleteSpecificMeeting: (body) => {
	//    return axios.delete(API_ENDPOINTS.ONLINECONSULT_DELETE_SPECIFICMEETING, body, {
	//       headers: { ...getHeaders(), isConsult: true },
	//    })
	// },

	readCustmessage: appointmentUuid => {
		return axios.get(API_ENDPOINTS.ONLINECONSULT_READ_CUST_MSG, {
			headers: {...getHeaders(), isConsult: true, path: {appointmentUuid}},
		})
	},
	clearChatHistoryFromCustSide: appointmentUuid => {
		return axios.delete(API_ENDPOINTS.ONLINECONSULT_CLEARCHAT_HISTORY_CUSTOMER, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true, path: {appointmentUuid}},
		})
	},
	consultChatMessageSave: body => {
		return axios.post(API_ENDPOINTS.CONSULT_CHATMESSAGE_SAVE, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},
	updateConsultMeeting: (meetingUuid, body) => {
		return axios.put(API_ENDPOINTS.UPDATE_CONSULT_MEETING, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true, path: {meetingUuid}},
		})
	},
	consultMeetingSave: body => {
		return axios.post(API_ENDPOINTS.CONSULT_MEETING_SAVE, body, {headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true}})
	},
	generateTokenOnCustomer: custUuid => {
		return axios.get(API_ENDPOINTS.GENERATE_TOKEN_ONCUSTOMER, {
			headers: {...getHeaders(), isConsult: true, path: {custUuid}},
		})
	},
	getConsultCustId: custUuid => {
		return axios.get(API_ENDPOINTS.CUSTOMER_DETAIL, {
			headers: {...getHeaders(), isConsult: true, path: {custUuid}},
		})
	},
	getChatImageDetails: appointmentUuid => {
		return axios.get(API_ENDPOINTS.ONLINECONSULT_READ_CUST_IMAGE, {
			headers: {...getHeaders(), isConsult: true, path: {appointmentUuid}},
		})
	},
	getChatDocumentDetails: appointmentUuid => {
		return axios.get(API_ENDPOINTS.ONLINECONSULT_READ_CUST_DOCUMENT, {
			headers: {...getHeaders(), isConsult: true, path: {appointmentUuid}},
		})
	},
	getChatVideoDetails: appointmentUuid => {
		return axios.get(API_ENDPOINTS.ONLINECONSULT_READ_CUST_VIDEO, {
			headers: {...getHeaders(), isConsult: true, path: {appointmentUuid}},
		})
	},
	getChatLinkDetails: appointmentUuid => {
		return axios.get(API_ENDPOINTS.ONLINECONSULT_READ_CUST_LINK, {
			headers: {...getHeaders(), isConsult: true, path: {appointmentUuid}},
		})
	},
	getCustomerAppointmentDetails: custUuid => {
		return axios.get(API_ENDPOINTS.CUSTOMER_APPOINTMENT_DETAILS, {
			headers: {...getHeaders(), isConsult: true, path: {custUuid}},
		})
	},
	readTenantMediaDetails: appointmentUuid => {
		return axios.get(API_ENDPOINTS.ONLINECONSULT_READ_CUST_MEDIA, {
			headers: {...getHeaders(), isConsult: true, path: {appointmentUuid}},
		})
	},
	getSymptomList: groupUuid => {
		return axios.get(API_ENDPOINTS.Symptoms_List, {
			headers: {...getHeaders(), isJavaList: true, path: {groupUuid}},
		})
	},
	searchSymptom: symptomName => {
		return axios.get(API_ENDPOINTS.SEARCH_SYMPTOMS, {
			headers: {...getHeaders(), isJavaList: true, path: {symptomName}},
		})
	},
	showSpecialityDetails: symtomsUuid => {
		return axios.get(API_ENDPOINTS.Specialities_Price_List, {
			headers: {...getHeaders(), path: {symtomsUuid}, isJavaList: true},
		})
	},
	checkCustRegistered: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.post(API_ENDPOINTS.SIGN_UP, result, {
			headers: {...getHeaders(), isAes: true, key: `${ivKey}`, 'X-SECURITY': csrf()},
			withCredentials: false,
		})
	},
	addToCart: (body, token) => {
		return axios.post(API_ENDPOINTS.ADD_CART, body, {
			headers: {...getHeaders(), isJavaList: true, 'X-SECURITY': csrf()},
		})
	},

	getCartDetails: (custId, token) => {
		return axios.get(API_ENDPOINTS.GET_CART_DETAILS, {
			headers: {...getHeaders(), path: {custId}, isJavaList: true},
		})
	},

	createOrder: body => {
		return axios.post(API_ENDPOINTS.CREATE_ORDER, body, {
			headers: {...getHeaders(), isJavaList: true, 'X-SECURITY': csrf()},
		})
	},

	// findTenet: body => {
	// 	return axios.post(API_ENDPOINTS.FIND_TENET, body, {
	// 		headers: {...getHeaders(), isJavaList: true},
	// 	})
	// },

	// saveCallNotification: body => {
	// 	return axios.post(API_ENDPOINTS.SAVE_CONSULT, body, {
	// 		headers: {...getHeaders(), isJavaList: true},
	// 	})
	// },

	saveTenantCallNotification: body => {
		return axios.post(API_ENDPOINTS.SAVE_CONSULT, body, {
			headers: {...getHeaders(), isJavaList: true, 'X-SECURITY': csrf()},
		})
	},

	deleteCallNotification: callNotificatonUuid => {
		return axios.delete(API_ENDPOINTS.DELETE_CALL_NOTIFICATION, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true, path: {callNotificatonUuid}},
		})
	},
	consultMeetingCallDisconnect: body => {
		return axios.put(API_ENDPOINTS.ONLINECONSULT_MEETING_DISCONNECT, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},
	paymentRefund: body => {
		return axios.post(API_ENDPOINTS.PAYMENT_REFUND, body, {
			headers: {...getHeaders(), isJavaList: true, 'X-SECURITY': csrf()},
		})
	},
	refundStatus: custUuid => {
		return axios.put(API_ENDPOINTS.REFUND_STATUS, custUuid, {headers: {...getHeaders(), 'X-SECURITY': csrf(), isJavaList: true}})
	},
	updateProfile: body => {
		return axios.put(API_ENDPOINTS.UPDATE_PROFILE, body, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isConsult: true},
		})
	},
	saveChatBotDetails: body => {
		return axios.post(API_ENDPOINTS.CHAT_BOT_SAVE, body, {
			headers: {...getHeaders(), isConsult: true, 'X-SECURITY': csrf()},
		})
	},
	getChatBotDetails: custUuid => {
		return axios.get(API_ENDPOINTS.GET_CHAT_BOT_DETAILS, {
			headers: {...getHeaders(), isConsult: true, path: {custUuid}},
		})
	},
	userProfileEmailUpdate: (publicKey, ivKey) => {
		const result = {data: publicKey}
		return axios.put(API_ENDPOINTS.USER_PROFILE_LIST_UPDATE, result, {
			headers: {...getHeaders(), 'X-SECURITY': csrf(), isJavaList: true, key: `${ivKey}`},
		})
	},
	verifyEmail: data => {
		return axios.post(API_ENDPOINTS.EMAIL_RESEND_OTP, data, {
			headers: {...getHeaders(), isJava: true, 'X-SECURITY': csrf()},
		})
	},
	verifyEmailToken: data => {
		return axios.post(API_ENDPOINTS.VERIFY_EMAIL_TOKEN, data, {
			headers: {...getHeaders(), isJava: true, 'X-SECURITY': csrf()},
		})
	},
}
