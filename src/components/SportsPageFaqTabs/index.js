import {makeStyles} from '@material-ui/core/styles'
import {useState} from 'react'
import Button from '../GradientButton'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTabs-root': {
			minHeight: 35,
		},
		'& .MuiBox-root-60': {
			padding: 0,
		},
		'& .MuiTabs-flexContainer': {
			// justifyContent: 'space-evenly',
			gap: 18,
			// marginInlineEnd: 64,
			marginBlockStart: 28,
			alignItems: 'center',
		},
		'& .MuiAppBar-colorPrimary': {
			color: '#3D4756',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},

		'& .MuiTab-textColorInherit.Mui-selected': {
			background: '#EF5618',
			color: '#FFFFFF',
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
			paddingInline: 18,
		},
		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
	},
}))

export default function FaqTabs() {
	const classes = useStyles()
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	function a11yProps(index) {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		}
	}

	return (
		<div className={classes.root}>
			<Tabs value={value} onChange={handleChange} aria-label='simple tabs example' indicatorColor='primary'>
				<Tab label='Coaches' {...a11yProps(0)} />
				<Tab label='Venue/Club' {...a11yProps(1)} />
				<Tab label='Home Service' {...a11yProps(2)} />
				<Tab label='Courts' {...a11yProps(3)} />
				<Tab label='Package' {...a11yProps(4)} />
				<Tab label='Consult' {...a11yProps(5)} />
			</Tabs>
		</div>
	)
}
