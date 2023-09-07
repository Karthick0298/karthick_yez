import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Button from '../GradientButton'
import AddIcon from '@material-ui/icons/Add'
import data from '../../model/NurseAssistance/data'
const useStyles = makeStyles(theme => ({
	specialistDoctor: {
		marginBlock: 35,
		marginInline: 0,
		[theme.breakpoints.down('xs')]: {
			marginBlock: 24,
			marginInline: 0,
		},
		[theme.breakpoints.down('md')]: {
			marginBlock: 24,
			marginInline: 0,
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
		// flexWrap: 'wrap',
		gap: 10,
		justifyContent: 'space-between',
		paddingBlock: 12,
		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro,sans-serif',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			paddingInline: 4,
		},
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'start',
		},
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
		},
	},
	iconfolder: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
		background: 'transparent linear-gradient(134deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		borderRadius: 15,
		minWidth: 144,
		minHeight: 136,
		gap: 12,
		justifyContent: 'center',
		'&:hover': {
			boxShadow: '0 16px 70px -12.125px rgba(0,0,0,10%)',
		},
		'& .MuiTypography-h6': {
			fontSize: 14,
			color: theme.palette.care.main,
			fontWeight: 700,
			fontFamily: 'Source Sans Pro,sans-serif',
			maxWidth: 150,
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			minWidth: 137,
		},
	},
	findspecialist: {
		borderRadius: 10,
		'& .MuiButton-label': {
			display: 'flex',
			flexDirection: 'column',
			paddingBlock: 44,
			fontSize: 14,
		},
	},
	SpecialisedHeadingTextOne: {
		fontWeight: 500,
	},
	SpecialisedHeadingTextTwo: {
		fontWeight: 700,
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
		[theme.breakpoints.up('sm')]: {
			padding: '4px 20px',
			minWidth: 144,
		},
	},
}))

export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.specialistDoctor}>
			<div className={classes.Specialisedicon}>
				{data.map(({id, image, heading, color}) => (
					<div key={id} className={classes.iconfolder}>
						<Image src={image} alt='gasteroenterology' width={40} height={40} />
						<Typography variant='h6' style={{color: color}}>
							{heading}
						</Typography>
					</div>
				))}
				<div className={classes.findspecialist}>
					<Button findMorebtn={classes.findMorebtn}>
						<AddIcon />
						Find More
					</Button>
				</div>
			</div>
		</div>
	)
}
