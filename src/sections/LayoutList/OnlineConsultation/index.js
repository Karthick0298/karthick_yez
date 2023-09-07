import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles, IconButton, Popover, FormControlLabel, Checkbox} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import OnlineConsulationDataFree from '../../../model/OnlineConsulationData/Free/data'
import OnlineConsulationDataPaid from '../../../model/OnlineConsulationData/Paid/data'
import CardMonth from '../../../components/CardMonth'
import _ from 'lodash'
import Image from 'next/image'
import paidApi from '../../../../Service/MyAccount/OnlineConsultation/PaidConsultation/index'
import axios from 'axios'
import moment from 'moment'
import ChatButton from '../../../components/Button/ChatButton/index'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import YearFilter from '../../../components/Yearpicker'
import InfiniteScroll from 'react-infinite-scroll-component'
import {BeatLoader} from 'react-spinners'
import onlineConsultationsOptions from '../../../model/DashboardFilters/ConsultationsFilter'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import {useRouter} from 'next/router'
import {ToastContainer, toast} from 'react-toastify'
import consultApi from '../../../../Service/ConsultChat'
import secureLocalStorage from 'react-secure-storage'

// function TabPanel(props) {
// 	const {children, value, index, ...other} = props

// 	return (
// 		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
// 			{value === index && (
// 				<div p={3}>
// 					<Typography>{children}</Typography>
// 				</div>
// 			)}
// 		</div>
// 	)
// }

// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.any.isRequired,
// 	value: PropTypes.any.isRequired,
// }

// function a11yProps(index) {
// 	return {
// 		id: `simple-tab-${index}`,
// 		'aria-controls': `simple-tabpanel-${index}`,
// 	}
// }

const useStyles = makeStyles(theme => ({
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		position: 'absolute',
		zIndex: '9',
		padding: 8,
		transform: 'translate(-17px,20px)',
		// '&:hover': {
		// 	backgroundColor: theme.palette.care.dark,
		// 	'& .MuiSvgIcon-root': {
		// 		fill: '#FFFFFF80',
		// 	},
		// },
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 15,
		paddingBlockStart: 20,
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
	ordercardsubposition: {
		display: 'flex',
		gap: 21,
		paddingBlock: 14,
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
	borderbottomleftline: {
		borderLeft: '3px solid #bfbfbf',
		paddingInline: 12,
	},
	chatusposition: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 6,
	},
	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		// margin: 60,\
		transform: 'translate(0px, 62px)',
		'& .MuiTypography-subtitle1': {
			color: theme.palette.paragraph.main,
			fontWeight: 600,
			paddingBottom: 18,
		},
	},
	year: {
		display: 'none',
	},
	headLine: {
		whiteSpace: 'nowrap',
		display: 'flex',
		justifyContent: 'center',
		paddingInline: '4%',
		paddingBlock: 7,
		alignItems: 'center',
	},
	lineBorder: {
		borderColor: '#7070701c',
		width: '100%',
	},
	headerWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingInline: 40,
		alignItems: 'center',
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
	container: {
		height: '66vh',
		overflow: 'auto',
		paddingInline: 12,
	},
}))

export default function SimpleTabs(props) {
	const router = useRouter()
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const [params, setParams] = useState({
		custId: custUuid,
		offset: 0,
		limit: 10,
		priceStatus: 'free,paid',
	})
	const [noMore, setNoMore] = useState(true)
	const [list, setList] = useState([])
	const [value, setValue] = useState(0)
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState('')
	const [viewFilter, setViewFilter] = useState(null)
	const [selectedFilters, setSelectedFilters] = useState([])
	const [totalChecked, setTotalChecked] = useState(0)
	const [refundDisable, refundSetDisable] = useState(false)
	const [isEmpty, setIsEmpty] = useState([])
	// Set Total Selected Count
	// useEffect(() => {
	// 	setTotalChecked(selectedFilters?.length)
	// }, [selectedFilters])

	// Consultation Filter State
	// const [onlineConsultationsFilter, setOnlineConsultationsFilter] = useState([])

	// useEffect(() => {
	// 	let tempArr = onlineConsultationsOptions.map(item => ({...item, checked: false}))
	// 	setOnlineConsultationsFilter(tempArr)
	// }, [onlineConsultationsOptions])

	// open filter
	// const openFilter = event => {
	// 	setViewFilter(event.currentTarget)
	// }

	// close filter
	// const closeFilter = () => {
	// 	setViewFilter(null)
	// }
	// const open = Boolean(viewFilter)
	// const id = open ? 'filters' : undefined

	// useEffect(() => {
	// 	let selectedConsultations = []
	// 	_.map(onlineConsultationsFilter, item => {
	// 		if (item?.checked) {
	// 			selectedConsultations.push(item?.value)
	// 		}
	// 	})
	// 	setSelectedFilters([...selectedConsultations])
	// }, [onlineConsultationsFilter])

	// Filter onChange
	// const handleConsultationsFilter = (event, index) => {
	// 	let tempArr = []
	// 	if (index === 0) {
	// 		let isSelected = !onlineConsultationsFilter[0]?.checked
	// 		_.map(onlineConsultationsFilter, (item, idx) => {
	// 			tempArr.push({...item, checked: isSelected})
	// 		})
	// 		setOnlineConsultationsFilter(tempArr)
	// 	} else {
	// 		_.map(onlineConsultationsFilter, (item, idx) => {
	// 			if (idx === index) {
	// 				tempArr.push({...item, checked: !item.checked})
	// 			} else if (idx === 0) {
	// 				tempArr.push({...item, checked: false})
	// 			} else {
	// 				tempArr.push({...item})
	// 			}
	// 		})
	// 		let selectedArr = []
	// 		_.map(tempArr, (item, i) => {
	// 			if (i > 0 && item.checked) {
	// 				selectedArr.push({...item})
	// 			}
	// 		})
	// 		// setSelectedOption(selectedArr)
	// 		let allSelected = _.map(tempArr, item => ({...item, checked: true}))
	// 		setOnlineConsultationsFilter(selectedArr.length === 2 ? allSelected : tempArr)
	// 	}
	// }

	// Set params for get online consultations
	// useEffect(() => {
	// 	if (!_.isEmpty(selectedFilters)) {
	// 		setNoMore(true)
	// 		setOnlineConsult([])
	// 		setParams({
	// 			...params,
	// 			priceStatus: _.compact(selectedFilters).toString() || 'free,paid',
	// 			limit: 10,
	// 			offset: 0,
	// 		})
	// 	} else if (_.isEmpty(selectedFilters)) {
	// 		setParams({
	// 			...params,
	// 			priceStatus: 'free,paid',
	// 			limit: 10,
	// 			offset: 0,
	// 		})
	// 	}
	// }, [selectedFilters])

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue)
	// 	setOnlineConsult([])
	// }

	// const yearProps = uu => {
	// 	setParams(prevState => ({...prevState, custId: userId, year: uu?.mastLookupValue, limit: 10, offset: 0}))
	// }

	// const sortedArray = onlineConsultList.sort(
	// 	(a, b) => new moment(a.custSubscriptionPurchasedOn).format('YYYYMMDD') - new moment(b.custSubscriptionPurchasedOn).format('YYYYMMDD')
	// )

	// useEffect(() => {
	// 	if (params?.custId && params?.priceStatus) {
	// 		const onSuccess = res => {
	// 			setLoading(false)
	// 			if (res?.data?.status === 'success') {
	// 				const data = res?.data?.data
	// 				if (selectedFilters) {
	// 					if (params?.offset > 0) {
	// 						setOnlineConsult([...onlineConsultList, ...data])
	// 					} else {
	// 						setOnlineConsult(data)
	// 					}
	// 				} else {
	// 				}
	// 				setCount(res?.data?.totalCount)
	// 			} else {
	// 				setOnlineConsult([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			console.log('Error', err)
	// 			setLoading(false)
	// 		}
	// 		paidApi.OnlineConsultationList({...params}).then(onSuccess, onFailure)
	// 	}
	// }, [params?.limit, params?.offset, params?.priceStatus])

	// // Handling Toggling btn Menu onlineConsultList and Menu onlineConsultList Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	// const fetchData = async () => {
	// 	const TotalReached = onlineConsultList?.length >= count
	// 	if (TotalReached) {
	// 		setNoMore(false)
	// 	}
	// 	if (!TotalReached) {
	// 		setNoMore(true)
	// 		setParams({...params, offset: params?.offset + 1})
	// 	}
	// }
	useEffect(() => {
		setLoading(true)
		if (custUuid) {
			const onSuccess = res => {
				setLoading(false)
				if (res?.data?.status === 'success') {
					setIsEmpty(res?.data?.data)
					let newArr = []
					let active = _.filter(res?.data?.data?.OnlineConsultationDashboard, o => o?.appointmentStage === 'Active Appointment')
					let refund = _.filter(res?.data?.data?.OnlineConsultationDashboard, o => o?.appointmentStage === 'Refund Success Appointment')
					let cancel = _.filter(res?.data?.data?.OnlineConsultationDashboard, o => o?.appointmentStage === 'Cancelled Appointment')
					let refundPolicy = _.filter(res?.data?.data?.OnlineConsultationDashboard, o => o?.appointmentStage === 'Refund Pending Appointment')
					newArr.push({activeStage: active, refundStage: refund, cancelStage: cancel, refundPolicystage: refundPolicy})
					setList(newArr)
				} else {
					setList([])
				}
			}
			const onFailure = err => {
				console.log('Error', err)
				setLoading(false)
			}
			paidApi.OnlineConsultationList(custUuid).then(onSuccess, onFailure)
		}
	}, [custUuid])

	console.log('listluss', !isEmpty)

	// eslint-disable-next-line prettier/prettier
	const refundStage = data => {
		const body = {
			isPartialRefund: false,
			isFullRefund: true,
			paymentId: data,
			subscriptionMode: 'B2C',
		}
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				toast.success(<Typography variant='h5'>Refund Initiated</Typography>)
				refundStatus()
			}
		}
		const onFailure = err => {
			toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
		}
		paidApi.PaymentRefund(body).then(onSuccess, onFailure)
	}

	const refundStatus = () => {
		consultApi
			.refundStatus({custUuid: custUuid})
			.then(response => {
				if (response && response.data && response.data.status === 'success') {
					refundSetDisable(true)
					toast.success(<Typography variant='h5'>Your payment will be refund shortly</Typography>)
				}
			})
			.catch(err => {
				toast.error(<Typography variant='h5'>{err?.response?.data?.message}</Typography>)
				console.log(err, 'Error occured in the refund policy')
			})
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
							Online Consulations
						</Typography>
					</div>
					{/* {!_.isEmpty(onlineConsultList) ? (
						// aria-describedby={id}
						<div onClick={openFilter} className={classes.filterWrapper}>
							<span className={classes.countWrapper}>{totalChecked}</span>
							<FilterListRoundedIcon style={{color: '#E22C24'}} />
						</div>
					) : null} */}
				</section>
				<div className={classes.headLine}>
					<hr className={classes.lineBorder} />
					<hr className={classes.lineBoder} />
				</div>
				{/* <AppBar position='static'>
					<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'  indicatorColor="primary">
						<Tab label='Free' {...a11yProps(0)} />
						<Tab label='Paid' {...a11yProps(1)} />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0} color='disabled'>
					<>
						{OnlineConsulationDataFree.map(({id, month, date, color, textcontent1, textcontent2, textcontent3, color1}) => (
							<div key={id} className={classes.ordercardsubposition}>
								<CardMonth>
									<Typography>{month}</Typography>
									<Typography>{date}</Typography>
								</CardMonth>
								<div className={classes.ordercarddetails}>
									<div className={classes.textcontent1position}>
										<Typography>{textcontent1}</Typography>
									</div>
									<div className={classes.borderbottomleftline}>
										<Typography variant='h6' className={classes.textcontent2position} style={{color: color}}>
											{textcontent2}
										</Typography>
										<Typography variant='h6' style={{color: color1}}>
											{textcontent3}
										</Typography>
									</div>
								</div>
							</div>
						))}
					</>
				</TabPanel> */}
				{/* <TabPanel value={value} index={1}> */}
				{/* <YearFilter yearProps={yearProps} className={classes.year} /> */}
				{/* {loading ? (
					<div></div>
				) : _.isEmpty(onlineConsultList) ? (
					<div className={classes.position}>
						<Image
							alt='no data pic'
							src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoOnlineConsultData.svg'
							width={250}
							height={250}
						/>
						<Typography variant='subtitle1'>No Consultations Yet</Typography>
						<ChatButton>Ask a Doctor</ChatButton>
					</div>
				) : (
					<InfiniteScroll
						dataLength={onlineConsultList?.length}
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
							{!_.isEmpty(onlineConsultList) &&
								onlineConsultList?.map(item => (
									<div key={item.custUuid} className={classes.ordercardsubposition}>
										<CardMonth>
											<Typography>{moment(new Date(item.custSubscriptionPurchasedOn)).format('MMM')}</Typography>
											<Typography>{moment(new Date(item.custSubscriptionPurchasedOn)).format('DD')}</Typography>
										</CardMonth>
										<div className={classes.ordercarddetails1}>
											<div className={classes.textcontent1position}>
												<Typography style={{color: '#1473E6'}}>Consult by Dr {item.tentUserFirstName}</Typography>
												<Typography>{item.symptomName}</Typography>
											</div>
											<div className={classes.chatusposition}>
												<ChatButton
													onClick={() => {
														router.push('/care/consult')
													}}
													color='primary'>
													Chat Us
												</ChatButton>
												<Typography variant='h6' style={{color: '#E0474E'}}>
													Expired in {item.expiryDays}
												</Typography>
											</div>
										</div>
									</div>
								))}
						</>
					</InfiniteScroll>
				)} */}

				{/* </TabPanel> */}
			</div>
			{/* <Popover
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
						Consultation
					</Typography>
					{onlineConsultationsFilter?.map((data, index) => (
						<FormControlLabel
							key={data?.id}
							control={
								<Checkbox
									style={{color: '#000000', fontSize: 20}}
									name={data?.label}
									id={data?.label}
									value={data?.value}
									checked={data?.checked}
									onChange={event => handleConsultationsFilter(event, index)}
								/>
							}
							label={data.label}
						/>
					))}
				</section>
			</Popover> */}
			{loading ? (
				<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<BeatLoader size={12} margin={2} color={'#24A0ED'} />
				</div>
			) : _.isEmpty(!isEmpty) ? (
				<div className={classes.position}>
					<Image
						alt='no data pic'
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoOnlineConsultData.svg'
						width={250}
						height={250}
					/>
					<Typography variant='subtitle1'>No Consultations Yet</Typography>
					{/* onClick={() => router.push('/')} */}
					<ChatButton>Ask a Doctor</ChatButton>
				</div>
			) : (
				<div className={classes.container}>
					{!_.isEmpty(list) &&
						_.map(list, data =>
							_.map(data?.activeStage, active => (
								<div>
									<div key={active?.customerDetails?.custUuid} className={classes.ordercardsubposition}>
										<CardMonth>
											<Typography>{moment(new Date(active?.dateTime)).format('MMM')}</Typography>
											<Typography>{moment(new Date(active?.dateTime)).format('DD')}</Typography>
										</CardMonth>
										<div className={classes.ordercarddetails1}>
											<div className={classes.textcontent1position}>
												<Typography style={{color: '#1473E6'}}>Consult by {active?.tentUserDetails?.tentUserFirstName}</Typography>
												<Typography>{active?.customerSymptoms}</Typography>
											</div>
											<div className={classes.chatusposition}>
												<ChatButton
													disabled={active?.subscriptionDetails?.balanceDaysForExpiration === 0}
													onClick={() => {
														router.push('/care/consult')
													}}
													color='primary'>
													Chat Us
												</ChatButton>
												<Typography variant='h6' style={{color: '#E0474E'}}>
													{active?.subscriptionDetails?.balanceDaysForExpiration === 0
														? 'Appointment Expired'
														: `Expired in ${active?.subscriptionDetails?.balanceDaysForExpiration}`}
												</Typography>
											</div>
										</div>
									</div>
								</div>
							))
						)}

					{!_.isEmpty(list) &&
						_.map(list, data =>
							_.map(data?.cancelStage, refund => (
								<div>
									<div key={refund?.custName} className={classes.ordercardsubposition}>
										<CardMonth>
											<Typography>{moment(new Date(refund?.dateTime)).format('MMM')}</Typography>
											<Typography>{moment(new Date(refund?.dateTime)).format('DD')}</Typography>
										</CardMonth>
										<div className={classes.ordercarddetails1}>
											<div className={classes.textcontent1position}>
												<Typography style={{color: '#1473E6'}}>{refund?.custName}</Typography>
												<Typography>{refund?.customerSymptoms}</Typography>
												<Typography style={{color: 'grey'}}>{refund?.description}</Typography>
											</div>
											<div className={classes.chatusposition}>
												{/* <ChatButton
                        onClick={() => {
                           router.push('/care/consult')
                        }}
                        color='primary'>
                        Chat Us
                     </ChatButton> */}
												<Typography variant='h6' style={{color: '#E0474E'}}>
													{refund?.refundAmount}
												</Typography>
												<Typography variant='h6' style={{color: '#E0474E'}}>
													{refund?.appointmentStage}
												</Typography>
											</div>
										</div>
									</div>
								</div>
							))
						)}

					{!_.isEmpty(list) &&
						_.map(list, data =>
							_.map(data?.refundStage, cancel => (
								<div>
									<div key={cancel?.custName} className={classes.ordercardsubposition}>
										<CardMonth>
											<Typography>{moment(new Date(cancel?.dateTime)).format('MMM')}</Typography>
											<Typography>{moment(new Date(cancel?.dateTime)).format('DD')}</Typography>
										</CardMonth>
										<div className={classes.ordercarddetails1}>
											<div className={classes.textcontent1position}>
												<Typography style={{color: '#1473E6'}}>{cancel?.custName}</Typography>
												<Typography>{cancel?.customerSymptoms}</Typography>
											</div>
											<div className={classes.chatusposition}>
												{/* <ChatButton
															onClick={() => {
																router.push('/care/consult')
															}}
															color='primary'>
															Chat Us
														</ChatButton> */}
												<Typography variant='h6' style={{color: 'red'}}>
													{cancel?.appointmentStage}
												</Typography>
											</div>
										</div>
									</div>
								</div>
							))
						)}
					{!_.isEmpty(list) &&
						_.map(list, data =>
							_.map(data?.refundPolicystage, refundAmnt => (
								<div>
									<div key={refundAmnt?.custName} className={classes.ordercardsubposition}>
										<CardMonth>
											<Typography>{moment(new Date(refundAmnt?.dateTime)).format('MMM')}</Typography>
											<Typography>{moment(new Date(refundAmnt?.dateTime)).format('DD')}</Typography>
										</CardMonth>
										<div className={classes.ordercarddetails1}>
											<div className={classes.textcontent1position}>
												<Typography style={{color: '#1473E6'}}>{refundAmnt?.custName}</Typography>
												<Typography>{refundAmnt?.customerSymptoms}</Typography>
											</div>
											<div className={classes.chatusposition}>
												<ChatButton
													disabled={refundDisable}
													onClick={() => {
														refundStage(refundAmnt?.paymentId)
													}}
													color='primary'>
													Refund Amount
												</ChatButton>
												<Typography variant='h6' style={{color: 'red'}}>
													{refundAmnt?.appointmentStage}
												</Typography>
											</div>
										</div>
									</div>
								</div>
							))
						)}
				</div>
			)}
		</>
	)
}
