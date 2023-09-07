import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {makeStyles, Typography} from '@material-ui/core'
import SwiperCore, {Autoplay} from 'swiper'
import data from '../../model/BannerSlider/data'
import Link from 'next/link'

SwiperCore.use([Autoplay])
const useStyles = makeStyles(theme => ({
	slide: {
		position: 'relative',
	},
	slider: {
		paddingBlockStart: 50,
		[theme.breakpoints.down('sm')]: {
			// left: 0,
			// // justifyContent: 'flex-end',
			// right: 0,
			// bottom: 0,
			paddingBlockStart: 14,
		},
		'& .swiper-container-android .swiper-slide, .swiper-wrapper': {},
	},
	downloadButtonContainer: {
		position: 'absolute',
		right: -10,
		bottom: 40,
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		gap: 34,
		paddingInlineEnd: 190,
		// paddingBlock: 36,
		'& .MuiButton-root:hover': {
			backgroundColor: 'transparent',
		},
		'& div': {
			cursor: 'pointer',
		},
		[theme.breakpoints.down('xs')]: {
			// padding: 0,
		},
		[theme.breakpoints.down('sm')]: {
			// left: 0,
			// // justifyContent: 'flex-end',
			// right: 0,
			// bottom: 0,
			display: 'none',
		},
	},
}))

export default function BannerSlider() {
	const classes = useStyles()
	return (
		<Swiper
			className={classes.slider}
			spaceBetween={20}
			centeredSlides={true}
			autoplay={{
				delay: 1500,
				disableOnInteraction: false,
			}}>
			{data.map(content => (
				<SwiperSlide key={content.id} className={classes.slide}>
					<Image src={content.image} width={1345} height={360} alt='bannerslide' />
					<div className={classes.downloadButtonContainer}>
						<Link href='https://play.google.com/store'>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/playstore.png' alt='playstore' width={128} height={38} />
						</Link>
						<Link href='https://www.apple.com/in/app-store/'>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/appstore.png' alt='appstore' width={128} height={38} />
						</Link>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
