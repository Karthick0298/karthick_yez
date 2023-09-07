import React, {useCallback, useEffect, useState} from 'react'
import {Button, Grid, IconButton, makeStyles, Typography} from '@material-ui/core'
import {useRouter} from 'next/router'
import {BeatLoader} from 'react-spinners'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import moment from 'moment'
import _ from 'lodash'
import Image from 'next/image'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'
import {getProfileImgUrl} from '../../../../../lib/Utils/profileUrlImage'

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
	root: {
		// border: '1px solid blue',
	},
	container: {
		// border: '1px solid green',
	},
	details: {
		paddingBlock: 8,
		'& .MuiTypography-h5': {
			color: '#000',
			fontSize: 16,
			fontWeight: 500,
		},
		'& .MuiTypography-subtitle1': {
			marginBlockStart: -4,
			fontWeight: 400,
			color: '#707070',
			fontSize: 20,
		},
	},

	cardPeriod: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	periodContainer: {
		color: '#3D4756',
		fontSize: 17,
		background: '#E0EAFF',
		paddingBlock: 10,
		paddingInline: 24,
		borderRadius: 24,
	},
	body: {
		[theme.breakpoints.up('xs')]: {
			paddingInline: 20,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 50,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 72,
		},
	},
	header: {
		padding: '20px',

		'& .MuiTypography-h2': {
			color: '#707070',
			fontStyle: 'normal',
			fontSize: 16,
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			padding: 16,
		},
		[theme.breakpoints.down('md')]: {
			padding: 16,
		},
	},
	cardPeriodContainer: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('lg')]: {
			flexDirection: 'row',
		},
	},
	memberShipContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}))

const MembershipDetails = props => {
	const {toggleState, setToggleState, membershipDetails} = props
	const {token, practiceName} = useAuth()

	const membershipName = membershipDetails.membershipName
	const period = membershipDetails.period
	const validity = membershipDetails.validity
	const price = membershipDetails.price
	const features = membershipDetails.features
	const clientMembershipStatus = membershipDetails?.clientMembershipStatus
	const imageUuid = membershipDetails?.imageUuid
	const currencyCode = membershipDetails?.currencyCode
	const classes = useStyles()
	const router = useRouter()

	const handleToggele = () => {
		setToggleState(!toggleState)
	}

	useEffect(() => {}, [])

	useEffect(() => {
		if (membershipName === '' || _.isEmpty(membershipName)) {
			router.back()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [membershipName])

	// console.log('membershipNamemembershipName', membershipName, period, validity, price, features, practiceName)
	console.log('membershipNamemembershipName', practiceName?.mastTentUuid)

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggele}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.root}>
				<div className={classes.container}>
					<Grid container className={classes.header} alignItems='center'>
						<Grid item xs={1}>
							<IconButton className={classes.backPage} onClick={() => router.back()}>
								<ArrowBackIosRoundedIcon />
							</IconButton>
						</Grid>
						<Grid item xs={11}>
							<Typography variant='h2'>Membership Details</Typography>
						</Grid>
					</Grid>
					<div className={classes.body}>
						<div className={classes.cardPeriodContainer}>
							<div>
								<Typography variant='h5' className={classes?.periodContainer}>
									Period : <span> {period}</span>
								</Typography>
							</div>
							<div className={classes.details}>
								<Typography variant='h5'>Status</Typography>
								{clientMembershipStatus === 'Active' && (
									<Typography variant='h5' style={{color: '#38CF47'}}>
										{clientMembershipStatus}
									</Typography>
								)}
								{clientMembershipStatus === 'InActive' && (
									<Typography variant='h5' style={{color: '#D91E15'}}>
										{clientMembershipStatus}
									</Typography>
								)}
								{clientMembershipStatus === 'GenerateBillShow' && (
									<Typography variant='h5' style={{color: '#0000FF'}}>
										Yet to Bill
									</Typography>
								)}
								{clientMembershipStatus === 'GenerateBillHide' && (
									<Typography variant='h5' style={{color: '#ADD8E6'}}>
										Unable to Generate Bill
									</Typography>
								)}
								{clientMembershipStatus === 'RenewedShow' && (
									<Typography variant='h5' style={{color: '#FFFF00'}}>
										Yet to Renew
									</Typography>
								)}
								{clientMembershipStatus === 'RenewedHide' && (
									<Typography variant='h5' style={{color: '#FFFFE0'}}>
										Unable to Renew
									</Typography>
								)}
								{clientMembershipStatus === 'Expired' && (
									<Typography variant='h5' style={{color: '#FFA500'}}>
										{clientMembershipStatus}
									</Typography>
								)}
							</div>
						</div>

						<Grid container xs={12} sm={12} md={12}>
							<Grid item xs={12} sm={12} md={5}>
								<div className={classes.details}>
									<Typography variant='h5'>Membership Name</Typography>
									<Typography variant='subtitle1'>{membershipName}</Typography>
								</div>
								<div className={classes.details}>
									<Typography variant='h5'>Validity</Typography>
									<Typography variant='subtitle1'>{validity} Months</Typography>
								</div>
								<div className={classes.details}>
									<Typography variant='h5'>Price</Typography>
									<Typography variant='subtitle1'>
										{_.isEqual(currencyCode, 'INR') ? '₹' : '$'}
										{price}
									</Typography>
								</div>
								<div className={classes.details}>
									<Typography variant='h5'>Features</Typography>
									<Typography variant='subtitle1'>{features}</Typography>
								</div>
							</Grid>

							<Grid item xs={12} sm={12} md={5} className={classes.details}>
								<Image
									src={imageUuid ? getProfileImgUrl(imageUuid, token) : 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/membership.png'}
									alt='membership'
									width={200}
									height={200}
								/>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</>
	)
}

export default MembershipDetails
