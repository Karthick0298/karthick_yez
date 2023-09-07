import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Typography, Button} from '@material-ui/core'
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
	SlotAppointment: {
		display: 'flex',
		flexDirection: 'column',
		// marginInlineStart: 100,
		marginBlock: 20,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		'& .MuiTabs-root': {
			minHeight: 35,
		},
		'& .MuiBox-root-60': {
			padding: 0,
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
		},
		'& .MuiTab-textColorInherit.Mui-selected': {
			background: 'transparent linear-gradient(104deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			color: '#481CA9',
			textTransform: 'capitalize',
			borderRadius: '10px 10px 0px 0px',
			backdropFilter: 'blur(6px)',
		},
		'& .MuiBox-root-49': {
			paddingBlock: 27,
		},
		'& .MuiTab-root': {
			minHeight: 32,
			minWidth: 125,
			textTransform: 'capitalize',
		},
		'& .MuiTab-wrapper': {
			fontWeight: 700,
		},
		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
	},
}))

export default function AppointmentSlots() {
	const classes = useStyles()
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.SlotAppointment}>
			<AppBar position='static'>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'textColor="secondary"
  indicatorColor="secondary">
					<Tab label='Morning' {...a11yProps(0)} />
					<Tab label='Afternoon' {...a11yProps(1)} />
					<Tab label='Evening' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} color='disabled'>
				<Typography>time slots morning</Typography>
			</TabPanel>
			<TabPanel value={value} index={1}>
            <Typography>time slots afternoon</Typography>
			</TabPanel>
         <TabPanel value={value} index={2} color='disabled'>
         <Typography>time slots evening</Typography>
			</TabPanel>
         
		</div>
	)
}
