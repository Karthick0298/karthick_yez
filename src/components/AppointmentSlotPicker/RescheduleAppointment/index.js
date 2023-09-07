import React, {useState, useContext} from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import {makeStyles} from '@material-ui/core'
import AppointmentSessionSlot from '../../../components/AppointmentSlotSession'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiPickersDatePickerRoot-toolbarLandscape': {
			display: 'none',
		},
		'& .MuiPickersDay-daySelected': {
			color: '#fff',
			backgroundColor: '#7C60DC',
			fontWeight: 400,
		},
		'& .MuiPickersStaticWrapper-staticWrapperRoot': {
			backgroundColor: 'transparent',
		},
		'& .MuiTypography-alignCenter': {
			fontSize: 16,
			fontFamily: "'Poppins'",
			fontWeight: 400,
		},
		'& .MuiTypography-body2': {
			fontSize: 14,
			fontFamily: "'Poppins'",
		},
		'& .MuiPickersCalendarHeader-iconButton': {
			backgroundColor: 'transparent',
		},
		'& .MuiPickersBasePicker-container': {
			width: '100%',
		},
		'& .MuiPickersStaticWrapper-staticWrapperRoot': {
			minWidth: 0,
			background: 'transparent',
		},
		'& .MuiPickersBasePicker-pickerView': {
			width: '100%',
			minWidth: 0,
			maxWidth: '100%',
			display: 'block',
			// maxHeight: 168,
			// minHeight: 0,
		},
		'& .MuiPickersCalendar-week': {
			display: 'flex',
			justifyContent: 'space-around',
		},
		'& .MuiPickersCalendarHeader-daysHeader': {
			display: 'flex',
			maxHeight: 16,
			alignItems: 'center',
			justifyContent: 'space-around',
		},
		'& .makeStyles-root-312 .MuiTypography-body2': {
			fontSize: 14,
			fontFamily: "'Poppins'",
		},
		'& .MuiTypography-caption': {
			fontSize: 14,
			fontFamily: "'Poppins'",
			color: '#242424',
		},
	},
}))

function AppointmentSlotPicker({availableData, currentDate, availableData1, onDateChange, currentDay}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DatePicker disablePast autoOk orientation='landscape' variant='static' openTo='date' value={currentDate} onChange={onDateChange} />
			</MuiPickersUtilsProvider>
			<AppointmentSessionSlot availableData={availableData} availableData1={availableData1} currentDay={currentDay} currentDate={currentDate} />
		</div>
	)
}

export default AppointmentSlotPicker
