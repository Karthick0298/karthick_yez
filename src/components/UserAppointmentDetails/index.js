import React from 'react'
import Image from 'next/image'
import list from '../../model/AppointmentDetails/data'
import {makeStyles, Typography} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import Button from '@material-ui/core/Button'
import CardList from './CaredList'
import {useRouter} from 'next/router'
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		padding: '3%',
		gap: '33%',
		'& .MuiTypography-h4': {
			color: '#707070',
			fontStyle: 'normal',
		},
		[theme.breakpoints.down('sm')]: {
			gap: '10%',
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
		'& .MuiButton-containedPrimary': {
			background: '#00B592 0% 0% no-repeat padding-box',
			borderRadius: 4,
			boxShadow: 'none',
		},
		'& .MuiTypography-h5': {
			fontSize: 15,
			textTransform: 'none',
			color: '#fff',
		},
		'& .MuiButton-textPrimary': {
			'& .MuiTypography-h5': {
				fontSize: 15,
				textTransform: 'none',
				color: '#00B592',
			},
		},
		[theme.breakpoints.down('sm')]: {
			gap: 18,
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
		'& .MuiButton-containedPrimary': {
			background: '#E0EAFF 0% 0% no-repeat padding-box',
			borderRadius: 20,
			paddingInline: 15,
			boxShadow: 'none',
			'& .MuiButton-label': {
				gap: 9,
			},
		},
		'& .MuiTypography-h5': {
			fontSize: 15,
			textTransform: 'none',
			color: 'black',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
	},
}))
export default function Deatil() {
	const classes = useStyles()
	const router = useRouter()
	return (
		<>
			<div>
				{list.map(listItem => (
					<div key={list.id}>
						<div className={classes.root}>
							<ArrowBackIcon onClick={() => router.back()} />
							<Typography variant='h4'>AppointmentDetails</Typography>
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
									<Button variant='contained' color='primary'>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/date-icon.svg' alt='date' width={15} height={15} />
										<Typography variant='h5'>{listItem.date}</Typography>
									</Button>
									<Button variant='contained' color='primary'>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/time-icon.svg' alt='time' width={15} height={15} />
										<Typography variant='h5'>{listItem.time}</Typography>
									</Button>
								</div>
								<Button variant='contained' color='primary'>
									<Typography variant='h5'>Reschedule Appointment</Typography>
								</Button>
								<Button href='#text-buttons' color='primary'>
									<Typography variant='h5'>Cancel Appointment</Typography>
								</Button>
							</div>
						</div>
						<CardList />
					</div>
				))}
			</div>
		</>
	)
}
