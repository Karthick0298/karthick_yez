import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Button from '../../components/GradientButton'
import AddIcon from '@material-ui/icons/Add'
import specailist from '../../model/Specialist/data'
const useStyles = makeStyles(theme => ({
	specialistDoctor: {
		marginBlock: 35,
		marginInline: 0,
		[theme.breakpoints.down('xs')]: {
			marginBlock: 14,
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
		flexWrap: 'wrap',
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
	},
	iconfolder: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
		background: 'transparent linear-gradient(134deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		borderRadius: 15,
		minWidth: 180,
		minHeight: 170,
		justifyContent: 'center',
		'&:hover': {
			boxShadow: '0 16px 70px -12.125px rgba(0,0,0,10%)',
		},
		'& .MuiTypography-h6': {
			fontSize: 18,
			color: theme.palette.care.main,
			fontWeight: 700,
			fontFamily: 'Source Sans Pro,sans-serif',
			maxWidth: 150,
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			minWidth: 150,
		},
	},
	buttonHeight: {
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
}))

export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.specialistDoctor}>
			<div className={classes.Specialisedicon}>
				{specailist.map(({id, image, heading, color}) => (
					<div key={id} className={classes.iconfolder}>
						<Image src={image} alt='gasteroenterology' width={62} height={62} />
						<Typography variant='h6' style={{color: color}}>
							{heading}
						</Typography>
					</div>
				))}
				<div className={classes.buttonHeight}>
					<Button>
						<AddIcon />
						Find Specialists
					</Button>
				</div>
			</div>
		</div>
	)
}
