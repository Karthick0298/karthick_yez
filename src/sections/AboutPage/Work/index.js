import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	root: {
		// border: '1px solid crimson',
		position: 'relative',
		backgroundImage: 'url(https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/aboutBlockBgTwo.png)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		overflow: 'auto',
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			minHeight: '50vh',
		},
		[theme.breakpoints.up('sm')]: {
			minHeight: '70vh',
		},
		[theme.breakpoints.up('md')]: {
			minHeight: '90vh',
		},
	},
	gradient: {
		position: 'absolute',
		background: 'linear-gradient(90deg, rgba(0,0,0,0.35898109243697474) 0%, rgba(0,0,0,0.3561799719887955) 100%)',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		zIndex: 1,
	},
	content: {
		zIndex: 2,
		textAlign: 'center',

		[theme.breakpoints.up('xs')]: {
			maxWidth: '75%',
			paddingBlockStart: '5%',
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
			background: theme.palette.lyfngo.backgroundImage,
			textTransform: 'none',
			color: '#FFFFFF',
			paddingInline: 30,
			transition: 'all 0.2s',
			letterSpacing: 0.75,
			fontFamily: 'Poppins',

			'&:hover': {
				transform: 'scale(1.06)',
			},

			[theme.breakpoints.up('xs')]: {
				marginBlockStart: 12,
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				marginBlockStart: 30,
				fontSize: 16,
			},
		},
	},
}))

export default function Work() {
	const classes = useStyles()
	const router = useRouter()

	return (
		<div className={classes.root}>
			<div className={classes.gradient}></div>
			<div className={classes.content}>
				<Typography variant='h3'>{'Want to help us build the future of beauty, wellness & fitness?'}</Typography>
				<Button
					variant='contained'
					onClick={() => {
						router.push(`/careers`)
					}}>
					Work at LYFnGO
				</Button>
			</div>
		</div>
	)
}
