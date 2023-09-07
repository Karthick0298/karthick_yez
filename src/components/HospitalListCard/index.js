import {makeStyles, Breadcrumbs, Paper, Typography, useTheme, useMediaQuery, Avatar, Badge} from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import {NavigateNext, ThumbUp} from '@material-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import GradientButton from '../GradientButton'

const useStyles = makeStyles(theme => ({
	listContainer: {
		'& .MuiPaper-root': {
			background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			borderRadius: 10,
			[theme.breakpoints.up('xs')]: {
				padding: 10,
				marginBlockEnd: 14,
			},
			[theme.breakpoints.up('sm')]: {
				padding: 16,
				display: 'flex',
				justifyContent: 'space-between',
				marginBlockEnd: 16,
			},
		},
	},
	imageContainer: {
		// border: '1px solid black',
		position: 'relative',
		'& img': {
			borderRadius: 10,
		},
		[theme.breakpoints.up('xs')]: {
			width: 100,
			height: 100,
		},
		[theme.breakpoints.up('sm')]: {
			width: 132,
			height: 132,
		},
	},
	firstBlock: {
		display: 'flex',
		[theme.breakpoints.up('xs')]: {
			gap: 10,
		},
		[theme.breakpoints.up('sm')]: {
			gap: 12,
		},
	},
	leftSection: {
		// border: '1px solid orange',
		textAlign: 'center',
		'& a': {
			color: theme.palette.care.main,
			textDecoration: 'none',
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	rightSection: {
		// border: '1px solid crimson',
		'& .MuiTypography-h3': {
			color: theme.palette.care.main,
			cursor: 'pointer',
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
				paddingBlockEnd: 8,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
				paddingBlockEnd: 10,
			},
		},
		'& .MuiTypography-h4': {
			color: theme.palette.paragraph.main,
			fontStyle: 'normal',
			display: 'flex',
			alignItems: 'center',
			gap: 4,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
				paddingBlockEnd: 6,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
				paddingBlockEnd: 8,
			},
		},
	},
	iconImage: {
		// height: 20,
		// width: 20,
	},
	review: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingBlockStart: 8,
	},

	reviewLike: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: '#1A73E8',
			fontSize: 20,
		},

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			color: '#1A73E8',
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	reviewStories: {
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			textDecoration: 'underline',
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	findMoreBtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	secondBlock: {
		// border: '1px solid green',
		[theme.breakpoints.up('xs')]: {
			marginBlockStart: 10,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlockStart: 0,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
		},
	},
	secondBlockOne: {
		// border: '1px solid blue',
	},
	secondBlockTwo: {
		'& a': {
			display: 'block',
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

	hospitalImagesContainer: {
		// border: '1px solid red',
		display: 'flex',
		gap: 4,
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'flex-start',
			paddingBlockStart: 4,
		},
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'flex-end',
		},
	},
	secondBlockThree: {
		// border: '1px solid red',
		textAlign: 'center',
	},
	availableDoctors: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h4': {
			paddingInline: 4,
			fontStyle: 'normal',

			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiBadge-colorSecondary': {
			background: '#28B463',
		},
		'& .MuiAvatar-root': {
			height: 32,
			width: 32,
			fontSize: 14,
		},
		'& .MuiAvatarGroup-avatar': {
			border: 'none',
		},
	},
	hospitalImageContainer: {
		// border: '1px solid black',
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
}))

const HospitalListCard = () => {
	const classes = useStyles()
	const theme = useTheme()

	const SampleHospitalData = [
		{
			id: 1,
			hospitalName: 'Apollo Hospital',
			image: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg',
			doctors: [
				{id: 11, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 12, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 13, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 14, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 15, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 16, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
			],
			hospitalImages: [
				{id: 21, imageName: 'reception', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 22, imageName: 'icu', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 23, imageName: 'op', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 24, imageName: 'lab', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 25, imageName: 'general ward', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
			],
		},
		{
			id: 2,
			hospitalName: 'Global Hospital',
			image: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg',
			doctors: [
				{id: 11, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 12, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 14, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 15, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 16, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
			],
			hospitalImages: [
				{id: 21, imageName: 'reception', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 24, imageName: 'lab', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 25, imageName: 'general ward', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
			],
		},
		{
			id: 3,
			hospitalName: 'Chettinad Hospital',
			image: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg',
			doctors: [
				{id: 11, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 12, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 15, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 16, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
			],
			hospitalImages: [
				{id: 21, imageName: 'reception', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 22, imageName: 'icu', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 23, imageName: 'op', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 24, imageName: 'lab', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 25, imageName: 'general ward', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
			],
		},
		{
			id: 4,
			hospitalName: 'Kauvery Hospital',
			image: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg',
			doctors: [
				{id: 11, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 12, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 13, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 14, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 15, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 16, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
			],
			hospitalImages: [
				{id: 21, imageName: 'reception', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 22, imageName: 'icu', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 23, imageName: 'op', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 25, imageName: 'general ward', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
			],
		},
		{
			id: 5,
			hospitalName: 'AIMS Hospital',
			image: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg',
			doctors: [
				{id: 11, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 12, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 13, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 14, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
				{id: 15, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'},
				{id: 16, doctorName: 'Ranjith', doctorImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'},
			],
			hospitalImages: [
				{id: 21, imageName: 'reception', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 22, imageName: 'icu', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
				{id: 25, imageName: 'general ward', hospitalImage: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/apollo.jpg'},
			],
		},
	]

	return (
		<div className={classes.listContainer}>
			{SampleHospitalData.map(hospital => (
				<Paper key={hospital?.id}>
					<div className={classes.firstBlock}>
						<div className={classes.leftSection}>
							<div className={classes.imageContainer}>
								<Image alt='Hospital' src={hospital?.image} layout='fill' objectFit='fill' />
							</div>
							<Link href='hospitals/hospitaldetails'>View Profile</Link>
						</div>
						<div className={classes.rightSection}>
							<Link href='hospitals/hospitaldetails'>
								<Typography variant='h3'>{hospital?.hospitalName}</Typography>
							</Link>

							<Typography variant='h4'>
								<Image alt='icon' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/stethoscope.svg' height={20} width={20} className={classes.iconImage} />
								Multi Speciality Hospital
							</Typography>
							<Typography variant='h4'>
								<Image alt='icon' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/clock.svg' height={20} width={20} className={classes.iconImage} />
								Mon-Sat | 10:00AM - 6:00 PM
							</Typography>
							<Typography variant='h4'>
								<Image alt='icon' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/location1.svg' height={20} width={20} className={classes.iconImage} />
								Mogappair East, Chennai 600028.
							</Typography>
							<div className={classes.review}>
								<div className={classes.reviewLike}>
									<ThumbUp />
									<Typography variant='h5'>{'92'}%</Typography>
								</div>
								<div className={classes.reviewStories}>
									<Typography variant='h5'>({'345'} Patients Stories)</Typography>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.secondBlock}>
						<div className={classes.secondBlockOne}>
							<div className={classes.availableDoctors}>
								<AvatarGroup max={3}>
									{hospital?.doctors.map(doctor => (
										<Avatar key={doctor?.id} alt='' src={doctor?.doctorImage} />
									))}
								</AvatarGroup>
								<Badge color='secondary' variant='dot'>
									<Typography variant='h4'>Doctors Available</Typography>
								</Badge>
							</div>
						</div>
						<div className={classes.secondBlockTwo}>
							<div className={classes.hospitalImagesContainer}>
								{hospital?.hospitalImages.map(hospitalImg => (
									<div key={hospitalImg?.id} className={classes.hospitalImageContainer}>
										<Image alt='Hospital' src={hospitalImg?.hospitalImage} layout='fill' objectFit='fill' />
									</div>
								))}
							</div>
							<Link href=''>View images</Link>
						</div>
						<div className={classes.secondBlockThree}>
							<GradientButton findMorebtn={classes.findMoreBtn}>Call Now</GradientButton>
						</div>
					</div>
				</Paper>
			))}
		</div>
	)
}

export default HospitalListCard
