import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import {Card, CardContent, CardActionArea, CardMedia, CardActions} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Navigation])

const useStyles = makeStyles(theme => ({
	root: {
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

	swiperContainer: {
		paddingBlock: 26,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'green',
		[theme.breakpoints.down('sm')]: {
			paddingBlockEnd: 48,
		},

		'& .MuiPaper-rounded': {
			// paddingBlockEnd: 60,
			height: 298,
			borderRadius: 15,
		},

		'& .swiper-button-prev': {
			left: 0,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/arrow_left1.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 22,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 362,
				left: '35%',
			},
		},

		'& .swiper-button-next': {
			right: 0,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/arrow_right1.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 22,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 362,
				right: '35%',
			},
		},
		'& .swiper-wrapper': {
			justifyContent: 'space-between',
		},
	},

	slide: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '100%',
	},

	title: {
		display: 'flex',
		justifyContent: 'space-between',

		'& .MuiTypography-h3': {
			color: '#475677',
			fontWeight: 500,
			[theme.breakpoints.up('xs')]: {
				fontSize: 15,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},

	card: {
		[theme.breakpoints.up('xs')]: {
			maxWidth: 300,
			minWidth: 300,
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: 285,
			minWidth: 270,
		},

		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: 14,
			fontWeight: 300,
			paddingBlock: 8,
		},
		'& .MuiTypography-h6': {
			color: '#475677',
			fontSize: 14,
			fontWeight: 500,
		},
	},

	rating: {
		width: 48,
		height: 22,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		'& .MuiTypography-h6': {
			color: '#FFF',
			fontSize: 12,
			fontWeight: 300,
			marginInlineEnd: 4,
			letterSpacing: 0.5,
		},
		'& .MuiSvgIcon-root': {
			color: '#FFF',
			fontSize: 16,
		},
	},
}))

export default function CardSlider({cardData, ratingBoxColor}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Swiper
				slidesPerView={3}
				spaceBetween={10}
				navigation={true}
				className={classes.swiperContainer}
				breakpoints={{
					300: {
						slidesPerView: 1,
						spaceBetween: 20,
						pagination: {el: '.swiper-pagination', clickable: true},
					},
					480: {
						slidesPerView: 1,
						spaceBetween: 30,
						pagination: {el: '.swiper-pagination', clickable: true},
					},

					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},

					1024: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: -20,
					},
					1600: {
						slidesPerView: 4,
						spaceBetween: -20,
					},
				}}>
				{cardData?.map((item, index) => (
					<SwiperSlide key={index} id={item?.mastTtypeUuid} className={classes.slide}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia component='img' height='182' image={item?.image ? item?.image : ''} />
								<CardContent>
									<div className={classes.title}>
										<Typography variant='h3'>{item?.tentName ? item?.tentName : ''}</Typography>
										<div className={classes.rating} style={{backgroundColor: ratingBoxColor}}>
											<Typography variant='h6'>{item?.rating ? item?.rating : ''}</Typography>
											<StarIcon />
										</div>
									</div>
									<Typography variant='h5'>
										{item?.address1 ? item?.address1 : ''}- <span>{item?.address2 ? item?.address2 : ''}</span>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
