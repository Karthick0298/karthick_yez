import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers'

export default function Pickers() {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date())

	const handleDateChange = date => {
		setSelectedDate(date)
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justifyContent='space-around'>
				<KeyboardDatePicker
					disableToolbar
					variant='inline'
					format='MM/dd/yyyy'
					margin='normal'
					id='date-picker-inline'
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<KeyboardTimePicker
					margin='normal'
					id='time-picker'
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change time',
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
