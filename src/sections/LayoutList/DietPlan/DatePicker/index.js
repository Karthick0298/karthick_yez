import React, {useState} from 'react'
import {TextField, MenuItem, Menu, IconButton, makeStyles} from '@material-ui/core'
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material'
import {LocalizationProvider} from '@mui/x-date-pickers-pro'
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker'
import {AdapterDateFns} from '@mui/x-date-pickers-pro/AdapterDateFns'
import moment from 'moment'
// import {DateRangePicker, DateRangeDelimiter, LocalizationProvider} from '@material-ui/pickers'
// import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
const useStyles = makeStyles(theme => ({
	datePickerContainer: {
		display: 'flex',
		alignItems: 'center',
		background: '#0AA13217',
		borderRadius: 6,
		paddingInline: 8,
		paddingBlock: 6,
		'& .MuiFormControl-root': {
			width: 120,
		},
		'& .Mui-focused': {
			color: 'inherit',
		},
		'& fieldset': {
			border: 'none',
		},
		'& input': {
			fontWeight: 500,
			fontSize: '20px',
		},
		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:after': {
			borderBottom: 'none',
		},
		[theme.breakpoints.up('xs')]: {
			marginBlock: 12,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlock: 'unset',
		},
	},

	menuListContainer: {
		'& .MuiMenu-paper': {
			top: '200px !important',
		},
	},
	dateRangePickerContainer: {
		'& .MuiPaper-root': {
			borderRadius: 20,
		},
		'& .MuiDateRangePickerDay-day.Mui-selected': {
			borderRadius: 20,
			backgroundColor: '#0AA13217',
		},
	},
}))

function DatePicker({name, id, getDateRange, value, setValue}) {
	const classes = useStyles()

	const SelectableOptions = [
		{
			mastLookupKey: 'TDY',
			mastLookupValue: 'Today',
			mastLookupType: 'WFL',
		},

		{
			mastLookupKey: 'L7D',
			mastLookupValue: 'Last 7 days',
			mastLookupType: 'WFL',
		},

		{
			mastLookupKey: 'MTH',
			mastLookupValue: 'Last month',
			mastLookupType: 'WFL',
		},

		{
			mastLookupKey: 'LYR',
			mastLookupValue: 'Last year',
			mastLookupType: 'WFL',
		},
	]

	const [anchorEl, setAnchorEl] = useState(null)

	const open = Boolean(anchorEl)

	const handleClose = event => {
		setAnchorEl(null)
	}

	const dateFromSelect = selectedOption => {
		if (selectedOption === 'L7D') {
			setValue([
				moment()
					.subtract(1, 'w')
					.format(),
				moment().format(),
			])
			getDateRange &&
				getDateRange([
					`${moment()
						.subtract(1, 'w')
						.format('YYYY-MM-DD 00:00:00')}`,
					`${moment().format('YYYY-MM-DD 23:59:59')}`,
				])
		} else if (selectedOption === 'LYR') {
			setValue([
				moment()
					.subtract(1, 'y')
					.format(),
				moment().format(),
			])
			getDateRange &&
				getDateRange([
					`${moment()
						.subtract(1, 'y')
						.format('YYYY-MM-DD 00:00:00')}`,
					`${moment().format('YYYY-MM-DD 23:59:59')}`,
				])
		} else if (selectedOption === 'MTH') {
			setValue([
				moment()
					.subtract(1, 'M')
					.format(),
				moment().format(),
			])
			getDateRange &&
				getDateRange([
					`${moment()
						.subtract(1, 'M')
						.format('YYYY-MM-DD 00:00:00')}`,
					`${moment().format('YYYY-MM-DD 23:59:59')}`,
				])
		} else if (selectedOption === 'TDY') {
			setValue([moment().format('YYYY-MM-DD 00:00:00'), moment().format('YYYY-MM-DD 23:59:59')])
			getDateRange && getDateRange([`${moment().format('YYYY-MM-DD 00:00:00')}`, `${moment().format('YYYY-MM-DD 23:59:59')}`])
		} else {
			if (moment(selectedOption[0]).format('YYYY-MM-DD') !== 'Invalid date' && moment(selectedOption[1]).format('YYYY-MM-DD') !== 'Invalid date') {
				if (moment(selectedOption[0]).format('YYYY-MM-DD') === moment(selectedOption[1]).format('YYYY-MM-DD')) {
					getDateRange &&
						getDateRange([`${moment(selectedOption[0]).format('YYYY-MM-DD 00:00:00')}`, `${moment(selectedOption[1]).format('YYYY-MM-DD 23:59:59')}`])
				} else {
					getDateRange &&
						getDateRange([`${moment(selectedOption[0]).format('YYYY-MM-DD 00:00:00')}`, `${moment(selectedOption[1]).format('YYYY-MM-DD 23:59:59')}`])
				}
			}
		}
		handleClose()
	}

	return (
		<div className={classes.datePickerContainer}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateRangePicker
					id={id}
					name={name}
					startText={'Select period'}
					endText={''}
					calendars={1}
					value={value}
					minDate={new Date('2016-01-01')}
					onChange={newValue => {
						setValue(newValue)
						dateFromSelect(newValue)
					}}
					className={classes.dateRangePickerContainer}
					renderInput={(startProps, endProps) => (
						<React.Fragment>
							<TextField size='small' {...startProps} />
							<TextField size='small' {...endProps} />
						</React.Fragment>
					)}
				/>
				{/* <DateRangePicker
					id={id}
					name={name}
					startText={'Select period'}
					endText={''}
					calendars={1}
					value={value}
					onChange={newValue => {
						setValue(newValue)
						dateFromSelect(newValue)
					}}
					className={classes.dateRangePickerContainer}
					renderInput={(startProps, endProps) => (
						<>
							<TextField {...startProps} />
							<DateRangeDelimiter> to </DateRangeDelimiter>
							<TextField {...endProps} />
						</>
					)}
				/> */}
			</LocalizationProvider>
			<div className={classes.dropDown}>
				<IconButton
					id='basic-button'
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={event => {
						setAnchorEl(event.currentTarget)
					}}
					size='medium'>
					{open ? <ArrowDropUp /> : <ArrowDropDown />}
				</IconButton>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					className={classes.menuListContainer}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}>
					{SelectableOptions.map((option, idx) => (
						<MenuItem
							key={idx}
							value={option?.mastLookupKey}
							onClick={() => {
								dateFromSelect(option?.mastLookupKey)
							}}>
							{option?.mastLookupValue}
						</MenuItem>
					))}
				</Menu>
			</div>
		</div>
	)
}

export default DatePicker
