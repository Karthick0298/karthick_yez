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
import pinCodeApi from '../../../../Service/Login/PinCode'
import {encryption, decryption, failureLogin} from '../../../../lib/Utils/AES'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'
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
			maxWidth: '71%',
			minWidth: 300,
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
			paddingBlock: 24,
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

	otpInput: {
		padding: '12px',
		display: 'flex',
		justifyContent: 'center',
	},

	currentTextField: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',

		[theme.breakpoints.down('sm')]: {
			'& .MuiTypography-body1': {
				fontFamily: ['"Poppins"', 'sans-serif'].join(','),
				fontWeight: 500,
				fontSize: 14,
				width: '100%',
				paddingInline: '8rem',
			},
		},
		[theme.breakpoints.up('sm')]: {
			'& .MuiTypography-body1': {
				fontFamily: ['"Poppins"', 'sans-serif'].join(','),
				fontWeight: 500,
				fontSize: 14,
				width: '100%',
				paddingInline: '4rem',
			},
		},
	},
	pinStyle: {
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiTypography-h5': {
			color: '#e22c24',
			fontSize: 12,
		},
	},
}))

export default function ValidatePinLogin({
	open,
	handleClose,
	setPinValidationCode,
	pinValidationCode,
	pinValidationError,
	setPinValidationError,
	setPhoneOtp,
	handleUserDetails,
}) {
	const classes = useStyles()
	const router = useRouter()
	const handleChange = pinValidationCode => setPinValidationCode(pinValidationCode)
	const {saveActiveDevices, setOtpVerified, setLoggedVia, phoneResendOtp, country, custName, getCustomerProfilePic} = useAuth()

	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm()
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
	const mobileNumber = typeof window !== 'undefined' ? secureLocalStorage.getItem('mobileNumber') : null

	const localStore = {
		userId,
		mobileNumber,
	}
	const onSubmit = () => {
		const data = {
			pin: pinValidationCode,
			uuid: localStore?.userId,
		}
		let decryptKey = encryption(data)
		const onSuccess = res => {
			// setLoading(false)
			const successData = decryption(res)
			if (successData?.status === 'success') {
				reset()
				setPinValidationCode('')
				if (custName === null) {
					handleClose()
					handleUserDetails()
				} else {
					handleClose()
					saveActiveDevices()
					secureLocalStorage.setItem('loggedVia', 'phone')
					setLoggedVia(secureLocalStorage.getItem('loggedVia'))
					secureLocalStorage.setItem('isOtpVerified', true)
					setOtpVerified(secureLocalStorage.getItem('isOtpVerified'))
				}
			} else {
				console.log('phoneOtp ERROR: ', err)
				secureLocalStorage.setItem('isPhoneUser', '')
				secureLocalStorage.setItem('isOtpVerified', false)
				secureLocalStorage.removeItem('userId')
			}
		}
		const onFailure = err => {
			const failureData = failureLogin(err)
			setPinValidationCode('')
			toast.error(
				<Typography variant='h5' style={{zIndex: 9999}}>
					{'Incorrect PIN'}
				</Typography>
			)
		}
		if (pinValidationCode === '') {
			setPinValidationError('Please enter the PIN')
		} else if (pinValidationCode.length !== 4) {
			setPinValidationError('Please enter the PIN')
		} else {
			pinCodeApi.setValidatePin(decryptKey?.plainText, decryptKey?.publicKey, token).then(onSuccess, onFailure)
		}
	}
	const resendOtpMobile = () => {
		const resendData = {
			countryCode: country?.mastLookupKey,
			mobileNo: localStore.mobileNumber,
			signup: true,
			userType: 'CUS',
			uuid: secureLocalStorage.getItem('userId'),
		}
		phoneResendOtp(resendData)
	}
	useEffect(() => {
		if (open) {
			getCustomerProfilePic()
		}
   // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open])

	return (
		<>
			<Dialog aria-labelledby='simple-dialog-title' style={{zIndex: 999}} open={open} className={classes.root} onClose={handleClose}>
				<DialogTitle id='simple-dialog-title'>
					<IconButton disabled>
						<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/LYFnGOLogoB2b.png' width={64} height={62} />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Typography variant='body1'>Enter PIN</Typography>
				</DialogContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.otpInput}>
						<Input
							value={pinValidationCode}
							onChange={handleChange}
							numInputs={4}
							separator={<span style={{width: '28px'}}></span>}
							isInputNum={true}
							isInputSecure={true}
							shouldAutoFocus={true}
							inputStyle={{
								border: '1px solid #0062DD',
								borderRadius: '4px',
								width: '36px',
								height: '40px',
								fontSize: '18px',
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

					{pinValidationError ? (
						<Typography align='center' color='error' style={{fontSize: '16px'}}>
							{pinValidationError}
						</Typography>
					) : null}
					<div
						className={classes.pinStyle}
						onClick={() => {
							setPhoneOtp(true)
							handleClose()
							resendOtpMobile()
						}}>
						<Typography variant='h5'>Forgot your PIN</Typography>
					</div>
					<DialogActions>
						<AuthButton type='submit'>Verify</AuthButton>
					</DialogActions>
				</form>
			</Dialog>
		</>
	)
}
