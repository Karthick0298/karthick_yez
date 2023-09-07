import React, {useState} from 'react'
import {makeStyles, AppBar, Tabs, Tab, Typography, Divider} from '@material-ui/core'
import {AccessTime, Phone} from '@material-ui/icons'
import ReadMoreContent from '../ReadMoreContent'
import Link from 'next/link'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.up('xs')]: {
			padding: 10,
		},
		[theme.breakpoints.up('sm')]: {
			padding: 14,
		},
		'& .MuiTypography-h3': {
			fontFamily: 'Source Sans Pro',
			color: theme.palette.care.main,
			fontWeight: 600,
			letterSpacing: 0.2,
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
			},
		},
		'& .MuiTypography-body1': {
			fontFamily: 'Source Sans Pro',
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
				paddingBlock: 6,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				paddingBlock: 8,
			},

			'& span': {
				color: theme.palette.care.main,
				cursor: 'pointer',
			},
		},
	},
	time: {
		paddingBlockEnd: 10,
		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro',
			fontStyle: 'normal',
			color: theme.palette.paragraph.main,
			display: 'flex',
			alignItems: 'center',
			fontWeight: 600,

			[theme.breakpoints.up('xs')]: {
				fontSize: 15,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},

			'& .MuiSvgIcon-root': {
				color: theme.palette.care.main,
				fontWeight: 600,
				marginInlineEnd: 8,

				[theme.breakpoints.up('xs')]: {
					fontSize: 18,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 20,
				},
			},
		},
	},
	hospitalImagesContainer: {
		// border: '1px solid red',
		display: 'flex',
		alignItems: 'center',
		gap: 4,
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'flex-start',
			paddingBlockStart: 4,
		},
		[theme.breakpoints.up('sm')]: {
			// justifyContent: 'flex-end',
		},
		'& a': {
			// display: 'block',
			textAlign: 'right',
			color: theme.palette.paragraph.main,
			// textDecoration: 'none',
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	hospitalImageContainer: {
		display: 'flex',
		position: 'relative',
		'& img': {
			borderRadius: 4,
		},

		[theme.breakpoints.up('xs')]: {
			width: 40,
			height: 40,
		},
		// [theme.breakpoints.up('sm')]: {
		// 	width: 48,
		// 	height: 48,
		// },
	},
	amenities: {},
	awardsAndMembership: {},
	consultationPrice: {},
	PaymentMethods: {
		'& .MuiTypography-body1': {
			fontFamily: 'Source Sans Pro',
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 15,
				paddingBlockStart: 4,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				paddingBlockStart: 4,
				maxWidth: 300,
			},
		},
	},
	features: {
		[theme.breakpoints.up('xs')]: {},
		[theme.breakpoints.up('sm')]: {
			paddingBlockStart: 6,
			display: 'flex',
			justifyContent: 'space-between',
		},
	},
	subheading: {
		fontFamily: 'Source Sans Pro',
		fontStyle: 'normal',
		color: theme.palette.paragraph.main,

		fontWeight: 600,

		[theme.breakpoints.up('xs')]: {
			fontSize: 15,
			paddingBlockStart: 8,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 18,
			paddingBlockStart: 12,
		},
	},
	viewAllButton: {
		fontFamily: 'Source Sans Pro',
		color: theme.palette.care.main,
		fontWeight: 600,
		cursor: 'pointer',
		paddingInlineStart: 10,

		[theme.breakpoints.up('xs')]: {
			fontSize: 14,
			paddingBlockStart: 8,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
			paddingBlockStart: 8,
		},
	},
	services: {
		paddingBlockEnd: 16,

		'& ul': {
			margin: 0,
			paddingInlineStart: 24,
			paddingBlockStart: 6,
			display: 'grid',
			[theme.breakpoints.up('xs')]: {},
			[theme.breakpoints.up('sm')]: {
				gridTemplateColumns: 'repeat(2, 1fr)',
			},

			'& li': {
				color: theme.palette.paragraph.main,
				[theme.breakpoints.up('xs')]: {
					fontSize: 14,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 16,
					paddingBlockEnd: 6,
				},
			},
		},
	},
	awardsImageContainer: {
		paddingBlockStart: 6,
		paddingInlineStart: 4,
	},
	awardsImage: {
		borderRadius: 4,
	},
}))

const HospitalImages = [
	{id: 21, imageName: 'reception', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
	{id: 22, imageName: 'icu', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
	{id: 23, imageName: 'op', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
	{id: 24, imageName: 'lab', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
	{id: 25, imageName: 'general ward', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
]
const servicesSampleData = [
	{serviceName: 'In-Vitro Fertilization (IVF)'},
	{serviceName: 'Intra-Uterine Insemination (IUI)'},
	{serviceName: 'In-Vitro Fertiilization (IVF)'},
	{serviceName: 'Natural Cycle IVF'},
	{serviceName: 'High-Risk Pregnancy Care'},
	{serviceName: 'Cervical Cerclage'},
	{serviceName: 'Tubectomy/Tubal Ligation'},
	{serviceName: 'Pap Smeary'},
	{serviceName: 'Infertility Evaluation / Treatment'},
	{serviceName: 'In-Vitro Fertilization'},
	{serviceName: 'Intra-Uterine Insemination'},
	{serviceName: 'In-Vitro Fertiilization'},
	{serviceName: 'Natural Cycle'},
	{serviceName: 'High-Risk Pregnancy'},
	{serviceName: 'Cervical Cerclagee'},
	{serviceName: 'Tubectomy/Tubal Ligations'},
	{serviceName: 'Pap Smear'},
	{serviceName: 'Infertility Evaluations / Treatment'},
]

const HospitalInfo = () => {
	const classes = useStyles()

	const limitedServicesData = servicesSampleData.slice(0, 10)
	const [serviceListData, setserviceListData] = useState(limitedServicesData)
	const [viewAll, setviewAll] = useState(false)

	const handleListCount = () => {
		setviewAll(!viewAll)
		!viewAll ? setserviceListData(servicesSampleData) : setserviceListData(limitedServicesData)
	}

	return (
		<div className={classes.root}>
			<Typography variant='h3'>GLobal Hospital</Typography>
			<Typography variant='body1'>
				<ReadMoreContent maxTextLength={150}>
					{
						'Gleneagles Global Hospitals is part of Parkway Pantai, a fully owned subsidiary of IHH Healthcare. In India, Gleneagles Global Hospitals operates a chain of multi-super specialty hospitals offering tertiary and quaternary healthcare services with over 2,000 beds and state-of the-art, world-class hospitals in Hyderabad, Chennai, Bangalore and Mumbai. A pioneer in kidney, liver, heart and lung transplants, Gleneagles Global Hospitals provides comprehensive multi-organ transplant services in the country.'
					}
				</ReadMoreContent>
			</Typography>
			<div className={classes.features}>
				<div className={classes.featuresLeft}>
					<div className={classes.time}>
						<Typography variant='h4'>
							<AccessTime /> Mon - Sat | 10:00 AM-06:30 PM
						</Typography>
					</div>
					<div className={classes.time}>
						<Typography variant='h4'>
							<Phone /> +91 9876543210
						</Typography>
					</div>
					<div className={classes.hospitalImagesContainer}>
						{HospitalImages?.map(hospitalImg => (
							<div key={hospitalImg?.id} className={classes.hospitalImageContainer}>
								<Image alt='Hospital' src={hospitalImg?.hospitalImage} layout='fill' objectFit='fill' />
							</div>
						))}
						<Link href=''>View images</Link>
					</div>
					<div className={classes.amenities}>
						<Typography variant='h4' className={classes.subheading}>
							Amenities
						</Typography>
						<div className={classes.hospitalImagesContainer}>
							{HospitalImages?.map(hospitalImg => (
								<div key={hospitalImg?.id} className={classes.hospitalImageContainer}>
									<Image alt='Hospital' src={hospitalImg?.hospitalImage} layout='fill' objectFit='fill' />
								</div>
							))}
							<Link href=''>View images</Link>
						</div>
					</div>
				</div>
				<div className={classes.featuresRight}>
					<div className={classes.awardsAndMembership}>
						<Typography variant='h4' className={classes.subheading}>
							Awards and membership
						</Typography>
						<div className={classes.awardsImageContainer}>
							<Image alt='Hospital' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/iso.jpg' width={40} height={40} className={classes.awardsImage} />
						</div>
					</div>
					<div className={classes.PaymentMethods}>
						<Typography variant='h4' className={classes.subheading}>
							Payment Modes
						</Typography>
						<Typography variant='body1'>Credit Card | Cash | Online Payment | Debit Card | Insurance | UPI </Typography>
					</div>
					<div className={classes.consultationPrice}>
						<Typography variant='h4' className={classes.subheading}>
							Consultation Price
						</Typography>
					</div>
				</div>
			</div>
			<div className={classes.services}>
				<Typography variant='h4' className={classes.subheading}>
					Services
				</Typography>
				<ul>
					{serviceListData?.map((listItem, index) => (
						<li key={listItem?.index}>{listItem?.serviceName}</li>
					))}
				</ul>
				{
					<Typography variant='body2' className={classes.viewAllButton} onClick={handleListCount}>
						{viewAll ? 'show less' : `View all ( ${servicesSampleData?.length})`}
					</Typography>
				}
			</div>
			<Divider />
		</div>
	)
}

export default HospitalInfo
