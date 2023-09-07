import React, {useCallback, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {makeStyles, Typography, IconButton, Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import _ from 'lodash'
import moment from 'moment'
// import axios from 'axios'
import Image from 'next/image'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import InfiniteScroll from 'react-infinite-scroll-component'
import {BeatLoader} from 'react-spinners'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import DietPlanDetailsList from '../../../../../Service/MyAccount/DietPlanDetails'
import secureLocalStorage from 'react-secure-storage'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'

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
		padding: '16px !important',
		borderRadius: 20,
		background: '#7C60DC',
		boxShadow: '0px 0px 9px #00000029',
		borderRadius: 20,
		opacity: 1,
		'& .MuiTypography-h5': {
			color: '#F2F2F2',
			fontWeight: 500,
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
		cursor: 'pointer',
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
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexDirection: 'row',
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

	lineBorder: {
		borderColor: '#7070701c',
		width: '100%',
	},

	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		paddingBlockStart: 40,
		gap: 18,
		// margin: 60,
		'& .MuiTypography-subtitle1': {
			color: theme.palette.paragraph.main,
			fontWeight: 600,
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
	// new added
	tentNameContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	calenderContainer: {
		display: 'flex',
		gap: 8,
		paddingInline: 12,
		paddingBlock: 12,
	},
	DateContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	buttonStyle: {
		display: 'flex',
		justifyContent: 'end',
		'& .MuiButton-outlined': {
			border: '1px solid #7C60DC',
		},
		'& .MuiTypography-h6': {
			fontSize: 14,
			textTransform: 'none',
			color: '#7C60DC',
		},
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
		},
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center',
		},
	},
	period: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: ' #0AA13217 0% 0% no-repeat padding-box',
		borderRadius: 6,
		opacity: 1,
		'& .MuiTypography-h5': {
			color: '#0A6E03',
		},
	},
	noPlanText: {
		fontSize: 16,
		color: '#000',
		textAlign: 'center',
	},
}))

const DietplanSection = props => {
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
	const {toggleState, setToggleState} = props
	const {practiceName} = useAuth()

	const classes = useStyles()
	const router = useRouter()
	const [dietPlan, setDietPlan] = useState([])
	const [loading, setLoading] = useState(true)
	const handleToggle = () => {
		setToggleState(!toggleState)
	}
	const DietPlandata = useCallback(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setDietPlan(res?.data?.data)
			}
			setLoading(false)
		}
		const onFailure = _err => {}

		DietPlanDetailsList.DietPlanList({custUuid}).then(onSuccess, onFailure)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [custUuid, practiceName])
	useEffect(() => {
		DietPlandata()
	}, [DietPlandata])

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.root}>
				<section className={classes.headerWrapper}>
					<div>
						<Typography style={{color: '#000000', fontSize: 20, fontWeight: 500}} variant='h5'>
							Diet Plan
						</Typography>
					</div>
				</section>
				<div className={classes.mainContain}>
					<div className={classes.headLine}>
						<hr className={classes.lineBorder} />
						<hr className={classes.lineBorder} />
					</div>
				</div>
				{loading && _.isEmpty(dietPlan) ? (
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<BeatLoader size={12} margin={2} color={'#24A0ED'} />
					</div>
				) : _.isEmpty(dietPlan) ? (
					<div className={classes.position}>
						<Image alt='no diet plan pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/noDietPlan.svg' width={324} height={324} />
					</div>
				) : (
					<InfiniteScroll
						dataLength={dietPlan?.length}
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
							{!_.isEmpty(dietPlan) &&
								dietPlan?.map(item => (
									<Grid container key={item?.mastTentUuid} xs={12} sm={12} md={12} className={classes.calenderContainer}>
										<Grid item xs={12} sm={12} md={1} className={classes.calender}>
											<Grid item className={classes.DateContainer}>
												<Typography variant='h5'>{moment(new Date(item?.startDate)).format('MMM')}</Typography>
												<Typography variant='h5'>{moment(new Date(item?.startDate)).format('DD')}</Typography>
											</Grid>
										</Grid>
										<Grid
											item
											xs={12}
											sm={12}
											md={11}
											className={classes.mainBox}
											onClick={() => {
												router.push(
													{
														pathname: '/myaccount/dietplandetails',
														query: {uuid: item?.mastTentUuid, startDate: item?.startDate, endDate: item?.endDate},
													},
													'/myaccount/dietplandetails'
												)
											}}>
											<Grid item xs={12} sm={12} md={4} className={classes.tentNameContainer}>
												<Typography variant='h5'>{item?.tentName}</Typography>
											</Grid>
											<Grid item xs={12} sm={12} md={4} className={classes.period}>
												<Typography variant='h5'>
													Period : {moment(item?.startDate).format('YYYY-MM-DD')} to {moment(item?.endDate).format('YYYY-MM-DD')}
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								))}
						</>
					</InfiniteScroll>
				)}
			</div>
		</>
	)
}

export default DietplanSection
