import React from 'react'
import {Avatar, makeStyles, Typography} from '@material-ui/core'
import {Swiper, SwiperSlide} from 'swiper/react'
import Button from '@material-ui/core/Button'
import ButtonList from '../../../components/GradientButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import Drawer from '@material-ui/core/Drawer'
import Close from '@material-ui/icons/Close'
import Image from 'next/image'
import {useRouter} from 'next/router'
import data from '../../../model/LabProduct/data'
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
		left: -17,
		opacity: 1,
		transform: 'translateY(-9px)',
		background: 'transparent linear-gradient( 288deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000d',
		borderRadius: 10,
		backdropFilter: 'blur(6px)',
	},
	swiperContainer: {
		paddingInline: 29,
		paddingBlock: 24,
		'& .swiper-button-next': {
			right: -17,
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
			left: -18,
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
	allList: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingInline: 12,
		'& .MuiButton-root': {
			padding: '4px 4px',
		},
		'& .MuiTypography-h6': {
			color: '#fff',
			fontWeight: 400,
		},
	},
	headSec: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: 10,
		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			fontSize: 20,
			color: '#475677',
			fontWeight: 700,
		},
	},
	imageButton: {
		display: 'flex',
		gap: 12,
		alignItems: 'center',
		'& .MuiButton-root': {
			padding: '4px 6px',
		},
		'& .MuiButton-containedPrimary': {
			color: '#7047EA',
		},
	},
	contain: {
		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: 16,
			paddingInlineEnd: 45,
			lineHeight: '26px',
		},
	},
	ratingCont: {
		display: 'flex',
		gap: 24,
		'& .MuiTypography-h6': {
			color: '#475677',
			fontSize: 16,
		},
	},
	checkBox: {
		border: '0',
	},
	checkList: {
		display: 'flex',
		gap: 22,
		alignItems: 'center',
	},
	allRoot: {
		// backgroundColor: 'green',
		// maxWidth: 290,
		minWidth: 290,
		display: 'flex',
		flexDirection: 'column',
		gap: 18,
		background: 'transparent linear-gradient( 288deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000d',
		paddingInline: 12,
		paddingBlock: 20,
		borderRadius: 10,
	},
	drawerContain: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	compareContent: {
		display: 'flex',
		gap: 12,
		alignItems: 'center',
		padding: 6,
		width: 245,
	},
	buttoncont: {
		textTransform: 'capitalize',
	},
	buttonContain: {
		display: 'flex',
		flexDirection: 'column',
	},
	imageCompare: {},
	compareText: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		'& ..MuiTypography-h5': {
			width: 148,
		},
	},
	emptyScreen: {
		display: 'flex',
		border: '1px solid #E1E1E1',
		gap: 12,
		alignItems: 'center',
		borderRadius: 10,
		padding: 6,
	},
	compareListItem: {
		border: '1px solid #E1E1E1',
		borderRadius: 10,
	},
	draconst: {
		'& .MuiDrawer-paperAnchorBottom': {
			top: 'auto',
			left: 0,
			right: 0,
			bottom: 27,
			height: 'auto',
			borderRadius: 10,
			marginInline: 100,
			padding: 14,
			gap: 12,
		},
	},
	closeIcon: {
		display: 'flex',
		justifyContent: 'flex-end',
		cursor: 'pointer',
	},
	buttonMain: {
		display: 'flex',
		justifyContent: 'center',
		gap: 4,
		background: '#7047EA',
		width: 57,
		padding: 5,
		borderRadius: 8,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		'& .MuiTypography-h6': {
			color: '#fff',
		},
	},
	findMoreBtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

function DoctorSlider() {
	const router = useRouter()
	const classes = useStyles()
	const anchor = 'bottom'
	const [drawer, setDrawer] = React.useState(false)
	const [itemsToCompare, setItemsToCompare] = React.useState({})

	const toggleDrawer = () => {
		setDrawer(preVal => !preVal)
	}
	const compare = (currentVal, productDetails) => {
		setItemsToCompare(preVal => {
			preVal[productDetails[0]] = currentVal ? productDetails : undefined
			return preVal
		})
		toggleDrawer()
	}

	const noOfProductsOnCompareState = React.useMemo(() => {
		return Object.keys(itemsToCompare).filter(key => itemsToCompare[key]).length
	}, [itemsToCompare, drawer])
	return (
		<>
			<div key={anchor}>
				<Drawer anchor={anchor} open={drawer} onClose={toggleDrawer} className={classes.draconst}>
					<div className={classes.closeIcon}>
						<Close />
					</div>

					<div className={classes.drawerContain}>
						{Object.keys(itemsToCompare).map(key => {
							return (
								<div className={classes.compareListItem}>
									<div className={classes.compareContent}>
										{/* {JSON.stringify(itemsToCompare[key])} */}
										<div className={classes.imageCompare}>
											<Image src={itemsToCompare[key][1]} width={46} height={46} />
										</div>
										<div className={classes.compareText}>
											<Typography variant='h5'>{itemsToCompare[key][2]}</Typography>
											<Typography variant='h5'>{itemsToCompare[key][3]}</Typography>
											{/* {noOfProductsOnCompareState} */}
										</div>
									</div>
								</div>
							)
						})}
						<div className={classes.emptyScreen}>
							<Typography variant='h5'>View All Packages</Typography>
						</div>
						<div className={classes.buttonContain}>
							<ButtonList onClick={() => router.push('/care/submenu/CompareList')}>Compare</ButtonList>
							<Button variant='text' className={classes.buttoncont}>
								Rest
							</Button>
						</div>
					</div>
				</Drawer>
			</div>
			<div className={classes.mainContant}>
				<Swiper
					slidesPerView={3}
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
							slidesPerView: 1,
							spaceBetween: 50,
						},
						768: {
							slidesPerView: 1,
							spaceBetween: 80,
						},

						1024: {
							slidesPerView: 2,
							spaceBetween: 80,
						},
						1250: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1440: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}>
					{data.map(user => (
						<SwiperSlide key={user.id} className={classes.slideContain}>
							<div className={classes.allRoot}>
								<div className={classes.headSec}>
									<Typography variant='h4'>{user.head}</Typography>
									<Image src={user.safeimg} width={85} height={35} alt='logo' />
								</div>
								<Typography variant='h5'>{user.subhead}</Typography>
								<div className={classes.imageButton}>
									<Image src={user.image} width={40} height={40} alt='logo' />
									<div className={classes.buttonMain}>
										<Typography variant='h6'>{user.rating}</Typography>
										<Image src={user.star} width={16} height={16} alt='logo' />
									</div>
								</div>
								<div className={classes.contain}>
									<Typography variant='h5'>{user.list}</Typography>
									<Typography variant='h5'>{user.listcontent}</Typography>
								</div>
								<div className={classes.ratingCont}>
									<Typography variant='h6'>
										<span>Price: </span>
										{user.price}
									</Typography>
									<Typography variant='h6'>
										<span style={{textDecoration: 'line-through', color: '#475677'}}>{user.overwrite}</span>
									</Typography>
								</div>

								<div className={classes.checkList}>
									<ButtonList findMorebtn={classes.findMoreBtn}>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/shopping-bag.svg' width={16} height={16} />
										Add To Cart
									</ButtonList>
									<div>
										<FormGroup className={classes.checkBox}>
											<FormControlLabel
												disabled={noOfProductsOnCompareState >= 3}
												onChange={event => compare(event.target.checked, [user.id, user.image, user.head, user.price])}
												control={<Checkbox />}
												label='Compare'
											/>
										</FormGroup>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}{' '}
				</Swiper>
			</div>
		</>
	)
}

export default DoctorSlider
