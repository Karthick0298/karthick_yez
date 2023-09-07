import Input from 'react-otp-input'
import React, {useState, useEffect} from 'react'
import {makeStyles, IconButton, Typography, Button} from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Image from 'next/image'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import AuthButton from '../../AuthButton'
import {useForm} from 'react-hook-form'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import {useRouter} from 'next/router'
import validOtpApi from '../../../../Service/Login/EmailOtp'
import {ToastContainer, toast} from 'react-toastify'
import Axios from 'axios'
import {API_ENDPOINTS} from '../../../constants'
import signupApi from '../../../../Service/Login/loginAes/index'
import lodash from 'lodash'
import {encryption, decryption} from '../../../../lib/Utils/AES'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiBackdrop-root': {
			background: '#0000004D 0% 0% no-repeat padding-box',
			backdropFilter: 'blur(9px)',
		},
		'& .MuiDialog-paperScrollPaper': {
			// maxHeight: 'calc(100% - 164px)',
			maxHeight: '94vh',
		},
		'& .MuiDialog-paperWidthSm': {
			maxWidth: '50%',
			minWidth: '32%',
			background: 'transparent linear-gradient(141deg, #fffffff0 0%, #ffffffc9 100%) 0% 0% no-repeat padding-box',
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
		'& .MuiDialogContent-root': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBlock: 36,
			overflowY: 'hidden',
			'& .MuiTypography-body1': {
				fontFamily: theme.typography.h6.fontFamily,
				fontWeight: 500,
			},
		},
		'& .MuiDialogActions-root': {
			justifyContent: 'center',
			paddingBlockEnd: 58,
			paddingTop: 24,
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
	link: {
		color: theme.palette.lyfngo.main,
	},
	resend: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 32,
		'& .MuiButton-label': {
			color: theme.palette.lyfngo.main,
			fontFamily: theme.typography.h5.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			textTransform: 'capitalize',
		},
	},
	disabledButton: {
		opacity: 0.5,
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
	emailInput: {
		paddingInline: 16,
		'& .MuiInputBase-input': {
			fontSize: 13,
			fontFamily: theme.typography.h6.fontFamily,
			fontWeight: 400,
		},
		'& .MuiFormLabel-root .Mui-focused': {
			color: 'red !important',
		},
		'& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderBottom: 'red !important',
		},
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		'& .MuiTypography-h6': {
			paddingInline: 16,
			color: theme.palette.lyfngo.main,
			alignItems: 'baseline',
		},
	},
	otpInput: {
		padding: '0px 45px 18px 50px',
		display: 'flex',
		justifyContent: 'center',
	},
	otpVlidation: {
		color: theme.palette.lyfngo.main,
		paddingTop: 12,
	},
	errorThrow: {
		'& .MuiTypography-h5': {
			color: theme.palette.lyfngo.main,
			paddingTop: 18,
			fontWeight: 500,
			textAlign: 'center',
		},
	},
	otpDetails: {
		'& .MuiTypography-h5': {
			padding: '0px 58px 10px',
			fontWeight: 500,
		},
		'& .MuiTypography-h6': {
			display: 'block',
			color: theme.palette.paragraph.main,
			textAlign: 'center',
		},
	},
}))

export default function OtpValidation({handleEmailEntry, open, setOpen, handleClose, code, setCode, emailError, setEmailError, setOpenPinLogin}) {
	const classes = useStyles()
	const {emailUser, saveActiveDevices, setLoggedVia, setOtpVerified, setLoading, setEmailResend, emailOtpCount, setEmailOtpCount} = useAuth()
	// const [code, setCode] = useState('')
	// const [emailError, setEmailError] = useState('')
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm()

	const handleChange = code => setCode(code)

	const userType = typeof window !== 'undefined' ? secureLocalStorage.getItem('userType') : null
	const emailId = typeof window !== 'undefined' ? secureLocalStorage.getItem('emailId') : null
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null

	const localStore = {
		userType,
		emailId,
		userId,
	}

	const onSubmit = () => {
		const emailData = {
			uuid: localStore.userId,
			verificationToken: code,
		}
		let decryptKey = encryption(emailData)
		const onSuccess = res => {
			const successData = decryption(res)
			if (successData?.status === 'success') {
				saveActiveDevices()
				secureLocalStorage.setItem('loggedVia', 'email')
				// setLoggedVia(secureLocalStorage.getItem('loggedVia'))
				secureLocalStorage.setItem('isOtpVerified', true)
				// setOtpVerified(secureLocalStorage.getItem('isOtpVerified'))
				reset()
				setCode('')
				setOpen(false)
				setOpenPinLogin(true)
			} else {
				secureLocalStorage.setItem('isEmailUser', '')
				secureLocalStorage.setItem('isOtpVerified', false)
				setOtpVerified(secureLocalStorage.getItem('isOtpVerified'))
				secureLocalStorage.removeItem('userId')
				setOpen(true)
				setCode('')
				setOpenPinLogin(true)
			}
		}
		const onFailure = err => {
			toast.error(
				<Typography variant='h5' style={{zIndex: 9999}}>
					Please enter valid OTP
				</Typography>
			)
			console.log('error', err)
			secureLocalStorage.setItem('isEmailUser', '')
			secureLocalStorage.setItem('isOtpVerified', false)
			// secureLocalStorage.removeItem('userId')
			setOpen(true)
			setCode('')
			setOpenPinLogin(false)
		}
		if (code === '') {
			setEmailError('Please enter the OTP')
		} else {
			signupApi.verifyEmail(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
			handleEmailEntry()
		}
	}

	// const helo = () => {
	// 	if (status !== 'failure') {
	// 		return (
	// 			<div>
	// 				<Typography variant='h5'>Please enter the valid OTP</Typography>
	// 			</div>
	// 		)
	// 	} else if (status === 'success') {
	// 		return (
	// 			<div>
	// 				<Typography> </Typography>
	// 			</div>
	// 		)
	// 	}
	// }

	// const onSubmit = () => {
	// 	if (emailUser === 'success') {
	// 		const emailData = {
	// 			uuid: secureLocalStorage.getItem('userId'),
	// 			verificationToken: code,
	// 		}
	// 		validOtp(emailData)
	// 		handleEmailEntry()
	// 	}
	// }

	// let element
	// if (emailUser === 'success') {
	// 	router.push('/')
	// }
	// else {
	// 	element = (
	// 		<span variant='h5' className={classes.otpVlidation}>
	// 			Please enter valid otp
	// 		</span>
	// 	)
	// }

	// Resend Email Otp
	const emailResendOtp = async data => {
		let decryptKey = encryption(data)
		// setLoading(true)
		const onSuccess = res => {
			const successData = decryption(res)
			if (successData?.status === 'success') {
				toast.success(
					<Typography variant='h5' style={{zIndex: 9999}}>
						OTP has been sent successfully{' '}
					</Typography>
				)
				setEmailResend(successData)
				setEmailOtpCount(emailOtpCount + 1)
			}
		}
		const onFailure = err => {
			// setLoading(false)
			const failureData = failureLogin(err)
			toast.error(
				<Typography variant='h5' style={{zIndex: 9999}}>
					{failureData?.message}
				</Typography>
			)
			console.log('AXIOS ERROR: ', err)
		}
		signupApi.emailResend(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
	}

	const resendOtpEmail = () => {
		const resendData = {
			isGenerateEmail: true,
			userName: secureLocalStorage.getItem('emailId'),
			type: 'B2C',
			userType: 'CUS',
		}
		emailResendOtp(resendData)
	}

	return (
		<>
			{/* <DialogActions>
        <AuthButton onClick={handleClickOpen} type="submit">
          Continue
        </AuthButton>
      </DialogActions> */}
			<Dialog aria-labelledby='simple-dialog-title' style={{zIndex: 999}} open={open} className={classes.root} onClose={handleClose}>
				<DialogTitle id='simple-dialog-title'>
					<IconButton disabled>
						<Image alt='lyfngo logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/LYFnGOLogoB2b.png' width={64} height={62} />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Typography variant='body1'>Enter the OTP</Typography>
				</DialogContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.otpInput}>
						<Input
							value={code}
							onChange={handleChange}
							numInputs={4}
							separator={<span style={{width: '28px'}}></span>}
							isInputNum={true}
							shouldAutoFocus={true}
							isInputSecure={false}
							inputStyle={{
								border: '1px solid red',
								borderRadius: '4px',
								width: '36px',
								height: '40px',
								fontSize: '18px',
								color: '#000',
								fontWeight: '400',
								caretColor: 'black',
								backgroundColor: '#ffffff00',
							}}
							focusStyle={{
								border: '1px solid red',
								outline: 'none',
							}}
						/>
					</div>
					{emailError ? (
						<Typography align='center' color='error' style={{fontSize: '16px'}}>
							{emailError}
						</Typography>
					) : null}
					<div className={classes.otpDetails}>
						<Typography variant='h6'>
							Verification code send to email: <span style={{color: '#e22c24', fontWeight: 500}}>{localStore.emailId}</span>
						</Typography>
					</div>
					<div className={classes.resend}>
						<Button onClick={() => resendOtpEmail()} classes={{disabled: classes.disabledButton}} disabled={emailOtpCount >= 4}>
							Resend OTP
						</Button>
					</div>
					<DialogActions>
						<AuthButton type='submit'>Verify</AuthButton>
					</DialogActions>
				</form>
				{/* <ToastContainer /> */}
			</Dialog>
		</>
	)
}
