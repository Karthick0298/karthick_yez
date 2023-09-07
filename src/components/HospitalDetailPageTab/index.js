import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles, AppBar, Tabs, Tab, Typography} from '@material-ui/core'
import HospitalDetailDoctors from '../HospitalDetailDoctors'
import HospitalInfo from '../HospitalInfo'
import Autocomplete from '../AutoComplete'
import HospitalFeedBack from '../HospitalFeedBack'
import HospitalQA from '../HospitalQA'
import HospitalsHealthFeed from '../HospitalsHealthFeed'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}>
			{value === index && (
				<div
					style={{
						background: 'transparent linear-gradient(123deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
						border: '1px solid #FFFFFF80',
						padding: 10,
						borderRadius: 14,
						boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
					}}>
					{children}
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
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: '100%',
		[theme.breakpoints.up('xs')]: {
			marginBlockStart: 14,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlockStart: 16,
		},
		[theme.breakpoints.up('md')]: {
			marginBlockStart: 20,
		},

		'& .MuiTab-root': {
			textTransform: 'capitalize',
			borderTopLeftRadius: 12,
			borderTopRightRadius: 12,
			color: '#3D4756',
			fontFamily: 'poppins',
			fontWeight: 400,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
		'& .Mui-selected': {
			background: 'transparent linear-gradient(123deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			color: theme.palette.care.main,
		},
		'& .MuiTabs-indicator': {
			backgroundColor: 'transparent !important',
		},
	},
	autoCompleteContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	autoCompleteSpacing: {
		// paddingInline: 8,
	},
	feedbackAutocomplete: {
		minWidth: 200,
	},
}))

const searchFeedbackOptions = [{title: 'Most Helpful'}, {title: 'Recent'}]
const searchQAOptions = [{title: 'Most Helpful'}, {title: 'Recent'}]

export default function HospitalDetailPageTab() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static' elevation={0} color='transparent'>
				<Tabs
					value={value}
					onChange={handleChange}
					variant='scrollable'
					scrollButtons='on'
					indicatorColor='primary'
					textColor='primary'
					aria-label='scrollable force tabs example'>
					<Tab label='Info' {...a11yProps(0)} />
					<Tab label={`Doctors(${'45'})`} {...a11yProps(1)} />
					<Tab label='Feedback' {...a11yProps(2)} />
					<Tab label='Q&A answered' {...a11yProps(3)} />
					<Tab label='Health feed' {...a11yProps(4)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<HospitalInfo />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<HospitalDetailDoctors />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div className={classes.autoCompleteContainer}>
					<Autocomplete
						AutoCompleteStyle={classes.feedbackAutocomplete}
						ListboxProps={{style: {maxHeight: '12rem', color: 'green', fontSize: 11, fontFamily: ['"Poppins"', 'sans-serif'].join(',')}}}
						disableClearable={true}
						size={'small'}
						id={'SortBy'}
						name={'SortBy'}
						placeholder='Sort by'
						options={searchFeedbackOptions}
						getOptionLabel={option => option.title}
					/>
				</div>
				<HospitalFeedBack />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<div className={classes.autoCompleteContainer}>
					<Autocomplete
						AutoCompleteStyle={classes.feedbackAutocomplete}
						ListboxProps={{style: {maxHeight: '12rem', color: 'green', fontSize: 11, fontFamily: ['"Poppins"', 'sans-serif'].join(',')}}}
						disableClearable={true}
						size={'small'}
						id={'SortIssue'}
						name={'SortIssue'}
						placeholder='Search issue'
						options={searchQAOptions}
						getOptionLabel={option => option.title}
					/>
				</div>
				<HospitalQA />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<HospitalsHealthFeed />
			</TabPanel>
		</div>
	)
}
