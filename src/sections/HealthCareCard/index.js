import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Healthcard from '../../components/HealthCareCard'
const useStyles = makeStyles(theme => ({
	mainsection: {
		paddingTop: 46,
	},
	healthcardheading: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	healthcardheadingone: {
		color: theme.palette.care.main,
		fontFamily: theme.typography.h1.fontFamily,
		fontSize: theme.typography.body2.fontSize,
		fontWeight: theme.typography.h5.fontWeight,
		[theme.breakpoints.down('xs')]: {
			fontSize: 18,
		},
	},
	healthcardheadingtwo: {
		color: theme.palette.care.main,
		fontFamily: theme.typography.h1.fontFamily,
		fontSize: theme.typography.body2.fontSize,
		fontWeight: theme.typography.h2.fontWeight,
		[theme.breakpoints.down('xs')]: {
			fontSize: 18,
		},
	},
	healthcarecardsection: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: 20,
		marginBlock: 28,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingInline: 100,
		},
	},
	healthcaremainsection: {
		marginBlock: 40,
	},
}))
export default function HealthCard() {
	const classes = useStyles()
	return (
		<div className={classes.healthcaremainsection}>
			<div className={classes.healthcardheading}>
				<Typography variant='h5' className={classes.healthcardheadingone}>
					Leading Healthcare Providers.
				</Typography>
				<Typography variant='h5' className={classes.healthcardheadingtwo}>
					Trust us for Business
				</Typography>
			</div>
			<div className={classes.healthcarecardsection}>
				<Healthcard
					Heading={'LFYnGO Healthcash'}
					Subheading={'Download the App Now and Get RS. 100 on Your LFYnGO Wallet'}
					background={'transparent linear-gradient(180deg, #41EAE3 0%, #2293B7 100%) 0% 0% no-repeat padding-box'}
					textColor={'#FAFAFA'}
				/>
				<Healthcard
					Heading={'LFYnGO Healthcash'}
					Subheading={'Download the App Now and Get RS. 100 on Your LFYnGO Wallet'}
					background={'transparent linear-gradient(180deg, #A5A2F6 0%, #564FD6 100%) 0% 0% no-repeat padding-box'}
					textColor={'#FAFAFA'}
				/>
			</div>
		</div>
	)
}
