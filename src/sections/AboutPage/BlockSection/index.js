import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import {flashLink, flashRegister} from '../../../../lib/Utils/linkWindow'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		backgroundImage: 'url(https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/aboutCover.png)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		overflow: 'auto',
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'center',
		},
		[theme.breakpoints.up('md')]: {
			justifyContent: 'left',
		},
	},
	gradient: {
		position: 'absolute',
		background: 'linear-gradient(90deg, rgba(0,0,0,0.7959558823529411) 0%, rgba(255,255,255,0) 100%)',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		zIndex: 1,
	},
	content: {
		zIndex: 2,

		[theme.breakpoints.up('xs')]: {
			maxWidth: '90%',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '52%',
			padding: 36,
		},

		'& .MuiTypography-h3': {
			color: '#FFFFFF',
			fontWeight: 500,
			lineHeight: '136%',
			fontFamily: 'Poppins',

			[theme.breakpoints.up('xs')]: {
				fontSize: 28,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 34,
			},
		},
		'& .MuiButtonBase-root': {
			fontFamily: 'Poppins',
			background: theme.palette.lyfngo.backgroundImage,
			textTransform: 'none',
			color: '#FFFFFF',
			paddingInline: 30,
			transition: 'all 0.2s',
			letterSpacing: 0.75,
			'&:hover': {
				transform: 'scale(1.06)',
			},

			[theme.breakpoints.up('xs')]: {
				marginBlockStart: 36,
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				marginBlockStart: 30,
				fontSize: 16,
			},
		},
	},
}))

export default function BlockSection() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.gradient}></div>
			<div className={classes.content}>
				<Typography variant='h3'>We provide affordable, smart, and user-friendly software products that help your business grow.</Typography>
				<Button variant='contained' onClick={flashRegister}>
					Start free trail
				</Button>
			</div>
		</div>
	)
}
