import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Button from '../GradientButton'
import AddIcon from '@material-ui/icons/Add'
import Specialist from '../../model/Specialist/data'
import CentersData from '../../model/SpecialistCentersData/data'
const useStyles = makeStyles(theme => ({
	exploreCenters: {
		// marginBlock: 32,
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
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				display: 'flex',
				justifyContent: 'center',
				paddingBlock: 0,
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

	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},

	exploreCenterssection: {
		display: 'flex',
		gap: 10,
		justifyContent: 'space-around',
		paddingBlock: 12,
		alignItems: 'center',
		flexWrap: 'wrap',
		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro,sans-serif',
		},
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-evenly',
			paddingInline: 29,
			// flexDirection: 'column',
			alignItems: 'center',
		},
		[theme.breakpoints.up('sm')]: {
			flexWrap: 'wrap',
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
	findTraineers: {
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
	headingtext: {
		position: 'relative',
		// display: 'flex',
		// flexDirection: 'row',
		// margin: '3%',
		cursor: 'pointer',
		gap: 12,
		display: 'flex',
		minWidth: '15%',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	secondtxt: {
		position: 'absolute',
		bottom: 0,
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: 18,
		padding: 5,
		height: 38,
		overflow: 'hidden',
		[theme.breakpoints.down('sm')]: {
			height: 33,
			width: 160,
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'column',
			height: 33,
			width: 160,
		},
		'& .MuiTypography-h5': {
			color: '#fff !important',
			fontSize: 14,
			padding: 7,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				paddingBlock: '0 !important',
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 12,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
}))

export default function SpecialisedcentersNear() {
	const classes = useStyles()
	return (
		<div className={classes.exploreCenters}>
			<div className={classes.exploreCenterssection}>
				{CentersData.map(({id, image, heading}) => (
					<div key={id} className={classes.headingtext}>
						<Image src={image} alt='' width={160} height={140}></Image>
						<div className={classes.secondtxt}>
							<Typography variant='h5'>{heading}</Typography>
						</div>
					</div>
				))}
				<div className={classes.findTraineers}>
					<Button findMorebtn={classes.findMorebtn}>
						<AddIcon />
						Find Centers
					</Button>
				</div>
			</div>
		</div>
	)
}
