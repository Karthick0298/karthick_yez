import {makeStyles} from '@material-ui/core/styles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import CloseIcon from '@material-ui/icons/Close'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Button from '../../../components/GradientButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Filters from '../../../sections/MindPage/Filters'
import ProfileListCard from '../../../components/ProfileListCard'
import MobileFilter from '../../../sections/MindPage/Filters/MobileFilter'

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

	breadCrumbsNavigation: {
		paddingBlock: 12,

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 6,
		},

		'& a': {
			fontSize: 18,
			color: '#475677',
			textDecoration: 'none',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			fontSize: 18,
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	topSection: {
		// background: `yellow`,
	},

	title: {
		fontSize: 22,
		color: theme.palette.yoga.main,
		fontWeight: 500,
		[theme.breakpoints.down('sm')]: {
			fontSize: 20,
		},
	},

	topSectionSub: {
		display: 'flex',
		justifyContent: 'space-between',
		// alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},

	topSectionSubLeft: {
		display: 'flex',
		paddingBlock: 5,

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			color: '#475677',
			fontSize: 18,
			'& span': {
				paddingInline: 12,
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},

		'& a': {
			fontSize: 18,
			color: theme.palette.yoga.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	topSectionSubRight: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		gap: 12,
	},

	mainSection: {
		display: 'flex',
		gap: 20,
		paddingBlockStart: 12,
		[theme.breakpoints.down('sm')]: {},
	},

	profileList: {
		flex: 3,
	},

	filters: {
		flex: 1,
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
	mobileScreenFilterButton: {
		border: `2px solid ${theme.palette.yoga.main}`,
		display: 'flex',
		alignItems: 'center',
		paddingInline: 12,
		borderRadius: 30,
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			fontSize: 16,
			color: theme.palette.yoga.main,
			fontWeight: 500,
			fontFamily: 'Poppins',
			paddingInlineEnd: 8,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.yoga.main,
			fontSize: 18,
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
				// display: 'none',
			},
		},
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},

	// ############### mobileFilter ###############//
	mobileFilter: {},
}))

export default function CoachProfileList() {
	const classes = useStyles()
	const cardData = [
		{
			id: 1,
			name: 'Arnold Schwarzenegger',
			experience: 'Yoga Trainer, 7 Years Experience Overall',
			location: 'Isha yoga center, Coimbatore',
			phone: 1234567890,
			likes: 89,
			userStories: 123,
			onlineFees: 350,
			clinicFees: 430,
		},
		{
			id: 2,
			name: 'Dinesh Karuppachamy',
			experience: 'Yoga Trainer, 5 Years Experience Overall',
			location: 'Dev yoga center, Coimbatore',
			phone: 8234567890,
			likes: 92,
			userStories: 93,
			onlineFees: 340,
			clinicFees: 440,
		},
		{
			id: 3,
			name: 'Ranjith Kumar Ayyapan',
			experience: 'Yoga Trainer, 3 Years Experience Overall',
			location: 'Elite Souls yoga center, Coimbatore',
			phone: 9434567890,
			likes: 89,
			userStories: 34,
			onlineFees: 390,
			clinicFees: 480,
		},
	]

	return (
		<div className={classes.root}>
			<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb' className={classes.breadCrumbsNavigation}>
				<Link href='/mind'>Mind</Link>
				<Typography variant='h5'>Yoga Masters list</Typography>
			</Breadcrumbs>

			<div className={classes.topSection}>
				<Typography variant='h2' className={classes.title}>
					Best Yoga Masters @ Chennai
				</Typography>

				<div className={classes.topSectionSub}>
					<div className={classes.topSectionSubLeft}>
						<Typography variant='h5'>
							{cardData.length} Results<span>|</span>
						</Typography>
						<Link href='/mind'>Find near me</Link>
					</div>

					<div className={classes.topSectionSubRight}>
						<div className={classes.mobileScreenFilterButton}>
							<Typography variant='h5'>Filter</Typography>
							<CloseIcon />
						</div>
						<div className={classes.mobileFilter}>
							<MobileFilter />
						</div>
						<div>
							<Button findMorebtn={classes.findMorebtn}>Sort By</Button>
						</div>
						<div>
							<Button findMorebtn={classes.findMorebtn}>
								Map View <ArrowForwardIcon />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className={classes.mainSection}>
				<div className={classes.profileList}>
					<ProfileListCard cardData={cardData} fontColor='#0CC593' btnColor={classes.findMorebtn} />
				</div>
				<div className={classes.filters}>
					<Filters />
				</div>
			</div>
		</div>
	)
}
