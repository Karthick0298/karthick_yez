import React, {useState, useEffect, useCallback} from 'react'
import {makeStyles, Typography, IconButton, Popover, FormControlLabel, Checkbox} from '@material-ui/core'
import ArticlesData from '../../../model/ArticlesListDetails/data'
import YearPicker from '../../../components/Yearpicker'
import CardMonth from '../../../components/CardMonth'
import articleListApi from '../../../../Service/MyAccount/ArticleList'
import _ from 'lodash'
import moment from 'moment'
import Skeleton from '@material-ui/lab/Skeleton'
import axios from 'axios'
import Image from 'next/image'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import InfiniteScroll from 'react-infinite-scroll-component'
import ReadMore from '../../../components/ReadMoreWrapper'
import {BeatLoader} from 'react-spinners'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import TimePeriodFilter from '../../../model/DashboardFilters/TimePeriod'

const useStyles = makeStyles(theme => ({
	root: {
		// padding: 15,
		paddingInline: 15,
		paddingBlockStart: 20,
		paddingBlockEnd: 15,
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
	textcontent1position: {
		paddingBottom: 12,
	},
	borderbottomleftline: {
		borderLeft: '2px solid #bfbfbf',
		paddingInline: 12,
		'& .MuiTypography-h6': {
			color: '#707070',
		},
	},
	textcontent2position: {
		color: '#24A0ED !important',
		fontSize: 14,
		fontWeight: 400,
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

export default function Articles(props) {
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const [params, setParams] = useState({
		page: 0,
		size: 10,
	})
	const [year, setYear] = useState(null)
	const [noMore, setNoMore] = useState(true)
	const [articleList, setArticleList] = useState([])
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState('')
	const [viewFilter, setViewFilter] = useState(null)
	const [selectedFilters, setSelectedFilters] = useState([])
	const [totalChecked, setTotalChecked] = useState(0)

	// Set Total Selected Count
	useEffect(() => {
		setTotalChecked(selectedFilters?.length)
	}, [selectedFilters])

	const [articlesFilter, setArticlesFilter] = useState([])
	useEffect(() => {
		let tempArr = TimePeriodFilter.map(item => ({...item, checked: false}))
		setArticlesFilter(tempArr)
	}, [TimePeriodFilter])

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
		let selectedArticles = []
		_.map(articlesFilter, item => {
			if (item?.checked) {
				selectedArticles.push(item?.value)
			}
		})
		setSelectedFilters([...selectedArticles])
	}, [articlesFilter])

	const handleArticlesFilter = (event, index) => {
		let tempArr = _.map(articlesFilter, (item, idx) => (_.isEqual(idx, index) ? {...item, checked: !item?.checked} : {...item}))
		setArticlesFilter(tempArr)
	}

	// Set params for get Appointments
	useEffect(() => {
		if (!_.isEmpty(selectedFilters)) {
			setNoMore(true)
			setArticleList([])
			setParams({
				...params,
				// year: selectedFilters && selectedFilters?.toString(),
				page: 0,
				size: 10,
			})
			setYear(selectedFilters && selectedFilters?.toString())
		} else if (_.isEmpty(selectedFilters)) {
			setYear(null)
		}
	}, [selectedFilters])

	// Handling Toggling btn Menu articleList and Menu articleList Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	// const yearProps = async uu => {
	// setParams(prevState => ({...prevState, year: uu?.mastLookupValue, size: 50, page: 0}))
	// setLoading(true)
	// const onSuccess = res => {
	// 	if (res?.data?.status === 'SUCCESS') {
	// 		const data = res?.data?.data?.getArticleDtoList
	// 		setArticleList(data)
	// 		setLoading(false)
	// 	} else {
	// 		setArticleList([])
	// 	}
	// }
	// const onFailure = err => {
	// 	console.log('Error', err)
	// 	setLoading(false)
	// }
	// articleList.ArticleList({...params}).then(onSuccess, onFailure)
	// }
	// const sortedArray = articleList.sort((a, b) => new moment(a.createdOn).format('YYYYMMDD') - new moment(b.createdOn).format('YYYYMMDD'))

	// get Article list
	const getArticleList = () => {
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'SUCCESS') {
				const data = res?.data?.data?.getArticleDtoList
				if (selectedFilters) {
					if (params?.page > 0) {
						setArticleList([...articleList, ...data])
					} else {
						setArticleList(data)
					}
				} else {
					setArticleList([...articleList, ...data])
				}
				setCount(res?.data?.data?.totalCount)
			}
		}
		const onFailure = err => {
			console.log('Error', err)
			setLoading(false)
		}
		articleListApi.ArticleList({...params}, year && year).then(onSuccess, onFailure)
	}
	useEffect(() => {
		getArticleList()
	}, [year, params?.page])

	// if (loading) return 'Loading...'
	// const skeletonArray = Array(1).fill('')

	const fetchData = async () => {
		const TotalReached = articleList?.length >= count
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
			<div className={classes.position}>
				<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoArticle.svg' width={324} height={324} />
				<div className={classes.blurBackground}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/commingSoonSection.svg' alt='Comming Soon' width={300} height={100} />
				</div>
			</div>
			{/* <section className={classes.root}>
				<section className={classes.headerWrapper}>
					<div>
						<Typography style={{color: '#000000', fontSize: 20, fontWeight: 500}} variant='h5'>
							Articles
						</Typography>
					</div>
					{!_.isEmpty(articleList) ? (
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
						<YearPicker yearProps={yearProps} />
					</div>
				</div>

				{loading ? (
					<div></div>
				) : _.isEmpty(articleList) ? (
					<div className={classes.position}>
						<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoArticle.svg' width={284} height={284} quality='100' />
						<Typography variant='subtitle1'> No Article Shared</Typography>
					</div>
				) : (
					<InfiniteScroll
						dataLength={articleList?.length}
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
							{!_.isEmpty(articleList) &&
								articleList?.map(articleList => (
									<div className={classes.ordercardsubposition}>
										<CardMonth>
											<Typography>{moment(new Date(articleList?.createdOn)).format('MMM')}</Typography>
											<Typography>{moment(new Date(articleList?.createdOn)).format('DD')}</Typography>
										</CardMonth>
										<div className={classes.ordercarddetails}>
											<div className={classes.textcontent1position}>
												<Typography> Article Shared by {articleList?.tentName}</Typography>
											</div>
											<div className={classes.borderbottomleftline}>
												<Typography variant='h6' className={classes.textcontent2position}>
													{articleList?.title}
												</Typography>
												<ReadMore
													classProps={classes.classProps}
													text={articleList?.body}
													moreText={'view more'}
													lessText={'show less'}
													textColor={'#1473E6'}
													sliceLength={150}
													maxTextLength={170}
												/>
											</div>
										</div>
									</div>
								))}
						</>
					</InfiniteScroll>
				)} */}

				{/* {_.isEmpty(articleList) ? (
						<div className={classes.position}>
							<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoArticle.svg' width={284} height={284} quality='100' />
							<Typography variant='subtitle1'> No Article Shared</Typography>
						</div>
					) : (
						<>
							{list?.map(articleList => (
								<div className={classes.ordercardsubposition}>
									<CardMonth>
										<Typography>{moment(new Date(articleList?.createdOn)).format('MMM')}</Typography>
										<Typography>{moment(new Date(articleList?.createdOn)).format('DD')}</Typography>
									</CardMonth>
									<div className={classes.ordercarddetails}>
										<div className={classes.textcontent1position}>
											<Typography> Article Shared by {articleList?.tentName}</Typography>
										</div>
										<div className={classes.borderbottomleftline}>
											<Typography variant='h6' className={classes.textcontent2position}>
												{articleList?.title}
											</Typography>
											<ReadMore className={classes.textStyle} classProps={classes.classProps} text={articleList?.body} />
										</div>
									</div>
								</div>
							))}
						</>
					)} */}
			{/* </section> */}

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
					{articlesFilter?.map((data, index) => (
						<FormControlLabel
							key={data?.id}
							control={
								<Checkbox
									style={{color: '#000000', fontSize: 20}}
									name={data?.label}
									id={data?.label}
									value={data?.value}
									checked={data?.checked}
									onChange={event => handleArticlesFilter(event, index)}
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
