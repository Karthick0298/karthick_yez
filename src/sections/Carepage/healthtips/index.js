import {makeStyles, Typography} from '@material-ui/core'
import Button from '../../../components/GradientButton'
import Image from 'next/image'
import HealthTipsCard from '../../../model/HealthTipsCardDetails/data'
const useStyles = makeStyles(theme => ({
	Positionroot: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	PositionMainroot: {
		paddingInline: 100,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginInline: 24,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
			marginInline: 4,
			gap: 10,
		},
	},
	leftSidePosition: {
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 28,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	gfg: {
		margin: '3%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},

	secondtxt: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: 18,
		padding: 5,
		height: 38,
		overflow: 'hidden',
		'&:hover': {
			height: 160,
		},
		[theme.breakpoints.up('sm')]: {
			minHeight: 72,
		},
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 15,
			paddingBlock: 29,
			paddingInline: 12,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 14,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			paddingInline: 12,
			paddingBottom: 32,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},

	cardsmallPosion: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			flexDirection: 'column',
		},
	},
	secondsubtxt: {},
}))

function HealthTips() {
	const classes = useStyles()
	return (
		<div className={classes.PositionMainroot}>
			<div className={classes.doctorPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2' className={classes.AppoinmentFont}>
						Health Tips
					</Typography>
				</div>
				<div className={classes.rightPosition}>
					<Button>All Health Tips</Button>
				</div>
			</div>
			<div className={classes.cardsmallPosion}>
				{HealthTipsCard.map(({id, image, content1, content2}) => (
					<div key={id} className={classes.gfg}>
						<Image src={image} alt='' width={380} height={380}></Image>

						<div className={classes.secondtxt}>
							<Typography variant='h5'>{content1}</Typography>
							<div className={classes.secondsubtxt}>
								<Typography variant='h4'>{content2}</Typography>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default HealthTips
