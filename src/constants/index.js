import secureLocalStorage from 'react-secure-storage'

const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null

export const API_ENDPOINTS = {
	REQUEST_DEMO: '/communication/demoRequestMail',
	MULTI_TENT_USER: '/customer/getCustTenants/:userId',
	SIGN_UP: '/B2C/signup',
	APPOINTMENT_LIST: '/ms-calendar-appointment/appointment/CustomerAppointments/custId/:custId',
	VERIFY_EMAIL_TOKEN: '/B2C/verifyEmailToken',
	VALIDATE_OTP: '/validateOTP',
	MOBILE_RESEND_OTP: '/sendOTP',
	EMAIL_RESEND_OTP: '/generateEmailToken',
	SAVE_ACTIVE_DEVICE: '/account/v1/saveActiveDevices/CUS/:userId',
	FILE_DELETE: `/file/application/delete/:logoUuid`,
	// Banner Care
	CARE_BANNER: '/landing-page/commonLandingPage/getSpecBanners/fyi6pmtm',
	FITNESS_BANNER: '/landing-page/commonLandingPage/getSpecBanners/e7z11j8m',
	MIND_BANNER: '/landing-page/commonLandingPage/getSpecBanners/2nzdfwug',
	SPORTS_BANNER: '/landing-page/commonLandingPage/getSpecBanners/ztyxtevg',
	SPA_BANNER: '/landing-page/commonLandingPage/getSpecBanners/irokb9b8',
	//Landing Sliders
	HOSPITAL_CONSULTATION: '/landing-page/commonLandingPage/getTenants/Hospital/fyi6pmtm',
	LAB_SCAN: '/landing-page/commonLandingPage/getTenants/Lab Center/fyi6pmtm',
	HOME_SERVICE: '/landing-page/commonLandingPage/getTenants/Home Service/fyi6pmtm',
	FITNESS_CENTERS: '/landing-page/commonLandingPage/getTenants/Fitness Studio/e7z11j8m',
	YOGA_CENTERS: '/landing-page/commonLandingPage/getTenants/Yoga/2nzdfwug',
	SPA_SALOON: '/landing-page/commonLandingPage/getTenants/Saloon/irokb9b8',
	TOP_SPA: '/landing-page/commonLandingPage/getTenants/Spa Center/irokb9b8',
	TOP_SPORTS: '/landing-page/commonLandingPage/getTenants/Sports Acadamy/ztyxtevg',
	//inperson
	DOCTOR_INPERSON: '/landing-page/commonLandingPage/getInpersons/fyi6pmtm',
	//splHealthConcern
	CARE_TOP_ONLINE_CONSULTATION: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/fyi6pmtm/isSplHlthConcern/false',
	CARE_HEALTH_SYMPTOMS: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/fyi6pmtm/isSplHlthConcern/true',
	FITNESS_TOP_ONLINE_CONSULTATION: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/e7z11j8m/isSplHlthConcern/false',
	FITNESS_HEALTH_SYMPTOMS: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/e7z11j8m/isSplHlthConcern/true',
	MIND_TOP_ONLINE_CONSULTATION: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/2nzdfwug/isSplHlthConcern/false',
	MIND_HEALTH_SYMPTOMS: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/2nzdfwug/isSplHlthConcern/true',
	SPA_TOP_ONLINE_CONSULTATION: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/irokb9b8/isSplHlthConcern/false',
	SPA_HEALTH_SYMPTOMS: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/irokb9b8/isSplHlthConcern/true',
	SPORTS_TOP_ONLINE_CONSULTATION: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/ztyxtevg/isSplHlthConcern/false',
	SPORTS_HEALTH_SYMPTOMS: '/ms-shoppingcart/b2cSubscription/Consult/mastTentGroupId/ztyxtevg/isSplHlthConcern/true',
	//CareBalance
	HOSPITAL_CLINIC: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	NURSE_ASSIST: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	PHYSIO_ASSIST: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	AVAILABLE_PHYSIO: `/landing-page/care/getPhysiotherapist`,
	CARE_ARTICLE: `/landing-page/commonLandingPage/getHealthTipsArticles/fyi6pmtm`,
	CARE_FAQ: `/landing-page/commonLandingPage/getFaq/fyi6pmtm`,
	//FitnessBalance
	INPERSON: `/landing-page/commonLandingPage/getInpersons/e7z11j8m`,
	EXPLORE_CENTER: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	FITNESS_ASSISTANCE: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	FITNESS_ARTICLES: `/landing-page/commonLandingPage/getHealthTipsArticles/e7z11j8m`,
	FITNESS_FAQ: `/landing-page/commonLandingPage/getFaq/e7z11j8m`,
	//MindBal
	YOGA_MASTER: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	YOGA_THERAPIST: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	YOGA_ASSISTANCE: `/landing-page/commonLandingPage/getLandTopSpeciality`,
	YOGA_ARTICLE: `/landing-page/commonLandingPage/getHealthTipsArticles/2nzdfwug`,
	YOGA_FAQ: `/landing-page/commonLandingPage/getFaq/2nzdfwug`,
	//Spa Bal
	SPA_DYNAMIC_LAND: `landing-page/commonLandingPage/getLandTopSpeciality`,
	SPA_ARTICLE: `/landing-page/commonLandingPage/getHealthTipsArticles/irokb9b8`,
	SPA_FAQ: `/landing-page/commonLandingPage/getFaq/irokb9b8`,
	//Sports Bal
	SPORTS_DYNAMIC_LAND: `landing-page/commonLandingPage/getLandTopSpeciality`,
	SPORTS_ARTICLE: `/landing-page/commonLandingPage/getHealthTipsArticles/ztyxtevg`,
	SPORTS_FAQ: `/landing-page/commonLandingPage/getFaq/ztyxtevg`,
	//appt
	APPOINTMENT_DETAILS: '/ms-calendar-appointment/appointment/appointmentDetails/tentId/:tentUuid/appointmentUuid/:appointmentUuid',
	MASTER_LOOKUP: '/lookup/index/mastLookupType/:mastLookuptype',
	CANCEL_APPOINTMENT: '/ms-calendar-appointment/appointment/cancel',
	AVAILABLE_APPOINTMENT: '/ms-calendar-appointment/appointment/careTimeSlot',
	BILLING_LIST: '/charting/BillingOrder/getConsolidatedBillForApp/:appointmentUuid',
	// reschedule appt
	RESCHEDULE_APPOINTMENT: '/ms-calendar-appointment/appointment/reschedule',
	FEEDBACK_LIST: '/feedback/index/custId/:custId/faqFor/feedback',
	FEEDBACK_LIST_YEAR: `/feedback/index`,
	ARTICLE_LIST: `/settings/HealthFeed/viewpublished/${userId}`,
	PAYMENT_HISTORY_LIST: `/payment/payment/getPaymentHistory`,
	ACTIVE_DEVICE_LIST: '/account/getCustActiveDevicesList/:custId',
	LOGOUT_DEVICE: '/users/account/Logout/:deviceUuid',
	DELETE_USER: '/auth/deleteUser',
	NOTIFICATION_POST: '/account/saveNotification/CUS/:custId',
	NOTIFICATION_GET: '/account/getNotification/CUS/:custId',
	// NOTIFICATION_UPDATE: '/account/updateNotification/:custId',
	CHANGE_PASSWORD: '/profile/changePassword',
	TWO_FACTOR_GET: '/account/gettwofactorsettings/CUS/:custId',
	TWO_FACTOR_POST: '/account/saveTwoFactorSettings/CUS/:custId',
	TWO_FACTOR_UPDATE: '/account/updateTwoFactorSettings/:custId',
	SEARCH_PROFILE_LIST: '/search/solrSearch/searchProfiles',
	// DOCTOR_PROFILE_LIST: '/search/advance/for/PROFILE',
	DOCTOR__DETAILS: `/users/profile/get/:mastTentUuid/:userType/:tentUserUuid`,
	ORDER_LIST_YEAR: `/ms-shoppingcart/CustOders/index`,
	ORDER_LIST_DETAILS: `/ms-shoppingcart/CustOders/OrderId/custId/${userId}/custOrderUuid/:currentUuid`,
	LOOK_UP: '/communication/lookup/index/mastLookupType/AVL/',
	//acoount profile list
	USER_PROFILE_LIST: `/users/customer/getCustomerIdentity/${userId}`,
	BLOOD_GROUP: `/lookup/index/mastLookupType/BGP`,
	TIME_ZONE: `/lookup/index/mastLookupType/TIZ`,
	COUNTRY_GROUP: `/lookup/index/mastLookupType/CNT`,
	LANGUAGE_GROUP: `/lookup/index/mastLookupType/LAN`,
	STATE_GROUP: `lookup/citiesStates`,
	CITY_OPTIONS: `lookup/cities`,
	USER_PROFILE_LIST_UPDATE: '/users/customer/updateCustIdentity',
	PROFILE_PHOTO_UPLOAD: `/file/application/uploadIdentity/${userId}/7ba4gxlz/:custId`,
	// GET_PROFILE_PHOTO: `/file/getFile/:fileUuid`,
	GET_PROFILE_PHOTO: `/file/download/`,
	//Payment filter list lookup
	PAYMENT_LOOK_UP: '/lookup/index/mastLookupType/PMS',
	COUNT_INTEGRATION_LIST: '/ms-communication/count/index/custId/:custId/tentId/:mastTentUuid',
	REORDER_DETAILS: '/ms-shoppingcart/CustCarts/ReorderAdd/custOrderId/:orderDetails',
	GET_MENU_LIST: `/ms-cms/b2cMenu/:menuList`,
	//Health records
	UPLOAD_FILE: `/file/application/uploadIdentity/${userId}/:currentUuid/:custUuid`,
	DOWNLOAD_FILE: `/file/downloadInPasswordProtected`,
	HEALTH_RECORDS_DETAILS: `/file/application/get/healthRecords/for/${userId}/:tentUuid/:custId`,
	HEALTH_RECORDS_DETAILS_LIST: `/file/application/find/customer/:custUuid/category/:currentUuid/tent/:tentUuid`,
	SHARE_RECORD: '/file/documentshare/sharedByCustomer',
	YEAR_PICKER_LIST: '/ms-communication/lookup/index/mastLookupType/ADY',
	ONLINECONSULTATION_PAID_LIST: `/consult/requestTrack/customerDashboard/:custUuid`,
	YEAR_PICKER_APPOINTMENT: `/ms-calendar-appointment/appointment/appointmentDetails`,
	LANDING_PAGE_COUNT: '/ms-communication/CountArchievements/index',
	SEARCH_ISSUES_DROPDOWN: `/ms-communication/lookup/TentSpeciality/tentId/:mastTentUuid`,
	PROFILE_INFO: `/users/profile/get/:mastTentUuid/:userType/:tentUserUuid`,
	PROFILE_FEEDBACK: `/ms-b2b/custAskQuestions/index/tentUserId/:tentUserUuid/tentId/:mastTentUuid/faqFor/feedback/:feedbackfilter`,
	PROFILE_QA_ANSWERED: `/ms-b2b/custAskAns/index/tentUserId/:tentUserUuid/tentId/:mastTentUuid/:qaFilter`,
	PROFILE_HEALTH_FEED: `/ms-b2b/feedbackRating/index/tentUserId/:tentUserUuid/tentId/:mastTentUuid/:healthFilter`,
	APPOINTMENT_BOOKING: '/ms-calendar-appointment/appointment/add',

	//Feedback Module
	FEEDBACK_SUBMIT: `/ms-b2b/faqAnswerMaster/add`,

	//TENT_LIST
	TENT_LIST: '/tenant/getPracticeList/:exactUuid',
	//Search Constants
	SEARCH_SPECIALITY: `/ms-communication/lookup/index/mastLookupType/:category`,
	SEARCH_SPECIFIC_SPECIALITY: `/ms-communication/lookup/lookup/mastLookupType/:category`,
	SEARCH_OPTIONS: `/search/solrSearch/:searchCategory`,
	DELETE_RECENT_SEARCH: `/search/solrSearch/deleteSpecificRecentSearch/:searchHistoryUuid`,
	LOCATION_FILTER: `/search/locationSearch/getLocalities`,
	//Online Consultation
	Symptoms_List: `/ms-shoppingcart/mastSymtoms/index/mastTentGroupId/:groupUuid`,
	Specialities_Price_List: `/ms-shoppingcart/mastSymtoms/fetchspecialitybysymptoms/symtomsId/:symtomsUuid`,
	ADD_CART: `/ms-shoppingcart/CustCarts/Add`,
	SEARCH_SYMPTOMS: '/ms-shoppingcart/mastSymtoms/search/symtomName/:symptomName',
	CHECK_USER_REGISTERED: '/users/auth/B2C/signup',
	GET_CART_DETAILS: '/ms-shoppingcart/CustCarts/index/custId/:custId',
	CREATE_ORDER: '/payment/order/createOrders',
	// FIND_TENET: '/consult/solrSearch/fetchresult',
	SAVE_CONSULT: '/consult/solrSearch/tenantSearch',
	DELETE_CALL_NOTIFICATION: '/firebase/callNotification/delete/:callNotificatonUuid',

	//GET
	SUB_DETAILS: `/consult/jlink/SubscriptionUsage/getsubusagedetbycustuuid/${userId}`,
	SUB_MAP_DETAILS: `/consult/jlink/SubscriptionMap/getsubdetbycustuuid/${userId}`,
	//POST
	CREATE_CHAT: `/consult/jlink/ConsultChatting/chat/${userId}/:tentuseruuid/:appointmentuuid`,
	//PUT
	UPDATE_SUB_STATUS: `/consult/jlink/SubscriptionMap/getsubdetbycustuuid/${userId}`,
	UPDATE_BAL_COUNT: `/consult/jlink/SubscriptionUsage/updatecallsBycustuuid/${userId}`,
	UPDATE_BAL_DAYS: `/consult/jlink/SubscriptionUsage/updatedaysBycustuuid/${userId}`,
	//GET
	READ_APPT_DETAILS: `/consult/jlink/Appointment/retrieve/:appointmentuuid`,
	SPECIFIC_MEET: `/consult/jlink/ConsultMeeting/retrievemeeting/${userId}`,
	//POST
	MEET_START: `/consult/jlink/ConsultMeeting/${userId}/:tentuseruuid/:appointmentuuid/:initiatecustomer/:create`,
	//PUT
	MEET_STATUS: `/consult/jlink/ConsultMeeting/UpdateMeeting/:jitConferenceId`,
	//POST
	CHAT_UPDATION: `/consult/jlink/ConsultChatting/chat/edit/:jitChatId`,
	SPECIFIC_MEET_: `/consult/jlink/ConsultChattingMessage/message/save/:jitChatId/:isSystemMsg`,
	JITSI_GENERATE_TOKEN: `/consult/jlink/JistiConfig/getJitsiToken`,
	GENERATE_MEET_ID: `/consult/jlink/JistiConfig/getjitsiMeetid`,
	// firebase onlineconsult
	CONSULT_CHATMESSAGE_SAVE: `/firebase/consultChatMessage/save`,
	CONSULT_MEETING_SAVE: `/firebase/consultMeeting/save`,
	UPDATE_CONSULT_MEETING: `/firebase/consultMeeting/update/:meetingUuid`,
	GENERATE_TOKEN_ONCUSTOMER: `/Jitsi/customerJWT/:custUuid`,
	CUSTOMER_DETAIL: `/jlink/customer/read/:custUuid`,

	// onlineconsult Using AppointementUuid
	ONLINECONSULT_MESSAGE_SAVE_TEXT: `/onlineConsult/Message/saveText`,
	ONLINECONSULT_MESSAGE_SAVE_FILE: `/onlineConsult/Message/saveFile`,
	ONLINECONSULT_MESSAGE_SAVE_EMOJI: `/onlineConsult/Message/saveEmoji`,
	ONLINDCONSULT_MESSAGE_SAVEDECLINECALL: `/onlineConsult/Message/saveDeclineCall`,
	ONLINECONSULT_MEETING_SAVE: `/onlineConsult/Meeting/save`,
	ONLINECONSULT_MEETING_CALLDECLINE: `/onlineConsult/Meeting/calldecline`,
	ONLINECONSULT_DELETE_SPECIFICMEETING: `/onlineConsult/Meeting/deleteSpecificMeeting`,
	ONLINECONSULT_MEETING_CALL_LEAVE: `/onlineConsult/Meeting/callleave`,
	ONLINECONSULT_MEETING_CUSTOMERCALLACCEPT: `/onlineConsult/Meeting/customercallaccept`,
	ONLINECONSULT_CLEARCHAT_HISTORY_CUSTOMER: `/onlineConsult/Message/clearcustomer/:appointmentUuid`,
	ONLINECONSULT_UPLOAD_FILE: `/file/application/uploadMultiple/:custUuid/:consultUuid`,
	ONLINECONSULT_READ_CUST_IMAGE: `/onlineConsult/Message/readCustImg/:appointmentUuid`,
	ONLINECONSULT_READ_CUST_DOCUMENT: `/onlineConsult/Message/readCustDoc/:appointmentUuid`,
	ONLINECONSULT_READ_CUST_VIDEO: `/onlineConsult/Message/readCustVideo/:appointmentUuid`,
	ONLINECONSULT_READ_CUST_LINK: `/onlineConsult/Message/readCusLink/:appointmentUuid`,
	ONLINECONSULT_READ_CUST_MSG: `/onlineConsult/Message/readCustMsg/:appointmentUuid`,
	ONLINECONSULT_READ_CUST_MEDIA: `/onlineConsult/Message/readCusChat/:appointmentUuid`,
	DOWNLOAD_UPLOADED_FILE: `/file/download`,
	CUSTOMER_APPOINTMENT_DETAILS: `/jlink/appointment/customerApp/:custUuid`,
	ONLINECONSULT_MEETING_DISCONNECT: `/onlineConsult/Meeting/calldisconnect`,
	PAYMENT_REFUND: '/payment/refund/createRefund',
	REFUND_STATUS: '/consult/requestTrack/refundConsult',
	UPDATE_PROFILE: '/jlink/customer/updateProfile',
	CHAT_BOT_SAVE: '/chatbot/add',
	GET_CHAT_BOT_DETAILS: '/chatbot/get/:custUuid',

	//Payment
	PAYMENT_PROCEED: `/payment/payment/pay`,
	PAYMENT_RESPONSE: `/payment/payment/paymentResponse`,
	// Get Customer Profile Pic
	GET_PROFILE_PIC: `/users/customer/getCustomerIdentity/:custUuid`,
	//Terms and conditions
	GET_TERMS_AND_CONDITION: '/ms-cms/termsAndConditions/index/',
	//Privacy policy
	GET_PRIVACY_POLICY: '/ms-cms/termsAndConditions/index/',
	// Diet Plan
	GET_DIET_PLAN_DETAILS: '/settings/dietPlan/clientDietplan/filterClientDietPlan',
	GET_DIET_PLAN_LIST: '/settings/dietPlan/fetchClientDietB2C',

	//Workout Plan
	GET_WORKOUT_PLAN: `/settings/workout/clientB2cExercise/findAll/:custUuid`,
	GET_WORKOUTS: `/settings/workout/clientB2cExercise/specific/:clientExerciseNameuuid`,

	//Membership
	GET_MEMBERSHIP_DETAILS_OF_CLIENT: `/settings/membership/clientMembership/get/`,

	// pin Code
	SET_PIN_CODE: '/setPin',
	CHANGE_PIN: '/changePin',
	VALIDATE_PIN: '/validatePin',
	TENT_USER_LIST: `ms-communication/tentUserDetails/appointmentUsers/`,
}

export const GOOGLE_API_ENDPOINTS = {
	GOOGLE_API: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_URL,
}

export const FLASH_ENDPOINTS = {
	FLASH_LINK: process.env.NEXT_PUBLIC_FLASH_HOST,
}

export const SOCIAL_MEDIA_TWITTER = {
	TWITTER_LINK: process.env.NEXT_PUBLIC_LYFNGO_TWITTER,
}
export const SOCIAL_MEDIA_INSTAGRAM = {
	INSTAGRAM_LINK: process.env.NEXT_PUBLIC_LYFNGO_INSTAGRAM,
}
export const SOCIAL_MEDIA_YOUTUBE = {
	YOUTUBE_LINK: process.env.NEXT_PUBLIC_LYFNGO_YOUTUBE,
}
export const SOCIAL_MEDIA_FACEBOOK = {
	FACEBOOK_LINK: process.env.NEXT_PUBLIC_LYFNGO_FACEBOOK,
}
export const SOCIAL_MEDIA_LINKED_IN = {
	LINKED_IN_LINK: process.env.NEXT_PUBLIC_LYFNGO_LINKED_IN,
}
///comit
