import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Typography, TextField} from '@material-ui/core'
import healtharticle from '../../../model/ProfileCardTabView/HealthFeed/HealthArticle/data'
import healthTip from '../../../model/ProfileCardTabView/HealthFeed/HealthTips/data'
import healthQuiz from '../../../model/ProfileCardTabView/HealthFeed/HealthQuiz/data'
import AutoComplete from '../../../components/ProfileDetailsTabFilter'
import getHealthFeedApi from '../../../../Service/ProfileList/ProfileDetailsTab/HealthFeed'
import _ from 'lodash'

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
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
	},
	rootCont: {
		display: 'flex',
		flexDirection: 'column',
		paddingBlock: 50,
		gap: 24,
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
	allCard: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gap: 24,
	},
	mainCard: {
		minHeight: 340,
		border: '1px solid #FFFFFF80',
		background: '#fff',
		maxWidth: 322,
		borderRadius: 15,
		cursor: 'pointer',
	},
	mainContent: {
		maxWidth: 322,
	},
	containList: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		paddingInline: 12,
		'& .MuiTypography-body1': {
			fontSize: 17,
			color: theme.palette.paragraph.main,
			fontWeight: 600,
		},
		'& .MuiTypography-body2': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
		},
	},
	reviewList: {
		display: 'flex',
		alignItems: 'center',
		gap: 4,
	},
	contentCard: {
		display: 'flex',
		gap: 12,
		'& .MuiTypography-h6': {
			fontSize: 14,
			color: theme.palette.paragraph.main,
		},
	},
	mainAction: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingInline: 12,
		paddingBlock: 12,
	},
	mainAction1: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingInline: 12,
		paddingBlock: 12,
		'& .MuiTypography-h6': {
			fontSize: 15,
			color: theme.palette.paragraph.main,
			fontWeight: 400,
			fontFamily: 'Source Sans Pro',
		},
	},
	inputWrapper: {
		position: 'absolute',
		right: 10,
		alignSelf: 'end',
	},
	input: {
		width: 180,
		height: 40,
		borderRadius: 10,
		borderColor: '#999',
		backdropFilter: 'blur(6px)',
		'&-webkit-backdrop-filter': 'blur(6px)',
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#609eed',
		},
	},
	titleImg: {
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	emptyDataWrapper: {
		opacity: 1,
		position: 'relative',
		height: 450,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyDataSection: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	noData: {
		marginBlockStart: 10,
		// textAlign: 'center',
		fontSize: 32,
		opacity: 0.5,
		'& .MuiTypography-h5': {
			fontSize: 32,
			textAlign: 'center',
		},
	},
	noDataImg: {
		opacity: 0.6,
	},
}))

export default function ProfileDetailstabView(props) {
	const {mastTentUuid, tentUserUuid} = props
	const classes = useStyles()
	const [value, setValue] = useState(0)
	const [healthArticle, setHealthArticle] = useState([])
	const [feedFilter, setFeedFilter] = useState('type/article/')
	const [healthTips, setHealthTips] = useState([])
	const [tipsFilter, setTipsFilter] = useState('type/tips/')
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	// get healthArticle data api
	const getHealthArticle = useCallback(
		feedFilter => {
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					setHealthArticle(res?.data?.data)
				} else {
					setHealthArticle([])
				}
			}
			const onFailure = err => {
				console.log('health feed data', err)
			}
			getHealthFeedApi.getHealthFeed(tentUserUuid, mastTentUuid, feedFilter).then(onSuccess, onFailure)
		},
		[mastTentUuid, feedFilter, tentUserUuid]
	)

	useEffect(() => {
		getHealthArticle(feedFilter)
	}, [getHealthArticle, feedFilter])

	// get healthTips data api
	const getHealthTips = useCallback(
		tipsFilter => {
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					setHealthTips(res?.data?.data)
				} else {
					setHealthTips([])
				}
			}
			const onFailure = err => {
				console.log('health tips data', err)
			}
			getHealthFeedApi.getHealthFeed(tentUserUuid, mastTentUuid, tipsFilter).then(onSuccess, onFailure)
		},
		[mastTentUuid, tipsFilter, tentUserUuid]
	)

	useEffect(() => {
		getHealthTips(tipsFilter)
	}, [getHealthTips, tipsFilter])

	// Handling filter on onChange
	const handleFilter = e => {
		if (value === 0) {
			setFeedFilter(`type/article/search/${e.target.value}`)
		} else if (value === 1) {
			setTipsFilter(`type/tips/search/${e.target.value}`)
		}
	}
	return (
		<div className={classes.rootCont}>
			<AppBar position='static' className={classes.appBar}>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example' indicatorColor='primary'>
					<Tab label='Health Article' {...a11yProps(0)} />
					<Tab label='Health Tips' {...a11yProps(1)} />
					{/* <Tab label='Health Quiz' {...a11yProps(2)} /> */}
				</Tabs>

				{value === 0 ? (
					<div className={classes.inputWrapper}>
						<TextField
							placeholder={'search article'}
							type='text'
							variant='outlined'
							name='articleSearch'
							id='articleSearch'
							InputProps={{className: classes.input}}
							onChange={handleFilter}
						/>
					</div>
				) : value === 1 ? (
					<div className={classes.inputWrapper}>
						<TextField
							placeholder={'search Tips'}
							type='text'
							variant='outlined'
							name='articleSearch'
							id='articleSearch'
							InputProps={{className: classes.input}}
							onChange={handleFilter}
						/>
					</div>
				) : (
					<></>
				)}
			</AppBar>

			{/* Health Article */}
			{_.isEmpty(healthArticle) ? (
				<>
					<TabPanel value={value} index={0}>
						<div className={classes.emptyDataWrapper}>
							<section className={classes.emptyDataSection}>
								<Image
									className={classes.noDataImg}
									src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noFeedbackData.png'
									width={106}
									height={140}
									alt='No Feedback Data'
								/>
								<Typography variant='h5' className={classes.noData}>
									No feedback yet
								</Typography>
							</section>
						</div>
					</TabPanel>
				</>
			) : (
				<TabPanel value={value} index={0} color='disabled'>
					<div className={classes.allCard}>
						{healthArticle?.map(data => (
							<div key={data?.tentArticlesUuid} className={classes.mainContent}>
								<div className={classes.mainCard}>
									<Image className={classes.titleImg} src={data?.thumbnailImageUrl} alt='doctor' width={320} height={220} />
									<div className={classes.containList}>
										<Typography variant='body1'>{data?.title}</Typography>
										<Typography variant='body2'>{data?.dayOn}</Typography>
									</div>
									<div className={classes.mainAction}>
										<div className={classes.contentCard}>
											<div className={classes.reviewList}>
												<div className={classes.views}></div>
												<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/like.svg' alt='doctor' width={20} height={16} />
												<Typography variant='h6'>{data?.liked}</Typography>
											</div>
											<div className={classes.reviewList}>
												<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/comment.svg' alt='doctor' width={20} height={16} />
												<Typography variant='h6'>{data?.totalComments}</Typography>
											</div>
											<div className={classes.reviewList}>
												<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/view.svg' alt='doctor' width={20} height={16} />
												<Typography variant='h6'>{data?.noOfViews}</Typography>
											</div>
										</div>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/save.svg' alt='doctor' width={35} height={25} />
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
			)}

			{/* Health Tips */}
			{_.isEmpty(healthTips) ? (
				<>
					<TabPanel value={value} index={1}>
						<div className={classes.emptyDataWrapper}>
							<section className={classes.emptyDataSection}>
								<Image
									className={classes.noDataImg}
									src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noTipsData.png'
									width={106}
									height={140}
									alt='No Feedback Data'
								/>
								<Typography variant='h5' className={classes.noData}>
									No tips yet
								</Typography>
							</section>
						</div>
					</TabPanel>
				</>
			) : (
				<TabPanel value={value} index={1}>
					<div className={classes.allCard}>
						{healthTips?.map(data => (
							<div key={data?.tentArticlesUuid} className={classes.mainContent}>
								<div className={classes.mainCard}>
									<Image className={classes.titleImg} src={data?.thumbnailImageUrl} alt='doctor' width={320} height={220} />
									<div className={classes.containList}>
										<Typography variant='body1'>{data?.title}</Typography>
										<Typography variant='body2'>{data?.dayOn}</Typography>
									</div>
									<div className={classes.mainAction}>
										<div className={classes.contentCard}>
											<div className={classes.reviewList}>
												<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/like.svg' alt='doctor' width={20} height={16} />
												<Typography variant='h6'>{data?.liked}</Typography>
											</div>
											<div className={classes.reviewList}>
												<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/comment.svg' alt='doctor' width={20} height={16} />
												<Typography variant='h6'>{data?.totalComments}</Typography>
											</div>
											<div className={classes.reviewList}>
												<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/view.svg' alt='doctor' width={20} height={16} />
												<Typography variant='h6'>{data?.noOfViews}</Typography>
											</div>
										</div>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/save.svg' alt='doctor' width={35} height={25} />
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
			)}

			{/* Health quiz */}
			<TabPanel value={value} index={2} color='disabled'>
				<div className={classes.allCard}>
					{healthQuiz?.map(article => (
						<div key={article?.id} className={classes.mainContent}>
							<div className={classes.mainCard}>
								<Image src={article?.image} alt='doctor' width={320} height={220} />
								<div className={classes.containList}>
									<Typography variant='body1'>{article?.generalcontent}</Typography>
									<Typography variant='body2'>{article?.date}</Typography>
								</div>
								<div className={classes.mainAction1}>
									<Typography variant='h6'>{article?.quiz}</Typography>
								</div>
							</div>
						</div>
					))}
				</div>
			</TabPanel>
		</div>
	)
}
