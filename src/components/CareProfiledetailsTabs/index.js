import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles, AppBar, Tabs, Tab, Typography} from '@material-ui/core'
import Info from './Info'
import FeedBack from './FeedBack'
import QaAnswered from './QaAnswered'
import HealthFeed from './HealthFeed'

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
			color: theme.palette.care.main,
		},
		'& .MuiTabs-indicator': {
			backgroundColor: 'transparent !important',
		},
	},
}))

export default function CareProfiledetailsTabs() {
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
					<Tab label='Feedback' {...a11yProps(1)} />
					<Tab label='Q&A answered' {...a11yProps(2)} />
					<Tab label='Health feed' {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Info />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<FeedBack />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<QaAnswered />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<HealthFeed />
			</TabPanel>
		</div>
	)
}
