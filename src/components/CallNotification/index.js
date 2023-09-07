import React, {useState, useRef, useEffect} from 'react'
import {Dialog, Typography, Grid, IconButton, Avatar} from '@material-ui/core'
import {Call, CallEnd} from '@material-ui/icons'
import clsx from 'clsx'
import consultApi from '../../../Service/ConsultChat'
import _ from 'lodash'
import useSound from 'use-sound'
// import firebase from 'firebase/app'
// import 'firebase/database'
import dynamic from 'next/dynamic'
import {useStyles} from './styles'
import {ToastContainer, toast} from 'react-toastify'
import secureLocalStorage from 'react-secure-storage'

const Jitsi = dynamic(() => import('../jitsi'), {ssr: false})

const CallNotification = props => {
	const classes = useStyles()
	const [callActiveDetails, setCallActiveDetails] = useState({})
	let jwtToken = useRef()
	const [showTimer, setShowTimer] = useState(false)
	const [isCallTimeOut, setCallTimeOut] = useState(false)
	const [isMinimize, setMinimize] = useState(false)

	const [play, {stop}] = useSound('/audio/teams.mp3')

	let timeOut

	useEffect(() => {
		if (isCallTimeOut && callActiveDetails?.conferenceStatus === 'Initiate') {
			// play()
		} else {
			// stop()
		}
	}, [isCallTimeOut, callActiveDetails])

	let appointmentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('appointmentUuid') : null
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null

	// useEffect(() => {
	// 	fetchCallDetails()
	// }, [])

	const fetchCallDetails = React.useCallback(() => {
		let ref = firebase.database().ref(`OnlineConsultation`)
		// let ref = firebase.database().ref(`OnlineConsultation/${appointmentUuid}/call`);
		ref.on('value', function(snapshot) {
			let appointmentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('appointmentUuid') : null
			const snapData = _.filter(_.values(snapshot.val()), x => x.appointmentUuid === appointmentUuid)[0]?.call
			console.log(snapData, 'snapData7777777777')
			if (snapData !== null) {
				if (snapData?.conferenceStatus === 'Initiate') {
					//   play();
					setCallActiveDetails(snapData)
					if (snapData?.conferenceStatus === 'Initiate' && snapData?.callInitiateCustomer) {
						setCallTimeOut(true)
					}
				}

				if (snapData?.conferenceStatus?.toLowerCase() === 'in-progress') {
					generateJwtTokenForMeeting(snapData)
					// setCallActiveDetails(snapData)
					// stop();
					if (snapData?.callInitiateCustomer) {
						setCallTimeOut(true)
					}
					clearTimeout(timeOut)
					// setTimeout(() => {
					//     setCallActiveDetails(snapData)
					// }, 3000)
				}

				if (snapData?.conferenceStatus === 'Completed') {
					setCallActiveDetails({})
					setShowTimer(false)
					setCallTimeOut(false)
					// stop();
				}
				if (snapData?.conferenceStatus === 'Declined') {
					setCallActiveDetails({})
					setCallTimeOut(false)
					// stop();
				}
			} else {
				setCallActiveDetails({})
				setCallTimeOut(false)
			}
		})
	}, [])

	const generateJwtTokenForMeeting = snapData => {
		//   stop()
		consultApi
			.generateTokenOnCustomer(snapData?.custUuid)
			.then(resp => {
				if (resp?.data?.status === 'success') {
					jwtToken.current = resp?.data?.data
					setTimeout(() => {
						setCallActiveDetails(snapData)
					}, 3000)
				}
			})
			.catch(err => {
				console.log(err)
			})
	}

	//  useEffect(() => {
	//      if (callActiveDetails?.conferenceStatus === 'Initiate' && callActiveDetails?.callInitiateCustomer && isCallTimeOut) {
	//          timeOut = setTimeout(() => {
	//              handleDisconnectPopUpCall(callActiveDetails?.meetingUuid, callActiveDetails?.appointmentUuid, callActiveDetails?.conferenceType);
	//          }, 30000);
	//      }
	//  }, [isCallTimeOut]);

	useEffect(() => {
		return () => {
			clearTimeout(timeOut)
		}
	}, [])

	const handleMeetingCallLeave = meetingUuid => {
		const body = {
			appointmentUuid: appointmentUuid,
			meetingUuid: meetingUuid,
			isCallLeaveByCustomer: true,
		}
		consultApi
			.consultMeetingCallLeave(body)
			.then(resp => {
				if (resp?.data?.status === 'success') {
					handleDeleteSpecificMeeting(meetingUuid)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>Error Occured</Typography>)
				console.log(err, 'Error occured in the method consultMeetingCallLeave')
			})
	}

	const handleDeleteSpecificMeeting = meetingUuid => {
		// const body = {
		//     "appointmentUuid": appointmentUuid,
		//     "meetingUuid": meetingUuid,
		// }
		consultApi.consultDeleteSpecificMeeting(appointmentUuid, meetingUuid).then(resp => {
			if (resp?.data?.status === 'success') {
			}
		})
	}
	const handleCustomerCallAccept = meetingUuid => {
		const body = {
			appointmentUuid: appointmentUuid,
			meetingUuid: meetingUuid,
		}
		consultApi
			.consultMeetingCustomerCallAccept(body)
			.then(resp => {
				if (resp?.data?.status === 'success') {
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>Error Occured</Typography>)
				console.log(err, 'Error occured in the method consultMeetingCustomerCallAccept')
			})
	}

	// helps to save message when call decline
	const handleSendMessageAfterDecline = (meetingUuid, conferenceType) => {
		const body = {
			appointmentUuid: appointmentUuid,
			callType: conferenceType,
			isCustomerCallDeclined: true,
		}
		consultApi
			.consultMessageSaveDeclineCall(body)
			.then(resp => {
				if (resp?.data?.status === 'success') {
					handleDeleteSpecificMeeting(meetingUuid)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>Error Occured</Typography>)
				console.log(err, 'Error occured in the method consultMessageSaveDeclineCall')
			})
	}

	const handleCustomerDeclineEndCall = meetingUuid => {
		let body = {
			appointmentUuid: appointmentUuid,
			meetingUuid: meetingUuid,
			isCallDeclinedByCustomer: true,
		}
		// stop();
		consultApi
			.consultMeetingCallDecline(body)
			.then(resp => {
				setCallActiveDetails({})
				if (resp?.data?.status === 'success') {
					handleSendMessageAfterDecline(meetingUuid)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>Error Occured</Typography>)
				console.log(err, 'Error occured in the method consultMeetingCallDecline')
			})
	}

	const handleDisconnectPopUpCall = (meetingUuid, appointmentUuid, conferenceType) => {
		//   stop();
		let body = {
			appointmentUuid: appointmentUuid,
			meetingUuid: meetingUuid,
			isCallDisconnectByCustomer: true,
		}
		consultApi
			.consultMeetingCallDisconnect(body)
			.then(resp => {
				setCallActiveDetails({})
				if (resp?.data?.status === 'success') {
					handleSendMessageAfterDecline(meetingUuid, appointmentUuid, conferenceType)
					setCallTimeOut(false)
					clearTimeout(timeOut)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>Error Occured</Typography>)
				console.log(err, 'Error occured in the method consultMeetingCallDisconnect')
			})
	}

	console.log(callActiveDetails, 'callActiveDeraislslsls')
	console.log(userId, 'callActiveDeraislslsls')

	return (
		<>
			{userId && (
				<>
					{/* <ToastContainer /> */}
					{Object.keys(callActiveDetails).length > 0 && callActiveDetails?.conferenceStatus?.toLowerCase() === 'in-progress' && (
						<Jitsi
							JWT_Token={jwtToken.current}
							roomName={callActiveDetails?.meetingUuid}
							jitsiDetails={callActiveDetails}
							handleDecline={() => handleMeetingCallLeave(callActiveDetails?.meetingUuid)}
							setShowTimer={setShowTimer}
							isMinimize={isMinimize}
							setMinimize={setMinimize}
							showTimer={showTimer}
						/>
					)}

					{/* calling notification when tenant initiate meeting */}
					{Object.keys(callActiveDetails).length > 0 &&
						callActiveDetails?.conferenceStatus?.toLowerCase() === 'initiate' &&
						!callActiveDetails?.callInitiateCustomer && (
							<Grid container className={classes.containerWrap} direction='column'>
								{/* {_.map(notificationDetails, (x, i) => {
                        console.log(x, i, "notificationDetails")
                        return ( */}
								<Grid className={classes.container}>
									<div style={{height: '25px'}} />
									<Grid>
										<Avatar
											alt='Img'
											src={callActiveDetails?.callInitiatorDetails?.profilePic}
											style={{height: '80px', width: '80px', margin: '0px auto 15px'}}
										/>
										<Typography className={classes.callUserName}>
											{callActiveDetails?.callInitiatorDetails?.tentUserFirstName || callActiveDetails?.callInitiatorDetails?.tentUserUuid}
										</Typography>
										<Typography className={classes.callStatus}>Is Calling...</Typography>
										<div style={{padding: '20px'}}>
											<IconButton
												className={clsx('', classes.IconBgCss)}
												style={{marginRight: '36px'}}
												onClick={() => handleCustomerCallAccept(callActiveDetails?.meetingUuid)}>
												<Call className={classes.callIcon} />
											</IconButton>
											<IconButton
												className={classes.IconBgCss}
												onClick={() => handleCustomerDeclineEndCall(callActiveDetails?.meetingUuid, callActiveDetails?.conferenceType)}>
												<CallEnd className={classes.callEndIcon} />
											</IconButton>
										</div>
									</Grid>
								</Grid>
								{/* )
                    })} */}
							</Grid>
						)}

					{/* customer initiate meeting to tenant (calling popup) */}
					{Object.keys(callActiveDetails).length > 0 && (
						<Dialog
							fullWidth={true}
							maxWidth='xs'
							open={callActiveDetails?.conferenceStatus?.toLowerCase() === 'initiate' && callActiveDetails?.callInitiateCustomer}
							aria-labelledby='Loader Popup'
							className={classes.callingPopupDialog}>
							<Grid className={classes.callingPopUpContainer}>
								<div style={{height: '25px'}} />
								<Grid>
									<Avatar
										alt='Img'
										src={callActiveDetails?.callReceiverDetails?.profilePic}
										style={{height: '80px', width: '80px', margin: '0px auto 15px'}}
									/>
									<Typography className={classes.callUserName}>
										{callActiveDetails?.callReceiverDetails?.tentUserFirstName
											? `${callActiveDetails?.callReceiverDetails?.tentUserFirstName} ${callActiveDetails?.callReceiverDetails?.tentUserLastName ||
													''}`
											: `${callActiveDetails?.callReceiverDetails?.tentUserUuid}`}
									</Typography>
									<Typography className={classes.callStatus}>Calling...</Typography>
									<div style={{padding: '20px'}}>
										<IconButton
											className={classes.IconBgCss}
											onClick={() => {
												handleDisconnectPopUpCall(
													callActiveDetails?.meetingUuid,
													callActiveDetails?.appointmentUuid,
													callActiveDetails?.conferenceType
												)
											}}>
											<CallEnd className={classes.callEndIcon} />
										</IconButton>
									</div>
								</Grid>
							</Grid>
						</Dialog>
					)}
				</>
			)}
		</>
	)
}

export default CallNotification
