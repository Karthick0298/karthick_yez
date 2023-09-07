import React, {useEffect} from 'react'
import {makeStyles, IconButton, Avatar, Button, Divider, List, ListItem, Link, Typography} from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AuthEntry from '../../Authentication/AuthEntry'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import {useRouter} from 'next/router'
import Image from 'next/image'
// import AccountList from '../../../model/AccountList/data'
import logoutApi from '../../../../Service/Setting/Logout'
import SignUpEntry from '../../Authentication/SignUpEntry'
import {getProfileImgUrl} from '../../../../lib/Utils/profileUrlImage/index'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	container: {
		display: 'block',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		'& .MuiIconButton-label': {
			'& .MuiSvgIcon-root': {
				color: theme.palette.lyfngo.main,
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
		borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
		borderTop: '1px solid rgba(0, 0, 0, 0.08)',
		transform: 'translate(222%, -44%) rotate(45deg)',
		background: 'transparent linear-gradient(135deg, #f6f6f6 0%, #e2e2e2b3 100%) 0% 0% no-repeat padding-box',
		backdropFilter: 'blur(30px)',
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
		border: '1px solid #91919a5c',
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
				color: theme.palette.lyfngo.main,
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
			paddingInline: 10,
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
				// padding: 12,
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
	root: {
		borderBottom: '1px solid #e6e6e632',
		boxShadow: 'none',
		backgroundColor: '#ffffff32',
		borderBottom: '1px solid #ccc',
		'& .MuiAccordionSummary-root': {
			padding: 0,
		},
		'& .MuiAccordionSummary-content': {
			margin: 0,
			flexGrow: 0,
		},
		'& .MuiSvgIcon-root': {
			color: '#5730b0',
		},
		'& .MuiIconButton-label': {
			gap: 12,
		},
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			fontWeight: 500,
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			'& .MuiListItem-root': {
				margin: 6,
			},
			'& .MuiButton-label': {
				textTransform: 'capitalize',
				color: theme.palette.paragraph.main,
				fontFamily: theme.typography.h6.fontFamily,
			},
			'& .MuiAccordionDetails-root': {
				padding: 0,
				display: 'block',
			},
		},
	},
	profilePicWrapper: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		cursor: 'pointer',
		overflow: 'hidden',
		gap: 12,
		paddingBlockStart: 12,
		paddingInlineStart: 12,
	},
}))

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
const AccountList = [
	{
		id: 1,
		list: 'Appointments',
		href: '/myaccount/appointments',
	},
	{
		id: 2,
		list: 'Online consultations',
		href: '/myaccount/onlineconsultation',
	},
	{
		id: 3,
		list: 'Lab tests',
		href: '/myaccount/labtest',
	},
	{
		id: 4,
		list: 'Orders',
		href: '/myaccount/order',
	},
	{
		id: 4,
		list: 'Orders',
		href: '/myaccount/order',
	},
	{
		id: 4,
		list: 'Diet Plan',
		href: '/myaccount/order',
	},
	{
		id: 5,
		list: 'Payments',
		href: '/myaccount/payment',
	},
	{
		id: 6,
		list: 'Health records',
		href: '/myaccount/healthrecords',
	},
	{
		id: 7,
		list: 'Feedback',
		href: '/myaccount/feedback',
	},
	{
		id: 8,
		list: 'Articles',
		href: '/myaccount/articles',
	},
	{
		id: 9,
		list: 'Setting',
		href: '/settingmenu/myprofile',
	},
]

const SignupData = ({classes, openSigninDialog, handleClose, openLoginDialog}) => {
	const {user, signout, token, userId, loggedVia, otpVerified} = useAuth()
	// const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	// const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
	// const userType = typeof window !== 'undefined' ? secureLocalStorage.getItem('userType') : null

	// const loggedVia = typeof window !== 'undefined' ? secureLocalStorage.getItem('loggedVia') : null
	// const isOtpVerified = typeof window !== 'undefined' ? secureLocalStorage.getItem('isOtpVerified') : null

	const isLoggedIn = !_.isEmpty(userId) && !_.isEmpty(token) && otpVerified
	const router = useRouter()
	const click_ref = React.useRef(null)

	useEffect(() => {
		function handleClick() {
			logoutApi
				.LogoutDevice()
				.then(response => {
					secureLocalStorage.clear()
					router.reload()
					router.push('/')
				})
				.catch(error => {
					console.log(error)
				})
		}
		click_ref.current = handleClick
	}, [])

	return (
		<>
			{isLoggedIn ? (
				<>
					{_.isEqual(otpVerified, 'true') && user && (
						<>
							<div className={classes.content}>
								{AccountList?.map(link => (
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
								<List className={classes.linkRoot}>
									<ListItem button onClick={() => click_ref.current()}>
										<Link href='/'>
											<a onClick={handleClose} className={classes.loginLink}>
												Logout
											</a>
										</Link>
									</ListItem>
								</List>
							</div>
						</>
					)}
					{_.isEqual(loggedVia, 'phone') && (
						<div className={classes.content}>
							{AccountList?.map(link => (
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
							<List className={classes.linkRoot}>
								<ListItem button onClick={() => click_ref.current()}>
									<Typography variant='h5' className={classes.loginLink}>
										Logout
									</Typography>
								</ListItem>
							</List>
						</div>
					)}
					{_.isEqual(loggedVia, 'email') && (
						<div className={classes.content}>
							{AccountList?.map(link => (
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
							<List className={classes.linkRoot}>
								<ListItem button onClick={() => click_ref.current()}>
									<Typography variant='h5' className={classes.loginLink}>
										Logout
									</Typography>
								</ListItem>
							</List>
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

export default function MobileSignUp() {
	const classes = useStyles()
	const {user, token, userId, loggedVia, otpVerified, getProfilePic, userLogo, custName} = useAuth()
	const [openDialogSigning, setOpenDialogSignin] = React.useState(false)
	const [openDialogLogin, setOpenDialogLogin] = React.useState(false)

	const openSigninDialog = () => {
		setOpenDialogSignin(true)
		secureLocalStorage.clear()
	}

	const openLoginDialog = () => {
		setOpenDialogLogin(true)
		secureLocalStorage.clear()
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
	// const {user} = useAuth()
	const isLoggedIn = !_.isEmpty(userId) && !_.isEmpty(token) && otpVerified

	return (
		<>
			{/* <Accordion className={classes.root}> */}
			{/* <AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						paddingInline: 14,
					}}> */}
			{isLoggedIn ? (
				<>
					{_.isEqual(otpVerified, 'true') && user && (
						<div className={classes.profilePicWrapper}>
							<Avatar alt='user' src={user?.photoURL} width={40} height={40} className={classes.avatar} />
							<Typography variant='h5'>User</Typography>
						</div>
					)}
					{_.isEqual(loggedVia, 'phone') && (
						<div className={classes.profilePicWrapper}>
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
					)}
					{_.isEqual(loggedVia, 'email') && (
						<div className={classes.profilePicWrapper}>
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
					)}
				</>
			) : (
				<>
					<div className={classes.profilePicWrapper}>
						<Avatar alt='user' width={40} height={40} src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/user-b2c.svg' />
						<Typography variant='h5'>User</Typography>
					</div>
				</>
			)}
			{/* </AccordionSummary> */}
			<>
				<SignupData classes={classes} openSigninDialog={openSigninDialog} openLoginDialog={openLoginDialog} />
				<AuthEntry handleClosePopup1={handlClosePopup1} openDialogLogin={openDialogLogin} />
				<SignUpEntry handleClosePopup={handlClosePopup} openDialogSigning={openDialogSigning} />
			</>
			{/* </Accordion> */}
		</>
	)
}
