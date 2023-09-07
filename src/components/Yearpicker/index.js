/* eslint-disable no-use-before-define */
import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {makeStyles} from '@material-ui/core/styles'
import TodayIcon from '@material-ui/icons/Today'
import _ from 'lodash'
import moment from 'moment'
import YearListApi from '../../../Service/MyAccount/YearPicker'

const useStyles = makeStyles({
	option: {
		// fontSize: 15,
		// '& > span': {
		// 	marginRight: 10,
		// 	fontSize: 18,
		// },
	},
	filterYear: {
		// display: 'flex',
		// position: 'relative',
		// transform: 'translateX(-20px)',
		// '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
		// 	padding: 4,
		// 	borderRadius: 46,
		// 	maxHeight: 38,
		// 	background: '#E0EAFF 0% 0% no-repeat padding-box',
		// 	boxShadow: '0px 3px 6px #00000029',
		// 	border: '1px solid #E0EAFF',
		// },

		// '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
		// 	paddingLeft: 34,
		// 	paddingTop: 5,
		// 	fontSize: 16,
		// 	fontFamily: 'poppins',
		// },
		// '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
		// 	minWidth: 45,
		// },
		// '& .MuiInputLabel-outlined': {
		// 	transform: 'translate(15px, 16px) scale(1)',
		// },
		// '& .MuiSvgIcon-root': {
		// 	border: '1px solid #E0EAFF',
		// 	borderRadius: 14,
		// 	width: 18,
		// 	height: 18,
		// 	background: '#E0EAFF 0% 0% no-repeat padding-box',
		// 	boxShadow: '0px 3px 6px #00000029',
		// },
		// '& .MuiAutocomplete-clearIndicator': {
		// 	display: 'none',
		// 	backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/date-icon.svg'})`,
		// 	backgroundPosition: 'right',
		// 	backgroundSize: '100% 100%',
		// 	visibility: 'inherit',
		// },
		display: 'none',
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
})

export default function YearFilter({yearProps}) {
	const classes = useStyles()
	const [year, setYear] = useState({mastLookupValue: '2022'})
	const [yearCode, setyearCode] = useState([])

	useEffect(() => {
		YearListApi.YearList().then(Response => {
			setyearCode(Response.data.data)
		})
	}, [])

	useEffect(() => {
		if (!_.isEmpty(yearCode)) {
			let initialYear = _.find(yearCode, {mastLookupValue: moment().format('YYYY')})
			setYear(initialYear)
			yearProps(initialYear)
		}
	}, [yearCode])

	const onChange = (e, value) => {
		setYear(value)
	}

	return (
		<div className={classes.filterYear}>
			<div className={classes.todayIcon}>
				<TodayIcon />
			</div>
			<Autocomplete
				ListboxProps={{style: {maxHeight: '12rem', fontSize: 16, fontFamily: ['"Poppins"', 'sans-serif'].join(',')}}}
				style={{width: 132, position: 'relative'}}
				options={yearCode}
				disableClearable={true}
				name='yearCode'
				onChange={onChange}
				value={year}
				getOptionLabel={option => option.mastLookupValue || ''}
				//onChange={(e, value) => setYear(value)}
				// getOptionLabel={option => option.label}
				// renderOption={option => <span>{option.label}</span>}
				renderInput={params => (
					<>
						<TextField style={{paddingInline: '8px'}} {...params} variant='outlined'>
							<div className={classes.iconCalender}></div>
						</TextField>
					</>
				)}
			/>
		</div>
	)
}
