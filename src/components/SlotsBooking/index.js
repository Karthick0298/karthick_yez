import {makeStyles, Typography} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import Button from '../SlotButton'
import slotItem from '../../model/SlotsBook/data'
import AppointmentSlot from '../../../Service/MyAccount/AvailableAppointment'
import _ from 'lodash'
import moment from 'moment'
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		paddingBlock: 6,
		paddingInlineStart: 2,
		justifyContent: 'space-between',
		alignItems: 'center',
		'& .MuiTypography-h6': {
			fontSize: 15,
			color: '#242424',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
		},
		[theme.breakpoints.down('md')]: {
			paddingInlineStart: 0,
			display: 'flex',
			justifyContent: 'space-evenly',
		},
	},
	rootCont: {
		display: 'flex',
	},
	timeButton: {
		display: 'flex',
		gap: 10,
		padding: 4,
		[theme.breakpoints.down('sm')]: {
			gap: 4,
		},
		[theme.breakpoints.down('md')]: {
			gap: 8,
		},
		'& .MuiButton-contained:hover': {
			boxShadow: 'none',
		},
		'& .makeStyles-ButtonColor-69': {
			padding: '0px 5px',
			[theme.breakpoints.down('sm')]: {
				padding: '5px 15px',
			},
		},
		'& .MuiButton-root': {
			padding: '3px 4px 3px',
		},
	},
}))
export default function SlotBooking({tentUserId, tentId, date}) {
	const classes = useStyles()
	const [appointmentslot, setAppointmentSlot] = useState([])
	useEffect(() => {
		AppointmentSlot.AvailableAppointment(tentUserId, tentId, date).then(response => {
			setAppointmentSlot(response.data.data.available)
		})
	}, [])
	// var startTime = new Date('2016-05-09:00:00')
	// var endTime = new Date('2016-05-17:00:00')
	// var slices = {}
	// var count = 0
	// while (endTime >= startTime) {
	// 	startTime = new Date(startTime.getTime() + 15 * 60 * 1000)
	// 	slices[count] = startTime
	// 	count++
	// }
	return (
		<>
			<Typography variant='h5'>Slots:</Typography>
			{!_.isEmpty(appointmentslot) &&
				appointmentslot?.map(slotTime => (
					<div key={slotItem.id} className={classes.root}>
						<Typography variant='h6'>{slotTime.establishmentName}</Typography>
						<div className={classes.timeButton}>
							<Button>{moment(slotTime.sessionStartTime, 'HH:mm:ss').format('hh:mm')}</Button>
							<Button>{moment(slotTime.sessionEndTime, 'HH:mm:ss').format('hh:mm')}</Button>
						</div>
					</div>
				))}
		</>
	)
}
