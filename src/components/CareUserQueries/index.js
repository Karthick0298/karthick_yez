import React from 'react'
import {Avatar, makeStyles, Typography} from '@material-ui/core'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import Button from '../../components/GradientButton'
import Userqueries from '../../model/CareUserQueries/data'
import {CardContent, Card, CardActionArea, CardMedia} from '@material-ui/core'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper/core'
// install Swiper modules
SwiperCore.use([Navigation])

const useStyles = makeStyles(theme => ({
	slide: {
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
	},
	doctorName: {
		padding: 12,
		position: 'absolute',
		top: 163,
		left: 24,
		opacity: 1,
		transform: 'translateY(-9px)',
		background: 'transparent linear-gradient( 288deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000d',
		borderRadius: 10,
		backdropFilter: 'blur(6px)',
	},
	swiperContainer: {
		paddingInline: 60,
		paddingBlock: 45,
		'& .swiper-button-next': {
			right: 0,
			width: '60px',
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/artboard_1.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 12,
			opacity: 0.3,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
			},
		},
		'& .swiper-button-prev': {
			left: 0,
			width: '60px',
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/artboard_2.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 12,
			opacity: 0.3,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
			},
		},
	},
	Positionroot: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	PositionMainroot: {
		paddingInline: 100,
		paddingBlock: 50,
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			paddingInline: 10,
		},
		[theme.breakpoints.down('md')]: {
			display: 'block',
		},
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
			gap: 10,
		},
	},
	leftSidePosition: {
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 18,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	gfg: {
		margin: '3%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},

	secondtxt: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: 18,
		padding: 5,
		height: 38,
		overflow: 'hidden',
		'&:hover': {
			height: 100,
		},
		[theme.breakpoints.up('sm')]: {
			height: 33,
		},
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 14,
			padding: 7,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 12,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},

	cardsmallPosion: {
		display: 'flex',
		gap: 20,
		paddingBlock: 16,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			flexDirection: 'column',
		},
	},
	userexperience: {
		display: 'flex',
		gap: 17,
		paddingBlock: 20,
		alignItems: 'center',
		'& .MuiAvatar-root': {
			width: 60,
			height: 60,
		},
	},
	test: {
		background: 'transparent linear-gradient(111deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000D',
		border: '1px solid #FFFFFF80',
		opacity: 1,
		backdropFilter: 'blur(6px)',
	},
	storydata: {
		color: theme.palette.paragraph.main,
		opacity: 0.83,
		fontSize: theme.typography.h6.fontSize,
	},
	doctorname: {
		fontSize: theme.typography.body1.fontSize,
		color: theme.palette.paragraph.main,
		fontWeight: theme.typography.h1.fontWeight,
	},
	allMain: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingInline: 26,
		'& .MuiTypography-h3': {
			fontSize: 28,
			color: theme.palette.care.main,
			[theme.breakpoints.down('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.down('md')]: {
				fontSize: 18,
			},
		},
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
		},
		[theme.breakpoints.down('md')]: {
			paddingInline: 0,
		},
	},
	mainContain: {
		marginInline: 100,
		marginBlock: 30,
		[theme.breakpoints.down('xs')]: {
			marginInline: 10,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 10,
		},
	},
}))

function DoctorSlider() {
	const classes = useStyles()
	return (
		<>
			<div className={classes.mainContain}>
				<div className={classes.allMain}>
					<Typography variant='h3'>User Queries</Typography>
					<Button>View All</Button>
				</div>
				<Swiper
					slidesPerView={4}
					spaceBetween={20}
					navigation={true}
					className={classes.swiperContainer}
					breakpoints={{
						300: {
							slidesPerView: 1,
							spaceBetween: 20,
							pagination: {el: '.swiper-pagination', clickable: true},
						},
						// when window width is >= 768px
						480: {
							slidesPerView: 1,
							spaceBetween: 20,
							pagination: {el: '.swiper-pagination', clickable: true},
						},
						600: {
							slidesPerView: 1,
							spaceBetween: 100,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 70,
						},
						1440: {
							slidesPerView: 3,
							spaceBetween: 70,
						},
					}}>
					{Userqueries.map(({id, story, image, name, experience}) => (
						<SwiperSlide key={id} className={classes.slide}>
							<div className={classes.AppoinmentImagePosition}>
								<Card key={id} className={classes.test}>
									<CardActionArea>
										{/* <CardMedia component="img" image={image} /> */}
										<CardContent>
											<Typography variant='h5' className={classes.storydata}>
												{story}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
								<div className={classes.userexperience}>
									<div>
										<Avatar alt='Profilep photo' src={image} />
									</div>
									<div>
										<Typography variant='h5' className={classes.doctorname}>
											{name}
										</Typography>
										<Typography variant='h5' className={classes.storydata}>
											{experience}
										</Typography>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

export default DoctorSlider
