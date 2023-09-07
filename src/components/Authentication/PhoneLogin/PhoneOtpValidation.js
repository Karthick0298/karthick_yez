import Input from 'react-otp-input'
import React, {useEffect, useState} from 'react'
import {makeStyles, IconButton, Typography, Button} from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Image from 'next/image'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import AuthButton from '../../AuthButton'
import {useForm} from 'react-hook-form'
import _ from 'lodash'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {EffectCoverflow} from 'swiper'
import {encryption, decryption, failureLogin} from '../../../../lib/Utils/AES'
import signupApi from '../../../../Service/Login/loginAes/index'
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
			// maxWidth: '54%',
			// minWidth: '32%',
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
			paddingTop: 42,
			overflowY: 'hidden',
			'& .MuiTypography-body1': {
				fontFamily: theme.typography.h6.fontFamily,
				fontWeight: 500,
			},
		},
		'& .MuiDialogActions-root': {
			justifyContent: 'center',
			paddingBlockEnd: 60,
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
		padding: '45px 45px 18px 60px',
		display: 'flex',
		justifyContent: 'center',
	},
	otpDetails: {
		'& .MuiTypography-h5': {
			padding: '0px 58px 10px',
			fontWeight: 500,
			color: '#00000085',
		},
		'& .MuiTypography-h6': {
			padding: 8,
			display: 'block',
			color: theme.palette.paragraph.main,
			textAlign: 'center',
		},
	},
	errorThrow: {
		'& .MuiTypography-h5': {
			color: theme.palette.lyfngo.main,
			fontWeight: 500,
		},
	},
	otp: {
		// opacity: 0,
		display: 'none',
	},
}))

export default function otpValidation({handlePhoneEntry, open, setOpen, handleClose, code, setCode, otpError, setOtpError, setOpenPinLogin}) {
	const {phoneUser, phoneResendOtp, phoneResend, saveActiveDevices, phoneOtpCount, country, setOtpVerified, getCustomerProfilePic} = useAuth()
	const classes = useStyles()
	const [otp, setOtp] = useState(false)

	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm()

	const handleChange = code => {
		setCode(code)
	}

	const userType = typeof window !== 'undefined' ? secureLocalStorage.getItem('userType') : null
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const mobileNumber = typeof window !== 'undefined' ? secureLocalStorage.getItem('mobileNumber') : null
	const localStore = {
		userType,
		userId,
		mobileNumber,
	}
	const onSubmit = () => {
		const formData = {
			otpNumber: code,
			sentEmail: 'false',
			userType: 'CUS',
			uuid: localStore.userId,
		}
		// setLoading(true)
		let decryptKey = encryption(formData)
		// setLoading(true)
		const onSuccess = res => {
			// setLoading(false)
			const successData = decryption(res)
			if (successData?.status === 'success') {
				// setLoading(false)
				// saveActiveDevices()
				// secureLocalStorage.setItem('loggedVia', 'phone')
				// setLoggedVia(secureLocalStorage.getItem('loggedVia'))
				// secureLocalStorage.setItem('isOtpVerified', true)
				setOtpVerified(secureLocalStorage.getItem('isOtpVerified'))
				setOpen(false)
				reset()
				setCode('')
				setOpenPinLogin(true)
				getCustomerProfilePic()
				toast.success(
					<Typography variant='h5' style={{zIndex: 9999}}>
						OTP verified successfully
					</Typography>
				)
			}
		}
		const onFailure = err => {
			const failureData = failureLogin(err)
			toast.error(
				<Typography variant='h5' style={{zIndex: 9999}}>
					{failureData?.message ? 'Please enter valid otp' : 'Please try after some time'}
				</Typography>
			)
			// setLoading(false)
			// console.log('phoneOtp ERROR: ', err)
			// secureLocalStorage.setItem('isPhoneUser', '')
			secureLocalStorage.setItem('isOtpVerified', false)
			// secureLocalStorage.removeItem('userId')
			setOpen(true)
			setOpenPinLogin(false)
			setCode('')
		}
		if (code === '') {
			setOtpError('Please enter the OTP')
		} else if (code.length !== 4) {
			setOtpError('Please enter the OTP')
		} else {
			signupApi.validateOtp(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
		}
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const helo1 = () => {
		if (phoneUser !== code) {
			return (
				<div>
					{code === '' ? null : (
						<Typography variant='h5' style={{color: '#e22c24', textAlign: 'center', paddingBottom: 18}}>
							Please enter the valid OTP
						</Typography>
					)}
				</div>
			)
		} else if (phoneUser === code) {
			return <div style={{opacity: 0}}>{code === '' ? null : <Typography variant='h5'>Please enter the valid OTP</Typography>}</div>
		}
	}
	const helo2 = () => {
		if (phoneResend !== code) {
			return (
				<div>
					{code === '' ? null : (
						<Typography variant='h5' style={{color: '#e22c24', textAlign: 'center', paddingBottom: 18}}>
							Please enter the valid OTP
						</Typography>
					)}
				</div>
			)
		} else if (phoneResend === code) {
			return <div style={{opacity: 0}}>{code === '' ? null : <Typography variant='h5'>Please enter the valid OTP</Typography>}</div>
		}
	}
	const resendOtpMobile = () => {
		setCode('')
		setOtp(true)
		const resendData = {
			countryCode: country?.mastLookupKey,
			mobileNo: localStore.mobileNumber,
			signup: true,
			userType: 'CUS',
			uuid: secureLocalStorage.getItem('userId'),
		}
		phoneResendOtp(resendData)
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
	// useEffect(() => {
	// 	if (phoneResend) {
	// 		toast.success(<Typography variant='h5'>OTP has been sent successfully </Typography>)
	// 	}
	// }, [phoneResend])

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
							isInputSecure={true}
							inputStyle={{
								border: '1px solid #0062DD',
								borderRadius: '4px',
								width: '36px',
								height: '40px',
								fontSize: '28px',
								color: '#0062DD',
								fontWeight: '400',
								caretColor: 'black',
								backgroundColor: '#ffffff00',
							}}
							focusStyle={{
								border: '1px solid #0062DD',
								outline: 'none',
							}}
						/>
					</div>
					{otpError ? (
						<Typography align='center' color='error' style={{fontSize: '16px'}}>
							{otpError}
						</Typography>
					) : null}

					{/* <span className={otp ? classes.otp : null}>{phoneUser ? helo1() : null}</span> */}
					{/* <span>{otp ? helo2() : null}</span> */}
					<div className={classes.otpDetails}>
						<Typography variant='h6'>
							Verification code send to mobile number:{' '}
							<span style={{color: '#0062DD', fontWeight: 500}}>
								{!_.isEmpty(country?.mastLookupKey) ? '+' + country?.mastLookupKey : ''} {localStore.mobileNumber}
							</span>
						</Typography>
						{/* <Typography variant='h6'>
							Your OTP : <span style={{color: '#e22c24'}}>{phoneResend ? phoneResend : phoneUser}</span>
						</Typography> */}
					</div>
					<div className={classes.resend}>
						<Button onClick={() => resendOtpMobile()} name='resendOtpBtn' classes={{disabled: classes.disabledButton}} disabled={phoneOtpCount >= 3}>
							Resend OTP
						</Button>
					</div>
					<DialogActions>
						<AuthButton onClose={handleClose} type='submit'>
							Verify
						</AuthButton>
					</DialogActions>
					{/* <ToastContainer /> */}
				</form>
			</Dialog>
		</>
	)
}
