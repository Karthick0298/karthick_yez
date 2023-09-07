import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {CardActions, CardContent, Button, Typography, Card} from '@material-ui/core'
import {flashLink, flashRegister} from '../../../lib/Utils/linkWindow'

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.lyfngo.backgroundImage,
		boxShadow: '0px 3px 19px #0000000D',
		borderRadius: '16px',
		opacity: 1,
		display: 'flex',
		justifyContent: 'space-around',
		padding: '12px',
		[theme.breakpoints.down('sm')]: {
			marginInline: '10px',
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			marginInline: '50px',
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			marginInline: '100px',
			flexDirection: 'row',
		},
	},
	media: {
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'center',
		},

		'& .MuiButton-root': {
			color: '#0062DD',
			background: 'transparent linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
			boxShadow: '0px 6px 18px #0000001A',
			borderRadius: '6px',
			paddingInline: 22,
			opacity: 1,
			fontFamily: 'Poppins',
			textTransform: 'none',
			transition: 'all .2s ease-in-out',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},

			'&:hover': {
				transform: 'scale(1.06)',
				background: 'transparent linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
			},
		},
	},
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,

		[theme.breakpoints.up('sm')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '70%',
		},

		'& .MuiTypography-h2': {
			letterSpacing: '1px',
			fontWeight: 500,
			color: '#FFF',
			fontFamily: 'Poppins',
			[theme.breakpoints.up('xs')]: {
				fontSize: '16px',
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: '20px',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '24px',
			},
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: 'Poppins',
			textAlign: 'left',
			fontSize: 16,
			color: '#FFF',
			letterSpacing: 0.6,
			'& span': {
				fontSize: 18,
				fontWeight: 500,
			},
		},
	},
}))

export default function FreeTrailCard() {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardContent className={classes.contentWrapper}>
				<Typography gutterBottom variant='h2'>
					Start your 14-day trial period at no cost.
				</Typography>
				<Typography variant='subtitle1'>
					We offer a 14-day agreement free trial period to explore the software. Getting started only takes a few moments, and we assure you of our
					support at every step.
					<br /> <span>Try LYFnGO now.</span>
				</Typography>
			</CardContent>
			<CardActions className={classes.media}>
				<Button onClick={flashRegister}>Start free trial</Button>
			</CardActions>
		</Card>
	)
}
