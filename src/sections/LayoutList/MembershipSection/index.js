import React, {useCallback, useEffect, useState} from 'react'
import {Button, Grid, IconButton, makeStyles, Typography} from '@material-ui/core'
import {useRouter} from 'next/router'
import {BeatLoader} from 'react-spinners'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import moment from 'moment'
import _ from 'lodash'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'
import MembershipApi from '../../../../Service/MyAccount/Membership/api'
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
			cursor: 'pointer',
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

	noData: {
		paddingBlockStart: 40,
		textAlign: 'center',
	},

	heading: {
		color: '#000000',
		fontSize: 20,
		fontWeight: 500,
		paddingInlineStart: 20,
	},
	noMembertext: {
		fontSize: 16,
		color: '#000',
		textAlign: 'center',
	},

	container: {
		// border: '1px solid green',
		paddingInline: 10,
		paddingBlock: 10,
		overflowY: 'scroll',
	},
	card: {
		background: '#EEEAFB 0% 0% no-repeat padding-box',
		boxShadow: 'inset 0px 0px 10px #00000024, 0px 0px 8px #FFFFFF29',
		border: '1px solid #FFFFFF',
		borderRadius: 7,
		marginBottom: 16,
		cursor: 'pointer',
		'&:hover': {
			background: '#7047ea2e',
		},
		[theme.breakpoints.up('xs')]: {
			padding: 12,
		},
		[theme.breakpoints.up('sm')]: {
			padding: 12,
		},
	},
	cardnameDatail: {
		'& .MuiTypography-h5': {
			color: '#000000',
			fontSize: 18,
			fontWeight: 500,
		},
		'& .MuiTypography-subtitle1': {
			color: '#3E4754',
			fontSize: 16,
		},
	},
	cardPeriod: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h5': {
			color: '#0B5D02',
			fontSize: 15,
			background: '#0AA13217',
			paddingBlock: 10,
			paddingInline: 18,
			borderRadius: 6,
		},
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 16,
			justifyContent: 'center',
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 'unset',
		},
	},
	cardActions: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiButton-outlined': {
			textTransform: 'inherit',
			color: '#7047EA',
			borderColor: '#7047EA',
			fontSize: 16,
		},
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'center',
		},
		[theme.breakpoints.up('lg')]: {
			justifyContent: 'flex-end',
		},
	},
}))

const MembershipSection = props => {
	const {toggleState, setToggleState} = props
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
	const classes = useStyles()
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [membershipData, setMemebershipData] = useState([])
	const {practiceName} = useAuth()

	const handleToggele = () => {
		setToggleState(!toggleState)
	}

	const getMembershipDetails = useCallback(() => {
		setLoading(true)
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setMemebershipData(res?.data?.data)
				setLoading(false)
			}
		}

		const onFailure = err => {
			setMemebershipData([])
			setLoading(false)
		}

		!_.isEmpty(custUuid) && MembershipApi.getClientMembership({custUuid: custUuid, mastTentUuid: ''}).then(onSuccess, onFailure)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [custUuid, practiceName])

	useEffect(() => {
		getMembershipDetails()
	}, [getMembershipDetails])

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggele}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.root}>
				<section className={classes.headerWrapper}>
					<div>
						<Typography className={classes.heading} variant='h5'>
							Membership
						</Typography>
					</div>
				</section>
				<div className={classes.headLine}>
					<hr className={classes.lineBorder} />
				</div>

				<div className={classes.mainRoot}>
					{loading ? (
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={classes.loadercontainer}>
							<BeatLoader size={12} margin={2} color={'#24A0ED'} />
						</div>
					) : (
						<>
							{_.isEmpty(membershipData) ? (
								<div className={classes.noData}>
									<Image
										alt='no data pic'
										src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/NoMembership.png'
										width={318}
										height={320}
									/>
								</div>
							) : (
								<InfiniteScroll
									dataLength={membershipData?.length}
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
									<div className={classes.container}>
										{membershipData?.map((item, index) => (
											<div className={classes.card} key={item?.clientMembershipUuid}>
												<Grid
													container
													xs={12}
													sm={12}
													md={12}
													onClick={() =>
														router.push(
															{
																pathname: '/myaccount/membershipdetails',
																query: {
																	membershipName: item?.membershipName || '',
																	period: `${moment(item?.startDate).format('DD-MM-YYYY')} to ${moment(item?.endDate).format('DD-MM-YYYY')}` || '',
																	validity: item?.validityPeriod || '',
																	price: item?.price || 'NA',
																	features: item?.features || 'NA',
																	clientMembershipStatus: item?.clientMembershipStatus || '',
																	imageUuid: item?.imageUuid || '',
																	currencyCode: item?.currencyCode || '',
																},
															},
															'/myaccount/membershipdetails'
														)
													}>
													<Grid item xs={12} sm={12} md={4} className={classes.cardname}>
														<div className={classes.cardnameDatail}>
															<Typography variant='h5'>{item?.membershipName || ''}</Typography>
															<Typography variant='subtitle1'>{item?.validityPeriod || ''} Months</Typography>
														</div>
													</Grid>
													<Grid item xs={12} sm={12} md={4} className={classes.cardPeriod}>
														{(item?.clientMembershipStatus === 'Active' || item?.clientMembershipStatus === 'InActive') && (
															<Typography variant='h5'>
																Period :{' '}
																<span> {`${moment(item?.startDate).format('DD-MM-YYYY')} to ${moment(item?.endDate).format('DD-MM-YYYY')}`}</span>
															</Typography>
														)}
													</Grid>
													<Grid item xs={12} sm={12} md={4} className={classes.cardActions}>
														{item?.clientMembershipStatus === 'Active' && (
															<Typography variant='h5' style={{color: '#38CF47'}}>
																{item?.clientMembershipStatus}
															</Typography>
														)}
														{item?.clientMembershipStatus === 'InActive' && (
															<Typography variant='h5' style={{color: '#D91E15'}}>
																{item?.clientMembershipStatus}
															</Typography>
														)}
														{item?.clientMembershipStatus === 'GenerateBillShow' && (
															<Typography variant='h5' style={{color: '#0000FF'}}>
																Yet to Bill
																{/* {item?.clientMembershipStatus} */}
															</Typography>
														)}
														{item?.clientMembershipStatus === 'GenerateBillHide' && (
															<Typography variant='h5' style={{color: '#ADD8E6'}}>
																{/* {item?.clientMembershipStatus} */}
																Unable to Generate Bill
															</Typography>
														)}
														{item?.clientMembershipStatus === 'RenewedShow' && (
															<Typography variant='h5' style={{color: '#FFFF00'}}>
																Yet to Renew
																{/* {item?.clientMembershipStatus} */}
															</Typography>
														)}
														{item?.clientMembershipStatus === 'RenewedHide' && (
															<Typography variant='h5' style={{color: '#FFFFE0'}}>
																Unable to Renew
																{/* {item?.clientMembershipStatus} */}
															</Typography>
														)}
														{item?.clientMembershipStatus === 'Expired' && (
															<Typography variant='h5' style={{color: ' #FFA500'}}>
																{item?.clientMembershipStatus}
															</Typography>
														)}
													</Grid>
												</Grid>
											</div>
										))}
									</div>
								</InfiniteScroll>
							)}
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default MembershipSection
