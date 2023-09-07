import React, {useEffect, useState, useCallback} from 'react'
import {useRouter} from 'next/router'
import {makeStyles, Typography, IconButton, Divider, Popover, FormGroup, FormControlLabel, Checkbox, Modal} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardMonth from '../../../../components/CardMonth'
import YearPicker from '../../../../components/Yearpicker'
import appointmentApi from '../../../../../Service/MyAccount/AppointmentList'
import _ from 'lodash'
import moment from 'moment'
import Skeleton from '@material-ui/lab/Skeleton'
import axios from 'axios'
import Image from 'next/image'
import Detail from '../UserAppointmentDetails/index'
import AppointmentListYearApi from '../../../../../Service/MyAccount/AppointmentListYear'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import InfiniteScroll from 'react-infinite-scroll-component'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'

import {BeatLoader} from 'react-spinners'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import AddIcon from '@mui/icons-material/Add'
import AppointmentsFilter from '../../../../model/DashboardFilters/Appointments'
import TimePeriodFilter from '../../../../model/DashboardFilters/TimePeriod'
import secureLocalStorage from 'react-secure-storage'
import BookAppointment from '../BookAppointment'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<div p={3}>
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
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		position: 'absolute',
		zIndex: '9',
		padding: 8,
		transform: 'translate(-17px,20px)',
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	mainContain: {
		// display: 'none',
	},
	layoutAlign: {
		display: 'flex',
		gap: 20,
		paddingInline: 15,
		padding: 7,
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			gap: 8,
			paddingInline: 8,
		},
		'& .MuiTypography-h5': {
			color: '#3D4756',
			fontWeight: 500,
		},
	},
	headLine: {
		whiteSpace: 'nowrap',
		display: 'flex',
		justifyContent: 'center',
		paddingInline: '4%',
		paddingBlock: 7,
		alignItems: 'center',
		'& .MuiTypography-h5': {
			fontSize: 15,
			fontWeight: 400,
			color: '#70707080',
			padding: 2,
			paddingInline: 32,
		},
	},
	calender: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 0.5,
		flexDirection: 'column',
		padding: 9,
		borderRadius: 20,
		background: '#7C60DC',
		boxShadow: '0px 0px 9px #00000029',
		borderRadius: 20,
		opacity: 1,
		'& .MuiTypography-h5': {
			color: '#F2F2F2',
			fontWeight: 500,
		},
		[theme.breakpoints.down('xs')]: {
			maxHeight: 70,
		},
		[theme.breakpoints.up('sm')]: {
			maxHeight: 70,
		},
	},
	mainBox: {
		display: 'flex',
		width: '100%',
		display: 'flex',
		flex: 10,
		padding: 12,
		justifyContent: 'space-between',
		background: '#EEEAFB 0% 0% no-repeat padding-box',
		boxShadow: 'inset 0px 0px 10px #00000024, 0px 0px 8px #FFFFFF29',
		border: '1px solid #FFFFFF',
		borderRadius: 7,
		opacity: 1,
		'&:hover': {
			background: '#7047ea2e',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			alignItems: 'inherit',
			flexDirection: 'column',
			gap: 8,
		},
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'column',
		},
		'& .MuiTypography-h4': {
			color: '#585858c9',
			fontWeight: 400,
			background: '#EEEAFB',
			borderRadius: 8,
			paddingInline: 8,
			display: 'flex',
			alignItems: 'center',
			maxHeight: 34,
			fontSize: theme.typography.h5.fontSize,
			fontStyle: 'normal',
			boxShadow: '0px 0px 13px #00000026',
			maxWidth: 206,
			position: 'relative',
			top: 10,
		},
	},
	mainBoxTwo: {
		display: 'flex',
		width: '100%',
		display: 'flex',
		flex: 10,
		padding: 12,
		backdropFilter: 'blur(30px)',
		justifyContent: 'space-between',
		background: 'transparent linear-gradient(95deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF',
		borderRadius: 7,
		opacity: 1,
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			alignItems: 'inherit',
			flexDirection: 'column',
			gap: 8,
		},
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'column',
		},
		'& .MuiTypography-h4': {
			color: '#585858c9',
			fontWeight: 400,
			background: 'transparent linear-gradient(95deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
			borderRadius: 8,
			paddingInline: 8,
			display: 'flex',
			alignItems: 'center',
			maxHeight: 34,
			fontSize: theme.typography.h5.fontSize,
			fontStyle: 'normal',
			boxShadow: '0px 0px 13px #00000026',
			maxWidth: 206,
			position: 'relative',
			top: 10,
		},
	},
	doctorList: {
		display: 'flex',
		flexDirection: 'column',
		gap: 5,
		justifyContent: 'space-between',
		'& .MuiTypography-h5': {
			fontSize: 15,
			fontWeight: 500,
			fontStyle: 'normal',
			color: '#000000a6',
			textTransform: 'capitalize',
		},
		'& .MuiTypography-h6': {
			fontSize: 14,
			fontWeight: 500,
			color: '#707070',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'column',
			gap: 10,
		},
	},
	dateList: {
		display: 'flex',
		flexDirection: 'row',
		// padding: 3,
		gap: 24,
		'& .MuiTypography-h6': {
			fontSize: 14,
			fontWeight: 400,
			color: '#707070D4 !important',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			justifyContent: 'space-between',
			gap: 0,
		},
	},
	subList: {
		display: 'flex',
		'& .MuiTypography-h6': {
			fontSize: theme.typography.h5.fontSize,
			color: '#585858c9',
		},
	},
	SpecialCare: {
		display: 'flex',
	},
	buttonStyle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'& .MuiButton-outlined': {
			border: '1px solid #7C60DC',
		},
		'& .MuiTypography-h6': {
			fontSize: 14,
			textTransform: 'none',
			color: '#7C60DC',
		},
	},
	lineBorder: {
		borderColor: '#7070701c',
		width: '100%',
	},
	buttonStyleTwo: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		gap: 20,
		'& .MuiButton-outlined': {
			border: '1px solid #00B592',
			[theme.breakpoints.down('xs')]: {
				padding: '6px 1px',
			},
		},
		'& .MuiButton-containedPrimary': {
			color: '#fff',
			backgroundColor: 'AliceBlue',
			boxShadow: 'none',

			'& .MuiTypography-h6': {
				color: '#000',
			},
			[theme.breakpoints.down('xs')]: {
				padding: '8px 8px',
			},
		},
		'& .MuiTypography-h6': {
			fontSize: 14,
			color: '#00B592',
			textTransform: 'none',
			[theme.breakpoints.down('xs')]: {
				fontSize: 11,
			},
		},
	},
	ordercardsubposition: {
		display: 'flex',
		gap: 21,
		paddingBlock: 14,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'row',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	Picker: {
		// display: 'flex',
		// paddingInline: 11,
		display: 'none',
	},
	dataNil: {
		display: 'flex',
		justifyContent: 'center',
	},
	background: {
		// backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoAppointment.svg'})`,
		// backgroundPosition: 'right',
		// backgroundAttachment: 'fixed',
		// backgroundSize: 'cover',
	},
	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		// margin: 60,
		'& .MuiTypography-subtitle1': {
			color: theme.palette.paragraph.main,
			fontWeight: 600,
		},
	},
	cancelled: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h3': {
			fontSize: theme.typography.h5.fontSize,
			color: '#E22C23',
			// background: '#FCEAEA',
			padding: '4px 6px',
			minWidth: 136,
			borderRadius: 8,
			fontWeight: 100,
		},
	},
	active: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h3': {
			fontSize: theme.typography.h5.fontSize,
			color: '#E22C23',
			background: '#00ff1314',
			padding: '4px 6px',
			minWidth: 136,
			borderRadius: 8,
			fontWeight: 100,
			display: 'flex',
			justifyContent: 'center',
		},
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 15,
		paddingTop: 20,
		'& .MuiAppBar-colorPrimary': {
			color: '#3D4756',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},

		'& .MuiTab-textColorInherit.Mui-selected': {
			backgroundColor: '#E0EAFF',
			borderRadius: 36,
			color: '#1976d2',
			textTransform: 'capitalize',
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
	headerWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingInline: 14,
		alignItems: 'center',
	},
	iconContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: 15,
	},
	filterWrapper: {
		backgroundColor: '#E0EAFF',
		width: 40,
		height: 40,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '0.5px solid #3D4756',
		borderRadius: 12,
		position: 'relative',
		cursor: 'pointer',
	},
	icon: {
		'& .MuiSvgIcon-root': {
			fontSize: '2.5rem',
			display: 'flex',
			border: '1px solid #000',
			borderRadius: 10,
			cursor: 'pointer',
		},
		'& .MuiIconButton-root': {
			'&:hover': {
				borderRadius: 10,
			},
		},
	},
	countWrapper: {
		background: '#36770C',
		color: '#ffffff',
		border: '2px solid #E0EAFF',
		fontSize: 10,
		width: '50%',
		height: '50%',
		position: 'absolute',
		transform: 'translate(9px,-9px)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 9,
		borderRadius: '100%',
	},
	popOverWrapper: {
		'& .MuiFormControlLabel-root': {
			marginRight: 0,
		},
		'& .MuiTypography-body1': {
			lineHeight: 1,
			color: '#000000',
			fontSize: 14,
			fontWeight: 600,
		},
		'& .MuiPaper-root': {
			marginBlockStart: 6,
			borderRadius: 10,
			paddingBlock: 12,
			backgroundColor: '#E0EAFF',
			border: '0.5px solid #3D4756',
		},
		'& .MuiSvgIcon-root': {
			fontSize: 20,
		},
	},
	checkboxWrapper: {
		display: 'flex',
		flexDirection: 'column',
		paddingInline: 28,
	},
	filterCategory: {
		color: '#545454',
		fontSize: 15,
		fontFamily: theme.typography.h5.fontFamily,
	},
	statusBar: {
		display: 'flex',
		alignItems: 'center',
	},
}))

export default function UpcomingDetails(props) {
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const router = useRouter()
	const {practiceName, custUuid, tentUuid} = useAuth()
	const [value, setValue] = useState(0)
	const [params, setParams] = useState({
		period: 'all',
		// year: null,
		offset: 0,
		limit: 10,
	})
	const [noMore, setNoMore] = useState(true)
	const [listYear, setListYear] = useState([])
	const [loading, setLoading] = useState(false)
	const [count, setCount] = useState(0)
	const [viewFilter, setViewFilter] = useState(null)
	const [selectedFilters, setSelectedFilters] = useState([])
	const [isUpcoming, setIsUpcoming] = useState(false)
	const [totalChecked, setTotalChecked] = useState(0)

	// Set Total Selected Count
	useEffect(() => {
		setTotalChecked(selectedFilters?.length)
	}, [selectedFilters])
	// Appointment Filter State
	const [appointmentFilter, setAppointmentFilter] = useState([])
	console.log('appointment', appointmentFilter)
	useEffect(() => {
		let tempArr = AppointmentsFilter?.map(item => ({...item, checked: false}))
		setAppointmentFilter(tempArr)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [AppointmentsFilter])

	// const [timePeriodFilter, setTimePeriodFilter] = useState([])
	// useEffect(() => {
	// 	let tempArr = TimePeriodFilter.map(item => ({...item, checked: false}))
	// 	setTimePeriodFilter(tempArr)
	// }, [TimePeriodFilter])

	// open filter
	const openFilter = event => {
		setViewFilter(event.currentTarget)
	}

	// close filter
	const closeFilter = () => {
		setViewFilter(null)
	}
	const open = Boolean(viewFilter)
	const id = open ? 'filters' : undefined

	useEffect(() => {
		let selectedApp = []
		// let selectedPeriod = []
		_.map(appointmentFilter, item => {
			if (item?.checked) {
				selectedApp.push(item?.value)
			}
		})
		// _.map(timePeriodFilter, item => {
		// 	if (item?.checked) {
		// 		selectedPeriod.push(item?.value)
		// 	}
		// })
		setSelectedFilters([...selectedApp])
	}, [appointmentFilter])

	const handleAppointmentFilter = (event, index) => {
		let tempArr = _.map(appointmentFilter, (item, idx) => (_.isEqual(idx, index) ? {...item, checked: !item?.checked} : {...item}))
		setAppointmentFilter(tempArr)
		setViewFilter(null)
	}

	// Setting isUpcoming True
	// useEffect(() => {
	// 	let upcoming = selectedFilters?.indexOf(AppointmentsFilter?.[0]?.value) > -1
	// 	setIsUpcoming(upcoming)
	// }, [selectedFilters])

	// const handleTimePeriodFilter = (event, index) => {
	// 	let tempArr = _.map(timePeriodFilter, (item, idx) => (_.isEqual(idx, index) ? {...item, checked: !item?.checked} : {...item}))
	// 	setTimePeriodFilter(tempArr)
	// }

	// const {currency} = router.query
	const handleChange = (event, newValue) => {
		setValue(newValue)
		setListYear([])
	}

	// Handling Toggling btn Menu listYear and Menu listYear Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	// Year filter with pagination

	const yearProps = uu => {
		// setParams(prevState => ({
		// 	...prevState,
		// 	custId: userId,
		// 	period: value === 0 ? 'upcoming' : 'past',
		// 	year: uu?.mastLookupValue,
		// 	limit: 10,
		// 	offset: 0,
		// }))
	}
	// const sortedArray = listYear.sort((a, b) => new moment(a.scheduledOn).format('YYYYMMDD') - new moment(b.scheduledOn).format('YYYYMMDD'))

	// Set params for get Appointments
	useEffect(() => {
		if (selectedFilters) {
			setNoMore(true)
			setListYear([])
			setParams({
				tentId: tentUuid,
				custId: custUuid,
				period: selectedFilters?.length > 1 ? 'all' : selectedFilters?.[0] || 'all',
				limit: 10,
				offset: 0,
			})
		}
	}, [custUuid, selectedFilters, tentUuid])

	// Get Api
	useEffect(() => {
		if (params?.period && custUuid) {
			setLoading(true)
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					setLoading(false)
					const data = res?.data?.data
					if (selectedFilters) {
						if (params?.offset > 0) {
							setListYear(prevState => [...listYear, ...data])
						} else {
							setListYear(data)
						}
					} else {
						setListYear(prevState => [...listYear, ...data])
					}
					setCount(res?.data?.totalCount)
				}
			}
			const onFailure = err => {
				setLoading(false)
			}
			AppointmentListYearApi.AppointmentListYear({...params, custId: custUuid}).then(onSuccess, onFailure)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params, custUuid])

	const fetchData = async () => {
		const TotalReached = listYear?.length >= count
		if (TotalReached) {
			setNoMore(false)
		}
		if (!TotalReached) {
			setNoMore(true)
			setParams({...params, offset: params?.offset + 1})
		}
	}
	const [openApptBooking, setOpenApptBooking] = useState(false)
	const handleClose = () => {
		setOpenApptBooking(false)
	}
	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.root}>
				<section className={classes.headerWrapper}>
					<div>
						<Typography style={{color: '#000000', fontSize: 20, fontWeight: 500}} variant='h5'>
							Appointments
						</Typography>
					</div>
					<div className={classes.iconContainer}>
						<div className={classes.icon}>
							<IconButton onClick={() => setOpenApptBooking(true)}>
								<AddIcon style={{color: '#000'}} />
							</IconButton>
						</div>
						<div aria-describedby={id} onClick={openFilter} className={classes.filterWrapper}>
							<span className={classes.countWrapper}>{totalChecked}</span>
							<FilterListRoundedIcon style={{color: '#E22C24'}} />
						</div>
					</div>
				</section>
				<div className={classes.mainContain}>
					<div className={classes.headLine}>
						<hr className={classes.lineBorder} />
						{/* <Typography variant='h5'>Upcoming</Typography> */}
						<hr className={classes.lineBorder} />
					</div>
				</div>
				<div className={classes.Picker}>
					<YearPicker yearProps={yearProps} />
				</div>
				{loading && _.isEmpty(listYear) ? (
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<BeatLoader size={12} margin={2} color={'#24A0ED'} />
					</div>
				) : _.isEmpty(listYear) ? (
					<div className={classes.position}>
						<Image
							alt='no appointments pic'
							src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/NoAppointments.svg'
							width={424}
							height={424}
						/>
					</div>
				) : (
					<InfiniteScroll
						dataLength={listYear?.length}
						next={fetchData}
						hasMore={noMore}
						loader={
							loading ? (
								<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
									<BeatLoader size={12} margin={2} color={'#24A0ED'} />
								</div>
							) : (
								<div></div>
							)
						}
						height={'66vh'}>
						<>
							{!_.isEmpty(listYear) &&
								listYear?.map(item => (
									<div
										key={item?.appointmentUuid}
										className={classes.layoutAlign}
										onClick={() => {
											router.push({
												pathname: '/myaccount/userappointmentdetails',
												query: {uuid: item?.appointmentUuid},
											})
										}}>
										<div className={classes.calender}>
											<Typography variant='h5'>{moment(new Date(item?.scheduledOn)).format('MMM')}</Typography>
											<Typography variant='h5'>{moment(new Date(item?.scheduledOn)).format('DD')}</Typography>
										</div>
										<div className={classes.mainBox}>
											<div className={classes.subBox}>
												<div className={classes.doctorList}>
													<Typography variant='h5'>{item?.custName}</Typography>
													<Typography variant='h5'>
														<span style={{fontFamily: 'Poppins', fontWeight: 600}}>Specialist : </span>
														{item?.tentUserSalutation}. {item?.tentUserFirstName ? item?.tentUserFirstName : item?.custName}{' '}
													</Typography>
													<Typography variant='h6'>
														<span style={{fontFamily: 'Poppins', fontWeight: 600}}>
															{item?.specialization || item?.appointmentSpecialityName ? 'Specialization : ' : ''}
														</span>
														{item?.specialization ? item?.specialization : item?.appointmentSpecialityName ? item?.appointmentSpecialityName : ''}
													</Typography>
												</div>
												<div className={classes.dateList}>
													<div className={classes.subList}>
														<Typography variant='h6'>{moment(new Date(item?.scheduledOn)).format('ddd')},</Typography>
														<Typography variant='h6' style={{position: 'relative', left: '4px'}}>
															{moment(item?.scheduledTime, 'HH:mm:ss').format('hh:mm A')}
														</Typography>
													</div>
													{/* <div className={classes.SpecialCare}>
														<Typography variant='h6'>{item?.tentName}</Typography>
													</div> */}
												</div>
												<div className={classes.buttonStyle}></div>
											</div>
											<div className={classes.statusBar}>
												<div className={classes.cancelled} key={item?.appointmentUuid}>
													<Typography variant='h3'>
														Status: <span style={{color: item?.colorCode}}>{_.capitalize(item?.appointmentModeStatus)}</span>
													</Typography>
												</div>
												{/* <Button variant='outlined' color='primary'>
													<Typography variant='h6'>View details</Typography>
												</Button> */}
											</div>
										</div>
									</div>
								))}
						</>
					</InfiniteScroll>
				)}
				{/* </TabPanel> */}

				{/* <TabPanel value={value} index={1}>
					<div className={classes.headLine}>
						<hr className={classes.lineBoder} />
						<hr className={classes.lineBoder} />
					</div>
					<div className={classes.Picker}>
						<YearPicker yearProps={yearProps} />
					</div>
					{loading && _.isEmpty(listYear) ? (
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<BeatLoader size={12} margin={2} color={'#24A0ED'} />
						</div>
					) : _.isEmpty(listYear) ? (
						<div className={classes.position}>
							<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoAppointment.svg' width={424} height={424} />
							<Typography variant='subtitle1'>No Appointments Yet</Typography>
						</div>
					) : (
						<InfiniteScroll
							dataLength={listYear?.length}
							next={fetchData}
							hasMore={noMore}
							loader={
								loading ? (
									<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
										<BeatLoader size={12} margin={2} color={'#24A0ED'} />
									</div>
								) : (
									<div></div>
								)
							}
							height={'66vh'}>
							<div className={classes.mainContain}>
								<>
									{!_.isEmpty(listYear) &&
										listYear?.map(item => (
											<div key={item?.appointmentUuid} className={classes.layoutAlign}>
												<CardMonth>
													<Typography variant='h5'>{moment(new Date(item?.scheduledOn)).format('MMM')}</Typography>
													<Typography variant='h5'>{moment(new Date(item?.scheduledOn)).format('DD')}</Typography>
												</CardMonth>
												<div className={classes.mainBoxTwo}>
													<div className={classes.subBox}>
														<div className={classes.doctorList}>
															<Typography variant='h5'>{item?.tentUserFirstName}, </Typography>
															<Typography variant='h6'>{item?.specialization}</Typography>
														</div>
														<div className={classes.dateList}>
															<div className={classes.subList}>
																<Typography variant='h6'>{moment(new Date(item?.scheduledOn)).format('ddd')},</Typography>
																<Typography variant='h6' style={{position: 'relative', left: '4px'}}>
																	{moment(new Date(item?.scheduledOn)).format('hh:mm a')}
																</Typography>
															</div>
															<div className={classes.SpecialCare}>
																<Typography variant='h6'>{item?.tentName}</Typography>
															</div>
														</div>
													</div>
													<div
														className={classes.buttonStyleTwo}
														onClick={() =>
															router.push({
																pathname: '/myaccount/userappointmentdetails',
																query: {uuid: item?.appointmentUuid},
															})
														}>
														<Button variant='outlined' color='primary'>
															<Typography variant='h6'>Book again</Typography>
														</Button>
														<Button variant='contained' color='primary'>
															<Typography variant='h6'>View details</Typography>
														</Button>
													</div>
												</div>
											</div>
										))}
								</>
							</div>
						</InfiniteScroll>
					)}
				</TabPanel> */}
			</div>
			{/* <Modal open={true} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					Text in a modal
				</Typography>
				<Typography id='modal-modal-description' sx={{mt: 2}}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Modal> */}
			<BookAppointment open={openApptBooking} handleClose={handleClose} setAppointmentFilter={setAppointmentFilter} />
			<Popover
				className={classes.popOverWrapper}
				id={id}
				open={open}
				anchorEl={viewFilter}
				onClose={closeFilter}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}>
				<section className={classes.checkboxWrapper}>
					<Typography className={classes.filterCategory} variant='h5'>
						Appointments
					</Typography>
					{appointmentFilter?.map((data, index) => (
						<FormControlLabel
							key={data?.id}
							control={
								<Checkbox
									style={{color: '#000000', fontSize: 20}}
									name={data?.label}
									id={data?.label}
									value={data?.value}
									checked={data?.checked}
									onChange={event => handleAppointmentFilter(event, index)}
								/>
							}
							label={data?.label}
						/>
					))}
				</section>
			</Popover>
		</>
	)
}
