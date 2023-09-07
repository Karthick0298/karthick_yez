import {Typography, FormControlLabel, FormHelperText, Breadcrumbs, useTheme, useMediaQuery, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import React, {useEffect, useState} from 'react'
import Notificationdata from '../../../model/NotificationText/data'
import Button from '@material-ui/core/Button'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import notificationGetApi from '../../../../Service/Setting/Notification/get'
import notificationPostApi from '../../../../Service/Setting/Notification/post'
// import notificationPatchApi from '../../../../Service/Setting/Notification/patch'
import FormGroup from '@material-ui/core/FormGroup'
import {useRouter} from 'next/router'
import {IconButton} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import {ToastContainer, toast} from 'react-toastify'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles(theme => ({
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		position: 'absolute',
		zIndex: '99',
		padding: 8,
		transform: 'translate(-17px,20px)',
		// '&:hover': {
		// 	backgroundColor: theme.palette.care.dark,
		// 	'& .MuiSvgIcon-root': {
		// 		fill: '#FFFFFF80',
		// 	},
		// },
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	notificationmain: {
		'& .MuiButton-containedPrimary': {
			color: '#ffffff',
			backgroundColor: '#1371E3',
			borderRadius: 4,
			marginInline: 53,
			marginBlock: 18,
			textTransform: 'none',
			paddingInline: 74,
			[theme.breakpoints.down('xs')]: {
				paddingInline: 61,
			},
		},
		'& .MuiButton-label': {
			fontFamily: 'Poppins',
		},
	},
	contacttext: {
		display: 'flex',
		background: '#f4f4f7',
		justifyContent: 'flex-end',
		color: '#475677',
		top: 0,
		position: 'sticky',
		zIndex: 9,
		'& .MuiTypography-body1': {
			fontSize: theme.typography.h5.fontSize,
			fontFamily: theme.typography.h5.fontFamily,
			color: '#475677',
			fontWeight: 500,
			[theme.breakpoints.down('xs')]: {
				fontSize: theme.typography.h5.fontSize,
				fontFamily: theme.typography.h5.fontFamily,
				color: '#475677',
			},
		},
		[theme.breakpoints.down('xs')]: {
			paddingInline: 11,
			gap: 23,
			paddingBlock: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 17,
			gap: 23,
		},
		[theme.breakpoints.up('md')]: {
			gap: 93,
			alignItems: 'center',
			paddingInline: 71,
			paddingBlock: 21,
		},
	},
	receiveall: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
			paddingInlineStart: 12,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 14,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 51,
			paddingBlock: 12,
		},
	},
	announcements: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
			paddingInlineStart: 12,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 14,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 51,
			paddingBlock: 12,
		},
	},
	healthtips: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
			paddingInlineStart: 12,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 14,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 51,
			paddingBlock: 12,
		},
	},
	savings: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
			paddingInlineStart: 12,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 14,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 51,
			paddingBlock: 12,
		},
	},
	informational: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
			paddingInlineStart: 12,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 14,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 51,
			paddingBlock: 12,
		},
	},
	feedback: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
			paddingInlineStart: 12,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 14,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 51,
			paddingBlock: 12,
		},
	},
	receiveallcheckbox: {
		display: 'flex',
		'& .MuiFormGroup-root': {
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
			},
			[theme.breakpoints.up('sm')]: {
				paddingInline: 0,
				gap: 18,
				flexDirection: 'row',
			},
			[theme.breakpoints.up('md')]: {
				gap: 73,
				flexDirection: 'row',
			},
		},
	},
	announcementscheckbox: {
		display: 'flex',
		'& .MuiFormGroup-root': {
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('sm')]: {
				paddingInline: 0,
				gap: 18,
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('md')]: {
				gap: 73,
				flexDirection: 'row',
			},
		},
	},
	healthtipscheckbox: {
		display: 'flex',
		'& .MuiFormGroup-root': {
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('sm')]: {
				paddingInline: 0,
				gap: 18,
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('md')]: {
				gap: 73,
				flexDirection: 'row',
			},
		},
	},
	savingscheckbox: {
		display: 'flex',
		'& .MuiFormGroup-root': {
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('sm')]: {
				paddingInline: 0,
				gap: 18,
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('md')]: {
				gap: 73,
				flexDirection: 'row',
			},
		},
	},
	informationlcheckbox: {
		display: 'flex',
		'& .MuiFormGroup-root': {
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('sm')]: {
				paddingInline: 0,
				gap: 18,
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('md')]: {
				gap: 73,
				flexDirection: 'row',
			},
		},
	},
	feedbackcheckbox: {
		display: 'flex',
		'& .MuiFormGroup-root': {
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('sm')]: {
				paddingInline: 0,
				gap: 18,
				flexDirection: 'row',
				flexWrap: 'unset',
			},
			[theme.breakpoints.up('md')]: {
				gap: 73,
				flexDirection: 'row',
			},
		},
	},
	notificationheading: {
		color: '#475677',
		fontWeight: 500,
		fontFamily: theme.typography.h5.fontFamily,
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.h5.fontSize,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.typography.h5.fontSize,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 16,
		},
	},
	notificationdesc: {
		color: '#475677',
		font: 'normal normal normal Poppins',
		fontSize: 14,
		[theme.breakpoints.down('xs')]: {
			fontSize: 12,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 12,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 14,
		},
	},
	belowcontent: {
		display: 'flex',
		justifyContent: 'flex-start',
		paddingInline: 54,
		gap: 16,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 13,
			paddingBlock: 12,
		},
	},
	breadcrumbContainer: {
		paddingBlock: 14,
		paddingInlineStart: 12,
	},
	breadcrumbone: {
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
		color: '#707070',
		letterSpacing: 0.5,
		cursor: 'pointer',
	},
	breadcrumbtwo: {
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
		color: '#707070',
		letterSpacing: 0.5,
	},
}))
export default function PasswordChange(props) {
	const {toggleState, setToggleState} = props
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
	const router = useRouter()
	const schema = yup.object().shape({
		appMail: yup.boolean(),
		appSms: yup.boolean(),
		emailAnnouncement: yup.boolean(),
		smsAnnouncement: yup.boolean(),
		emailFeedback: yup.boolean(),
		smsFeedback: yup.boolean(),
		emailHealthtips: yup.boolean(),
		smsHealthtips: yup.boolean(),
		emailSavings: yup.boolean(),
		smsSavings: yup.boolean(),
		emailInfo: yup.boolean(),
		smsInfo: yup.boolean(),
		whatsappAllinfo: yup.boolean(),
	})
	const classes = useStyles()
	const [checked, setChecked] = React.useState(true)
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schema),
	})
	// Handling Toggling btn Menu listYear and Menu listYear Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	const [state, setState] = React.useState({
		allUserDailyEmail: false,
		allUserDailySms: false,
		appMail: false,
		appSms: false,
		dailyMail: false,
		dailySms: false,
		dailyWhatsapp: false,
		emailAnnouncement: false,
		emailFeedback: false,
		emailHealthtips: false,
		emailInfo: false,
		emailSavings: false,
		promotions: false,
		smsAnnouncement: false,
		smsFeedback: false,
		smsHealthtips: false,
		smsInfo: false,
		smsSavings: false,
		unsubsCode: '',
		unsubsNotes: '',
		unsubscribe: false,
		whatsappAllinfo: false,
	})

	const {
		allUserDailyEmail,
		allUserDailySms,
		appMail,
		appSms,
		dailyMail,
		dailySms,
		dailyWhatsapp,
		emailAnnouncement,
		emailFeedback,
		emailHealthtips,
		emailInfo,
		emailSavings,
		promotions,
		smsAnnouncement,
		smsFeedback,
		smsHealthtips,
		smsInfo,
		smsSavings,
		unsubsCode,
		unsubsNotes,
		unsubscribe,
		whatsappAllinfo,
	} = state
	const handleChangeEmail = (event, fieldName) => {
		if (event.target.checked && fieldName === 'appMail') {
			setState(prevState => ({
				...prevState,
				appMail: true,
				emailAnnouncement: true,
				emailHealthtips: true,
				emailSavings: true,
				emailInfo: true,
				emailFeedback: true,
			}))
		} else if (!event.target.checked && fieldName === 'appMail') {
			setState(prevState => ({
				...prevState,
				appMail: false,
				emailAnnouncement: false,
				emailHealthtips: false,
				emailSavings: false,
				emailInfo: false,
				emailFeedback: false,
			}))
		} else {
			setState(prevState => ({
				...prevState,
				[fieldName]: event.target.checked,
			}))
		}
	}
	const handleChangeSms = (event, fieldName) => {
		if (event.target.checked && fieldName === 'appSms') {
			setState(prevState => ({
				...prevState,
				appSms: true,
				smsAnnouncement: true,
				smsFeedback: true,
				smsHealthtips: true,
				smsInfo: true,
				smsSavings: true,
			}))
		} else if (!event.target.checked && fieldName === 'appSms') {
			setState(prevState => ({
				...prevState,
				appSms: false,
				smsAnnouncement: false,
				smsFeedback: false,
				smsHealthtips: false,
				smsInfo: false,
				smsSavings: false,
			}))
		} else {
			setState(prevState => ({
				...prevState,
				[fieldName]: event.target.checked,
			}))
		}
	}
	const handleChangeAllWhatsapp = (event, fieldName) => {
		if (event.target.checked && fieldName === 'whatsappAllinfo') {
			setState(prevState => ({
				...prevState,
				whatsappAllinfo: true,
			}))
		} else {
			setState(prevState => ({
				...prevState,
				whatsappAllinfo: false,
			}))
		}
	}
	useEffect(() => {
		if (emailHealthtips && emailAnnouncement && emailSavings && emailInfo && emailFeedback) {
			setState(prevState => ({
				...prevState,
				appMail: true,
			}))
		} else {
			setState(prevState => ({
				...prevState,
				appMail: false,
			}))
		}
	}, [emailAnnouncement, emailHealthtips, emailSavings, emailInfo, emailFeedback])
	useEffect(() => {
		if (smsAnnouncement && smsFeedback && smsHealthtips && smsInfo && smsSavings) {
			setState(prevState => ({
				...prevState,
				appSms: true,
			}))
		} else {
			setState(prevState => ({
				...prevState,
				appSms: false,
			}))
		}
	}, [smsAnnouncement, smsFeedback, smsHealthtips, smsInfo, smsSavings])
	const onSubmit = data => {
		const body = {
			...state,
			userType: 'CUS',
		}
		const onSuccess = res => {
			toast.success(<Typography variant='h5'>Updated Successfully</Typography>)
		}
		const onFailure = err => {
			toast.error(<Typography variant='h5'>Update Failed</Typography>)
			console.log('err', err)
		}
		notificationPostApi.NotificationPost(body).then(onSuccess, onFailure)
		// router.reload()
	}

	//---------------Get Method---------------//

	useEffect(() => {
		const onSuccess = response => {
			setState(prevState => ({
				...prevState,
				...response?.data?.data,
			}))
		}
		const onFailure = err => {
			console.log('err', err)
		}
		notificationGetApi.NotificationList().then(onSuccess, onFailure)
	}, [])

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			{isMobile && (
				<>
					<section className={classes.breadcrumbContainer}>
						<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb' className={classes.breadCrumbsNavigation}>
							<Typography onClick={() => router.push('/settingmenu')} className={classes.breadcrumbone} variant='h5'>
								settingmenu
							</Typography>
							<Typography className={classes.breadcrumbtwo} variant='h5'>
								notificationsetting
							</Typography>
						</Breadcrumbs>
					</section>
					<Divider />
				</>
			)}
			<div className={classes.notificationmain}>
				<div className={classes.contacttext}>
					<Typography>Email</Typography>
					<Typography>SMS</Typography>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<div className={classes.receiveall}>
						<div>
							<Typography className={classes.notificationheading}>I want to receive all</Typography>
							<Typography className={classes.notificationdesc}>You can disable these at any time</Typography>
						</div>
						<div>
							<div className={classes.receiveallcheckbox}>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox color='primary' checked={appMail} onChange={event => handleChangeEmail(event, 'appMail')} name='appMail' />}
										label=''
										{...register('appMail')}
									/>
									<FormControlLabel
										control={<Checkbox color='primary' checked={appSms} onChange={event => handleChangeSms(event, 'appSms')} name='appSms' />}
										label=''
										{...register('appSms')}
									/>
								</FormGroup>
							</div>
						</div>
					</div>
					<div className={classes.announcements}>
						<div>
							<Typography className={classes.notificationheading}>Announcements</Typography>
							<Typography className={classes.notificationdesc}>
								Most important updates on new and existing products Sent around once in a month
							</Typography>
						</div>
						<div>
							<div className={classes.announcementscheckbox}>
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox
												color='primary'
												checked={emailAnnouncement}
												onChange={event => handleChangeEmail(event, 'emailAnnouncement')}
												name='emailAnnouncement'
											/>
										}
										label=''
										{...register('emailAnnouncement')}
									/>
									<FormControlLabel
										control={
											<Checkbox
												color='primary'
												checked={smsAnnouncement}
												onChange={event => handleChangeSms(event, 'smsAnnouncement')}
												name='smsAnnouncement'
											/>
										}
										label=''
										{...register('smsAnnouncement')}
									/>
								</FormGroup>
							</div>
						</div>
					</div>
					<div className={classes.healthtips}>
						<div>
							<Typography className={classes.notificationheading}>Health Tips</Typography>
							<Typography className={classes.notificationdesc}>
								Get the most insightful health tips and articles from verified doctors. Sent 1-2 times per week.
							</Typography>
						</div>
						<div>
							<div className={classes.healthtipscheckbox}>
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox
												color='primary'
												checked={emailHealthtips}
												onChange={event => handleChangeEmail(event, 'emailHealthtips')}
												name='emailHealthtips'
											/>
										}
										label=''
										{...register('emailHealthtips')}
									/>
									<FormControlLabel
										control={
											<Checkbox
												color='primary'
												checked={smsHealthtips}
												onChange={event => handleChangeSms(event, 'smsHealthtips')}
												name='smsHealthtips'
											/>
										}
										label=''
										{...register('smsHealthtips')}
									/>
								</FormGroup>
							</div>
						</div>
					</div>
					<div className={classes.savings}>
						<div>
							<Typography className={classes.notificationheading}>Savings</Typography>
							<Typography className={classes.notificationdesc}>
								Get exclusive discounts and offers to save money on your healthcare bill. Sent usually once in 15 days.
							</Typography>
						</div>
						<div>
							<div className={classes.savingscheckbox}>
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox
												color='primary'
												checked={emailSavings}
												onChange={event => handleChangeEmail(event, 'emailSavings')}
												name='emailSavings'
											/>
										}
										label=''
										{...register('emailSavings')}
									/>
									<FormControlLabel
										control={
											<Checkbox color='primary' checked={smsSavings} onChange={event => handleChangeSms(event, 'smsSavings')} name='smsSavings' />
										}
										label=''
										{...register('smsSavings')}
									/>
								</FormGroup>
							</div>
						</div>
					</div>
					<div className={classes.informational}>
						<div>
							<Typography className={classes.notificationheading}>Informational</Typography>
							<Typography className={classes.notificationdesc}>
								Get to know what's the latest through our newsletters, product updates and more! Sent once in a week.
							</Typography>
						</div>
						<div>
							<div className={classes.informationlcheckbox}>
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox color='primary' checked={emailInfo} onChange={event => handleChangeEmail(event, 'emailInfo')} name='emailInfo' />
										}
										label=''
										{...register('emailInfo')}
									/>
									<FormControlLabel
										control={<Checkbox color='primary' checked={smsInfo} onChange={event => handleChangeSms(event, 'smsInfo')} name='smsInfo' />}
										label=''
										{...register('smsInfo')}
									/>
								</FormGroup>
							</div>
						</div>
					</div>
					<div className={classes.feedback}>
						<div>
							<Typography className={classes.notificationheading}>Feedback</Typography>
							<Typography className={classes.notificationdesc}>
								Get beta invitations, surveys and feedback forms, for sharing your suggestions. Sent once in a month.
							</Typography>
						</div>
						<div>
							<div className={classes.feedbackcheckbox}>
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox
												color='primary'
												checked={emailFeedback}
												onChange={event => handleChangeEmail(event, 'emailFeedback')}
												name='emailFeedback'
											/>
										}
										label=''
										{...register('emailFeedback')}
									/>
									<FormControlLabel
										control={
											<Checkbox color='primary' checked={smsFeedback} onChange={event => handleChangeSms(event, 'smsFeedback')} name='smsFeedback' />
										}
										label=''
										{...register('smsFeedback')}
									/>
								</FormGroup>
							</div>
						</div>
					</div>
					{/* {Notificationdata.map(Notificationtext => (
					<div className={classes.contacttwo} key={Notificationtext.id}>
						<div>
							<Typography className={classes.notificationheading}>{Notificationtext.heading}</Typography>
							<Typography className={classes.notificationdesc}>{Notificationtext.desc}</Typography>
						</div>
						<div className={classes.contactthree}>
							<div>
								<FormControlLabel
									control={<Checkbox checked={checked} onChange={handleChange} name='termsCheck' color='primary' />}
									id='termsCheck'
									name='termsCheck'
									{...register('termsCheck')}
								/>
								<FormHelperText error>{errors.termsCheck ? errors.termsCheck.message : ' '}</FormHelperText>
								<Checkbox color='primary' inputProps={{'aria-label': 'secondary checkbox'}} />
							</div>
							<div>
								<Checkbox color='primary' checked={checked} inputProps={{'aria-label': 'secondary checkbox'}} />
							</div>
						</div>
					</div>
				))} */}
					<div className={classes.belowcontent}>
						<div>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											color='primary'
											checked={whatsappAllinfo}
											onChange={event => handleChangeAllWhatsapp(event, 'whatsappAllinfo')}
											name='whatsappAllinfo'
										/>
									}
									label=''
									{...register('whatsappAllinfo')}
								/>
							</FormGroup>
						</div>
						<div>
							<Typography className={classes.notificationheading}>I want to receive important notifications and updates via WhatsApp.</Typography>
							<Typography className={classes.notificationdesc}>You can disable these at any time</Typography>
						</div>
					</div>
					<Button variant='contained' color='primary' type='submit'>
						Submit
					</Button>
				</form>
			</div>
			{/* <ToastContainer /> */}
		</>
	)
}
