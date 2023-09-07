import {Avatar, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'
import Header from '../../LandingPageHeader'
import FadeVariant from '../../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../../components/FramerMotion/PageFadeEffect'
// import PageFadeHorizondal from '../../../components/FramerMotion/PageFadeHorizondal'
import WhatsAppBot from '../WhatsAppBot'
import LottiePlayerForStaticPages from '../../../components/LottiePlayerForStaticPages'
import EventsJSON from '../../../../public/lottieFiles/staticPagesLottie/events.json'

const useStyles = makeStyles(theme => ({
	baseRoot: {
		background: '#FFFFFF',
	},
	maxWidthControl: {
		maxWidth: 1320,
		margin: '0px auto',
		position: 'relative', // for WhatsApp Bot

		[theme.breakpoints.up('xs')]: {
			paddingInline: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 'unset',
		},

		'& .MuiTypography-subtitle1': {
			color: theme.palette.lyfngo.content1,
			textAlign: 'justify',
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,

			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
				paddingBlockStart: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
				paddingBlockStart: 26,
			},
		},
	},
	mobileModuleImage: {
		[theme.breakpoints.up('xs')]: {
			display: 'unset',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	secHeading: {
		display: 'flex',
		alignItems: 'center',
		gap: 14,
		'& .MuiTypography-h3': {
			background: theme.palette.lyfngo.gradientText,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 26,
			},
		},
	},
	normalHeading: {
		'& .MuiTypography-h3': {
			textAlign: 'left',
			color: theme.palette.lyfngo.content1,
			fontWeight: 600,
			'& span': {
				color: theme.palette.lyfngo.main,
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 26,
			},
		},
	},
	ellipseContainer: {
		textAlign: 'start',
		marginInlineStart: '20%',
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	whatsAppBot: {
		borderRadius: 8,
		position: 'sticky',
		bottom: 20,
		right: 20,
		zIndex: 1,
		height: 62,
		width: '100%',
	},
	moduleImage: {
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'unset',
		},
	},

	sec1: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 'unset',
		},
	},
	sec11: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec12: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec2: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 52,
		},
	},
	sec21: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec22: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
}))

const MembershipEvents = () => {
	const classes = useStyles()

	return (
		<div className={classes.baseRoot}>
			<Header />
			<div className={classes.maxWidthControl}>
				<div className={classes.ellipseContainer}>
					<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/blueEllipseBall.svg'} alt='blue ball' width={270} height={72} />
				</div>
				<FadeVariant>
					<div className={classes.sec1}>
						<div className={classes.sec11}>
							<div className={classes.secHeading}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/membershipIcon.svg'}
									alt='dashboard icon'
									width={28}
									height={28}
								/>
								<Typography variant='h3'>Membership</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/membershipScreen.svg'}
									alt='module functioning example'
									width={395}
									height={246}
								/>
							</div>
							<Typography variant='subtitle1'>
								The membership program offers access to upgraded services and facilities to customers. <b>Personalized care</b> is the major highlight
								of membership at any health or wellness facility. Financially, the customer can get better facility services and care at a better rate
								significantly. Memberships are long-term commitments from customers.
							</Typography>
							<Typography variant='subtitle1'>
								They represent the specialist or entity everywhere. By committing to such a centre, the customers can expect distinct advantages in
								their visits. The facility or specialist can create new or revise the membership plans periodically. The validity and prices of these
								plans can defer by months. Members, of course, are, without a doubt, considered <b>privileged customers</b> at the launch of a new
								product or service.
							</Typography>
						</div>
						<div className={classes.sec12}>
							<div className={classes.moduleImage}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/membershipScreen.svg'}
									alt='module functioning example'
									width={495}
									height={346}
								/>
							</div>
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.moduleImage}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/EventsImage.svg'}
									alt='module functioning example'
									width={514}
									height={318}
								/> */}
								<LottiePlayerForStaticPages LottieFile={EventsJSON} width={'80%'} />
							</div>
						</div>

						<div className={classes.sec22}>
							<div className={classes.secHeading}>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/eventsIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Events</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/EventsImage.svg'}
									alt='module functioning example'
									width={414}
									height={218}
								/> */}
								<LottiePlayerForStaticPages LottieFile={EventsJSON} width={'99%'} />
							</div>
							<Typography variant='subtitle1'>
								The Events page allows you to prepare for the event, save, and activate it at a later date. All the registered members of your center
								will receive the event link to join. New members can use the link to register and join the event.
							</Typography>
							<Typography variant='subtitle1'>
								The specialist or provider can view the number of registrations and details on <b>the Events page</b> on the site.
							</Typography>
							<Typography variant='subtitle1'>
								The event reminders can be sent out to all the registered customers through <b>sms</b> or <b>WhatsApp</b>.
							</Typography>
						</div>
					</div>
				</PageFadeEffect>

				<div className={classes.whatsAppBot}>
					<WhatsAppBot />
				</div>
			</div>
			<LandingFooter />
		</div>
	)
}
export default MembershipEvents
