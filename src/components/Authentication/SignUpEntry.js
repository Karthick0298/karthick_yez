import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles, IconButton, Typography, Button, Divider} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Image from 'next/image'
import useAuth from '../../../lib/Utils/hooks/UseAuth'
import Link from 'next/link'
import AccountList from '../../model/AccountList/data'
import EmailSignUp from './EmailSignUp/index'
import PhoneSignUp from './PhoneSignUp'
import OtpValidation from './OtpValidation'
import PhoneOtpValidation from './PhoneLogin/PhoneOtpValidation'
import _ from 'lodash'
import TermsAndCondition from '../../sections/Homepage/TermsAndCondition'
import PinLogin from './PinLogin'
import ValidatePinLogin from './ValidatePinLogin'
const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiBackdrop-root': {
			background: '#0000004D 0% 0% no-repeat padding-box',
			backdropFilter: 'blur(9px)',
		},
		'& .MuiDialog-paperWidthSm': {
			background: 'transparent linear-gradient(141deg, #fffffff0 0%, #ffffffc9 100%) 0% 0% no-repeat padding-box',
			borderRadius: 24,
			[theme.breakpoints.up('sm')]: {
				maxWidth: '28%',
				minWidth: '28%',
			},
		},
		'& .MuiDialog-paperScrollPaper': {
			// maxHeight: 'calc(100% - 0)',
			maxHeight: '94vh',
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

		// ---------
		'& .MuiDialog-scrollPaper': {
			// marginBlockStart: 36,
			// [theme.breakpoints.down('sm')]: {
			// 	marginBlockStart:0,
			// },
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
			background: '#f1f1f1b8',
		},
		'& .MuiButton-label': {
			textTransform: 'none',
			justifyContent: 'inherit',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
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
			background: '#f1f1f1b8',
		},
		'& .MuiButton-label': {
			textTransform: 'none',
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
			textTransform: 'none',
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
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
	},
	linkRoot: {
		borderBottom: '1px solid #ccc',
		'& .MuiListItem-button:hover': {
			backgroundColor: 'unset',
		},
		'& .MuiListItem-gutters': {
			paddingInline: 28,
			paddingBlock: 10,
		},
		[theme.breakpoints.down('xs')]: {
			'& MuiButtonBase-root': {
				padding: 12,
			},
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
				padding: '6px 18px',
			},
		},
	},
}))

function SignUpDialog(props) {
	const classes = useStyles()
	const {onClose, open, selectedValue, hanldeEmailLogin, handlePhoneLogin} = props

	// const formTypes = () => {
	// 	setAuth(!auth)
	// }

	const handleClose = () => {
		onClose && onClose(selectedValue)
	}
	const handleListItemClick = value => {
		onClose && onClose(value)
	}
	const {signin, facebooksignin, saveActiveDevices} = useAuth()

	return (
		<Dialog aria-labelledby='simple-dialog-title' style={{zIndex: 9999}} open={open} className={classes.root} onClose={handleClose}>
			<DialogTitle id='simple-dialog-title'>
				<IconButton disabled>
					<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/lyfngo_redlogo2x.png' width={51} height={52} />
				</IconButton>
				<Button>
					<Typography variant='h5'>Sign Up</Typography>
				</Button>
			</DialogTitle>
			<List className={classes.buttonList}>
				<ListItem>
					<Button onClick={handlePhoneLogin}>
						<IconButton disabled>
							<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/auth/phone.svg' width={15} height={15} />
						</IconButton>
						Sign up with mobile number
					</Button>
				</ListItem>
			</List>
			<List className={classes.buttonList}>
				<ListItem>
					<Button onClick={hanldeEmailLogin}>
						<IconButton disabled>
							<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/auth/email.png' width={15} height={15} />
						</IconButton>
						Sign up with email
					</Button>
				</ListItem>
			</List>
			{/* <Typography variant='h6' style={{color: '#696D70', textAlign: 'center'}}>
				Or
			</Typography> */}
			{/* <List className={classes.mediaList}>
				<ListItem>
					<Button
						onClick={() => {
							handleListItemClick('email')
							signin()
						}}>
						<IconButton disabled>
							<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/auth/Group 90.svg' width={15} height={15} />
						</IconButton>
						Connect with google
					</Button>
				</ListItem>
				<ListItem className={classes.faceBook}>
					<Button onClick={() => [facebooksignin(), handleListItemClick('email'), saveActiveDevices()]}>
						<IconButton disabled>
							<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/auth/fb.svg' width={15} height={15} />
						</IconButton>
						Connect with facebook
					</Button>
				</ListItem>
			</List> */}
			<div className={classes.footer}>
				<Typography variant='h6'>
					By continuing you agree to the &nbsp;
					<Link href='/terms-and-conditions'>
						<a target='_blank' style={{textDecoration: 'none', color: '#e22c24'}}>
							Terms and Conditions
						</a>
					</Link>
					and acknowledge that you have read our &nbsp;
					<Link href='/privacy-policy/'>
						<a target='_blank' style={{textDecoration: 'none'}}>
							<a>Privacy Policies</a>
						</a>
					</Link>
				</Typography>
			</div>
		</Dialog>
	)
}

SignUpDialog.propTypes = {
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
}

export default function SignUp({openDialogSigning, handleClosePopup}) {
	// const [open, setOpen] = React.useState(false)
	const [emailPopupOpen, setEmailPopup] = useState(false)
	const [phonePopupOpen, setPhonePopup] = useState(false)
	const [otpPopupOpen, setOtpPopup] = useState(false)
	const [phoneOtpPopup, setPhoneOtpPopup] = useState(false)
	const [resetMobileField, setResetMobileField] = useState('')
	const [email, setEmail] = useState('')
	const {loading} = useAuth()
	const [code, setCode] = useState('')
	const [otpError, setOtpError] = useState('')
	const [emailError, setEmailError] = useState('')

	const [openPinLogin, setOpenPinLogin] = useState(false)
	const [pinValidation, setPinValidation] = useState('')
	const [pinCode, setPinCode] = useState('')
	const [confirmPinCode, setConfirmPinCode] = useState('')

	const [openValidatePinLogin, setOpenValidatePinLogin] = useState(false)
	const [pinValidationCode, setPinValidationCode] = useState('')
	const [pinValidationError, setPinValidationError] = useState('')

	// const handleClick = () => {
	// 	setOpen(true)
	// }

	// const handleClose = () => {
	// 	setOpen(false)
	// }
	// const { user, signout, emailSignOut, phoneSignOut } = useAuth()

	const hanldeEmailLogin = () => {
		setEmailPopup(true)
		handleClosePopup()
	}
	const handlePhoneLogin = () => {
		setPhonePopup(true)
		handleClosePopup()
	}

	const handleContinue = () => {
		setEmailPopup(false)
		setOtpPopup(true)
		handleClosePopup()
	}
	const handlePhoneOtp = () => {
		setPhonePopup(false)
		setPhoneOtpPopup(true)
		handleClosePopup()
	}
	const handleEmailEntry = () => {
		setOtpPopup(false)
		handleClosePopup()
	}
	const handlePhoneEntry = () => {
		setPhoneOtpPopup(false)
		handleClosePopup()
	}
	const handlePinLogin = () => {
		// setPhonePopup(false)
		setOpenPinLogin(true)
		handleClosePopup()
	}
	const handlePinValidateLogin = () => {
		setPhoneOtpPopup(false)
		setOpenValidatePinLogin(true)
		handleClosePopup()
	}
	//without enter Mobile number validate OTP
	useEffect(() => {
		if (code === code) {
			setOtpError('')
		}
	}, [code])
	//without enter email validate OTP
	useEffect(() => {
		if (code === code) {
			setEmailError('')
		}
	}, [code])
	// const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	// const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
	// const userType = typeof window !== 'undefined' ? secureLocalStorage.getItem('userType') : null

	// const loggedVia = typeof window !== 'undefined' ? secureLocalStorage.getItem('loggedVia') : null

	// const isLoggedIn = !_.isEmpty(userId) && !_.isEmpty(token)
	// console.log('loggedIn', isLoggedIn)

	useEffect(() => {
		if (pinCode === confirmPinCode) {
			setPinValidation('')
		}
	}, [confirmPinCode, pinCode])

	return (
		<>
			{/* <SignUpDialog open={openDialogSigning} onClose={handleClosePopup} hanldeEmailLogin={hanldeEmailLogin} handlePhoneLogin={handlePhoneLogin} /> */}
			{/* <EmailSignUp
				open={emailPopupOpen}
				handleClose={() => {
					setEmailPopup(false)
					setEmail('')
				}}
				handleContinue={handleContinue}
				email={email}
				setEmail={setEmail}
				loading={loading}
			/> */}
			<PhoneSignUp
				open={openDialogSigning}
				handleClose={() => {
					// setPhonePopup(false)
					setResetMobileField('')
					handleClosePopup()
				}}
				handlePhoneOtp={handlePhoneOtp}
				handlePinLogin={handlePinLogin}
				handlePinValidateLogin={handlePinValidateLogin}
				resetMobileField={resetMobileField}
				setResetMobileField={setResetMobileField}
			/>
			<OtpValidation
				open={otpPopupOpen}
				setOpen={setOtpPopup}
				handleClose={() => {
					setOtpPopup(false)
					setEmail('')
					setCode('')
					setEmailError('')
				}}
				code={code}
				setCode={setCode}
				setOpenPinLogin={setOpenPinLogin}
				handleEmailEntry={handleEmailEntry}
				emailError={emailError}
				setEmailError={setEmailError}
			/>
			<PhoneOtpValidation
				open={phoneOtpPopup}
				setOpen={setPhoneOtpPopup}
				handleClose={() => {
					setPhoneOtpPopup(false)
					setResetMobileField('')
					setCode('')
					setOtpError('')
				}}
				handlePhoneEntry={handlePhoneEntry}
				setOpenPinLogin={setOpenPinLogin}
				code={code}
				setCode={setCode}
				otpError={otpError}
				setOtpError={setOtpError}
			/>
			<PinLogin
				open={openPinLogin}
				pinCode={pinCode}
				setPinCode={setPinCode}
				confirmPinCode={confirmPinCode}
				setConfirmPinCode={setConfirmPinCode}
				handleClose={() => {
					setOpenPinLogin(false)
					setPinValidation('')
				}}
				setPinValidation={setPinValidation}
				pinValidation={pinValidation}
			/>
			<ValidatePinLogin
				open={openValidatePinLogin}
				setPinValidationCode={setPinValidationCode}
				pinValidationCode={pinValidationCode}
				handleClose={() => {
					setOpenValidatePinLogin(false)
					setPinValidation('')
					setPinValidationError('')
				}}
				setPinValidationError={setPinValidationError}
				pinValidationError={pinValidationError}
			/>
		</>
	)
}
