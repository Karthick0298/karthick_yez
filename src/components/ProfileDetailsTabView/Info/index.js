import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Divider, Typography} from '@material-ui/core'
import data from '../../../model/ProfileCardTabView/Info/data'
import Button from '../../../components/GradientButton'
import {mergeClasses} from '@material-ui/styles'
// import TabFilter from '../../../components/ProfileDetailsTabFilter'
import getInfoApi from '../../../../Service/ProfileList/ProfileDetailsTab/Info'

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
		paddingBlock: 16,
		gap: 36,
		[theme.breakpoints.down('xs')]: {
			// display: 'none',
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
			color: '#fff !important',
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
			fontWeight: 400,
		},
		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
	},
	mainContent: {
		paddingBlock: 22,
		paddingInline: 12,
	},
	head: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingInline: 28,
		'& .MuiTypography-h4': {
			fontSize: 18,
			fontStyle: 'normal',
			color: theme.palette.care.main,
		},
		'& .MuiTypography-h5': {
			fontSize: 18,
			color: theme.palette.paragraph.main,
		},
	},
	addressCont: {
		display: 'flex',
		gap: 12,
		'& .MuiTypography-h5': {
			fontSize: 15,
			color: theme.palette.paragraph.main,
		},
	},
	timeDate: {
		display: 'flex',
		gap: 12,
		paddingInline: 28,
		'& .MuiTypography-h5': {
			fontSize: 15,
			color: theme.palette.paragraph.main,
		},
	},
	endCont: {
		display: 'flex',
		alignItems: 'end',
		justifyContent: 'space-between',
	},
	listAdd: {
		paddingBlock: 4,
		display: 'flex',
		flexDirection: 'column',
		gap: 0,
		'& .MuiTypography-h5': {
			fontSize: 15,
			color: theme.palette.paragraph.main,
		},
	},
	listNum: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
	},
	test: {},
	pricepart: {
		display: 'flex',
		gap: 4,
		alignItems: 'center',
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function ProfileDetailstabView(props) {
	const {mastTentUuid, tentUserUuid} = props
	const classes = useStyles()
	const [value, setValue] = useState(0)
	const [infoData, setInfoData] = useState([])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	// get info tab data api
	const getInfo = useCallback(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setInfoData(res?.data?.data?.establishmentTimings)
			} else {
				setInfoData([])
			}
		}
		const onFailure = err => {
			console.log('info tab data', err)
		}
		getInfoApi.getInfo(mastTentUuid, tentUserUuid).then(onSuccess, onFailure)
	}, [mastTentUuid, tentUserUuid])

	useEffect(() => {
		getInfo()
	}, [getInfo])

	return (
		<div className={classes.rootCont}>
			{/* <AppBar position='static'>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'  indicatorColor="primary">
					<Tab label='General' {...a11yProps(0)} />
					<Tab label='Septoplasty' {...a11yProps(1)} />
					<Tab label='Trachestomy' {...a11yProps(2)} />
					<div className={classes.test}></div>
					<TabFilter />
				</Tabs>
			</AppBar> */}
			{/* <TabPanel value={value} index={0} color='disabled'> */}
			{infoData?.map(data => (
				<>
					<div key={data?.tentUserProfileEstablishmentId} className={classes.mainContent}>
						<div className={classes.head}>
							<Typography variant='h4'>{data?.establishmentName}</Typography>
							<Typography variant='h5' className={classes.pricepart}>
								<span
									style={{
										fontWeight: 'bolder',
										fontFamily: 'Roboto',
									}}>
									&#8377;
								</span>
								{data?.consultantionFees}
							</Typography>
						</div>
						<div className={classes.addressCont}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/location.svg' width={16} height={6} />
							<div className={classes.listAdd}>
								<Typography variant='h5'>{data?.namehospital || 'SRM Hospital'}</Typography>
								<Typography variant='h5'>{data?.street || 'Civil Aerodrome Post'}</Typography>
								<Typography variant='h5'>{data?.city || 'Coimbatore, Tamilnadu – 641014.'}</Typography>
							</div>
						</div>
						<div className={classes.endCont}>
							<div className={classes.listNum}>
								<div className={classes.addressCont}>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/phone.svg' width={16} height={16} />
									<Typography variant='h5'>{data?.number || '+91 9876543210'}</Typography>
								</div>
								<div className={classes.timeDate}>
									<Typography variant='h5'>{data?.startday || 'Mon - Sat'}:</Typography>
									<Typography variant='h5'>{data?.startdate || '6.00PM to 9.00AM'}</Typography>
								</div>
							</div>
							<div>
								<Button findMorebtn={classes.findMorebtn}>Book Appointment</Button>
							</div>
						</div>
					</div>
					<Divider />
				</>
			))}
		</div>
	)
}
