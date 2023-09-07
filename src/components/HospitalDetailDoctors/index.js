import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles, TextField} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Autocomplete from '../AutoComplete'
import SpecialityDoctorCard from '../SpecialityDoctorCard'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && <div>{children}</div>}
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
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		'& .MuiAppBar-root': {
			background: 'transparent',
			boxShadow: 'none',
		},
		'& .MuiTab-wrapper': {
			color: theme.palette.care.main,
			border: `1px solid ${theme.palette.care.main}`,
			borderRadius: 20,
			[theme.breakpoints.down('sm')]: {
				paddingInline: 6,
			},
		},
		'& .MuiTab-textColorInherit.Mui-selected': {
			color: '#ffffff',
			'& .MuiTab-wrapper': {
				color: '#ffffff',
				background: theme.palette.care.backgroundImage,
			},
		},
	},
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
	},
	inputWrapper: {
		position: 'absolute',
		right: 10,
		alignSelf: 'end',
	},

	feedbackAutocomplete: {
		minWidth: 200,
	},
}))

const searchSpecialityOptions = [
	{title: 'Cardiology', year: 1994},
	{title: 'Psychology', year: 1972},
	{title: 'Pulmonologist', year: 1974},
	{title: 'Anesthesiology', year: 2008},
]

const DentistSampleData = [
	{
		id: 1,
		doctorName: 'Karthick',
		specialization: 'Dentist',
		online: true,
		onlineFees: '299',
		clinic: true,
		clinicFees: '300',
		HomeVisit: true,
		homeFees: '699',
		availablity: true,
	},
	{
		id: 2,
		doctorName: 'Anand',
		specialization: 'Dentist',
		online: true,
		onlineFees: '299',
		clinic: false,
		clinicFees: null,
		HomeVisit: false,
		homeFees: null,
		availablity: false,
	},
	{
		id: 3,
		doctorName: 'Ranjith',
		specialization: 'Dentist',
		online: true,
		onlineFees: '299',
		clinic: true,
		clinicFees: '300',
		HomeVisit: false,
		homeFees: null,
		availablity: true,
	},
]

const OrthopedistSampleData = [
	{
		id: 11,
		doctorName: 'Dinesh Kumar',
		specialization: 'Orthopedist',
		online: true,
		onlineFees: '299',
		clinic: true,
		clinicFees: '300',
		HomeVisit: true,
		homeFees: '699',
		availablity: true,
	},
	{
		id: 12,
		doctorName: 'Anand',
		specialization: 'Orthopedist',
		online: true,
		onlineFees: '299',
		clinic: false,
		clinicFees: null,
		HomeVisit: false,
		homeFees: null,
		availablity: true,
	},
	{
		id: 13,
		doctorName: 'Ranjith',
		specialization: 'Orthopedist',
		online: true,
		onlineFees: '299',
		clinic: true,
		clinicFees: '300',
		HomeVisit: false,
		homeFees: null,
		availablity: false,
	},
]

const generalDoctorsData = DentistSampleData.concat(OrthopedistSampleData)

export default function HospitalDetailDoctors() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	console.log(generalDoctorsData)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appBar}>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
					<Tab label='General' {...a11yProps(0)} />
					<Tab label='Dentist' {...a11yProps(1)} />
					<Tab label='Orthopedist' {...a11yProps(2)} />
				</Tabs>
				<div className={classes.inputWrapper}>
					<Autocomplete
						AutoCompleteStyle={classes.feedbackAutocomplete}
						disableClearable={true}
						size={'small'}
						id={'SearchIssues'}
						name={'SearchIssues'}
						placeholder='Search Speciality'
						options={searchSpecialityOptions}
						getOptionLabel={option => option.title}
					/>
				</div>
			</AppBar>
			<TabPanel value={value} index={0}>
				<SpecialityDoctorCard searchData={generalDoctorsData} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<SpecialityDoctorCard searchData={DentistSampleData} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<SpecialityDoctorCard searchData={OrthopedistSampleData} />
			</TabPanel>
		</div>
	)
}
