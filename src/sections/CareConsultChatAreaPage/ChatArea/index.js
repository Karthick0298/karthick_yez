import {useState, useEffect, useRef} from 'react'
import {
	Grid,
	Avatar,
	Typography,
	Card,
	TextField,
	InputAdornment,
	Box,
	CardContent,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Dialog,
	DialogContent,
	DialogTitle,
} from '@material-ui/core'
import Skeleton from '@mui/material/Skeleton'
import {
	SentimentSatisfiedAlt,
	AttachFile,
	NavigateBefore,
	Send,
	CallOutlined,
	VideocamOutlined,
	MoreVertOutlined,
	PhoneMissed,
	MissedVideoCall,
	CallEnd,
	Close,
} from '@material-ui/icons'
import {DownloadForOfflineOutlined, InsertDriveFileRounded, PhoneCallback} from '@mui/icons-material'
import _ from 'lodash'
import clsx from 'clsx'
import moment from 'moment'
// import 'firebase/database'
import 'emoji-mart/css/emoji-mart.css'
import {Picker} from 'emoji-mart'
import {useRouter} from 'next/router'
import consultApi from '../../../../Service/ConsultChat'
import {useStyles, StyledBadge} from '../styles'
import {AttachmentModal} from './AttachmentModal'
import {v4 as uuidv4} from 'uuid'
import {ToastContainer, toast} from 'react-toastify'
import {BeatLoader} from 'react-spinners'
import secureLocalStorage from 'react-secure-storage'

const ChatArea = props => {
	const classes = useStyles()
	let avatarText = 'Image'

	const {
		custAvailDetails,
		setCustAvailDetails,
		loading = true,
		chatData = [],
		setChatData = () => {},
		balanceCountObj = {},
		setBalanceCountObj = () => {},
	} = props

	console.log(custAvailDetails, 'custAvailDetails')

	let [chatMessage, setChatMessage] = useState('')
	let [showPicker, setShowPicker] = useState(false)

	const [anchorEl, setAnchorEl] = useState(null)
	const router = useRouter()
	const [fileDetails, setFileDetails] = useState({showFileModal: false, docFile: [], galleryFile: [], photoFile: [], showCamera: false})
	const anchorRef = useRef(null)
	const photoRef = useRef(null)
	const stripRef = useRef(null)
	const videoRef = useRef(null)
	const [reload, setReload] = useState(false)
	const [beatLoader, setBeatLoader] = useState(false)
	// let [chatData, setChatData] = useState(data);

	let custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
	let custTenantUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custTenantUuid') : null
	let appointmentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('appointmentUuid') : null
	let consultUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('consultUuid') : null
	let BearerToken = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null

	useEffect(() => {
		const element = document.getElementById('msgChatBot')
		element.scrollTop = element.scrollHeight
	}, [chatData])

	const {balanceDays, balanceMessage, balanceCount, tenantUserResponseDTO, customerResponseVO} = custAvailDetails
	const {hideMessageBtn, hideCallsBtn} = balanceCountObj

	const handleSendTextMessage = () => {
		let temp = {
			isShowCustomer: true,
			messageType: 'text',
			chatId: '',
			text: {chattingMessage: chatMessage, isMessageSendByCustomer: true, messageSendedProfilePic: customerResponseVO?.profilePic},
		}
		chatData?.push(temp)
		console.log(chatData, 'chatdatataa4444')
		setChatData(chatData)
		const body = {
			appointmentUuid: appointmentUuid,
			chattingMessage: chatMessage,
			isMessageSendByCustomer: true,
			isShowCustomer: true,
			isShowTenant: true,
			isSystemMessage: false,
		}

		if (chatMessage !== '') {
			consultApi
				.consultMessageSaveText(body)
				.then(resp => {
					const element = document.getElementById('msgChatBot')
					element.scrollTop = element.scrollHeight
					if (resp?.data?.data?.balanceMessage === 0) {
						setBalanceCountObj({...balanceCountObj, hideMessageBtn: true})
					}
				})
				.catch(err => {
					toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
					console.log(err, 'Error occured in the method handleSendTextMessage')
				})
		}
		setChatMessage('')
	}

	const handleSendEmojiMessage = emojiUnifiedCode => {
		setShowPicker(false)
		let temp = {
			isShowCustomer: true,
			messageType: 'emoji',
			chatId: '',
			emoji: {emojis: emojiUnifiedCode, isEmojiSendByCustomer: true, isEmojiSendedProfilePic: customerResponseVO?.profilePic},
		}
		chatData?.push(temp)
		setChatData(chatData)
		const body = {
			appointmentUuid: appointmentUuid,
			emojiMessage: `${emojiUnifiedCode}`,
			isemojiSendByCustomer: true,
			isShowCustomer: true,
			isShowTenant: true,
			isSystemMessage: false,
		}
		if (emojiUnifiedCode) {
			consultApi
				.consultMessageSaveEmoji(body)
				.then(resp => {
					const element = document.getElementById('msgChatBot')
					element.scrollTop = element.scrollHeight
				})
				.catch(err => {
					toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
					console.log(err, 'Error occured in the method handleSendEmojiMessage')
				})
		}
	}

	const handleSendFileMessage = (uuid, data) => {
		setChatData(y => {
			let temp = _.cloneDeep(y)
			_.map(data, (x, i) => {
				let fileType = ''
				if (x.documentExtension === 'jpg' || x.documentExtension === 'jpeg' || x.documentExtension === 'png') {
					fileType = 'IMAGE'
				} else if (x.documentExtension === 'pdf') {
					fileType = 'DOCUMENT'
				} else if (x.documentExtension === 'mp4') {
					fileType = 'VIDEO'
				}
				temp.push({
					isShowCustomer: true,
					messageType: 'file',
					chatId: '',
					file: {
						documentUuid: uuid[i],
						documentName: x.documentName,
						isFileUploadedByCustomer: true,
						fileSize: x.fileSize,
						viewFileUrl: x.filePath,
						fileType: fileType,
					},
				})
			})
			return temp
		})
		const body = {
			appointmentUuid: appointmentUuid,
			docDriveUuid: uuid,
			isFileUploadCustomer: true,
		}
		consultApi
			.consultMessageSaveFile(body)
			.then(resp => {
				const element = document.getElementById('msgChatBot')
				element.scrollTop = element.scrollHeight
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method handleSendFileMessage')
			})
	}

	const handleUploadingFileToCustomer = files => {
		setFileDetails({...fileDetails, showFileModal: false, showCamera: false})
		let formData = new FormData()
		_.map(files, file => {
			formData.append('FILE', file)
		})
		consultApi
			.uploadingFileToCustomer(formData, custUuid, consultUuid)
			.then(resp => {
				if (resp?.data?.status?.toLowerCase() === 'success') {
					let uuidArr = []
					_.map(resp?.data?.data?.fileMetaDataList, x => uuidArr.push(x.uuid))
					handleSendFileMessage(uuidArr, resp?.data?.data?.fileMetaDataList)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method handleUploadingFileToCustomer')
			})
	}

	const customerInitiateMeeting = (conferenceType, appointmentUuid) => {
		setBeatLoader(true)
		const body = {
			appointmentUuid: appointmentUuid,
			conferenceType: conferenceType,
			callInitiateCustomer: true,
		}
		consultApi
			.consultMeetingInitiate(body)
			.then(resp => {
				setBeatLoader(false)
				if (resp?.data?.data?.balanceCount === 0) {
					setBalanceCountObj({...balanceCountObj, hideCallsBtn: true})
					toast.error(<Typography variant='h5'>Call Count is 0.Please buy a new appointment for continue Call</Typography>)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method findTenet')
			})
	}

	const clearChatHistory = () => {
		consultApi
			.clearChatHistoryFromCustSide(appointmentUuid)
			.then(resp => {
				handleClose()
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.resp?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method findTenet')
			})
	}

	const cancelPhoto = data => {
		setReload(!reload)
		const link = document.getElementById('anchorId')
		const image = document.getElementById('imageId')
		link !== null && link.remove()
		image !== null && image.remove()
		data === 'back' && getVideo()
	}

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleAttachmentClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}
		setFileDetails({...fileDetails, showFileModal: false})
	}

	const takePhoto = () => {
		let photo = photoRef.current
		let strip = stripRef.current
		const data = photo.toDataURL('image/jpeg')
		const link = document.createElement('a')
		link.href = data
		link.id = 'anchorId'
		link.setAttribute('download', 'myWebcam')
		link.innerHTML = `<img src='${data}' alt='thumbnail' id="imageId"/>`
		strip.insertBefore(link, strip.firstChild)
		setReload(!reload)
	}

	useEffect(() => {
		getVideo()
	}, [videoRef, fileDetails.showCamera])

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({video: {width: 400}})
			.then(stream => {
				let video = videoRef.current
				if (fileDetails.showCamera && stream !== null) {
					video.srcObject = stream
					video.play()
				} else {
					let streamData = video.srcObject
					const tracks = streamData.getTracks()
					tracks.forEach(track => track.stop())
					streamData.video.srcObject = null
					streamData.getTracks().forEach(function(track) {
						track.stop()
					})
				}
			})
			.catch(err => {
				// toast.error(<Typography variant='h5'>Error Occured</Typography>)
				// console.log(err, 'Error occured in the method getVideo')
			})
	}

	const paintToCanvas = () => {
		let video = videoRef.current
		let photo = photoRef.current
		let ctx = photo.getContext('2d')

		const width = 400
		const height = 280
		photo.width = width
		photo.height = height

		return setInterval(() => {
			ctx.drawImage(video, 0, 0, width, height)
		}, 200)
	}

	// identify link from text message
	const urlify = text => {
		const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
		const finalGreeting = text.replace(urlRegex, url => {
			return '<a class=' + classes.textLinkView + ' target="_blank" href="' + url + '">' + url + '</a>'
		})
		return <span style={{wordBreak: 'break-all'}} dangerouslySetInnerHTML={{__html: finalGreeting}} />
	}

	const handleOnKeyDown = event => {
		if (event.key === 'Enter') {
			handleSendTextMessage(chatMessage)
		}
	}

	const checkItem = () => {
		const data = document.getElementById('imageId')
		return data === null
	}

	function blobCreationFromURL(str) {
		let pos = str.indexOf(';base64,')
		let type = str.substring(5, pos)
		let b64 = str.substr(pos + 8)
		let imageContent = atob(b64)
		let buffer = new ArrayBuffer(imageContent.length)
		let view = new Uint8Array(buffer)
		for (var n = 0; n < imageContent.length; n++) {
			view[n] = imageContent.charCodeAt(n)
		}
		let blob = new Blob([buffer], {type: type})
		return blob
	}

	const sendCapturedPhoto = async () => {
		const imageId = document.getElementById('imageId')
		const srcFile = imageId.getAttribute('src')
		const list = []
		const file = blobCreationFromURL(srcFile)
		let fileName = new Date().getTime() + `.${file.type.split('/')[1]}`
		let filedata = new File([file], uuidv4() + '___' + fileName, {
			type: file.type,
			lastModified: Date.now(),
		})
		list.push(filedata)
		handleUploadingFileToCustomer(list)
	}

	return (
		<>
			{/* <CallNotification /> */}
			{/* <ToastContainer /> */}
			<Card style={{borderRadius: '10px'}}>
				<CardContent style={{padding: '0px'}} className={classes.chatArea_CardContent}>
					{beatLoader && (
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '50%', left: '50%'}}>
							<BeatLoader size={12} margin={2} color={'#24A0ED'} />
						</div>
					)}
					<Grid container lg={12} direction='row' className={clsx(classes.topHeader)}>
						<Grid item lg={1}>
							<IconButton className={clsx(classes.IconBtnSq)} onClick={() => router.push('/marketplace')}>
								<NavigateBefore />
							</IconButton>
						</Grid>
						<Grid item direction='row' lg={6} className={classes.alignSelf}>
							<Box direction='row' spacing={2} className={clsx(classes.flex)}>
								{_.isEmpty(custAvailDetails) || loading ? (
									<>
										<Skeleton variant='circular' height={50} className={classes.chatAreaSkeletonCircle}>
											<Avatar />
										</Skeleton>
										<Skeleton variant='rectangular' width={200} height={30} className={classes.chatAreaSkeletonRectangle} />
									</>
								) : (
									<>
										<StyledBadge
											color={tenantUserResponseDTO?.tentUserStatusMessage === 'Online' ? 'success' : 'warning'}
											overlap='circular'
											anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
											variant='dot'>
											<Avatar alt={avatarText} src={tenantUserResponseDTO?.profilePic} />
										</StyledBadge>
										<Typography className={classes.chatArea_name}>{`${tenantUserResponseDTO?.tentUserFirstName ||
											tenantUserResponseDTO?.tentUserUuid} ${tenantUserResponseDTO?.tentUserLastName || ''}`}</Typography>
									</>
								)}
							</Box>
						</Grid>
						<Grid item lg={4} className={clsx(classes.flex, classes.alignSelf, classes.justifyEnd)} style={{marginLeft: 'auto'}}>
							<Button
								variant='contained'
								style={{marginRight: '20px'}}
								className={classes.buttonBgCss}
								onClick={loading ? () => {} : () => customerInitiateMeeting('audio', custAvailDetails?.appointmentUuid)}
								disabled={loading || hideCallsBtn}>
								<CallOutlined className={classes.font20} />
								<span className={classes.btnTxtCss}>Voice Chat</span>
							</Button>
							<Button
								variant='contained'
								className={classes.buttonBgCss}
								onClick={loading ? () => {} : () => customerInitiateMeeting('video', custAvailDetails?.appointmentUuid)}
								disabled={loading || hideCallsBtn}>
								<VideocamOutlined className={classes.font20} />
								<span className={classes.btnTxtCss}>Video Call</span>
							</Button>
						</Grid>
						<Grid item lg={1}>
							<IconButton className={clsx(classes.IconBtnSq)} aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick}>
								<MoreVertOutlined />
							</IconButton>
							<Menu
								id='fade-menu'
								getContentAnchorEl={null}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								transformOrigin={{
									vertical: 'left',
									horizontal: 'center',
								}}
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								<MenuItem className={classes.menuListAction} onClick={() => clearChatHistory()}>
									Delete Conversation
								</MenuItem>
								<MenuItem className={classes.menuListAction}>LFYnGO Help</MenuItem>
							</Menu>
						</Grid>
					</Grid>
					<Grid className={clsx('mb-14', classes.msg_area)} id='msgChatBot'>
						{loading ? (
							<>
								<Grid container direction='column'>
									<div style={{display: 'flex'}}>
										<Skeleton variant='circular' height={50} className={classes.chatAreaSkeletonCircle}>
											<Avatar />
										</Skeleton>
										<Skeleton variant='rectangular' width={320} height={50} className={classes.chatAreaSkeletonRectangle} />
									</div>
									<div style={{display: 'flex', justifyContent: 'end'}}>
										<Skeleton variant='rectangular' width={320} height={50} className={classes.chatAreaSkeletonRectangle} />
										<Skeleton variant='circular' height={50} className={classes.chatAreaSkeletonCircle}>
											<Avatar />
										</Skeleton>
									</div>
									<div style={{display: 'flex'}}>
										<Skeleton variant='circular' height={50} className={classes.chatAreaSkeletonCircle}>
											<Avatar />
										</Skeleton>
										<Skeleton variant='rectangular' width={320} height={50} className={classes.chatAreaSkeletonRectangle} />
									</div>
									<div style={{display: 'flex', justifyContent: 'end'}}>
										<Skeleton variant='rectangular' width={320} height={50} className={classes.chatAreaSkeletonRectangle} />
										<Skeleton variant='circular' height={50} className={classes.chatAreaSkeletonCircle}>
											<Avatar />
										</Skeleton>
									</div>
								</Grid>
							</>
						) : (
							chatData &&
							_.map(chatData, (o, i) => {
								let callDuration = {}
								if (o?.messageType === 'endcall') {
									let startTime = moment(o?.endedCallDTO?.callStartTime).format('DD/MM/YYYY HH:mm:ss')
									let endTime = moment(o?.endedCallDTO?.callEndTime).format('DD/MM/YYYY HH:mm:ss')
									callDuration = moment.duration(moment(endTime, 'DD/MM/YYYY HH:mm:ss').diff(moment(startTime, 'DD/MM/YYYY HH:mm:ss')))
								}
								if (o?.isShowCustomer) {
									return (
										<>
											{o.messageType === 'text' ? (
												!o?.text?.isSystemMsg ? (
													<Grid direction='row' className={clsx(classes.msgWrap, {[classes.rightMsg_wrap]: o?.text?.isMessageSendByCustomer})}>
														<Avatar
															style={{fontSize: '14px', alignSelf: 'end', marginBottom: '25px'}}
															alt={avatarText}
															src={o?.text?.messageSendedProfilePic}></Avatar>
														<Grid direction='column' spacing={1} style={{margin: '4px 15px'}}>
															<Typography
																key={i}
																className={clsx('', {
																	[classes.rightMessageContent]: o?.text?.isMessageSendByCustomer,
																	[classes.leftMessageContent]: !o?.text?.isMessageSendByCustomer,
																})}>
																{urlify(o?.text?.chattingMessage)}
															</Typography>
															<Typography className={clsx(classes.timeDisplayFont, {[classes.floatRight]: o?.text?.isMessageSendByCustomer})}>
																{o.currentDateTime && moment(o.currentDateTime).format('hh:mm A')}
															</Typography>
														</Grid>
													</Grid>
												) : (
													<Grid container direction='row' style={{margin: '10px 0px 0px 0px', justifyContent: 'center'}}>
														<div className={classes.sysMsg}>
															<Typography className={classes.missedCallTxt}>{o?.text?.chattingMessage}</Typography>
														</div>
													</Grid>
												)
											) : o.messageType === 'emoji' ? (
												<>
													<Grid direction='row' className={clsx(classes.msgWrap, {[classes.rightMsg_wrap]: o?.emoji?.isEmojiSendByCustomer})}>
														<Avatar
															style={{fontSize: '14px', alignSelf: 'end', marginBottom: '25px'}}
															alt={avatarText}
															src={o?.emoji?.isEmojiSendedProfilePic}></Avatar>
														<Grid direction='column' spacing={1} style={{margin: '4px 15px'}}>
															<Typography
																className={clsx(classes.emojiFont, {
																	[classes.rightMessageContent]: o?.emoji?.isEmojiSendByCustomer,
																	[classes.leftMessageContent]: !o?.emoji?.isEmojiSendByCustomer,
																})}>
																{String.fromCodePoint(parseInt(o?.emoji?.emojis, 16))}
															</Typography>
															<Typography className={clsx(classes.timeDisplayFont, {[classes.floatRight]: o?.emoji?.isEmojiSendByCustomer})}>
																{o.currentDateTime && moment(o.currentDateTime).format('hh:mm A')}
															</Typography>
														</Grid>
													</Grid>
												</>
											) : o.messageType === 'file' ? (
												<Grid direction='row' className={clsx(classes.msgWrap, {[classes.rightMsg_wrap]: o?.file?.isFileUploadedByCustomer})}>
													<Avatar style={{fontSize: '14px', alignSelf: 'end', marginBottom: '30px'}} src={o?.file?.fileUploadedProfilePic}></Avatar>
													<Grid direction='column' spacing={1} style={{margin: '4px 15px'}}>
														{o?.file?.fileType === 'IMAGE' ? (
															<Typography
																className={clsx('', {
																	[classes.rightMessageImageContent]: o?.file?.isFileUploadedByCustomer,
																	[classes.leftMessageImageContent]: !o?.file?.isFileUploadedByCustomer,
																})}>
																<a href={consultApi.getFileDownloadUrl(o?.file?.documentUuid, BearerToken)} download>
																	<img style={{borderRadius: '6px', height: '100%'}} src={o?.file?.viewFileUrl} width={90} />
																</a>
															</Typography>
														) : o?.file?.fileType === 'DOCUMENT' || o?.file?.documentExtension === 'pdf' ? (
															<Typography
																className={clsx('', {
																	[classes.rightMessageDocumentContent]: o?.file?.isFileUploadedByCustomer,
																	[classes.leftMessageDocumentContent]: !o?.file?.isFileUploadedByCustomer,
																})}>
																<InsertDriveFileRounded style={{color: !o?.file?.isFileUploadedByCustomer ? 'gray' : '#FFFF'}} />
																<a
																	href={consultApi.getFileDownloadUrl(o?.file?.documentUuid, BearerToken)}
																	className={classes.videoLinkDoc}
																	download
																	style={{display: 'flex'}}>
																	<Typography style={{color: !o?.file?.isFileUploadedByCustomer ? 'gray' : '#FFFF'}} className={classes.documentText}>
																		{o?.file?.documentName}
																	</Typography>
																	{!o?.file?.isFileUploadedByCustomer ? (
																		<DownloadForOfflineOutlined style={{color: '#7047EA', cursor: 'pointer'}} />
																	) : (
																		''
																	)}
																</a>
															</Typography>
														) : o?.file?.fileType === 'VIDEO' ? (
															<Typography
																className={clsx('', {
																	[classes.rightMessageDocumentContent]: o?.file?.isFileUploadedByCustomer,
																	[classes.leftMessageDocumentContent]: !o?.file?.isFileUploadedByCustomer,
																})}>
																<InsertDriveFileRounded style={{color: !o?.file?.isFileUploadedByCustomer ? 'gray' : '#FFFF'}} />
																<a href={consultApi.getFileDownloadUrl(o?.file?.documentUuid, BearerToken)} download className={classes.videoLinkDoc}>
																	<Typography style={{color: !o?.file?.isFileUploadedByCustomer ? 'gray' : '#FFFF'}} className={classes.documentText}>
																		{o?.file?.documentName}
																	</Typography>
																</a>
															</Typography>
														) : (
															<></>
														)}
														<Typography
															className={clsx(classes.timeStorageDisplayFont, {[classes.reverseDisplay]: o?.file?.isFileUploadedByCustomer})}>
															<span>{o.currentDateTime && moment(o.currentDateTime).format('hh:mm A')}</span>
															<span>{o?.file?.storage}</span>
														</Typography>
													</Grid>
												</Grid>
											) : o.messageType === 'declinecall' ? (
												<Grid container direction='row' style={{marginBottom: '5px'}}>
													<div className={classes.callMessageType}>
														{o?.missedCall?.isCallDeclinedByCustomer ? (
															<>
																<CallEnd style={{color: '#e80404', fontSize: '16px', margin: '1px 10px 0px 0px'}} />
																<Typography className={classes.missedCallTxt}>{`Call Declined at ${moment(o.currentDateTime).format(
																	'hh:mm A'
																)}`}</Typography>
															</>
														) : (
															<>
																{o?.missedCall?.callType === 'audio' ? (
																	<>
																		<PhoneMissed
																			style={{
																				color: !o?.missedCall?.isCallDeclinedByCustomer ? 'green' : '#e80404',
																				fontSize: '16px',
																				margin: '1px 10px 0px 0px',
																			}}
																		/>
																		<Typography className={classes.missedCallTxt}>{`Missed voice call at ${moment(o.currentDateTime).format(
																			'hh:mm A'
																		)}`}</Typography>
																	</>
																) : (
																	<>
																		<MissedVideoCall
																			style={{
																				color: !o?.missedCall?.isCallDeclinedByCustomer ? 'green' : '#e80404',
																				fontSize: '22px',
																				margin: '-1px 10px 0px 0px',
																			}}
																		/>
																		<Typography className={classes.missedCallTxt}>{`Missed video call at ${moment(o.currentDateTime).format(
																			'hh:mm A'
																		)}`}</Typography>
																	</>
																)}
															</>
														)}
													</div>
												</Grid>
											) : o.messageType === 'endcall' ? (
												<Grid container direction='row'>
													<div className={classes.callMessageType}>
														<>
															<PhoneCallback style={{color: '#332FB3', fontSize: '16px', margin: '2px 2px 0px 0px'}} />
															<Typography style={{margin: '2px 10px 0px 10px', fontSize: '12px'}} className={classes.missedCallTxt}>{`${
																!o?.endedCallDTO?.isCallInitiatorByCustomer ? `Incoming call ` : `Outgoing call`
															} ${callDuration.minutes()} min ${callDuration.seconds()} sec ${moment(o.currentDateTime).format(
																'[at] hh:mm A'
															)}`}</Typography>
														</>
													</div>
												</Grid>
											) : (
												<></>
											)}
										</>
									)
								}
							})
						)}
					</Grid>

					<Grid className={classes.footer}>
						{!hideMessageBtn && (
							<TextField
								variant='outlined'
								placeholder='Enter Your message here....'
								onChange={e => setChatMessage(e.target.value)}
								onKeyPress={e => {
									chatMessage === '' && e.charCode === 32 ? e.preventDefault() : setChatMessage(e.target.value)
								}}
								className={classes.searchBox}
								value={chatMessage}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end' className={classes.inputLayer}>
											<IconButton>
												<SentimentSatisfiedAlt
													className={clsx(classes.sentimentIcon, showPicker && classes.activeIcon)}
													onClick={() => setShowPicker(!showPicker)}
												/>
											</IconButton>
											{showPicker && (
												<Picker
													onSelect={emoji => {
														handleSendEmojiMessage(emoji.unified)
													}}
													style={{width: '100%', whiteSpace: 'pre-wrap'}}
												/>
											)}
											<IconButton style={{marginRight: '15px'}}>
												<AttachFile
													className={classes.attachFileIcon}
													onClick={() => {
														setFileDetails({...fileDetails, showFileModal: true})
													}}
													ref={anchorRef}
												/>
											</IconButton>
											<IconButton className={clsx(classes.sendIconLayer, (chatMessage === '' || balanceMessage === 0) && classes.disabledSendIcon)}>
												<Send
													className={classes.navigationOutlinedIcon}
													onClick={chatMessage === '' || balanceMessage === 0 ? () => {} : () => handleSendTextMessage(chatMessage)}
												/>
											</IconButton>
										</InputAdornment>
									),
								}}
								onKeyDown={chatMessage === '' ? () => {} : handleOnKeyDown}
							/>
						)}
						{(hideMessageBtn || hideCallsBtn) && <Button className={classes.startNew}>Start New Consultation</Button>}
					</Grid>
				</CardContent>
			</Card>
			<AttachmentModal
				handleUploadingFileToCustomer={handleUploadingFileToCustomer}
				setFileDetails={setFileDetails}
				fileDetails={fileDetails}
				anchorRef={anchorRef}
				handleAttachmentClose={handleAttachmentClose}
			/>
			{fileDetails.showCamera && (
				<Dialog
					fullWidth
					maxWidth='sm'
					open={fileDetails.showCamera}
					aria-labelledby='Loader Popup'
					className={classes.dialogLayer}
					onClose={() => {
						setFileDetails({...fileDetails, showCamera: false})
						cancelPhoto()
					}}>
					<DialogTitle sx={{m: 0, p: 2}} className={classes.photoLayerHeader}>
						Take Photo
						<IconButton
							aria-label='close'
							onClick={() => {
								setFileDetails({...fileDetails, showCamera: false})
								cancelPhoto()
							}}
							sx={{
								position: 'absolute',
								right: 8,
								top: 8,
								color: theme => theme.palette.grey[500],
							}}>
							<Close />
						</IconButton>
					</DialogTitle>
					<DialogContent>
						<Grid direction='column' justifyContent='center' container alignItems='center'>
							<Grid item style={{paddingTop: '10px'}} lg={12}>
								{checkItem() && <video onCanPlay={() => paintToCanvas()} ref={videoRef} />}
								<canvas ref={photoRef} style={{display: 'none'}} />
								<div ref={stripRef} />
							</Grid>
							<Grid item lg={12} style={{marginTop: '10px'}}>
								{checkItem() ? (
									<Button
										onClick={() => {
											takePhoto()
											videoRef.current = null
										}}
										variant='contained'
										className={classes.btnStyle}>
										Capture
									</Button>
								) : (
									<Grid container direction='row' alignItems='center'>
										<Button
											variant='outlined'
											style={{color: 'red'}}
											onClick={() => {
												cancelPhoto('back')
											}}
											className={classes.cancelBtn}>
											Cancel
										</Button>
										<Button
											onClick={() => {
												sendCapturedPhoto()
											}}
											variant='contained'
											className={classes.btnStyle}>
											Send
										</Button>
									</Grid>
								)}
							</Grid>
						</Grid>
					</DialogContent>
				</Dialog>
			)}
		</>
	)
}
export default ChatArea
