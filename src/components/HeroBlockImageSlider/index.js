import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {makeStyles, Typography} from '@material-ui/core'
// import SliderData from '../../model/Slider/MindPageSlider/data'
import SwiperCore, {EffectCoverflow} from 'swiper/core'

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([EffectCoverflow])
const useStyles = makeStyles(theme => ({
	root: {
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: '100% 100%',
		paddingBlock: 36,

		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
		},
	},

	mySwiper: {
		paddingBlock: 74,
		[theme.breakpoints.down('sm')]: {
			paddingBlock: 0,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 30,
		},
		'& .swiper-pagination-bullet': {
			background: '#000',
			width: 8,
			height: 8,
			[theme.breakpoints.up('sm')]: {
				// display: 'none',
			},
		},
		'& .swiper-pagination-bullet-active': {
			background: '#7047ea',
		},
	},

	userImg: {
		WebkitBoxReflect: 'below 1px linear-gradient(transparent, transparent,#0005)',
		display: 'flex',
		borderRadius: 15,
		[theme.breakpoints.down('xs')]: {
			// display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			width: '100%',
		},
	},
	image: {
		borderRadius: 15,
	},
	userText: {
		display: 'flex',
		justifyContent: 'center',
		paddingBlock: 12,
		[theme.breakpoints.down('xs')]: {
			// display: 'none',
		},

		'& .MuiTypography-body1': {
			fontWeight: 'bold',
			fontSize: 18,

			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},
	textContainer: {
		textAlign: 'center',
		paddingInline: 60,
		paddingTop: 50,

		[theme.breakpoints.down('md')]: {
			paddingInline: 20,
			paddingTop: 20,
		},
		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
			paddingTop: 10,
		},
		'& .MuiTypography-h5': {
			fontSize: 20,
			color: '#596784',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},
}))

export default function HeroBlockImageSlider({SliderData, imgTextColor, textContent, loading}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={5}
				coverflowEffect={{
					rotate: 20,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={{clickable: true}}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				className={classes.mySwiper}
				breakpoints={{
					315: {
						slidesPerView: 1,
					},
					340: {
						slidesPerView: 2,
					},
					480: {
						slidesPerView: 3,
					},
					640: {
						slidesPerView: 4,
					},
					840: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 4,
					},
				}}>
				{SliderData?.map(item => (
					<SwiperSlide key={item?.serviceNameUuid}>
						<div className={classes.userImg}>
							<Image
								src={item?.webBannerImageUrl ? item?.webBannerImageUrl : 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/allopathy.png'}
								alt='item'
								width={320}
								height={358}
								className={classes.image}
							/>
						</div>
						<div className={classes.userText}>
							<Typography style={{color: imgTextColor}}>{item?.serviceName ? item?.serviceName : ''}</Typography>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={classes.textContainer}>
				<Typography variant='h5'>{textContent}</Typography>
			</div>
		</div>
	)
}
