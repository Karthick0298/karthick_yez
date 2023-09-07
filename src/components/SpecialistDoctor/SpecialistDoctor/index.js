import {makeStyles, Typography} from '@material-ui/core'
import SpecialistDoctor from '../../../../src/components/DoctotSpecailists'
const useStyles = makeStyles(theme => ({
	specialistDoctor: {
		marginBlock: 35,
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginBlock: 24,
			marginInline: 0,
		},
		'& .MuiTypography-h5': {
			fontSize: 20,
			color: theme.palette.paragraph.main,
			fontFamily: 'Source Sans Pro',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
				display: 'flex',
				justifyContent: 'center',
				paddingTop: 16,
			},
		},
	},
	SpecialisedHeading: {
		display: 'flex',
		gap: 6,
		paddingBlock: 14,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			fontSize: 26,
			color: theme.palette.care.main,
			[theme.breakpoints.down('xs')]: {
				fontSize: 15,
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

export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.specialistDoctor}>
			<div className={classes.SpecialisedHeading}>
				<Typography variant='h4' className={classes.SpecialisedHeadingTextOne}>
					25+ Specialised Doctors-
				</Typography>
				<Typography variant='h4' className={classes.SpecialisedHeadingTextTwo}>
					In-person
				</Typography>
			</div>

			<Typography variant='h5'>Find experienced doctors across all platform</Typography>
			<SpecialistDoctor />
		</div>
	)
}
