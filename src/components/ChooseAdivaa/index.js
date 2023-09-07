import {makeStyles, Typography, List, ListItemIcon} from '@material-ui/core'
import Image from 'next/image'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
	mainPosition: {
		display: 'flex',
		marginBlock: 72,
		gap: 24,
		background: 'transparent linear-gradient(180deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',

		opacity: 1,
		backdropFilter: 'blur(4px)',

		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
			marginBlock: 10,
		},
		[theme.breakpoints.up('sm')]: {
			marginInline: 0,
			marginBlock: 42,
		},
	},
	leftSidePosition: {
		flex: 2,

		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},

	rightSidePosition: {
		flex: 2,
		marginInline: 60,
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		[theme.breakpoints.down('md')]: {
			marginInline: 94,
			marginBlock: 12,
		},
		'& .MuiTypography-h2': {
			color: theme.palette.care.main,
			fontSize: 66,
			[theme.breakpoints.down('xs')]: {
				fontSize: 30,
			},
			[theme.breakpoints.down('md')]: {
				fontSize: 38,
			},
		},
		'& .MuiTypography-h1': {
			color: theme.palette.care.main,
			fontSize: 30,
			fontWeight: 600,
			[theme.breakpoints.down('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.down('md')]: {
				fontSize: 18,
			},
		},
		'& .MuiTypography-h5': {
			display: 'flex',
			alignItems: 'center',
			marginInlineEnd: 124,
			fontSize: 22,
			fontWeight: '400',
			fontFamily: 'Source Sans Pro',
			color: theme.palette.paragraph.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h5.fontSize,
				marginInline: 10,
			},
		},
		'& .MuiTypography-h6': {
			display: 'flex',
			alignItems: 'center',
			fontSize: 20,
			fontFamily: 'Source Sans Pro',
			padding: 2,
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
		[theme.breakpoints.down('xs')]: {
			order: 1,
			marginInline: 0,
			alignItems: 'center',
			textAlign: 'center',
			paddingBlock: 12,
		},
	},
	chooseAdivaa: {
		fontWeight: 400,
	},
}))
export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.mainPosition}>
			<div className={classes.leftSidePosition}>
				<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/doctor.png' alt='doctor' width={974} height={795} layout='responsive' objectFit='cover' />
			</div>
			<div className={classes.rightSidePosition}>
				<Typography variant='h1'>Are You A Doctor</Typography>
				<Typography variant='h2' className={classes.chooseAdivaa}>
					Choose LFYnGO
				</Typography>
				<Typography variant='h5'>There are many variations of passages of Lorem Ipsum available, some form, by injected humour.</Typography>
				<List>
					<Typography variant='h6'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						24000+ Online Course
					</Typography>
					<Typography variant='h6'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Expert Instruction
					</Typography>
					<Typography variant='h6'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Unlimited Access
					</Typography>
					<Typography variant='h6'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Comfortable Prices
					</Typography>
					<Typography variant='h6'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Free 2 Month Trail
					</Typography>
					<Typography variant='h6'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Review System
					</Typography>
				</List>
			</div>
		</div>
	)
}
