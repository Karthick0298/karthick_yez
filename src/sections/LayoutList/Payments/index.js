import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {makeStyles, IconButton, Popover, FormControlLabel, Checkbox} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import data from '../../../model/PaymentAccount/data'
import {Divider} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import PaymentListApi from '../../../../Service/MyAccount/Payment/PaymentHistory'
import YearFilter from '../../../components/Yearpicker'
import _ from 'lodash'
import moment from 'moment'
import PaymentSort from '../../../components/Yearpicker/PaymentSort/index'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import InfiniteScroll from 'react-infinite-scroll-component'
import {BeatLoader} from 'react-spinners'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import paymentsFilterOptions from '../../../model/DashboardFilters/PaymentsFilter'
import secureLocalStorage from 'react-secure-storage'

// function TabPanel(props) {
// 	const {children, value, index, ...other} = props

// 	return (
// 		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
// 			{value === index && (
// 				<Box p={3}>
// 					<Typography>{children}</Typography>
// 				</Box>
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
		[theme.breakpoints.down('xs')]: {
			padding: 0,
			paddingBlock: 12,
		},
		'& .MuiTabs-flexContainer': {
			alignItems: 'center',
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
			padding: 21,
		},

		'& .MuiTab-textColorInherit.Mui-selected': {
			backgroundColor: '#E0EAFF',
			borderRadius: 36,
			color: '#0050F9',
			textTransform: 'capitalize',
		},
		'& .MuiBox-root': {
			padding: 0,
			paddingInline: 24,
		},
		'& .MuiTab-root': {
			minHeight: 32,
			minWidth: 125,
			textTransform: 'capitalize',
		},
		'& .MuiTab-textColorInherit': {
			color: '#3D4756',
		},
		'& .MuiTab-wrapper': {
			fontFamily: 'poppins',
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
	timeDate: {
		display: 'flex',
		gap: 4,
	},
	mainPayment: {
		paddingInline: 14,
		[theme.breakpoints.down('xs')]: {
			maxWidth: '100%',
		},
		[theme.breakpoints.down('md')]: {
			maxWidth: '100%',
		},
	},
	containerList: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlock: 12,
		alignItems: 'center',
		'& .MuiTypography-h5': {
			fontSize: 16,
			color: '#E0474E',
		},
	},
	haedPaylist: {
		'& .MuiTypography-h5': {
			fontSize: 16,
			color: '#3D4756',
		},
		'& .MuiTypography-h6': {
			fontSize: 14,
		},
	},
	imageValue: {
		display: 'flex',
		gap: 8,
	},
	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 60,
		'& .MuiTypography-subtitle1': {
			color: theme.palette.paragraph.main,
			fontWeight: 600,
		},
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
		alignItems: 'center',
		paddingInline: 14,
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
}))

export default function SimpleTabs(props) {
	const {statusProps} = useContextApi()
	const {toggleState, setToggleState} = props
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const classes = useStyles()
	const [value, setValue] = useState(0)

	const [params, setParams] = useState({
		custUuid: userId,
		paymentStatus: 'All Payments',
		page: 0,
		size: 10,
	})

	const [noMore, setNoMore] = useState(true)
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState('')
	const [viewFilter, setViewFilter] = useState(null)
	const [selectedFilters, setSelectedFilters] = useState([])
	const [totalChecked, setTotalChecked] = useState(0)

	// Set Total Selected Count
	useEffect(() => {
		setTotalChecked(selectedFilters?.length)
	}, [selectedFilters])
	// payments Filter State
	const [paymentsFilter, setPaymentsFilter] = useState([])
	useEffect(() => {
		let tempArr = paymentsFilterOptions.map(item => ({...item, checked: false}))
		setPaymentsFilter(tempArr)
	}, [paymentsFilterOptions])

	const openFilter = event => {
		setViewFilter(event.currentTarget)
	}

	const closeFilter = () => {
		setViewFilter(null)
	}
	const open = Boolean(viewFilter)
	const id = open ? 'filters' : undefined

	useEffect(() => {
		let selectedPayments = []
		_.map(paymentsFilter, item => {
			if (item?.checked) {
				selectedPayments.push(item?.value)
			}
		})
		setSelectedFilters([...selectedPayments])
	}, [paymentsFilter])

	const handlePaymentsFilter = (event, index) => {
		let tempArr = []
		if (index === 0) {
			let isSelected = !paymentsFilter[0]?.checked
			_.map(paymentsFilter, (item, idx) => {
				tempArr.push({...item, checked: isSelected})
			})
			setPaymentsFilter(tempArr)
		} else {
			_.map(paymentsFilter, (item, idx) => {
				if (idx === index) {
					tempArr.push({...item, checked: !item.checked})
				} else if (idx === 0) {
					tempArr.push({...item, checked: false})
				} else {
					tempArr.push({...item})
				}
			})
			let selectedArr = []
			_.map(tempArr, (item, i) => {
				if (i > 0 && item.checked) {
					selectedArr.push({...item})
				}
			})
			let allSelected = _.map(tempArr, item => ({...item, checked: true}))
			setPaymentsFilter(selectedArr.length === 3 ? allSelected : tempArr)
		}
	}

	const getPaymentsSelected = () => {
		let isAllPayments =
			selectedFilters?.indexOf(paymentsFilterOptions?.[1]?.value) > -1 &&
			selectedFilters?.indexOf(paymentsFilterOptions?.[2]?.value) > -1 &&
			selectedFilters?.indexOf(paymentsFilterOptions?.[3]?.value) > -1
		if (isAllPayments) {
			return 'All payments'
		} else {
			return _.compact(selectedFilters).toString()
		}
	}

	// Set params for get payments
	useEffect(() => {
		if (!_.isEmpty(selectedFilters)) {
			setNoMore(true)
			setList([])
			setParams({
				...params,
				paymentStatus: getPaymentsSelected(),
				page: 0,
				size: 10,
			})
		} else if (_.isEmpty(selectedFilters)) {
			setParams({
				...params,
				paymentStatus: 'All Payments',
				page: 0,
				size: 10,
			})
		}
	}, [selectedFilters])

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue)
	// 	setList([])
	// }

	// Handling Toggling btn Menu List and Menu List Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	// const yearProps = () => {
	// 	let temp = {...params, custUuid: userId, year: '2022', paymentStatus: statusProps?.mastLookupValue, size: 10, page: 1}
	// 	// setParams(temp)
	// }

	// const sortedArray = list.sort((a, b) => new moment(a.paymentDate).format('YYYYMMDD') - new moment(b.paymentDate).format('YYYYMMDD'))

	// useEffect(() => {
	// 	setList([])
	// 	// yearProps()
	// }, [statusProps?.mastLookupValue])

	useEffect(() => {
		if (params?.custUuid && params?.paymentStatus) {
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					const data = res?.data?.data
					if (selectedFilters) {
						if (params?.offset > 0) {
							setList(prevState => [...list, ...data])
						} else {
							setList(data)
						}
					} else {
						setList(prevState => [...list, ...data])
					}
					setCount(res?.data?.totalCount)
					setLoading(false)
				} else {
					setList([])
				}
			}
			const onFailure = err => {
				console.log('Error', err)
				setLoading(false)
			}
			PaymentListApi.PaymentList({...params}).then(onSuccess, onFailure)
		}
	}, [params?.paymentStatus, params?.page])

	const fetchData = async () => {
		const TotalReached = list?.length === count
		if (TotalReached) {
			setNoMore(false)
		}
		if (!TotalReached) {
			setNoMore(true)
			setParams({...params, page: params?.page + 1})
		}
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
							Payments
						</Typography>
					</div>
					{!_.isEmpty(list) ? (
						<div aria-describedby={id} onClick={openFilter} className={classes.filterWrapper}>
							<span className={classes.countWrapper}>{totalChecked}</span>
							<FilterListRoundedIcon style={{color: '#E22C24'}} />
						</div>
					) : null}
				</section>
				<div className={classes.headLine}>
					<hr className={classes.lineBorder} />
					<hr className={classes.lineBoder} />
				</div>
				{/* <AppBar position='static'>
					<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'  indicatorColor="primary">
						<Tab label='Payment Options' {...a11yProps(0)} />
						<Tab label='Payment History' {...a11yProps(1)} />
					</Tabs>
				</AppBar> */}
				{/* <TabPanel value={value} index={0} color='disabled'>
					<Typography variant='h5'>
						LFYnGO Health cash Balance :-<span style={{fontFamily: 'sans-serif'}}>&#8377;</span>345
					</Typography>
				</TabPanel> */}
				{/* <TabPanel value={value} index={1}> */}
				{/* <YearFilter yearProps={yearProps} /> */}
				{/* <PaymentSort statusProps={statusProps} /> */}
				{loading ? (
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<BeatLoader size={12} margin={2} color={'#24A0ED'} />
					</div>
				) : _.isEmpty(list) ? (
					<div className={classes.position}>
						{/* <div className={classes.position}> */}
						<Image
							alt='No Payment History Yet'
							src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/noPaymentHistory.svg'
							width={380}
							height={380}
						/>
						{/* </div> */}
					</div>
				) : (
					<InfiniteScroll
						dataLength={list?.length}
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
							{!_.isEmpty(list) &&
								list?.map(listItem => (
									<div className={classes.mainPayment}>
										<div className={classes.containerList}>
											<div className={classes.haedPaylist}>
												<Typography variant='h5'>Paid for {listItem.productName}</Typography>
												<div className={classes.timeDate}>
													<Typography variant='h6'>{moment(new Date(listItem?.paymentDate)).format('DD MMM')},</Typography>
													<Typography variant='h6'>{moment(listItem?.paymentDate, 'HH:mm:ss').format('h:mm A')}</Typography>
												</div>
											</div>
											<div className={classes.imageValue}>
												<Typography variant='h5'>
													<span style={{fontFamily: 'sans-serif'}}>&#8377;</span>
													{listItem.paidAmount}
												</Typography>
												<Typography variant='h6'>{listItem.paymentMode}</Typography>
											</div>
										</div>
										<Divider />
									</div>
								))}
						</>
					</InfiniteScroll>
				)}
				{/* </TabPanel> */}
			</div>
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
						Payment Status
					</Typography>
					{paymentsFilter?.map((data, index) => (
						<FormControlLabel
							key={data?.id}
							control={
								<Checkbox
									style={{color: '#000000', fontSize: 20}}
									name={data?.label}
									id={data?.label}
									value={data?.value}
									checked={data?.checked}
									onChange={event => handlePaymentsFilter(event, index)}
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
