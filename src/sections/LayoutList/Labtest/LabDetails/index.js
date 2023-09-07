import React from 'react'
import Image from 'next/image'
import listItem from '../../../../model/AppointmentDetails/data'
import {makeStyles, Typography} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Button from '@material-ui/core/Button'
// import RescheduleButton from '../../../../components/RescheduleAppiontmentButton'
import CancelModal from '../../../../components/CancelModal'
import DateButton from '../../../../components/DateTimeButton'
import {useRouter} from 'next/router'
import RescheduleModal from '../../../../components/DateTimePickModal'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		padding: '3%',
		gap: '33%',
		cursor: 'pointer',
		'& .MuiTypography-h4': {
			color: '#707070',
			fontStyle: 'normal',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		[theme.breakpoints.down('xs')]: {
			gap: '10%',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		[theme.breakpoints.down('md')]: {
			gap: '26%',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
	},
	appointmentList: {
		display: 'flex',
		justifyContent: 'space-evenly',
		gap: 30,
		paddingBlock: 5,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			padding: 29,
		},
	},
	informationList: {
		display: 'flex',
		flexDirection: 'column',
		gap: 13,
	},
	appointmentDate: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBlock: 20,
		gap: 35,
	},
	hoverColor: {
		'& .MuiButton-root:hover': {
			backgroundColor: '#00B592',
		},
	},
	listContent: {
		'& .MuiTypography-h6': {
			color: '#707070',
			fontSize: 15,
		},
		'& .MuiTypography-h5': {
			color: 'black',
			fontSize: 15,
		},
	},
	buttonList: {
		display: 'flex',
		flexDirection: 'row',
		gap: 12,
		'& .MuiTypography-h5': {
			fontSize: 15,
			textTransform: 'none',
			color: 'black',
		},
		'& .MuiButton-root:hover': {
			backgroundColor: '#E0EAFF',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	rootCont: {
		display: 'flex',
		justifyContent: 'flex-start',
		marginBottom: 20,
		paddingBlock: '3%',
		paddingInline: 30,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 20,
			paddingInline: 7,
		},
	},
	cardColor: {
		background: 'aliceblue',
		display: 'flex',
		alignItems: 'center',
		paddingRight: 30,
		borderRadius: 20,
		gap: 12,
		[theme.breakpoints.down('sm')]: {
			paddingRight: 10,
		},
	},
	cardAddress: {
		background: 'aliceblue',
		display: 'flex',
		alignItems: 'center',
	},
	addressInfo: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
	},
	splitContent: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
	},
	OrderDetailsbackground: {
		background: '#0000 0% 0% no-repeat padding-box',
		border: '1px solid #707070',
		borderRadius: 14,
		opacity: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 12,
		cursor: 'pointer',
		'& .MuiSvgIcon-root': {
			fontSize: '1.5rem',
			position: 'relative',
			left: 4,
		},
		[theme.breakpoints.down('xs')]: {
			padding: 5,
		},
	},
}))
export default function Detail() {
	const classes = useStyles()
	const router = useRouter()
	return (
		<>
			{listItem.map(listItem => (
				<div key={listItem.id}>
					<div className={classes.root}>
						<div className={classes.OrderDetailsbackground}>
							<ArrowBackIosIcon onClick={() => router.back()} />
						</div>
						<Typography variant='h4'>LabDetails</Typography>
					</div>
					<div className={classes.appointmentList}>
						<div className={classes.informationList}>
							<div className={classes.listContent}>
								<Typography variant='h6'>Appointment ID</Typography>
								<Typography variant='h5'>{listItem.appointmaentid}</Typography>
							</div>
							<div className={classes.listContent}>
								<Typography variant='h6'>Patient Name</Typography>
								<Typography variant='h5'>{listItem.patientname}</Typography>
							</div>
							<div className={classes.listContent}>
								<Typography variant='h6'>Email ID</Typography>
								<Typography variant='h5'>{listItem.emailid}</Typography>
							</div>
							<div className={classes.listContent}>
								<Typography variant='h6'>Mobile</Typography>
								<Typography variant='h5'>{listItem.mobilenumber}</Typography>
							</div>
						</div>
						<div className={classes.appointmentDate}>
							<div className={classes.buttonList}>
								<DateButton>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/date-icon.svg' width={15} height={15} />
									<Typography variant='h5'>{listItem.date}</Typography>
								</DateButton>
								<DateButton>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/time-icon.svg' width={15} height={15} />
									<Typography variant='h5'>{listItem.time}</Typography>
								</DateButton>
							</div>
							<div className={classes.hoverColor}>
								<RescheduleModal />
							</div>
							<CancelModal />
						</div>
					</div>
					<div className={classes.rootCont}>
						<div className={classes.cardColor}>
							<div>
								<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/cogent.png' alt='care' width={134} height={150} />
							</div>
							<div className={classes.splitContent}>
								<div className={classes.addressInfo}>
									<Typography variant='h5'>All care LABS</Typography>
									<Typography variant='h5'>{listItem.street}</Typography>
									<Typography variant='h5'>{listItem.city}</Typography>
								</div>
								{/* <div>
									<Button color='primary' style={{textTransform: 'none'}}>
										Get Directions
									</Button>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
