import {makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'
import HeadingContent from '../../../components/HeadContent'
import Header from '../../../sections/LandingPageHeader'
import SectionLeftBlock from '../../../components/SectionLeftBlock'
import SectionRightBlock from '../../../components/SectionRightBlock'
import FadeVariantContent from '../../../components/FramerMotion/PageFadeContent'
import FadeVariant from '../../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../../components/FramerMotion/PageFadeEffect'
import WhatsAppBot from '../WhatsAppBot'
import Lottie from 'react-lottie'
import DueAmountJSON from '../../../../public/lottieFiles/staticPagesLottie/Due amount.json'
import FirstTimeCustomerJSON from '../../../../public/lottieFiles/staticPagesLottie/first time customer.json'
import LottiePlayerForStaticPages from '../../../components/LottiePlayerForStaticPages'

const useStyles = makeStyles(theme => ({
	baseRoot: {
		background: '#FFFFFF',
	},
	maxWidthControl: {
		maxWidth: 1320,
		margin: '0px auto',
		[theme.breakpoints.up('xs')]: {
			paddingInline: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 'unset',
		},

		// for whatsAPP Bot
		position: 'relative',
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
			paddingBlockStart: 40,
		},
	},
	sec11: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
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
			paddingBlockStart: 48,
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
			color: theme.palette.lyfngo.main,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 26,
			},
		},
	},

	sec3: {
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
			paddingBlockStart: 48,
		},
	},

	sec31: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
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
	sec32: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},

	sec4: {
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
			paddingBlockStart: 48,
		},
	},
	sec41: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec42: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
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
	sec5: {
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 18,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 48,
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
	sec51: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},
	sec511: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec5111: {
		textAlign: 'center',
		'& .MuiTypography-subtitle1': {
			color: theme.palette.lyfngo.main,
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,
			textAlign: 'center',
			marginBlockStart: -32,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
	},
	ellipseContainer: {
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
	lottieContainer: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
	lottieStyles: {
		[theme.breakpoints.up('xs')]: {
			width: '50%',
		},
		[theme.breakpoints.up('md')]: {
			// width: '30%',
		},
	},
}))

const DashboardReports = () => {
	const classes = useStyles()

	const DueAmountReportLottie = {
		loop: true,
		autoplay: true,
		animationData: DueAmountJSON,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	const FirstTimeCustomerLottie = {
		loop: true,
		autoplay: true,
		animationData: FirstTimeCustomerJSON,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
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
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/dashboardIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Dashboard</Typography>
							</div>
							<Typography variant='subtitle1'>
								In the first place, what is a Dashboard, and what information can it offer? A dashboard is an online pictorial representation of
								crucial data of an app or website. Precisely it facilitates you with data related to <b>revenue and sales </b>of a niche. The
								dashboard is easy and convenient to access, which results in an effortless job.
							</Typography>
							<Typography variant='subtitle1'>
								Here, at LYFnGO we present a dashboard with analytical reports, revenue generation sales, and information regarding specialists.
							</Typography>
						</div>
						<div className={classes.sec12}>
							<Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/DashboardRealScreen.svg'}
								alt='module functioning example'
								width={477}
								height={310}
							/>
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/dashboardAnalytics.svg'}
								alt='module functioning example'
								width={567}
								height={260}
							/>
						</div>
						<div className={classes.sec22}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>Review your Analytics efficiently</Typography>
							</div>
							<Typography variant='subtitle1'>
								<b>Analytics</b> is a very crucial part of any business. It may be a small picture illustration, but it gives a quick peek into the
								roots of the business. A daily visualization can give an idea of the ups and downs of the niche.
							</Typography>
							<Typography variant='subtitle1'>
								Here, the analytics page is divided into four parts; weekly, monthly, and yearly reports; in terms of{' '}
								<b>customer, appointment, revenue, and growth.</b>
							</Typography>
						</div>
					</div>
				</PageFadeEffect>

				<PageFadeEffect>
					<div className={classes.sec3}>
						<div className={classes.sec31}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>A tally of Sales from various domains</Typography>
							</div>
							<Typography variant='subtitle1'>
								This parallel section shows the revenue generated from sales; against various types of visits, appointments, or consultations that
								include; <b>walk-in, home-visits, in-person, and online.</b>
							</Typography>
						</div>
						<div className={classes.sec32}>
							<Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/dashboardTotalAppointment.svg'}
								alt='module functioning example'
								width={573}
								height={290}
							/>
						</div>
					</div>
				</PageFadeEffect>

				<PageFadeEffect>
					<div className={classes.sec4}>
						<div className={classes.sec41}>
							<Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/dashboardRevenueGraph.svg'}
								alt='module functioning example'
								width={505}
								height={261}
							/>
						</div>
						<div className={classes.sec42}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>Graphical Revenue description</Typography>
							</div>
							<Typography variant='subtitle1'>
								This chart exhibits the revenue generation for a selected period which can be <b>daily, weekly, monthly, or even yearly.</b>
							</Typography>
							<Typography variant='subtitle1'>
								The dashboard & graph helps you <b>analyze your work,</b> as well as revenue generation, at a glance. It allows you to
								<b> monitor the progress</b> of all your clinics on the same page.
							</Typography>
						</div>
					</div>
				</PageFadeEffect>

				<PageFadeEffect>
					<div className={classes.sec5}>
						<div className={classes.secHeading}>
							<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/reportsIcon.svg'} alt='reports icon' width={28} height={28} />
							<Typography variant='h3'>Reports</Typography>
						</div>
						<Typography variant='subtitle1'>
							The report is a <b>one-stop page</b> where you can access all your invoices like; income, payments, new customers, appointments, billing
							summary, and due amount, for any selected period.
						</Typography>
						<Typography variant='subtitle1'>
							A wide range of filters in each report aids in finding various types of statistics based on your extracts. Each generated statement
							gives precise statistics on different finances.
						</Typography>
						<Typography variant='subtitle1'>
							While the billing summary provides narrowly different statistics than invoiced income like the cost, discount, tax, invoiced amount, and
							amount paid, the invoiced income gives cost, discount, income after discount, tax, and invoiced amount Payments give a detail about the
							total advance payment and advance payment; the amount due only reflects the total amount due.
						</Typography>

						<div className={classes.sec51}>
							<div className={classes.sec511}>
								<div className={classes.sec5111}>
									{/* <Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/firstTimeCustomer.svg'}
										alt='module functioning example'
										width={245}
										height={245}
									/> */}
									<LottiePlayerForStaticPages LottieFile={FirstTimeCustomerJSON} width={'55%'} />
									<Typography variant='subtitle1'>First-Time Customer</Typography>
								</div>
								<Typography variant='subtitle1'>
									The <b>new customer's section and appointments sections</b> display details of customers that include vitals like the blood group
									and statistics.This report helps the specialist to view the total number of new customers and; new appointments in a selected period
									at a glance. This section will give the specialist details of customers in different categories based on age and gender.
								</Typography>
							</div>
							<div className={classes.sec511}>
								<div className={classes.sec5111}>
									{/* <Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/dueAmtRep.svg'}
										alt='module functioning example'
										width={245}
										height={245}
									/> */}
									
									<LottiePlayerForStaticPages LottieFile={DueAmountJSON} width={'55%'} />

									<Typography variant='subtitle1'>Due Amount Report</Typography>
								</div>
								<Typography variant='subtitle1'>
									As for the amount due report, a selection of customer groups like; all customers, only male or female customers, and male or female
									customers under the age group of thirty, gives a precise figure of the balance amount based on your selection of customer groups for
									a selected period
								</Typography>
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

export default DashboardReports
