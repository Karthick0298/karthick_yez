import {makeStyles, Typography, List, ListItemIcon, Button} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	mainPosition: {
		display: 'flex',
		marginInline: 124,
		marginBlock: 50,
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
			marginBlock: 18,
		},
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			marginInline: 10,
			marginBlock: 28,
		},
	},
	leftSidePosition: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		'& .MuiTypography-h2': {
			color: theme.palette.care.main,
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
		'& .MuiTypography-h5': {
			color: '#596784',
			fontSize: 22,
		},
		'& .MuiTypography-h6': {
			color: '#596784',
			fontSize: 18,
			paddingBlock: 2,
			fontFamily: 'Source Sans Pro',
		},
	},
	googleiconcss: {
		display: 'flex',
		paddingTop: 16,
	},
	rightSidePosition: {
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			order: -1,
		},
	},
	backColor: {
		maxWidth: 1320,
		margin: '0 auto',
		background: 'transparent linear-gradient(180deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		paddingBlock: 12,
	},
}))
export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.backColor}>
			<div className={classes.mainPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2'>Hello Doctor</Typography>
					<Typography variant='h5'>24/7 Online Video Consultation</Typography>
					<List>
						<Typography variant='h6'>
							<ListItemIcon>
								<DoneIcon />
							</ListItemIcon>
							LFYnGO care trusted by top specialists.
						</Typography>
						<Typography variant='h6'>
							<ListItemIcon>
								<DoneIcon />
							</ListItemIcon>
							Everything about health management in one platform.
						</Typography>
						<Typography variant='h6'>
							<ListItemIcon>
								<DoneIcon />
							</ListItemIcon>
							Speak to doctors securely in LFYnGO app.
						</Typography>
						<Typography variant='h6'>
							<ListItemIcon>
								<DoneIcon />
							</ListItemIcon>
							Ask queries or concern related to your health.
						</Typography>
					</List>
					<Typography variant='h5'>Download the App Now</Typography>
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
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/onlineconsult.png' alt='onlineconsult' width={513} height={310} layout='responsive' />
				</div>
			</div>
		</div>
	)
}
