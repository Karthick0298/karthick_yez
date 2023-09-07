/* eslint-disable @next/next/link-passhref */
import {CardContent, Card, CardActionArea, CardMedia, makeStyles, CardActions, Typography} from '@material-ui/core'
import Button from '../../../components/GradientButton'
import Doctor from '../../../sections/Common/CareSlider'

const useStyles = makeStyles(theme => ({
	Positionroot: {
		display: 'flex',
		flexDirection: 'column',
		marginInline: 100,
		marginBlock: 52,

		[theme.breakpoints.down('sm')]: {
			display: 'block',
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
			marginInline: 16,
			marginBlock: 0,
		},
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
		},
	},
	leftSidePosition: {
		flex: 3,
		display: 'flex',
		gap: 8,
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h4': {
			color: '#7047ea',
			fontSize: 14,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	rightPosition: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	rightSidePosition: {
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			order: -1,
		},
	},
	imagePosition: {
		display: 'flex',
		flexDirection: 'row',
		gap: 28,
		paddingTop: 23,
		'& .MuiCardMedia-img': {
			objectFit: 'cover',
			[theme.breakpoints.down('xs')]: {
				objectFit: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				objectFit: 'cover',
			},
		},
		'& .MuiCardMedia-media': {
			width: '75%',
		},
		'& .MuiCardContent-root': {
			background: 'transparent linear-gradient(288deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
			boxShadow: '0px 4px 15px #0000000d',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
			transform: 'translateY(-9px)',
		},
		'& .MuiPaper-root': {
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},
		'& .MuiCard-root': {
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6)',
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontWeight: 600,
			fontSize: 14,
		},

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	AppoinmentFont: {
		fontWeight: 100,
	},
	contentsize: {
		fontSize: 14,
	},
	AppoinmentImagePosition: {
		width: '100%',

		'& .MuiTypography-h4': {
			color: '#475677',
			fontSize: 14,
			fontWeight: 'bold',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	ImagePositionmobile: {
		[theme.breakpoints.down('sm')]: {
			objectFit: 'cover !important',
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
			fontSize: 24,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.subtitle1.fontSize,
			},
		},
	},
	SpecialisedHeadingTextOne: {
		fontWeight: 500,
	},
	SpecialisedHeadingTextTwo: {
		fontWeight: 700,
	},
}))

export default function CareDoctors() {
	const classes = useStyles()
	return (
		<div className={classes.Positionroot}>
			<div className={classes.doctorPosition}>
				<div className={classes.SpecialisedHeading}>
					<Typography variant='subtitle1' className={classes.SpecialisedHeadingTextOne}>
						Instant Appointment with
					</Typography>
					<Typography variant='subtitle1' className={classes.SpecialisedHeadingTextTwo}>
						Dieticians
					</Typography>
				</div>
				<div className={classes.rightPosition}>
					<Button>All Doctors</Button>
				</div>
			</div>
			<div>
				<Doctor />
			</div>
		</div>
	)
}
