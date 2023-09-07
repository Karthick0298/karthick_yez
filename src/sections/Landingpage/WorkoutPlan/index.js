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
import DietPlanJSON from '../../../../public/lottieFiles/staticPagesLottie/dietplan.json'
import WorkoutPlanJSON from '../../../../public/lottieFiles/staticPagesLottie/fitness.json'

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
		marginBlock: 20,
	},
	moduleImageNotMobile: {
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
			paddingBlockStart: 42,
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

const WorkoutPlan = () => {
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
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/DietPlanIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Diet Plan</Typography>
							</div>
							<Typography variant='subtitle1'>
								Lifestyle disorders are at their peak. A stressful lifestyle, in addition to occupational behaviors, has brought each individual's
								health to the brink. At LYFnGO, we wish and want every customer to enjoy <b>healthy living.</b> Thus, we have integrated an
								application where specialists are wellness provider can communicate with their customers smoothly.
							</Typography>
							<div className={classes.moduleImage}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/DietPlanNew.svg'}
									alt='module functioning example'
									width={528}
									height={413}
								/>
							</div>
						</div>
						<div className={classes.sec12}>
							<div className={classes.moduleImageNotMobile}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/DietPlanImg.svg'}
									alt='module functioning example'
									width={370}
									height={309}
								/> */}
								<LottiePlayerForStaticPages LottieFile={DietPlanJSON} width={'65%'} />
							</div>
							<Typography variant='subtitle1'>
								The page helps in accessing the maintained records anywhere at any time. The specialist and the customer can use this{' '}
								<b>cloud-based software</b> to plan their diet based on their clinical reports. It aids in tracking calorie intake and health
								progress. It also helps to keep new-age lifestyle disorders at bay.
							</Typography>
							<Typography variant='subtitle1'>
								The specialist can create a diet plan. It helps in preparing the meal plans precisely, based on the nutritional requirement of the
								customer. These meal plans and types are on the basis of the required count of calories, proteins, carbs, fat, and fiber. Gradually, a
								revision is inevitable when there is an improvement in the <b>customer's health.</b>
							</Typography>
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.secHeading}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/WorkoutPlanIcon.svg'}
									alt='dashboard icon'
									width={28}
									height={28}
								/>
								<Typography variant='h3'>Workout Plan</Typography>
							</div>
							<Typography variant='subtitle1'>
								There is an inclination of this generation is toward convenience and physical <b>lifestyle changes.</b> Ignoring a key fact about the
								human body that it does not delight in excess comfort in addition to; manipulating commercials has become a trend. By and large, work
								equivalent to working out; or workout equivalent to work is the only resort to having a <b>healthy body and a healthy life.</b> But
								often, due to assignments or deadlines, many of us forget or, are unable to give our bodies the <b>required exercises.</b>
							</Typography>
							<div className={classes.moduleImage}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/WorkoutPlanNew.svg'}
									alt='module functioning example'
									width={495}
									height={358}
								/>
							</div>
						</div>
						<div className={classes.sec22}>
							<div className={classes.moduleImageNotMobile}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/WorkoutPlanImg.svg'}
									alt='module functioning example'
									width={646}
									height={275}
								/> */}
								<LottiePlayerForStaticPages LottieFile={WorkoutPlanJSON} width={'95%'} />
							</div>
							<Typography variant='subtitle1'>
								Therefore, <b>a workout plan</b> devised by the fitness specialist helps to set goals and plan workouts. Details of each schedule are
								clear and concise, on how much time to spend on each exercise, the required sleep, intake of food and fluid, etc. This
								<b> tailored plan </b>
								will help in reaching the goal successfully. A specialist can revise the workouts of any session, morning or evening. The workout
								plans can be precise, based on workout sets in a session, reps, and allowed rest time. It also reflects the amount of fat burned
								during each session.
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
export default WorkoutPlan
