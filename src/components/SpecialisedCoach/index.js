import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Button from '../GradientButton'
import AddIcon from '@material-ui/icons/Add'
import SpecialstTrainee from '../../model/SpecialistCoachData/data'
const useStyles = makeStyles(theme => ({
	specialistDoctor: {
		marginBlock: 35,
		marginInline: 0,
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
			fontSize: 16,
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
		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro,sans-serif',
		},
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			paddingInline: 29,
		},
	},
	iconfolder: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
		background: 'transparent linear-gradient(134deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		borderRadius: 15,
		padding: 18,
		minWidth: '15%',
		justifyContent: 'center',
		gap: 12,
		'&:hover': {
			boxShadow: '0 16px 70px -12.125px rgba(0,0,0,10%)',
		},
		[theme.breakpoints.down('xs')]: {
			minWidth: '100%',
		},
	},
	buttonCoach: {
		'& .MuiButton-label': {
			display: 'flex',
			flexDirection: 'column',
			paddingBlock: 40,
			paddingInline: 16,
			fontSize: 14,
		},
	},
	SpecialisedHeadingTextOne: {
		fontWeight: 500,
	},
	SpecialisedHeadingTextTwo: {
		fontWeight: 700,
	},
	trainers: {},
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
	priceTag: {
		position: 'absolute',
		top: 12,
		left: -5,
		backgroundColor: '#00B592',
		paddingInline: 20,
		paddingBlock: 4,
		borderRadius: '0px 20px 20px 0px',
		'& .MuiTypography-h6': {
			color: '#fff',
			fontSize: 14,
			[theme.breakpoints.down('sm')]: {},
		},
	},
}))

export default function SpecialisedCoach() {
	const classes = useStyles()
	return (
		<div className={classes.specialistDoctor}>
			<div className={classes.Specialisedicon}>
				{SpecialstTrainee.map(({id, image, heading, color}) => (
					<div key={id} className={classes.iconfolder}>
						<Image src={image} alt='gasteroenterology' width={25} height={25} />
						<Typography variant='h5' style={{color: color}}>
							{heading}
						</Typography>
						<div className={classes.priceTag}>
							<Typography variant='h6'>$ 199</Typography>
						</div>
					</div>
				))}
				<div className={classes.buttonCoach}>
					<Button findMorebtn={classes.findMorebtn}>
						<AddIcon />
						Find Trainerss
					</Button>
				</div>
			</div>
		</div>
	)
}
