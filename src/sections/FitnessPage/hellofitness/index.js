import {makeStyles, Typography, List, ListItemIcon, Button} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	mainPosition: {
		display: 'flex',
		marginInline: 100,
		marginBlock: 75,
		gap: 0,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 20,
		},
	},
	leftSidePosition: {
		flex: 1,
		paddingInlineStart: 40,
		'& .MuiTypography-h2': {
			color: theme.palette.care.main,
			paddingBlockEnd: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
			},
		},
		'& .MuiTypography-body1': {
			display: 'flex',
			alignItems: 'center',
			color: theme.palette.paragraph.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h5.fontSize,
			},
		},
		'& .MuiListItemIcon-root': {
			minWidth: 24,
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.care.contrastText,
			fontSize: 15,
			background: theme.palette.care.main,
			borderRadius: '100%',
		},
	},
	googleiconcss: {
		display: 'flex',
		paddingTop: 16,
		'& .MuiButton-text': {
			paddingInlineStart: 0,
			paddingInlineEnd: 16,
		},
	},
	rightSidePosition: {
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			order: -1,
		},
	},
}))
export default function FitnessOnlineConsult() {
	const classes = useStyles()
	return (
		<div className={classes.mainPosition}>
			<div className={classes.leftSidePosition}>
				<Typography variant='h2'>Hello Fitness!</Typography>
				<Typography variant='body1'>Introducing a revolutionary app that rewards you to stay fit</Typography>
				<List>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Introducing a revolutionary app that rewards you to stay fit.
					</Typography>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Everything about health management in one platform.
					</Typography>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Speak to doctors securely in LFYnGO app.
					</Typography>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Ask queries or concern related to your health.
					</Typography>
				</List>
				<Typography>Download the App Now</Typography>
				<div className={classes.googleiconcss}>
					<Button>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/playstore.png' alt='playstore' width={128} height={38} />
					</Button>
					<Button>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/appstore.png' alt='appstore' width={128} height={38} />
					</Button>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/scannercode.svg' alt='scannercode' width={50} height={38} />
				</div>
			</div>
			<div className={classes.rightSidePosition}>
				<Image
					src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/fitnessonlineconsult.png'
					alt='onlineconsult'
					width={521}
					height={344}
					layout='responsive'
				/>
			</div>
		</div>
	)
}
