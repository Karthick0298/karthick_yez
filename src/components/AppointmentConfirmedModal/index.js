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

		'& .MuiDialog-paperWidthSm': {
			[theme.breakpoints.up('xs')]: {
				maxHeight: '85vh',
				maxWidth: 400,
				// minWidth: 400,
			},
			[theme.breakpoints.up('sm')]: {
				maxHeight: '85vh',
				maxWidth: 450,
				minWidth: 450,
			},
			[theme.breakpoints.up('md')]: {
				maxWidth: 750,
				minWidth: 750,
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
	title: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiTypography-h3': {
			marginRight: 12,
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {},
		},
	},
	container: {
		// [theme.breakpoints.up('md')]: {
		// 	display: 'flex',
		// 	gap: 18,
		// },
	},
	leftSection: {},
	rightSection: {},

	closeModal: {
		paddingBlockStart: 6,
		cursor: 'pointer',
		width: 'fit-content',

		'& .MuiTypography-body1': {
			color: theme.palette.care.main,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	doctorDetails: {
		border: '1px solid #ABB2B9',
		background: '#00B59217',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		marginBlockEnd: 12,
		display: 'flex',
		alignItems: 'center',
		gap: 16,
		[theme.breakpoints.up('md')]: {
			paddingBlockEnd: 14,
		},
	},
	doctorProfileImg: {
		borderRadius: 10,
	},
	profileDetails: {
		'& .MuiTypography-h3': {
			color: '#475677',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
			'& span': {
				[theme.breakpoints.up('xs')]: {
					fontSize: 12,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 12,
				},
			},
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
	establishmentDetailsContainer: {
		border: '1px solid #ABB2B9',
		background: '#00B59217',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		// marginBlockEnd: 12,
		'& a': {
			color: theme.palette.care.main,
			textDecoration: 'none',
			display: 'flex',
			justifyContent: 'flex-end',
			fontWeight: 500,
			[theme.breakpoints.up('xs')]: {
				marginBlockStart: -4,
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				marginBlockStart: -12,
				fontSize: 14,
			},
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
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
	containerTwo: {
		display: 'flex',

		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			gap: 16,
		},
	},
	containerOneLeft: {
		[theme.breakpoints.up('xs')]: {},
		[theme.breakpoints.up('sm')]: {},
		'& .MuiTypography-h3': {
			color: '#707070',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-body1': {
			color: '#000000',
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
				marginBlockEnd: 10,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
				marginBlockEnd: 12,
			},
		},
	},
	timeAndDate: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingInline: 12,
		gap: 14,

		'& .MuiTypography-body1': {
			background: '#00B59217',
			color: '#3D4756',
			display: 'flex',
			alignItems: 'center',
			whiteSpace: 'nowrap',
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
				paddingInline: 14,
				paddingBlock: 4,
				borderRadius: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
				paddingInline: 18,
				paddingBlock: 6,
				borderRadius: 18,
			},
			'& .MuiSvgIcon-root': {
				marginInlineEnd: 6,
				color: '#3D4756',
				[theme.breakpoints.up('xs')]: {
					fontSize: 18,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 20,
				},
			},
		},
	},

	findMorebtn: {
		backgroundColor: '#00B592',
		borderRadius: 6,
		'&:hover': {
			backgroundColor: '#00B592',
		},
	},
	reschedule: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			marginBlock: 12,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlock: 16,
		},
		[theme.breakpoints.up('md')]: {
			marginBlock: 26,
		},
	},

	CancelAppt: {
		textAlign: 'center',
		'& .MuiTypography-h4': {
			color: '#00B592',
			fontStyle: 'normal',
			marginBlockEnd: 12,

			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
	containerOne: {
		[theme.breakpoints.up('xs')]: {
			marginBlockStart: 8,
		},
		[theme.breakpoints.up('md')]: {
			marginBlockStart: 18,
			display: 'flex',
			justifyContent: 'space-around',
		},
	},
}))

export default function AppointmentConfirmedModal(props) {
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
				Appointment Confirmed
			</Button>
			<Dialog
				className={classes.modalWindow}
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby='scroll-dialog-title'
				aria-describedby='scroll-dialog-description'>
				<DialogContent dividers={scroll === 'paper'}>
					<div className={classes.title}>
						<Typography variant='h3'>Appointment Confirmed</Typography>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/success.png' alt='success' width={34} height={34} />
					</div>
					<div className={classes.containerOne}>
						<div className={classes.containerOneLeft}>
							<Typography variant='h3'>Appointment ID</Typography>
							<Typography variant='body1'>1240 1240</Typography>
							<Typography variant='h3'>Patient Name</Typography>
							<Typography variant='body1'>Ranjith Kumar</Typography>
							<Typography variant='h3'>Email ID</Typography>
							<Typography variant='body1'>johnhenry@outlook.com</Typography>
							<Typography variant='h3'>Mobile</Typography>
							<Typography variant='body1'>+91 8764564367</Typography>
						</div>
						<div className={classes.containerOneRight}>
							<div>
								<div className={classes.timeAndDate}>
									<Typography variant='body1'>
										<Event />
										{moment('2022-01-14T16:54:21+05:30').format('ll')}
									</Typography>
									<Typography variant='body1'>
										<Schedule />
										{moment('2022-01-14T16:54:21+05:30').format('LT')}
									</Typography>
								</div>
							</div>
							<div className={classes.reschedule}>
								<GradientButton findMorebtn={classes.findMorebtn}>Reschedule Appointment</GradientButton>
							</div>
							<div className={classes.CancelAppt}>
								<Typography variant='h4'>Cancel Appointment</Typography>
							</div>
						</div>
					</div>
					<div className={classes.containerTwo}>
						<div className={classes.containerTwoLeft}>
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
						</div>
						<div className={classes.containerTwoRight}>
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
