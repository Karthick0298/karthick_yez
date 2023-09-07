import {createContext, useState, useEffect, useCallback} from 'react'
import {Typography} from '@material-ui/core'
import {useRouter} from 'next/router'
// import firebase from '../../firebase/initFirebase'
import Axios from 'axios'
// import {mapUserData} from '../../firebase/mapUserData'
// import {removeUserCookie, setUserCookie, getUserFromCookie} from '../../firebase/userCookies'
import {API_ENDPOINTS} from '../../../src/constants'
import _ from 'lodash'
import moment from 'moment'
import {ToastContainer, toast} from 'react-toastify'
import getCusProfilePicApi from '../../../Service/ProfilePic'
import logoutApi from '../../../Service/Setting/Logout'
import signupApi from '../../../Service/Login/loginAes/index'
import {browserName, osName, osVersion, getUA, getSelectorsByUserAgent} from 'react-device-detect'
import {encryption, decryption, failureLogin} from '../AES'
import CountIntegration from '../../../Service/MyAccount/badgeCount'
import secureLocalStorage from 'react-secure-storage'
import LoginPractice from '../../../Service/Login/loginAes/index'
import {csrf} from '../csrf/index'

const AuthContext = createContext()

export function AuthProvider({children}) {
	const [user, setUser] = useState(null)
	const [countryCodeOptions, setCountryCodeOptions] = useState([])
	const [country, setCountry] = useState(null)
	const [secondaryCountry, setSecondaryCountry] = useState(null)
	const [emailUser, setEmailUser] = useState(null)
	const [phoneUser, setPhoneUser] = useState(null)
	const [phoneOtpCount, setPhoneOtpCount] = useState(0)
	const [emailOtpCount, setEmailOtpCount] = useState(0)
	const [phoneResend, setPhoneResend] = useState(null)
	const [emailResend, setEmailResend] = useState(null)
	const [loading, setLoading] = useState(false)
	const [load, setLoad] = useState(false)
	const router = useRouter()
	const accessuserId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const accessToken = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
	const loggedViatru = typeof window !== 'undefined' ? secureLocalStorage.getItem('loggedVia') : null
	const isOtpVerifiedtru = typeof window !== 'undefined' ? secureLocalStorage.getItem('isOtpVerified') : null
	const logo = typeof window !== 'undefined' ? secureLocalStorage.getItem('logoUuid') : null
	const userName = typeof window !== 'undefined' ? secureLocalStorage.getItem('custName') : null
	const custId = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
	const [token, setToken] = useState(accessToken)
	const [userId, setUserId] = useState(accessuserId)
	const [custUuid, setCustUuid] = useState(custId)
	const [loggedVia, setLoggedVia] = useState(loggedViatru)
	const [otpVerified, setOtpVerified] = useState(isOtpVerifiedtru)
	const [getProfilePic, setGetProfilePic] = useState(null)
	const [isEmailOtp, setIsEmailOtp] = useState(false)
	const [emailOtpError, setEmailOtpError] = useState(false)
	// To open and close dashboard and settings
	const [anchorEl, setAnchorEl] = useState(null)
	const [openLocation, setOpenLocation] = useState(null)
	const [locationData, setLocationData] = useState(null)
	const deviceDetect = getSelectorsByUserAgent(getUA)
	const [userLogo, setUserLogo] = useState(logo)
	const [custName, setCustName] = useState(userName)
	const [locDetails, setLocDetails] = useState()
	// Login otp state
	const [openValidatePinLogin, setOpenValidatePinLogin] = useState(false)
	const [phoneOtpPopup, setPhoneOtpPopup] = useState(false)
	const tentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('tentUuid') : ''
	const [practicelist, setPracticeList] = useState([])
	const [practiceName, setPracticeName] = useState('')
	const [list, setList] = useState([])

	// Active devices state
	const [activeDeviceValues, setActiveDeviceValues] = useState({
		browserName: (browserName && browserName) || null,
		deviceName: deviceDetect?.mobileVendor || null,
		ipAddress: null,
		model: deviceDetect?.mobileModel || null,
		osName: (osName && osName) || null,
		osVersion: (osVersion && osVersion) || null,
	})

	const headers = {
		'Content-Type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': 'true',
		'X-SECURITY': csrf(),
		isAuthRequired: false,
	}

	// typeof window !== "undefined" && secureLocalStorage.setItem('custTenantUuid', "iqlba8nx")
	// typeof window !== "undefined" && secureLocalStorage.setItem('custUuid', 'kot7ekv')
	// typeof window !== "undefined" && secureLocalStorage.setItem('appointmentUuid', 'I2XXZLff')
	typeof window !== 'undefined' && secureLocalStorage.setItem('consultUuid', 'ujfuq49f')

	// Set Default Country Code -- India +91
	const setDefaultCountryCode = () => {
		// if (!_.isEmpty(countryCodeOptions)) {
		// 	let initialCountryCode = _.find(countryCodeOptions, {mastLookupKey: '91'})
		// 	setCountry(initialCountryCode)
		// 	setSecondaryCountry(initialCountryCode)
		// }
	}
	const signin = async () => {
		// try {
		// 	setLoading(true)
		// 	return firebase
		// 		.auth()
		// 		.signInWithPopup(new firebase.auth.GoogleAuthProvider())
		// 		.then(response => {
		// 			setUser(response.user)
		// 			secureLocalStorage.setItem('isOtpVerified', true)
		// 			router.push('/')
		// 			// router.reload()
		// 		})
		// } finally {
		// 	setLoading(false)
		// }
	}
	// start: Get IP for Current location //
	const getLocationDetails = async () => {
		const res = await Axios.get('https://ipapi.co/json/')
		secureLocalStorage.setItem('countryCode', res?.data?.country_calling_code)
		setLocDetails(res?.data)
	}
	useEffect(() => {
		getLocationDetails()
	}, [])
	// End: Get IP for Current location //
	// Google login--------------//

	const mapUserDataServer = user => {
		const {email, displayName, photoURL} = user
		return {
			email: email,
			userName: displayName,
			path: photoURL,
			userType: 'CUS',
		}
	}
	useEffect(() => {
		let userData
		if (!_.isEmpty(user)) {
			userData = mapUserDataServer(user)
			let decryptKey = encryption(userData)
			const result = {data: decryptKey?.plainText}
			Axios.post(API_ENDPOINTS.SIGN_UP, result, {
				headers: {...headers, isAes: true, key: `${decryptKey?.publicKey}`},
				withCredentials: false,
			})
				.then(response => {
					const successData = decryption(response)
					const storeToken = successData.bearer
					const user = successData.data
					const data = {
						userId: user.uuid,
						token: storeToken,
						userType: user.userType,
					}
					secureLocalStorage.setItem('userId', data.userId)
					secureLocalStorage.setItem('token', data.token)
					secureLocalStorage.setItem('userType', data.userType)
					secureLocalStorage.setItem('isOtpVerified', true)
					setToken(data.token)
					setUserId(data.userId)
					setOtpVerified(secureLocalStorage.getItem('isOtpVerified'))
					saveActiveDevices()
				})
				.catch(err => {
					// const failureData = failureLogin(err)
					setLoading(false)
					secureLocalStorage.setItem('userId', '')
					secureLocalStorage.setItem('token', '')
					secureLocalStorage.setItem('userType', '')
					secureLocalStorage.setItem('isOtpVerified', false)
				})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	useEffect(() => {
		// let userData
		// const cancelAuthListener = firebase.auth().onIdTokenChanged(user => {
		// 	if (user) {
		// 		userData = mapUserDataServer(user)
		// 		setUserCookie(userData)
		// 		setUser(user)
		// 	} else {
		// 		removeUserCookie()
		// 		setUser()
		// 	}
		// })

		// const userFromCookie = getUserFromCookie()
		// if (userFromCookie && userData) {
		// 	setUser(userData)
		// }

		// return () => {
		// 	cancelAuthListener()
		// }
	}, [])

	// Facebook login---------------//

	const facebooksignin = async () => {
		// try {
		// 	setLoading(true)
		// 	return firebase
		// 		.auth()
		// 		.signInWithPopup(new firebase.auth.FacebookAuthProvider())
		// 		.then(response => {
		// 			setUser(response.user)
		// 			router.push('/')
		// 		})
		// } finally {
		// 	setLoading(false)
		// }
	}

	//-----------Phone Login -----------------//

	const mapPhoneUserDataServer = mobileNo => {
		let countryStr = '+'
		return {
			countryCode: !_.isEmpty(country?.mastLookupKey || secondaryCountry?.mastLookupKey)
				? countryStr + country.mastLookupKey || countryStr + secondaryCountry?.mastLookupKey
				: null,
			mobileNo: mobileNo,
			userType: 'CUS',
		}
	}
	const phonesignin = async (mobileNo, pinCall) => {
		let userData
		userData = mapPhoneUserDataServer(mobileNo)
		let decryptKey = encryption(userData)
		const onSuccess = res => {
			const successData = decryption(res)
			console.log('successData', successData)
			if (successData?.isSignUp === true) {
				setPhoneUser(successData?.data?.otp)
				setUserId(successData?.data?.uuid)
				setToken(successData.bearer)
				const storeToken = successData?.bearer
				const user = successData?.data
				// const isSetPin = successData?.isSetPin
				const data = {
					userId: user.uuid,
					token: storeToken,
					userType: user.userType,
				}
				secureLocalStorage.setItem('userId', data?.userId)
				secureLocalStorage.setItem('token', data.token)
				secureLocalStorage.setItem('userType', data.userType)
				secureLocalStorage.setItem('mobileNumber', mobileNo)
				secureLocalStorage.setItem('tentUuid', successData?.tentUuid)
				secureLocalStorage.setItem('custUuid', successData?.custUuid)
				pinCall(successData?.isFromB2b, successData?.isSetPin)
				secureLocalStorage.setItem('isSetPin', successData?.isSetPin)
				secureLocalStorage.setItem('isFromB2b', successData?.isFromB2b)
				// let str = '+'
				// secureLocalStorage.setItem('countryCode', str.concat(userData?.countryCode))
				secureLocalStorage.setItem('countryCode', userData?.countryCode)
				// getCustomerProfilePic()
				// setPhoneOtpCount(phoneOtpCount + 1)
			} else if (successData?.isSignUp === false) {
				setUserId(successData?.uuid)
				setToken(successData.bearer)
				const storeToken = successData?.bearer
				const user = successData?.data
				secureLocalStorage.setItem('userId', successData?.uuid)
				secureLocalStorage.setItem('token', successData?.bearer)
				secureLocalStorage.setItem('mobileNumber', mobileNo)
				secureLocalStorage.setItem('tentUuid', successData?.tentUuid)
				secureLocalStorage.setItem('custUuid', successData?.custUuid)
				pinCall(successData?.isFromB2b, successData?.isSetPin)
				secureLocalStorage.setItem('isSetPin', successData?.isSetPin)
				secureLocalStorage.setItem('isFromB2b', successData?.isFromB2b)
				// let str = '+'
				// secureLocalStorage.setItem('countryCode', str.concat(userData?.countryCode))
				secureLocalStorage.setItem('countryCode', userData?.countryCode)
				// getCustomerProfilePic()
				// setPhoneOtpCount(phoneOtpCount + 1)
			}
		}
		const onFailure = err => {
			// setLoading(false)
			const failureData = failureLogin(err)
			toast.failure(
				<Typography variant='h5' style={{zIndex: 9999}}>
					{failureData?.error}
				</Typography>
			)
		}
		signupApi.setSignUp(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
	}

	// Email login----------------//

	const mapEmailUserDataServer = email => {
		return {
			email: email,
			userType: 'CUS',
		}
	}

	const emailsignin = async email => {
		let userData
		userData = mapEmailUserDataServer(email)
		// setLoading(true)
		let decryptKey = encryption(userData)
		// setLoading(true)
		const onSuccess = res => {
			const successData = decryption(res)
			if (successData?.status === 'success') {
				// setLoading(false)
				setIsEmailOtp(true)
				setUserId(successData?.data?.uuid)
				setToken(successData?.bearer)
				const storeToken = successData.bearer
				const user = successData.data
				const data = {
					userId: user.uuid,
					token: storeToken,
					userType: user.userType,
				}
				secureLocalStorage.setItem('userId', data.userId)
				secureLocalStorage.setItem('token', data.token)
				secureLocalStorage.setItem('userType', data.userType)
				setEmailOtpCount(emailOtpCount + 1)
			}
		}
		const onFailure = err => {
			const failureData = failureLogin(err)
			toast.failure(
				<Typography variant='h5' style={{zIndex: 9999}}>
					{failureData?.error}
				</Typography>
			)
			setIsEmailOtp(false)
			setLoading(false)
			console.log('AXIOS ERROR: ', err)
			setEmailOtpError(true)
		}
		signupApi.setSignUp(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
	}

	//-----------Email OTP validation--------------//

	// const validOtp = async data => {
	// 	setLoading(true)
	// 	Axios.post(API_ENDPOINTS.VERIFY_EMAIL_TOKEN, data, {
	// 		headers: {...headers, isJava: true},
	// 		withCredentials: false,
	// 	})
	// 		.then(response => {
	// 			setEmailUser(response.data.status)
	// 			secureLocalStorage.setItem('loggedVia', 'email')
	// 			secureLocalStorage.setItem('isOtpVerified', true)
	// 			router.push('/')
	// 			router.reload()
	// 		})
	// 		.catch(error => {
	// 			setLoading(false)
	// 			console.log('emailOtp ERROR: ', error)
	// 			secureLocalStorage.setItem('isEmailUser', '')
	// 			secureLocalStorage.setItem('isOtpVerified', false)
	// 		})
	// }

	// useEffect(() => {
	// 	let userData
	// 	const cancelAuthListener = emailsignin(emailUser => {
	// 		if (emailUser) {
	// 			userData = mapEmailUserDataServer(emailUser)
	// 			setUserCookie(userData)
	// 			setEmailUser(emailUser)
	// 		} else {
	// 			removeUserCookie()
	// 			setEmailUser()
	// 		}
	// 	})

	// 	const userFromCookie = getUserFromCookie()
	// 	if (userFromCookie && userData) {
	// 		setEmailUser(userData)
	// 	}

	// 	return () => {
	// 		cancelAuthListener()
	// 	}
	// }, [])

	//----------- PHONE OTP Validation------------//

	//--------Mobile resend otp---------//

	const phoneResendOtp = async data => {
		let decryptKey = encryption(data)
		// setLoading(true)
		const onSuccess = res => {
			// setLoading(false)
			const successData = decryption(res)
			if (successData?.status === 'success') {
				toast.success(
					<Typography variant='h5' style={{zIndex: 9999}}>
						OTP has been sent successfully
					</Typography>
				)
				setPhoneResend(successData.data.otp)
				setPhoneOtpCount(phoneOtpCount + 1)
			}
		}
		const onFailure = err => {
			// setLoading(false)
			const failureData = failureLogin(err)
			toast.success(
				<Typography variant='h5' style={{zIndex: 9999}}>
					Please try again
				</Typography>
			)
			console.log('AXIOS ERROR: ', err)
		}
		signupApi.sendOtp(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
	}
	//---------- Email resend otp------------//

	//---------phone signout-----------//
	const signOutPhoneUserDataServer = mobileNo => {
		return {
			countryCode: '+91',
			mobileNo: mobileNo,
			userType: 'CUS',
		}
	}

	const phoneSignOut = async mobileNo => {
		try {
			let phoneDataServer
			phoneDataServer = signOutPhoneUserDataServer(mobileNo)
			let decryptKey = encryption(phoneDataServer)
			const result = {data: decryptKey?.plainText}
			setLoading(true)
			Axios.post(API_ENDPOINTS.SIGN_UP, result, {
				headers: {...headers, isAes: true, key: `${decryptKey?.publicKey}`},
				withCredentials: false,
			})
				.then(response => {
					const successData = decryption(response)
					setLoading(false)
					setPhoneUser(false)
					// router.reload()
					secureLocalStorage.clear()
					router.push('/')
				})
				.catch(e => {
					console.error(e)
				})
		} finally {
			setLoading(false)
		}
	}

	//----------email signOut----------//

	const signOutEmailUserDataServer = email => {
		return {
			email: email,
			userType: 'CUS',
		}
	}

	const emailSignOut = async email => {
		try {
			let emailDataServer
			emailDataServer = signOutEmailUserDataServer(email)
			let decryptKey = encryption(emailDataServer)
			const result = {data: decrypt?.plainText}
			setLoading(true)
			Axios.post(API_ENDPOINTS.SIGN_UP, result, {
				headers: {...headers, isAes: true, key: `${decryptKey?.publicKey}`},
				withCredentials: false,
			})
				.then(response => {
					const successData = decryption(response)
					setLoading(false)
					setEmailUser(false)
					secureLocalStorage.clear()
					router.push('/')
				})
				.catch(e => {
					console.error(e)
				})
		} finally {
			setLoading(false)
		}
	}

	//------------ Social SignOut-------------//

	const signout = async () => {
		// setLoading(true)
		// try {
		// 	return firebase
		// 		.auth()
		// 		.signOut()
		// 		.then(() => {
		// 			setLoading(false)
		// 			setUser(false)
		// 			router.push('/')
		// 			router.reload()
		// 			secureLocalStorage.clear()
		// 		})
		// 		.catch(e => {
		// 			console.error(e)
		// 		})
		// } finally {
		// 	setLoading(false)
		// }
	}

	//-------------Saving Active Device-------------//
	const activeDeviceData = () => {
		return {
			browserName: activeDeviceValues?.browserName,
			deviceId: null,
			deviceName: (activeDeviceValues?.deviceName !== 'none' && activeDeviceValues?.deviceName) || null,
			deviceToken: null,
			ipAddress: activeDeviceValues?.ipAddress || null,
			locCity: locDetails?.city,
			locCountry: locDetails?.country_name || null,
			loginTime: moment().format() || null,
			logoutTime: null,
			model: (activeDeviceValues?.model !== 'none' && activeDeviceValues?.model) || null,
			osName: activeDeviceValues?.osName,
			osVersion: activeDeviceValues?.osVersion,
			qrStatus: false,
			sessionDetails: activeDeviceValues?.osName,
			status: true,
			version: null,
		}
	}

	const saveActiveDevices = async () => {
		const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
		let deviceData
		deviceData = activeDeviceData()
		// setLoading(true)
		let decryptKey = encryption(deviceData)
		const onSuccess = res => {
			const successData = decryption(res)
			// setLoading(false)
			if (successData?.status === 'success') {
				secureLocalStorage.setItem('DeviceUuuid', successData?.data?.deviceUuid)
				secureLocalStorage.setItem('token', successData?.data?.Bearer)
				return <>{toast.success(<Typography variant='h5'>Logged in successfully </Typography>)}</>
			}
		}
		const onFailure = err => {
			// setLoading(false)
			console.log('save device ERROR: ', err)
			return <>{toast.error(<Typography variant='h5'>Please try after some time</Typography>)}</>
		}
		signupApi.saveDevice(decryptKey?.plainText, decryptKey?.publicKey, userId, token).then(onSuccess, onFailure)
	}

	// ----------------------------
	const getCustomerProfilePic = useCallback(() => {
		const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
		if (custUuid) {
			const onSuccess = res => {
				const successData = decryption(res)
				console.log('successdATA', successData)
				if (successData?.status === 'success') {
					setGetProfilePic(successData?.data)
					setUserLogo(successData?.data?.custLogoUuid)
					setCustName(successData?.data?.custName)
					secureLocalStorage.setItem('custName', successData?.data?.custName)
					secureLocalStorage.setItem('logoUuid', successData?.data?.custLogoUuid)
				} else {
					setGetProfilePic([])
				}
			}
			const onFailure = err => {
				console.log('customer profile pic', err)
			}
			getCusProfilePicApi.getCusProfilePic(custUuid, token).then(onSuccess, onFailure)
		}
	}, [token])

	useEffect(() => {
		getCustomerProfilePic()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loggedVia, otpVerified])
	const deviceUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('DeviceUuuid') : null

	const deviceLogout = () => {
		if (deviceUuid) {
			const onSuccess = res => {
				secureLocalStorage.clear()
				router.push('/marketplace')
				setUser(null)
				setToken(null)
				setUserId(null)
				setLoggedVia(null)
				setOtpVerified(null)
				setOpenLocation(null)
				// setSearchSuggestions([])
				toast.success(<Typography variant='h5'>Logged out successfully </Typography>)
			}
			const onFailure = err => {
				console.log('error', err)
				toast.error(<Typography variant='h5'>Please try after sometime </Typography>)
			}
			logoutApi.LogoutDevice(deviceUuid).then(onSuccess, onFailure)
		} else {
			toast.error(<Typography variant='h5'>Please try after sometime </Typography>)
		}
	}
	const menuListData = useCallback(() => {
		setLoading(true)
		if (custId && tentUuid) {
			console.log('custCount', custId)
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					setList(res.data)
					setLoading(false)
				} else {
					setList([])
				}
			}
			const onFailure = err => {
				console.log('Error', err)
				setLoading(false)
			}
			CountIntegration.CountIntegration(custId, tentUuid).then(onSuccess, onFailure)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [custId, tentUuid])
	// mulitiUserDetails
	const MultiUserDetail = useCallback(() => {
		// setLoad(true)
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				// setLoad(false)
				setPracticeList(res?.data?.data)
			}
		}
		const onFailure = err => {
			// setLoad(false)
		}

		LoginPractice.multiuser(userId, token).then(onSuccess, onFailure)
	}, [token, userId])

	useEffect(() => {
		if (!_.isEmpty(practicelist)) {
			let currentPractice = _.find(practicelist, {mastTentUuid: tentUuid})
			setPracticeName(currentPractice || {})
		}
	}, [tentUuid, practicelist])
	// useEffect(() => {
	// 	DietPlanDetail()
	// }, [DietPlanDetail])
	console.log('custU', custUuid, tentUuid)
	return (
		<>
			<AuthContext.Provider
				value={{
					user,
					loading,
					countryCodeOptions,
					setCountryCodeOptions,
					setDefaultCountryCode,
					country,
					setCountry,
					secondaryCountry,
					setSecondaryCountry,
					emailUser,
					phoneUser,
					phoneResend,
					emailResend,
					setEmailResend,
					setUser,
					signin,
					signout,
					facebooksignin,
					phonesignin,
					phoneOtpCount,
					setPhoneOtpCount,
					emailOtpCount,
					setEmailOtpCount,
					emailsignin,
					emailSignOut,
					phoneSignOut,
					// validOtp,
					phoneResendOtp,
					// emailResendOtp,
					saveActiveDevices,
					deviceLogout,
					token,
					setToken,
					userId,
					setUserId,
					loggedVia,
					setLoggedVia,
					otpVerified,
					setOtpVerified,
					getProfilePic,
					getCustomerProfilePic,
					setGetProfilePic,
					isEmailOtp,
					setIsEmailOtp,
					emailOtpError,
					setEmailOtpError,
					setLoading,
					anchorEl,
					setAnchorEl,
					load,
					setLoad,
					openLocation,
					setOpenLocation,
					setLocationData,
					userLogo,
					setUserLogo,
					custName,
					setCustName,
					setOpenValidatePinLogin,
					openValidatePinLogin,
					setPhoneOtpPopup,
					phoneOtpPopup,
					menuListData,
					setList,
					list,
					practiceName,
					setPracticeName,
					practicelist,
					MultiUserDetail,
					custUuid,
					setCustUuid,
					tentUuid,
				}}>
				{children}
			</AuthContext.Provider>
			<ToastContainer hideProgressBar={true} position='top-right' autoClose={4000} draggable style={{top: '3em'}} />
		</>
	)
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext
