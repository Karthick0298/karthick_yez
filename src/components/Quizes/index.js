import {makeStyles, Typography} from '@material-ui/core'
import Button from '../../components/GradientButton'
import QuizesText from '../../model/QuizesCardDetails/data'
import Image from 'next/image'
const useStyles = makeStyles(theme => ({
	PositionMainroot: {
		paddingInline: 100,
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/BackgroundCare.jpg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: '100% 100%',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	Positionroot: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
			paddingInline: 16,
			paddingBlock: 24,
		},
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
		},
	},
	leftSidePosition: {
		flex: 3,
		display: 'flex',
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 18,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},
	rightSidePosition: {
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			order: -1,
		},
	},

	QuizesCardRight: {
		backdropFilter: 'blur(6px)',
		width: '75%',
		overflowX: 'hidden',
		overflowY: 'hidden',
		transition: 'width 0.1s',
		borderRadius: 12,
		// "&:hover": {
		//   width: "100%",
		// },
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	QuizesCardMaincard: {
		background: 'transparent linear-gradient( #F0F0F032 0%, #FAFAFA 0%) 0% 0% no-repeat padding-box',
		padding: 12,
		borderRadius: 12,
	},
	QuizesCardSubcard: {
		display: 'flex',
		borderRadius: 20,
		background: 'transparent linear-gradient(289deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box;',
		backdropFilter: 'blur(30px)',
		boxShadow: '0px 10px 34px #7C9CAE80',
	},
	QuizesCardPosition: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h2': {
			color: '#475677',
			fontSize: 16,
		},
	},
	BmishoesPosition: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	QuizesCardMainRightcard: {
		display: 'flex',
	},
	QuizesCardSubRightcard: {
		display: 'flex',
		flexDirection: 'column',

		'& .MuiTypography-h2': {
			fontSize: 16,
		},
	},
	numberMainPosition: {
		display: 'flex',
		gap: 18,
		borderRadius: 20,
		position: 'relative',
		right: 142,
		margin: 46,
		'&:hover': {
			right: 0,
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			gap: 10,
			right: 106,
		},
		[theme.breakpoints.up('md')]: {
			gap: 10,
			right: 132,
		},
		[theme.breakpoints.up('lg')]: {
			gap: 10,
			right: 180,
		},
	},
	textMainPosition: {
		color: '#ffff',
		boxShadow: '0px 3px 6px #0000001a',
		borderRadius: 15,
		display: 'flex',
		alignItems: 'center',
		padding: 20,
		height: 30,
		'& .MuiTypography-h5': {
			color: '#ffff',
			fontSize: 18,
			fontWeight: 500,
		},
	},

	cardtextowner: {
		borderRadius: 10,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		textAlign: 'center',
		borderRadius: 20,
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		paddingInline: 5,
		paddingBlock: 7,
		transform: 'translate(-44px,-15px)',

		'& .MuiTypography-h5': {
			fontWeight: 500,
		},
	},
	QuizesleftSubPosition: {
		position: 'relative',
		transform: 'translate(15px,-45px)',
	},
	backgroundColor: {
		display: 'flex',
		borderRadius: 12,
		padding: 22,
		gap: 12,
	},
}))

export default function Quizes() {
	const classes = useStyles()
	return (
		<div className={classes.PositionMainroot}>
			<div className={classes.doctorPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2'>Quizes</Typography>
				</div>
				<div className={classes.rightPosition}>
					<Button>All Quizes</Button>
				</div>
			</div>
			{QuizesText.map(({id, name, job, src, heading, text, color, bgcolor, colorjob, shadow}) => (
				<div key={id} className={classes.Positionroot}>
					<div className={classes.QuizesCardRight}>
						<div className={classes.numberMainPosition}>
							<div className={classes.QuizesleftSubPosition}>
								<Image src={src} alt='' width={120} height={120} />

								<div className={classes.cardtextowner} style={{backgroundColor: bgcolor}}>
									<Typography variant='h5' style={{color: color}}>
										{name}
									</Typography>
									<Typography variant='h5' style={{color: colorjob}}>
										{job}
									</Typography>
								</div>
							</div>
							<div className={classes.backgroundColor} style={{background: bgcolor, boxShadow: shadow}}>
								<div className={classes.textMainPosition} style={{background: color}}>
									<Typography variant='h5'>{id}</Typography>
								</div>
								<div className={classes.QuizesCardSubRightcard}>
									<Typography variant='h2' style={{color: color}}>
										{heading}
									</Typography>

									<div className={classes.QuizesCardPosition}>
										<Typography variant='h6'>{text}</Typography>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
