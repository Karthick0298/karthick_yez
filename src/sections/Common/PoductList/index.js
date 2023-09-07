import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import data from '../../../model/ProductDetail/data'
import Button from '../../../components/SettingButton'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper/core'
// install Swiper modules
SwiperCore.use([Navigation])

const useStyles = makeStyles(theme => ({
	swiperContainer: {
		paddingInlineEnd: 50,
		paddingBlock: 24,
		// [theme.breakpoints.down('xs')]: {
		// 	marginInline: 0,
		// },
		// cursor: 'pointer',
		// '& .swiper-slide': {
		// 	height: 241,
		// },
		// '& .swiper-button-next': {
		// 	display: 'none',
		// 	'&::after': {
		// 		display: 'none',
		// 	},
		// },
		// '& .swiper-button-prev': {
		// 	display: 'none',
		// 	'&::after': {
		// 		display: 'none',
		// 	},
		// },
		'& .swiper-button-next': {
			right: 0,
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
			display: 'none',
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
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		padding: 12,
		width: '283px !important',
		// marginRight: '13px !important',
		opacity: 1,
		transform: 'translateY(-9px)',
		background: 'transparent linear-gradient( 288deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000d',
		borderRadius: 10,
	},
	listItem: {
		'& .MuiTypography-h6': {
			color: '#475677',
			fontWeight: 600,
		},
		'& .MuiTypography-h5': {
			color: '#475677',
		},
	},
	allList: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& .MuiButton-root': {
			padding: '4px 4px',
		},
		'& .MuiTypography-h6': {
			color: '#fff',
			fontWeight: 400,
		},
	},
	rateProduct: {
		display: 'flex',
		gap: 12,
		'& .MuiTypography-h6': {
			color: '#475677',
			fontWeight: 400,
		},
	},
	butonList: {
		display: 'flex',
		justifyContent: 'center',
	},
	buttonOne: {
		'& .MuiButton-containedPrimary': {
			background: '#EDEDED',
			color: '#475677',
			borderRadius: '0px 0px 0px 19px',
		},
	},
	buttonTwo: {
		'& .MuiButton-containedPrimary': {
			background: '#7047EA',
			color: '#fff',
			borderRadius: '0px 0px 19px',
		},
	},
	slideImage: {
		textAlign: 'center',
	},
	mainContent: {
		paddingBlock: 48,
		'& .swiper-pagination-bullet-active': {
			background: theme.palette.care.main,
		},
	},
}))

function DoctorSlider() {
	const classes = useStyles()
	return (
		<>
			<Swiper
				slidesPerView={3}
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
						slidesPerView: 3,
						spaceBetween: 100,
					},
				}}
			>
				{data.map(user => (
					<SwiperSlide key={user.id} className={classes.root}>
						<div className={classes.slideImage}>
							<Image src={user.product} width={100} height={130} alt='logo' />
						</div>
						<div className={classes.listItem}>
							<Typography variant='h5'>{user.size}</Typography>
							<Typography variant='h6'>{user.lab}</Typography>
						</div>
						<div className={classes.allList}>
							<Button>
								<Typography variant='h6'>{user.rating}</Typography>
								<Image src={user.star} width={15} height={15} alt='logo' />
							</Button>
							<div className={classes.rateProduct}>
								<Typography variant='h6'>
									<span style={{textDecoration: 'line-through', color: '#475677'}}>{user.ratewrite}</span>
								</Typography>
								<Typography variant='h6'>{user.rate}</Typography>
							</div>
						</div>
						<div className={classes.butonList}>
							<div className={classes.buttonOne}>
								<Button variant='contained' color='primary'>
									Wishlist
								</Button>
							</div>
							<div className={classes.buttonTwo}>
								<Button variant='contained' color='primary'>
									Add to Cart
								</Button>
							</div>
						</div>
					</SwiperSlide>
				))}{' '}
			</Swiper>
		</>
	)
}

export default DoctorSlider
