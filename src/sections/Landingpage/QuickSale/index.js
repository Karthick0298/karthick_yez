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
import AddServiceJSON from '../../../../public/lottieFiles/staticPagesLottie/add service.json'

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
	moduleImg: {
		marginBlockStart: 18,
	},
	listItem: {
		display: 'flex',
		gap: 16,
		paddingInlineStart: 8,
		[theme.breakpoints.up('xs')]: {
			paddingTop: 18,
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: 24,
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
	integrationIconsBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 36,
		paddingBlock: 12,
		flexWrap: 'wrap',
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
			paddingBlockStart: 40,
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
			paddingBlockStart: 40,
		},
	},
	sec31: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
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
			paddingBlockStart: 40,
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
	},

	sec5: {
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
	sec51: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec52: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
}))

const QuickSale = () => {
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
				<FadeVariant>
					<div className={classes.sec1}>
						<div className={classes.sec11}>
							<div className={classes.secHeading}>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/QuickSaleIcon.svg'} alt='QuickSale Icon' width={28} height={28} />
								<Typography variant='h3'>Quick Sale</Typography>
							</div>
							<div className={classes.moduleImg}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/QuicksaleScreen.svg'}
									alt='module functioning example'
									width={510}
									height={392}
								/>
							</div>
						</div>
						<div className={classes.sec12}>
							<Typography variant='subtitle1'>
								Quick sales of services, products & memberships can attract more and more customers. That is what Quick sale is all about. It is a
								<b> one-stop sale point</b> for all of the above.
							</Typography>
							<div className={classes.integrationIconsBox}>
								<div className={classes.integrationIcon}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/quicksaleImg1.svg'}
										alt='add button icon'
										width={75}
										height={73}
									/>
								</div>
								<div className={classes.integrationIcon}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/quicksaleImg2.svg'}
										alt='add product icon'
										width={75}
										height={73}
									/>
								</div>
								<div className={classes.integrationIcon}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/quicksaleImg3.svg'}
										alt='add membership icon'
										width={75}
										height={73}
									/>
								</div>
							</div>
							<Typography variant='subtitle1'>
								This particular page boosts revenue generation for the service provider and satisfaction for the customer.
							</Typography>
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>Add Service</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/AddServiceImage.svg'}
									alt='module functioning example'
									width={458}
									height={283}
								/> */}
								<LottiePlayerForStaticPages LottieFile={AddServiceJSON} width={'99%'} />
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									Quicksale allows the trade of services required by customers of health and wellness service providers or by specialists without
									going through the whole process of consultation to purchase. Quicksale allows you to generate a bill excluding consultation billing.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									In the services section, specialists can offer medical services and therapies, while the wellness sector can offer, services related
									to well-being, training, etc.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									It also helps you to generate bills and invoices <b>in an instant.</b>
								</Typography>
							</div>
						</div>

						<div className={classes.sec22}>
							<div className={classes.moduleImage}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/AddServiceImage.svg'}
									alt='module functioning example'
									width={458}
									height={283}
								/> */}
								<LottiePlayerForStaticPages LottieFile={AddServiceJSON} width={'75%'} />
							</div>
						</div>
					</div>
				</PageFadeEffect>

				<div style={{overflow: 'hidden'}}>
					<PageFadeHorizondal>
						<div className={classes.sec3}>
							<div className={classes.sec31}>
								<div className={classes.moduleImage}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/AddProductImage.svg'}
										alt='module functioning example'
										width={678}
										height={225}
									/>
								</div>
							</div>
							<div className={classes.sec32}>
								<div className={classes.normalHeading}>
									<Typography variant='h3'>Add Product</Typography>
								</div>
								<div className={classes.mobileModuleImage}>
									<div style={{marginBlock: 20}}></div>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/AddProductImage.svg'}
										alt='module functioning example'
										width={678}
										height={225}
									/>
								</div>
								<div className={classes.listItem}>
									<BulletPoint />
									<Typography variant='subtitle2'>
										Similar to services, the specialist or service provider can also exhibit and sell goods related to their sector on this page.
										Pharma, drugs, instrument & equipment, wellness & health products, and beauty care products can all be listed and retailed here.{' '}
									</Typography>
								</div>
								<div className={classes.listItem}>
									<BulletPoint />
									<Typography variant='subtitle2'>
										The details of the commodities are required while billing. The invoice, for the same, can be generated <b>immediately</b>.
									</Typography>
								</div>
							</div>
						</div>
					</PageFadeHorizondal>
				</div>

				<div style={{overflow: 'hidden'}}>
					<PageFadeHorizondal fromNegative={true}>
						<div className={classes.sec4}>
							<div className={classes.sec41}>
								<div className={classes.normalHeading}>
									<Typography variant='h3'>Add Membership</Typography>
								</div>
								<div className={classes.mobileModuleImage}>
									<div style={{marginBlock: 20}}></div>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/MembershipImage.svg'}
										alt='module functioning example'
										width={504}
										height={281}
									/>
								</div>
								<div className={classes.listItem}>
									<BulletPoint />
									<Typography variant='subtitle2'>
										Any health and wellness provider presents memberships upon enrolling with them. Membership gives <b>benefits to the customers.</b>
										Discounts and quick services are one of the main features of being associated with a health and wellness service provider. By
										becoming a member, the customer can avail of better service, care, and training in the health and wellness sector.
									</Typography>
								</div>
								<div className={classes.listItem}>
									<BulletPoint />
									<Typography variant='subtitle2'>
										Adding a member to your system and generating an invoice is a smooth process using the Quicksale page.
									</Typography>
								</div>
							</div>

							<div className={classes.sec42}>
								<div className={classes.moduleImage}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/MembershipImage.svg'}
										alt='module functioning example'
										width={504}
										height={281}
									/>
								</div>
							</div>
						</div>
					</PageFadeHorizondal>
				</div>

				<PageFadeEffect>
					<div className={classes.sec5}>
						<div className={classes.sec51}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>Draft & Sales History</Typography>
							</div>
							<div style={{paddingBlock: 20}}></div>
							<Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/SalesHistoryScreen.svg'}
								alt='module functioning example'
								width={629}
								height={423}
							/>
						</div>
						<div className={classes.sec52}>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									In all the above processes, all the products, services, and memberships can be added and used while generating invoices.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									This page also allows you to add in an instant even though he or she may not be an already registered customer.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									The draft and sales history pages look similar. They have the <b>same information but distinct functions.</b>
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									The draft page allows you to save an intended purchase at a later date or after consultation with the practitioner. The provider can
									edit the invoice while or before finalizing the purchase. The saved invoices in the draft section are viewable by giving the bill
									date or tenant number. It is easy to view, edit or delete the statements whenever required. different same.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									On the other hand, the sales history displays details similar to the draft page but that of a completed purchase.
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
export default QuickSale
