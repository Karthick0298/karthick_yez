import {makeStyles, Typography} from '@material-ui/core'
import OnlineSpec from '../../../../src/components/CareSpecialists'
const useStyles = makeStyles(theme => ({
	specialistDoctor: {
		marginBlock: 35,
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: 20,
			fontFamily: 'Source Sans Pro,sans-serif',
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
			fontSize: 26,
			fontStyle: 'normal',
			color: theme.palette.care.main,
		},
	},
	Specialisedicon: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 10,
		justifyContent: 'space-between',
		paddingBlock: 12,
		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro,sans-serif',
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
		'&:hover': {
			boxShadow: '0 16px 70px -12.125px rgba(0,0,0,10%)',
		},
		[theme.breakpoints.down('xs')]: {
			minWidth: '100%',
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
					Health Concern-
				</Typography>
				<Typography variant='h4' className={classes.SpecialisedHeadingTextTwo}>
					Online Consultation
				</Typography>
			</div>
			<Typography variant='h5'>Find experienced doctors across all platform</Typography>
			<OnlineSpec />
		</div>
	)
}
