import React from 'react'
import {makeStyles, Paper, Typography} from '@material-ui/core'
import {Accessible, Apartment, LocalHospital, AirlineSeatFlat, ThumbUp, LocationOn} from '@material-ui/icons'
import Image from 'next/image'
import GradientButton from '../GradientButton'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiPaper-root': {
			background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			[theme.breakpoints.up('xs')]: {
				padding: 10,
				marginBlockEnd: 14,
			},
			[theme.breakpoints.up('sm')]: {
				padding: 20,
				marginBlockEnd: 16,
			},
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				justifyContent: 'space-between',
			},
		},
	},
	imageContainer: {
		// border: '1px solid black',
		position: 'relative',
		'& img': {
			borderRadius: 10,
		},
		[theme.breakpoints.up('xs')]: {
			width: 100,
			height: 100,
		},
		[theme.breakpoints.up('sm')]: {
			width: 132,
			height: 132,
		},
	},
	firstBlock: {
		display: 'flex',
		[theme.breakpoints.up('xs')]: {
			gap: 10,
		},
		[theme.breakpoints.up('sm')]: {
			gap: 12,
		},
	},
	leftSection: {
		// border: '1px solid orange',
		textAlign: 'center',
		'& a': {
			color: theme.palette.care.main,
			textDecoration: 'none',
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	rightSection: {
		// border: '1px solid crimson',
		'& .MuiTypography-h3': {
			color: theme.palette.care.main,
			// color: props => props.primaryColor,
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
				paddingBlockEnd: 8,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
				paddingBlockEnd: 10,
			},
		},
		'& .MuiTypography-h4': {
			color: theme.palette.paragraph.main,
			fontStyle: 'normal',
			display: 'flex',
			alignItems: 'center',
			gap: 4,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
				paddingBlockEnd: 6,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
				paddingBlockEnd: 8,
			},
			'& .MuiSvgIcon-root': {
				color: theme.palette.care.main,
			},
		},
	},
	review: {
		paddingBlockStart: 8,
	},

	reviewLike: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: '#1A73E8',
			fontSize: 20,
		},

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
			'& span': {
				color: '#1A73E8',
			},
		},
	},
	reviewStories: {
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			textDecoration: 'underline',
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	findMoreBtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	hospFacility: {
		display: 'flex',
		alignItems: 'center',
		gap: 18,
	},
	secondBlock: {
		// border: '1px solid green',
		[theme.breakpoints.up('xs')]: {
			marginBlockStart: 10,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlockStart: 0,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
		},
	},

	secondBlockThree: {
		// border: '1px solid red',
		textAlign: 'center',
	},
}))

const HospitalDetailCard = props => {
	const classes = useStyles(props)

	return (
		<div className={classes.root}>
			<Paper>
				<div className={classes.firstBlock}>
					<div className={classes.leftSection}>
						<div className={classes.imageContainer}>
							<Image alt='Hospital' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg' layout='fill' objectFit='fill' />
						</div>
						<div className={classes.review}>
							<div className={classes.reviewLike}>
								<ThumbUp />
								<Typography variant='h5'>
									<span>{'92'}%</span> Popularity
								</Typography>
							</div>
							<div className={classes.reviewStories}>
								<Typography variant='h5'>({'345'} Patients Stories)</Typography>
							</div>
						</div>
					</div>
					<div className={classes.rightSection}>
						<Typography variant='h3'>Gobal Hospitals</Typography>
						<Typography variant='h4'>
							<Apartment />
							Multi - Speciality Hospital
						</Typography>
						<div className={classes.hospFacility}>
							<Typography variant='h4'>
								<AirlineSeatFlat />
								{'80'} Beds
							</Typography>
							<Typography variant='h4'>
								<LocalHospital />
								{'65'} Doctors
							</Typography>
						</div>
						<Typography variant='h4'>
							<Accessible />
							Wheelchair accessibility available
						</Typography>
						<Typography variant='h4'>
							<LocalHospital />
							Ambulance accessibility available
						</Typography>
						<Typography variant='h4'>
							<LocationOn />
							Tharanallur, Coimbatore, TN 620008.
						</Typography>
					</div>
				</div>
				<div className={classes.secondBlock}>
					<div className={classes.secondBlockThree}>
						<GradientButton findMorebtn={classes.findMoreBtn}>Call Now</GradientButton>
					</div>
				</div>
			</Paper>
		</div>
	)
}

export default HospitalDetailCard
