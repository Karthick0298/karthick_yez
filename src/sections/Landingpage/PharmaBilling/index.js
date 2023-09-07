import {Avatar, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'
import Header from '../../LandingPageHeader'
import FadeVariant from '../../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../../components/FramerMotion/PageFadeEffect'
// import PageFadeHorizondal from '../../../components/FramerMotion/PageFadeHorizondal'
import WhatsAppBot from '../WhatsAppBot'

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

	listItem: {
		display: 'flex',
		gap: 16,
		[theme.breakpoints.up('xs')]: {
			paddingTop: 18,
			paddingInlineStart: 8,
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: 24,
			paddingInlineStart: 18,
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

const PharmaBilling = () => {
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
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/PharmaIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Pharma</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/PharmaImage.svg'}
									alt='module functioning example'
									width={437}
									height={280}
								/>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									<b>Adding and updating stock</b> of every new or existing drug, pharma, or equipment in the inventory section is mandatory.
									Furthermore, this helps in managing the supply chain.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									If a facility or wellness provider has their own pharma or products department, they can upload the inventory in this same section
									for smooth disbursement of goods and products.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									The following fields are essential to create a pharma invoice. The prescription number, patient name, contact details, appointment
									date, and time. Pending, completed payments and dispatch details, reflect at the right end of the table. By clicking the view icon
									on the extreme right, one can see the invoice.
								</Typography>
							</div>
						</div>
						<div className={classes.sec12}>
							<div className={classes.moduleImage}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/PharmaImage.svg'}
									alt='module functioning example'
									width={537}
									height={333}
								/>
							</div>
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.moduleImage}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/BillingScreen.svg'}
									alt='module functioning example'
									width={596}
									height={494}
								/>
							</div>
						</div>

						<div className={classes.sec22}>
							<div className={classes.secHeading}>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/BillingIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Billing</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/BillingScreen.svg'}
									alt='module functioning example'
									width={396}
									height={294}
								/>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									Generation of bills or invoices is possible <b>from more than one page</b> in LYFnGO. The specialist or the service provider can add
									the bill to the <b>consultation and calendar</b> page after the completion of the appointment.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									The invoice is prepared by specifying the appointment type for follow-up or consultation, and by filling in the amount details.
								</Typography>
							</div>
							<div className={classes.listItem}>
								<BulletPoint />
								<Typography variant='subtitle2'>
									Implementing a bill can also be done by selecting the customer's name from <b> the patient records.</b> Billing details remain the
									same in both options.
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
export default PharmaBilling
