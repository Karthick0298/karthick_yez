import {makeStyles, Typography, List, ListItemIcon} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import InputAdornment from '@material-ui/core/InputAdornment'
import Image from 'next/image'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Button from '../GradientButton'
import data from '../../model/ConsultaionService/data'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		paddingInline: 124,
		paddingBlock: 75,
		[theme.breakpoints.down('sm')]: {
			paddingInline: 16,
			paddingBlock: 24,
			flexDirection: 'column',
			alignItems: 'center',
			gap: 28,
		},
	},
	left: {
		flex: 6,
	},
	right: {
		display: 'flex',
		alignItems: 'center',
		flex: 6,
		[theme.breakpoints.down('sm')]: {
			order: -1,
		},
	},
	download: {
		display: 'flex',
		gap: 12,
		whiteSpace: 'nowrap',
		[theme.breakpoints.down('sm')]: {
			gap: 6,
		},
		'& .MuiTypography-h2': {
			color: '#481CA9',
			[theme.breakpoints.down('sm')]: {
				fontSize: 20,
			},
		},
	},
	content: {
		paddingBlock: 12,
		'& .MuiTypography-body1': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h5.fontSize,
			},
		},
	},
	list: {
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
			color: theme.palette.paragraph.main,
			fontSize: 15,
		},
	},
	inputBase: {
		borderRadius: 18,
		width: 276,
		height: 40,
		boxShadow: 'none',
		border: '1px solid #481CA999',
		'& .MuiTypography-colorTextSecondary': {
			color: '#481CA9',
			fontSize: 15,
		},
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	inputField: {
		fontSize: 14,
		color: '#481CA9',
		fontWeight: 600,
		marginTop: 2,
	},
	downloadSection: {
		display: 'flex',
		gap: 24,
		'& .MuiButton-label': {
			fontSize: 14,
		},
		[theme.breakpoints.down('sm')]: {
			gap: 16,
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function Home(props) {
	const classes = useStyles()
	const onChange = event => {
		// console.log(event.target.value)
	}
	return (
		<>
			<div className={classes.root}>
				<div className={classes.left}>
					<div className={classes.download}>
						<Typography variant='h2' style={{fontWeight: '100'}}>
							Download the
						</Typography>
						<Typography variant='h2'>LFYnGO app</Typography>
					</div>
					<div className={classes.content}>
						<Typography variant='body1'>24/7 Online Video Consultation</Typography>
						<List className={classes.list}>
							{data.map(service => (
								<Typography key={service.id}>
									<ListItemIcon>
										<DoneIcon />
									</ListItemIcon>
									{service.title}
								</Typography>
							))}
						</List>
					</div>
					<div className={classes.downloadSection}>
						<Paper className={classes.inputBase}>
							<InputBase
								className={classes.input}
								placeholder='Enter the mobile number'
								startAdornment={<InputAdornment position='start'>+91</InputAdornment>}
								inputProps={{
									'aria-label': 'mobile no.',
									className: classes.inputField,
									pattern: '[0-9]*',
								}}
								onChange={onChange}
							/>
						</Paper>
						<Button findMorebtn={classes.findMorebtn}>Send app link</Button>
					</div>
				</div>
				<div className={classes.right}>
					<Image alt='download' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/download.png' width={541} height={319} />
				</div>
			</div>
		</>
	)
}
