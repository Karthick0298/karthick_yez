import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import {flashLink, flashRegister} from '../../../../../lib/Utils/linkWindow'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		backgroundImage: 'url(/images/landingImage/partnerClient.png)',
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
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		alignItems: 'flex-start',
		[theme.breakpoints.up('xs')]: {
			maxWidth: '90%',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '600px',
			padding: 36,
		},

		'& .MuiTypography-h3': {
			color: '#FFFFFF',
			fontWeight: 500,
			lineHeight: '40px',
			letterSpacing: '2px',
			[theme.breakpoints.up('xs')]: {
				fontSize: 26,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
			},
		},
		'& .MuiTypography-h4': {
			color: '#FFFFFF',
			fontWeight: 500,
			lineHeight: '25px',
			fontSize: 18,
			fontStyle: 'normal',

			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h5': {
			color: '#FFFFFF',
			lineHeight: '25px',
			letterSpacing: '2.18px',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiButtonBase-root': {
background: theme.palette.lyfngo.backgroundImage,			textTransform: 'none',
			color: '#FFFFFF',
			paddingInline: 30,
			transition: 'all 0.2s',
			letterSpacing: 0.75,
			'&:hover': {
				transform: 'scale(1.06)',
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
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
				<Typography variant='h4'>PARTNER WITH US</Typography>
				<Typography variant='h3'>Together, we can shape The Digital World</Typography>
				<Typography variant='h5'>
					Let’s jointly move your business forward by leading innovation, co-creating customer-centric solutions, and capturing new markets.
				</Typography>
				<Button onClick={flashRegister} variant='contained'>
					Apply Now
				</Button>
			</div>
		</div>
	)
}
