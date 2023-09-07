import {makeStyles, Typography, List, ListItemIcon} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import InputAdornment from '@material-ui/core/InputAdornment'
import Image from 'next/image'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Button from '../GradientButton'
import data from '../../model/ConsultaionService/data'

const useStyles = makeStyles(theme => ({
	root: {
		// minWidth: '97.5vw',
		background: 'transparent linear-gradient(180deg, #FFFFFFCC 0%, #FFFFFF30 100%) 0% 0% no-repeat padding-box',
		display: 'flex',
		paddingInline: 100,
		paddingBlock: 48,
		marginBlock: 38,

		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
			paddingBlock: 24,
			flexDirection: 'column',
			alignItems: 'center',
			gap: 28,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
		},
		[theme.breakpoints.up('lg')]: {
			paddingInline: 100,
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
			fontSize: 36,
			fontWeight: 300,
			'& span': {
				fontWeight: 600,
			},

			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
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

	listItem: {
		maxWidth: 500,
		display: 'flex',
		gap: 12,
		paddingBlock: 4,

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 2,
			gap: 8,
		},

		'& .MuiSvgIcon-root': {
			fontSize: 16,
			marginTop: 6,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
				marginTop: 4.5,
			},
		},

		'& .MuiTypography-h6': {
			color: theme.palette.paragraph.main,
			fontSize: 17,
			fontFamily: 'Source Sans Pro',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},

	inputBase: {
		borderRadius: 18,
		width: 276,
		height: 40,
		boxShadow: 'none',
		'& .MuiTypography-colorTextSecondary': {
			fontSize: 15,
		},
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	inputField: {
		fontSize: 16,
		fontWeight: 500,
		marginTop: 2,
		letterSpacing: 0.5,
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

		'& .MuiTypography-h5': {
			color: '#FFFFFF',
			fontSize: 16,
			fontWeight: 300,
			'& span': {
				fontWeight: 600,
			},

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
}))

export default function DownloadAidivaApp({textColor, buttonColor, inputBaseColor, imgAddress}) {
	const classes = useStyles()
	const onChange = event => {
		// console.log(event.target.value)
	}
	return (
		<>
			<div className={classes.root}>
				<div className={classes.left}>
					<div className={classes.download}>
						<Typography variant='h2' style={{color: textColor}}>
							Download the <span>LFYnGO app</span>
						</Typography>
					</div>
					<div className={classes.content}>
						<Typography variant='body1'>24/7 Online Video Consultation</Typography>
						{data.map(service => (
							<div key={service.id} className={classes.listItem}>
								<CheckCircleIcon style={{color: textColor}} />
								<Typography variant='h6'>{service.title}</Typography>
							</div>
						))}
					</div>
					<div className={classes.downloadSection}>
						<Paper
							className={`${classes.inputBase} ${inputBaseColor}`}
							style={{
								border: `1px solid ${textColor}`,
							}}>
							<InputBase
								className={classes.input}
								style={{color: `${textColor}`}}
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
						<Button findMorebtn={buttonColor}>
							<Typography variant='h5'>Send app link</Typography>
						</Button>
					</div>
				</div>
				<div className={classes.right}>
					{/* <Image alt='download' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/downloadSports.png' width={541} height={319} /> */}
					<Image
						alt='download'
						src={imgAddress || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/download.png'}
						width={541}
						height={319}
					/>
				</div>
			</div>
		</>
	)
}
