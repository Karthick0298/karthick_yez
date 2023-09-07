import {makeStyles, Typography, List, ListItemIcon} from '@material-ui/core'
import Image from 'next/image'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
	mainPosition: {
		display: 'flex',
		marginBlock: 72,
		paddingInlineStart: -4,
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
			fontSize: 18,
			paddingBlock: 16,
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
export default function ChooseFitness() {
	const classes = useStyles()
	return (
		<div className={classes.mainPosition}>
			<div className={classes.leftSidePosition}>
				<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/choosetrainee.png' alt='doctor' width={750} height={500} layout='responsive' objectFit='cover' />
			</div>
			<div className={classes.rightSidePosition}>
				<Typography variant='h2'>Are You a trainer</Typography>
				<Typography variant='h1' className={classes.chooseAdivaa}>
					Choose LFYnGO
				</Typography>
				<Typography variant='body1'>There are many variations of passages of Lorem Ipsum available, some form, by injected humour.</Typography>
				<List>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						24000+ Online Course
					</Typography>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Expert Instruction
					</Typography>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Unlimited Access
					</Typography>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Comfortable Prices
					</Typography>
					<Typography>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Free 2 Month Trail
					</Typography>
					<Typography>
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
