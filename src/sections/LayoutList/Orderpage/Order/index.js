import {makeStyles, Typography, IconButton, Popover, FormControlLabel, Checkbox} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Yearpicker from '../../../../components/Yearpicker'
import CardMonth from '../../../../components/CardMonth'
import ReorderButton from '../../../../components/ReorderButton'
import OrderList from '../../../../../Service/MyAccount/OrderDetails'
import ReOrder from '../../../../../Service/MyAccount/ReorderDetails'
import _ from 'lodash'
import moment from 'moment'
import Skeleton from '@material-ui/lab/Skeleton'
import axios from 'axios'
import Image from 'next/image'
import OrderListYearApi from '../../../../../Service/MyAccount/OrderDetails'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import Loader from '../Order/Loader'
import {BeatLoader} from 'react-spinners'
import InfiniteScroll from 'react-infinite-scroll-component'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import ordersFilterOptions from '../../../../model/DashboardFilters/OrdersFilter'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	root: {
		padding: 15,
		paddingTop: 20,
	},
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
	OrderMainPosition: {
		display: 'none',
		// display: 'flex',
		flexDirection: 'column',
		paddingBlock: 12,
		paddingInline: 12,
	},
	ordercardsubposition: {
		display: 'flex',
		gap: 21,
		paddingBlock: 14,
		paddingInline: 12,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'row',
		},
		'& .MuiTypography-h5': {
			fontWeight: 500,
		},
	},
	ordercarddetails: {
		display: 'flex',
		flex: 10,
		gap: 20,
		alignItems: 'center',
		padding: 12,
		cursor: 'pointer',
		justifyContent: 'space-between',
		background: '#FFFFFF 0% 0% no-repeat padding-box',
		boxShadow: '0px 0px 6px #36353530',
		border: '1px solid #FFFFFF',
		borderRadius: 7,
		opacity: 1,
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
	carddetailsPosition: {
		borderRadius: 5,
		padding: 5,
	},
	buttonalignment: {
		width: '100%',
		gap: 12,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& .MuiTypography-body1': {
			fontFamily: 'Poppins',
			fontSize: 14,
			fontStyle: 'normal',
			fontWeight: 500,
			minWidth: 132,
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'row',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	calandermainposition: {
		display: 'flex',
	},

	borderradiusposition: {
		background: '#E0EAFF 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000029',
		opacity: 1,
		borderRadius: 12,
	},
	textmaincontent: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.up('sm')]: {
			alignItems: 'flex-start',
			flexDirection: 'column',
		},
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
		paddingInline: 14,
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
}))

export default function Index(props) {
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const {toggleState, setToggleState} = props
	const router = useRouter()
	const classes = useStyles()
	const [params, setParams] = useState({
		custId: userId,
		offset: 0,
		limit: 10,
		orderProcessStatus: 'Placed,Deliverd,Cancelled,Order Not Placed',
	})
	const [noMore, setNoMore] = useState(true)
	const [listYear, setListYear] = useState([])
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState('')
	const [viewFilter, setViewFilter] = useState(null)
	const [selectedFilters, setSelectedFilters] = useState([])
	const [totalChecked, setTotalChecked] = useState(0)

	// Set Total Selected Count
	useEffect(() => {
		setTotalChecked(selectedFilters?.length)
	}, [selectedFilters])
	// Appointment Filter State
	const [ordersFilter, setOrdersFilter] = useState([])

	useEffect(() => {
		let tempArr = ordersFilterOptions?.map(item => ({...item, checked: false}))
		setOrdersFilter(tempArr)
	}, [ordersFilterOptions])

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
		let selectedOrders = []
		_.map(ordersFilter, item => {
			if (item?.checked) {
				selectedOrders.push(item?.value)
			}
		})
		setSelectedFilters([...selectedOrders])
	}, [ordersFilter])

	const handleOrdersFilter = (event, index) => {
		let tempArr = []
		if (index === 0) {
			let isSelected = !ordersFilter[0]?.checked
			_.map(ordersFilter, (item, idx) => {
				tempArr.push({...item, checked: isSelected})
			})
			setOrdersFilter(tempArr)
		} else {
			_.map(ordersFilter, (item, idx) => {
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
			setOrdersFilter(selectedArr.length === ordersFilterOptions?.length - 1 ? allSelected : tempArr)
		}
	}

	// Set params for get orders
	useEffect(() => {
		if (!_.isEmpty(selectedFilters)) {
			setNoMore(true)
			setListYear([])
			setParams({
				...params,
				orderProcessStatus: _.compact(selectedFilters).toString() || 'Placed,Deliverd,Cancelled,Order Not Placed',
				offset: 0,
				limit: 10,
			})
		} else if (_.isEmpty(selectedFilters)) {
			setParams({
				...params,
				orderProcessStatus: 'Placed,Deliverd,Cancelled,Order Not Placed',
				offset: 0,
				limit: 10,
			})
		}
	}, [selectedFilters])

	// const [reorder, setReOrder] = useState([])

	// const reorderData = () => {
	// 	ReOrder.ReorderDetails().then(response => {
	// 		// setReOrder(response)
	// 	})
	// }

	// Handling Toggling btn Menu List and Menu List Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}
	// const yearProps = uu => {
	// 	setParams(prevState => ({...prevState, custId: userId, year: uu?.mastLookupValue, limit: 10, offset: 0}))
	// }

	const sortedArray = listYear.sort((a, b) => new moment(a.createdOn).format('YYYYMMDD') - new moment(b.createdOn).format('YYYYMMDD'))

	useEffect(() => {
		if (params?.custId && params?.orderProcessStatus) {
			const onSuccess = res => {
				setLoading(false)
				if (res?.data?.status === 'success') {
					const data = res?.data?.data
					if (selectedFilters) {
						if (params?.offset > 0) {
							setListYear([...listYear, ...data])
						} else {
							setListYear(data)
						}
					} else {
						setListYear([...listYear, ...data])
					}
					setCount(res?.data?.totalCount)
				}
			}
			const onFailure = err => {
				console.log('Error', err)
				setLoading(false)
			}
			OrderListYearApi.OrderDetails({...params}).then(onSuccess, onFailure)
		}
	}, [params?.offset, params?.limit, params?.orderProcessStatus])

	const fetchData = async () => {
		const TotalReached = listYear?.length === count
		if (TotalReached) {
			setNoMore(false)
		}
		if (!TotalReached) {
			setNoMore(true)
			setParams({...params, offset: params?.offset + 1})
		}
	}

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<section className={classes.root}>
				<section className={classes.headerWrapper}>
					<div>
						<Typography style={{color: '#000000', fontSize: 20, fontWeight: 500}} variant='h5'>
							Orders
						</Typography>
					</div>
					{!_.isEmpty(listYear) ? (
						<div aria-describedby={id} onClick={openFilter} className={classes.filterWrapper}>
							<span className={classes.countWrapper}>{totalChecked}</span>
							<FilterListRoundedIcon style={{color: '#E22C24'}} />
						</div>
					) : null}
				</section>
				<div className={classes.headLine}>
					<hr className={classes.lineBorder} />
					<hr className={classes.lineBorder} />
				</div>
				{/* <div className={classes.OrderMainPosition}>
					<div className={classes.calandermainposition}>
						<Yearpicker yearProps={yearProps} />
					</div>
				</div> */}
				{loading ? (
					<div></div>
				) : _.isEmpty(listYear) ? (
					<div className={classes.position}>
						<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoOrder.svg' width={284} height={284} />
						<Typography variant='subtitle1'> No Orders Yet</Typography>
					</div>
				) : (
					<InfiniteScroll
						dataLength={listYear?.length}
						next={fetchData}
						hasMore={noMore}
						height={'66vh'}
						loader={
							loading ? (
								<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
									<BeatLoader size={12} margin={2} color={'#24A0ED'} />
								</div>
							) : (
								<div></div>
							)
						}>
						<>
							{!_.isEmpty(listYear) &&
								listYear?.map(item => (
									<div className={classes.ordercardsubposition}>
										<CardMonth>
											<Typography variant='h5'>{moment(new Date(item?.createdOn)).format('MMM')}</Typography>
											<Typography variant='h5'>{moment(new Date(item?.createdOn)).format('DD')}</Typography>
										</CardMonth>
										<div className={classes.ordercarddetails}>
											<div
												className={classes.textmaincontent}
												onClick={() => router.push({pathname: '/myaccount/orderdetails', query: {uuid: item?.custOrderUuid}})}>
												<Typography>{item?.itemName}</Typography>
												<Typography>
													<span
														style={{
															fontWeight: 'bolder',
															fontFamily: 'Roboto',
														}}>
														&#8377;
													</span>
													{item.totalAmount}
												</Typography>
											</div>
											<div className={classes.buttonalignment}>
												<Typography className={classes.carddetailsPosition} style={{color: '#3D4756', background: '#FF9C0026'}}>
													{item.orderProcessStatus}
												</Typography>
												<ReorderButton>Re-order</ReorderButton>
											</div>
										</div>
									</div>
								))}
						</>
					</InfiniteScroll>
				)}
			</section>
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
						Order Type
					</Typography>
					{ordersFilter?.map((data, index) => (
						<FormControlLabel
							key={data?.id}
							control={
								<Checkbox
									style={{color: '#000000', fontSize: 20}}
									name={data?.label}
									id={data?.label}
									value={data?.value}
									checked={data?.checked}
									onChange={event => handleOrdersFilter(event, index)}
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
