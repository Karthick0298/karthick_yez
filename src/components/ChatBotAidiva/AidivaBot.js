import React, {useState, useEffect} from 'react'
import {Grid, Typography, Card, TextField, InputAdornment, CardContent, Button, Avatar, IconButton, CircularProgress} from '@material-ui/core'
import {useStyles} from './style'
import {Send, Info} from '@material-ui/icons'
import _, {cloneDeep} from 'lodash'
import clsx from 'clsx'
import moment from 'moment'
import consultApi from '../../../Service/ConsultChat'
// import 'firebase/database'
import Image from 'next/image'
import AddCartModal from './AddCartModal'
// import firebase from 'firebase/app'
import useAuth from '../../../lib/Utils/hooks/UseAuth'
import ChatWithUsModal from '../../model/ChatWithUsModal/ChatWithUsModal'
import Axios from 'axios'
import {API_ENDPOINTS} from '../../../src/constants'
import {ToastContainer, toast} from 'react-toastify'
import {styled, alpha} from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import VideocamIcon from '@mui/icons-material/Videocam'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ScienceIcon from '@mui/icons-material/Science'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {encryption, decryption, failureLogin} from '../../../lib/Utils/AES'
import signupApi from '../../../Service/Login/loginAes/index'
import {csrf} from '../../../lib/Utils/csrf'
import secureLocalStorage from 'react-secure-storage'
// import LYFnGOImg from '../../../public/images/icons/logotab.svg'

const chatState = {
	categoryList: [],
	symptomList: [],
	symptomId: '',
	chatMessage: '',
	stage: 'getSymptom',
	previousSymptomList: [],
	symptomDetails: {},
	chatMessageArea: [],
	openTenetAttendProcess: false,
	tenetUserDetails: {},
	subStage: '',
	userName: '',
	tenetDisplayDetails: [],
	paymentDetails: {},
	mobileNumber: '',
}

const welcomeAidiva = ['Hi, welcome to LFYnGO 👋', 'Please select below category in order to get started']

const categoryOption = {
	status: 'success',
	data: [
		{
			id: 0,
			label: 'Online Consultation',
			disable: false,
		},
		{
			id: 1,
			label: 'Appointment Booking',
			disable: false,
		},
		{
			id: 2,
			label: 'Lab Order',
			disable: true,
		},
	],
}
const welcomeChat = [
	'Hi, welcome to online consultation',
	'Consult with top doctors',
	'Please select your category below suggestion or Type your symptoms or health problems given below to show relevant speciality',
]

const preference = ['Please select your preference ']

const refundPolicy = ['You can refund your amount from the online consultation dashboard']

const chatOption = {
	status: 'success',
	data: [
		{
			id: 0,
			label: 'Continue Here',
		},
		{
			id: 1,
			label: 'Continue with Whatsapp',
		},
	],
}

const tryOption = {
	status: 'success',
	data: [
		{
			id: 0,
			label: 'Try again',
			disable: false,
		},
		{
			id: 1,
			label: 'Cancel and refund',
			disable: false,
		},
	],
}
const refundStatu = ['Your amount will be refund shortly. You can check your status in online consultation dashboard']

const notFoundMsg = 'Symptoms not found,Please choose from below Symptoms'

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	isAuthRequired: false,
}

const chatOptionMsg = 'Please choose any one of the mode to procced further.'

const processEndedMsg =
	'Sorry for inconvenience there is Dermatologist not accept your request. Your money will be refunded shortly. Please try after some time'

const paymentProcessMsg = 'Please proceed with payment process'

const tenetAcceptPendingMsg = 'Please wait untill doctor accepts your consultation'

const tenetAcceptedMsg = 'Kindly continue consultation with the respective doctor by clicking the above Chat with us'

const emailSuccesMsg = 'Email Verified Successfully'

const StyledMenu = styled(props => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({theme}) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(2),
		minWidth: 180,
		color: '#fff',
		backgroundColor: '#f8f8f800',
		boxShadow: 'none',
		'& .MuiPaper-elevation1': {
			boxShadow: 'none',
		},
		'& .MuiMenu-list': {
			padding: '4px 0',
			display: 'flex',
			gap: 16,
			flexDirection: 'column',
			backgroundColor: '#f8f8f800',
		},
		'& .MuiMenuItem-root': {
			background: '#7047ea',
			boxShadow: ' 2px 3px 20px #00000029',
			opacity: 1,
			paddingBlock: 8,
			paddingInline: 14,
			borderRadius: 8,
			display: 'flex',
			justifyContent: 'space-between',
			gap: 8,
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: 12,
			'& .MuiSvgIcon-root': {
				fontSize: 24,
				color: '#ffffff',
				marginRight: theme.spacing(0.5),
			},
			'&:active': {
				backgroundColor: '#a773ff',
			},
		},
	},
}))

const AidivaBot = ({setState}) => {
	const classes = useStyles()
	const [chatDetails, setChatDetails] = useState(cloneDeep(chatState))
	const {setToken, setUserId, setOtpVerified, setLoggedVia, getProfilePic, emailUser, phoneUser, user, loading, setLoading} = useAuth()
	const [chatWithUsOpen, setChatWithUsOpen] = useState(false)
	const [isAddCartModalOpen, setAddCartModalOpen] = useState(false)
	const [stopTimer, setStopTimer] = useState(false)
	const [isDeleted, setDeleted] = useState(false)
	const [processedList, setProcessedList] = useState([])
	const [isPayUiDisable, setDisable] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [chatOptDisable, setChatOptDisable] = useState(false)
	const [paymentId, setPaymentId] = useState('')
	const [chatStage, setChatStage] = useState('getSymptom')
	const open = Boolean(anchorEl)
	const {token, saveActiveDevices} = useAuth()
	const isAuth = !!token
	const [counter, setCounter] = useState(0)
	const [payRes, setPayRes] = useState([])
	const [tryDisable, setTrydisable] = useState(false)
	const [min, setMin] = useState(false)
	const [sec, setSec] = useState(false)

	let custUuid = typeof window !== undefined && secureLocalStorage.getItem('userId')
	let callNotificationUuid = typeof window !== undefined && secureLocalStorage.getItem('callNotificationUuid')

	// useEffect(() => {
	// 	let ref = firebase.database().ref(`CallNotification/${callNotificationUuid}`)
	// 	ref.on('value', snapshot => {
	// 		const snapData = snapshot.val()
	// 		console.log('snapDataaa', snapData)
	// 		if (snapData && snapData?.callAttenderUuid !== '') {
	// 			setTimeout(() => {
	// 				processGetTenentDetails()
	// 			}, 4000)
	// 		} else if (snapData?.callNotificationStatus === 'Declined') {
	// 			setStopTimer(true)
	// 			tryStart()
	// 		}
	// 	})
	// })

	const menuOpen = event => {
		console.log('onClose', event.currentTarget)
		setAnchorEl(event.currentTarget)
		secureLocalStorage.setItem('trygain', 0)
	}

	const getTenetDispDetails = () => {
		let ref = firebase.database().ref(`CallNotification/${callNotificationUuid}`)
		ref.on('value', snapshot => {
			const snapData = snapshot.val()
			if (snapData === null) {
				secureLocalStorage.setItem('tenetAcceptTime', 0)
			}
			getChatBotDetails(snapData)
		})
	}

	const processGetTenentDetails = isSkip => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		consultApi
			.getCustomerAppointmentDetails(getUserId())
			.then(response => {
				if (response && response.data.status === 'success') {
					if (!isSkip) {
						chatList.push({
							type: 'RECEIVE',
							data: '',
							messageType: 'tenetAccepted',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'tenetAccepted',
						})
						setStopTimer(true)
						const botSaveList = [
							{
								chatbotMessage: JSON.stringify({
									type: 'RECEIVE',
									data: response.data.data.tenantUserResponseDTO,
									messageType: 'tenetAccepted',
									stage: 'tenetAccepted',
								}),
								custUuid: getUserId(),
								isSystemMessage: true,
							},
						]
						saveChatBotDetails(botSaveList)
					}
					setChatDetails(prevState => ({...prevState, tenetDisplayDetails: response.data.data, chatMessageArea: chatList, stage: 'tenetAccepted'}))
					if (!processedList.includes('tenetAccepted')) {
						setProcessedList([...processedList, 'tenetAccepted'])
					}
					secureLocalStorage.setItem('custTenantUuid', response.data.data.tentUserUuid)
					secureLocalStorage.setItem('appointmentUuid', response.data.data.appointmentUuid)
				} else {
					setStopTimer(true)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method processGetTenentDetails')
			})
	}

	const menuClose = data => {
		setAnchorEl(null)
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		const botSaveList = []
		chatList.push({
			type: 'SEND',
			data: data,
			messageType: 'getSymptom',
			date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
			stage: 'getSymptom',
		})
		botSaveList.push({
			chatbotMessage: JSON.stringify({type: 'SEND', data: data, messageType: 'getSymptom', stage: 'getSymptom'}),
			custUuid: getUserId(),
			isSystemMessage: false,
		})
		console.log('jsonSt', JSON.stringify({type: 'SEND', data: data, messageType: 'getSymptom', stage: 'getSymptom'}))
		saveChatBotDetails(botSaveList)
		console.log('chat', chatList)
		setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'getSymptom', chatMessage: ''})
		setTimeout(() => {
			fetchMenuData(data)
		}, 500)
	}

	const fetchMenuData = data => {
		if (data === 'Online Consultation') {
			fetchSymptomsList()
			setChatStage('getSymptom')
		} else if (data === 'Appointment Booking') {
			fetchPerefrence(data)
		} else {
		}
	}

	const fetchCategotyOption = data => {
		if (data?.label === 'Online Consultation') {
			if (getLocalOtp() === 'true') {
				fetchSymptomsList()
			} else {
				categoryLoginVerify(data)
			}
		} else if (data?.label === 'Appointment Booking') {
			if (getLocalOtp() === 'true') {
				fetchPerefrence(data)
			} else {
				categoryLoginVerify(data)
			}
		}
	}

	const categoryLoginVerify = data => {
		const userName = secureLocalStorage.getItem('username')
		const mobileNumber = secureLocalStorage.getItem('mobileNumber')
		const isOtpVerified = secureLocalStorage.getItem('isOtpVerified')
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		chatList.push({
			type: 'SEND',
			data: data.label,
			messageType: data.label,
			date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
			stage: 'numberProcess',
		})
		const botSaveList = [
			{
				chatbotMessage: JSON.stringify({type: 'SEND', data: data.label, messageType: 'default', stage: 'numberProcess'}),
				custUuid: getUserId(),
				isSystemMessage: false,
			},
		]
		if (data) {
			let stage = ''
			let subStage = ''
			if (userName === null) {
				console.log('verif', userName, mobileNumber, isOtpVerified, chatList)
				stage = 'numberProcess'
				subStage = 'getName'
				chatList.push({
					type: 'RECEIVE',
					data: 'Enter your Name',
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'numberProcess',
					subStage: 'getName',
				})
				botSaveList.push({
					chatbotMessage: JSON.stringify({
						type: 'RECEIVE',
						data: 'Enter your Name',
						messageType: 'default',
						stage: 'numberProcess',
						subStage: 'getName',
					}),
					custUuid: getUserId(),
					isSystemMessage: true,
				})
			} else if (mobileNumber === null || isOtpVerified === null || isOtpVerified === 'false') {
				stage = 'numberProcess'
				subStage = ''
				chatList.push({
					type: 'RECEIVE',
					data: 'Enter your Mobile Number',
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'numberProcess',
					subStage: 'getName',
				})
				// } else if (getEmailId() === null) {
				// 	stage = 'emailProcess'
				// 	subStage = ''
				// 	chatList.push({
				// 		type: 'RECEIVE',
				// 		data: 'Enter your Email',
				// 		messageType: 'default',
				// 		date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				// 		stage: 'emailProcess',
				// 	})
				// 	botSaveList.push({
				// 		chatbotMessage: JSON.stringify({
				// 			type: 'RECEIVE',
				// 			data: 'Enter your Email',
				// 			messageType: 'default',
				// 			date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				// 			stage: 'emailProcess',
				// 		}),
				// 		custUuid: getUserId(),
				// 		isSystemMessage: true,
				// 	})
			} else {
				if (data?.label === 'Online Consultation') {
					fetchSymptomsList()
				} else if (data?.label === 'Appointment Booking') {
					chatList.push({type: 'RECEIVE', data: preference, messageType: 'preference', stage: 'chatOptStage'})
					if (chatOption?.status === 'success') {
						stage = 'chatOptStage'
						subStage = ''
						chatList.push({
							type: 'RECEIVE',
							data: chatOption,
							messageType: 'chatOption',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'chatOptStage',
							disable: false,
						})
					}
					botSaveList.push(
						{
							chatbotMessage: JSON.stringify({type: 'RECEIVE', data: preference, messageType: 'default', stage: 'chatOptStage'}),
							custUuid: getUserId(),
							isSystemMessage: true,
						},
						{
							chatbotMessage: JSON.stringify({
								type: 'RECEIVE',
								data: chatOption,
								messageType: 'chatOption',
								stage: 'chatOptStage',
								disable: true,
							}),
							custUuid: getUserId(),
							isSystemMessage: true,
						}
					)
				}
			}
			saveChatBotDetails(botSaveList)
			if (!processedList.includes(stage)) {
				setProcessedList([...processedList, stage])
			}
			setChatDetails({
				...chatDetails,
				stage: stage,
				chatMessageArea: chatList,
				subStage: subStage,
			})
		}
		console.log('dataverify', chatList, processedList)
	}

	const welcomeMsg = data => {
		const chatList = cloneDeep(data || chatDetails.chatMessageArea)
		chatList.push({type: 'RECEIVE', data: welcomeAidiva, messageType: 'welcomeAidiva', stage: 'default'})
		if (welcomeAidiva) {
			chatList.push({
				type: 'RECEIVE',
				data: categoryOption,
				messageType: 'categoryList',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'getCategory',
			})
		}
		const botSaveList = [
			{
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: welcomeAidiva, messageType: 'welcomeAidiva', stage: 'default'}),
				custUuid: getUserId(),
				isSystemMessage: true,
			},
			{
				chatbotMessage: JSON.stringify({
					type: 'RECEIVE',
					data: categoryOption,
					messageType: 'categoryList',
					stage: 'getCategory',
				}),
				custUuid: getUserId(),
				isSystemMessage: true,
			},
		]
		saveChatBotDetails(botSaveList)
		setChatDetails(prevDetails => ({
			...prevDetails,
			previousCategoryList: cloneDeep(categoryOption),
			categoryList: categoryOption,
			chatMessageArea: chatList,
		}))
		setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'default', chatMessage: ''})
	}

	const callNotificationDecline = () => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		if (!callNotificationUuid) {
			chatList.push({
				type: 'RECEIVE',
				data: processEndedMsg,
				messageType: 'default',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'PROCESSEND',
			})
			const botSaveList = [
				{
					chatbotMessage: JSON.stringify({type: 'RECEIVE', data: processEndedMsg, messageType: 'default', stage: 'PROCESSEND'}),
					custUuid: getUserId(),
					isSystemMessage: true,
				},
			]
			saveChatBotDetails(botSaveList)
			setChatDetails(prevState => ({...prevState, stage: 'PROCESSEND', chatMessageArea: chatList}))
			return
		}
		if (!isDeleted) {
			consultApi
				.deleteCallNotification(callNotificationUuid)
				.then(response => {
					if (response && response.data.status === 'success') {
						chatList.push({
							type: 'RECEIVE',
							data: processEndedMsg,
							messageType: 'default',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'PROCESSEND',
						})
						const botSaveList = [
							{
								chatbotMessage: JSON.stringify({type: 'RECEIVE', data: processEndedMsg, messageType: 'default', stage: 'PROCESSEND'}),
								custUuid: getUserId(),
								isSystemMessage: true,
							},
						]
						saveChatBotDetails(botSaveList)
						setChatDetails(prevState => ({...prevState, stage: 'PROCESSEND', chatMessageArea: chatList}))
						setDeleted(true)
						handlePayMentRefund()
						refundStatus()
						if (!processedList.includes('PROCESSEND')) {
							setProcessedList([...processedList, 'PROCESSEND'])
						}
					}
				})
				.catch(err => {
					toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
					console.log(err, 'Error occured in the method callNotificationDecline')
				})
		}
	}

	const handleSendMessage = async () => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		console.log('botDetails', chatDetails)
		if (['payUI', 'tenetAcceptPending', 'tenetAccepted', 'chatOptStage'].includes(chatDetails.stage)) {
			const botSaveList = []
			chatList.push({
				type: 'SEND',
				data: chatDetails.chatMessage,
				messageType: 'default',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'default',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'SEND', data: chatDetails.chatMessage, messageType: 'default', stage: 'default'}),
				custUuid: getUserId(),
				isSystemMessage: false,
			})
			const msg = chatDetails.stage === 'payUI' ? paymentProcessMsg : chatDetails.stage === 'tenetAccepted' ? tenetAcceptedMsg : tenetAcceptPendingMsg
			chatList.push({
				type: 'RECEIVE',
				data: chatDetails?.stage === 'chatOptStage' ? chatOptionMsg : msg,
				messageType: 'default',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: chatDetails.stage,
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: msg, messageType: 'default', stage: chatDetails.stage}),
				custUuid: getUserId(),
				isSystemMessage: true,
			})
			saveChatBotDetails(botSaveList)
			setChatDetails({...chatDetails, chatMessageArea: chatList, stage: chatDetails.stage, chatMessage: ''})
			return
		}
		const mobileNumber = secureLocalStorage.getItem('mobileNumber')
		const userName = secureLocalStorage.getItem('username')
		const isOtpVerified = secureLocalStorage.getItem('isOtpVerified')
		if (chatDetails.stage === 'getSymptom') {
			searchSymptoms()
		} else if (chatDetails.stage === 'numberProcess' && (mobileNumber === null || isOtpVerified === null)) {
			if (chatDetails.subStage === 'getName' && userName === null) {
				chatList.push({
					type: 'SEND',
					data: chatDetails.chatMessage,
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'numberProcess',
				})
				chatList.push({
					type: 'RECEIVE',
					data: 'Enter your mobile number',
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'numberProcess',
				})
				secureLocalStorage.setItem('username', chatDetails.chatMessage)
				setChatDetails({
					...chatDetails,
					chatMessageArea: chatList,
					stage: 'numberProcess',
					chatMessage: '',
					subStage: '',
					userName: chatDetails.chatMessage,
				})
			} else {
				const mobileNumberValidation = /^\d{10}$/
				chatList.push({
					type: 'SEND',
					data: chatDetails.chatMessage,
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'numberProcess',
				})
				if (!mobileNumberValidation.test(Number(chatDetails.chatMessage))) {
					chatList.push({
						type: 'RECEIVE',
						data: 'Please enter a valid mobile number',
						messageType: 'default',
						date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						stage: 'numberProcess',
					})
					setChatDetails({
						...chatDetails,
						chatMessageArea: chatList,
						stage: 'numberProcess',
						chatMessage: '',
						subStage: '',
						userName: chatDetails.chatMessage,
					})
				} else if (mobileNumberValidation.test(Number(chatDetails.chatMessage))) {
					validateNumberRegistered()
				}
			}
		} else if (chatDetails.stage === 'enterOtp' && (mobileNumber === null || isOtpVerified === null)) {
			validateOTP()
		} else if (chatDetails.stage === 'emailProcess' && getEmailId() === null) {
			const botSaveList = []
			chatDetails.chatMessageArea.push({
				type: 'SEND',
				data: chatDetails.chatMessage,
				messageType: 'default',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'emailProcess',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({
					type: 'SEND',
					data: chatDetails.chatMessage,
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'emailProcess',
				}),
				custUuid: getUserId(),
				isSystemMessage: false,
			})
			setChatDetails(prevDetails => ({...prevDetails, chatMessageArea: chatDetails.chatMessageArea, stage: chatDetails.stage, chatMessage: ''}))
			saveChatBotDetails(botSaveList)
			// userProfileEmailUpdate(chatDetails.chatMessage)
		} else {
			const botSaveList = []
			secureLocalStorage.setItem('username', chatDetails.chatMessage)
			handleUpdateProfile()
			chatList.push({
				type: 'SEND',
				data: cloneDeep(chatDetails.chatMessage),
				messageType: 'default',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'payUI',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'SEND', data: chatDetails.chatMessage, messageType: 'default', stage: 'payUI'}),
				custUuid: getUserId(),
				isSystemMessage: false,
			})
			let specialityPreviousObj = chatDetails.chatMessageArea.filter(data => data.messageType === 'specialityDetail')
			specialityPreviousObj = specialityPreviousObj[specialityPreviousObj.length - 1]
			chatList.push({
				type: 'RECEIVE',
				data: chatDetails.symptomDetails || specialityPreviousObj.data.data[0] || {},
				messageType: 'payUI',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'payUI',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: chatDetails.symptomDetails, messageType: 'payUI', stage: 'payUI', disable: true}),
				custUuid: getUserId(),
				isSystemMessage: true,
			})
			setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'payUI', chatMessage: ''})
			saveChatBotDetails(botSaveList)
		}
	}

	const validateNumberRegistered = () => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		const userData = {
			countryCode: '+91',
			mobileNo: chatDetails.chatMessage,
			userType: 'CUS',
		}
		let decryptKey = encryption(userData)
		const result = {data: decryptKey?.plainText}
		Axios.post(API_ENDPOINTS.SIGN_UP, result, {
			headers: {...headers, isAes: true, key: `${decryptKey?.publicKey}`, 'X-SECURITY': csrf()},
			withCredentials: false,
		}).then(res => {
			const successData = decryption(res)
			toast.success(<Typography variant='h5'>Mobile number registered successfully</Typography>)
			setUserId(successData?.data?.uuid)
			setToken(successData.bearer)
			const storeToken = response.data.bearer
			const user = response.data.data
			const data = {
				userId: user.uuid,
				token: storeToken,
				userType: user.userType,
			}
			secureLocalStorage.setItem('userId', data.userId)
			secureLocalStorage.setItem('token', data.token)
			secureLocalStorage.setItem('userType', data.userType)
			chatList.push({
				type: 'SEND',
				data: chatDetails.chatMessage,
				messageType: 'default',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'enterOtp',
			})
			chatList.push({
				type: 'RECEIVE',
				data: `Enter Otp : ${successData.data.otp}`,
				messageType: 'default',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'enterOtp',
				additionalData: successData,
			})
			setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'enterOtp', chatMessage: '', mobileNumber: chatDetails.chatMessage})
			if (!processedList.includes('enterOtp')) {
				setProcessedList([...processedList, 'enterOtp'])
			}
			setTimeout(() => {
				handleUpdateProfile()
			}, 10000)
		})
	}

	const validateOTP = () => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		const filterItem = chatDetails.chatMessageArea.filter(data => data.stage === 'enterOtp' && data.additionalData)
		const obj = {
			otpNumber: chatDetails.chatMessage,
			sentEmail: false,
			userType: 'CUS',
			uuid: filterItem[0].additionalData.data.uuid,
		}
		let decryptKey = encryption(obj)
		signupApi
			.validateOtp(decryptKey?.plainText, decryptKey?.publicKey)
			.then(response => {
				const successData = decryption(response)
				if (successData && successData.status === 'success') {
					secureLocalStorage.setItem('loggedVia', 'phone')
					secureLocalStorage.setItem('isOtpVerified', true)
					toast.success(<Typography variant='h5'>Logged In Successfully</Typography>)
					chatList.push({
						type: 'SEND',
						data: chatDetails.chatMessage,
						messageType: 'default',
						date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						stage: 'enterOtp',
					})
					chatList.push({
						type: 'RECEIVE',
						data: 'Enter your Email',
						messageType: 'default',
						date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						stage: 'emailProcess',
					})
					const botSaveList = []
					chatList.forEach(data => {
						const obj = {
							chatbotMessage: JSON.stringify({
								type: data.type,
								data: data.data,
								messageType: data.messageType,
								stage: data.stage,
								subStage: data.subStage || '',
								isSkip: ['getSymptom'].includes(data.stage) ? true : '',
								disable: ['payUI'].includes(data.stage) ? true : '',
							}),
							custUuid: getUserId(),
							isSystemMessage: data.type === 'SEND' ? false : true,
						}
						botSaveList.push(obj)
					})
					saveChatBotDetails(botSaveList)
					setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'emailProcess', chatMessage: ''})
					if (!processedList.includes('emailProcess')) {
						setProcessedList([...processedList, 'emailProcess'])
					}
					setOtpVerified(secureLocalStorage.getItem('isOtpVerified'))
					setLoggedVia('phone')
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>Please Enter a valid OTP</Typography>)
				console.log(failureData, 'Error occured in the method validateOTP')
				chatList.push({
					type: 'SEND',
					data: chatDetails.chatMessage,
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'enterOtp',
				})
				chatList.push({
					type: 'RECEIVE',
					data: 'Please enter a valid OTP',
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'enterOtp',
				})
				setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'enterOtp', chatMessage: ''})
			})
		secureLocalStorage.setItem('mobileNumber', chatDetails.mobileNumber)
	}

	const searchSymptoms = () => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		let symptomListItems = cloneDeep(chatDetails.previousSymptomList.length > 0 ? chatDetails.previousSymptomList : chatDetails.symptomList)
		let botSaveList = []
		chatList.push({type: 'SEND', data: chatDetails.chatMessage, messageType: 'default', stage: chatDetails.stage})
		botSaveList.push({
			chatbotMessage: JSON.stringify({type: 'SEND', data: chatDetails.chatMessage, messageType: 'default', stage: chatDetails.stage}),
			custUuid: getUserId(),
			isSystemMessage: false,
		})
		consultApi
			.searchSymptom(chatDetails.chatMessage)
			.then(response => {
				if (response && response.data && response.status === 200) {
					if (response.data.length === 0 || response.data.message === 'suc_searchSymtomsDataNotFound') {
						symptomListItems.data.message = 'err_dataNotFound'
						botSaveList.push({
							chatbotMessage: JSON.stringify({type: 'RECEIVE', data: 'err_dataNotFound', messageType: 'err_dataNotFound', stage: 'symptomList'}),
							custUuid: getUserId(),
							isSystemMessage: true,
						})
						chatList.push({
							type: 'RECEIVE',
							data: 'err_dataNotFound',
							messageType: 'err_dataNotFound',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						})
						chatList.push({
							type: 'RECEIVE',
							data: symptomListItems,
							messageType: 'symptomList',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'getSymptom',
							isSkip: false,
						})
						botSaveList.push({
							chatbotMessage: JSON.stringify({
								type: 'RECEIVE',
								data: symptomListItems,
								messageType: 'symptomList',
								stage: 'getSymptom',
								isSkip: true,
							}),
							custUuid: getUserId(),
							isSystemMessage: true,
						})
					} else {
						symptomListItems.data.message = 'found'
						chatList.push({
							type: 'RECEIVE',
							data: response.data,
							messageType: 'symptomList',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							isSkip: false,
						})
						botSaveList.push({
							chatbotMessage: JSON.stringify({
								type: 'RECEIVE',
								data: response.data,
								messageType: 'symptomList',
								stage: chatDetails.stage,
								isSkip: true,
							}),
							custUuid: getUserId(),
							isSystemMessage: true,
						})
					}
					saveChatBotDetails(botSaveList)
					setChatDetails({
						...chatDetails,
						symptomList: response.data.data.length > 0 ? response.data : symptomListItems,
						chatMessage: '',
						chatMessageArea: chatList,
					})
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method searchSymptoms')
			})
	}

	const getUserId = () => {
		return secureLocalStorage.getItem('custUuid')
	}

	const fetchSymptomsList = data => {
		const mastTentGroupUuid = 'fyi6pmtm'
		const chatList = cloneDeep(data || chatDetails.chatMessageArea)
		chatList.push({type: 'RECEIVE', data: welcomeChat, messageType: 'welcomeChat', stage: 'getSymptom'})
		consultApi
			.getSymptomList(mastTentGroupUuid)
			.then(response => {
				if (response && response.data && response.data.status === 'success') {
					chatList.push({
						type: 'RECEIVE',
						data: response.data,
						messageType: 'symptomList',
						date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						stage: 'getSymptom',
						isSkip: false,
					})
					const botSaveList = [
						{
							chatbotMessage: JSON.stringify({type: 'RECEIVE', data: welcomeChat, messageType: 'welcomeChat', stage: 'getSymptom'}),
							custUuid: getUserId(),
							isSystemMessage: true,
						},
						{
							chatbotMessage: JSON.stringify({
								type: 'RECEIVE',
								data: response.data,
								messageType: 'symptomList',
								stage: 'getSymptom',
								isSkip: true,
							}),
							custUuid: getUserId(),
							isSystemMessage: true,
						},
					]
					saveChatBotDetails(botSaveList)
					if (!processedList.includes('getSymptom')) {
						setProcessedList([...processedList, 'getSymptom'])
					}
					setChatDetails(prevDetails => ({
						...prevDetails,
						previousSymptomList: cloneDeep(response.data),
						symptomList: response.data,
						chatMessageArea: chatList,
					}))
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method fetchSymptomsList')
			})
	}

	const saveChatBotDetails = data => {
		const userId = getUserId()
		if (userId === null) {
			return
		}
		const obj = data
		consultApi
			.saveChatBotDetails(obj)
			.then(response => {
				if (response && response.data && response.data.status === 'success') {
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method saveChatBotDetails')
			})
	}

	const getEmailId = () => {
		return secureLocalStorage.getItem('emailId')
	}

	const fetchPerefrence = data => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		console.log('preferee', chatList)
		chatList.push({type: 'RECEIVE', data: preference, messageType: 'preference', stage: 'chatOptStage'})
		let stage = ''
		let subStage = ''
		if (chatOption?.status === 'success') {
			stage = 'chatOptStage'
			subStage = ''
			chatList.push({
				type: 'RECEIVE',
				data: chatOption,
				messageType: 'chatOption',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'chatOptStage',
				disable: false,
			})
		}
		const botSaveList = [
			{
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: preference, messageType: 'default', stage: 'chatOptStage'}),
				custUuid: getUserId(),
				isSystemMessage: true,
			},
			{
				chatbotMessage: JSON.stringify({
					type: 'RECEIVE',
					data: chatOption,
					messageType: 'chatOption',
					stage: 'chatOptStage',
					disable: true,
				}),
				custUuid: getUserId(),
				isSystemMessage: true,
			},
		]
		saveChatBotDetails(botSaveList)
		setChatDetails({
			...chatDetails,
			chatOption: chatOption,
			stage: stage,
			chatMessageArea: chatList,
			subStage: subStage,
		})
	}

	const fetchSpecialityDetails = data => {
		const userName = secureLocalStorage.getItem('username')
		const mobileNumber = secureLocalStorage.getItem('mobileNumber')
		const isOtpVerified = secureLocalStorage.getItem('isOtpVerified')
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		chatList.push({
			type: 'SEND',
			data: data.symtomName,
			messageType: 'default',
			date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
			stage: 'numberProcess',
		})
		const botSaveList = [
			{
				chatbotMessage: JSON.stringify({type: 'SEND', data: data.symtomName, messageType: 'default', stage: 'numberProcess'}),
				custUuid: getUserId(),
				isSystemMessage: false,
			},
		]
		consultApi
			.showSpecialityDetails(data.symtomUuid)
			.then(response => {
				if (response && response.data && response.data.status === 'success') {
					chatList.push({
						type: 'RECEIVE',
						data: response.data,
						messageType: 'specialityDetail',
						date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						stage: 'numberProcess',
					})
					botSaveList.push({
						chatbotMessage: JSON.stringify({type: 'RECEIVE', data: response.data, messageType: 'specialityDetail', stage: 'numberProcess'}),
						custUuid: getUserId(),
						isSystemMessage: true,
					})
					let stage = ''
					let subStage = ''
					if (userName === null) {
						stage = 'numberProcess'
						subStage = 'getName'
						chatList.push({
							type: 'RECEIVE',
							data: 'Enter your Name',
							messageType: 'default',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'numberProcess',
							subStage: 'getName',
						})
						botSaveList.push({
							chatbotMessage: JSON.stringify({
								type: 'RECEIVE',
								data: 'Enter your Name',
								messageType: 'default',
								stage: 'numberProcess',
								subStage: 'getName',
							}),
							custUuid: getUserId(),
							isSystemMessage: true,
						})
					} else if (mobileNumber === null || isOtpVerified === null || isOtpVerified === 'false') {
						stage = 'numberProcess'
						subStage = ''
						chatList.push({
							type: 'RECEIVE',
							data: 'Enter your Mobile Number',
							messageType: 'default',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'numberProcess',
							subStage: 'getName',
						})
					}
					// else if (getEmailId() === null) {
					// 	stage = 'emailProcess'
					// 	subStage = ''
					// 	chatList.push({
					// 		type: 'RECEIVE',
					// 		data: 'Enter your Email',
					// 		messageType: 'default',
					// 		date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					// 		stage: 'emailProcess',
					// 	})
					// 	botSaveList.push({
					// 		chatbotMessage: JSON.stringify({
					// 			type: 'RECEIVE',
					// 			data: 'Enter your Email',
					// 			messageType: 'default',
					// 			date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					// 			stage: 'emailProcess',
					// 		}),
					// 		custUuid: getUserId(),
					// 		isSystemMessage: true,
					// 	})
					// }
					else {
						stage = 'payUI'
						subStage = ''
						chatList.push({
							type: 'RECEIVE',
							data: response.data.data.length > 0 ? response.data.data[0] : {},
							messageType: 'payUI',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'payUI',
							disable: false,
						})
						botSaveList.push({
							chatbotMessage: JSON.stringify({
								type: 'RECEIVE',
								data: response.data.data.length > 0 ? response.data.data[0] : {},
								messageType: 'payUI',
								disable: true,
								stage: 'payUI',
							}),
							custUuid: getUserId(),
							isSystemMessage: true,
						})
					}
					saveChatBotDetails(botSaveList)
					if (!processedList.includes(stage)) {
						setProcessedList([...processedList, stage])
					}
					setChatDetails({
						...chatDetails,
						symptomDetails: response.data.data.length > 0 ? response.data.data[0] : {},
						stage: stage,
						chatMessageArea: chatList,
						subStage: subStage,
					})
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method fetchSpecialityDetails')
			})
	}

	console.log('chatDetailsqwe', chatDetails)

	const refundStatus = () => {
		consultApi
			.refundStatus({custUuid: getUserId()})
			.then(response => {
				if (response && response.data && response.data.status === 'success') {
					toast.success(<Typography variant='h5'>Your payment will be refund shortly</Typography>)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the refund policy')
			})
	}

	const timerProcessStopCallBack = () => {
		setTrydisable(false)
		tryStart()
		// callNotificationDecline()
	}

	const tryStart = () => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		chatList.push({type: 'RECEIVE', data: tryOption, messageType: 'tryOption', stage: 'tryOption', disable: false})
		const botSaveList = [
			{
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: tryOption, messageType: 'tryOption', stage: 'tryOption', disable: true}),
				custUuid: getUserId(),
				isSystemMessage: true,
			},
		]
		saveChatBotDetails(botSaveList)
		setChatDetails({
			...chatDetails,
			chatMessageArea: chatList,
			stage: 'tenetAcceptPending',
			chatMessage: '',
		})
	}

	const fetchTryOption = data => {
		if (data?.label === 'Try again') {
			const chatList = cloneDeep(chatDetails.chatMessageArea)
			console.log('ranjith', chatDetails)
			const botSaveList = []
			chatList.push({
				type: 'SEND',
				data: data?.label,
				messageType: 'tryOption',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'tryOption',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'SEND', data: data?.label, messageType: 'tryOption', stage: 'tryOption'}),
				custUuid: getUserId(),
				isSystemMessage: false,
			})
			// saveChatBotDetails(botSaveList)
			// setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'tryOption', chatMessage: ''})
			setTimeout(() => {
				chatList.push({
					type: 'RECEIVE',
					data: chatDetails.symptomDetails,
					messageType: 'processCompleted',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'processCompleted',
				})
				chatList.push({
					type: 'RECEIVE',
					data: chatDetails.symptomDetails,
					messageType: 'timerScreen',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'tenetAcceptPending',
				})
				botSaveList.push({
					chatbotMessage: JSON.stringify({
						type: 'RECEIVE',
						data: chatDetails.symptomDetails,
						messageType: 'processCompleted',
						stage: 'processCompleted',
					}),
					custUuid: getUserId(),
					isSystemMessage: true,
				})
				botSaveList.push({
					chatbotMessage: JSON.stringify({
						type: 'RECEIVE',
						data: chatDetails.symptomDetails,
						messageType: 'timerScreen',
						stage: 'tenetAcceptPending',
						skipTimer: true,
					}),
					custUuid: getUserId(),
					isSystemMessage: true,
				})
				saveChatBotDetails(botSaveList)
				setChatDetails({...chatDetails, paymentDetails: payRes, stage: 'tenetAcceptPending', chatMessageArea: chatList, chatMessage: ''})
				paymentId ? tenantCallNotification(paymentId) : null
				setTrydisable(true)
			}, 500)
		} else if (data?.label === 'Cancel and refund') {
			const chatList = cloneDeep(chatDetails.chatMessageArea)
			const botSaveList = []
			chatList.push({
				type: 'SEND',
				data: data?.label,
				messageType: 'tryOption',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'tryOption',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'SEND', data: data?.label, messageType: 'tryOption', stage: 'tryOption'}),
				custUuid: getUserId(),
				isSystemMessage: false,
			})
			chatList.push({type: 'RECEIVE', data: refundStatu, messageType: 'default', stage: 'tryOption'})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: refundStatu, messageType: 'default', stage: 'tryOption', disable: true}),
				custUuid: getUserId(),
				isSystemMessage: true,
			})
			saveChatBotDetails(botSaveList)
			setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'tryOption', chatMessage: ''})
			handlePayMentRefund()
			setTrydisable(true)
		} else {
		}
	}

	const getLocalOtp = () => {
		return secureLocalStorage.getItem('isOtpVerified')
	}

	useEffect(() => {
		if (getLocalOtp() === 'true') {
			setIsLoading(true)
			// getTenetDispDetails()
		} else {
			welcomeMsg()
		}
		return () => {
			if (getLocalOtp() === null || getLocalOtp() === 'false') {
				secureLocalStorage.removeItem('mobileNumber')
			}
		}
	}, [])

	const fetchChatoptions = data => {
		if (data?.label === 'Continue Here') {
			const chatList = cloneDeep(chatDetails.chatMessageArea)
			const botSaveList = []
			chatList.push({
				type: 'SEND',
				data: data?.label,
				messageType: 'getSymptom',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'getSymptom',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'SEND', data: data?.label, messageType: 'getSymptom', stage: 'getSymptom'}),
				custUuid: getUserId(),
				isSystemMessage: false,
			})
			saveChatBotDetails(botSaveList)
			console.log('chat', chatList)
			setChatDetails({...chatDetails, chatMessageArea: chatList, stage: 'getSymptom', chatMessage: ''})
			setTimeout(() => {
				fetchSymptomsList()
			}, 500)
		} else if (data?.label === 'Continue with Whatsapp') {
			window.open('https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+brought-right&type=phone_number&app_absent=0', '_blank')
			setChatOptDisable(true)
			setState(false)
		} else {
		}
	}

	const imageLayer = items => {
		return (
			<Grid item md={1} lg={1} className={classes.systemImg}>
				<Image alt={avatarText} src={'/images/icons/LYFnGOLogo.svg'} width='100%' height='100%' />
			</Grid>
		)
	}

	const chatLayout = (items, date) => {
		return (
			<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
				{imageLayer(items)}
				<Grid item direction='column' spacing={1} md={8} lg={8}>
					<Typography className={clsx('', classes.leftMessageContent)}>{items}</Typography>
					<Typography className={classes.timeDisplayFont} style={{paddingRight: '10px'}}>
						{date || moment(items.date).format('DD/MM/YY [at] hh:mm A')}
					</Typography>
				</Grid>
			</Grid>
		)
	}

	const welcmeMenuLayout = (items, date) => {
		return (
			<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
				{imageLayer(items)}
				<Grid item direction='column' spacing={1} md={8} lg={8}>
					<Typography className={clsx('', classes.leftMessageContent)}>{items}</Typography>
					<Typography className={classes.timeDisplayFont} style={{paddingRight: '10px'}}>
						{date || moment(items.date).format('DD/MM/YY [at] hh:mm A')}
					</Typography>
				</Grid>
			</Grid>
		)
	}

	useEffect(() => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		if (!_.isEmpty(chatList)) {
			const tryAgain = secureLocalStorage.getItem('trygain')
			if (tryAgain === 4 && counter === 0) {
				chatList.push({
					type: 'RECEIVE',
					data: refundPolicy,
					messageType: 'refundPolicy',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'refundPolicy',
				})
			}
			const botSaveList = [
				{
					chatbotMessage: JSON.stringify({type: 'RECEIVE', data: refundPolicy, messageType: 'refundPolicy', stage: 'refundPolicy'}),
					custUuid: getUserId(),
					isSystemMessage: true,
				},
			]
			saveChatBotDetails(botSaveList)
			setChatDetails({
				...chatDetails,
				chatMessageArea: chatList,
				stage: 'refundPolicy',
				chatMessage: '',
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter])

	const renderItems = (details, index) => {
		const {data, messageType, date} = details
		console.log('detailw', details, data?.data)
		switch (messageType) {
			case 'welcomeAidiva':
				return data.map(items => {
					return welcmeMenuLayout(items, date)
				})
			case 'categoryList':
				return (
					<Grid direction='row'>
						<>
							{data?.data?.map(categotyFilter => {
								return (
									<>
										<Button
											key={categotyFilter?.id}
											variant='outlined'
											className={clsx(classes.chatOpt_Btn, categotyFilter?.disable && classes.chatOptDisabl)}
											disabled={categotyFilter?.disable}
											onClick={() => {
												fetchCategotyOption(categotyFilter)
												categotyFilter?.label ? secureLocalStorage.setItem('trygain', 0) : ''
											}}>
											{categotyFilter?.label}
										</Button>
									</>
								)
							})}
						</>
					</Grid>
				)
			case 'welcomeChat':
				return data.map(items => {
					return chatLayout(items, date)
				})
			case 'symptomList':
				return (
					<Grid direction='row'>
						<>
							{data.data &&
								data.data.length > 0 &&
								data.data.slice(0, 5).map(symptomDetail => {
									return (
										<>
											<Button
												key={symptomDetail.symtomUuid}
												variant='outlined'
												className={classes.specialityBtn}
												onClick={
													details.isSkip
														? () => {}
														: () => {
																fetchSpecialityDetails(symptomDetail)
														  }
												}
												disabled={details.isSkip || stopTimer}>
												{symptomDetail.symtomName}
											</Button>
										</>
									)
								})}
						</>
					</Grid>
				)
			case 'chatOption':
				return (
					<Grid direction='row'>
						<>
							{data?.data?.map(chatOptBtn => {
								return (
									<>
										<Button
											key={chatOptBtn?.id}
											variant='outlined'
											className={clsx(classes.chatOpt_Btn, (details.disable || chatOptDisable) && classes.chatOptDisabl)}
											onClick={() => {
												fetchChatoptions(chatOptBtn)
											}}
											disabled={(chatOptBtn?.label === 'Continue Here' && true) || details?.disable || chatOptDisable || stopTimer}>
											{chatOptBtn?.label}
										</Button>
									</>
								)
							})}
						</>
					</Grid>
				)
			case 'payUI':
				const amount = data.b2cSubscriptionMaxPrice || (chatDetails.symptomDetails && chatDetails.symptomDetails.b2cSubscriptionMaxPrice) || 0
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						{imageLayer()}
						<Grid item direction='column' spacing={1} md={8} lg={8}>
							<Grid container direction='row' className={classes.leftMessageContent} justifyContent='space-between'>
								<div>
									<Typography className={clsx('', classes.leftMessageContent)} style={{paddingTop: '0px', paddingBottom: '0px'}}>
										Confirm and pay
									</Typography>
									<Typography className={classes.amountText}>&#x20B9; {amount}</Typography>
								</div>
								<Button
									className={clsx(classes.payBtn, (details.disable || isPayUiDisable || amount === 0) && classes.payDisable)}
									variant='contained'
									onClick={() => {
										setChatDetails(prevState => ({...prevState, symptomDetails: data}))
										setAddCartModalOpen(true)
									}}
									disabled={details.disable || isPayUiDisable || amount === 0}>
									Pay Now
								</Button>
							</Grid>
							<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
						</Grid>
					</Grid>
				)
			case 'specialityDetail':
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						{data.data.map(data => {
							return (
								<>
									{imageLayer()}
									<Grid item direction='column' spacing={1} md={8} lg={8}>
										<Grid container direction='column' className={classes.leftMessageContent}>
											<Typography className={clsx('', classes.leftMessageContent)} style={{padding: '0px'}}>
												{data.specialityName}
											</Typography>
											<Typography className={classes.amountText} style={{paddingLeft: '0px'}}>
												<b>&#x20B9; {data.b2cSubscriptionMaxPrice || 0}</b>
											</Typography>
										</Grid>
										<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
									</Grid>
								</>
							)
						})}
					</Grid>
				)
			case 'paymentError':
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}} className={classes.leftMessageContent}>
							<Grid container direction='row' alignItems='center' alignContent='center'>
								<Typography className={clsx('', classes.leftMessageContent, classes.padding0)}>Your Payment</Typography>
								<Typography className={classes.amountText}>
									<b>
										&#x20B9; {data?.b2cSubscriptionMaxPrice || (chatDetails.symptomDetails && chatDetails.symptomDetails.b2cSubscriptionMaxPrice)}
									</b>
								</Typography>
							</Grid>
							<Typography className={classes.paymentError}>Payment Error</Typography>
							<Grid container direction='row' wrap='nowrap' alignItems='center' style={{color: '#616161', fontSize: '13px'}}>
								<Info style={{paddingRight: '5px'}} />
								<Typography className={clsx(classes.leftMessageContent, classes.padding0)}>
									If your funds were debited, they will be refunded in 3-5 business days
								</Typography>
							</Grid>
						</Grid>
						<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
					</Grid>
				)
			case 'processCompleted':
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						{imageLayer()}
						<Grid item direction='column' spacing={1} md={8} lg={8}>
							<Grid container direction='row' className={classes.leftMessageContent} justifyContent='space-between'>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<Typography
										className={clsx('', classes.leftMessageContent)}
										style={{paddingTop: '0px', paddingBottom: '0px', paddingLeft: '0px', paddingRight: '10px'}}>
										Your Payment
									</Typography>
									<Typography className={classes.amountText}>
										&#x20B9; {data?.b2cSubscriptionMaxPrice || (chatDetails.symptomDetails && chatDetails.symptomDetails.b2cSubscriptionMaxPrice)}
									</Typography>
								</div>
								<Typography className={clsx(classes.paymentError, classes.successItem)}>Completed Successfully</Typography>
							</Grid>
							<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
						</Grid>
					</Grid>
				)
			case 'timerScreen':
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						{imageLayer()}
						<Grid item direction='column' spacing={1} md={8} lg={8}>
							<Grid container direction='row' className={classes.leftMessageContent} justifyContent='space-between'>
								Verified doctors online now. one of them will speak to you in 5mins.
								{!stopTimer && !details.skipTimer && (
									<div>
										<TimerComponent callBack={timerProcessStopCallBack} isStop={stopTimer} min={min} sec={sec} setMin={setMin} setSec={setSec} />
									</div>
								)}
							</Grid>
							<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
						</Grid>
					</Grid>
				)
			case 'refundPolicy':
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						{imageLayer()}
						<Grid item direction='column' spacing={1} md={8} lg={8}>
							<Grid container direction='row' className={classes.leftMessageContent} justifyContent='space-between'>
								{refundPolicy}
							</Grid>
							<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
						</Grid>
					</Grid>
				)
			case 'err_dataNotFound':
				return (
					<Grid direction='row'>
						<>{chatLayout(notFoundMsg, moment(new Date()).format('DD/MM/YY [at] hh:mm A'))}</>
					</Grid>
				)
			case 'tryOption':
				return (
					<Grid direction='row'>
						<>
							{data?.data?.map(tryOptBtn => {
								return (
									<>
										<Button
											key={tryOptBtn?.id}
											variant='outlined'
											className={clsx(classes.chatOpt_Btn, (tryDisable || details.disable) && classes.tryDisable)}
											onClick={() => {
												fetchTryOption(tryOptBtn)
												setCounter(counter + 1)
												secureLocalStorage.setItem('trygain', counter)
											}}
											disabled={(tryOptBtn?.label === 'Try again' && counter === 5) || details?.disable || tryDisable}>
											{tryOptBtn?.label}
										</Button>
									</>
								)
							})}
						</>
					</Grid>
				)
			case 'tenetAccepted':
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						{imageLayer()}
						<Grid item direction='column' spacing={1} md={8} lg={8}>
							<Grid container direction='row' className={classes.leftMessageContent} justifyContent='space-between'>
								<Typography style={{color: '#0151C8', fontWeight: 600}}>
									{data.tentUserFirstName ||
										data.tentUserUuid ||
										(chatDetails.tenetDisplayDetails.tenantUserResponseDTO &&
											(chatDetails.tenetDisplayDetails.tenantUserResponseDTO.tentUserFirstName ||
												chatDetails.tenetDisplayDetails.tenantUserResponseDTO.tentUserUuid))}{' '}
									{data.tentUserLastName ||
										(chatDetails.tenetDisplayDetails.tenantUserResponseDTO && chatDetails.tenetDisplayDetails.tenantUserResponseDTO.tentUserLastName)}
								</Typography>
								<Typography style={{color: '#616161', fontSize: '13px', marginTop: '7px'}}>Accepted your online consultation</Typography>
								<Button
									className={classes.payBtn}
									style={{borderRadius: '5px', marginTop: '10px'}}
									variant='contained'
									onClick={() => {
										setChatWithUsOpen(true)
										processGetTenentDetails(true)
									}}>
									Chat with us
								</Button>
							</Grid>
							<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
						</Grid>
					</Grid>
				)
			case '':
				return (
					<Grid container direction='row' md={12} lg={12} style={{margin: '4px 8px 15px 0px'}}>
						{imageLayer()}
						<Grid item direction='column' spacing={1} md={8} lg={8}>
							<Grid container direction='row' className={classes.leftMessageContent} justifyContent='space-between'>
								Verified doctors online now. one of them will speak to you in 5mins.
								{!stopTimer && !details.skipTimer && (
									<div>
										<TimerComponent callBack={timerProcessStopCallBack} isStop={stopTimer} min={min} sec={sec} setMin={setMin} setSec={setSec} />
									</div>
								)}
							</Grid>
							<Typography className={classes.timeDisplayFont}>{data.date || date}</Typography>
						</Grid>
					</Grid>
				)
			default:
				return chatLayout(data, date)
		}
	}

	const renderRightItems = details => {
		console.log('kadhal', details)
		return (
			<Grid
				container
				direction='row'
				style={{margin: '4px 8px 15px auto', justifyContent: 'right'}}
				alignItems='center'
				justifyContent='right'
				alignContent='right'>
				<Grid item direction='column' spacing={1} md={8} lg={8}>
					<Typography className={clsx('', classes.leftMessageContent, classes.rightItems)}>{details.data}</Typography>
					<Typography className={classes.timeDisplayFont} align='right'>
						{details.date || moment(new Date()).format('DD/MM/YY [at] hh:mm A')}
					</Typography>
				</Grid>
				<Grid item md={1} lg={1} className={classes.emojiLayer}>
					<Avatar src={getProfilePic?.logoPath} />
				</Grid>
			</Grid>
		)
	}

	const handleProcessCompleted = response => {
		const botSaveList = []
		if (response === 'failed') {
			toast.success(<Typography variant='h5'>Payment failed</Typography>)
			const chatList = cloneDeep(chatDetails.chatMessageArea)
			chatList.push({
				type: 'RECEIVE',
				data: '',
				messageType: 'paymentError',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'payUI',
			})
			chatList.push({
				type: 'RECEIVE',
				data: '',
				messageType: 'payUI',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'payUI',
				subStage: 'payAgain',
			})
			setChatDetails(prevState => ({...prevState, stage: 'payUI', chatMessageArea: chatList}))
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: chatDetails.symptomDetails, messageType: 'paymentError', stage: 'payUI'}),
				custUuid: getUserId(),
				isSystemMessage: true,
			})
		} else {
			toast.success(<Typography variant='h5'>Payment success</Typography>)
			const chatList = cloneDeep(chatDetails.chatMessageArea)
			chatList.push({
				type: 'RECEIVE',
				data: '',
				messageType: 'processCompleted',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'processCompleted',
			})
			chatList.push({
				type: 'RECEIVE',
				data: '',
				messageType: 'timerScreen',
				date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
				stage: 'tenetAcceptPending',
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({
					type: 'RECEIVE',
					data: chatDetails.symptomDetails,
					messageType: 'processCompleted',
					stage: 'processCompleted',
				}),
				custUuid: getUserId(),
				isSystemMessage: true,
			})
			botSaveList.push({
				chatbotMessage: JSON.stringify({type: 'RECEIVE', data: '', messageType: 'timerScreen', stage: 'tenetAcceptPending', skipTimer: true}),
				custUuid: getUserId(),
				isSystemMessage: true,
			})
			saveChatBotDetails(botSaveList)
			setChatDetails(prevState => ({...prevState, paymentDetails: response.data, stage: 'tenetAcceptPending', chatMessageArea: chatList}))
			tenantCallNotification(response?.data?.paymentId)
			setPayRes(response?.data)
			setPaymentId(response?.data?.paymentId)
			setDisable(true)
		}
	}

	// const findTenet = () => {
	// 	const body = {
	// 		symtomName: '', //chatDetails.symptomDetails.symtomName
	// 		latlon: '11.022624067330087,76.9993107765913',
	// 		distance: '',
	// 		gender: '',
	// 		language: '',
	// 		feesRangeFrom: 0,
	// 		feesRangeTo: 80.0,
	// 		pageNum: 1,
	// 		pageItem: 5,
	// 		sortBy: '',
	// 	}
	// 	consultApi
	// 		.findTenet(body)
	// 		.then(response => {
	// 			if (response && response.data && response.data.status === 'success') {
	// 				setChatDetails(prevState => ({...prevState, tenetUserDetails: response.data?.data}))
	// 				saveCallNotification(response?.data?.data)
	// 			}
	// 		})
	// 		.catch(err => {
	// 			toast.error(<Typography variant='h5'>Error Occured</Typography>)
	// 			console.log(err, 'Error occured in the method findTenet')
	// 		})
	// }

	// const saveCallNotification = tenetUserDetails => {
	// 	const body = {
	// 		callAttenderUuid: '',
	// 		callDeclineStatus: false,
	// 		callNotificationStatus: 'In-Progress',
	// 		customerUuid: custUuid,
	// 		noOfTenantUsers: 0,
	// 		tenantUserDetails: tenetUserDetails,
	// 		custSymptoms: chatDetails.symptomDetails.symtomName,
	// 	}
	// 	consultApi
	// 		.saveCallNotification(body)
	// 		.then(response => {
	// 			if (response && response?.data && response?.data?.status === 'success') {
	// 				typeof window !== undefined ? secureLocalStorage.setItem('callNotificationUuid', response?.data?.data?.callNotificationUuid) : null
	// 				setChatDetails(prevState => ({...prevState, tenetUserDetails: response?.data, openTenetAttendProcess: true}))
	// 			}
	// 		})
	// 		.catch(err => {
	// 			toast.error(<Typography variant='h5'>{err.response.data.error}</Typography>)
	// 			console.log(err, 'Error occured in the method saveCallNotification')
	// 		})
	// }

	const tenantCallNotification = data => {
		const body = {
			custUuid: getUserId(),
			custSymptoms: chatDetails.symptomDetails.symtomName,
			specialityUuid: chatDetails.symptomDetails.specialityUuid,
			paymentId: data,
			feeRange: chatDetails.symptomDetails.b2cSubscriptionMaxPrice,
		}
		console.log('lastbody', body)
		consultApi
			.saveTenantCallNotification(body)
			.then(response => {
				if (response && response?.data && response?.data?.status === 'success') {
					typeof window !== undefined ? secureLocalStorage.setItem('callNotificationUuid', response?.data?.data?.callNotificationUuid) : null
					setChatDetails(prevState => ({...prevState, tenetUserDetails: response?.data?.data?.tenantUserDetails, openTenetAttendProcess: true}))
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err.response.data.message}</Typography>)
				console.log(err, 'Error occured in the method saveCallNotification')
			})
	}

	console.log('chatDetails', chatDetails)

	// const handleReset = () => {
	// 	setChatDetails({...chatState})
	// 	setTimeout(() => {
	// 		fetchSymptomsList()
	// 	}, 1000)
	// }

	const handlePayMentRefund = () => {
		const body = {
			isFullRefund: true,
			paymentId: chatDetails.paymentDetails.paymentId,
			subscriptionMode: 'B2C',
		}
		consultApi
			.paymentRefund(body)
			.then(response => {
				if (response && response?.data && response?.data?.status === 'success') {
					toast.success(<Typography variant='h5'>Refund Initiated</Typography>)
					refundStatus()
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method handlePayMentRefund')
			})
	}

	const handleUpdateProfile = () => {
		const body = {
			custUuid: secureLocalStorage.getItem('custUuid'),
			custMobileNo: secureLocalStorage.getItem('mobileNumber'),
			custName: secureLocalStorage.getItem('username'),
		}
		consultApi
			.updateProfile(body)
			.then(response => {
				if (response && response?.data && response?.data?.status === 'success') {
					toast.success(<Typography variant='h5'>User profile detail updated</Typography>)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method handleUpdateProfile')
			})
	}

	const IsJsonString = str => {
		try {
			JSON.parse(str)
		} catch (e) {
			return false
		}
		return true
	}

	const getChatBotDetails = async tenetDisplayDetail => {
		const userId = secureLocalStorage.getItem('userId')
		const tenetDisplayDet = tenetDisplayDetail
		consultApi
			.getChatBotDetails(userId)
			.then(response => {
				if (response && response?.data && response?.data?.status === 'success') {
					let chatList = []
					if (response?.data?.data.length > 0) {
						response?.data?.data.forEach(data => {
							let obj = {}
							if (IsJsonString(data.chatbotMessage)) {
								obj = JSON.parse(data.chatbotMessage)
							} else {
								obj['data'] = data.chatbotMessage
							}
							obj['date'] = moment.utc(data.messageSendDateTime).format('DD/MM/YY [at] hh:mm A')
							obj['profilePic'] = data.messageSendedDetails.profilePic
							obj['indexKey'] = data.indexKey
							chatList.push(obj)
						})
						chatList = chatList.sort((a, b) => a.indexKey - b.indexKey)
						let lastSymtomList = chatList.length > 0 && chatList.filter(data => data.stage === 'getSymptom')
						if (!_.isEmpty(lastSymtomList)) {
							lastSymtomList = lastSymtomList[lastSymtomList.length - 1]
							lastSymtomList.isSkip = false
						}
						const lastIndex = chatList.length > 0 && chatList[chatList.length - 1]
						let showTimer = false
						const payUiList = chatList.length > 0 && chatList.filter(data => data.stage === 'payUI' && data.messageType === 'payUI')
						const tenetAcceptPending =
							chatList.length > 0 && chatList.filter(data => data.stage === 'tenetAcceptPending' && data.messageType === 'timerScreen')
						lastIndex.stage === 'payUI' &&
							chatList.forEach(dataList => {
								if (dataList.stage === 'payUI' && payUiList[payUiList.length - 1].indexKey === dataList.indexKey) {
									dataList.disable = false
								}
							})
						if (lastIndex.stage === 'tenetAcceptPending' && getLocalTenetAcceptTimer() !== null) {
							if (tenetDisplayDet !== null && tenetDisplayDet.callNotificationStatus === 'In-Progress' && getLocalTenetAcceptTimer() > 0) {
								showTimer = false
								chatList.forEach(dataList => {
									if (dataList.stage === 'tenetAcceptPending' && tenetAcceptPending[tenetAcceptPending.length - 1].indexKey === dataList.indexKey) {
										dataList.skipTimer = false
									}
								})
							} else {
								// chatList.push({
								// 	type: 'RECEIVE',
								// 	data: processEndedMsg,
								// 	messageType: 'default',
								// 	date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
								// 	stage: 'PROCESSEND',
								// })
								// const botSaveList = []
								// botSaveList.push({
								// 	chatbotMessage: JSON.stringify({
								// 		type: 'RECEIVE',
								// 		data: processEndedMsg,
								// 		messageType: 'default',
								// 		date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
								// 		stage: 'PROCESSEND',
								// 	}),
								// 	custUuid: getUserId(),
								// 	isSystemMessage: true,
								// })
								// saveChatBotDetails(botSaveList)
								welcomeMsg(chatList)
							}
						}
						setChatDetails(prevState => ({...prevState, stage: lastIndex.stage, chatMessageArea: chatList, symptomList: lastSymtomList.data}))
						setStopTimer(showTimer)
						if (lastIndex.stage === 'PROCESSEND') {
							welcomeMsg(chatList)
						}
					} else {
						welcomeMsg()
					}
					setIsLoading(false)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method getChatBotDetails')
			})
	}

	const getLocalTenetAcceptTimer = () => {
		return secureLocalStorage.getItem('tenetAcceptTime')
	}

	const userProfileEmailUpdate = email => {
		const body = {custEmail: email, custIdentityUuid: secureLocalStorage.getItem('userId'), isAddress: false}
		const decryptKey = encryption(body)
		consultApi
			.userProfileEmailUpdate(decryptKey?.plainText, decryptKey?.publicKey)
			.then(response => {
				const successData = decryption(response)
				if (successData?.status === 'success') {
					verifyEmail(email)
				}
			})
			.catch(err => {
				// const failureData = failureLogin(err)
				console.log(err, 'Error occured in the method userProfileEmailUpdate')
			})
	}

	const verifyEmail = email => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		const botSaveList = []
		const body = {isGenerateEmail: true, userName: email, userType: 'CUS', type: 'B2C'}
		let decryptKey = encryption(body)
		signupApi
			.verifyEmail(decryptKey?.plainText, decryptKey?.publicKey)
			.then(response => {
				const successData = decryption(response)
				if (successData?.status === 'success') {
					verifyEmailOtp(successData?.token, email)
				}
			})
			.catch(err => {
				const failureData = failureLogin(err)
				chatList.push({
					type: 'RECEIVE',
					data: 'Please Enter Valid Email',
					messageType: 'default',
					date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					stage: 'emailProcess',
				})
				botSaveList.push({
					chatbotMessage: JSON.stringify({
						type: 'RECEIVE',
						data: 'Please Enter Valid Email',
						messageType: 'default',
						date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						stage: 'emailProcess',
					}),
					custUuid: getUserId(),
					isSystemMessage: true,
				})
				saveChatBotDetails(botSaveList)
				setChatDetails({...chatDetails, chatMessageArea: chatList, stage: chatDetails.stage, chatMessage: ''})
				toast.error(<Typography variant='h5'>{failureData.message}</Typography>)
				console.log(failureData, 'Error occured in the method verifyEmail')
			})
	}

	const verifyEmailOtp = (token, email) => {
		const chatList = cloneDeep(chatDetails.chatMessageArea)
		const botSaveList = []
		const body = {uuid: getUserId(), verificationToken: token}
		let decryptKey = encryption(body)
		signupApi
			.verifyEmail(decryptKey?.plainText, decryptKey?.publicKey)
			.then(response => {
				const successData = decryption(response)
				if (successData?.data && successData?.status === 'success') {
					secureLocalStorage.setItem('emailId', email)
					saveActiveDevices()
					chatList.push({
						type: 'RECEIVE',
						data: emailSuccesMsg,
						messageType: 'default',
						date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
						stage: 'emailProcess',
					})
					botSaveList.push({
						chatbotMessage: JSON.stringify({
							type: 'RECEIVE',
							data: emailSuccesMsg,
							messageType: 'default',
							date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
							stage: 'emailProcess',
						}),
						custUuid: getUserId(),
						isSystemMessage: true,
					})
					let u = chatDetails.chatMessageArea.filter(data => data.messageType === 'Appointment Booking')
					!_.isEmpty(u)
						? chatList.push({type: 'RECEIVE', data: preference, messageType: 'preference', stage: 'chatOptStage'}) &&
						  chatList.push({
								type: 'RECEIVE',
								data: chatOption,
								messageType: 'chatOption',
								date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
								stage: 'chatOptStage',
								disable: false,
						  }) &&
						  botSaveList.push(
								{
									chatbotMessage: JSON.stringify({type: 'RECEIVE', data: preference, messageType: 'default', stage: 'chatOptStage'}),
									custUuid: getUserId(),
									isSystemMessage: true,
								},
								{
									chatbotMessage: JSON.stringify({
										type: 'RECEIVE',
										data: chatOption,
										messageType: 'chatOption',
										stage: 'chatOptStage',
										disable: true,
									}),
									custUuid: getUserId(),
									isSystemMessage: true,
								}
						  ) &&
						  console.log('checking1')
						: fetchSymptomsList() && console.log('checking2')
					// let specialityPreviousObj = chatDetails.chatMessageArea.filter(data => data.messageType === 'specialityDetail')
					// specialityPreviousObj = specialityPreviousObj[specialityPreviousObj.length - 1]
					// chatList.push({
					// 	type: 'RECEIVE',
					// 	data: chatDetails.symptomDetails || specialityPreviousObj.data.data[0] || {},
					// 	messageType: 'payUI',
					// 	date: moment(new Date()).format('DD/MM/YY [at] hh:mm A'),
					// 	stage: 'payUI',
					// })
					// botSaveList.push({
					// 	chatbotMessage: JSON.stringify({type: 'RECEIVE', data: chatDetails.symptomDetails, messageType: 'payUI', stage: 'payUI', disable: true}),
					// 	custUuid: getUserId(),
					// 	isSystemMessage: true,
					// })
					// if (!processedList.includes('payUI')) {
					// 	setProcessedList([...processedList, 'payUI'])
					// }
					saveChatBotDetails(botSaveList)
					setChatDetails({...chatDetails, chatMessageArea: chatList, stage: chatDetails.stage, chatMessage: ''})
					toast.success(<Typography variant='h5'>{emailSuccesMsg}</Typography>)
				}
			})
			.catch(err => {
				const failureData = failureLogin(err)
				toast.error(<Typography variant='h5'>{failureData?.message}</Typography>)
				console.log(failureData, 'Error occured in the method verifyEmailOtp')
			})
	}

	const handleOnKeyDown = event => {
		if (chatDetails.chatMessage.trim().length === 0) {
			return
		}
		if (event.key === 'Enter') {
			handleSendMessage()
		}
	}

	useEffect(() => {
		const element = document.getElementById('msgChatBot')
		element.scrollTop = element.scrollHeight
	}, [chatDetails])

	let avatarText = 'U'

	return (
		<>
			<Card style={{borderRadius: '10px'}}>
				<CardContent style={{padding: '0px'}} className={classes.chatArea_CardContent}>
					<Grid className={clsx('pb-14', classes.topHeader)}>
						<div className={classes.flexOrder}>
							<Grid item md={2} lg={2} className={classes.headerLogo}>
								<Image alt={avatarText} src={'/images/icons/LYFnGOLogo.svg'} width='100%' height='100%' />
							</Grid>
							<Typography className={classes.chatArea_name}>LYFnGO Bot</Typography>
						</div>
						<div>
							<IconButton
								className={classes.menuIcon}
								id='demo-customized-button'
								aria-controls={open ? 'demo-customized-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}
								onClick={menuOpen}
								disabled={!isAuth || (min && sec) ? true : false}>
								{anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
							</IconButton>
							<StyledMenu
								id='demo-customized-menu'
								MenuListProps={{
									'aria-labelledby': 'demo-customized-button',
								}}
								anchorEl={anchorEl}
								open={open}
								onClose={menuClose}>
								<MenuItem
									onClick={() => {
										menuClose('Online Consultation')
									}}
									disableRipple>
									Online Consultation
									<VideocamIcon />
								</MenuItem>
								<MenuItem
									onClick={() => {
										menuClose('Appointment Booking')
									}}
									disableRipple>
									Appointment Booking
									<CalendarMonthIcon />
								</MenuItem>
								<MenuItem
									disabled
									style={{background: 'rgb(0 0 0 / 16%)', color: 'rgba(0, 0, 0, 0.26)'}}
									// onClick={() => {
									// 	menuClose('Lab Order')
									// }}
									disableRipple>
									Lab Order (coming so..)
									<ScienceIcon />
								</MenuItem>
							</StyledMenu>
						</div>

						{/* <Button variant="outlined" className={classes.resetBtn} onClick={() => { handleReset() }}>Reset</Button> */}
					</Grid>
					<Grid
						className={clsx('mb-14', classes.msg_area)}
						id='msgChatBot'
						style={{textAlign: isLoading ? 'center' : 'unset', filter: anchorEl ? 'blur(2px)' : 'none'}}>
						{isLoading ? (
							<CircularProgress color='primary' style={{color: 'rgb(124, 96, 220)'}} />
						) : (
							<Grid container direction='column' className={clsx(classes.msgWrap)} md={12} lg={12}>
								{chatDetails.chatMessageArea &&
									chatDetails.chatMessageArea.map((details, index) => {
										return <>{details.type === 'RECEIVE' ? renderItems(details, index) : renderRightItems(details, index)}</>
									})}
							</Grid>
						)}
					</Grid>
					<Grid className={classes.footer}>
						<TextField
							variant='outlined'
							placeholder='Type and hit the enter here...'
							onChange={e => {
								setChatDetails({...chatDetails, chatMessage: e.target.value})
							}}
							onKeyPress={e => {
								chatDetails.chatMessage === '' && e.charCode === 32 ? e.preventDefault() : ''
							}}
							className={classes.searchBox}
							value={chatDetails.chatMessage}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<div className={classes.sendIconLayer} style={{opacity: chatDetails.chatMessage.trim().length === 0 ? 0.5 : 1}}>
											<IconButton disabled={chatDetails.chatMessage.trim().length === 0}>
												<Send className={classes.navigationOutlinedIcon} onClick={() => handleSendMessage()} />
											</IconButton>
										</div>
									</InputAdornment>
								),
							}}
							onKeyDown={handleOnKeyDown}
							id='inputBox'
						/>
					</Grid>
				</CardContent>
			</Card>
			{isAddCartModalOpen && (
				<AddCartModal
					open={isAddCartModalOpen}
					handleClose={() => setAddCartModalOpen(false)}
					symptomDetails={chatDetails.symptomDetails}
					callBack={handleProcessCompleted}
					loading={loading}
					setLoading={setLoading}
				/>
			)}
			{chatWithUsOpen && Object.keys(chatDetails.tenetDisplayDetails).length > 0 && (
				<ChatWithUsModal
					open={chatWithUsOpen}
					setChatWithUsOpen={() => {
						setChatWithUsOpen()
					}}
					tenetDisplayDetails={chatDetails.tenetDisplayDetails}
				/>
			)}
		</>
	)
}
export default AidivaBot

export function TimerComponent(props) {
	const {callBack, isStop, setMin, setSec, min, sec} = props
	const tenetAcceptTime = secureLocalStorage.getItem('tenetAcceptTime')
	const [countDown, setCountDown] = useState(1)
	const [runTimer, setRunTimer] = useState(false)
	secureLocalStorage.setItem('tenetAcceptTime', countDown)
	useEffect(() => {
		let timerId
		if (runTimer) {
			setCountDown(tenetAcceptTime !== null && Number(tenetAcceptTime) > 1 ? Number(tenetAcceptTime) : 60 * 5)
			timerId = setInterval(() => {
				setCountDown(countDown => countDown - 1)
			}, 1000)
		} else {
			clearInterval(timerId)
			!isStop && countDown === 0 && callBack()
		}

		if (isStop) {
			clearInterval(timerId)
		}

		return () => clearInterval(timerId)
	}, [runTimer, isStop])

	useEffect(() => {
		if (countDown < 0 && runTimer) {
			setRunTimer(false)
			setCountDown(0)
		}
	}, [countDown, runTimer])

	useEffect(() => {
		togglerTimer()
	}, [])

	const togglerTimer = () => setRunTimer(t => !t)

	const seconds = String(countDown % 60).padStart(2, 0)
	const minutes = String(Math.floor(countDown / 60)).padStart(2, 0)

	useEffect(() => {
		if (seconds === '00' && minutes === '00') {
			setMin(false)
			setSec(false)
		}
		// else if (seconds === '00' && minutes === '00') {
		// 	setMin(false)
		// 	setSec(false)
		// }
		else {
			setMin(true)
			setSec(true)
		}
	}, [minutes, seconds, setMin, setSec])

	console.log('timerCnn', minutes, seconds, min, sec)

	return (
		<div className='App'>
			<div style={{color: '#7047EA', fontSize: '18px'}}>
				{runTimer ? (
					<b>
						{minutes}:{seconds}
					</b>
				) : (
					<b>00:00</b>
				)}
			</div>
		</div>
	)
}
