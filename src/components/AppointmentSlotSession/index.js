import {makeStyles, Typography, Grid} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Button from '../SlotButton'
import moment from 'moment'
import _ from 'lodash'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

// import SlotData from '../../model/AppointmentSlotData/data'

const useStyles = makeStyles(theme => ({
	btnWrapper: {
		paddingBlockEnd: 8,
		display: 'flex',
		justifyContent: 'center',
		'& .MuiButton-contained:focus': {
			backgroundColor: '#9847EA',
			color: '#fff',
		},
		'& .MuiButton-root': {
			padding: '3px 4px 3px',
		},
	},
	// appointmentsession: {
	// 	paddingBlock: 6,
	// 	paddingInlineStart: 2,
	// 	paddingBlockStart: 13,
	// 	justifyContent: 'space-between',
	// 	'& .MuiTypography-h6': {
	// 		position: 'relative',
	// 		fontSize: 15,
	// 		left: 12,
	// 		fontFamily: theme.typography.h5.fontFamily,
	// 		color: '#242424',
	// 		display: 'flex',
	// 		whiteSpace: 'nowrap',
	// 		alignItems: 'flex-start',
	// 		paddingBlockEnd: 8,
	// 	},
	// 	[theme.breakpoints.down('xs')]: {
	// 		display: 'flex',
	// 		flexDirection: 'column',
	// 		alignItems: 'start',
	// 	},
	// 	[theme.breakpoints.down('md')]: {
	// 		paddingInlineStart: 0,
	// 	},
	// },
	// rootCont: {
	// 	display: 'flex',
	// },
	// timeButton: {
	// 	display: 'flex',
	// 	gap: 28,
	// 	flexWrap: 'wrap',
	// 	justifyContent: 'space-between',
	// 	padding: 4,
	// 	[theme.breakpoints.down('sm')]: {
	// 		gap: 4,
	// 	},
	// 	[theme.breakpoints.down('md')]: {
	// 		gap: 30,
	// 		display: 'flex',
	// 		justifyContent: 'space-between',
	// 	},
	// 	'& .MuiButton-contained:focus': {
	// 		backgroundColor: '#9847EA',
	// 		color: '#fff',
	// 	},
	// 	'& .MuiButton-root': {
	// 		padding: '3px 4px 3px',
	// 	},
	// 	'& .MuiButton-contained.Mui-disabled': {
	// 		backgroundColor: 'rgb(0 0 0 / 3%)',
	// 		color: 'rgb(0 0 0 / 34%)',
	// 	},
	// },
	// noSlots: {
	// 	textAlign: 'center',
	// },
	// findMorebtn: {
	// 	'& .MuiButton-contained.Mui-disabled': {
	// 		backgroundColor: 'red',
	// 	},
	// },
}))

export default function AppoinmetnSlotSession({availableData, currentDate}) {
	const {time, setTime} = useContextApi()
	console.log('availableData', availableData)
	const classes = useStyles()
	// const [splitTime, setSplitTime] = useState()
	// const slotData = availableData
	const [state, setState] = useState('')
	const currentDay = _.toLower(moment(currentDate).format('ddd'))

	// const mins = slotData?.available?.map(item => _.trim(item?.consultantionDuration, ' mins'))
	const mins = 15

	// function intervals(startString, endString) {
	// 	var start = moment(startString, 'hh:mm A')
	// 	var end = moment(endString, 'hh:mm A')
	// 	start.minutes(Math.ceil(start.minutes() / mins) * mins)

	// 	var result = []

	// 	var current = moment(start)

	// 	while (current <= end) {
	// 		result.push(current.format('hh:mm A'))
	// 		current.add(mins, 'minutes')
	// 	}
	// 	return result
	// }

	// const availableSlot = React.useCallback(
	// 	currentDay => {
	// 		if (!_.isEmpty(currentDay)) {
	// 			const slotSession = _.filter(slotData?.available, {dayOn: currentDay || 'all'})
	// 			if (_.isEmpty(slotSession)) {
	// 				const allSlotSession = _.filter(slotData?.available, {dayOn: 'all'})
	// 				setState(allSlotSession || [])
	// 			} else {
	// 				setState(slotSession)
	// 			}
	// 		}
	// 	},
	// 	[slotData]
	// )

	// useEffect(() => {
	// 	setSchedulePeriod(mins)
	// }, [])

	// useEffect(() => {
	// 	availableSlot(currentDay)
	// }, [currentDay, slotData])

	// const selectNumber = numberSelected => {
	// 	setSelectedNumber(numberSelected)
	// }

	return (
		<>
			{_.isEmpty(availableData) ? (
				<div className={classes.noSlots}>
					<Typography variant='subtitle1'>No slots available for this date</Typography>
				</div>
			) : (
				<>
					<Grid container>
						{!_.isEmpty(availableData) &&
							availableData?.map(item => (
								<>
									<Grid container xs={3}>
										<Grid item xs={12} className={classes.btnWrapper}>
											<Button
												onClick={() => {
													setTime(moment(item?.startTime, 'h:mm A').format('HH:mm:ss+05:30'))
												}}>
												{moment(item?.startTime, 'h:mm A').format('hh:mm A')}-{moment(item?.endTime, 'h:mm A').format('hh:mm A')}
											</Button>
										</Grid>
									</Grid>
								</>
							))}
					</Grid>
				</>
			)}
		</>
	)
}
