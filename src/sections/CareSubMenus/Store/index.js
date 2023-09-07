import {makeStyles, Typography} from '@material-ui/core'
// import Search from '../../../components/Search'
import DoctorSlider from '../../../components/DoctorSlider'
import Download from '../../../components/Download'
import Card from '../../../sections/CareSubMenus/Store/GlassyStore'
import OurAchivement from '../../../sections/Homepage/Achievements'
import QuestionAnswer from '../../../sections/Carepage/questions'
import NurseHead from '../../../sections/Common/HeroSection'
import ProductList from '../../../sections/Common/PoductList'
import Image from 'next/image'
const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	},
	nursemain: {
		paddingBlock: 36,
		maxWidth: 1320,
		margin: '0px auto',
		'& .makeStyles-backgroundColor-27': {
			paddingInline: 124,
		},
	},

	careNurse: {
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
	cardContent: {
		marginInline: 100,
		marginBlock: 60,
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
			marginBlock: 20,
			gap: 12,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 0,
			marginBlock: 20,
			gap: 12,
		},
	},
	headSec: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		textAlign: 'center',
		paddingInline: 58,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 8,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 8,
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
		},
		'& .MuiTypography-h4': {
			color: '#7047EA',
			fontStyle: 'normal',
		},
	},
	paragraphContent: {
		display: 'flex',
		textAlign: 'center',
		paddingInline: 226,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 6,
		},
		[theme.breakpoints.down('md')]: {
			paddingInline: 6,
		},

		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
		},
	},
	Search: {
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 50,
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
			fontSize: 20,
			color: '#475677',
		},
	},
	ProductRoot: {
		marginInline: 100,
		'& .MuiTypography-h3': {
			fontSize: 28,
			color: '#481CA9',
		},
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
		[theme.breakpoints.up('sm')]: {
			marginInline: 96,
		},
	},
	imageBanner: {
		paddingBottom: 30,
	},
	typoText: {
		[theme.breakpoints.down('xs')]: {
			marginInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			marginInlineStart: 0,
		},
	},
}))

const Nurse = () => {
	const classes = useStyles()
	return (
		<div className={classes.background}>
			<div className={classes.nursemain}>
				<div className={classes.Search}>
					{/* <Search /> */}
				</div>
				<div className={classes.careNurse}>
					<div className={classes.Header}>
						<Typography variant='h4'>
							<span style={{color: 'red', paddingRight: '5px'}}>LFYnGO</span>Products
						</Typography>
						<Typography variant='body2'>Products assistance for seniors that covers all the needs</Typography>
						<NurseHead />
					</div>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/carestore.png' width={550} height={350} alt='nurse' />
					{/* comment */}
				</div>
				<div className={classes.cardContent}>
					<div className={classes.headSec}>
						<Typography variant='h4'>We got All your health needs covered</Typography>
						<Typography variant='body1'>
							We are your one-stop destination for otherhealthcare products as well, such as over the counter pharmaceuticals, healthcare devices and
							homeopathy and ayurveda medicines.
						</Typography>
					</div>
					<Card />
					<div className={classes.paragraphContent}>
						<Typography variant='body1'>
							You can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult
							process? Not at all! search forthe products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your
							order delivered to you.
						</Typography>
					</div>
				</div>
				<div className={classes.ProductRoot}>
					<div className={classes.typoText}>
						<Typography variant='h3'>Immunity Boosters</Typography>
					</div>
					<ProductList />
				</div>
				<div className={classes.imageBanner}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/storebanner.png' alt='image' width={1500} height={350} layout='responsive' />
				</div>
				<div className={classes.ProductRoot}>
					<div className={classes.typoText}>
						<Typography variant='h3'>Corona Preventions</Typography>
					</div>
					<ProductList />
				</div>
				<div className={classes.ProductRoot}>
					<div className={classes.typoText}>
						<Typography variant='h3'>Fitness Supplements</Typography>
					</div>
					<ProductList />
				</div>
				<div className={classes.ProductRoot}>
					<div className={classes.typoText}>
						<Typography variant='h3'>Benefits of Nurse Home Visit</Typography>
					</div>
					<ProductList />
				</div>
				<OurAchivement />
				<QuestionAnswer />
				<Download />
				<DoctorSlider />
			</div>
		</div>
	)
}

export default Nurse
