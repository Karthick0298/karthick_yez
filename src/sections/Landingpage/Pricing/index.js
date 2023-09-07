import {Avatar, Button, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'
import Header from '../../LandingPageHeader'
import FadeVariant from '../../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../../components/FramerMotion/PageFadeEffect'
// import PageFadeHorizondal from '../../../components/FramerMotion/PageFadeHorizondal'
import WhatsAppBot from '../WhatsAppBot'
import {useRouter} from 'next/router'

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
				fontSize: 16,
				paddingBlockStart: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 18,
				paddingBlockStart: 26,
			},
		},

		'& .MuiTypography-subtitle2': {
			color: theme.palette.lyfngo.content1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,
			textAlign: 'justify',
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
		// marginInlineStart: '20%',
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

	listItem: {
		display: 'flex',
		gap: 16,
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 6,
			// paddingInlineStart: 8,
		},
		[theme.breakpoints.up('md')]: {
			// paddingTop: 20,
			// paddingInlineStart: 18,
		},
	},
	PricinglistItem: {
		display: 'flex',
		gap: 14,
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 6,
			// paddingInlineStart: 8,
		},
		[theme.breakpoints.up('md')]: {
			// paddingTop: 20,
			// paddingInlineStart: 18,
		},
	},

	sec1: {
		display: 'flex',
		justifyContent: 'center',
		'& .MuiTypography-root': {
			textAlign: 'center',
			marginInline: 18,
			maxWidth: 1150,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
				marginBlockStart: 'unset',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 20,
				marginBlockStart: -20,
			},
		},
	},
	sec3: {
		display: 'flex',
		justifyContent: 'center',
	},
	sec3Container: {
		width: '95%',
		backgroundColor: '#e5effc',
		borderRadius: 20,
		display: 'flex',

		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			// gap: 'unset',
			padding: 14,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 20,
			padding: 18,
		},
	},
	sec31: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '50%',
		},
	},

	sec32: {
		display: 'flex',
		alignItems: 'center',
		gap: 18,

		[theme.breakpoints.up('xs')]: {
			width: '100%',
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {},
	},

	sec321: {},

	sec322: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'& .MuiButtonBase-root': {
			fontFamily: 'Poppins',
			background: theme.palette.lyfngo.backgroundImage,
			textTransform: 'none',
			color: '#FFFFFF',
			paddingInline: 30,
			transition: 'all 0.25s',
			letterSpacing: 0.75,
			borderRadius: 20,
			'&:hover': {
				transform: 'scale(1.06)',
			},

			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
	sec2: {
		display: 'flex',
		justifyContent: 'space-around',
		gap: 14,
		flexWrap: 'wrap',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 18,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 42,
		},
	},
	cardRoot1: {
		maxWidth: 380,
		border: `1px solid ${theme.palette.lyfngo.content1}`,
		borderRadius: 18,
		padding: 24,
		backgroundColor: '#FFFFFF',
		transition: 'all 0.25s',
		position: 'relative',
		scale: 1.0,
		'&:hover': {
			backgroundColor: '#EEF6E3',
			border: `2px solid #8cc63f`,
			scale: 1.01,
		},
		'&:hover #cardRootSec4': {
			opacity: 1,
			transition: 'all 0.25s',
		},
	},
	cardRoot2: {
		maxWidth: 380,
		border: `1px solid ${theme.palette.lyfngo.content1}`,
		borderRadius: 18,
		padding: 24,
		backgroundColor: '#FFFFFF',
		transition: 'all 0.25s',
		position: 'relative',
		scale: 1,

		'&:hover': {
			backgroundColor: '#ECF8FF',
			border: `2px solid #2Eb2ff`,
			scale: 1.01,
		},
		'&:hover #cardRootSec4': {
			opacity: 1,
			transition: 'all 0.25s',
		},
	},
	cardRoot3: {
		maxWidth: 380,
		border: `1px solid ${theme.palette.lyfngo.content1}`,
		borderRadius: 18,
		padding: 24,
		backgroundColor: '#FFFFFF',
		transition: 'all 0.25s',
		position: 'relative',
		scale: 1,
		'&:hover': {
			backgroundColor: '#D6EEFF',
			border: `2px solid ${theme.palette.lyfngo.main}`,
			scale: 1.01,
		},
		'&:hover #cardRootSec4': {
			opacity: 1,
			transition: 'all 0.25s',
		},
	},
	cardRootSec1: {
		display: 'flex',
		justifyContent: 'center',
	},

	LogoBox: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		'& .MuiTypography-h5': {
			textAlign: 'left',
			fontWeight: 500,
			'& span': {
				color: theme.palette.lyfngo.main,
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 24,
			},
		},
	},
	BasicPlan: {
		'& .MuiTypography-h5': {
			color: '#8CC63F',
		},
	},
	AdvancedPlan: {
		'& .MuiTypography-h5': {
			color: '#2eb2ff',
		},
	},
	PremiumPlan: {
		'& .MuiTypography-h5': {
			color: theme.palette.lyfngo.main,
		},
	},
	cardRootSec2: {
		'& .MuiTypography-root': {
			paddingBlock: 12,
		},
	},
	starsBox: {
		display: 'flex',
		alignItems: 'center',
		gap: 4,
		paddingInlineStart: 12,
	},
	cardRootSec4: {
		position: 'absolute',
		right: 0,
		top: 14,
		opacity: 0,
		transition: 'all 0.25s',
	},
}))

const Pricing = () => {
	const classes = useStyles()
	const router = useRouter()

	const BulletPoint = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/bulletPoint.svg'}
				style={{height: '16px', width: '16px', marginTop: 4}}
			/>
		)
	}
	const TagPoint = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/tagIcon.svg'}
				variant='square'
				style={{height: '26px', width: '20px'}}
			/>
		)
	}
	const BasicPoint = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/BasicPoint.svg'}
				variant='square'
				style={{height: '20px', width: '20px'}}
			/>
		)
	}
	const BasicStar = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/BasicStar.svg'}
				variant='square'
				style={{height: '28px', width: '28px'}}
			/>
		)
	}
	const AdvancedPoint = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/AdvancedPoint.svg'}
				variant='square'
				style={{height: '20px', width: '20px'}}
			/>
		)
	}
	const AdvancedStar = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/AdvancedStar.svg'}
				variant='square'
				style={{height: '28px', width: '28px'}}
			/>
		)
	}
	const PremiumPoint = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/PremiumPoint.svg'}
				variant='square'
				style={{height: '20px', width: '20px'}}
			/>
		)
	}
	const PremiumStar = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/PremiumStar.svg'}
				variant='square'
				style={{height: '28px', width: '28px'}}
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
				<>
					<div className={classes.sec1}>
						<Typography variant='subtitle1'>
							We offer plans based on practice requirements. Starting from essential services to function as a practice. An End-to-end plan from
							customer management to the management of your account
						</Typography>
					</div>
				</>

				<PageFadeEffect>
					<div className={classes.sec2}>
						{/* CARD 1 */}
						<div className={classes.cardRoot1}>
							<div className={classes.cardRootSec1}>
								<div className={classes.LogoBox}>
									<Avatar
										alt='bullet Point'
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/lyfngoSymbol.svg'}
										variant='square'
										style={{height: '58px', width: '58px'}}
									/>
									<div className={classes.BasicPlan}>
										<Typography variant='h5'>Basic</Typography>
										<div className={classes.starsBox}>
											<BasicStar />
										</div>
									</div>
								</div>
							</div>
							<div className={classes.cardRootSec2}>
								<Typography variant='subtitle2'>
									Equips you with the fundamental requirements to operate your practice digitally from square one.
								</Typography>
							</div>
							<div className={classes.cardRootSec3}>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Dashboard</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Calendar & Appointments</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>EMR & Billing</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Communication</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Quick Sale (POS)</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Report</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Integration</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Payment Gateway</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>WhatsApp Bot</Typography>
								</div>
							</div>
							<div className={classes.cardRootSec4} id='cardRootSec4'>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/2BlueBubble.svg'} alt='blue ball' width={55} height={66} />
							</div>
						</div>

						{/* CARD 2 */}
						<div className={classes.cardRoot2}>
							<div className={classes.cardRootSec1}>
								<div className={classes.LogoBox}>
									<Avatar
										alt='bullet Point'
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/lyfngoSymbol.svg'}
										variant='square'
										style={{height: '58px', width: '58px'}}
									/>
									<div className={classes.AdvancedPlan}>
										<Typography variant='h5'>Advanced</Typography>
										<div className={classes.starsBox}>
											<BasicStar />
											<AdvancedStar />
										</div>
									</div>
								</div>
							</div>
							<div className={classes.cardRootSec2}>
								<Typography variant='subtitle2'>
									Additional features to enhance your reach across customers and monitor your accounts and goods.{' '}
								</Typography>
							</div>
							<div className={classes.cardRootSec3}>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Dashboard</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Calendar & Appointments</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>EMR & Billing</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Communication</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Quick Sale (POS)</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Report</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Integration</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Payment Gateway</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>WhatsApp Bot</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Inventory</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Expenses</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Pharma</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Accounting</Typography>
								</div>
							</div>
							<div className={classes.cardRootSec4} id='cardRootSec4'>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/2BlueBubble.svg'} alt='blue ball' width={55} height={66} />
							</div>
						</div>

						{/* CARD 3 */}
						<div className={classes.cardRoot3}>
							<div className={classes.cardRootSec1}>
								<div className={classes.LogoBox}>
									<Avatar
										alt='bullet Point'
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/lyfngoSymbol.svg'}
										variant='square'
										style={{height: '58px', width: '58px'}}
									/>
									<div className={classes.PremiumPlan}>
										<Typography variant='h5'>Premium</Typography>
										<div className={classes.starsBox}>
											<BasicStar />
											<AdvancedStar />
											<PremiumStar />
										</div>
									</div>
								</div>
							</div>
							<div className={classes.cardRootSec2}>
								<Typography variant='subtitle2'>Enjoy the entire features in the premium plan and take your practice to the next stage. </Typography>
							</div>
							<div className={classes.cardRootSec3}>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Dashboard</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Calendar & Appointments</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>EMR & Billing</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Communication</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Quick Sale (POS)</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Report</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Integration</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>Payment Gateway</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<BasicPoint />
									<Typography variant='subtitle2'>WhatsApp Bot</Typography>
								</div>

								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Inventory</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Expenses</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Pharma</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<AdvancedPoint />
									<Typography variant='subtitle2'>Accounting</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<PremiumPoint />
									<Typography variant='subtitle2'> Diet Plan</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<PremiumPoint />
									<Typography variant='subtitle2'>Membership</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<PremiumPoint />
									<Typography variant='subtitle2'> WhatsApp Consult</Typography>
								</div>
								<div className={classes.PricinglistItem}>
									<PremiumPoint />
									<Typography variant='subtitle2'> Marketplace</Typography>
								</div>
							</div>
							<div className={classes.cardRootSec4} id='cardRootSec4'>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/2BlueBubble.svg'} alt='blue ball' width={55} height={66} />
							</div>
						</div>
					</div>
				</PageFadeEffect>

				<>
					<div className={classes.sec3}>
						<div className={classes.sec3Container}>
							<div className={classes.sec31}>
								<div className={classes.listItem}>
									<TagPoint />
									<Typography variant='subtitle2'>
										<b>24/7 support from the technical team.</b>
									</Typography>
								</div>
								<div className={classes.listItem}>
									<TagPoint />
									<Typography variant='subtitle2'>
										<b>Secured database.</b>
									</Typography>
								</div>
								<div className={classes.listItem}>
									<TagPoint />
									<Typography variant='subtitle2'>
										<b>All-in-one software</b>
									</Typography>
								</div>
								<div className={classes.listItem}>
									<TagPoint />
									<Typography variant='subtitle2'>
										<b>Payment and Accounts integrated software</b>
									</Typography>
								</div>
							</div>
							<div className={classes.sec32}>
								<div className={classes.sec321}>
									<div className={classes.normalHeading}>
										<Typography variant='h3'>Get in touch with our team for further support with the plans.</Typography>
									</div>
								</div>
								<div className={classes.sec322}>
									<Button variant='text' onClick={() => (window.location = 'mailto:')}>
										Contact Sales
									</Button>
								</div>
							</div>
						</div>
					</div>
				</>

				<div className={classes.whatsAppBot}>
					<WhatsAppBot />
				</div>
			</div>
			<LandingFooter />
		</div>
	)
}
export default Pricing
