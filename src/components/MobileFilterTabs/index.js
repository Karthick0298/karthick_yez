/* eslint-disable react/jsx-key */
import React from 'react'
import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import LocationList from '../../model/LocationList'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Button from '../../../src/components/GradientButton'
import Slider from '@material-ui/core/Slider'
import appointmentModeList from '../../model/AppointementModeFilter'
import DistanceList from '../../model/DistanceList'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && (
				<div style={{backgroundColor: '', paddingBlock: 42, paddingInline: 12}}>
					<Typography>{children}</Typography>
				</div>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		// border: `1px solid grey`,
		display: 'flex',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		backgroundColor: props => props.backgroundColor,
		paddingBlockStart: 14,
		paddingBlockEnd: 10,
		'& .MuiTabs-scroller': {
			'& .MuiTabs-indicator': {
				backgroundColor: props => props.mainColor,
			},
		},
		[theme.breakpoints.down('sm')]: {
			minWidth: 130,
			maxWidth: 130,
		},
		[theme.breakpoints.up('sm')]: {
			minWidth: 170,
			maxWidth: 170,
		},

		borderTopRightRadius: 10,
		'& .MuiTab-textColorInherit.Mui-selected': {
			backgroundColor: '#FFFFFF',
			border: 'none',
		},
		'& .PrivateTabIndicator': {
			backgroundColor: '#FFFFFF',
		},
		'& .MuiTab-wrapper': {
			// backgroundColor: 'green',
			flexDirection: 'unset',
			justifyContent: 'unset',
			fontSize: 15,
			textTransform: 'none',
			color: '#2C3E50',
			fontWeight: 400,
		},
	},
	checkBoxInput: {
		// display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-body1': {
			fontSize: 15,
			color: '#2C3E50',
		},
		'& .MuiSvgIcon-root': {
			width: 19,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: props => props.mainColor,
		},
	},
	genderfilter: {
		'& .MuiTypography-body1': {
			color: '#2C3E50',
			fontSize: 15,
		},
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: props => props.mainColor,
		},
		'& .MuiSvgIcon-root': {
			width: 17,
		},
	},
	buttonContainer: {
		textAlign: 'center',
		paddingBlock: 10,
	},
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},

	availabilityfilter: {
		'& .MuiTypography-body1': {
			color: '#2C3E50',
			fontSize: 15,
		},
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: props => props.mainColor,
		},
		'& .MuiSvgIcon-root': {
			width: 17,
		},
	},
	budgetfilter: {
		[theme.breakpoints.down('sm')]: {
			width: 170,
		},
		[theme.breakpoints.up('sm')]: {
			width: 220,
		},
		'& .MuiSlider-root': {
			color: props => props.mainColor,
		},
		'& .MuiSlider-valueLabel': {
			color: props => props.mainColor,
		},
		'& .MuiSlider-markLabel': {
			fontSize: theme.typography.body1.fontSize,
			fontWeight: theme.typography.h2.fontWeight,
		},
	},
	slideLabel: {
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiTypography-body1': {
			color: '#2C3E50',
			fontSize: 17,
			fontWeight: 600,
		},
	},
}))

export default function VerticalTabs(props) {
	const classes = useStyles(props)
	const {
		searchFilters,
		setSearchFilters,
		clearFilters,
		setClearFilters,
		budgetValue,
		appointmentChecked,
		setAppointmentChecked,
		setOffset,
		locationFilters,
	} = props
	const {defaultValue, min, max, step} = budgetValue
	const {sortByFilter, sortByIndex, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter} = searchFilters
	const {availabilityDays, currentLocation} = useContextApi()
	const [value, setValue] = React.useState(0)
	// Budget state
	const [getBudget, setGetBudget] = useState(null)
	// Appointment State
	const [getAppointment, setGetAppointment] = useState('')
	// Availability State
	const [getAvailability, setGetAvailability] = useState('all')
	// Gender State
	const [getGender, setGetGender] = useState('')
	// Location State
	const [locationOptions, setLocationOptions] = useState([])
	const [getLocation, setGetLocation] = useState(`${11.018888988757334}${','}${77.00694826760964}`)

	// Distance State
	const [distanceChecked, setDistanceChecked] = useState(new Array(DistanceList?.length).fill(false))
	const [getDistance, setGetDistance] = useState(null)

	useEffect(() => {
		setLocationOptions(locationFilters)
	}, [locationFilters])

	// Appointment Filter onChange
	const handleAppointmentFilter = (event, position) => {
		const updatedCheckedState = appointmentChecked?.map((item, index) => (index === position ? !item : item))
		setAppointmentChecked(updatedCheckedState)
		const values = updatedCheckedState?.map((data, index) => {
			if (data === true) {
				return appointmentModeList[index]?.value
			} else {
				return ''
			}
		})
		setOffset(1)
		setGetAppointment(_.toString(_.compact(values)))
	}

	// Availability Filter onChange
	const handleAvailabilityFilter = event => {
		setOffset(1)
		setGetAvailability(event.target.value)
	}

	// Gender Filter onChange
	const handleGenderFilter = event => {
		setOffset(1)
		setGetGender(event.target.value)
	}

	// Location Filter onChange
	const handleLocationFilter = (event, position) => {
		const updatedCheckedState = locationOptions?.map((data, index) => (index === position ? {...data, checked: !data?.checked} : {...data}))
		setLocationOptions(updatedCheckedState)
		let updatedLocations = updatedCheckedState?.map(data => (data?.checked === true ? data?.latlon : ''))
		let popLocation = _.compact(updatedLocations)?.pop()
		let getLocations = popLocation !== null && popLocation !== undefined ? popLocation : ''
		setGetLocation(getLocations)
	}

	// Distance Filter onChange
	const handleDistanceFilter = (event, position) => {
		const updatedCheckedState = distanceChecked?.map((item, index) => (index === position ? !item : item))
		setDistanceChecked(updatedCheckedState)
		const values = updatedCheckedState?.map((data, index) => {
			if (data === true) {
				return DistanceList[index]?.value
			} else {
				return ''
			}
		})
		setOffset(1)
		let popDistance = _.compact(values)?.pop()
		let getDistance = popDistance !== undefined ? popDistance : null
		setGetDistance(getDistance)
	}

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	// Apply all filters
	const handleSearchFilters = () => {
		setOffset(1)
		setSearchFilters({
			...searchFilters,
			sortByIndex: 0,
			sortByFilter: '',
			budgetFilter: getBudget,
			appointmentMode: getAppointment,
			availabilityFilter: getAvailability,
			genderFilter: getGender,
			locationFilter: getLocation,
			distanceFilter: getDistance,
		})
	}

	return (
		<div>
			<div className={classes.root}>
				<Tabs orientation='vertical' value={value} onChange={handleChange} aria-label='Vertical tabs example' className={classes.tabs}>
					<Tab label='Budget' {...a11yProps(0)} />
					<Tab label='Appointment Mode' {...a11yProps(1)} />
					<Tab label='Availablity' {...a11yProps(2)} />
					<Tab label='Gender' {...a11yProps(3)} />
					<Tab label='Location' {...a11yProps(4)} />
					<Tab label='Distance' {...a11yProps(5)} />
				</Tabs>

				{/* Budget Filter */}
				<TabPanel value={value} index={0}>
					<div className={classes.budgetfilter}>
						<Slider
							defaultValue={defaultValue}
							getAriaValueText={value => setGetBudget(value)}
							aria-labelledby='range-slider'
							step={step}
							valueLabelDisplay='auto'
							min={min}
							max={max}
						/>
						<section className={classes.slideLabel}>
							<Typography>{`₹ ${min}`}</Typography>
							<Typography>{`₹ ${max}`}</Typography>
						</section>
					</div>
				</TabPanel>

				{/* Appointment Mode Filter */}
				<TabPanel value={value} index={1}>
					<div className={classes.checkBoxInput}>
						{appointmentModeList?.map((data, idx) => (
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											color='primary'
											name={data?.name}
											id={data?.name}
											checked={appointmentChecked[idx]}
											onChange={event => handleAppointmentFilter(event, idx)}
										/>
									}
									label={data?.label}
								/>
							</FormGroup>
						))}
					</div>
				</TabPanel>

				{/* Availability Mode Filter */}
				<TabPanel value={value} index={2}>
					<div className={classes.availabilityfilter}>
						<FormControl component='fieldset'>
							<RadioGroup value={getAvailability} onChange={handleAvailabilityFilter}>
								<FormControlLabel value={availabilityDays?.today} control={<Radio />} label='Today' />
								<FormControlLabel value={availabilityDays?.tomorrow} control={<Radio />} label='Tomorrow' />
								<FormControlLabel value={availabilityDays?.allDays} control={<Radio />} label='Available in next 7 days' />
							</RadioGroup>
						</FormControl>
					</div>
				</TabPanel>

				{/* Gender Filter */}
				<TabPanel value={value} index={3}>
					<div className={classes.genderfilter}>
						<FormControl component='fieldset'>
							<RadioGroup value={getGender} onChange={handleGenderFilter}>
								<FormControlLabel value='M' control={<Radio />} label='Male' />
								<FormControlLabel value='F' control={<Radio />} label='Female' />
								<FormControlLabel value='' control={<Radio />} label='No preference' />
							</RadioGroup>
						</FormControl>
					</div>
				</TabPanel>

				{/* Location Filter */}
				<TabPanel value={value} index={4}>
					<div className={classes.locationFilter}>
						{locationOptions?.map((data, index) => (
							<div key={data?.latlon} className={classes.checkBoxInput}>
								<Checkbox
									name={data?.locality}
									id={data?.locality}
									value={data?.latlon}
									checked={data?.checked}
									onChange={event => handleLocationFilter(event, index)}
									color='primary'
									inputProps={{'aria-label': 'secondary checkbox'}}
								/>
								<Typography>{data?.locality}</Typography>
							</div>
						))}
					</div>
				</TabPanel>

				{/* Distance Filter*/}
				<TabPanel value={value} index={5}>
					<div className={classes.checkBoxInput}>
						{DistanceList?.map((data, index) => (
							<>
								{/* <div key={data?.id}>
									<Checkbox
										name={data?.name}
										id={data?.name}
										value={data?.value}
										checked={distanceChecked[index]}
										onChange={event => handleDistanceFilter(event, index)}
										color='primary'
										inputProps={{'aria-label': 'secondary checkbox'}}
									/>
									<Typography>{data?.label} </Typography>
								</div> */}
								<FormGroup>
									<FormControlLabel
										key={data?.id}
										control={
											<Checkbox
												name={data?.name}
												id={data?.name}
												value={data?.value}
												checked={distanceChecked[index]}
												onChange={event => handleDistanceFilter(event, index)}
												color='primary'
											/>
										}
										label={data?.label}
									/>
								</FormGroup>
							</>
						))}
					</div>
				</TabPanel>
			</div>

			{/* Apply Filter Btn*/}
			<div className={classes.buttonContainer}>
				<Button onClick={handleSearchFilters} findMorebtn={props.buttonColor}>
					Apply
				</Button>
			</div>
		</div>
	)
}
