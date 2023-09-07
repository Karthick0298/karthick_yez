/* eslint-disable max-len */
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
import WhatsappAnimationJSON from '../../../../public/lottieFiles/staticPagesLottie/Whatsapp Animation.json'
import WhatsappCommunicationJSON from '../../../../public/lottieFiles/staticPagesLottie/whatapp communication.json'
import onlineConsultAnimationJson from '../../../../public/lottieFiles/staticPagesLottie/onlineconsult.json'
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
	moduleImage: {
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
		paddingInlineStart: 18,
		[theme.breakpoints.up('xs')]: {
			paddingTop: 18,
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: 24,
		},
	},

	sec1: {
		overflow: 'hidden',
		[theme.breakpoints.up('xs')]: {
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {},
	},
	sec11: {},
	sec12: {
		textAlign: 'center',
	},
	fullscreenWhatsappfunc: {},
	fullscreenConsultfunc: {},
	sec13: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 18,
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 26,
			flexDirection: 'row',
		},
	},
	sec131: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '70%',
		},
	},
	sec132: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '28%',
		},
	},
	sec14: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 18,
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 26,
			flexDirection: 'row',
		},
	},
	sec141: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec142: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},

	sec23: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 18,
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 26,
			flexDirection: 'row',
		},
	},
	sec231: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec232: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},

	sec24: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 18,
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			// paddingBlock: 26,
			flexDirection: 'row',
		},
	},
	sec241: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec242: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	benefitsPoints: {
		display: 'flex',
		gap: 12,
		// justifyContent: 'space-between',
		// alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	sec2: {
		overflow: 'hidden',
	},
}))

const WhatsAppPage = () => {
	const classes = useStyles()

	const HandBulletPoint = () => {
		return (
			<Avatar
				alt='bullet Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/HandPointingBullet.svg'}
				style={{height: '23px', width: '35px'}}
				variant='square'
			/>
		)
	}
	const GreenTickedBullet = () => {
		return (
			<Avatar
				alt='Green Ticked Point'
				src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/GreenTickedBullet.svg'}
				style={{height: '20px', width: '20px', marginTop: 4}}
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
						<FadeVariant>
							<div className={classes.sec11}>
								<div className={classes.secHeading}>
									<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/WhataAppBot.svg'} alt='dashboard icon' width={46} height={49} />
									<Typography variant='h3'>WhatsApp Bot</Typography>
								</div>
								<Typography variant='subtitle1'>
									The fact that networks like Twitter, Facebook, Instagram, and <b>WhatsApp</b> rule the world in every walks of life. It is not a
									hidden fact.
								</Typography>
								<Typography variant='subtitle1'>
									Surprisingly, sectors like Shopping, Education, e-commerce, News, Businesses, and many unlisted sectors utilize social media to
									spread far and wide. Likewise, the health and wellness sector has also made a mark by making procedures like consultations and
									appointments online. As a result, the whole process of consulting a specialist to make the payment has become online.
								</Typography>
							</div>
						</FadeVariant>
						<FadeVariant>
							<div className={classes.sec12}>
								<div className={classes.fullscreenWhatsappfunc}>
									{/* <Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/WhatsAppBotWorking.svg'}
										alt='module functioning example'
										width={1200}
										height={534}
									/> */}
									<LottiePlayerForStaticPages LottieFile={WhatsappAnimationJSON} width={'99%'} />
								</div>
							</div>
						</FadeVariant>
						<PageFadeEffect>
							<div className={classes.sec13}>
								<div className={classes.sec131}>
									<Typography variant='subtitle1'>
										A customer can connect to <b>the specialist</b> using the WhatsApp bot by sending a <b>“Hello” </b> message. The bot responds with
										a welcome message, along with options to book, reschedule an existing or cancel an appointment. As the customer responds to any
										one of the options, the bot responds to choose any clinic you are registered with. The conversation continues with the bot
										enquiring about the mode of appointment, the specialist that the customer wants to consult with, the date and time slot, and last
										of all, the payment mode. During the conversation, whenever there is an unidentified message from the customer, the bot redirects
										them to the advisor. Information is passed to the advisor, who will manage and redirect the remaining functions.
									</Typography>
								</div>
								<div className={classes.sec132}>
									<div className={classes.moduleExample}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/whatsappbott.svg'}
											alt='module functioning example'
											width={169}
											height={183}
										/>
									</div>
								</div>
							</div>
						</PageFadeEffect>
						<PageFadeEffect>
							<div className={classes.sec14}>
								<div className={classes.sec141}>
									<div className={classes.moduleExample}>
										{/* <Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/clientUsingWhatsapp.svg'}
											alt='clients Using Whatsapp'
											width={504}
											height={202}
										/> */}
										<LottiePlayerForStaticPages LottieFile={WhatsappCommunicationJSON} width={'99%'} />
									</div>
								</div>
								<div className={classes.sec142}>
									<Typography variant='subtitle1'>
										Out of all the social media platforms, WhatsApp is the easiest and the most used method in the health sector. Specialist are
										smoothly <b>approachable.</b>
									</Typography>
									<Typography variant='subtitle1'>
										Assimilating the frequency of its usage with a reach of over 2 billion people worldwide, we at <b>LYFnGO</b> have incorporated{' '}
										<b>Whatsapp features</b> into our website to give you smooth sailing from online appointments to payments. The WhatsApp chat helps
										you to book an appointment, even without visiting the site or the clinic.
									</Typography>
								</div>
							</div>
						</PageFadeEffect>
					</div>
				</>

				<>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.secHeading}>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/consultIcon.svg'} alt='dashboard icon' width={34} height={34} />
								<Typography variant='h3'>Online Consult</Typography>
							</div>
						</div>
						<FadeVariant>
							<div className={classes.sec22}>
								<div className={classes.fullscreenConsultfunc}>
									{/* <Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/ConsultBotWorking.svg'}
										alt='module functioning example'
										width={1200}
										height={534}
									/> */}
									<LottiePlayerForStaticPages loop={false} LottieFile={onlineConsultAnimationJson} width={'99%'} />
								</div>
							</div>
							</FadeVariant>
						<PageFadeHorizondal>
							<div className={classes.sec23}>
								<div className={classes.sec231}>
									<Typography variant='subtitle1'>
										Thanks to technology, there are numerous ways to reach a specialist without visiting a service provider or clinic. Online
										consultations ensure discussions through <b>chat, call, or video call.</b> It has become one of the most preferred forms of
										consultation. It benefits to consult or talk to different specialists online from your home. Uploading images, files videos, links
										and documents are an added benefit.
									</Typography>
								</div>
								<div className={classes.sec232}>
									<div className={classes.listItem}>
										<HandBulletPoint />
										<Typography variant='subtitle2'>Consult your specialist from the comfort of your home.</Typography>
									</div>
									<div className={classes.listItem}>
										<HandBulletPoint />
										<Typography variant='subtitle2'>Now at your fingertips.</Typography>
									</div>
									<div className={classes.listItem}>
										<HandBulletPoint />
										<Typography variant='subtitle2'>Added benefits : Upload images, files, and videos.</Typography>
									</div>
								</div>
							</div>
						</PageFadeHorizondal>

						<PageFadeHorizondal>
							<div className={classes.sec24}>
								<div className={classes.sec241}>
									<div className={classes.normalHeading}>
										<Typography variant='h3'>Get personalized guidance for your health problems by prompt consultation</Typography>
									</div>
									<div className={classes.benefitsPoints}>
										<div className={classes.benefitsPointsLeft}>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>Trustworthy and secured platform.</Typography>
											</div>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>Economical tariffs.</Typography>
											</div>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>Video and chat alternatives.</Typography>
											</div>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>Save time and money.</Typography>
											</div>
										</div>
										<div className={classes.benefitsPointsRight}>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>Upload records effortlessly.</Typography>
											</div>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>No need to travel.</Typography>
											</div>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>Confidential and safe consultations.</Typography>
											</div>
											<div className={classes.listItem}>
												<GreenTickedBullet />
												<Typography variant='subtitle2'>Nill infections due to service centre visits.</Typography>
											</div>
										</div>
									</div>
								</div>
								<div className={classes.sec242}>
									<div className={classes.moduleExample}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/personalizedGuidance.svg'}
											alt='clients Using Whatsapp'
											width={355}
											height={367}
										/>
									</div>
								</div>
							</div>
						</PageFadeHorizondal>
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
export default WhatsAppPage
