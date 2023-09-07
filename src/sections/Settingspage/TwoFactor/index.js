import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import ButtonSetting from '../../../components/SettingButton'
function TabPanel(props) {
	const {children, value, index, ...other} = props
	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 9,
		[theme.breakpoints.down('xs')]: {
			padding: 0,
			paddingBlock: 12,
		},
		'& .MuiTabs-flexContainer': {
			alignItems: 'center',
			paddingInline: 11,
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
			},
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
			},
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'row',
			},
		},
		'& .MuiAppBar-colorPrimary': {
			color: '#3D4756',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},

		'& .MuiTab-textColorInherit.Mui-selected': {
			backgroundColor: '#E0EAFF',
			borderRadius: 36,
			color: '#3D4756',
			textTransform: 'capitalize',
		},
		'& .MuiBox-root-49': {
			paddingBlock: 27,
		},
		'& .MuiBox-root': {
			padding: 0,
		},
		'& .MuiTab-root': {
			minHeight: 32,
			minWidth: 125,
			textTransform: 'capitalize',
		},
		'& .MuiTab-textColorInherit': {
			color: '#0050F9',
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
	listFlow: {
		display: 'flex',
		flexDirection: 'column',
		gap: 19,
		padding: 11,
		'& .MuiTypography-h5': {
			color: '#3D4756',
			[theme.breakpoints.down('xs')]: {
				fontSize: 12,
			},
		},
	},
	twoFactor: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		paddingInlineEnd: 100,
		paddingBlock: 17,
		marginInline: 22,
		'& .MuiTypography-h5': {
			color: '#000',
			fontSize: 16,
		},
		'& .MuiTypography-h6': {
			color: '#3D4756',
			fontSize: 14,
			[theme.breakpoints.down('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
		[theme.breakpoints.down('xs')]: {
			paddingInlineEnd: 0,
			marginInline: 11,
		},
	},
	CodeScanner: {
		paddingInline: 12,
	},
	tabTwo: {
		padding: 12,
	},
	TextField: {
		paddingBlock: 13,
		'& .MuiOutlinedInput-input': {
			padding: 8,
		},
	},
	AllContent: {
		padding: 12,
		'& .MuiTypography-h5': {
			padding: 4,
		},
	},
}))
export default function TwoFactor() {
	const classes = useStyles()
	const [value, setValue] = useState(0)
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<div className={classes.twoFactor}>
				<Typography variant='h5'>Setup two-factor authentication</Typography>
				<Typography variant='h6'>
					Two-factor authentication adds an extra layer of security to your account. In addition to your username and password, you’ll need to enter a
					code that LFYnGO sends to you via text or an app on your phone.
				</Typography>
			</div>
			<div className={classes.root}>
				<AppBar position='static'>
					<Tabs value={value} onChange={handleChange} aria-label='simple tabs example' indicatorColor='primary'>
						<Tab label='Set up using an app' {...a11yProps(0)} />
						<Tab label='Set up using SMS' {...a11yProps(1)} />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0} color='disabled'>
					<div className={classes.listFlow}>
						<Typography variant='h5'>1. Install Google Authenticator on your phone.</Typography>
						<Typography variant='h5'>2. Open the Google Authenticator app.</Typography>
						<Typography variant='h5'>3. Tab Tap menu, then tap Set up account, then tap Scan a barcode.</Typography>
						<Typography variant='h5'>4. Your phone will now be in a scanning mode. When you are in this mode, scan the QR code below:</Typography>
					</div>
					<div className={classes.CodeScanner}>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/qrcode.png' alt='Picture of the author' width={90} height={90} />
						<Typography variant='h5'>Once you have scanned the QR code, enter the 6-digit code below:</Typography>
					</div>
					<div className={classes.AllContent}>
						<Typography variant='h5'>Token</Typography>
						<div className={classes.TextField}>
							<TextField id='outlined-secondary' variant='outlined' color='secondary' />
						</div>
						<ButtonSetting>submit</ButtonSetting>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className={classes.tabTwo}>
						<Typography variant='h5'>Enter your mobile number to which we shall send you a token. </Typography>
					</div>
					<div className={classes.AllContent}>
						<Typography variant='h5'>Mobile number</Typography>
						<div className={classes.TextField}>
							<TextField id='outlined-secondary' variant='outlined' color='secondary' />
						</div>
						<ButtonSetting>continue</ButtonSetting>
					</div>
					<div className={classes.AllContent}>
						<Typography variant='h5'>Token</Typography>
						<div className={classes.TextField}>
							<TextField id='outlined-secondary' variant='outlined' color='secondary' />
						</div>
						<ButtonSetting>submit</ButtonSetting>
					</div>
				</TabPanel>
			</div>
		</>
	)
}
