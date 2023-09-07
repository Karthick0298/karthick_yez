import {makeStyles, Typography, List, ListItemIcon} from '@material-ui/core'
import Image from 'next/image'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
	mainPosition: {
		display: 'flex',
		marginBlock: 72,
		paddingInlineStart: 100,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			marginInline: 10,
			marginBlock: 42,
		},
	},
	leftSidePosition: {
		flex: 2,

		[theme.breakpoints.down('sm')]: {
			flex: 4,
		},
		[theme.breakpoints.up('sm')]: {
			flex: 3,
		},
	},

	rightSidePosition: {
		flex: 2,
		marginInline: 60,
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		'& .MuiTypography-h2': {
			color: theme.palette.care.main,
			fontSize: 20,
			letterSpacing: 1,
			paddingBlockEnd: 16,
		},
		'& .MuiTypography-body1': {
			display: 'flex',
			alignItems: 'center',
			marginTop: 16,
			fontSize: 16,
			color: theme.palette.paragraph.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h5.fontSize,
			},
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.care.contrastText,
			fontSize: 15,
			background: theme.palette.care.main,
			borderRadius: '100%',
		},
		[theme.breakpoints.down('sm')]: {
			order: 1,
			marginInline: 0,
			alignItems: 'center',
		},
	},
	chooseAdivaa: {
		fontWeight: 400,
		fontSize: '2.5rem',
		color: '#7047ea',
	},
}))
export default function ChooseTrainee() {
	const classes = useStyles()
	return (
		<div className={classes.mainPosition}>
			<div className={classes.leftSidePosition}>
				<Image
					src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/specialtrainee.png'
					alt='doctor'
					width={750}
					height={500}
					layout='responsive'
					objectFit='cover'
				/>
			</div>
			<div className={classes.rightSidePosition}>
				<Typography variant='h2'>Getting Back in Shape in Never Easy</Typography>
				<Typography variant='h1' className={classes.chooseAdivaa}>
					Hire Personal Trainer
				</Typography>
				<Typography variant='body1'>
					The 4 Month Courses Are Monitored By Qualified Personnel Of Gold’s Gym, And Also Hosts Guest Lectures By The Biggest Names In The
					International Fitness Industry With Guaranteed Internships And A Firsthand Opportunity To Experience Fitness Training From The World Leaders
					In It.
				</Typography>
			</div>
		</div>
	)
}
