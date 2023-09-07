import {ChevronRight, DescriptionOutlined, Image, InsertLink, NavigateBefore, InsertDriveFile} from '@material-ui/icons'
import {Download} from '@mui/icons-material'
import Skeleton from '@material-ui/lab/Skeleton'
import {Grid, Typography, Card, CardContent, IconButton, Dialog, DialogContent, Avatar, Drawer} from '@material-ui/core'
import moment from 'moment'
import {useState, useEffect} from 'react'
import {useStyles} from '../styles'
import clsx from 'clsx'
import _, {cloneDeep} from 'lodash'
import consultApi from '../../../../Service/ConsultChat'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper/core'
import {ImagePreviewLayout} from './ImagePreviewLayout'
SwiperCore.use([Navigation])
import {ToastContainer, toast} from 'react-toastify'
import secureLocalStorage from 'react-secure-storage'

const previewData = {
	isModalOpen: false,
	activeModal: '',
}

const ChatDetails = props => {
	const {isMediaLoading, mediaDetails = {}} = props
	const classes = useStyles()
	const [loading, setLoading] = useState(false)
	const [headerText, setHeaderText] = useState('Chat Details')
	const [previewDetails, setPreviewDetails] = useState(_.cloneDeep(previewData))
	const [imageDetails, setImageDetails] = useState({activeImage: '', activeImageUrl: '', imageObj: {}, videoObj: {}, activeImageObj: {}})
	const {isModalOpen, activeModal} = previewDetails
	const [chatDocumentsDetails, setChatDocumentDetails] = useState([])
	const [chatLinkDetails, setChatLinkDetails] = useState([])

	let appointmentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('appointmentUuid') : null
	let bearerToken = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null

	useEffect(() => {
		setHeaderText(headerText)
		handleChangeHeader(headerText)
	}, [mediaDetails])

	useEffect(() => {
		setLoading(true)
		setHeaderText(headerText)
		handleChangeHeader(headerText)
	}, [headerText])

	const handleChangeHeader = name => {
		if (name === 'Images/Videos' && appointmentUuid) {
			getChatImageDetails(appointmentUuid)
		} else if (name === 'Documents' && appointmentUuid) {
			getChatDocumentDetails(appointmentUuid)
		} else if (name === 'Links' && appointmentUuid) {
			getChatLinkDetails(appointmentUuid)
		}
	}

	const getChatImageDetails = appointmentUuid => {
		consultApi
			.getChatImageDetails(appointmentUuid)
			.then(res => {
				if (res && res?.data?.status === 'success') {
					setLoading(false)
					getChatVideoDetails(appointmentUuid, res?.data?.data)
					setImageDetails({...imageDetails, imageObj: res?.data?.data})
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.res?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method getChatImageDetails')
			})
	}

	const getChatVideoDetails = (appointmentUuid, obj) => {
		consultApi
			.getChatVideoDetails(appointmentUuid)
			.then(res => {
				if (res && res?.data?.status === 'success') {
					setLoading(false)
					setImageDetails({...imageDetails, videoObj: res?.data?.data, imageObj: obj})
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.res?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method getChatVideoDetails')
			})
	}

	const getChatDocumentDetails = appointmentUuid => {
		consultApi
			.getChatDocumentDetails(appointmentUuid)
			.then(res => {
				if (res && res?.data?.status === 'success') {
					setLoading(false)
					setChatDocumentDetails(res?.data?.data)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.res?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method getChatDocumentDetails')
			})
	}

	const getChatLinkDetails = appointmentUuid => {
		consultApi
			.getChatLinkDetails(appointmentUuid)
			.then(res => {
				if (res && res?.data?.status === 'success') {
					setLoading(false)
					setChatLinkDetails(res?.data?.data?.customerLink)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.res?.data?.message}</Typography>)
				console.log(err, 'Error occured in the method getChatLinkDetails')
			})
	}

	function renderActiveContent(header) {
		switch (header) {
			case 'Chat Details':
				let content =
					mediaDetails &&
					_.map(mediaDetails.CustomerChatDetails, (x, keyName, i) => {
						let iconDetails = {}
						if (keyName === 'imageVideo') {
							iconDetails = {color: 'pink', icon: <Image className={classes.fileIcon} />, name: 'Images/Videos'}
						} else if (keyName === 'link') {
							iconDetails = {color: 'skyBlue', icon: <InsertLink className={classes.fileIcon} />, name: 'Links'}
						} else if (keyName === 'document') {
							iconDetails = {color: 'blue', icon: <DescriptionOutlined className={classes.fileIcon} />, name: 'Documents'}
						}
						return (
							<>
								<Grid container md={12} lg={12} className={classes.accordianWrap} onClick={() => setHeaderText(iconDetails.name)}>
									<Grid item md={8} lg={8} direction='row' className={clsx(classes.flex)}>
										<IconButton className={classes[`${iconDetails.color}_iconBg`]}>
											{iconDetails.icon}
											{/* <DescriptionOutlined className={classes.fileIcon} /> */}
										</IconButton>
										<div style={{marginLeft: '20px'}} className={classes.alignSelf}>
											<Typography className={classes.chat_heading}>{iconDetails.name}</Typography>
											<Typography className={classes.chat_fileCount}>{`${x?.totalCount} files`}</Typography>
										</div>
									</Grid>
									<Grid item md={4} lg={4} direction='row' className={clsx(classes.flex, classes.alignSelf)}>
										<Typography className={classes.chat_subHead}>{x?.storage || ''}</Typography>
										<ChevronRight className={classes.ArrowIcon} />
									</Grid>
								</Grid>
							</>
						)
					})
				return content
			case 'Images/Videos':
				let imgContent = (
					<Grid container direction='column'>
						<Typography className={classes.imgContent}>Images</Typography>
						{loading ? (
							<Grid container direction='row'>
								{_.times(3, x => {
									return <Skeleton key={x} variant='rectangular' width={70} height={80} style={{margin: '5px'}} />
								})}
							</Grid>
						) : Object.keys(imageDetails.imageObj).length > 0 ? (
							<Grid container direction='row'>
								{Object.keys(imageDetails.imageObj).map(data => {
									return (
										<div
											className={classes.docImage}
											onClick={() => {
												setPreviewDetails({...previewDetails, isModalOpen: true, activeModal: 'image'})
												setImageDetails({
													...imageDetails,
													activeImage: imageDetails.imageObj[data].file.viewFileUrl,
													activeImageUrl: imageDetails.imageObj[data].file.downloadFileUrl,
													activeImageObj: imageDetails.imageObj[data],
												})
											}}>
											<img src={`${imageDetails.imageObj[data].file.viewFileUrl}`} alt='docImg' className={classes.imgDisplay} />
										</div>
									)
								})}
							</Grid>
						) : (
							<Grid className={classes.noContentStyle}>No Images</Grid>
						)}
						<Typography className={classes.imgContent} style={{marginTop: '20px'}}>
							Videos
						</Typography>
						{loading ? (
							<Grid container direction='row'>
								{_.times(3, x => {
									return <Skeleton key={x} variant='rectangular' width={70} height={80} style={{margin: '5px'}} />
								})}
							</Grid>
						) : Object.keys(imageDetails.videoObj).length > 0 ? (
							<Grid container direction='row'>
								{Object.keys(imageDetails.videoObj).map(data => {
									return (
										// <div style={{width: "200px"}}> consultApi.getFileDownloadUrl(detail?.file?.documentUuid, bearerToken)
										<div className={classes.chatDetailsVideo}>
											<a href={`${consultApi.getFileDownloadUrl(imageDetails.videoObj[data]?.file?.documentUuid, bearerToken)}`} download>
												<video src={`${imageDetails.videoObj[data].file.viewFileUrl}`} style={{height: '100px'}} width='100%' type='video/mp4' />
											</a>
										</div>
									)
								})}
							</Grid>
						) : (
							<Grid className={classes.noContentStyle}>No Videos</Grid>
						)}
					</Grid>
				)
				return imgContent
			case 'Links':
				return <LinkLayout loading={loading} chatLinkDetails={chatLinkDetails} />
			case 'Documents':
				return <DocumentLayout loading={loading} chatDocumentsDetails={chatDocumentsDetails} bearerToken={bearerToken} />
			default:
				return <Grid className={classes.noContentStyle}>No Content</Grid>
		}
	}

	const renderActiveModal = activeComponent => {
		switch (activeComponent) {
			case 'image':
				return (
					<ImagePreviewLayout
						handleClose={() => {
							setPreviewDetails({...previewDetails, isModalOpen: false})
						}}
						imageDetails={imageDetails}
						setImageDetails={setImageDetails}
					/>
				)
			default:
				return <></>
		}
	}

	return (
		<>
			{/* <ToastContainer /> */}
			<Card style={{height: '100%', borderRadius: 10}}>
				<CardContent style={{padding: '0px'}}>
					<Grid className={clsx(classes.chatDtHeader)} direction='row'>
						{headerText !== 'Chat Details' && (
							<IconButton className={clsx(classes.IconBtnActiveSq)} onClick={() => setHeaderText('Chat Details')}>
								<NavigateBefore />
							</IconButton>
						)}
						<Typography className={classes.HeadingTxt}>{headerText}</Typography>
					</Grid>
					<Grid direction='column' className={clsx('h-screen', classes.chatDetailsWrap)}>
						{isMediaLoading ? (
							<>
								{_.times(3, x => {
									return (
										<div style={{display: 'flex'}} key={x}>
											<Skeleton variant='circular' height={40} width={50} style={{alignSelf: 'center', borderRadius: '50%'}}>
												<Avatar />
											</Skeleton>
											<Skeleton variant='rectangular' width={320} height={30} style={{margin: '15px', background: '#F5F4F6'}} />
										</div>
									)
								})}
							</>
						) : (
							renderActiveContent(headerText)
						)}
					</Grid>
				</CardContent>
			</Card>
			<Dialog open={isModalOpen} maxWidth='xl' fullWidth className={classes.dialogLayout}>
				<DialogContent>{renderActiveModal(activeModal)}</DialogContent>
			</Dialog>
		</>
	)
}
export default ChatDetails

export const LinkLayout = props => {
	const {loading = false, chatLinkDetails = []} = props
	const classes = useStyles()

	return (
		<>
			{loading ? (
				<>
					<Grid container direction='column'>
						{_.times(5, x => {
							if (x % 2 === 0) {
								return <Skeleton variant='rectangular' width={240} height={45} style={{margin: '5px', borderRadius: '8px 8px 0px'}} />
							} else {
								return <Skeleton variant='rectangular' width={240} height={45} style={{margin: '20px 5px', borderRadius: '8px 8px 0px'}} />
							}
						})}
					</Grid>
				</>
			) : Object.values(chatLinkDetails).length > 0 ? (
				chatLinkDetails &&
				_.map(chatLinkDetails, data => {
					return (
						<Grid>
							<div className={clsx(classes.linkData)}>
								<Typography className={clsx(classes.linkItem)}>
									<a href={data.link} target='_blank'>
										{data.link}
									</a>
								</Typography>
								<Typography className={clsx(classes.smallText)}>{moment(data?.dateTime).format('DD/MM/YY [at] hh:mm A')}</Typography>
							</div>
						</Grid>
					)
				})
			) : (
				<Grid className={classes.noContentStyle}>No Links</Grid>
			)}
		</>
	)
}

export const DocumentLayout = props => {
	const classes = useStyles()
	const {loading = false, chatDocumentsDetails = {}, bearerToken = ''} = props
	return (
		<>
			{loading ? (
				<>
					<Grid container direction='column'>
						{_.times(5, x => {
							if (x % 2 === 0) {
								return <Skeleton variant='rectangular' width={240} height={45} style={{margin: '5px', borderRadius: '8px 8px 0px'}} />
							} else {
								return <Skeleton variant='rectangular' width={240} height={45} style={{margin: '20px 5px', borderRadius: '8px 8px 0px'}} />
							}
						})}
					</Grid>
				</>
			) : Object.values(chatDocumentsDetails).length > 0 ? (
				Object.values(chatDocumentsDetails).map(detail => {
					return (
						<div className={clsx(classes.docData, !detail?.file?.isFileUploadedByCustomer && classes.marginLeftAuto)}>
							{/* <Grid container direction='row' alignItems='center' className={clsx(detail.msgUser === 'customer' ? classes.docCust : classes.docTenet, classes.downloadItem)} onMouseOver={() => { showDownload('hover', detail.msgUser === 'customer' ? 'cust' : ''); }} onMouseLeave={() => { showDownload('leave', detail.msgUser === 'customer' ? 'cust' : ''); }}> */}
							<Grid
								container
								direction='row'
								alignItems='center'
								flexWrap='nowrap'
								className={clsx(
									detail?.file?.isFileUploadedByCustomer
										? `${classes.docCust} ${classes.custDownload}`
										: `${classes.docTenet} ${classes.tenetDownload}`,
									classes.downloadItem
								)}>
								<InsertDriveFile />
								<Typography overflow='hidden' textOverflow='ellipsis' style={{width: '190px', wordBreak: 'break-all'}}>
									{detail?.file?.documentName}
								</Typography>
								<a href={consultApi.getFileDownloadUrl(detail?.file?.documentUuid, bearerToken)} download>
									<IconButton id='d-btn' className={classes.iconBtn}>
										<Download fontSize='17px' style={{margin: '-14px 0px 0px -4px'}} />
									</IconButton>
								</a>
							</Grid>
							<Grid container alignItems='center' justifyContent='space-between'>
								<Typography className={clsx(classes.smallText)}>
									{moment(detail?.currentDateTime).format('DD/MM/YYYY [at] hh:mm A')}
									{/* {detail.time} */}
								</Typography>
								<Typography className={clsx(classes.smallText)}>{detail?.file?.storage}</Typography>
							</Grid>
						</div>
					)
				})
			) : (
				<Grid className={classes.noContentStyle}>No Documents</Grid>
			)}
		</>
	)
}
