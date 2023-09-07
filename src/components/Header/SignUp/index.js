import React, {useState, useEffect} from 'react'
import {makeStyles, IconButton, Popover, Button, Divider, List, ListItem, Typography, Link} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Image from 'next/image'
import clsx from 'clsx'
import AuthEntry from '../../Authentication/AuthEntry'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import AccountList from '../../../model/AccountList/data'
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import _ from 'lodash'
import {useRouter} from 'next/router'
import logoutApi from '../../../../Service/Setting/Logout'
import SignUpEntry from '../../Authentication/SignUpEntry'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import {ToastContainer, toast} from 'react-toastify'
import {getProfileImgUrl} from '../../../../lib/Utils/profileUrlImage/index'
import FramerDrawer from '../FramerDrawer/index'
import {useCycle} from 'framer-motion'
import CloseIcon from '@material-ui/icons/Close'
import secureLocalStorage from 'react-secure-storage'

// import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	container: {
		// display: 'block',
		// [theme.breakpoints.down('xs')]: {
		// 	display: 'none',
		// },
		'& .MuiIconButton-label': {
			'& .MuiSvgIcon-root': {
				color: '#0062DD',
			},
		},
	},
	containerArow: {
		height: 12,
		width: 12,
		position: 'absolute',
	},
	Arrow: {
		/* Border */
		borderLeft: '1px solid rgb(0 0 0 / 15%)',
		borderTop: '1px solid rgb(0 0 0 / 12%)',
		transform: 'translate(222%, -44%) rotate(45deg)',
		background: 'transparent linear-gradient(1225deg, #f6f6f600 0%, #e2e2e200 100%) 0% 0% no-repeat padding-box',
		backdropFilter: 'blur(120px)',
		[theme.breakpoints.down('xs')]: {
			transform: 'translate(164px, -55%) rotate(45deg)',
		},
	},
	popover: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		'& .MuiPopover-paper': {
			overflowX: 'visible',
			overflowY: 'visible',
		},
		'& .MuiPaper-root': {
			background: 'transparent linear-gradient(135deg, #e2e2e2b3 0%, #e2e2e2b3 100%) 0% 0% no-repeat padding-box',
			backdropFilter: 'blur(30px)',
		},
		'& .MuiPaper-elevation8': {
			boxShadow: '0px 3px 6px #00000026',
		},
		'& .MuiButton-text': {
			padding: 0,
			textTransform: 'capitalize',
		},
		'& .MuiButton-root': {
			padding: '8px 34px',
			width: '100%',
		},
		'& .MuiButton-label': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			fontSize: theme.typography.h5.fontSize,
			fontFamily: theme.typography.h5.fontFamily,
			fontWeight: 400,
		},
	},
	avatar: {
		// border: '1px solid #91919a5c',
		'& .MuiAvatar-img': {
			borderRadius: '50%',
		},
	},
	rootSignup: {
		'& .MuiBackdrop-root': {
			background: '#0000004D 0% 0% no-repeat padding-box',
		},
		'& .MuiDialog-paperWidthSm': {
			maxWidth: 338,
			background: '#FFFFFF 0% 0% no-repeat padding-box',
			borderRadius: 24,
		},
		'& .MuiDialogTitle-root': {
			padding: '24px 24px 0px 24px',
		},
		'& .MuiTypography-h6': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			'& .MuiTypography-h5': {
				color: '#0062DD',
				textTransform: 'capitalize',
			},
		},
	},
	buttonList: {
		'& .MuiButton-root': {
			borderRadius: 24,
			border: '1px solid #DDDDDD',
			width: '100%',
		},
		'& .MuiButton-text': {
			padding: 0,
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			gap: 38,
		},
	},
	mediaList: {
		'& .MuiButton-root': {
			borderRadius: 24,
			border: '1px solid #DDDDDD',
			width: '100%',
		},
		'& .MuiIconButton-root': {
			position: 'relative',
			left: 16,
		},
		'& .MuiButton-text': {
			padding: 0,
			background: '#F1F1F1 0% 0% no-repeat padding-box',
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			gap: 38,
		},
	},
	faceBook: {
		'& .MuiButton-root': {
			borderRadius: 24,
			border: '1px solid #DDDDDD',
			background: '#3B5998 0% 0% no-repeat padding-box',
			width: '100%',
		},
		'& .MuiIconButton-root': {
			position: 'relative',
			left: 23,
		},
		'& .MuiButton-text': {
			padding: 0,
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			color: '#fff',
			gap: 38,
		},
	},
	footer: {
		paddingInline: 16,
		paddingBlock: 32,
		'& .MuiTypography-h6': {
			display: 'block',
			textAlign: 'center',
		},
	},
	linkRoot: {
		borderBottom: '1px solid #ccc',
		'& .MuiListItem-button:hover': {
			backgroundColor: 'unset',
		},
		'& .MuiListItem-gutters': {
			paddingInline: 18,
			paddingBlock: 4,
		},
		[theme.breakpoints.down('xs')]: {
			'& MuiButtonBase-root': {
				padding: 12,
			},
		},
		'& .MuiLink-underlineHover': {
			textDecoration: 'none',
		},
		'& .MuiTypography-h5': {
			paddingBlock: 6,
		},
	},
	content: {
		[theme.breakpoints.down('xs')]: {
			paddingInlineStart: 8,
			paddingInlineEnd: 0,
		},
		'& .MuiList-padding': {
			padding: 0,
			[theme.breakpoints.down('xs')]: {
				padding: 12,
				borderBottom: '1px solid #ccc',
			},
		},
	},
	loginLink: {
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: theme.typography.h5.fontSize,
		textDecoration: 'none',
		color: '#464444',
		'&:hover': {
			color: theme.palette.lyfngo.main,
		},
	},
	mobileButton: {
		[theme.breakpoints.down('xs')]: {
			'& .MuiButton-text': {
				padding: '15px 18px',
			},
		},
	},
	rounderPic: {
		borderRadius: '30px',
	},
	defaultImgWrapper: {
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		'& .MuiButton-label': {
			fontSize: 12,
			color: '#0062DD',
			letterSpacing: 0.7,
			textTransform: 'capitalize',
			fontWeight: 500,
			fontFamily: theme.typography.h1.fontFamily,
		},
		'& .MuiButton-outlined': {
			border: '2px solid #0062DD',
			borderRadius: 6,
		},
	},
	googleImgWrapper: {
		position: 'relative',
		borderRadius: '100%',
		cursor: 'pointer',
	},
	phoneImgWrapper: {
		position: 'relative',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		gap: 8,
		maxWidth: '174px',
		height: '40px',
		borderRadius: 6,
		padding: 6,
		'&:hover': {
			background: '#07000005',
		},
	},
	textElipsis: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		width: '120px',
		fontSize: 14,
		letterSpacing: 1,
	},
	emailImgWrapper: {
		display: 'flex',
		position: 'relative',
		cursor: 'pointer',
		alignItems: 'center',
		gap: 8,
		maxWidth: '174px',
		height: '40px',
		borderRadius: 6,
		padding: 6,
		'&:hover': {
			background: '#07000005',
		},
	},
}))

const SignupData = ({classes, openSigninDialog, handleClose, openLoginDialog}) => {
	const {
		user,
		signout,
		token,
		userId,
		setUser,
		loggedVia,
		otpVerified,
		setToken,
		setUserId,
		setLoggedVia,
		setOtpVerified,
		setAnchorEl,
		setOpenLocation,
	} = useAuth()
	// const {setSearchSuggestions} = useContextApi()
	// const loggedVia = typeof window !== 'undefined' ? secureLocalStorage.getItem('loggedVia') : null
	// const isOtpVerified = typeof window !== 'undefined' ? secureLocalStorage.getItem('isOtpVerified') : null

	const isLoggedIn = userId && token && otpVerified
	const router = useRouter()
	const click_ref = React.useRef(null)

	const deviceUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('DeviceUuuid') : null

	const DeviceLogOut = () => {
		if (deviceUuid) {
			const onSuccess = res => {
				secureLocalStorage.clear()
				router.push('/marketplace')
				setUser(null)
				setToken(null)
				setUserId(null)
				setLoggedVia(null)
				setOtpVerified(null)
				setAnchorEl(null)
				setOpenLocation(null)
				// setSearchSuggestions([])
				toast.success(<Typography variant='h5'>Logged out successfully </Typography>)
			}
			const onFailure = err => {
				console.log('error', err)
				toast.error(<Typography variant='h5'>Please try after sometime </Typography>)
			}
			deviceUuid && logoutApi.LogoutDevice(deviceUuid, token).then(onSuccess, onFailure)
		} else {
			toast.error(<Typography variant='h5'>Please try after sometime </Typography>)
		}
	}

	return (
		<>
			{isLoggedIn ? (
				<>
					{/* {!_.isEmpty(user) && user && (
						<>
							<div className={classes.content}>
								{AccountList.map(link => (
									<List className={classes.linkRoot} key={link.id}>
										<ListItem button>
											<Link href={link.href}>
												<a onClick={handleClose} className={classes.loginLink}>
													{link.list}
												</a>
											</Link>
										</ListItem>
									</List>
								))}
							</div>
						</>
					)} */}
					{_.isEqual(loggedVia, 'phone') && (
						<div className={classes.content}>
							{AccountList.map(link => (
								<List className={classes.linkRoot} key={link.id}>
									<ListItem button>
										<Link href={link.href} passHref>
											<a
												rel='noopener'
												onClick={() => {
													if (link?.list === 'Logout') {
														DeviceLogOut()
														handleClose()
													} else {
														handleClose()
													}
												}}
												className={classes.loginLink}>
												{link.list}
											</a>
										</Link>
									</ListItem>
								</List>
							))}
						</div>
					)}
					{_.isEqual(loggedVia, 'email') && (
						<div className={classes.content}>
							{AccountList.map(link => (
								<List className={classes.linkRoot} key={link.id}>
									<ListItem button>
										<Link href={link.href}>
											<a
												onClick={() => {
													if (link?.list === 'Logout') {
														DeviceLogOut()
														handleClose()
													} else {
														handleClose()
													}
												}}
												className={classes.loginLink}>
												{link.list}
											</a>
										</Link>
									</ListItem>
								</List>
							))}
						</div>
					)}
				</>
			) : (
				<>
					<div className={classes.mobileButton}>
						<Button onClick={() => openLoginDialog()}>Login</Button>
						<Divider />
						<Button
							onClick={() => {
								openSigninDialog()
							}}>
							SignUp
						</Button>
					</div>
				</>
			)}
		</>
	)
}

export default function Signup({matches}) {
	const {
		user,
		token,
		userId,
		loggedVia,
		otpVerified,
		getProfilePic,
		anchorEl,
		setAnchorEl,
		setOpenLocation,
		setPhoneOtpCount,
		setDefaultCountryCode,
		setEmailOtpCount,
		userLogo,
		custName,
	} = useAuth()

	const classes = useStyles()
	const [openCycle, cycleOpen] = useCycle(false, true)
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])
	const divRef = React.useRef()
	function handleClick() {
		setOpenLocation(null)
		setAnchorEl(divRef.current)
		setPhoneOtpCount(0)
		setDefaultCountryCode()
		setEmailOtpCount(0)
	}

	const handleClose1 = () => {
		setAnchorEl(null)
	}
	const open1 = Boolean(anchorEl)
	const id = open1 ? 'simple-popover' : undefined

	const [openDialogSigning, setOpenDialogSignin] = useState(false)
	const [openDialogLogin, setOpenDialogLogin] = useState(false)

	const openSigninDialog = () => {
		setOpenDialogSignin(true)
		secureLocalStorage.clear()
		handleClose1()
	}

	const openLoginDialog = () => {
		setOpenDialogLogin(true)
		secureLocalStorage.clear()
		handleClose1()
	}

	const handlClosePopup = () => {
		setOpenDialogSignin(false)
	}
	const handlClosePopup1 = () => {
		setOpenDialogLogin(false)
	}

	// const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	// const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null

	// const loggedVia = typeof window !== 'undefined' ? secureLocalStorage.getItem('loggedVia') : null
	// const isOtpVerified = typeof window !== 'undefined' ? secureLocalStorage.getItem('isOtpVerified') : null
	const isLoggedIn = userId && token && otpVerified

	console.log('isLoggedIn', userId && token && otpVerified)

	return (
		mounted && (
			<div className={classes.container} ref={divRef}>
				{isLoggedIn ? (
					<>
						{!_.isEmpty(user) && user && (
							// google login profile pic
							<div onClick={!matches ? handleClick : cycleOpen} className={classes.googleImgWrapper}>
								{user?.photoURL ? (
									<Avatar alt='user' src={user.photoURL} />
								) : (
									<Image alt={'user'} src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/user-b2c.svg'} width={40} height={40} />
								)}
								{/* <ArrowDropDownIcon /> */}
							</div>
						)}
						{_.isEqual(loggedVia, 'phone') &&
							// phone login profile pic
							(openCycle ? (
								<div className='btn-container'>
									<IconButton onClick={cycleOpen}>{openCycle ? <CloseIcon style={{color: '#D91E15', fontSize: 32}} /> : 'Open'}</IconButton>
								</div>
							) : (
								<div onClick={!matches ? handleClick : cycleOpen} className={classes.phoneImgWrapper}>
									{userLogo ? (
										<Avatar
											alt={custName || 'user'}
											src={getProfileImgUrl(userLogo, token) || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/user-b2c.svg'}
										/>
									) : (
										<Image alt={'user'} src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/user-b2c.svg'} width={40} height={40} />
									)}
									{custName ? (
										<Typography variant='h5' className={classes.textElipsis}>
											{custName}
										</Typography>
									) : (
										<Typography variant='h5' className={classes.textElipsis}>
											Hello, User
										</Typography>
									)}
								</div>
							))}
						{_.isEqual(loggedVia, 'email') &&
							// email login profile pic
							(openCycle ? (
								<div className='btn-container'>
									<IconButton onClick={cycleOpen}>{openCycle ? <CloseIcon style={{color: '#D91E15', fontSize: 32}} /> : 'Open'}</IconButton>
								</div>
							) : (
								<div className={classes.emailImgWrapper} onClick={!matches ? handleClick : cycleOpen}>
									{userLogo ? (
										<Avatar
											alt={custName || 'user'}
											src={getProfileImgUrl(userLogo, token) || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/user-b2c.svg'}
										/>
									) : (
										<Image alt={'user'} src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/user-b2c.svg'} width={40} height={40} />
									)}
									{custName ? (
										<Typography variant='h5' className={classes.textElipsis}>
											{custName}
										</Typography>
									) : (
										<Typography variant='h5' className={classes.textElipsis}>
											Hello, User
										</Typography>
									)}
								</div>
							))}
					</>
				) : (
					<section onClick={() => openLoginDialog()} className={classes.defaultImgWrapper}>
						{/* <Avatar alt='user' width={40} height={40} src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/user-b2c.svg' /> */}
						<Button
							variant='outlined'
							color='secondary'
							// className={classes.button}
							startIcon={
								matches ? (
									''
								) : (
									<Image
										alt={'user'}
										src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/icons/loginUser.svg'
										width={15}
										height={15}
									/>
								)
							}>
							Login / Signup
						</Button>
					</section>
				)}
				<Popover
					style={{overflowY: 'scroll'}}
					className={classes.popover}
					id={id}
					open={open1}
					anchorEl={anchorEl}
					onClose={handleClose1}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: -28,
						horizontal: 80,
					}}>
					<div className={clsx(classes.containerArow, classes.Arrow)}></div>
					<SignupData classes={classes} handleClose={handleClose1} openSigninDialog={openSigninDialog} openLoginDialog={openLoginDialog} />
				</Popover>
				{matches && <FramerDrawer open={openCycle} />}
				<AuthEntry handleClosePopup1={handlClosePopup1} openDialogLogin={openDialogLogin} />
				<SignUpEntry handleClosePopup={handlClosePopup} openDialogSigning={openDialogSigning} />
			</div>
		)
	)
}
