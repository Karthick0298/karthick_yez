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
import InventoryJSON from '../../../../public/lottieFiles/staticPagesLottie/inventory.json'
import ExpensesJSON from '../../../../public/lottieFiles/staticPagesLottie/expense.json'

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
			paddingBlockStart: 42,
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
	xeroContainer: {
		display: 'flex',
		gap: 16,
	},
	section2: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		gap: 14,
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 18,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 30,
		},
	},
	section21: {
		borderRadius: 14,
		overflow: 'hidden',
		width: 422,
		height: 194,
		position: 'relative',
		'&:hover #hoverContent': {
			scale: 1,
		},
	},
	defaultContent: {
		backgroundColor: '#E5EFFC',
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 16,
		'& .MuiTypography-h6': {
			textAlign: 'left',
			color: theme.palette.lyfngo.content1,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 22,
			},
		},
	},
	hoverContent: {
		position: 'absolute',
		left: 0,
		top: 0,
		scale: 0,
		transition: 'all 0.5s',
		height: '100%',
		width: '100%',
	},
	hoverContentContainer: {
		backgroundColor: theme.palette.lyfngo.main,
		borderRadius: 14,
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 14,
		position: 'relative',

		'& .MuiTypography-body1': {
			color: theme.palette.lyfngo.lightText,
			fontWeight: 500,
			textAlign: 'center',
			paddingInline: 20,
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 18,
			},
		},
	},

	newIconHeading: {
		display: 'flex',
		alignItems: 'center',
		gap: 12,
		'& .MuiTypography-h5': {
			color: theme.palette.lyfngo.lightText,
			fontWeight: 500,
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 20,
			},
		},
	},
	hoverBubble: {
		position: 'absolute',
		right: 10,
		top: 10,
	},
}))

const InventoryExpenses = () => {
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
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/InventoryIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Inventory</Typography>
							</div>
							<Typography variant='subtitle1'>
								Inventory consists of details regarding <b>stock of products and goods </b>required for a business. Managing the inventory is not
								child’s play. It is mainly maintained for free-flowing and to avoid shortages of any product demanded in the industry.
							</Typography>
							<div className={classes.moduleImageNotMobile}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/InventoryImage.svg'}
									alt='module functioning example'
									width={620}
									height={316}
								/> */}
								<LottiePlayerForStaticPages LottieFile={InventoryJSON} width={'90%'} />
							</div>
							<Typography variant='subtitle1'>
								Products like drugs, pharma supplies, instruments, large and small equipment, wellness products, etc., are found in the health and
								wellness sector.
							</Typography>
							<Typography variant='subtitle1'>
								The stock level option helps in sorting and identifying the number of quantities at a glance. It also helps in finding the batches of
								expired stocks on the go.
							</Typography>
						</div>
						<div className={classes.sec12}>
							<div className={classes.moduleImage}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/InventoryScreen.svg'}
									alt='module functioning example'
									width={528}
									height={413}
								/>
							</div>
							<Typography variant='subtitle1'>
								A wellness provider or a specialist registered with LYFnGO can maintain their stock and keep a tab on upcoming shortages on this page.
							</Typography>
						</div>
					</div>
				</FadeVariant>

				<FadeVariant>
					<div className={classes.section2}>
						<div className={classes.section21}>
							<div className={classes.defaultContent}>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/NewItemIcon.svg'} alt='New Item Icon' width={69} height={69} />
								<Typography variant='h6'>New Item</Typography>
							</div>
							<div id='hoverContent' className={classes.hoverContent}>
								<div className={classes.hoverContentContainer}>
									<div className={classes.newIconHeading}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/NewItemIconLight.svg'}
											alt='New Item Icon'
											width={40}
											height={40}
										/>
										<Typography variant='h5'>New Item</Typography>
									</div>
									<Typography variant='body1'>Helps in adding a newly introduced product to the inventory.</Typography>
									<div className={classes.hoverBubble}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/NewItemBubble.svg'}
											alt='transparent bubble'
											width={50}
											height={84}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className={classes.section21}>
							<div className={classes.defaultContent} style={{backgroundColor: '#E5F1E7'}}>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/AddStockIcon.svg'} alt='Add Stock Icon' width={69} height={69} />
								<Typography variant='h6'>Add Stock</Typography>
							</div>
							<div id='hoverContent' className={classes.hoverContent}>
								<div className={classes.hoverContentContainer} style={{backgroundColor: '#00720B'}}>
									<div className={classes.newIconHeading}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/AddStockIconLight.svg'}
											alt='Add Stock Icon'
											width={40}
											height={40}
										/>
										<Typography variant='h5'>Add Stock</Typography>
									</div>
									<Typography variant='body1'>Increase or add to an existing product.</Typography>
									<div className={classes.hoverBubble}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/AddStockBubble.svg'}
											alt='transparent bubble'
											width={50}
											height={84}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className={classes.section21}>
							<div className={classes.defaultContent} style={{backgroundColor: '#F5F5F5'}}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/ConsumeStockIcon.svg'}
									alt='Consume Stock Icon'
									width={69}
									height={69}
								/>
								<Typography variant='h6'>Consume Stock</Typography>
							</div>
							<div id='hoverContent' className={classes.hoverContent}>
								<div className={classes.hoverContentContainer} style={{backgroundColor: '#E55C26'}}>
									<div className={classes.newIconHeading}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/ConsumeStockIconLight.svg'}
											alt='Consume Stock Icon'
											width={40}
											height={40}
										/>
										<Typography variant='h5'>Consume Stock</Typography>
									</div>
									<Typography variant='body1'>Gives an exact amount of each item consumed in a particular batch of goods or products.</Typography>
									<div className={classes.hoverBubble}>
										<Image
											src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/consumeStockBubble.svg'}
											alt='transparent bubble'
											width={50}
											height={84}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</FadeVariant>

				<>
					<div className={classes.sec3}>
						<div className={classes.sec31}>
							<div className={classes.xeroContainer}>
								<div className={classes.xeroImage}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/XeroImage.svg'}
										alt='module functioning example'
										width={142}
										height={142}
									/>
								</div>
								<Typography variant='subtitle1'>
									LYFnGO gives you the facility to upload your expenses into <b>Xero,</b> which will make it easier for accounting.
								</Typography>
							</div>
							<div className={classes.moduleImage}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/ExpensesScreen.svg'}
									alt='module functioning example'
									width={618}
									height={432}
								/>
							</div>
						</div>

						<div className={classes.sec32}>
							<div className={classes.secHeading}>
								<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/ExpenseIcon.svg'} alt='dashboard icon' width={28} height={28} />
								<Typography variant='h3'>Expenses</Typography>
							</div>
							<Typography variant='subtitle1'>
								The basic meaning of expense is the outflow of money in any form of cash, cashless, or cheque from one person or entity to another as
								a payment for an item, service, or salary.
							</Typography>
							<Typography variant='subtitle1'>
								Our expense page provides you with alternatives to select from a range of <b>expenses and payment modes for any interval.</b> Basic
								expenses like charges, consumer bills, and employee salaries are already inbuilt.
							</Typography>
							<div className={classes.moduleImage}>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/ExpensesImage.svg'}
									alt='module functioning example'
									width={495}
									height={358}
								/> */}
								<LottiePlayerForStaticPages LottieFile={ExpensesJSON} width={'90%'} />
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
export default InventoryExpenses
