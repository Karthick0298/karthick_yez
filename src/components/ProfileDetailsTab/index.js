import React, {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Typography, Button, TextField} from '@material-ui/core'
// import ProfileDetailsTabViewFeedBack from '../../model/ProfileCardTabView/FeedBack/data'
import PersonIcon from '@material-ui/icons/Person'
import QuestionAnswer from '../ProfileDetailsTabView/QuestionAnsTab'
import Info from '../ProfileDetailsTabView/Info'
import HealthFeed from '../ProfileDetailsTabView/HealthFeed'
// import AutoComplete from '../../components/ProfileDetailsTabFilter'
import Autocomplete from '../AutoComplete'
import getFeedbackApi from '../../../Service/ProfileList/ProfileDetailsTab/Feedback'
import getSearchIssuesApi from '../../../Service/ProfileList/ProfileDetailsTab/searchIssuesDropdown'
import getQaAnsweredApi from '../../../Service/ProfileList/ProfileDetailsTab/QaAnswered'
import _ from 'lodash'
import Image from 'next/image'

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
	root: {
		// border: '1px solid green',
		display: 'flex',
		flexDirection: 'column',
		// marginInlineStart: 100,
		// marginBlock: 20,
		// [theme.breakpoints.down('xs')]: {
		// 	// display: 'none',
		// },
		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
		},
		'& .MuiTabs-root': {
			minHeight: 35,
		},
		'& .MuiBox-root-60': {
			padding: 0,
		},
		'& .MuiAppBar-colorPrimary': {
			color: '#3D4756',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},
		'& .MuiTabs-flexContainer': {
			display: 'flex',
			paddingInline: 12,
			paddingBlockStart: 14,
			alignItems: 'center',
		},
		'& .MuiSvgIcon-root': {
			width: 32,
			height: 29,
			// border: '1px solid #475677',
			// borderRadius: '100%',
		},
		'& .MuiTab-textColorInherit.Mui-selected': {
			background: 'transparent linear-gradient(104deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			color: '#481CA9',
			textTransform: 'capitalize',
			borderRadius: '10px 10px 0px 0px',
			backdropFilter: 'blur(6px)',
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
			fontWeight: 400,
			fontFamily: 'Poppins',
		},
		'& .MuiTabs-indicator': {
			'& .PrivateTabIndicator-colorSecondary': {
				backgroundColor: 'transparent',
			},
		},
	},
	ordercardsubposition: {
		display: 'flex',
		flexDirection: 'column',
		gap: 21,
		paddingBlock: 14,
		paddingInline: 24,
		background: 'transparent linear-gradient(130deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		borderRadius: 12,
		opacity: 1,
		backdropFilter: 'blur(6px)',
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
	chatusposition: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 6,
	},

	feedbackmainposition: {
		display: 'flex',
		alignItems: 'center',
		gap: 12,
	},
	contenttextposition: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
		},
		'& .MuiTypography-h6': {
			color: theme.palette.paragraph.main,
		},
	},
	RecommendsPosition: {
		display: 'flex',
		gap: 12,
		alignItems: 'center',
		paddingBlock: 12,
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
		},
	},
	buttonContent2position: {
		border: '1px solid #7047EA',
		color: '#7047EA!important',
		borderRadius: 4,
		padding: 5,
	},
	borderBottomPosition: {
		borderBottom: '1px solid #ccc',
		'& .MuiTypography-h5': {
			fontSize: 14,
			fontWeight: 500,
		},
	},
	content1maindivision: {
		paddingBlock: 14,
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			fontWeight: 100,
		},
	},
	yearsposition: {
		fontSize: 12,
	},
	searchissue: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	autoCompleteSpacing: {
		paddingInline: 8,
	},
	emptyDataWrapper: {
		minHeight: '100px!important',
		gap: 21,
		paddingBlock: 14,
		paddingInline: 24,
		borderRadius: 12,
		opacity: 1,
		position: 'relative',
		height: 450,
	},
	emptyDataSection: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	noDataImg: {
		opacity: 0.6,
	},
	noData: {
		marginBlockStart: 10,
		opacity: 0.6,
		fontSize: 32,
		'& .MuiTypography-h5': {
			fontSize: 32,
			textAlign: 'center',
		},
	},
	feedbackAutocomplete: {
		minWidth: 180,
	},
	QaAutocomplete: {
		minWidth: 180,
	},
}))

export default function ProfileDetailsTab() {
	const classes = useStyles()

	// Getting mastTentUuid and tentUserUuid from browser window
	const location = typeof window !== 'undefined' ? window.location.search : null
	const Uuid = location && location?.split('?')?.pop()
	const splitUuid = Uuid?.split('&')
	const getMastTentUuid = splitUuid?.[0]?.split('=')
	const mastTentUuid = getMastTentUuid?.[1]
	const getTentUserUuid = splitUuid?.[1]?.split('=')
	const tentUserUuid = getTentUserUuid?.[1]

	const [tabValue, setTabValue] = useState(0)
	const [loading, setLoading] = useState(false)
	const [searchIssuesOptions, setSearchIssuesOptions] = useState([])
	const [feedbackData, setFeedbackData] = useState([])
	const [feedbackfilter, setFeedbackFilter] = useState('')
	const [QaAnsweredData, setQaAnsweredData] = useState([])
	const [QaFilter, setQaFilter] = useState('')

	// Sort by options
	const sortBy = [
		{option: 'Most Helpful', value: 'sort/recent/filter/helpful/'},
		{option: 'Recent', value: 'sort/recent/'},
	]

	const handleChange = (event, newValue) => {
		setTabValue(newValue)
	}

	//Get Search issues dropDown api
	const getSearchIssuesOptions = useCallback(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setSearchIssuesOptions(res?.data?.data)
			} else {
				setSearchIssuesOptions([])
			}
		}
		const onFailure = err => {
			console.log('search issues options', err)
		}
		getSearchIssuesApi.searchIssuesOptions(mastTentUuid).then(onSuccess, onFailure)
	}, [mastTentUuid])

	useEffect(() => {
		getSearchIssuesOptions()
	}, [getSearchIssuesOptions])

	// Get Feedback api
	const getFeedback = useCallback(
		feedbackfilter => {
			const onSuccess = res => {
				setLoading(true)
				if (res?.data?.status === 'success') {
					setLoading(false)
					setFeedbackData(res?.data?.data)
				} else {
					setFeedbackData([])
				}
			}
			const onFailure = err => {
				console.log('Get Feedback', err)
			}
			getFeedbackApi.getFeedback(tentUserUuid, mastTentUuid, feedbackfilter).then(onSuccess, onFailure)
		},
		[tentUserUuid, mastTentUuid]
	)
	useEffect(() => {
		getFeedback(feedbackfilter)
	}, [getFeedback, feedbackfilter])

	// Get QA Answered data api
	const getQaAnswered = useCallback(
		QaFilter => {
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					setQaAnsweredData(res?.data?.data)
				} else {
					setQaAnsweredData([])
				}
			}
			const onFailure = err => {
				console.log('QA Answered ', err)
			}
			getQaAnsweredApi.getQaAnswered(tentUserUuid, mastTentUuid, QaFilter).then(onSuccess, onFailure)
		},
		[tentUserUuid, mastTentUuid]
	)

	useEffect(() => {
		getQaAnswered(QaFilter)
	}, [getQaAnswered, QaFilter])

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs value={tabValue} onChange={handleChange} aria-label='simple tabs example' indicatorColor='primary'>
					<Tab label='Info' {...a11yProps(0)} />
					<Tab label='Feedback' {...a11yProps(1)} />
					<Tab label='Q&A answered' {...a11yProps(2)} />
					<Tab label='Health feed' {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			{/* Hospital */}
			<TabPanel value={tabValue} index={0} color='disabled'>
				<div className={classes.ordercardsubposition}>
					<Info mastTentUuid={mastTentUuid} tentUserUuid={tentUserUuid} />
				</div>
			</TabPanel>

			{/* Feedback */}
			<TabPanel value={tabValue} index={1}>
				<div className={classes.ordercardsubposition}>
					<div className={classes.searchissue}>
						<section className={classes.autoCompleteSpacing}>
							<Autocomplete
								AutoCompleteStyle={classes.feedbackAutocomplete}
								disableClearable={true}
								size={'small'}
								id={'SearchIssues'}
								name={'SearchIssues'}
								placeholder='Search issues'
								options={searchIssuesOptions}
								getOptionLabel={option => {
									return option?.specialityName
								}}
								onChange={(e, value) => {
									setFeedbackFilter(`specialityId/` + value?.specialityUuid)
								}}
							/>
						</section>
						<section className={classes.autoCompleteSpacing}>
							<Autocomplete
								AutoCompleteStyle={classes.feedbackAutocomplete}
								disableClearable={true}
								size={'small'}
								id={'sortBy'}
								name={'sortBy'}
								placeholder='Sort by'
								options={sortBy}
								getOptionLabel={option => {
									return option?.option
								}}
								onChange={(e, value) => {
									setFeedbackFilter(value?.value)
								}}
							/>
						</section>
					</div>

					{_.isEmpty(feedbackData) ? (
						<>
							<div className={classes.emptyDataWrapper}>
								<section className={classes.emptyDataSection}>
									<Image className={classes.noDataImg} src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noFeedbackData.png' width={106} height={140} alt='No Feedback Data' />
									<Typography variant='h5' className={classes.noData}>
										No feedback yet
									</Typography>
								</section>
							</div>
						</>
					) : (
						<>
							{feedbackData?.map(data => (
								<>
									<div className={classes.borderBottomPosition} key={data?.custAskQuestUuid}>
										<div className={classes.feedbackmainposition}>
											{data?.thumbnailFilePath || <PersonIcon />}
											<div className={classes.contenttextposition}>
												<div>
													<Typography variant='h5'>{data?.custName}</Typography>
													<Typography variant='h6' className={classes.yearsposition}>
														{data?.custAge}
													</Typography>
												</div>
												<Typography variant='h5' style={{color: '#2a2a2a5c'}}>
													{data?.interval} months ago
												</Typography>
											</div>
										</div>
										<div className={classes.content1maindivision}>
											<Typography variant='h5' style={{fontWeight: '500'}}>
												{data?.title}
											</Typography>
											<Typography variant='h5'>{data?.question}</Typography>
										</div>
										<div className={classes.RecommendsPosition}>
											<Typography variant='h5'>{'Recommends for'}</Typography>
											{data?.recommends?.map(val => (
												<Typography variant='h5' className={classes.buttonContent2position}>
													{val}
												</Typography>
											))}
										</div>
									</div>
								</>
							))}
						</>
					)}
				</div>
			</TabPanel>

			{/* Q&A Answered */}
			<TabPanel value={tabValue} index={2} color='disabled'>
				<div className={classes.ordercardsubposition}>
					<div className={classes.searchissue}>
						<Autocomplete
							AutoCompleteStyle={classes.QaAutocomplete}
							disableClearable={true}
							size={'small'}
							id={'qaSearch'}
							name={'qaSearch'}
							placeholder='Search issues'
							options={searchIssuesOptions}
							getOptionLabel={option => {
								return option?.specialityName
							}}
							onChange={(e, value) => {
								setQaFilter(`specialityId/` + value?.specialityUuid)
							}}
						/>
					</div>
					{_.isEmpty(QaAnsweredData) ? (
						<>
							<div className={classes.emptyDataWrapper}>
								<section className={classes.emptyDataSection}>
									<Image className={classes.noDataImg} src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoQaAns.png' width={106} height={140} alt='No Feedback Data' />
									<Typography variant='h5' className={classes.noData}>
										No Questions answered yet
									</Typography>
								</section>
							</div>
						</>
					) : (
						<>
							<QuestionAnswer QaAnsweredData={QaAnsweredData} />
						</>
					)}
				</div>
			</TabPanel>

			{/* Health Feed */}
			<TabPanel value={tabValue} index={3} color='disabled'>
				<div className={classes.ordercardsubposition}>
					<HealthFeed mastTentUuid={mastTentUuid} tentUserUuid={tentUserUuid} />
				</div>
			</TabPanel>
		</div>
	)
}
