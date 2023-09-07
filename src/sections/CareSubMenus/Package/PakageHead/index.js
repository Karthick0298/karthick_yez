import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Image from 'next/image'
import HeadList from '../../../../components/CareHeadInfo'
const useStyles = makeStyles(theme => ({
	mainsection: {
		paddingBlock: 25,
		marginInline: 124,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			marginInline: 10,
			flexDirection: 'column-reverse',
		},
		[theme.breakpoints.down('sm')]: {
			marginInline: 10,
			flexDirection: 'column-reverse',
		},
	},
	healthcardheading: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'row',
		},
	},
	allMain: {
		// background: 'white',
		maxWidth: 442,
		padding: 24,
		position: 'relative',

		background: 'transparent linear-gradient(131deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '2px solid #FFFFFF',
		borderRadius: 15,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		'-webkit-backdrop-filter': 'blur(6px)',
	},
	backgroundColor: {
		width: 215,
		height: 213,
		background: '#ff000010',
		borderRadius: '19px 24px 117px 63px',
		position: 'absolute',
		transform: 'translateY(182px)',
		top: 35,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},

	headSection: {
		'& .MuiTypography-h3': {
			fontSize: 28,
			fontWeight: 400,
			color: theme.palette.paragraph.main,
		},
	},
	mainhospital: {},
}))
export default function List() {
	const classes = useStyles()
	return (
		<div className={classes.mainsection}>
			<div className={classes.allMain}>
				<div className={classes.headSection}>
					<Typography variant='h3'>
						<span style={{fontWeight: '500', color: '#E22C24', paddingInline: '4px'}}>LFYnGO</span>Packages
					</Typography>
				</div>
				<div className={classes.cardsection}>
					<HeadList
						Subhead={'Health Packages includes:'}
						image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/select.svg'}
						ListOne={'LFYnGO Packages Health check at your home'}
						ListTwo={'Visit Lab near you'}
						ListThree={'Online Reports'}
						ListFour={'100% Safe & Hygienic'}
						ListFive={'Quality assurance'}
						ListSix={'Quality assurance'}
					/>
				</div>
			</div>
			<div className={classes.backgroundColor}></div>
			<div className={classes.mainhospital}>
				<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/package.png' width={543} height={345} />
			</div>
		</div>
	)
}
