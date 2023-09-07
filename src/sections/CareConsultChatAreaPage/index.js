import {useState, useEffect, useRef} from 'react'
import {Grid, Typography} from '@material-ui/core'
import ChatArea from './ChatArea'
import ChatDetails from './ChatDetails'
import consultApi from '../../../Service/ConsultChat'
// import firebase from 'firebase/app'
// import 'firebase/database'
import {ToastContainer, toast} from 'react-toastify'
import secureLocalStorage from 'react-secure-storage'

const tempMediaDetails = {
	CustomerChatDetails: {
		imageVideo: {
			totalCount: 0,
			storage: '0 KB',
		},
		link: {
			totalCount: 0,
			storage: '0 KB',
		},
		document: {
			totalCount: 0,
			storage: '0 KB',
		},
	},
}

const CareConsultChatAreaPage = () => {
	let custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	let custUuidd = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
	let appointmentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('appointmentUuid') : null

	let [custAvailDetails, setCustAvailDetails] = useState({})
	let [loading, setLoading] = useState(true)
	let [chatData, setChatData] = useState([])
	const [isMediaLoading, setMediaLoading] = useState(true)
	const [mediaDetails, setMediaDetails] = useState()
	const [balanceCountObj, setBalanceCountObj] = useState({hideCallsBtn: false, hideMessageBtn: false})

	useEffect(() => {
		getCustomerChatAvailabilityCheck(true)
	}, [])

	// online consultation part
	const getCustomerChatAvailabilityCheck = loading => {
		consultApi
			.getCustomerAppointmentDetails(custUuidd)
			.then(resp => {
				if (resp?.data?.status === 'success') {
					setCustAvailDetails(resp?.data?.data)
					secureLocalStorage.setItem('appointmentUuid', resp?.data?.data?.appointmentUuid)
					if (loading) {
						handleTenantMediaDetails(resp?.data?.data?.appointmentUuid, loading)
					}
					if (resp?.data?.data?.balanceMessage === 0 && resp?.data?.data?.balanceCount === 0) {
						setBalanceCountObj({hideCallsBtn: true, hideMessageBtn: true})
					} else if (resp?.data?.data?.balanceMessage === 0) {
						setBalanceCountObj({...balanceCountObj, hideMessageBtn: true})
					} else if (resp?.data?.data?.balanceCount === 0) {
						setBalanceCountObj({...balanceCountObj, hideCallsBtn: true})
					}
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method getCustomerChatAvailabilityCheck')
			})
	}

	// useEffect(() => {
	// 	fetchChatMessage()
	// }, [])

	const fetchChatMessage = () => {
		let ref = firebase.database().ref(`OnlineConsultation/${appointmentUuid}/messages`)
		ref.on(
			'value',
			snapshot => {
				const snapData = _.values(snapshot.val())

				if (appointmentUuid && snapData !== null) {
					getCustomerChatAvailabilityCheck(false)
					setChatData(val => {
						let filteredX = _.filter(val, y => y.chatId !== '')
						let index = _.indexOf(val, _.find(val, ['chatId', '']))
						let replaceObj = _.find(val, ['chatId', ''])
						let tobeReplace = snapData[_.indexOf(val, _.find(val, ['chatId', '']))]
						let replaceIndex = _.indexOf(snapData, tobeReplace)

						console.log(replaceIndex, index, 'indexxxx')
						if (JSON.stringify(filteredX) !== JSON.stringify(snapData)) {
							let diff = snapData[snapData.length - 1]
							if (diff.messageType === 'text' || diff.messageType === 'file') {
								handleTenantMediaDetails(appointmentUuid, false)
							}
						}
						if (replaceObj?.messageType === 'text' || replaceObj?.messageType === 'emoji') {
							if (val && custAvailDetails.balanceMessage !== 0) {
								if (tobeReplace && tobeReplace !== undefined && replaceIndex === index) {
									val[index] = tobeReplace
								}
								return val
							} else {
								return snapData
							}
						} else {
							return snapData
						}
					})
				}
			},
			function(error) {
				console.log('Error: ' + error.code)
			}
		)
	}

	const handleTenantMediaDetails = (appointmentUuid, isCustMsgCall = true) => {
		if (isCustMsgCall) {
			setMediaLoading(true)
		}
		consultApi
			.readTenantMediaDetails(appointmentUuid)
			.then(resp => {
				const data = _.isEmpty(resp?.data?.data) ? tempMediaDetails : resp?.data?.data
				setMediaDetails(data)
				// if (isCustMsgCall) {
				setMediaLoading(false)
				setLoading(false)
				// }
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method getCustomerChatAvailabilityCheck')
			})
	}

	return (
		<>
			<Grid container item xs={12} md={12} lg={12} direction='row'>
				<Grid item xs={9} md={9} lg={9} style={{paddingRight: '20px'}}>
					<ChatArea
						custAvailDetails={custAvailDetails}
						setCustAvailDetails={setCustAvailDetails}
						loading={loading}
						chatData={chatData}
						setChatData={setChatData}
						balanceCountObj={balanceCountObj}
						setBalanceCountObj={setBalanceCountObj}
					/>
				</Grid>
				<Grid item xs={3} md={3} lg={3}>
					<ChatDetails chatData={chatData} setChatData={setChatData} isMediaLoading={isMediaLoading} mediaDetails={mediaDetails} />
				</Grid>
			</Grid>
			{/* <ToastContainer /> */}
		</>
	)
}
export default CareConsultChatAreaPage
