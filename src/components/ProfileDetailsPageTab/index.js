import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
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
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
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
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		paddingBlock: 15,
	},

	tabContainer: {
		flexGrow: 1,
		width: '100%',

		'& .MuiTab-wrapper': {
			fontWeight: 400,
			textTransform: 'capitalize',
			fontSize: 15,
			color: '#3D4756',
			padding: 0,
			fontFamily: theme.typography.h5.fontFamily,
			[theme.breakpoints.down('sm')]: {
				fontSize: 13,
			},
		},

		'& .MuiAppBar-colorDefault': {
			background: 'transparent',
		},
		'& .MuiTab-root': {
			paddingBlock: 0,
		},

		'& .MuiAppBar-root': {
			boxShadow: 'none',
			paddingInline: 20,
			paddingBlock: 0,
		},
		'& .MuiBox-root': {
			background: 'transparent linear-gradient(130deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			borderRadius: 14,
			padding: 10,
		},
		// '& .MuiTabs-indicator': {
		// 	background: 'none !important',
		// },
		'& .MuiTab-textColorPrimary': {
			background: 'transparent linear-gradient(130deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			borderTopLeftRadius: 12,
			borderTopRightRadius: 12,
			'& .MuiTab-wrapper': {
				color: theme.palette.care.main,
			},
		},
	},
}))

export default function ScrollableTabsButtonAuto() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<div className={classes.tabContainer}>
				<AppBar position='static' color='default'>
					<Tabs
						value={value}
						onChange={handleChange}
						// indicatorColor='primary'
						// textColor='primary'
						variant='scrollable'
						scrollButtons='auto'
						aria-label='scrollable auto tabs example'>
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
		</div>
	)
}
