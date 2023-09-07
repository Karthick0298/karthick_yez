import {makeStyles, Typography} from '@material-ui/core'
import CoachSpecialised from '../../../../components/SpecialisedCoach'
import FitnessCalculator from '../../../../components/FitnessCalculator'
const useStyles = makeStyles(theme => ({
	FitnessCalculator: {
		marginBlock: 35,
		marginInline: 100,
		[theme.breakpoints.down('sm')]: {
			marginBlock: 24,
			marginInline: 16,
		},
		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: theme.typography.h5.fontSize,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
				display: 'flex',
				justifyContent: 'center',
				paddingTop: 16,
			},
			[theme.breakpoints.up('sm')]: {
				paddingBlock: 12,
			},
		},
	},
	SpecialisedHeading: {
		display: 'flex',
		gap: 6,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
		'& .MuiTypography-subtitle1': {
			color: '#7047ea',
			fontSize: 22,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.subtitle1.fontSize,
			},
		},
	},
	Specialisedicon: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 10,
		justifyContent: 'space-between',
		paddingBlock: 12,

		'& .MuiTypography-h5': {
			fontFamily: 'Poppins,sans-serif',
		},
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			paddingInline: 29,
		},
	},
	iconfolder: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
		background: 'transparent linear-gradient(134deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		borderRadius: 15,
		padding: 18,
		minWidth: '15%',
		justifyContent: 'center',
		[theme.breakpoints.down('xs')]: {
			minWidth: '100%',
		},
		'&:hover': {
			boxShadow: '0 16px 70px -12.125px rgba(0,0,0,10%)',
		},
	},
	buttonHeight: {
		'& .MuiButton-label': {
			display: 'flex',
			flexDirection: 'column',
			paddingBlock: 20,
			fontSize: 14,
		},
	},
	SpecialisedHeadingTextOne: {
		fontWeight: 500,
	},
	SpecialisedHeadingTextTwo: {
		fontWeight: 700,
	},
}))

export default function SpecialistCoach() {
	const classes = useStyles()
	return (
		<div className={classes.FitnessCalculator}>
			<div className={classes.SpecialisedHeading}>
				<Typography variant='subtitle1' className={classes.SpecialisedHeadingTextOne}>
				Your Tracker-
				</Typography>
				<Typography variant='subtitle1' className={classes.SpecialisedHeadingTextTwo}>
				Calculator
				</Typography>
			</div>
			<Typography variant='h5'>Find experienced doctors across all platform</Typography>
			<FitnessCalculator />
		</div>
	)
}
