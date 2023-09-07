import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import data from '../../../model/CareSlider/data'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper/core'
import Button from '../../../components/GradientButton'
// install Swiper modules
SwiperCore.use([Navigation])

const useStyles = makeStyles(theme => ({
	slide: {
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
	},
	doctorName: {
		minWidth: 184,
		// padding: 12,
		paddingBlock: 8,
		paddingInline: 12,
		position: 'absolute',
		top: 163,
		// left: 24,
		left: 0,
		opacity: 1,
		transform: 'translateY(-9px)',
		background: 'transparent linear-gradient( 288deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000d',
		borderRadius: 10,
		backdropFilter: 'blur(6px)',
		'& .MuiTypography-h5': {
			fontSize: 13,
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 160,
		},
		[theme.breakpoints.up('md')]: {
			minWidth: 155,
		},
		[theme.breakpoints.down('1148')]: {
			top: 128,
		},
	},
	userName: {
		color: '#475677',
		fontWeight: 'bold',
	},
	btnWrapper: {
		marginBlockStart: 56,
		[theme.breakpoints.down('1250')]: {
			marginBlockStart: 76,
		},
		[theme.breakpoints.down('1148')]: {
			marginBlockStart: 84,
		},
		[theme.breakpoints.down('1024')]: {
			marginBlockStart: 0,
		},
	},
	btnOverride: {
		paddingBlock: 4,
		minWidth: 100,
	},
	swiperContainer: {
		paddingInline: 60,
		paddingBlock: 65,
		'& .swiper-button-next': {
			right: 0,
			width: 64,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/artboard_4.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 12,
			opacity: 1,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
			},
			[theme.breakpoints.up('md')]: {
				top: '42%',
			},
			// [theme.breakpoints.up('sm')]: {
			// 	top: 420,
			// 	padding: 16,
			// },
		},
		'& .swiper-button-prev': {
			left: 0,
			width: 64,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/artboard_3.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 12,
			opacity: 1,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
			},
			[theme.breakpoints.up('md')]: {
				top: '42%',
			},
		},
	},
}))

function DoctorSlider() {
	const classes = useStyles()
	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				navigation={true}
				className={classes.swiperContainer}
				breakpoints={{
					300: {
						slidesPerView: 1,
						spaceBetween: 50,
						pagination: {el: '.swiper-pagination', clickable: true},
					},
					// when window width is >= 768px
					480: {
						slidesPerView: 1,
						spaceBetween: 50,
						pagination: {el: '.swiper-pagination', clickable: true},
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 70,
					},
				}}>
				{data.map(user => (
					<SwiperSlide key={user.id} className={classes.slide}>
						<Image src={user.image} width={195} height={195} alt='logo' />
						<div className={classes.doctorName}>
							<Typography variant='h5' className={classes.userName}>
								{user.name}
							</Typography>
							<Typography variant='h5'>{user.address}</Typography>
						</div>
						<div className={classes.btnWrapper}>
							<Button btnOverride={classes.btnOverride}>Book Now</Button>
						</div>
					</SwiperSlide>
				))}{' '}
			</Swiper>
		</>
	)
}

export default DoctorSlider
