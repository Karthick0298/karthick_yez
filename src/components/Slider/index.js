import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {makeStyles, Typography} from '@material-ui/core'
import SwiperCore, {Autoplay} from 'swiper'
import data from '../../model/Slider/data'

SwiperCore.use([Autoplay])
const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flex: 6,
		paddingInline: 68,
		'& .MuiTypography-body1': {
			color: '#475677',
		},
		[theme.breakpoints.down('sm')]: {
			paddingInline: 20,
			'& .MuiTypography-h3': {
				fontSize: theme.typography.subtitle1.fontSize,
			},
			'& .MuiTypography-body1': {
				fontSize: theme.typography.h5.fontSize,
			},
		},
	},
	userImg: {
		display: 'flex',
		paddingBlock: 20,
		flex: 7,
	},
	align: {
		display: 'flex',
		gap: 12,
		[theme.breakpoints.down('sm')]: {
			gap: 6,
			'& .MuiTypography-h1': {
				fontSize: theme.typography.body2.fontSize,
			},
		},
	},
}))

export default function Slider() {
	const classes = useStyles()
	return (
		<Swiper
			className={classes.slider}
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false,
			}}>
			{data.map(user => (
				<SwiperSlide key={user.id} className={classes.slide}>
					<div className={classes.container}>
						<div className={classes.userImg}>
							<Image src={user.src} width={720} height={526} alt='slide' />
						</div>
						<div className={classes.content}>
							<Typography variant='h3'>Wellbeing with just a single app!</Typography>
							<div className={classes.align}>
								<Typography variant='h1' style={{color: '#E22C24'}}>
									LFYnGO
								</Typography>
								<Typography variant='h1'>{user.title}</Typography>
							</div>
							<Typography variant='body1'>
								we strive to keep you fit & healthy through a range of holistic offerings that include fitness and yoga, healthy meals, mental
								wellbeing and primary care. Now anyone can now stay healthy from the safety of their homes with just a single app that helps you to
							</Typography>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
