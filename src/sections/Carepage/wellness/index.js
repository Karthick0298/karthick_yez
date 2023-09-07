/* eslint-disable prettier/prettier */
import {makeStyles, Typography} from '@material-ui/core'
import Button from '../../../components/GradientButton'
import Image from 'next/image'
import WellnessFruits from '../../../model/WellnessArticlesCardDetails/data'
const useStyles = makeStyles(theme => ({
	Positionroot: {
		display: 'flex',
		flexDirection: 'row',
		gap: 25,
		paddingBlock: 20,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	PositionMainroot: {
		marginInline: 100,
		marginBlock: 75,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 0,
			paddingBlock: 0,
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
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 18,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	gfg: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		flexShrink: 0,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	gfg1: {
		display: 'flex',
		position: 'relative',
	},
	firsttxt: {
		position: 'absolute',
		top: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: 18,
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 16,
			padding: 6,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 14,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			padding: 6,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	secondtxt: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: 18,
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 14,
			padding: 6,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 12,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			padding: 6,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
	secondtxt2: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: 18,

		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 14,
			padding: 6,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 12,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			padding: 6,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
	cardsmallPosion: {
		display: 'flex',
		flexWrap: 'wrap',
		flexShrink: 5,
		gap: 21,

		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			flexShrink: 4,
		},
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'center',
			flexShrink: 3,
		},
	},
	imageBorder: {
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

function HealthTips() {
	const classes = useStyles()
	return (
		<div className={classes.PositionMainroot}>
			<div className={classes.doctorPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2' className={classes.AppoinmentFont}>
						Health & Wellness Articles
					</Typography>
				</div>
				<div className={classes.rightPosition}>
					<Button findMorebtn={classes.findMorebtn}>All Tools</Button>
				</div>
			</div>

			<div className={classes.Positionroot}>
				<div className={classes.gfg}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/wellnessheadache.png' quality={100} alt='' width={520} height={480} className={classes.imageBorder}></Image>
					<div className={classes.firsttxt}>
						<Typography variant='h5'>Get relief from lower the abdomen pain</Typography>
					</div>
					<div className={classes.secondtxt}>
						<Typography variant='h4'>
							Trem aperiam, eaque ipsa quae avitae dicta sunt explicabo sequi nesciuntTrem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta
						</Typography>
					</div>
				</div>
				<div className={classes.cardsmallPosion}>
					{WellnessFruits.map(({id, image, content1}) => (
						<div key={id} className={classes.gfg1}>
							<Image src={image} alt='' width={220} height={120}></Image>

							<div className={classes.secondtxt2}>
								<Typography variant='h4'>{content1}</Typography>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default HealthTips
