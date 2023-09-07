import React, {useEffect, useCallback, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import {IconButton, TextField, Typography} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3'
import * as yup from 'yup'
import _ from 'lodash'
import Image from 'next/image'
import CloseIcon from '@material-ui/icons/Close'
import RequestDemoApi from '../../../Service/RequestDemo'
import {decryption, encryption, failureLogin} from '../../../lib/Utils/AES'
import Snackbar from '@material-ui/core/Snackbar'
import ErrorIcon from '@material-ui/icons/Error'

const useStyles = makeStyles(theme => ({
	wrapper: {
		'& .MuiSnackbarContent-root': {
			backgroundColor: '#fff',
			color: '#000',
		},
		'& .MuiSnackbar-anchorOriginTopRight': {
			top: 94,
		},
	},
	root: {
		'& .MuiDialog-paperWidthSm': {
			borderRadius: 15,
		},
		'& .MuiDialogTitle-root': {
			position: 'absolute',
			right: 40,
			zIndex: 999999,
			'& .MuiTypography-h6': {
				position: 'fixed',
			},
		},
		'& .MuiDialogContent-root': {
			display: 'flex',
			flexDirection: 'column',
			gap: 24,
		},
		'& .MuiDialogActions-root': {
			padding: '8px 24px',
			'& .MuiButton-contained': {
				background: theme.palette.lyfngo.backgroundImage,
				color: '#FFFFFF',
				letterSpacing: 0.75,
				fontFamily: 'Poppins',
				fontSize: 16,
				textTransform: 'none',
				paddingInline: 46,
			},
		},
	},
	title: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		padding: '20px 24px 8px',
	},
	autocomplteCountryCode: {
		width: 78,
		'& .MuiFormHelperText-root.Mui-error': {
			visibility: 'hidden',
		},
	},
	mobField: {
		display: 'flex',
		alignItems: 'center',
		gap: 4,
		[theme.breakpoints.up('sm')]: {
			maxWidth: 573,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 573,
		},
	},
	emailField: {
		'& .MuiFormLabel-root': {
			fontSize: 14,
			fontFamily: 'poppins',
			top: '-5px',
			position: 'absolute',
		},
		'& .MuiInputBase-input': {
			height: '0.1876em',
		},
		'& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
			position: 'absolute !important',
			top: '0px !important',
		},
	},
}))

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

export default function DemoModal({open, handleClose, country, setCountry, countryCode, moblen, setMoblen, setOpen}) {
	const classes = useStyles()
	const {executeRecaptcha} = useGoogleReCaptcha()
	const [message, setMessage] = useState('')

	const action =
		message === 'Demo request sent succesfully' ? (
			<>
				<CheckCircleIcon style={{color: 'green'}} />
			</>
		) : (
			<>
				<ErrorIcon style={{color: 'red'}} />
			</>
		)

	const schema = yup.object().shape({
		email: yup
			.string()
			.required('Please enter the email address')
			.email('Please enter the valid email address')
			.nullable(),
		mobile: yup
			.string()
			.required('Please enter the mobile number')
			.nullable()
			.matches(/^[0-9\s]+$/, 'Only numbers are allowed')
			.min(moblen, `Minimum ${moblen} digits required`)
			.max(moblen, `Maximum ${moblen} digits only allowed`),
	})
	const {
		handleSubmit,
		reset,
		resetField,
		formState: {errors},
		control,
	} = useForm({
		resolver: yupResolver(schema),
	})

	const [state, setState] = React.useState({
		openSnack: false,
		vertical: 'top',
		horizontal: 'center',
	})

	const {vertical, horizontal, openSnack} = state

	const handleCloseSnack = () => {
		setState({...state, openSnack: false})
		setMessage('')
	}

	const onSubmit = useCallback(
		data => {
			if (!executeRecaptcha) {
				setState({openSnack: true, vertical: 'top', horizontal: 'right'})
				setMessage('Execute recaptcha not yet available')
				return
			}
			executeRecaptcha('enquiryFormSubmit').then(gReCaptchaToken => {
				let body = {
					email: data?.email,
					custMobileNumber: Number(country?.mastLookupKey + data?.mobile),
					responceToken: gReCaptchaToken,
				}
				let decryptKey = encryption(body)
				const onSuccess = res => {
					const successData = decryption(res)
					if (successData?.status === true) {
						handleClose()
						setState({openSnack: true, vertical: 'top', horizontal: 'right'})
						reset({
							email: '',
							mobile: '',
						})
						setMessage('Demo request sent succesfully')
					}
				}
				const onFailure = err => {
					setOpen(true)
					const failureData = failureLogin(err)
					console.log(failureData)
					setMessage('Request Failed! Please try after sometime.')
				}
				RequestDemoApi.requestDemo(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
			})
		},
		[country?.mastLookupKey, executeRecaptcha, handleClose, reset, setOpen]
	)

	useEffect(() => {
		handleClose &&
			reset({
				email: '',
				mobile: '',
			})
	}, [handleClose, reset])

	let str = '+'
	// End: Get IP for Current location //
	return (
		<div className={classes.wrapper}>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				className={classes.root}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'>
				<DialogTitle>
					<IconButton aria-label='close' onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<div className={classes.title}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/requestDemo.svg'
						alt='request demo'
						quality={true}
						priority
						width={210}
						height={280}
						// layout='responsive'
						// objectFit='contain'
					/>
					<Typography variant='h5'>
						Experience a live customized demo, get answers to your specific questions, and find out why <span color='red'>LYFnGO</span> is the right
						choice for your buisness.
					</Typography>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogContent>
						<Controller
							render={({field}) => {
								return (
									<TextField
										{...field}
										fullWidth={true}
										className={classes.emailField}
										id='outlined-basic'
										label='Email*'
										variant='outlined'
										error={!!errors?.email}
										helperText={errors['email']?.message}
									/>
								)
							}}
							name='email'
							control={control}
						/>
						<div className={classes.mobField}>
							<Controller
								render={({field}) => (
									<>
										<Autocomplete
											size='small'
											ListboxProps={{
												style: {
													maxHeight: '9rem',
													fontSize: 14,
													background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
													fontFamily: ['"Poppins"', 'sans-serif'].join(','),
												},
											}}
											value={country}
											sx={{width: 20}}
											disableClearable
											className={classes.autocomplteCountryCode}
											options={_.orderBy(countryCode, 'mastLookupKey')}
											getOptionLabel={option => str.concat(option?.mastLookupKey || '')}
											onChange={(e, value) => {
												setCountry(value)
												setMoblen(value?.mastLookupValue)
												resetField('mobile')
											}}
											renderInput={params => (
												<TextField
													size='small'
													className={classes.TextField}
													color='secondary'
													variant='outlined'
													{...params}
													error={!!errors?.mobile}
													helperText={errors['mobile']?.message ? 'a' : null}
												/>
											)}
										/>
										<TextField
											{...field}
											fullWidth
											style={{marginTop: 3.5}}
											id='outlined-required'
											variant='outlined'
											inputProps={{maxLength: moblen}}
											margin='dense'
											error={!!errors?.mobile}
											helperText={errors['mobile']?.message}
											placeholder={'Mobile number*'}
										/>
									</>
								)}
								name='mobile'
								control={control}
							/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button type='submit' variant='contained'>
							Submit
						</Button>
					</DialogActions>
				</form>
			</Dialog>
			<Snackbar
				anchorOrigin={{vertical, horizontal}}
				autoHideDuration={3000}
				open={openSnack}
				message={message}
				onClose={handleCloseSnack}
				key={vertical + horizontal}
				action={action}
			/>
		</div>
	)
}
