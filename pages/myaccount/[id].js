/* eslint-disable max-len */
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import Head from 'next/head'
import {makeStyles, Typography} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Image from 'next/image'
import Divider from '@material-ui/core/Divider'
import AddIcon from '@material-ui/icons/Add'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Button from '@material-ui/core/Button'
import React, {useState, useEffect, useCallback} from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import Sharedate from '../../src/components/ShareLinks'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import InfoIcon from '@material-ui/icons/Info'
import Yearpicker from '../../src/components/Yearpicker'
import {useRouter} from 'next/router'
import _ from 'lodash'
import {getProfileImgUrl} from '../../lib/Utils/profileUrlImage'
import Skeleton from '@material-ui/lab/Skeleton'
import HealthRecordsFileListApi from '../../Service/MyAccount/HealthRecordsFile'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import FileUploadModal from '../../src/components/FileUploadModal'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout/index'
import {BeatLoader} from 'react-spinners'
import useContextApi from '../../lib/Utils/hooks/useContextApi'
import CancelIcon from '@material-ui/icons/Cancel'
import useAuth from '../../lib/Utils/hooks/UseAuth'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
	},
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		position: 'absolute',
		zIndex: '9',
		padding: 8,
		transform: 'translate(-17px,20px)',
		// '&:hover': {
		// 	backgroundColor: theme.palette.care.dark,
		// 	'& .MuiSvgIcon-root': {
		// 		fill: '#FFFFFF80',
		// 	},
		// },
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	vitialsignDetail: {
		display: 'flex',
		flexDirection: 'column',
		paddingInline: 21,
		paddingBlockEnd: 25,
		'& .MuiCard-root': {
			background: '#FFFFFF 0% 0 % no - repeat padding- box',
			boxShadow: '0px 0px 6px #0000000F',
			border: '1px solid #66666626',
			borderRadius: 13,
			opacity: 1,
			backdropFilter: 'blur(50px)',
		},
		'& .MuiDivider-root': {
			width: 160,
			margin: 'auto',
		},
		[theme.breakpoints.down('xs')]: {
			paddingInline: 13,
			overflowX: 'hidden',
		},
	},
	wrapper: {
		top: 0,
		position: 'sticky',
		zIndex: 999,
		background: 'transparent linear-gradient(116deg, #f4f4f7 0%, #f4f4f7 100%)',
	},
	cardMain: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 18,
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			textAlign: 'center',
			display: 'block',
		},
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'center',
			textAlign: 'center',
			gap: 11,
		},
		[theme.breakpoints.up('md')]: {
			justifyContent: 'flex-start',
			gap: 11,
			paddingBlock: 8,
			paddingInline: 0,
		},
		'& .MuiPaper-root': {
			[theme.breakpoints.up('sm')]: {
				maxWidth: 200,
				maxHeight: 240,
			},
		},
	},
	cardHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlock: 14,
		paddingInline: 10,
		'& .MuiSvgIcon-root': {
			color: '#fff',
			maxHeight: 25,
			borderRadius: 9,
			backgroundColor: '#999',
		},
		'& .MuiButton-root': {
			minWidth: 32,
			borderRadius: '50%',
		},
	},
	filename: {
		display: 'flex',
		justifyContent: 'center',
		font: 'normal normal medium Poppins',
		letterSpacing: 0.8,
		color: '#999',
		fontSize: 14,
		minHeight: 48,
	},
	plusdivider: {
		display: 'flex',
		paddingInline: 7,
		'& .MuiSvgIcon-root': {
			width: 12,
			fill: '#707070',
		},
	},
	cardBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlock: 5,
		paddingInline: 12,
		'& .MuiIconButton-sizeSmall': {
			backgroundColor: '#08AA6D ',
			color: '#fff',
			borderRadius: 7,
			maxHeight: 27,
			padding: 5,
		},
	},
	filesize: {
		letterSpacing: 0.8,
		color: '#475677',
	},
	filemb: {
		letterSpacing: 0.8,
		color: '#475677',
	},
	allfilestext: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingInline: 17,
		paddingBlock: 7,
		[theme.breakpoints.down('xs')]: {
			paddingBottom: 24,
			paddingInline: 0,
		},
	},
	recentFiles: {
		font: 'normal normal medium Poppins',
		letterSpacing: 0.8,
		color: '#475677',
		fontSize: 15,
	},
	filedesc: {
		display: 'flex',
		justifyContent: 'center',
		marginBlockStart: '0em',
		marginBlockEnd: '0em',
		fontSize: 14,
		color: '#999',
	},
	plusdividerone: {
		display: 'flex',
		paddingInline: 7,
		position: 'relative',
		right: 14,
		'& .MuiSvgIcon-root': {
			width: 12,
			fill: '#707070',
		},
		'& .MuiDivider-root': {
			width: '100%',
			margin: 'auto',
		},
		[theme.breakpoints.down('xs')]: {
			paddingInlineEnd: 22,
		},
	},
	input: {
		display: 'none',
	},
	folderPath: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 18,
		'& .MuiButton-containedPrimary': {
			backgroundColor: '#7047EA',
			color: '#ffffff',
			textTransform: 'none',
			font: 'normal normal normal Poppins',
			fontSize: 12,
		},
		'& .MuiSvgIcon-root': {
			height: 17,
		},
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			fontWeight: 500,
			fontSize: 16,
		},
	},
	menuoverride: {
		'& .MuiPopover-paper': {
			// boxShadow: 'none',
			border: '1px solid #ccc',
			marginLeft: 33,
		},
		'& .MuiListItem-gutters': {
			paddingLeft: 8,
			paddingRight: 8,
		},
	},
	allfiles: {
		cursor: 'pointer',
		color: theme.palette.paragraph.main,
		fontWeight: 500,
		fontSize: 16,
	},
	filedetail: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'baseline',
	},
	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 60,
		'& .MuiTypography-subtitle1': {
			color: theme.palette.paragraph.main,
			fontWeight: 600,
		},
	},
	skeletonMain: {
		display: 'flex',
	},
	skeletonroot: {
		minWidth: 343,
	},
	infoWrapper: {
		background: '#000',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		zIndex: 99,
		paddingBlock: 12,
		paddingInline: 10,
		borderRadius: 10,
		minWidth: '60%',
	},
	closeWrapper: {
		color: '#fff',
		position: 'absolute',
		right: '4%',
		top: '3%',
		cursor: 'pointer',
	},
	infoText: {
		color: '#fff',
		fontSize: 12,
		textAlign: 'left',
	},
}))

export default function DetailFolders() {
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : ''
	const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : ''
	const {practiceName} = useAuth()
	const [toggleState, setToggleState] = useState(false)
	const {triggerFile} = useContextApi()
	const [list, setList] = useState([])
	const [empty, setEmpty] = useState([])
	const [loading, setLoading] = useState(true)
	const [fileimageurl, setFileImageUrl] = useState([])
	const [FileResponse, setFileResponse] = useState()
	const [bytes, setByte] = useState([])
	const [download, setDownload] = useState('')
	const [viewInfo, setViewInfo] = useState(false)
	const [infoData, setInfoData] = useState({
		documentName: null,
		fileSize: null,
		documentExtension: null,
	})
	const [currentIndex, setCurrentIndex] = useState(null)

	const classes = useStyles()
	const router = useRouter()
	const id = router.query
	const folderName = id.id
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const location = typeof window !== 'undefined' ? window.location.search : null
	const currentUuids = location && location.split('&')
	const currentUuid = currentUuids?.[0]?.split('=').pop()
	const [imgUuid, setImgUuid] = useState(null)

	//folderName
	const Uuids = location && location?.split('?')?.pop()
	const splitUuids = Uuids?.split('&').pop()
	const splitUuid = splitUuids?.split('=').pop()
	const folderNames = splitUuid?.replace('+', ' ')

	const handleClick = (event, data) => {
		setAnchorEl(event.currentTarget)
		setImgUuid(data)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	const yearProps = () => {
		console.log('data')
	}

	function formatBytes(bytes, decimals = 2) {
		if (bytes === 0) return '0 Bytes'

		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

		const i = Math.floor(Math.log(bytes) / Math.log(k))

		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
	}
	// const decimaltoInteger = Math.floor(bytes)

	// useEffect(currentUuid => {
	// 	let cancel
	// 	setTimeout(() => {
	// 		setLoading(true)

	// 		return () => cancel()
	// 	})
	// }, [])

	useEffect(() => {
		if (currentUuid) {
			const onSuccess = res => {
				if (res?.data?.status === 'SUCCESS') {
					setList(res.data.data.fileMetaDataList)
					setByte(res.data.data.fileMetaDataList)
					setFileImageUrl(res.data.data.fileMetaDataList)
					setLoading(false)
				} else {
					setList([])
				}
			}
			const onFailure = err => {
				console.log('Error', err)
				setLoading(false)
			}
			HealthRecordsFileListApi.HealthRecordsFile(custUuid, currentUuid).then(onSuccess, onFailure)
		}
	}, [currentUuid, practiceName, custUuid, triggerFile])

	// const encryptDownload = data => {
	// 	console.log('data', data)

	// const onSuccess = res => {
	// 	setDownload(res?.data)
	// 	window.open(res?.data, '_blank ')
	// }
	// const onFailure = err => {
	// 	console.log('Error', err)
	// }
	// RecordDownloadApi.RecordDownload(data).then(onSuccess, onFailure)
	// }

	const handleInfo = (documentName, fileSize, documentExtension, index) => {
		setViewInfo(true)
		setCurrentIndex(index)
		setInfoData({
			documentName: documentName,
			fileSize: fileSize,
			documentExtension: documentExtension,
		})
	}

	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
					<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
						{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
					</IconButton>
					<div className={classes.vitialsignDetail}>
						<div className={classes.wrapper}>
							<div className={classes.folderPath}>
								<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
									<Typography className={classes.allfiles} variant='h5' onClick={() => router.back()}>
										All Files
									</Typography>
									<Typography variant='h5'>{folderNames}</Typography>
								</Breadcrumbs>
								<FileUploadModal />
							</div>
							<div className={classes.plusdividerone}>
								<AddIcon />
								<Divider />
								<AddIcon />
							</div>
							<div className={classes.allfilestext}>
								<Typography className={classes.recentFiles}>Recent files</Typography>
								<Yearpicker yearProps={yearProps} />
							</div>
						</div>
						{loading ? (
							<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
								<BeatLoader size={12} margin={2} color={'#24A0ED'} />
							</div>
						) : _.isEmpty(list) ? (
							<div className={classes.position}>
								<Image
									alt='No Files Found'
									src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/noFilesFound.svg'
									width={380}
									height={380}
								/>
							</div>
						) : (
							<>
								<div className={classes.cardMain}>
									{!_.isEmpty(list) &&
										list?.map((vitialsignsdatas, index) => (
											<div key={vitialsignsdatas?.uuid}>
												{console.log('vitialsignsdatas', vitialsignsdatas)}
												<Card className={classes.root}>
													{index === currentIndex && viewInfo ? (
														<ShowImageInfo formatBytes={formatBytes} infoData={infoData} setViewInfo={setViewInfo} />
													) : (
														<></>
													)}
													<div className={classes.cardHeader}>
														<IconButton
															onClick={() =>
																handleInfo(vitialsignsdatas?.documentName, vitialsignsdatas?.fileSize, vitialsignsdatas?.documentExtension, index)
															}
															size='small'>
															<InfoIcon fontSize='inherit' />
														</IconButton>
														<Button
															aria-controls='fade-menu'
															aria-haspopup='true'
															onClick={e => {
																handleClick(e, vitialsignsdatas?.uuid)
															}}>
															<Image
																src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/shareicon.png'
																alt='share'
																width={20}
																height={20}
															/>
														</Button>
														<Menu
															className={classes.menuoverride}
															id='fade-menu'
															anchorEl={anchorEl}
															keepMounted
															open={open}
															onClose={handleClose}
															// TransitionComponent={Fade}
														>
															<Sharedate
																imageUuid={imgUuid}
																image={imgUuid ? getProfileImgUrl(imgUuid, token) : ''}
																documentation={imgUuid ? getProfileImgUrl(imgUuid, token) : ''}
																handleCloseMain={handleClose}
															/>
														</Menu>
													</div>
													<Typography className={classes.filedesc}>
														<Image
															src={
																vitialsignsdatas?.documentExtension !== 'pdf'
																	? getProfileImgUrl(vitialsignsdatas?.uuid, token)
																	: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/pdfFile1.png'
															}
															alt='files'
															width={60}
															height={60}
														/>
													</Typography>
													<Typography className={classes.filename}>{vitialsignsdatas?.documentName ? vitialsignsdatas?.documentName : ''}</Typography>
													<div className={classes.plusdivider}>
														<AddIcon />
														<Divider />
														<AddIcon />
													</div>
													<div className={classes.cardBottom}>
														<div className={classes.filedetail}>
															<Typography variant='h6' className={classes.filemb}>
																Filesize:
															</Typography>
															<Typography variant='h6' className={classes.filesize}>
																{formatBytes(vitialsignsdatas?.fileSize)}
															</Typography>
														</div>
														<IconButton
															onClick={() => {
																window.open(getProfileImgUrl(vitialsignsdatas?.uuid, token), '_blank')
															}}
															aria-label='download'
															size='small'>
															<ArrowDownwardIcon fontSize='inherit' />
														</IconButton>
														{/* <a
														href={download}
														onClick={() => {
															encryptDownload(vitialsignsdatas?.uuid)
														}}
														download>
														<IconButton aria-label='download' size='small'>
															<ArrowDownwardIcon fontSize='inherit' />
														</IconButton>
													</a> */}
													</div>
												</Card>
											</div>
										))}
								</div>
							</>
						)}
					</div>
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}

const ShowImageInfo = props => {
	const classes = useStyles()
	const {formatBytes, infoData, setViewInfo} = props
	const {documentName, fileSize, documentExtension} = infoData
	return (
		<>
			<section className={classes.infoWrapper}>
				<CancelIcon onClick={() => setViewInfo(false)} className={classes.closeWrapper} />
				<Typography className={classes.infoText} style={{wordWrap: 'breakWord'}} variant='body1'>
					Name : <br />
					{documentName}
				</Typography>
				<Typography className={classes.infoText} variant='body1'>
					Size : <br />
					{formatBytes(fileSize)}
				</Typography>
				<Typography className={classes.infoText} variant='body1'>
					Type : <br />
					{documentExtension}
				</Typography>
			</section>
		</>
	)
}
