import React, {useState, useEffect} from 'react'
import {makeStyles, Typography, DialogTitle, IconButton} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import GradientButton from '../GradientButton'
import FileCopyIcon from '@material-ui/icons/FileCopy'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiDialogTitle-root': {
			'& .MuiTypography-h5': {
				fontWeight: 600,
			},
		},
		'& .MuiDialog-paperScrollPaper': {
			maxHeight: 'calc(100% - 164px)',
			borderRadius: 16,
		},
		'& .MuiDialogActions-root': {
			padding: '8px 24px',
			display: 'flex',
			justifyContent: 'space-around',
			'& .MuiSvgIcon-root': {
				cursor: 'pointer',
				color: '#858585',
			},
		},
		'& .MuiDialog-paperWidthSm': {
			padding: 18,
			maxWidth: 469,
		},
		'& .MuiDialogContent-root': {
			display: 'flex',
			'& .MuiTypography-h5': {
				fontWeight: 600,
			},
		},
	},
	downloadSection: {
		display: 'flex',
		justifyContent: 'end',
		'& .MuiButton-label': {
			fontSize: 14,
		},
		'& .MuiButton-root': {
			position: 'absolute',
			minWidth: 78,
			textTransform: 'capitalize',
			borderRadius: 26,
			padding: '8px 32px',
			[theme.breakpoints.down('sm')]: {
				padding: '4px 10px',
			},
		},
		[theme.breakpoints.down('sm')]: {
			gap: 16,
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	inputBase: {
		borderRadius: 18,
		width: 385,
		height: 40,
		boxShadow: 'none',
		'& .MuiTypography-colorTextSecondary': {
			// color: '#481CA9',
			fontSize: 15,
		},
	},
	inputField: {
		fontSize: 14,
		fontWeight: 600,
		marginTop: 2,
		// color: '#481CA9',
	},
	BasicBackgroundbtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	careBackgroundbtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	fitnessBackgroundbtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
	mindBackgroundbtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
	sportsBackgroundbtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
	spaBackgroundbtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

const LinkModal = ({open, handleClose, setOpenModal}) => {
	const classes = useStyles()
	const [backgroundImage, setBackgroundImage] = useState('https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png')
	const [textColor, setTextColor] = useState('#7047EA')
	const [btnColor, setBtnColor] = useState(classes.BasicBackgroundbtn)
	const currentPath = typeof window !== 'undefined' ? window.location.pathname : null
	const shareLink = typeof window !== 'undefined' ? window.location.href : null
	const pathName = currentPath && currentPath?.split('/')?.pop()
	const [copySuccess, setCopySuccess] = useState('')
	const onChange = event => {
		// console.log(event.target.value)
	}

	const copyToClipBoard = async copyMe => {
		try {
			await navigator.clipboard.writeText(copyMe)
			setCopySuccess('Copied!')
		} catch (err) {
			setCopySuccess('Failed to copy!')
		}
	}
	useEffect(() => {
		if (pathName === '') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png')
			setTextColor('#7047EA')
			setBtnColor(classes.BasicBackgroundbtn)
		} else if (pathName === 'care') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/care-bg.svg')
			setTextColor('#7047EA')
			setBtnColor(classes.careBackgroundbtn)
		} else if (pathName === 'fitness') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/fitness-bg.svg')
			setTextColor('#39B8FB')
			setBtnColor(classes.fitnessBackgroundbtn)
		} else if (pathName === 'mind') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/mind-bg.svg')
			setTextColor('#0CC593')
			setBtnColor(classes.mindBackgroundbtn)
		} else if (pathName === 'sports') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/sports-bg.svg')
			setTextColor('#F0662E')
			setBtnColor(classes.sportsBackgroundbtn)
		} else if (pathName === 'spawellness') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/spaWellness-bg.svg')
			setTextColor('#E1087E')
			setBtnColor(classes.spaBackgroundbtn)
		} else {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png')
			setTextColor('#7047EA')
			setBtnColor(classes.BasicBackgroundbtn)
		}
	}, [pathName])
	return (
		<Dialog open={open} onClose={handleClose} className={classes.root}>
			<DialogTitle>
				<Typography variant='h5'>Send install link to,</Typography>
			</DialogTitle>
			<DialogContent>
				<Typography variant='h6'>Send via SMS or visit private URL on the mobile device to install this app directly on the device</Typography>
			</DialogContent>
			<DialogContent>
				<div className={classes.downloadSection}>
					<Paper className={classes.inputBase} style={{border: `1px solid ${textColor}`}}>
						<InputBase
							className={classes.input}
							placeholder='Enter the mobile number'
							startAdornment={<InputAdornment position='start'>+91</InputAdornment>}
							inputProps={{
								'aria-label': 'mobile no.',
								className: classes.inputField,
								pattern: '[0-9]*',
								style: {color: textColor},
							}}
							onChange={onChange}
						/>
					</Paper>
					<GradientButton findMorebtn={btnColor}>Send</GradientButton>
				</div>
			</DialogContent>
			<Typography variant='h6' style={{paddingBlock: 8, textAlign: 'center'}}>
				or
			</Typography>
			<DialogContent>
				<Typography variant='h5'>Share Link,</Typography>
			</DialogContent>
			<DialogActions>
				<Typography variant='h6'>{shareLink}</Typography>
				<IconButton onClick={() => copyToClipBoard(shareLink)}>
					<FileCopyIcon />
				</IconButton>
			</DialogActions>
			<div style={{textAlign: 'center'}}>{copySuccess}</div>
		</Dialog>
	)
}

export default LinkModal
