import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import DietList from '../../../sections/DietSection/DietSectionList'
import Fruit from '../../../sections/DietSection/DietFruitsList'
import Salesbutton from '../../../components/GradientButton'

// import CareDoctors from '../../Common/CareSlider';

const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/BackgroundCare.jpg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: '100% 100%',
	},
	doctormain: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/BackgroundCare.jpg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: '100% 100%',
		paddingBlock: 36,
		backgroundAttachment: 'fixed',
	},
	searchroot: {
		paddingBlock: 12,
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
	},
	doctor: {
		paddingInline: 100,
	},
	careDiet: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBlock: 52,
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			marginBlock: 12,
			flexDirection: 'column-reverse',
			gap: 12,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlock: 22,
		},
	},
	Header: {
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginInline: 12,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 12,
		},

		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			color: '#475677',
		},
		'& .MuiTypography-body2': {
			fontSize: 18,
			color: '#475677',
		},
	},
	salessection: {
		display: 'flex',
		gap: 12,
		paddingBlock: 12,
		'& .MuiButton-label': {
			textTransform: 'uppercase',
			color: '#F2F2F2',
			fontFamily: theme.typography.h4.fontFamily,
		},
	},
}))

const DietSection = () => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.careDiet}>
				<div className={classes.Header}>
					<Typography variant='body2'>Personalised plans for Weight Management, Sports & Fitness, Lifestyle issues around Stress, thyroids etc</Typography>
					<Fruit />
				</div>
				<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/fruits.png' width={550} height={350} alt='nurse' />
			</div>
		</>
	)
}

export default DietSection
