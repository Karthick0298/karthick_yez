import React, {useRef, useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import {Avatar, Grid, IconButton, Typography, Dialog, Button, Tooltip} from '@material-ui/core'
import {CallEnd, Mic, MicOff, VideocamRounded, CheckBoxOutlineBlankOutlined, VideocamOff, Remove} from '@material-ui/icons'
import clsx from 'clsx'
import {useStyles} from '../CallNotification/styles'

const JitsiMeeting = dynamic(() => import('@jitsi/web-sdk').then(mod => mod.JitsiMeeting), {ssr: false})

const Jitsi = props => {
	const {
		roomName = 'JitsiMeetingComponentDemo',
		domain = 'jlink.rigelsoft.com',
		onCall = false,
		JWT_Token = '',
		handleDecline = () => {},
		jitsiDetails = {},
		setShowTimer,
		isMinimize,
		setMinimize,
		showTimer,
	} = props
	const apiRefNew = useRef()
	const [logItems, updateLog] = useState([])
	const [isAudioEnable, setAudioEnabled] = useState(false)
	const [isVideoEnable, setVideoEnabled] = useState(false)
	const [knockingParticipants, updateKnockingParticipants] = useState([])
	const classes = useStyles()
	const [countDown, setCountDown] = useState(1)
	const [runTimer, setRunTimer] = useState(false)

	let displayName = jitsiDetails?.callInitiateCustomer ? jitsiDetails?.callInitiatorDetails?.custName : jitsiDetails?.callReceiverDetails?.custName
	let displayNameMinimize = jitsiDetails?.callInitiateCustomer
		? `${jitsiDetails?.callReceiverDetails?.tentUserFirstName}` || `${jitsiDetails?.callReceiverDetails?.tentUserUuid}`
		: `${jitsiDetails?.callInitiatorDetails?.tentUserFirstName}` || `${jitsiDetails?.callInitiatorDetails?.tentUserUuid}`
	let displayProfilePicMinimize = jitsiDetails?.callInitiateCustomer
		? jitsiDetails?.callReceiverDetails?.profilePic
		: jitsiDetails?.callInitiatorDetails?.profilePic

	useEffect(() => {
		let timerId
		if (runTimer && showTimer) {
			setCountDown(60 * jitsiDetails?.callDuration)
			timerId = setInterval(() => {
				setCountDown(countDown => countDown - 1)
			}, 1000)
		} else {
			clearInterval(timerId)
		}

		return () => clearInterval(timerId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [runTimer, showTimer])

	useEffect(() => {
		if (countDown < 0 && runTimer && showTimer) {
			setRunTimer(false)
			setCountDown(0)
			// callBack();
		}
	}, [countDown, runTimer, showTimer])

	useEffect(() => {
		if (showTimer) {
			togglerTimer()
		}
	}, [showTimer])

	const togglerTimer = () => setRunTimer(t => !t)

	const seconds = String(countDown % 60).padStart(2, 0)
	const minutes = String(Math.floor(countDown / 60)).padStart(2, 0)

	const printEventOutput = payload => {
		updateLog(items => [...items, JSON.stringify(payload)])
	}

	const handleAudioStatusChange = (payload, feature) => {
		if (payload.muted) {
			updateLog(items => [...items, `${feature} off`])
			if (feature === 'audio') {
				setAudioEnabled(false)
			} else {
				setVideoEnabled(false)
			}
		} else {
			updateLog(items => [...items, `${feature} on`])
			if (feature === 'audio') {
				setAudioEnabled(true)
			} else {
				setVideoEnabled(true)
			}
		}
	}

	const handleChatUpdates = (payload, ref) => {
		if (payload.isOpen || !payload.unreadCount) {
			return
		}
		ref.current.executeCommand('toggleChat')
		updateLog(items => [...items, `you have ${payload.unreadCount} unread messages`])
	}

	const handleKnockingParticipant = payload => {
		updateLog(items => [...items, JSON.stringify(payload)])
		updateKnockingParticipants(participants => [...participants, payload?.participant])
	}

	const resolveKnockingParticipants = (ref, condition) => {
		knockingParticipants.forEach(participant => {
			ref.current.executeCommand('answerKnockingParticipant', participant?.id, condition(participant))
			updateKnockingParticipants(participants => participants.filter(item => item.id === participant.id))
		})
	}

	const handleJitsiIFrameRef1 = iframeRef => {
		iframeRef.style.border = '10px solid cadetblue'
		iframeRef.style.background = 'cadetblue'
		iframeRef.style.height = '400px'
	}

	const handleJitsiIFrameRef2 = iframeRef => {
		iframeRef.style.marginTop = '10px'
		iframeRef.style.border = '10px dashed tomato'
		iframeRef.style.padding = '5px'
		iframeRef.style.height = '400px'
	}

	const handleReadyToClose = () => {
		handleDecline()
	}

	const handleApiReady = (apiObj, ref) => {
		ref.current = apiObj
		ref.current.addEventListeners({
			// Listening to events from the external API
			audioMuteStatusChanged: payload => handleAudioStatusChange(payload, 'audio'),
			videoMuteStatusChanged: payload => handleAudioStatusChange(payload, 'video'),
			raiseHandUpdated: printEventOutput,
			tileViewChanged: printEventOutput,
			chatUpdated: payload => handleChatUpdates(payload, ref),
			knockingParticipant: handleKnockingParticipant,
			// handleReadyToClose: handleReadyToClose,
		})
		setShowTimer(true)
		ref.current.addEventListener('readyToClose', function() {
			handleReadyToClose()
		})
	}

	const configJitsi = {
		DEFAULT_BACKGROUND: 'black',
	}

	let callTypeOption = []
	if (jitsiDetails?.conferenceType === 'video') {
		callTypeOption = ['microphone', 'camera']
	} else {
		callTypeOption = ['microphone']
	}

	const jitsiConfigOverWrite = {
		// enableWelcomePage: false,
		toolbarConfig: {
			alwaysVisible: true,
			autoHideWhileChatIsOpen: true,
			// TOOLBAR_ALWAYS_VISIBLE: false,
			// remoteVideoMenu: {
			// 	disabled: true,
			// }
		},
		toolbarButtons: callTypeOption,
		// conferenceInfo: {

		// },
		startAudioOnly: jitsiDetails?.conferenceType === 'video' ? false : true,
		startWithAudioMuted: true,
		hideConferenceTimer: true,
		// constraints: {
		//     video: {
		//         height: {
		//             ideal: 720,
		//             max: 720,
		//             min: 240
		//         }
		//     }
		// },
		startWithVideoMuted: true,
		// connectionIndicators: {
		// 	autoHide: true,
		// 	autoHideTimeout: 5000,
		// 	disabled: false,
		// 	disableDetails: false,
		// 	inactiveDisabled: false
		// },
		// pcStatsInterval: 10000,
		// disabledSounds: [],
		// remoteVideoMenu:{},
		// hideParticipantsStats: true,
		// _peerConnStatusOutOfLastNTimeout
	}

	return (
		<>
			<Dialog
				open={jitsiDetails?.conferenceStatus?.toLowerCase() === 'in-progress'}
				maxWidth='md'
				fullWidth
				style={{marginTop: '50px'}}
				className={isMinimize && classes.minimizeStyle}>
				<div id='metjitsi' className={classes.jitsiLayout}>
					<Grid container alignItems='center'>
						<Grid item className={classes.consultTime}>
							<span style={{paddingRight: '10px', fontSize: '12px'}} className={classes.aidivaText}>
								Consulting time
							</span>
							<div className='App'>
								<div style={{color: '#7fff00', fontSize: isMinimize ? '12px' : '14px'}}>
									{runTimer ? (
										<b>
											{minutes}:{seconds}
										</b>
									) : (
										<b>00:00</b>
									)}
								</div>
							</div>
							{/* {showTimer && <TimerComponent callBack={() => { handleDecline(jitsiDetails?.meetingUuid) }} jitsiDetails={jitsiDetails} isMinimize={isMinimize}/>} */}
						</Grid>
						<Typography alignItems='center' textAlign='center' className={classes.aidivaText}>
							LYFnGO Conference
						</Typography>
						<IconButton>
							<Tooltip title='Minimize'>
								<Remove
									onClick={() => {
										setMinimize(true)
									}}
									style={{color: 'white'}}
								/>
							</Tooltip>
						</IconButton>
					</Grid>
					{/* <Grid container className={classes.optionsLayer}> */}
					{/* <Grid item className={classes.consultTime}>
                     <span style={{ paddingRight: '10px' }}>Consulting time</span>
                     <div className="App">
                        <div style={{ color: '#7fff00', fontSize: isMinimize ? '12px' : '14px' }}>
                           {runTimer ? <b>{minutes}:{seconds}</b> : <b>00:00</b>}
                        </div>
                     </div>
                  </Grid> */}
					{/* <Grid item>
                     <Button className={classes.endButton} startIcon={<CallEnd />} onClick={() => handleDecline(jitsiDetails?.meetingUuid)}>End</Button>
                  </Grid> */}
					{/* </Grid> */}
					<JitsiMeeting
						domain='jlink.rigelsoft.com'
						roomName={roomName}
						jwt={JWT_Token}
						onApiReady={externalApi => handleApiReady(externalApi, apiRefNew)}
						onReadyToClose={handleReadyToClose}
						getIFrameRef={node => (node.style.height = '420px')}
						userInfo={{
							displayName,
						}}
						interfaceConfigOverwrite={configJitsi}
						configOverwrite={jitsiConfigOverWrite}
					/>
					<Grid item style={{textAlign: 'center', height: '40px'}}>
						<IconButton
							className={classes.IconBgCss}
							style={{position: 'absolute', margin: '10px 0px'}}
							onClick={() => {
								handleDecline(jitsiDetails.meetingUuid)
							}}>
							<CallEnd className={classes.callEndIcon} />
						</IconButton>
						{/* <Button className={classes.endButton} startIcon={<CallEnd />} onClick={() => handleDecline(jitsiDetails?.meetingUuid)}>End</Button> */}
					</Grid>
					<Typography alignItems='center' textAlign='left' className={classes.copyRightText}>
						Copyright 2022 LFYnGO
					</Typography>
				</div>
			</Dialog>
			{isMinimize && (
				<JitisiMinimizeLayout
					jitsiDetails={jitsiDetails}
					handleMeetingCallLeave={handleDecline}
					isMinimize={isMinimize}
					setMinimize={setMinimize}
					showTimer={showTimer}
					handleAudioStatusChange={handleAudioStatusChange}
					isAudioEnable={isAudioEnable}
					isVideoEnable={isVideoEnable}
					runTimer={runTimer}
					minutes={minutes}
					seconds={seconds}
					displayNameMinimize={displayNameMinimize}
					displayProfilePicMinimize={displayProfilePicMinimize}
				/>
			)}
		</>
	)
}

export default Jitsi

export const JitisiMinimizeLayout = props => {
	const {
		handleMeetingCallLeave,
		jitsiDetails,
		setMinimize,
		handleAudioStatusChange,
		isVideoEnable,
		isAudioEnable,
		showTimer,
		isMinimize,
		seconds,
		minutes,
		runTimer,
		displayProfilePicMinimize,
		displayNameMinimize,
	} = props
	const classes = useStyles()

	console.log(displayProfilePicMinimize, 'displayNameMinimize', displayNameMinimize)
	return (
		<div className={classes.minimizedJitsiLayer}>
			<Grid className={clsx(classes.container, classes.minimizePopup)}>
				<Tooltip title='Maximize'>
					<IconButton
						className={classes.maxIcon}
						onClick={() => {
							setMinimize(false)
						}}>
						<CheckBoxOutlineBlankOutlined />
					</IconButton>
				</Tooltip>
				<Grid container direction='column' justifyContent='center' style={{height: '100%'}}>
					<Avatar src={displayProfilePicMinimize} style={{height: '70px', width: '70px', margin: '8px auto 15px'}} />
					<Typography className={classes.callUserName}>{displayNameMinimize}</Typography>
					{/* {showTimer && <TimerComponent callBack={() => { handleDecline(jitsiDetails?.meetingUuid) }} jitsiDetails={jitsiDetails} isMinimize={isMinimize} />} */}
					<div className='App' style={{paddingBottom: '10px'}}>
						<div style={{color: '#7fff00', fontSize: isMinimize ? '12px' : '14px'}}>
							{runTimer ? (
								<b>
									{minutes}:{seconds}
								</b>
							) : (
								<b>00:00</b>
							)}
						</div>
					</div>
					<Grid style={{padding: '10px 0px 0px'}} container direction='row' alignItems='center' justifyContent='center'>
						{/* {jitsiDetails?.conferenceType === 'video' && <IconButton className={clsx("", classes.IconBgCss)}
                     onClick={() => { handleAudioStatusChange({ muted: isVideoEnable ? true : false }, "video") }}>
                     {isVideoEnable ? <VideocamRounded className={classes.meetOptions} /> : <VideocamOff className={classes.meetOptions} />}
                  </IconButton>}
                  <IconButton className={clsx("", classes.IconBgCss)}
                     onClick={() => { handleAudioStatusChange({ muted: isAudioEnable ? true : false }, "audio") }}>
                     {isAudioEnable ? <Mic className={classes.meetOptions} /> : <MicOff className={classes.meetOptions} />}
                  </IconButton> */}
						<IconButton
							className={classes.IconBgCss}
							onClick={() => {
								handleMeetingCallLeave(jitsiDetails.meetingUuid)
							}}>
							<CallEnd className={classes.callEndIcon} />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

// export function TimerComponent(props) {
//    const { callBack, jitsiDetails, isMinimize } = props;
//    const [countDown, setCountDown] = useState(1);
//    const [runTimer, setRunTimer] = useState(false);

//    useEffect(() => {
//       let timerId;
//       if (runTimer) {
//          setCountDown(60 * jitsiDetails.callDuration);
//          timerId = setInterval(() => {
//             setCountDown((countDown) => countDown - 1);
//          }, 1000);
//       } else {
//          clearInterval(timerId);
//       }

//       return () => clearInterval(timerId);
//    }, [runTimer]);

//    useEffect(() => {
//       if (countDown < 0 && runTimer) {
//          setRunTimer(false);
//          setCountDown(0);
//          // callBack();
//       }
//    }, [countDown, runTimer]);

//    useEffect(() => {
//       togglerTimer();
//    }, [])

//    const togglerTimer = () => setRunTimer((t) => !t);

//    const seconds = String(countDown % 60).padStart(2, 0);
//    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

//    return (
//       <div className="App">
//          <div style={{ color: '#7fff00', fontSize: isMinimize ? '12px' : '14px' }}>
//             {runTimer ? <b>{minutes}:{seconds}</b> : <b>00:00</b>}
//          </div>
//       </div>
//    );
// }
