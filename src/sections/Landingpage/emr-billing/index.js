import {Avatar, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'
import Header from '../../LandingPageHeader'
import FadeVariant from '../../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../../components/FramerMotion/PageFadeEffect'
import PageFadeHorizondal from '../../../components/FramerMotion/PageFadeHorizondal'
import WhatsAppBot from '../WhatsAppBot'
import LottiePlayerForStaticPages from '../../../components/LottiePlayerForStaticPages'
import emrJSON from '../../../../public/lottieFiles/staticPagesLottie/emr.json'



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
			paddingInline: 8,
		},

		'& .MuiTypography-subtitle1': {
			color: theme.palette.lyfngo.content1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,
			textAlign: 'justify',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
				paddingBlockStart: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
				paddingBlockStart: 26,
			},
		},
		'& .MuiTypography-subtitle2': {
			color: theme.palette.lyfngo.content1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,
			textAlign: 'justify',
			'& i': {
				fontWeight: 600,
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
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
			fontWeight: 600,
			color: theme.palette.lyfngo.main,

			'& span': {
				color: theme.palette.lyfngo.content1,
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

	sec1: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		// overflow: 'hidden',
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
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
			display: 'unset',
		},
	},

	sec2: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		// overflow: 'hidden',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 38,
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
	sec3: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-around',
		alignItems: 'center',
		// overflow: 'hidden',
	},
	sec31: {
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'unset',
		},
	},
	sec33: {
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'unset',
		},
	},
	listItem: {
		display: 'flex',
		gap: 16,
		[theme.breakpoints.up('xs')]: {
			paddingTop: 18,
			paddingInlineStart: 6,
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: 24,
			paddingInlineStart: 16,
		},
	},
	sec4: {
		display: 'flex',
		justifyContent: 'space-evenly',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 22,
			gap: 20,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 44,
		},
	},
	sec41: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '38%',
		},
	},
	sec42: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '38%',
		},
	},
}))

const EmrBilling = () => {
	const classes = useStyles()

	const BulletPoint = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/bulletPoint.svg'}
				style={{height: '16px', width: '16px', marginTop: 4}}
			/>
		)
	}

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
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/emrIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Medical EMR</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/emrImage.svg'}
									alt='module functioning example'
									width={405}
									height={260}
								/> */}
								<LottiePlayerForStaticPages LottieFile={emrJSON} width={'90%'} />
							</div>
							<Typography variant='subtitle1'>
								It is time to bid goodbye to all the paperwork, unorganized or missing files, and long queues to fill medical records in hospitals or
								clinics. Instead, it is time to embrace the revolution in <b>electronic medical record</b> management.
							</Typography>
							<Typography variant='subtitle1'>
								EMR is an Electronic medical record In simple words, it is a digital version of records, in a <b>simplified and organized method.</b>{' '}
								A health and wellness timeline of your customer in one click. In addition, you get notes and data from previous specialists. A medical
								report or health report gives explicit information about a person’s medical history, as mentioned before
							</Typography>
						</div>
						<div className={classes.sec12}>
							{/* <Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/emrImage.svg'}
								alt='module functioning example'
								width={505}
								height={360}
							/> */}
							<LottiePlayerForStaticPages LottieFile={emrJSON} width={'90%'} />
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>What is in store in an EMR system?</Typography>
							</div>
							<Typography variant='subtitle1'>
								In an EMR the specialist gets the minutest detail of the customer's health history. A specialist can monitor different body vitals
								based on the customer's age. Any data entered in the software thus makes the treatment more manageable. This approach of storing
								information has become convenient for the customer and the specialists. <b>Comprehensive and accurate documentation</b> of a
								customer’s medical history, tests, diagnosis, and treatment in EMRs ensures appropriate care throughout the provider's clinic. The
								<b> specialist can add the details of the bill,</b> and generate the invoice similar to, bill generation in the appointment page.
							</Typography>
						</div>
						<div className={classes.sec21}>
							<Typography variant='subtitle1'>
								In case more than one specialist is treating a customer at a time, it becomes convenient to view the clinical notes and go ahead with
								the treatment accordingly. This results in the <b>optimal care</b> of the customer. In addition to the advanced technology and
								excellent customer care, EMR's come with extra financial advantages. A decrease in labor and operational expenses is imminent. The
								bottom line is introducing EMR means accurate and efficient customer management that will enhance the clinic financially.
							</Typography>
						</div>
					</div>
				</PageFadeEffect>

				<FadeVariant>
					<div className={classes.sec3}>
						<div className={classes.sec31}>
							<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/TileLeft.svg'} alt='tile square' width={123} height={92} />
						</div>
						<div className={classes.sec32}>
							<Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/EmrRealScreen.svg'}
								alt='module functioning example'
								width={618}
								height={440}
							/>
						</div>
						<div className={classes.sec33}>
							<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/TileRight.svg'} alt='tile square' width={123} height={92} />
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec4}>
						<div className={classes.sec41}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>
									<span>Benefits of EMR for </span>Clinics
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									Create an in-built regulatory system against prescribing treatments that would result in unfavorable incidents. For example, a note
									on allergy to any medicine or any medical condition.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>Connect with hospitals, pharmacies, labs, and state health systems easily.</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>Enhance research and monitoring for improvements in clinical quality.</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>Analyze, examine, and send clinical alerts and reminders from time to time.</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>Reduction in administrative and operational costs in terms of facility and manpower.</Typography>
							</div>
						</div>

						<div className={classes.sec42}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>
									<span>Benefits of EMR for </span>Customers
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>Reduced errors, faster judgment, and care by the hospital, clinic, or facility. </Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									Lab reports and specialist prescriptions can be attached or viewed anytime, any where by logging in the website.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>Therapies and analysis can be monitored and improved gradually.</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>Personal information and treatment details of the customer are given extreme security.</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>After-diagnosis care reminders, follow-ups, and vaccine reminders are sent periodically.</Typography>
							</div>
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
export default EmrBilling
