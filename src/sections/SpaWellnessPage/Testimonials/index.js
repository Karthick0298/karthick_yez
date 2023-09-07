import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import data from '../../../model/DoctorSlider/data'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper/core'
// install Swiper modules
SwiperCore.use([Navigation])

const useStyles = makeStyles(theme => ({
	slide: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	slideContent: {
		background: 'transparent linear-gradient(180deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		maxWidth: '394px',
		minHeight: 256,
		margin: 'auto',
		borderRadius: 48,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		textAlign: 'center',
		padding: 10,
		'& .MuiTypography-h5': {
			position: 'relative',
			top: -50,
			paddingInline: 24,
			fontSize: theme.typography.subtitle1.fontSize,
			color: theme.palette.paragraph.main,
		},
		[theme.breakpoints.down('sm')]: {
			height: 258,
			'& .MuiTypography-h5': {
				fontSize: theme.typography.h6.fontSize,
			},
		},
	},
	doctorName: {
		position: 'relative',
		top: 36,
	},
	userImg: {
		position: 'absolute !important',
		top: '14px !important',
		border: '7px solid #FFFFFF80 !important',
		borderRadius: '74px !important',
	},
	bgImage: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/quote.svg'})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		[theme.breakpoints.down('sm')]: {
			padding: 16,
		},
		[theme.breakpoints.up('sm')]: {
			padding: 0,
		},
	},
	swiperContainer: {
		height: 476,
		'& .swiper-button-next': {
			right: 75,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/arrow_right1.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 26,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
				right: '30%',
			},
		},
		'& .swiper-button-prev': {
			left: 75,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/arrow_left1.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 26,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
				left: '30%',
			},
		},
	},
}))

function DoctorSlider() {
	const classes = useStyles()
	return (
		<>
			<div>
				<Typography variant='h5' style={{fontSize: 36, fontWeight: 600, color: '#E4208A', textAlign: 'center'}}>
					Testimonials
				</Typography>
			</div>
			<Swiper
				slidesPerView={2}
				spaceBetween={-140}
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
					768: {
						slidesPerView: 1,
						spaceBetween: 50,
					},
					1024: {
						slidesPerView: 1,
					},
					1200: {
						slidesPerView: 2,
					},
				}}>
				{data.map(user => (
					<SwiperSlide key={user.id} className={classes.slide}>
						<div className={classes.bgImage}>
							<div className={classes.slideContent}>
								<div style={{top: '-75px', position: 'relative'}}>
									<Image src={user.avatar} width={117} height={117} className={classes.userImg} alt='logo' />
								</div>
								<Typography variant='h5'>{user.description}</Typography>
								<div className={classes.doctorName}>
									<Typography variant='h5'>{user.name}</Typography>
									<Typography variant='h5'>{user.place}</Typography>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default DoctorSlider
