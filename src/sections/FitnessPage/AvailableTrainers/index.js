import {makeStyles, Typography} from '@material-ui/core'
// import TrainersCategory from '../../../components/NurseCard'
import Button from '../../../components/GradientButton'
const useStyles = makeStyles(theme => ({
	physioavailablemain: {
		paddingInline: 100,
		display: 'flex',
		flexDirection: 'column',
		paddingBlockStart: 42,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.down('sm')]: {
			paddingInline: 0,
			alignItems: 'baseline',
		},
	},
	physioheading: {
		fontFamily: theme.typography.h3.fontFamily,
		color: theme.palette.care.main,
		fontStyle: theme.typography.h3.fontStyle,
		fontSize: theme.typography.body2.fontSize,
	},
	physiosubheading: {
		fontFamily: theme.typography.h3.fontFamily,
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.subtitle1.fontSize,
	},

	physio: {
		display: 'inline',
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 10,
		},
	},
	leftSidePosition: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 12,
		'& .MuiTypography-h2': {
			color: '#31B3F9',
			fontSize: 24,
			fontWeight: '100',
			'& span': {
				fontWeight: 700,
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		[theme.breakpoints.down('xs')]: {
			paddingInline: 16,
		},
	},

	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))
export default function AvailableFitnessTrainers() {
	const classes = useStyles()
	return (
		<div className={classes.physioavailablemain}>
			<div className={classes.doctorPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2'>
						Available Online <span>Trainers</span>
					</Typography>
					<Typography variant='h5' className={classes.physiosubheading}>
						Qualified expert visits your home for fitness services
					</Typography>
				</div>
				<div className={classes.rightPosition}>
					<Button findMorebtn={classes.findMorebtn}>+ Find More</Button>
				</div>
			</div>
			{/* <TrainersCategory /> */}
		</div>
	)
}
