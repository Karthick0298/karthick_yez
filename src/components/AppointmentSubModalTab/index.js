import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import AppointmentSlot from '../AppointmentSlotPicker'
import tentListAPi from '../../../Service/AppointmentBooking/TentList'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import {SyncLoader} from 'react-spinners'
import Image from 'next/image'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && <div>{children}</div>}
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
	appointmentsubmodal: {
		display: 'flex',
		flexDirection: 'column',
		paddingBlock: 12,
		[theme.breakpoints.down('xs')]: {
			padding: 0,
			paddingBlock: 12,
		},
		'& .MuiTabs-flexContainer': {
			alignItems: 'center',
			flexDirection: 'row',
			gap: 12,
			paddingInline: 10,
			[theme.breakpoints.down('xs')]: {},
			[theme.breakpoints.down('sm')]: {},
			[theme.breakpoints.up('sm')]: {},
		},
		'& .MuiAppBar-colorPrimary': {
			color: '#3D4756',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},

		'& .MuiTab-textColorInherit.Mui-selected': {
			// backgroundColor: 'yellow',
			// borderRadius: 36,
			// color: '#ffffff',
			// textTransform: 'capitalize',
			// border: '1px solid #7047EA',
		},
		'& .MuiBox-root-49': {
			paddingBlock: 27,
		},
		'& .MuiTab-root': {
			minHeight: 32,
			minWidth: 125,
			textTransform: 'capitalize',
			padding: 0,
		},
		'& .MuiTabs-root': {
			border: '0 !important',
			borderRadius: '0 !important',
			background: 'none !important',
			alignItems: 'center',
			minHeight: 36,
			gap: 36,
			display: 'flex',
		},
		'& .MuiTab-textColorInherit': {
			color: '#3D4756',
			border: '1px solid #7047EA',
			borderRadius: 15,
		},
		'& .MuiTab-wrapper': {
			fontWeight: 500,
			paddingInline: 10,
			color: theme.palette.care.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 15,
			},
		},

		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
		'& .MuiBox-root': {
			padding: 40,
			marginBlock: 12,
		},
	},
	ordercardsubposition: {
		display: 'flex',
		gap: 21,
		paddingBlock: 14,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	ordercarddetails1: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
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
	borderradiusposition: {
		background: '#E0EAFF 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000029',
		opacity: 1,
		borderRadius: 12,
	},
	textcontent1position: {
		display: 'flex',
		flexDirection: 'column',
		gap: 6,
	},
	textcontent3position: {
		color: 'white',
		paddingInline: 17,
		borderRadius: 9,
		paddingBlock: 8,
	},
	borderbottomleftline: {
		borderLeft: '3px solid #bfbfbf',
		paddingInline: 12,
	},
	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		gap: 64,
	},
}))

export default function AppointmentModalSubRTab({
	availableData,
	tentId,
	tentUserId,
	mastTentUuid,
	tentUserUuid,
	availableData1,
	onDateChange,
	currentDate,
	currentDay,
}) {
	const classes = useStyles()
	const initialTabIndex = 0
	const [value, setValue] = useState(initialTabIndex)
	const [loading, setLoading] = useState(true)
	const {tabList, setTabList, setState, time, setTime} = useContextApi()

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const tabApi = (tentUserId, tentUserUuid) => {
		setLoading(true)
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				setTabList(res?.data?.data?.data)
				value === 0 && setState(res?.data?.data?.data?.[0]?.master_tenant_uuid)
			}
		}
		const onFailure = err => {
			console.log('Error', err)
			setLoading(false)
		}
		tentListAPi.TentList(tentUserId, tentUserUuid).then(onSuccess, onFailure)
	}

	useEffect(() => {
		tabApi(tentUserId, tentUserUuid)
	}, [value])

	return (
		<div className={classes.appointmentsubmodal}>
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
					indicatorColor='primary'
					scrollButtons='auto'
					variant='scrollable'>
					{tabList?.map((item, index) => {
						return (
							<Tab
								key={item?.mast_tent_type_uuid}
								index={index}
								label={item?.practice_name}
								// id={}
								ariaControls={`simple-tabpanel-${index}`}
								{...a11yProps(index)}
								onClick={e => setState(item?.master_tenant_uuid)}
							/>
						)
					})}
				</Tabs>
			</AppBar>
			{loading ? (
				<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 42, minHeight: 356}}>
					<SyncLoader size={15} margin={2} color={'#7C60DC'} />
				</div>
			) : _.isEmpty(tabList) ? (
				<div className={classes.position}>
					<Image alt='No doctor' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noDoctor.svg' width={350} height={350} />
					<Typography variant='subtitle1'>No Doctors Available now</Typography>
				</div>
			) : (
				<>
					{!_.isEmpty(tabList) &&
						tabList?.map((item, index) => (
							<TabPanel key={item?.mast_tent_type_uuid} value={value} index={index} color='disabled'>
								<AppointmentSlot
									onDateChange={onDateChange}
									currentDate={currentDate}
									availableData={availableData}
									tentId={tentId}
									tentUserId={tentUserId}
									mastTentUuid={mastTentUuid}
									tentUserUuid={tentUserUuid}
									availableData1={availableData1}
									currentDay={currentDay}
								/>
							</TabPanel>
						))}
				</>
			)}
		</div>
	)
}
