import React, {useCallback, useEffect, useState} from 'react'
import {Grid, IconButton, makeStyles, Typography} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import moment from 'moment'
import {useRouter} from 'next/router'
import _ from 'lodash'
import {BeatLoader} from 'react-spinners'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'
import workoutlist from '../../../../Service/MyAccount/workoutplan/workout'
import secureLocalStorage from 'react-secure-storage'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'

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
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	headerWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingInline: 14,
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
	StartDate: {
		padding: '16px',
		borderRadius: 20,
		background: '#7C60DC',
		boxShadow: '0px 0px 9px #00000029',
		opacity: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& .MuiTypography-h5': {
			color: '#F2F2F2',
			fontWeight: 500,
		},
	},
	workoutplanbox: {
		width: '85%',
		paddingBlock: 12,
		border: '1px solid #FFFFFF',
		boxShadow: 'inset 0px 0px 10px #00000024, 0px 0px 8px #FFFFFF29',
		borderRadius: 7,
		marginInlineEnd: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingInline: '10px',
		background: '#EEEAFB 0% 0% no-repeat padding-box',
		cursor: 'pointer',
		'&:hover': {
			background: '#7047ea2e',
		},
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
			paddingInline: '5px',
			marginInlineEnd: '0px',
			marginInlineStart: '10px',
			height: 'auto',
		},
		[theme.breakpoints.down('md')]: {
			marginInlineStart: '8px',
		},
	},
	period: {
		backgroundColor: '#0AA13217',
		width: '200px',
		height: '32px',
		padding: '4px',
		borderRadius: 6,
		color: '#F2F2F2',
		textAlign: 'center',
		'& .MuiTypography-h5': {
			color: '#F2F2F2',
			fontWeight: 500,
		},
		[theme.breakpoints.down('340')]: {
			height: 'auto',
			width: '190px',
		},
	},

	workoutext: {
		maxWidth: '200px',
	},
	noData: {
		paddingBlockStart: 40,
		textAlign: 'center',
	},
	noPlanText: {
		fontSize: 16,
		color: '#000',
		textAlign: 'center',
	},
	position: {
		textAlign: 'center',
	},
}))

const Workoutplan = props => {
	const {toggleState, setToggleState} = props
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const classes = useStyles()
	const router = useRouter()
	const [loading, setLoading] = useState(true)
	const [workoutPlanList, setWorkoutPlan] = useState([])
	const {practiceName} = useAuth()
	const handleToggele = () => {
		setToggleState(!toggleState)
	}

	const workOutData = useCallback(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setWorkoutPlan(res?.data?.data?.GetExerciseList)
			}
			setLoading(false)
		}

		const onFailure = _err => {}

		workoutlist.WorkoutPlanDetails({custUuid}).then(onSuccess, onFailure)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [custUuid, practiceName])
	useEffect(() => {
		workOutData()
	}, [workOutData])

	console.log('workoutPlan', workoutPlanList)

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggele}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.root}>
				<section className={classes.headerWrapper}>
					<div>
						<Typography style={{color: '#000000', fontSize: 20, fontWeight: 500}} variant='h5'>
							Workout Plan
						</Typography>
					</div>
				</section>
				<div className={classes.headLine}>
					<hr className={classes.lineBorder} />
					<hr className={classes.lineBoder} />
				</div>

				<div>
					{loading && _.isEmpty(workoutPlanList) ? (
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<BeatLoader size={12} margin={2} color={'#24A0ED'} />
						</div>
					) : _.isEmpty(workoutPlanList) ? (
						<div className={classes.position}>
							<Image
								alt='no workout plan pic'
								src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/noWorkoutPlans.svg'
								width={324}
								height={324}
							/>
						</div>
					) : (
						<InfiniteScroll
							dataLength={workoutPlanList?.length}
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
								{!_.isEmpty(workoutPlanList) &&
									_.map(workoutPlanList, (item, idx) => (
										<div
											container
											style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingInline: '15px', marginBlockEnd: '15px'}}>
											<div className={classes.StartDate}>
												<Typography variant='h5'>{moment(new Date(item?.startDate)).format('MMM')}</Typography>
												<Typography variant='h5'>{moment(new Date(item?.startDate)).format('DD')}</Typography>
											</div>

											<div
												className={classes.workoutplanbox}
												onClick={() => {
													router.push({
														pathname: '/myaccount/workoutdetail',
														query: {workout: item?.clientExerciseNameUuid},
													})
												}}>
												<Grid className={classes.workoutext}>
													<Typography style={{fontSize: '16px', fontWeight: '700', lineHeight: '1.2'}}>{item?.tentName}</Typography>
													<Typography style={{fontSize: '14px', fontWeight: '400'}}>{item?.clientExerciseName}</Typography>
												</Grid>

												<Grid className={classes.period}>
													<Typography style={{fontSize: '15px'}}>
														{moment(item?.startDate).format('YYYY-MM-DD')} to {moment(item?.endDate).format('YYYY-MM-DD')}
													</Typography>
												</Grid>
											</div>
										</div>
									))}
							</>
						</InfiniteScroll>
					)}
				</div>
			</div>
		</>
	)
}

export default Workoutplan
