import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import BlockSection from './BlockSection'
import FreeTrailCard from '../../../components/FreeTrailCard'
import {Typography} from '@material-ui/core'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		background: '#FFFFFF',
	},
	mainRoot: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',

		[theme.breakpoints.up('xs')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('xl')]: {
			maxWidth: 1360,
		},
	},
	container: {
		// border: '1px solid green',
		fontFamily: 'Poppins',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: 1360,
		},
	},
	trailContainer: {
		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 20,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockEnd: 34,
		},
	},
	missionValue: {
		paddingBlock: '42px',
		maxWidth: '1000px',
		paddingInline: '12px',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		gap: '18px',
		margin: 'auto',
		'& .MuiTypography-h5': {
			lineHeight: '29px',
			wordSpacing: '4px',
			letterSpacing: '2px',
			fontSize: 14,
		},
		'& .MuiTypography-h2': {
			fontSize: 28,
			letterSpacing: '2px',
			lineHeight: '35px',
		},
	},
	sectionThreeCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',

		[theme.breakpoints.up('xs')]: {
			maxWidth: 200,
			padding: 6,
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: 218,
			padding: 8,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 248,
			padding: 10,
		},

		'& .MuiTypography-h5': {
			textAlign: 'center',
			fontWeight: 500,
			paddingBlockStart: 6,

			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 22,
			},
		},

		'& .MuiTypography-subtitle1': {
			textAlign: 'center',
			color: '#303030',
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
			},
		},
	},
	sectionThree: {
		borderRadius: 16,
		background: '#FFFFFF',
		boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
		padding: 12,
		maxWidth: 1100,
		width: '100%',
		display: 'flex',
		marginBlockEnd: '42px',
		flexWrap: 'wrap',
		margin: 'auto',
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'space-around',
		},
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
		},
	},
	dashBoardContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 18,
		'& .MuiTypography-h5': {
			lineHeight: '29px',
			wordSpacing: '4px',
			letterSpacing: '2px',
			fontSize: 14,
		},
		'& .MuiTypography-h2': {
			fontSize: 28,
			letterSpacing: '2px',
			lineHeight: '35px',
		},
		'& .MuiButton-root': {
			color: '#fff',
background: theme.palette.lyfngo.backgroundImage,			boxShadow: '0px 6px 18px #0000001A',
			borderRadius: '6px',
			paddingInline: 22,
			opacity: 1,
			fontFamily: theme.typography.h6.fontFamily,
			textTransform: 'none',
			transition: 'all 0.2s',
			'&:hover': {
				transform: 'scale(1.06)',
	background: theme.palette.lyfngo.backgroundImage,			},
		},
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			paddingInline: '16px',
		},
		[theme.breakpoints.up('sm')]: {
			width: '100%',
			paddingInline: '30px',
		},
		[theme.breakpoints.up('md')]: {
			width: '50%',
			paddingInline: '50px',
		},
	},
	imageSection: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			paddingInline: 18,
		},
		[theme.breakpoints.up('sm')]: {
			width: '100%',
			paddingInline: 18,
		},
		[theme.breakpoints.up('md')]: {
			width: '50%',
		},
	},
	dashBoard: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse',
			gap: 22,
			paddingBlock: '18px',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'column-reverse',
			gap: 22,
			paddingBlock: '18px',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},
	contentChange: {
		display: 'flex',
		gap: '24px',
	},
}))

export default function PartnersAndClients() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div style={{maxWidth: '1360px', margin: '0px auto'}}>
				<div className={classes.mainRoot}>
					<BlockSection />
				</div>
				<div className={classes.missionValue}>
					<Typography variant='h2'>Our Mission and Our Values</Typography>
					<Typography variant='h5'>
						Lyfngo strives to help small businesses and independent service professionals reach their objectives by bringing technology solutions that
						foster growth. Through innovative product offerings, Vagaro gives back a business owner's most valuable resource: time. Our products and
						services are designed to take the guesswork out of business operations, giving each business—no matter the size—the opportunity to thrive.
					</Typography>
				</div>
				<div className={classes.sectionThree}>
					<div className={classes.sectionThreeCard}>
						<Image
							src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/appointmentIcon.svg'
							alt='module icon'
							width={52}
							height={52}
						/>
						<Typography variant='h5'>Appointments</Typography>
						<Typography variant='subtitle1'>{'booking a month for customer'}</Typography>
					</div>
					<div className={classes.sectionThreeCard}>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/billingIcon.svg' alt='module icon' width={52} height={52} />
						<Typography variant='h5'>Billing</Typography>
						<Typography variant='subtitle1'>{'Growth in new client bookings'}</Typography>
					</div>
					<div className={classes.sectionThreeCard}>
						<Image
							src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/appointmentIcon.svg'
							alt='module icon'
							width={52}
							height={52}
						/>
						<Typography variant='h5'>Appointments</Typography>
						<Typography variant='subtitle1'>booking a month for customer</Typography>
					</div>
					<div className={classes.sectionThreeCard}>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/safetyIcon.svg' alt='module icon' width={52} height={52} />
						<Typography variant='h5'>Safety {`&`} Security</Typography>
						<Typography variant='subtitle1'>Professional register on lyfngo</Typography>
					</div>
				</div>
				<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/leftcheck.png'} alt='leftcheck' width={102} height={102} />
				<div className={classes.dashBoard}>
					<div className={classes.imageSection}>
						<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/partnerDashboard.png'} alt='chart' width={724} height={497} />
					</div>
					<div className={classes.dashBoardContent}>
						<Typography variant='h2'>Build Your Brand With Our Vendor Tools</Typography>
						<Typography variant='h5'>
							Every great business needs great tools to build it. With our Vendor Dashboard, you can easily list your offerings online for sale,
							contact your customers, track your performance and get paid!
						</Typography>
						<div className={classes.contentChange}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/clientDashboard.svg' alt='module icon' width={70} height={70} />
							<Typography variant='h5'>Create your own sales page for your offerings with our page editor</Typography>
						</div>
						<div className={classes.contentChange}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/ClientListview.svg' alt='module icon' width={70} height={70} />
							<Typography variant='h5'>Create your own sales page for your offerings with our page editor</Typography>
						</div>
						<div className={classes.contentChange}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/calenderClient.svg' alt='module icon' width={70} height={70} />
							<Typography variant='h5'>Create your own sales page for your offerings with our page editor</Typography>
						</div>
					</div>
				</div>
				<div style={{textAlign: 'end'}}>
					<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/rightcheck.png'} alt='leftcheck' width={102} height={102} />
				</div>
				<div className={classes.trailContainer}>
					<FreeTrailCard />
				</div>
			</div>
			<LandingFooter />
		</div>
	)
}
