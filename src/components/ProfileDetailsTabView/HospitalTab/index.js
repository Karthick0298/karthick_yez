import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Typography} from '@material-ui/core'
import Image from 'next/image'
import healtharticle from '../../../model/ProfileCardTabView/Hospital/HealthArticle/data'
import {Card, CardContent, CardActions} from '@material-ui/core'

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
	rootCont: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		'& .MuiTabs-root': {
			minHeight: 35,
		},
		'& .MuiBox-root': {
			padding: 0,
		},
		'& .MuiTabs-flexContainer': {
			gap: 39,
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
			background: 'transparent linear-gradient(104deg, #7047EA 0%, #7047EA 100%) 0% 0% no-repeat padding-box !important',
			color: '#fff!important',
			textTransform: 'capitalize',
			borderRadius: '36px !important',
			backdropFilter: 'blur(6px)',
		},
		'& .MuiBox-root': {
			paddingBlock: 27,
		},
		'& .MuiTab-root': {
			minHeight: 32,
			minWidth: 125,
			textTransform: 'capitalize',
			fontFamily: 'poppins',
			border: '1px solid #7047EA',
			borderRadius: 36,
			color: '#7047EA',
		},
		'& .MuiTab-wrapper': {
			fontWeight: '400 !important',
		},
		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
	},
	flexContain: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 24,
	},
	mainCard: {},
}))

export default function ProfileDetailstabView() {
	const classes = useStyles()
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.rootCont}>
			<AppBar position='static'>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example' indicatorColor='primary'>
					<Tab label='Health Article' {...a11yProps(0)} />
					<Tab label='Health Tips' {...a11yProps(1)} />
					<Tab label='Health Quiz' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} color='disabled'>
				<div className={classes.flexContain}>
					{healtharticle.map(article => (
						<div key={article.id} className={classes.mainCard}>
							<Card>
								{/* <Image src={article.image} width={125} Height={25} alt='doctor' layout='fill' /> */}
								<Typography>{article.generalcontent}</Typography>
							</Card>
						</div>
					))}
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}></TabPanel>
			<TabPanel value={value} index={2} color='disabled'></TabPanel>
		</div>
	)
}
