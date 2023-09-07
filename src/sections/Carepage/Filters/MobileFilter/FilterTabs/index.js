import React from 'react'
import {useState} from 'react'

import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import Checkbox from '@material-ui/core/Checkbox'
import LocationList from '../../../../../model/LocationList'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Button from '../../../../../components/GradientButton'
// import useContextApi from '../../../../../../lib/Utils/hooks/useContextApi'
import Slider from '@material-ui/core/Slider'
import useContextApi from '../../../../../../lib/Utils/hooks/useContextApi'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && (
				<div style={{backgroundColor: '', paddingBlock: 20, paddingInline: 12}}>
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
		backgroundColor: '#d7ccf6',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 120,
		},

		borderTopRightRadius: 14,
		'& .MuiTab-textColorInherit.Mui-selected': {
			backgroundColor: '#FFFFFF',
			border: 'none',
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
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-body1': {
			fontSize: 15,
			color: '#2C3E50',
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: '#7047ea',
		},
	},
	genderfilter: {
		'& .MuiTypography-body1': {
			color: '#2C3E50',
			fontSize: 15,
		},
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: '#7047ea',
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
		background: theme.palette.care.buttonBackgroundImage,
	},

	availabilityfilter: {
		'& .MuiTypography-body1': {
			color: '#2C3E50',
			fontSize: 15,
		},
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: '#7047ea',
		},
		'& .MuiSvgIcon-root': {
			width: 17,
		},
	},
	budgetfilter: {
		width: 150,
		'& .MuiSlider-root': {
			color: '#7047ea',
		},
		'& .MuiSlider-valueLabel': {
			color: '#7047EA !important',
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
	const classes = useStyles()
	const {toggleDrawer} = props
	const {setBudgetFilter, setAppointmentMode, availabilityDays, setAvailabilityFilter, genderFilter, setGenderFilter} = useContextApi()

	const [value, setValue] = React.useState(0)
	const [getBudgetFilter, setGetBudgetFilter] = useState(null)
	const [appointmentFiler, setAppointmentFilter] = useState({
		is_direct: false,
		is_online: false,
		is_home: false,
	})
	const {is_direct, is_online, is_home} = appointmentFiler
	const [getAvailability, setGetAvailability] = useState('all')
	const [getGender, setGetGender] = useState('')

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	// Appointment mode filter
	const getAppointmentMode = event => {
		setAppointmentFilter(prevState => ({...prevState, [event.target.name]: event.target.checked}))
	}

	// Availability mode filter
	const getAvailabilityFilter = event => {
		setGetAvailability(event.target.value)
	}

	// Gender Filter
	const getGenderFilter = event => {
		setGetGender(event.target.value)
	}

	// Apply Filter
	const handleSearchFilter = () => {
		setBudgetFilter(getBudgetFilter)
		setAppointmentMode(appointmentFiler)
		setAvailabilityFilter(getAvailability)
		setGenderFilter(getGender)
		toggleDrawer('bottom', false)
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
							defaultValue={150}
							getAriaValueText={value => setGetBudgetFilter(value)}
							aria-labelledby='range-slider'
							step={50}
							valueLabelDisplay='auto'
							min={0}
							max={500}
							valueLabelDisplay='on'
						/>
						<section className={classes.slideLabel}>
							<Typography>{`₹ 0`}</Typography>
							<Typography>{`₹ 500`}</Typography>
						</section>
					</div>
				</TabPanel>

				{/* Appointment Mode Filter */}
				<TabPanel value={value} index={1}>
					<div className={classes.checkBoxInput}>
						<Checkbox
							checked={is_online}
							onChange={getAppointmentMode}
							name='is_online'
							color='primary'
							inputProps={{'aria-label': 'secondary checkbox'}}
						/>
						<Typography>Video Consultation</Typography>
					</div>
					<div className={classes.checkBoxInput}>
						<Checkbox
							checked={is_direct}
							onChange={getAppointmentMode}
							name='is_direct'
							color='primary'
							inputProps={{'aria-label': 'secondary checkbox'}}
						/>
						<Typography>In-Person Consultation</Typography>
					</div>
					<div className={classes.checkBoxInput}>
						<Checkbox
							checked={is_home}
							onChange={getAppointmentMode}
							name='is_home'
							color='primary'
							inputProps={{'aria-label': 'secondary checkbox'}}
						/>
						<Typography>Home Visit </Typography>
					</div>
				</TabPanel>

				{/* Availability Filter */}
				<TabPanel value={value} index={2}>
					<div className={classes.availabilityfilter}>
						<FormControl component='fieldset'>
							<RadioGroup value={getAvailability} onChange={getAvailabilityFilter}>
								<FormControlLabel value={availabilityDays?.today} control={<Radio />} label='Today' />
								<FormControlLabel value={availabilityDays?.tomorrow} control={<Radio />} label='Tomorrow' />
								<FormControlLabel value={availabilityDays?.allDays} control={<Radio />} label='Available in next 7 days' />
							</RadioGroup>
						</FormControl>
					</div>
				</TabPanel>

				{/* Gender Filter*/}
				<TabPanel value={value} index={3}>
					<div className={classes.genderfilter}>
						<FormControl component='fieldset'>
							<RadioGroup value={getGender} onChange={getGenderFilter}>
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
						{LocationList.map(LocationLists => (
							<div key={LocationLists.id} className={classes.checkBoxInput}>
								<Checkbox defaultChecked color='primary' inputProps={{'aria-label': 'secondary checkbox'}} />
								<Typography>{LocationLists.name} </Typography>
							</div>
						))}
					</div>
				</TabPanel>

				{/* Distance Filter */}
				<TabPanel value={value} index={5}>
					<div className={classes.checkBoxInput}>
						<Checkbox defaultChecked color='primary' inputProps={{'aria-label': 'secondary checkbox'}} />
						<Typography>Around 5 km </Typography>
					</div>
					<div className={classes.checkBoxInput}>
						<Checkbox defaultChecked color='primary' inputProps={{'aria-label': 'secondary checkbox'}} />
						<Typography>5 to 10 km </Typography>
					</div>
					<div className={classes.checkBoxInput}>
						<Checkbox defaultChecked color='primary' inputProps={{'aria-label': 'secondary checkbox'}} />
						<Typography>More than 10 km </Typography>
					</div>
				</TabPanel>
			</div>
			<div className={classes.buttonContainer}>
				<Button onClick={handleSearchFilter} findMorebtn={classes.findMorebtn}>
					Apply
				</Button>
			</div>
		</div>
	)
}
