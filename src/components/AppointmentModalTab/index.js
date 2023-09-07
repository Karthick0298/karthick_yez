import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import AppointmentSubtab from '../../components/AppointmentSubModalTab'
import AppointmentSlot from '../AppointmentSlotPicker'
import Badge from '@material-ui/core/Badge'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import AvailableAppointmentApi from '../../../Service/AppointmentBooking/AvailableAppointment'
import moment from 'moment'
import _ from 'lodash'
import PhoneIcon from '@material-ui/icons/Phone'

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
	appointmentModal: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('xs')]: {
			padding: 0,
			paddingBlock: 12,
		},
		'& .MuiTabs-flexContainer': {
			alignItems: 'center',
			justifyContent: 'space-between',
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
			},
			[theme.breakpoints.down('sm')]: {
				// flexDirection: 'column',
				// flexWrap: 'wrap',
				// justifyContent: 'space-between',
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
		'& .MuiTabs-root': {
			border: '1px solid #FFFFFF',
			borderRadius: 18,
			alignItems: 'center',
			minHeight: 36,
			background: '#FFFFFF',
		},
		'& .MuiTab-textColorInherit.Mui-selected': {
			backgroundColor: theme.palette.care.main,
			borderRadius: 36,
			textTransform: 'capitalize',
			'& .MuiTab-wrapper': {
				color: '#FFFFFF',
			},
		},
		'& .MuiBox-root-49': {
			paddingBlock: 27,
		},
		'& .MuiTab-root': {
			minHeight: 34,
			minWidth: 125,
			textTransform: 'capitalize',
		},
		'& .MuiTab-textColorInherit': {
			color: '#3D4756',
		},

		'& .MuiTab-wrapper': {
			fontWeight: 500,
			// paddingInline: 10,
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
	appointmentmodalsub: {
		[theme.breakpoints.up('xs')]: {
			paddingInline: 2,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 28,
			paddingBlock: 12,
		},

		'& .MuiTabs-indicator	': {
			backgroundColor: 'transparent !important',
		},
		'& .MuiBox-root': {
			padding: 0,
		},
	},
	OnlineBadge: {
		display: 'flex',
		alignItems: 'center',
		'& span': {
			display: 'block',
			marginInlineStart: 6,
			height: 10,
			width: 10,
			background: '#44b700',
			borderRadius: '50%',
		},
	},
}))

export default function AppontmentModalTab({availableData, tentId, tentUserId, mastTentUuid, tentUserUuid}) {
	const classes = useStyles()
	const [loading, setLoading] = useState(true)
	const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
	const [day, setDay] = useState(moment().format('ddd'))
	const {availState, availSetState, setDateContext, state, value, setValue, time, setTime} = useContextApi()

	useEffect(() => {
		const data = {
			tentUserId: tentUserId ? tentUserId : tentUserUuid,
			tentId: state,
			date: date,
			mode: _.isEqual(value, 0) ? 'direct' : _.isEqual(value, 1) ? 'online' : 'home',
		}

		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				availSetState(res.data.data)
				setLoading(false)
			} else {
				availSetState([])
				setLoading(false)
			}
		}
		const onFailure = err => {
			availSetState([])
			console.log('Error', err)
		}
		setLoading(true)
		AvailableAppointmentApi.AvailableAppointment(data).then(onSuccess, onFailure)
	}, [date, value, state])

	const handleChange = (event, newValue) => {
		setValue(newValue)
		setTime([])
	}

	const onDateChange = value => {
		setDate(moment(new Date(value)).format('YYYY-MM-DD'))
		setDateContext(moment(new Date(value)).format('YYYY-MM-DD'))
		setDay(_.toLower(moment(new Date(value)).format('ddd')))
	}

	return (
		<div className={classes.appointmentModal}>
			<div className={classes.appointmentmodalsub}>
				<AppBar position='static'>
					<Tabs value={value} onChange={handleChange} aria-label='simple tabs example' indicatorColor='secondary'>
						<Tab label='At Clinic' {...a11yProps(0)} />
						<Tab
							label={
								<div className={classes.OnlineBadge}>
									Online <span></span>
									{/* NOTE: Don't remove the empty <span></span>. bcz thats the Online GREEN DOT */}
								</div>
							}
							{...a11yProps(1)}
						/>
						<Tab label='Home Services' {...a11yProps(2)} />
					</Tabs>
				</AppBar>
			</div>
			<TabPanel value={value} index={0}>
				<div>
					<AppointmentSubtab
						availableData={availState}
						tentId={tentId}
						tentUserId={tentUserId}
						mastTentUuid={mastTentUuid}
						tentUserUuid={tentUserUuid}
						availableData1={availState}
						onDateChange={onDateChange}
						currentDate={date}
						currentDay={day}
					/>
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div>
					<AppointmentSubtab
						availableData={availState}
						tentId={tentId}
						tentUserId={tentUserId}
						mastTentUuid={mastTentUuid}
						tentUserUuid={tentUserUuid}
						availableData1={availState}
						onDateChange={onDateChange}
						currentDate={date}
						currentDay={day}
					/>
				</div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div>
					<AppointmentSubtab
						availableData={availState}
						tentId={tentId}
						tentUserId={tentUserId}
						mastTentUuid={mastTentUuid}
						tentUserUuid={tentUserUuid}
						availableData1={availState}
						onDateChange={onDateChange}
						currentDate={date}
						currentDay={day}
					/>
				</div>
			</TabPanel>
		</div>
	)
}
