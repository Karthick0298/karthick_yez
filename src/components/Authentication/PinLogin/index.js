/* eslint-disable max-len */
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
import pinCodeApi from '../../../../Service/Login/PinCode'
import {encryption, decryption, failureLogin} from '../../../../lib/Utils/AES'
import {toast} from 'react-toastify'
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
		'& .MuiTypography-body1': {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontWeight: 500,
			fontSize: 14,
			width: '100%',
			paddingInline: '8rem',
		},
		[theme.breakpoints.down('xs')]: {
			'& .MuiTypography-body1': {
				paddingInline: '2rem',
			},
		},
		[theme.breakpoints.down('sm')]: {
			'& .MuiTypography-body1': {
				paddingInline: '2rem',
			},
		},
		[theme.breakpoints.up('md')]: {
			'& .MuiTypography-body1': {
				paddingInline: '4rem',
			},
		},
		[theme.breakpoints.up('lg')]: {
			'& .MuiTypography-body1': {
				paddingInline: '8rem',
			},
		},
		[theme.breakpoints.up('xl')]: {
			'& .MuiTypography-body1': {
				paddingInline: '18rem',
			},
		},
	},
	confirmTextField: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		'& .MuiTypography-body1': {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontWeight: 500,
			fontSize: 14,
			width: '100%',
			paddingInline: '8rem',
		},
		[theme.breakpoints.down('xs')]: {
			'& .MuiTypography-body1': {
				paddingInline: '2rem',
			},
		},
		[theme.breakpoints.down('sm')]: {
			'& .MuiTypography-body1': {
				paddingInline: '2rem',
			},
		},
		[theme.breakpoints.up('md')]: {
			'& .MuiTypography-body1': {
				paddingInline: '4rem',
			},
		},
		[theme.breakpoints.up('lg')]: {
			'& .MuiTypography-body1': {
				paddingInline: '8rem',
			},
		},
		[theme.breakpoints.up('xl')]: {
			'& .MuiTypography-body1': {
				paddingInline: '18rem',
			},
		},
	},
}))

export default function PinLogin({
	open,
	handleClose,
	setPinCode,
	pinCode,
	confirmPinCode,
	setConfirmPinCode,
	setPinValidation,
	pinValidation,
	// setOpenGetUserDetails,
	handleUserDetails,
}) {
	const {saveActiveDevices, setOtpVerified, setLoggedVia, deviceLogout, custName, getCustomerProfilePic} = useAuth()
	let location = window.location.pathname
	const classes = useStyles()
	const handleChange = pinCode => setPinCode(pinCode)
	const confirmPinCodeChange = confirmPinCode => setConfirmPinCode(confirmPinCode)
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm()
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
	const localStore = {
		userId,
	}
	const onSubmit = () => {
		const data = {
			pin: pinCode,
			confirmPin: confirmPinCode,
			uuid: localStore?.userId,
		}
		let decryptKey = encryption(data)
		const onSuccess = res => {
			// setLoading(false)
			const successData = decryption(res)
			if (successData?.status === 'success') {
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
					setPinCode('')
					setConfirmPinCode('')
				}
				if (location === '/settingmenu/changepin') {
					deviceLogout()
				}
			}
		}
		const onFailure = err => {
			const failureData = failureLogin(err)
			toast.error(
				<Typography variant='h5' style={{zIndex: 9999}}>
					{'Incorrect PIN'}
				</Typography>
			)
		}
		if (pinCode === '' && confirmPinCode === '') {
			setPinValidation('Please enter the PIN')
		} else if (pinCode.length !== 4 || confirmPinCode.length !== 4) {
			setPinValidation('Please enter the PIN')
		} else if (pinCode !== confirmPinCode) {
			setPinValidation('Please enter the valid PIN')
		} else {
			pinCodeApi.setPinCode(decryptKey?.plainText, decryptKey?.publicKey, token).then(onSuccess, onFailure)
		}
	}
	useEffect(() => {
		if (open) {
			getCustomerProfilePic()
		}
	}, [open])
	return (
		<>
			<Dialog aria-labelledby='simple-dialog-title' style={{zIndex: 999}} open={open} className={classes.root} onClose={handleClose}>
				<DialogTitle id='simple-dialog-title'>
					<IconButton disabled>
						<Image alt='lyfngo logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/LYFnGOLogoB2b.png' width={64} height={62} />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Typography variant='body1'>Set New PIN</Typography>
				</DialogContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.currentTextField}>
						<Typography variant='body1'>Enter PIN</Typography>
						<div className={classes.otpInput}>
							<Input
								value={pinCode}
								onChange={handleChange}
								numInputs={4}
								separator={<span style={{width: '28px'}}></span>}
								isInputNum={true}
								// shouldAutoFocus={true}
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
					</div>
					<div className={classes.confirmTextField}>
						<Typography variant='body1'>Confirm PIN</Typography>
						<div className={classes.otpInput}>
							<Input
								value={confirmPinCode}
								onChange={confirmPinCodeChange}
								numInputs={4}
								separator={<span style={{width: '28px'}}></span>}
								isInputNum={true}
								// shouldAutoFocus={true}
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
					</div>
					{pinValidation ? (
						<Typography align='center' color='error' style={{fontSize: '16px', fontFamily: ['"Poppins"', 'sans-serif'].join(',')}}>
							{pinValidation}
						</Typography>
					) : null}
					<DialogActions>
						<AuthButton type='submit'>Verify</AuthButton>
					</DialogActions>
				</form>
			</Dialog>
		</>
	)
}
