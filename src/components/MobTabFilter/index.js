import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Budjet from '../../components/MobBudgetFilter'
import Availability from '../../components/MobAvailabilityFilter'
import Gender from '../../components/MobGenderFilter'
import Location from '../../components/MobLocationFilter'
import Distance from '../../components/MobDistanceFilter'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<div>
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
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(theme => ({
	filtermain: {
		display: 'flex',
		flexDirection: 'column',
		// marginInlineStart: 100,
		marginBlock: 20,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'row',
			gap: 32,
			marginBlockStart: 0,
			marginBlockEnd: 0,
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
		'& .MuiTabs-root': {
			maxWidth: 120,
		},
		'& .MuiBox-root-60': {
			padding: 0,
		},
		'& .MuiAppBar-root': {
			width: 'auto',
		},
		'& .MuiAppBar-colorPrimary': {
			color: '#3D4756',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},
		'& .MuiSvgIcon-root': {
			width: 42,
			height: 42,
			border: '1px solid #475677',
			borderRadius: '100%',
			[theme.breakpoints.down('xs')]: {
				width: 14,
				height: 14,
			},
		},
		'& .MuiTab-textColorInherit.Mui-selected': {
			background: 'none',
			color: '#481CA9',
			textTransform: 'capitalize',
			// borderRadius: '10px 10px 0px 0px',
			backdropFilter: 'blur(6px)',
		},
		'& .MuiBox-root-49': {
			paddingBlock: 27,
		},
		'& .MuiTab-root': {
			minHeight: 66,
			minWidth: 125,
			textTransform: 'capitalize',
			backgroundColor: '#999',
			color: '#fff',
		},
		'& .MuiTab-wrapper': {
			fontWeight: 700,
		},
		'& .MuiPaper-root': {},
		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
	},
}))

export default function ProfilefiltersTab() {
	const classes = useStyles()
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.filtermain}>
			<AppBar position='static'>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example' orientation='vertical' indicatorColor='primary'>
					<Tab label='Budget' {...a11yProps(0)} />
					<Tab label='Availability' {...a11yProps(1)} />
					<Tab label='Gender' {...a11yProps(2)} />
					<Tab label='Location' {...a11yProps(3)} />
					<Tab label='Distance' {...a11yProps(4)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} color=''>
				<Budjet />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Availability />
			</TabPanel>
			<TabPanel value={value} index={2} color='disabled'>
				<Gender />
			</TabPanel>
			<TabPanel value={value} index={3} color='disabled'>
				<Location />
			</TabPanel>
			<TabPanel value={value} index={4} color='disabled'>
				<Distance />
			</TabPanel>
		</div>
	)
}
