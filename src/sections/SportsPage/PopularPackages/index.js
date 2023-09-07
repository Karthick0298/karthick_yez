import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Typography} from '@material-ui/core'
// import Button from '../../../../components/GradientButton'
import Button from '../../../components/GradientButton'
// import Store from '../../../../sections/Common/LabProduct'
import Store from '../Store'
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
	root: {
		display: 'flex',
		flexDirection: 'column',
		marginInline: 100,
		paddingBlockEnd: 32,
		[theme.breakpoints.down('sm')]: {
			// display: 'none',
			marginInline: 10,
		},
		'& .MuiTabs-root': {
			minHeight: 35,
		},
		'& .MuiBox-root-60': {
			padding: 0,
		},
		'& .MuiTabs-flexContainer': {
			justifyContent: 'space-evenly',
			marginInlineEnd: 64,
			marginBlockStart: 18,
			alignItems: 'center',
		},
		'& .MuiAppBar-colorPrimary': {
			color: '#3D4756',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},
		'& .MuiSvgIcon-root': {
			// width: 42,
			// height: 42,
			// border: '1px solid #475677',
			// borderRadius: '100%',
		},
		'& .MuiTab-textColorInherit.Mui-selected': {
			background: '#EF5618',
			color: '#fff',
			textTransform: 'capitalize',
			borderRadius: 36,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiBox-root-49': {
			paddingBlock: 27,
		},
		'& .MuiTab-root': {
			minHeight: 32,
			minWidth: 125,
			textTransform: 'capitalize',
			fontFamily: 'poppins',
			border: '1px solid #EF5618',
			borderRadius: 36,
			color: '#EF5618',
		},
		'& .MuiTab-wrapper': {
			fontWeight: 400,
		},
		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
	},
	ordercarddetails: {
		flex: 10,
		cursor: 'pointer',
		padding: 12,
		background: '#FFFFFF 0% 0% no-repeat padding-box',
		boxShadow: '0px 0px 6px #36353530',
		border: '1px solid #FFFFFF',
		borderRadius: 7,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},

		'& .MuiButton-text': {
			textTransform: 'capitalize',
		},
		'& .MuiTypography-body1': {
			fontFamily: 'Poppins',
			fontSize: 14,
			fontStyle: 'normal',
			fontWeight: 500,
		},
	},
	header: {
		marginTop: 40,
		[theme.breakpoints.down('xs')]: {
			marginBlock: 10,
		},
		[theme.breakpoints.down('sm')]: {
			marginBlock: 20,
		},
		'& .MuiTypography-h3': {
			fontSize: 28,
			color: theme.palette.sports.main,
		},
		'& .MuiTypography-h5': {
			fontSize: 20,
			fontWeight: 400,
			paddingTop: 4,
			color: theme.palette.sports.main,
			fontFamily: 'Source Sans Pro',
		},
	},
	findMoreBtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function PopularPackages() {
	const classes = useStyles()
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<Typography variant='h3'>
					Popular <span style={{fontWeight: '600'}}>Packages</span>
				</Typography>
				<Typography variant='h5'>Exploring top rated packages</Typography>
			</div>
			<div style={{display: 'none'}}>
				<AppBar position='static'>
					<Tabs value={value} onChange={handleChange} aria-label='simple tabs example' indicatorColor='primary'>
						<Tab label='Popular packages' {...a11yProps(0)} />
						<Tab label='Diabeties' {...a11yProps(1)} />
						<Tab label='Full Body Checkup' {...a11yProps(2)} />
						<Tab label='Womans Health' {...a11yProps(3)} />
						<Tab label='Healthy Men' {...a11yProps(4)} />
						<Tab label='Vitamin Tests' {...a11yProps(5)} />
						<Button findMorebtn={classes.findMoreBtn}>View All</Button>
					</Tabs>
				</AppBar>
			</div>
			<TabPanel value={value} index={0} color='disabled'>
				<Store />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Store />
			</TabPanel>
			<TabPanel value={value} index={2} color='disabled'>
				<Store />
			</TabPanel>
			<TabPanel value={value} index={3} color='disabled'>
				<Store />
			</TabPanel>
			<TabPanel value={value} index={4} color='disabled'>
				<Store />
			</TabPanel>
			<TabPanel value={value} index={5} color='disabled'>
				<Store />
			</TabPanel>
		</div>
	)
}
