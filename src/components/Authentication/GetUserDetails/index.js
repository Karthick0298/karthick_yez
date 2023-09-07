/* eslint-disable max-len */
import Input from 'react-otp-input'
import React, {useState, useEffect} from 'react'
import {makeStyles, IconButton, Typography, Button, TextField} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import Image from 'next/image'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import AuthButton from '../../AuthButton'
import {useForm} from 'react-hook-form'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import secureLocalStorage from 'react-secure-storage'
import userProfileListUpdateApi from '../../../../Service/Setting/ProfileSettings/UserProfileListUpdate'
import {toast} from 'react-toastify'
import {decryption, encryption} from '../../../../lib/Utils/AES'
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
}))
export default function PinLogin({open, handleClose}) {
	const classes = useStyles()
	const [value, setValue] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const {saveActiveDevices, setOtpVerified, setLoggedVia, deviceLogout, custName,setCustName, getCustomerProfilePic} = useAuth()
	const token = secureLocalStorage.getItem('token')
	const saveCustProfile = () => {
		const datas = {
			address1: null,
			address2: null,
			city: null,
			custAlternateContactNo: null,
			custCountryCode: secureLocalStorage.getItem('countryCode'),
			custSecCountryCode: null,
			custBloodGroup: null,
			custDob: null,
			custTimezone: null,
			langPreference: null,
			country: null,
			state: null,
			custEmail: null,
			custGender: null,
			custMobileNo: secureLocalStorage.getItem('mobileNumber'),
			custName: value,
			isAddress: true,
			custIdentityUuid: typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null,
			postalCode: null,
			height: null,
			weight: null,
			genderChanged: false,
			custLogoUuid: null,
		}
		const decryptKey = encryption(datas)
		const onSuccess = res => {
			const successData = decryption(res)
			if (successData?.status === 'success') {
				handleClose()
				saveActiveDevices()
				secureLocalStorage.setItem('loggedVia', 'phone')
				setLoggedVia(secureLocalStorage.getItem('loggedVia'))
				secureLocalStorage.setItem('isOtpVerified', true)
				setOtpVerified(secureLocalStorage.getItem('isOtpVerified'))
				setCustName(value)
				secureLocalStorage.setItem('custName', value)
				// getCustomerProfilePic()
				setErrMsg('')
				setValue('')
				toast.success(<Typography variant='h5'>Profile is Saved Successfully</Typography>)
			} else {
				toast.error(<Typography variant='h5'>Update failed</Typography>)
			}
		}
		const onFailure = err => {
			// const failureData = failureLogin(err)
			toast.error(<Typography variant='h5'>Update failed</Typography>)
			console.log('err', err)
		}
		userProfileListUpdateApi.UserProfileListSave(decryptKey?.plainText, decryptKey?.publicKey, token).then(onSuccess, onFailure)
	}
	const validate = () => {
		if (value.length === 0) {
			setErrMsg('Please enter your name')
		} else if (value.length < 3) {
			setErrMsg('Please enter minimum 3 characters')
		} else {
			saveCustProfile()
		}
	}
	const handleSubmit = e => {
		e.preventDefault()
		validate()
	}
	useEffect(() => {
		if (open) {
			setErrMsg('')
			setValue('')
		}
	}, [open])
	return (
		<>
			<Dialog
				aria-labelledby='simple-dialog-title'
				style={{zIndex: 999}}
				open={open}
				className={classes.root}
				onClose={() => {
					handleClose()
					setErrMsg('')
					setValue('')
				}}>
				<DialogContent>
					<Typography variant='body1'>Please enter your name</Typography>
				</DialogContent>
				<div style={{padding: 10}}>
					<form onSubmit={handleSubmit}>
						<TextField
							id='value'
							inputProps={{
								maxlength: 100,
							}}
							helperText={errMsg}
							error={errMsg}
							fullWidth={true}
							size='medium'
							variant='outlined'
							label='Name *'
							value={value}
							onChange={e => {
								setValue(e.target.value.replace(/[^A-Za-z. ]+/g, ''))
								setErrMsg('')
							}}
						/>

						<DialogActions>
							<AuthButton type='submit'>Save</AuthButton>
						</DialogActions>
					</form>
				</div>
			</Dialog>
		</>
	)
}
