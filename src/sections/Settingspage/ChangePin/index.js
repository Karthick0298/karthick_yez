import React, {useState} from 'react'
import {makeStyles, Typography, Button, TextField, InputAdornment, Icon} from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useRouter} from 'next/router'
import ChangePinApi from '../../../../Service/Setting/ChangePin'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {encryption, decryption, failureLogin} from '../../../../lib/Utils/AES'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {ToastContainer, toast} from 'react-toastify'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import Link from 'next/link'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	container: {
		padding: 36,
		'& .MuiTypography-h5': {
			fontSize: 14,
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			padding: 8,
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: 42,
			margin: 0,
		},
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		'& .MuiInputBase-root': {
			maxWidth: 298,
		},
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
		},
		'& .MuiTypography-h6': {
			color: theme.palette.error.main,
		},
	},
	submitButton: {
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiButton-contained': {
			backgroundColor: '#1473e6',
			boxShadow: 'inset 0px 3px 6px #00000029, 0px 8px 13px #00000029',
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			color: '#fff',
			fontFamily: theme.typography.h5.fontFamily,
		},
		'& .MuiButton-root': {
			padding: '5px 28px',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
		},
	},
	fieldsAlign: {
		display: 'flex',
		flexDirection: 'column',
		gap: 18,
		paddingBottom: 24,
	},
}))
const schema = yup.object().shape({
	oldPin: yup
		.string()
		.required('Old PIN is required')
		.min(4, 'Old PIN must be at least 4 characters')
		.matches(/^[0-9]*$/, 'Only allow number'),
	newPin: yup
		.string()
		.required('New PIN is required')
		.min(4, 'New PIN must be at least 4 characters')
		.matches(/^[0-9]*$/, 'Only allow number'),

	confirmPin: yup
		.string()
		.oneOf([yup.ref('newPin'), null], 'PIN must match')
		.matches(/^[0-9]*$/, 'Only allow number')
		.required('Confirm PIN is required'),
})
export default function PasswordChange() {
	const router = useRouter()
	const [showNewPassword, setShowNewPassword] = useState(false)
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schema),
	})
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
	const mobileNumber = typeof window !== 'undefined' ? secureLocalStorage.getItem('mobileNumber') : null

	const localStore = {
		userId,
		mobileNumber,
	}
	const {
		setUser,
		setToken,
		setUserId,
		setLoggedVia,
		setOtpVerified,
		setOpenLocation,
		deviceLogout,
		setOpenValidatePinLogin,
		openValidatePinLogin,
		setPhoneOtpPopup,
		phoneResendOtp,
		country,
	} = useAuth()

	const onSubmit = data => {
		console.log('data', data)
		const body = {
			oldPin: data?.oldPin,
			newPin: data?.newPin,
			confirmPin: data?.confirmPin,
			uuid: userId,
		}
		let decryptKey = encryption(body)
		const onSuccess = res => {
			// setLoading(false)
			const successData = decryption(res)
			if (successData?.status === 'success') {
				deviceLogout()
				secureLocalStorage.clear()
				router.push('/marketplace')
				setUser(null)
				setToken(null)
				setUserId(null)
				setLoggedVia(null)
				setOtpVerified(null)
				setOpenLocation(null)
				toast.success(
					<Typography variant='h5' style={{zIndex: 9999}}>
						PIN changed successfully
					</Typography>
				)
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
		ChangePinApi.ChangePin(decryptKey?.plainText, decryptKey?.publicKey, token).then(onSuccess, onFailure)
	}
	const classes = useStyles()
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
	return (
		<div className={classes.container}>
			<Typography variant='h5'>
				Forgot your PIN? {/* <Link href='/forgotpassword' > */}
				<span
					style={{color: '#0064FF', cursor: 'pointer'}}
					onClick={() => {
						setPhoneOtpPopup(true)
						setOpenValidatePinLogin(false)
						resendOtpMobile()
					}}>
					Reset your PIN
				</span>
				{/* </Link> */}
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={classes.fieldsAlign}>
					<div className={classes.wrapper}>
						<Typography variant='h5'>Enter PIN*</Typography>
						<TextField id='outlined-required' variant='outlined' margin='dense' type='password' {...register('oldPin')} inputProps={{maxLength: 4}} />
						{errors['oldPin'] && <Typography variant='h6'>{errors['oldPin']?.message}</Typography>}
					</div>
					<div className={classes.wrapper}>
						<Typography variant='h5'>Set PIN*</Typography>
						<TextField
							id='outlined-required'
							variant='outlined'
							margin='dense'
							type='password'
							{...register('newPin')}
							InputProps={{
								className: 'pr-12',
								type: showNewPassword ? 'text' : 'password',
								endAdornment: (
									<InputAdornment position='end' className={classes.visibility} style={{cursor: 'pointer'}}>
										{showNewPassword ? (
											<Icon className='visibility text-20' color='action' onClick={() => setShowNewPassword(!showNewPassword)}>
												<VisibilityIcon />
											</Icon>
										) : (
											<Icon className='visibility text-20' color='action' onClick={() => setShowNewPassword(!showNewPassword)}>
												<VisibilityOffIcon />
											</Icon>
										)}
									</InputAdornment>
								),
							}}
							inputProps={{maxLength: 4}}
						/>
						{errors['newPin'] && <Typography variant='h6'>{errors['newPin']?.message}</Typography>}
					</div>
					<div className={classes.wrapper}>
						<Typography variant='h5'>Confirm PIN*</Typography>
						<TextField
							id='outlined-required'
							variant='outlined'
							margin='dense'
							type='password'
							{...register('confirmPin')}
							inputProps={{maxLength: 4}}
						/>
						{errors['confirmPin'] && <Typography variant='h6'>{errors['confirmPin']?.message}</Typography>}
					</div>
					{/* {data.inputs
						.filter(name => name.id >= 1)
						.map((input, id) => {
							return (
								<>
									<div key={id} className={classes.wrapper}>
										<Typography variant='h5'>{input.label}</Typography>
										<TextField
											id='outlined-required'
											variant='outlined'
											margin='dense'
											type={input.type}
											{...register(input.name)}
											inputProps={{maxLength: 4}}
										/>
										{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
									</div>
								</>
							)
						})} */}
				</div>
				<div className={classes.submitButton}>
					<Button type='submit' variant='contained'>
						Confirm
					</Button>
				</div>
			</form>
		</div>
	)
}
