import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import {Schedule, Event, Home, Videocam} from '@material-ui/icons'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import GradientButton from '../../../src/components/GradientButton'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	root: {},
	modalWindow: {
		'& .MuiDialog-paper': {
			// border: '3px solid green',
			borderRadius: 12,
			'& .MuiDialogTitle-root': {
				background: '#EAECEE',
				paddingBlock: 8,
				paddingInline: 18,
				'& .MuiTypography-h6': {
					color: '#000000',
					fontSize: 16,
					fontWeight: 500,
				},
			},
		},
		// '& .MuiDialogContent-dividers': {
		// 	// border: '3px solid green',
		// 	padding: 16,
		// },
		'& .MuiDialog-paperWidthSm': {
			[theme.breakpoints.up('xs')]: {
				maxHeight: '85vh',
				maxWidth: 400,
			},
			[theme.breakpoints.up('sm')]: {
				maxHeight: '85vh',
				maxWidth: 450,
			},
			[theme.breakpoints.up('md')]: {
				maxWidth: 750,
			},
		},

		'& .MuiDialogContent-dividers': {
			[theme.breakpoints.up('xs')]: {
				padding: 10,
			},
			[theme.breakpoints.up('sm')]: {
				padding: 20,
			},
			[theme.breakpoints.up('md')]: {
				padding: 22,
			},
		},
		'& .MuiDialog-container': {
			height: '110%',
		},
	},
	container: {
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			gap: 18,
		},
	},
	leftSection: {},
	rightSection: {},

	//#### Left side style starts ####
	bookAppointment: {
		display: 'flex',
		justifyContent: 'space-between',
		// alignItems: 'flex-end',
		border: '1.5px solid #ABB2B9',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		marginBlockEnd: 12,

		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			gap: 6,
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			// gap: 18,
		},

		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 16,
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
			whiteSpace: 'nowrap',
			display: 'flex',
			alignItems: 'center',
			'& .MuiSvgIcon-root': {
				fontSize: 20,
				marginInlineEnd: 6,
				color: theme.palette.care.main,
			},
		},
	},
	appointmentBooking: {
		border: '1.5px solid #ABB2B9',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		marginBlockEnd: 12,
		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 16,
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
			display: 'flex',
			alignItems: 'center',
		},
	},

	timeAndDate: {
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 15,
			display: 'flex',
			alignItems: 'center',
			whiteSpace: 'nowrap',
			textDecoration: 'underline',
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				marginInlineEnd: 6,
				color: '#475677',
			},
		},
	},

	doctorDetails: {
		border: '1px solid #ABB2B9',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		marginBlockEnd: 12,
		display: 'flex',
		alignItems: 'center',
		gap: 16,
	},
	doctorProfileImg: {
		borderRadius: 10,
	},
	profileDetails: {
		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 16,
			'& span': {
				fontSize: 12,
			},
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
			display: 'flex',
			alignItems: 'center',
		},
	},

	establishmentDetailsContainer: {
		border: '1px solid #ABB2B9',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		// marginBlockEnd: 12,
		'& a': {
			color: theme.palette.care.main,
			fontSize: 14,
			textDecoration: 'none',
			display: 'flex',
			justifyContent: 'flex-end',
			fontWeight: 500,
		},
	},
	establishmentDetails: {
		display: 'flex',
		alignItems: 'center',
		gap: 16,
	},
	hospitalImg: {
		borderRadius: 10,
	},
	hospitalDetails: {
		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 16,
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
			display: 'flex',
			alignItems: 'center',
		},
	},
	closeModal: {
		// paddingInline: 18,
		paddingBlockStart: 6,
		cursor: 'pointer',
		width: 'fit-content',

		'& .MuiTypography-body1': {
			color: theme.palette.care.main,
			fontSize: 14,
			fontWeight: 600,
		},
	},
	//#### Left side style ends ####

	//#### Right side style starts ####
	appointmentFor: {
		paddingBlockStart: 8,
		[theme.breakpoints.up('md')]: {
			paddingBlockStart: 0,
		},
		'& .MuiTypography-h3': {
			color: theme.palette.care.main,
			fontSize: 16,
		},
	},
	coupon: {
		border: '1px solid #ABB2B9',
		minWidth: '100%',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		marginBlockEnd: 12,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& .MuiTypography-body1': {
			color: theme.palette.care.main,
			fontSize: 16,
		},
	},
	couponLeft: {
		display: 'flex',
		alignItems: 'center',

		// justifyContent: 'space-between',
		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 16,
			paddingInlineStart: 14,
		},
	},
	paymentDetails: {
		border: '1px solid #ABB2B9',
		paddingBlock: 8,
		borderRadius: 12,
		// marginBlockEnd: 6,
		'& .MuiTypography-h3': {
			color: theme.palette.care.main,
			fontSize: 16,
			paddingInline: 12,
		},
	},

	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
		width: '100%',
	},

	// ######
	offerPercentageImg: {
		objectFit: 'cover',
		// paddingInlineEnd: 12,
	},
	consultationFess: {
		background: '#EAEDED',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBlock: 6,
		marginBlockStart: 10,
		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 15,
			fontStyle: 'normal',
			fontWeight: 500,
			paddingInlineStart: 24,
		},
		'& .MuiTypography-h4': {
			color: '#475677',
			fontSize: 15,
			fontStyle: 'normal',
			fontWeight: 500,
			paddingInline: 16,
		},
		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: 15,
			fontWeight: 600,
			paddingInline: 16,
		},
	},
	totalAmount: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBlock: 6,
		marginBlockStart: 10,
		'& .MuiTypography-h3': {
			color: '#475677',
			fontSize: 15,
			fontStyle: 'normal',
			fontWeight: 500,
			paddingInlineStart: 24,
		},
		'& .MuiTypography-h4': {
			color: '#475677',
			fontSize: 15,
			fontStyle: 'normal',
			fontWeight: 600,
			paddingInline: 16,
		},
	},

	paymentType: {
		// border: '1px solid #ABB2B9',
		borderRadius: 12,
		paddingInlineStart: 12,
		'& .MuiFormGroup-root': {
			flexDirection: 'row',
			'& .MuiTypography-body1 ': {
				color: '#475677',
				fontSize: 16,
			},
			'& .MuiRadio-colorSecondary.Mui-checked': {
				color: theme.palette.care.main,
			},
			'& .MuiIconButton-label': {
				// padding: 2,
				'& .MuiSvgIcon-root': {
					width: 18,
				},
			},
		},
	},
	appointmentForFeilds: {
		paddingBlock: 5,
		'& .MuiTextField-root': {
			marginBlock: 4,
			'& .MuiOutlinedInput-input': {
				paddingBlock: 6,
				paddingInline: 10,
				fontSize: 16,
				color: '#475677',
			},
			'& .MuiOutlinedInput-root': {
				borderRadius: 10,
				marginRight: 10,
			},
			'& .MuiFormControl-root': {
				// marginRight: 10,
			},
		},
	},
}))

export default function PaymentModal(props) {
	const classes = useStyles(props)

	const [value, setValue] = React.useState('')
	// the below method is for handling radio button change
	const handleRadioChange = event => {
		setValue(event.target.value)
	}

	const [open, setOpen] = React.useState(false)
	const [scroll, setScroll] = React.useState('paper')

	const handleClickOpen = scrollType => () => {
		setOpen(true)
		setScroll(scrollType)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const descriptionElementRef = React.useRef(null)
	React.useEffect(() => {
		if (open) {
			const {current: descriptionElement} = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [open])

	return (
		<div className={classes.root}>
			<Button onClick={handleClickOpen('paper')} color='primary' variant='outlined'>
				Click to Open Modal
			</Button>
			<Dialog
				className={classes.modalWindow}
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby='scroll-dialog-title'
				aria-describedby='scroll-dialog-description'>
				<DialogTitle id='scroll-dialog-title'>Appointment Details</DialogTitle>
				<DialogContent dividers={scroll === 'paper'}>
					<div className={classes.container}>
						<div className={classes.leftSection}>
							<div className={classes.bookAppointment}>
								<div>
									<Typography variant='h3'>Book Appointment for</Typography>
									<Typography variant='body1'>
										{true && (
											<>
												<Home />
												In-Person Consultation
											</>
										)}
										{false && (
											<>
												<Videocam />
												Video Consultation
											</>
										)}
									</Typography>
								</div>
								<div className={classes.timeAndDate}>
									<Typography variant='body1'>
										<Event />
										On {moment('2022-01-14T16:54:21+05:30').format('ll')}
									</Typography>
									<Typography variant='body1'>
										<Schedule />
										{moment('2022-01-14T16:54:21+05:30').format('LT')}
									</Typography>
								</div>
							</div>
							<div className={classes.appointmentBooking}>
								<Typography variant='h3'>Appointment Booking for</Typography>
								<Typography variant='body1'>General Consultation</Typography>
							</div>

							<div className={classes.doctorDetails}>
								<div>
									<Image
										src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'
										apolloHospital
										alt='Picture of the author'
										width={80}
										height={80}
										className={classes.doctorProfileImg}
									/>
								</div>
								<div className={classes.profileDetails}>
									<Typography variant='h3'>
										Dr. Remi Gious <span>MBBS, MS - ENT</span>
									</Typography>
									<Typography variant='body1'>General Medicine - Cardiology</Typography>
									<Typography variant='body1'>PSG hospital, 3 years experience</Typography>
								</div>
							</div>

							<div className={classes.establishmentDetailsContainer}>
								<div className={classes.establishmentDetails}>
									<div>
										<Image
											src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apolloHospital.jpg'
											alt='Picture of the author'
											width={80}
											height={80}
											className={classes.hospitalImg}
										/>
									</div>
									<div className={classes.hospitalDetails}>
										<Typography variant='h3'>Apollo Hospitals</Typography>
										<Typography variant='body1'>Multi Speciality Hospital</Typography>
										<Typography variant='body1'>Anna nagar, Chennai - 600026</Typography>
									</div>
								</div>
								{/* <Link href=''>Get Direction</Link> */}
							</div>
						</div>
						<div className={classes.rightSection}>
							<div className={classes.appointmentFor}>
								<Typography variant='h3'>Appointment for</Typography>
								<div className={classes.appointmentForFeilds}>
									<TextField
										id='outlined-read-only-input'
										defaultValue='Dinesh Kumar'
										InputProps={{
											readOnly: true,
										}}
										variant='outlined'
									/>
									<TextField
										id='outlined-read-only-input'
										defaultValue='+91 9876543210'
										InputProps={{
											readOnly: true,
										}}
										variant='outlined'
									/>
									<TextField
										id='outlined-read-only-input'
										defaultValue='LFYnGO123@LFYnGO.com'
										InputProps={{
											readOnly: true,
										}}
										variant='outlined'
									/>
								</div>
							</div>
							<div className={classes.coupon}>
								<div className={classes.couponLeft}>
									<Image
										src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/offerPercentageIcon.svg'
										alt='Picture of the author'
										width={28}
										height={28}
										className={classes.offerPercentageImg}
									/>
									<Typography variant='h3'>Apply Coupon</Typography>
								</div>
								<Typography variant='body1'>View offers</Typography>
							</div>
							<div className={classes.paymentDetails}>
								<Typography variant='h3'>Payment details:</Typography>
								<div className={classes.feesSection}>
									<div className={classes.consultationFess}>
										<Typography variant='h3'>Consultation fees</Typography>
										<Typography variant='h4'>
											<span
												style={{
													fontWeight: 'bolder',
													fontFamily: 'Roboto',
													color: '#475677',
													marginInlineEnd: 3,
												}}>
												&#8377;
											</span>
											500
										</Typography>
									</div>
									<div className={classes.consultationFess}>
										<Typography variant='h3'>Applied coupon</Typography>
										<Typography variant='h4'>
											<span
												style={{
													fontWeight: 'bolder',
													fontFamily: 'Roboto',
													color: '#475677',
													marginInlineEnd: 3,
												}}>
												- &#8377;
											</span>
											50
										</Typography>
									</div>
									<div className={classes.totalAmount}>
										<Typography variant='h3'>Total Payable amount:</Typography>
										<Typography variant='h4'>
											<span
												style={{
													fontWeight: 'bolder',
													fontFamily: 'Roboto',
													color: '#475677',
													marginInlineEnd: 3,
												}}>
												&#8377;
											</span>
											450
										</Typography>
									</div>
								</div>
							</div>
							<div className={classes.paymentType}>
								<RadioGroup aria-label='quiz' name='quiz' value={value} onChange={handleRadioChange}>
									<FormControlLabel value='Pay Online' control={<Radio />} label='Pay Online' />
									<FormControlLabel value='Pay Later at Clinic' control={<Radio />} label='Pay Later at Clinic' />
								</RadioGroup>
							</div>
							<div className={classes.buttonContainer}>
								<Link href=''>
									<GradientButton findMorebtn={classes.findMorebtn}>Proceed to Payment</GradientButton>
								</Link>
							</div>
						</div>
					</div>

					<div className={classes.closeModal}>
						<Typography onClick={handleClose} variant='body1'>
							Go back to results
						</Typography>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}
