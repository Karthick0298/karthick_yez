/* eslint-disable no-use-before-define */
import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {makeStyles} from '@material-ui/core/styles'
import TodayIcon from '@material-ui/icons/Today'
import _ from 'lodash'
import PaymentStatusListApi from '../../../../Service/MyAccount/Payment/PaymentFilter'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles({
	option: {
		fontSize: 15,
		'& > span': {
			marginRight: 10,
			fontSize: 18,
		},
	},
	filterYear: {
		display: 'none',
		// display: 'flex',
		position: 'relative',
		transform: 'translateX(8px)',
		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
			padding: 4,
			borderRadius: 46,
			maxHeight: 38,
			background: '#E0EAFF 0% 0% no-repeat padding-box',
			// boxShadow: '0px 3px 6px #00000029',
			// border: '1px solid #E0EAFF',
		},

		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
			paddingLeft: 16,
			paddingTop: 6,
			fontSize: 16,
			fontFamily: 'poppins',
		},
		'& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
			minWidth: 45,
		},
		'& .MuiInputLabel-outlined': {
			transform: 'translate(15px, 16px) scale(1)',
		},
		'& .MuiSvgIcon-root': {
			border: '1px solid #E0EAFF',
			borderRadius: 14,
			width: 18,
			height: 18,
			background: '#E0EAFF 0% 0% no-repeat padding-box',
			boxShadow: '0px 3px 6px #00000029',
		},
		'& .MuiAutocomplete-clearIndicator': {
			display: 'none',
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/date-icon.svg'})`,
			backgroundPosition: 'right',
			backgroundSize: '100% 100%',
			visibility: 'inherit',
		},
		// display: 'none',
	},
	todayIcon: {
		'& .MuiSvgIcon-root': {
			zIndex: 1,
			position: 'relative',
			top: 5,
			left: 38,
			border: 'none',
		},
	},
	styleField: {
		'& .MuiOutlinedInput-notchedOutline': {
			border: 0,
		},
	},
})

export default function YearFilter({}) {
	const {setStatusProps} = useContextApi()
	const classes = useStyles()
	const [year, setYear] = useState({})
	const [yearCode, setyearCode] = useState([])

	useEffect(() => {
		PaymentStatusListApi.PaymentStatusList().then(Response => {
			setyearCode(Response.data.data)
		})
	}, [])

	useEffect(() => {
		if (!_.isEmpty(yearCode)) {
			let initialCountryCode = _.find(yearCode, {mastLookupValue: 'All payments'})
			setYear(initialCountryCode)
		}
	}, [yearCode])

	const onChange = (e, value) => {
		setYear(value)
	}

	useEffect(() => {
		setStatusProps(year)
	}, [year])

	return (
		<div className={classes.filterYear}>
			<Autocomplete
				ListboxProps={{style: {maxHeight: '12rem', fontSize: 16, fontFamily: ['"Poppins"', 'sans-serif'].join(',')}}}
				style={{width: 184, position: 'relative'}}
				options={yearCode}
				disableClearable={true}
				name='yearCode'
				onChange={onChange}
				value={year}
				getOptionLabel={option => option.mastLookupValue || ''}
				renderInput={params => (
					<>
						<TextField style={{paddingInline: '8px'}} {...params} variant='outlined' className={classes.styleField}>
							<div className={classes.iconCalender}></div>
						</TextField>
					</>
				)}
			/>
		</div>
	)
}
