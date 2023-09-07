import React from 'react'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Header from '../../src/components/Header'
import {makeStyles} from '@material-ui/core'
import {Typography, Button, TextField, FormGroup, FormControlLabel, Checkbox, FormControl} from '@mui/material'
import {ThumbUp, ThumbDown} from '@mui/icons-material'
import {ToastContainer, toast} from 'react-toastify'
import AppointmentDetails from '../../Service/MyAccount/AppointmentDetails'
import FeedbackAPI from '../../Service/Feedback/api'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			justifyContent: 'center',
			paddingBlock: 34,
		},
	},
	container: {
		backgroundColor: '#FFFFFF',
		boxShadow: '0px 0px 20px #0000001A',
		maxWidth: 1100,
		width: '100%',

		[theme.breakpoints.up('xs')]: {
			padding: 14,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 18,
			paddingInline: 28,
		},
		[theme.breakpoints.up('lg')]: {
			paddingBlock: 42,
			paddingInline: 96,
			borderRadius: 16,
		},
	},
	heading: {
		'& .MuiTypography-h5': {
			paddingBlock: 6,
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 22,
			},
		},
		'& .MuiTypography-subtitle1': {
			color: '#7D7D7E',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
			},
		},
	},
	questionsContainer: {
		paddingBlockStart: 12,
		'& .MuiTypography-subtitle1': {
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
	questions: {
		paddingBlockStart: 10,
		'& .MuiTypography-subtitle1': {
			'& span': {
				color: '#E22C24',
				fontSize: 20,
				fontWeight: 'bolder',
			},
		},
	},
	submitButton: {
		'& .MuiButton-containedPrimary': {
			background: '#E22C24',
			color: '#FFFFFF',
			paddingInline: 42,
			paddingBlock: 6,
			textTransform: 'inherit',
			fontSize: 16,
			borderRadius: 6,
		},
	},
	likeUnlikeContainer: {
		paddingBlockEnd: 12,
		paddingInline: 6,
		display: 'flex',
		alignItems: 'center',
		gap: 20,
		flexWrap: 'wrap',
	},

	likeBox: {
		paddingInline: 20,
		paddingBlock: 8,
		border: '2px solid #38A4FF',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		cursor: 'pointer',
		'& .MuiSvgIcon-root': {
			color: ' #38A4FF',
		},
		'& .MuiTypography-subtitle1': {
			color: ' #38A4FF',
		},
	},

	likeBoxSelected: {
		paddingInline: 20,
		paddingBlock: 8,
		border: '2px solid #38A4FF',
		background: '#38A4FF',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		cursor: 'pointer',
		'& .MuiSvgIcon-root': {
			color: ' #FFFFFF',
		},
		'& .MuiTypography-subtitle1': {
			color: ' #FFFFFF',
		},
	},

	unlikeBox: {
		paddingInline: 20,
		paddingBlock: 8,
		border: '2px solid #E22C24',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		cursor: 'pointer',

		'& .MuiSvgIcon-root': {
			color: ' #E22C24',
		},
		'& .MuiTypography-subtitle1': {
			color: ' #E22C24',
		},
	},
	unlikeBoxSelected: {
		paddingInline: 20,
		paddingBlock: 8,
		border: '2px solid #E22C24',
		background: '#E22C24',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		cursor: 'pointer',
		'& .MuiSvgIcon-root': {
			color: ' #FFFFFF',
		},
		'& .MuiTypography-subtitle1': {
			color: ' #FFFFFF',
		},
	},

	feildInput: {
		'& .MuiFormControl-fullWidth': {
			marginTop: 8,
		},

		'& .MuiFormHelperText-root': {
			textAlign: 'right',
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	formgroup: {
		'& .MuiFormControlLabel-root': {
			margin: 5,
		},
		'& .MuiCheckbox-colorPrimary': {
			color: '#c4c4c4',
			marginRight: 5,
		},
		'& .Mui-checked': {
			color: '#38A4FF',
		},
	},
	anonymous: {
		'& .MuiFormControlLabel-root': {
			marginInline: 5,
			marginBlockEnd: 10,
		},
		'& .MuiCheckbox-root': {
			color: '#c4c4c4',
			marginRight: 5,
		},
		'& .Mui-checked': {
			color: '#38A4FF',
		},
	},
}))

const Feedback = () => {
	const classes = useStyles()

	const [apptId, setApptId] = useState('')
	const [appointmentData, setAppointmentData] = useState([])

	useEffect(() => {
		const queryString = window.location.search
		let getApptId = new URLSearchParams(queryString).get('appt')
		setApptId(getApptId)
	}, [])

	useEffect(() => {
		if (apptId !== '') {
			AppointmentDetails.AppointmentDetails(apptId)
				.then(response => {
					if ((response.data.status = 'success')) {
						setAppointmentData(response.data.data)
					} else {
						setAppointmentData([])
					}
				})
				.catch(err => {
					console.log(err)
					setAppointmentData([])
				})
		}
	}, [apptId])

	console.log('appointmentData', appointmentData)

	const router = useRouter()

	const [likedOne, setLikedOne] = useState(null)
	const [heathProblemValue, setHeathProblemValue] = useState('')
	const [doctorExperienceValue, setDoctorExperienceValue] = useState('')
	const [anonymous, setAnonymous] = useState(false)
	const [improved, setImproved] = React.useState({
		doctorFriendliness: false,
		explanationOfTheHealthIssue: false,
		treatmentSatisfaction: false,
		valueForMoney: false,
		waitTime: false,
	})

	const handleImprovementChange = event => {
		setImproved({
			...improved,
			[event.target.name]: event.target.checked,
		})
	}

	const {doctorFriendliness, explanationOfTheHealthIssue, treatmentSatisfaction, valueForMoney, waitTime} = improved

	const heathProblemValueChange = event => {
		setHeathProblemValue(event.target.value)
	}

	const doctorExperienceValueChange = event => {
		setDoctorExperienceValue(event.target.value)
	}

	const handleanonymousChange = event => {
		setAnonymous(event.target.checked)
	}

	const handleFormSubmit = () => {
		let selected = [doctorFriendliness, explanationOfTheHealthIssue, treatmentSatisfaction, valueForMoney, waitTime].filter(v => v).length

		if (selected === 0) {
			toast.error(<Typography variant='h5'>Please answer Question 2</Typography>)
		} else if (!likedOne) {
			toast.error(<Typography variant='h5'>Please answer Question 4</Typography>)
		}

		if (likedOne && selected > 0) {
			let body = {
				ansData: {
					fimprovements: [
						...(improved?.doctorFriendliness ? ['Doctor friendliness'] : []),
						...(improved?.explanationOfTheHealthIssue ? ['Explanation of the health issue'] : []),
						...(improved?.treatmentSatisfaction ? ['Treatment satisfaction'] : []),
						...(improved?.valueForMoney ? ['Value for money'] : []),
						...(improved?.waitTime ? ['Wait time'] : []),
					],
					...(heathProblemValue.trim() !== '' && {ftreatment: heathProblemValue.trim()}),
					...(doctorExperienceValue.trim() !== '' && {fexperience: doctorExperienceValue.trim()}),
				},
				type: 'feedback',
				tentUserId: appointmentData[0]?.tentUserUuid,
				...(!anonymous && {custId: appointmentData[0]?.custUuid}),
				// faqId: 'cnq8eh4e',
				appointmentId: appointmentData[0]?.appointmentUuid,
				tentId: appointmentData[0]?.mastTentUuid,
				isRecommend: likedOne === 'yes' ? true : false,
			}

			const onSuccess = res => {
				toast.success(<Typography variant='h5'>Your feedback has been submitted</Typography>)
				router.push('/')
			}
			const onFailure = err => {
				toast.error(<Typography variant='h5'>Your feedback cannot be submitted</Typography>)
			}

			FeedbackAPI.submittingFeedback(body).then(onSuccess, onFailure)
		}
	}

	return (
		<div>
			<Header />
			<div className={classes.root}>
				<div className={classes.container}>
					<div className={classes.heading}>
						<Typography variant='h5'>
							How was your appointment Experience with {appointmentData[0]?.tentUserSalutation || 'Mr'}.{' '}
							{appointmentData[0]?.tentUserFirstName || ' doctor'}
						</Typography>
						<Typography variant='subtitle1'>
							Your experience will help over 1 lac people choose the right {appointmentData[0]?.mastRoleName || ' doctor'}, daily.
						</Typography>
					</div>
					<div className={classes.questionsContainer}>
						<div className={classes.questions}>
							<Typography variant='subtitle1'>Q1. Which health problem/treatment did you visit ?</Typography>
							<div className={classes.feildInput}>
								<TextField
									id='healthProblemFeild'
									inputProps={{
										maxlength: 50,
									}}
									helperText={`${heathProblemValue?.length}/50`}
									fullWidth={true}
									size='medium'
									value={heathProblemValue}
									onChange={heathProblemValueChange}
								/>
							</div>
						</div>

						<div className={classes.questions}>
							<Typography variant='subtitle1'>
								Q2. What made you to recommend ?<span>*</span>
							</Typography>
							<div className={classes.formgroup}>
								<FormControl required component='fieldset' sx={{m: 3}} variant='standard'>
									<FormGroup>
										<FormControlLabel
											control={<Checkbox checked={doctorFriendliness} onChange={handleImprovementChange} name='doctorFriendliness' />}
											label='Doctor friendliness'
										/>
										<FormControlLabel
											control={
												<Checkbox checked={explanationOfTheHealthIssue} onChange={handleImprovementChange} name='explanationOfTheHealthIssue' />
											}
											label='Explanation of the health issue'
										/>
										<FormControlLabel
											control={<Checkbox checked={treatmentSatisfaction} onChange={handleImprovementChange} name='treatmentSatisfaction' />}
											label='Treatment satisfaction'
										/>
										<FormControlLabel
											control={<Checkbox checked={valueForMoney} onChange={handleImprovementChange} name='valueForMoney' />}
											label='value for money'
										/>
										<FormControlLabel
											control={<Checkbox checked={waitTime} onChange={handleImprovementChange} name='waitTime' />}
											label='Wait time'
										/>
									</FormGroup>
								</FormControl>
							</div>
						</div>

						<div className={classes.questions}>
							<Typography variant='subtitle1'>Q3. Tell us about your experience with the doctor ?</Typography>
							<div className={classes.feildInput}>
								<TextField
									id='doctorExperienceFeild'
									multiline
									maxRows={6}
									inputProps={{
										maxlength: 200,
									}}
									helperText={`${doctorExperienceValue?.length}/200`}
									fullWidth={true}
									size='medium'
									value={doctorExperienceValue}
									onChange={doctorExperienceValueChange}
								/>
							</div>
						</div>

						<div className={classes.questions}>
							<Typography variant='subtitle1'>
								Q4. Would you like to recommend the {appointmentData[0]?.mastRoleName || ' doctor'} ?<span>*</span>
							</Typography>
							<div className={classes.likeUnlikeContainer}>
								<div className={likedOne === 'yes' ? classes.likeBoxSelected : classes.likeBox} onClick={() => setLikedOne('yes')}>
									<ThumbUp />
									<Typography variant='subtitle1'> Yes</Typography>
								</div>

								<div className={likedOne === 'no' ? classes.unlikeBoxSelected : classes.unlikeBox} onClick={() => setLikedOne('no')}>
									<ThumbDown />
									<Typography variant='subtitle1'> No</Typography>
								</div>
							</div>
						</div>
					</div>

					<div className={classes.anonymous}>
						<FormControlLabel
							control={<Checkbox checked={anonymous} onChange={handleanonymousChange} name='anonymous' />}
							label='Keep my feedback story anonymous'
						/>
					</div>

					<div className={classes.submitButton}>
						<Button variant='contained' onClick={() => handleFormSubmit()}>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Feedback
