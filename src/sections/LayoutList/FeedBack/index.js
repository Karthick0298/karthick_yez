import React, {useState, useEffect} from 'react'
import {makeStyles, Typography, IconButton, Popover, FormControlLabel, Checkbox} from '@material-ui/core'
import FeedBackData from '../../../model/FeedBackListDetails/data'
import Yearpicker from '../../../components/Yearpicker'
import CardMonth from '../../../components/CardMonth'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import _ from 'lodash'
import moment from 'moment'
import Image from 'next/image'
import FeedbackListYearApi from '../../../../Service/MyAccount/FeedbackListYear'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import InfiniteScroll from 'react-infinite-scroll-component'
import ReadMore from '../../../components/ReadMoreWrapper/index'
import {BeatLoader} from 'react-spinners'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import TimePeriodFilter from '../../../model/DashboardFilters/TimePeriod'
import {setYear} from 'date-fns'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	root: {
		padding: 15,
		paddingBlockStart: 20,
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
		display: 'flex',
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
	carddetailsPosition: {
		borderRadius: 5,
		padding: 5,
	},
	buttonalignment: {
		flex: 3,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 12,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	calandermainposition: {
		// display: 'flex',
		display: 'none',
	},

	borderradiusposition: {
		background: '#E0EAFF 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000029',
		opacity: 1,
		borderRadius: 12,
	},
	textcontent3position: {
		paddingBottom: 12,
	},
	borderbottomleftline: {
		borderLeft: '2px solid #bfbfbf',
		paddingInline: 12,
	},
	thumbUpposition: {
		display: 'flex',
		gap: 8,
		alignItems: 'baseline',
		'& .MuiTypography-h6': {
			color: '#707070',
		},
		'& .MuiSvgIcon-root': {
			fill: '#1473E6',
			fontSize: 18,
			alignItems: 'center',
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
	classProps: {
		color: '#707070',
		fontSize: theme.typography.h6.fontSize,
		fontFamily: theme.typography.h5.fontFamily,
	},
	textStyle: {
		color: '#707070',
		fontSize: theme.typography.h6.fontSize,
		fontFamily: theme.typography.h5.fontFamily,
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
	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		position: 'relative',
		height: '80vh',
	},
	blurBackground: {
		position: 'absolute',
		backdropFilter: 'blur(6px)',
		height: '100%',
		width: '100%',
		zIndex: 100,
		top: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))
export default function FeedBack(props) {
	const {toggleState, setToggleState} = props
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const classes = useStyles()

	const [noMore, setNoMore] = useState(true)
	const [feedbackList, setFeedbackList] = useState([])
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState('')
	const [viewFilter, setViewFilter] = useState(null)
	const [selectedFilters, setSelectedFilters] = useState([])
	const [isUpcoming, setIsUpcoming] = useState(false)
	const [totalChecked, setTotalChecked] = useState(0)
	const [params, setParams] = useState({
		custId: userId,
		faqFor: 'feedback',
		year: '',
		offset: 0,
		limit: 10,
	})

	// Set Total Selected Count
	useEffect(() => {
		setTotalChecked(selectedFilters?.length)
	}, [selectedFilters])

	const [feedbackFilter, setFeedbackFilter] = useState([])
	useEffect(() => {
		let tempArr = TimePeriodFilter.map(item => ({...item, checked: false}))
		setFeedbackFilter(tempArr)
	}, [TimePeriodFilter])

	const openFilter = event => {
		setViewFilter(event.currentTarget)
	}

	const closeFilter = () => {
		setViewFilter(null)
	}
	const open = Boolean(viewFilter)
	const id = open ? 'filters' : undefined

	useEffect(() => {
		let selectedApp = []
		_.map(feedbackFilter, item => {
			if (item?.checked) {
				selectedApp.push(item?.value)
			}
		})
		setSelectedFilters([...selectedApp])
	}, [feedbackFilter])

	const handleFeedbackFilter = (event, index) => {
		let tempArr = _.map(feedbackFilter, (item, idx) => (_.isEqual(idx, index) ? {...item, checked: !item?.checked} : {...item}))
		setFeedbackFilter(tempArr)
	}

	// Set params for get Appointments
	useEffect(() => {
		if (selectedFilters) {
			setNoMore(true)
			setFeedbackList([])
			setParams({
				...params,
				year: (selectedFilters && selectedFilters?.toString()) || '',
				limit: 10,
				offset: 0,
			})
		}
	}, [selectedFilters])

	// Handling Toggling btn Menu feedbackList and Menu feedbackList Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	const yearProps = uu => {
		// setParams(prevState => ({...prevState, year: uu?.mastLookupValue, limit: 10, offset: 0}))
	}

	// const sortedArray = feedbackList.sort((a, b) => new moment(a.createdOn).format('YYYYMMDD') - new moment(b.createdOn).format('YYYYMMDD'))

	const skeletonArray = Array(5).fill('')

	useEffect(() => {
		if (params?.custId) {
			const onSuccess = res => {
				setLoading(false)
				if (res?.data?.status === 'success') {
					const data = res?.data?.data
					if (selectedFilters) {
						if (params?.offset > 0) {
							setFeedbackList([...feedbackList, ...data])
						} else {
							setFeedbackList(data)
						}
					} else {
						setFeedbackList([...feedbackList, ...data])
					}
					setCount(res?.data?.totalCount)
				}
			}
			const onFailure = err => {
				console.log('Error', err)
				setLoading(false)
			}
			FeedbackListYearApi.FeedbackListYear({...params}).then(onSuccess, onFailure)
		}
	}, [params?.limit, params?.offset, params?.year])

	const fetchData = async () => {
		const TotalReached = feedbackList?.length >= count
		if (TotalReached) {
			setNoMore(false)
		}
		if (!TotalReached) {
			setNoMore(true)
			setParams({...params, offset: params?.offset + 1})
		}

		// const articlePagination = await fetchAppointment()
		// setFeedbackList([...feedbackList, articlePagination])
		// setNoMore(false)
		// setOffset(offset + 1)
	}

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.position}>
				<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoFeedback.svg' width={324} height={324} />
				<div className={classes.blurBackground}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/commingSoonSection.svg'
						alt='Comming Soon'
						width={300}
						height={100}
					/>
				</div>
			</div>
			{/* <section className={classes.root}>
				<section className={classes.headerWrapper}>
					<div>
						<Typography style={{color: '#000000', fontSize: 20, fontWeight: 500}} variant='h5'>
							Feedback
						</Typography>
					</div>
					{!_.isEmpty(feedbackList) ? (
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
				<div className={classes.OrderMainPosition}>
				<div className={classes.calandermainposition}>
					<Yearpicker yearProps={yearProps} />
				</div>
			</div>

				{loading ? (
					<div></div>
				) : _.isEmpty(feedbackList) ? (
					<div className={classes.position}>
						<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoFeedback.svg' width={284} height={284} />
						<Typography variant='subtitle1'> No Feedback Submitted</Typography>
					</div>
				) : (
					<InfiniteScroll
						dataLength={feedbackList?.length}
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
							{!_.isEmpty(feedbackList) &&
								feedbackList?.map(fdList => (
									<>
										<div key={fdList.custAskQuestUuid} className={classes.ordercardsubposition}>
											<CardMonth>
												<Typography>{moment(new Date(fdList.createdOn)).format('MMM')}</Typography>
												<Typography>{moment(new Date(fdList.createdOn)).format('DD')}</Typography>
											</CardMonth>
											<div className={classes.ordercarddetails}>
												<Typography className={classes.textcontent3position}>Feedback for {fdList.custName}</Typography>

												<div className={classes.borderbottomleftline}>
													<div className={classes.thumbUpposition}>
														<ThumbUpAltIcon />
														<ReadMore
															classProps={classes.classProps}
															text={fdList?.question}
															moreText={'view more'}
															lessText={'show less'}
															textColor={'#1473E6'}
															sliceLength={150}
															maxTextLength={170}
														/>
													</div>
												</div>
											</div>
										</div>
									</>
								))}
						</>
					</InfiniteScroll>
				)}
			</section> */}

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
						Time Period
					</Typography>
					{feedbackFilter?.map((data, index) => (
						<FormControlLabel
							key={data?.id}
							control={
								<Checkbox
									style={{color: '#000000', fontSize: 20}}
									name={data?.label}
									id={data?.label}
									value={data?.value}
									checked={data?.checked}
									onChange={event => handleFeedbackFilter(event, index)}
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
