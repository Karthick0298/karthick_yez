import Image from 'next/image'
import {makeStyles, Typography} from '@material-ui/core'
import CareSlider from '../../model/Slider/CarePageSlider/data'
import SwiperCore, {EffectCoverflow} from 'swiper/core'

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([EffectCoverflow])
const useStyles = makeStyles(theme => ({
	sliderPositionroot: {
		// backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.png'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: '100% 100%',
		paddingInline: 100,
		paddingBlock: 46,
		[theme.breakpoints.down('sm')]: {
			paddingInline: 0,
			paddingBlock: 12,
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
				display: 'none',
			},
		},
		'& .swiper-pagination-bullet-active': {
			background: '#7047ea',
		},
	},

	userImg: {
		WebkitBoxReflect: 'below 1px linear-gradient(transparent, transparent,#0005)',
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			width: '100%',
		},
	},
	userText: {
		display: 'flex',
		justifyContent: 'center',
		paddingBlock: 12,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},

		'& .MuiTypography-body1': {
			color: '#b82a7a',
			fontWeight: 'bold',
		},
	},
	contentParagraph: {
		display: 'flex',
		textAlign: 'center',
		paddingInline: 58,
		paddingTop: 50,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
			paddingTop: 10,
		},
		[theme.breakpoints.down('md')]: {
			paddingInline: 0,
			paddingTop: 20,
		},
		'& .MuiTypography-h5': {
			fontSize: 20,
			color: '#596784',
		},
	},
}))

export default function SliderCoverFlow() {
	const classes = useStyles()
	return (
		<div className={classes.sliderPositionroot}>
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
				className={classes.mySwiper}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 5,
					},
					840: {
						slidesPerView: 5,
					},
					1200: {
						slidesPerView: 5,
					},
				}}>
				{CareSlider.map(imagecard => (
					<SwiperSlide key={imagecard.id}>
						<div className={classes.userImg}>
							<Image src={imagecard.src} alt='imagecard' width={319} height={358} />
						</div>
						<div className={classes.userText}>
							<Typography>{imagecard.title}</Typography>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={classes.contentParagraph}>
				<Typography variant='h5'>
					Lorem care dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
				</Typography>
			</div>
		</div>
	)
}
