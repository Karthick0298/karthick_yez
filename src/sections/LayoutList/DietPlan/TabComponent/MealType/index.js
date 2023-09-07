import React from 'react'
import {Grid, Tabs, Tab, Box, Typography, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
function TabPanel(props) {
	const {children, value, index, ...other} = props
	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<Box sx={{p: 3}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}
const useStyles = makeStyles(theme => ({
	tabWrapper: {
		'& .MuiTab-root': {
			fontFamily: 'Poppins',
			textTransform: 'capitalize',
			fontSize: 14,
			minWidth: 128,
		},
		'& .MuiTabs-flexContainer': {
			marginInline: 10,
			background: '#fff',
			borderRadius: 4,
			justifyContent: 'space-around',
			[theme.breakpoints.down('sm')]: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			},
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			},
			[theme.breakpoints.up('lg')]: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			},
		},
		'& .MuiTab-root.Mui-selected': {
			color: '#fff',
			marginBlock: 4,
			borderRadius: 8,
			background: '#3E4754 0% 0% no-repeat padding-box',
		},
		'& .MuiTabs-indicator': {
			left: '0px !important',
			width: '0px !important',
		},
		'& .MuiButtonBase-root': {
			minHeight: '30px !important',
			padding: 12,
		},
		[theme.breakpoints.down('1360')]: {
			'& .MuiButtonBase-root': {
				minWidth: 'auto',
			},
		},
	},
}))
const TabComponent = ({typeModetabValue, handleModeTypeTab}) => {
	const classes = useStyles()

	return (
		<Grid container xs={12} sm={12} md={12} lg={12} alignItems={'center'}>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<section className={classes.tabWrapper}>
					<Tabs value={typeModetabValue} onChange={handleModeTypeTab} aria-label='mode-Type'>
						<Tab value='Morning' label='Morning' {...a11yProps(0)} />
						<Tab value='Mid-morning' label='Mid-morning' {...a11yProps(1)} />
						<Tab value='Lunch' label='Lunch' {...a11yProps(2)} />
						<Tab value='Evening' label='Evening' {...a11yProps(3)} />
						<Tab value='Dinner' label='Dinner' {...a11yProps(4)} />
						<Tab value='Night-snacks' label='Night-snacks' {...a11yProps(5)} />
					</Tabs>
				</section>
			</Grid>
		</Grid>
	)
}

export default TabComponent
