import {Avatar, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'
import Header from '../../LandingPageHeader'
import FadeVariant from '../../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../../components/FramerMotion/PageFadeEffect'
import WhatsAppBot from '../WhatsAppBot'
import LottiePlayerForStaticPages from '../../../components/LottiePlayerForStaticPages'
import IntegrationJSON from '../../../../public/lottieFiles/staticPagesLottie/integration.json'
import AccountingJSON from '../../../../public/lottieFiles/staticPagesLottie/accounting.json'
import MarketPlaceJSON from '../../../../public/lottieFiles/staticPagesLottie/market place.json'

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
			color: theme.palette.lyfngo.main,
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
			paddingBlockStart: 28,
		},
	},
	sec11: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '58%',
		},
	},
	sec12: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '38%',
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
			paddingBlockStart: 44,
		},
	},
	sec21: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '38%',
		},
	},
	sec22: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '58%',
		},
	},
	integrationIconsBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		gap: 12,
		paddingBlock: 12,
		flexWrap: 'wrap',
	},
	WooCommerceLogo: {
		paddingBlock: 14,
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
			paddingBlockStart: 28,
		},
	},
	sec31: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '58%',
		},
	},
	sec32: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '38%',
		},
	},
	sec311: {
		display: 'flex',
		gap: 26,
		alignItems: 'center',
	},
}))

const Integration = () => {
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
								<Typography variant='h3'>Integration</Typography>
							</div>
							<Typography variant='subtitle1'>
								Although online business and payment methods already existed before, post Covid-19 many niches have opted to take over{' '}
								<b>contactless payment</b> methods extensively. Therefore, more and more businesses have developed globally.
							</Typography>
							<Typography variant='subtitle1'>
								As a result, a spectrum of payment gateways has also emerged. LYFnGO understands the importance of an appropriately maintained and
								secured payment portal. We believe; our clients should have a sound and ceaseless experience while managing various transactions and
								accounts.
							</Typography>
							<div className={classes.integrationIconsBox}>
								<div className={classes.integrationIcon}>
									<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/razorpay.svg'} alt='razor pay logo' width={161} height={49} />
								</div>
								<div className={classes.integrationIcon}>
									<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/hitpay.svg'} alt='hit pay logo' width={176} height={49} />
								</div>
								<div className={classes.integrationIcon}>
									<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/paytm.svg'} alt='paytm logo' width={105} height={49} />
								</div>
								<div className={classes.integrationIcon}>
									<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/stripepay.svg'} alt='stripe logo' width={115} height={56} />
								</div>
							</div>
							<Typography variant='subtitle1'>
								We offer payment alternatives like <b>Paytm, Razorpay, Stripe</b> and <b>Hitpay</b> to boost your ROI
							</Typography>
						</div>
						<div className={classes.sec12}>
							<div className={classes.moduleImage}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/IntegrationImage.svg'}
									alt='module functioning example'
									width={466}
									height={324}
								/> */}
								<LottiePlayerForStaticPages LottieFile={IntegrationJSON} width={'99%'} />
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/IntegrationImage.svg'}
									alt='module functioning example'
									width={366}
									height={224}
								/> */}
								<LottiePlayerForStaticPages LottieFile={IntegrationJSON} width={'99%'} />
							</div>
							<Typography variant='subtitle1'>
								<b>LYFnGO</b> brings you diverse payment gateways to streamline your transactions and accounts.{' '}
							</Typography>
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.moduleImage}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/accountingImage.svg'}
									alt='module functioning example'
									width={445}
									height={313}
								/> */}
								<LottiePlayerForStaticPages LottieFile={AccountingJSON} width={'99%'} />
							</div>
						</div>

						<div className={classes.sec22}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>Accounting</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/accountingImage.svg'}
									alt='module functioning example'
									width={345}
									height={146}
								/> */}
								<LottiePlayerForStaticPages LottieFile={AccountingJSON} width={'99%'} />
							</div>
							<Typography variant='subtitle1'>
								To facilitate all your accounts and finances in one place, we have incorporated software like <b>Tally, Xero</b> and
								<b> Zoho Books.</b>
							</Typography>
							<Typography variant='subtitle1'>Additionally, incorporating supplementary solutions that suit your business is inevitable.</Typography>
							<div className={classes.integrationIconsBox}>
								<div className={classes.integrationIcon}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/accountingTally.svg'}
										alt='tally logo'
										width={182}
										height={114}
									/>
								</div>
								<div className={classes.integrationIcon}>
									<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/accountingXero.svg'} alt='xero logo' width={64} height={64} />
								</div>
								<div className={classes.integrationIcon}>
									<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/accountingZoho.svg'} alt='zoho logo' width={140} height={57} />
								</div>
							</div>
						</div>
					</div>
				</PageFadeEffect>

				<PageFadeEffect>
					<div className={classes.sec3}>
						<div className={classes.sec31}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>Marketplace</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/marketplaceImage.svg'}
									alt='module functioning example'
									width={510}
									height={331}
								/> */}
								<LottiePlayerForStaticPages LottieFile={MarketPlaceJSON} width={'99%'} />
							</div>
							<Typography variant='subtitle1'>
								An online platform is also called an <b>e-commerce site.</b> Traders around the globe can sell their products, services, and
								information in a marketplace. Primarily, it is an IT company serving as a mediator between buyers and sellers.
							</Typography>
							<div className={classes.sec311}>
								<div className={classes.WooCommerceLogo}>
									<Avatar
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/WooCommerceLogo.svg'}
										alt='WooCommerce logo'
										style={{height: '72px', width: '108px'}}
										variant='square'
									/>
								</div>
								<Typography variant='subtitle1'>
									<b>Woo commerce</b> is an example of an e-commerce plugin. It makes building and executing an online store hassle-free. It is
									flexible at every level and has various essential features such as tax management, payments, and shipping integration. It can be
									used for both small and large online traders. It is easy to install, use and customize. Many high-traffic websites use woo commerce.
								</Typography>
							</div>
							<Typography variant='subtitle1'>
								From the service provider’s point of view, LYFnGO is a one-stop independent software from booking an appointment to payment, from
								payment to account management.
							</Typography>
						</div>

						<div className={classes.sec32}>
							<div className={classes.moduleImage}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/marketplaceImage.svg'}
									alt='module functioning example'
									width={619}
									height={391}
								/> */}
								<LottiePlayerForStaticPages LottieFile={MarketPlaceJSON} width={'99%'} />
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
export default Integration
