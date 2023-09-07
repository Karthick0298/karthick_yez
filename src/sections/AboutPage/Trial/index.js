import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import {flashLink, flashRegister} from '../../../../lib/Utils/linkWindow'

const useStyles = makeStyles(theme => ({
	trialContainer: {
		display: 'flex',
		justifyContent: 'center',
		paddingBlock: 32,
		[theme.breakpoints.up('xs')]: {
			paddingInline: 16,
		},
	},
	trial: {
		background: 'transparent linear-gradient(90deg, #D91E15 0%, #D80D04 100%) 0% 0% no-repeat padding-box',
		borderRadius: 16,
		maxWidth: 1020,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',

		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			padding: 22,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			padding: 38,
		},
	},
	trialLeft: {
		'& .MuiTypography-h3': {
			fontWeight: 500,
			color: '#FFFFFF',
			[theme.breakpoints.up('xs')]: {
				fontSize: 22,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 24,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 28,
			},
		},
		'& .MuiTypography-subtitle1': {
			paddingBlockStart: 12,
			color: '#FFFFFF',
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 18,
			},
		},
	},
	trialRight: {
		'& .MuiButtonBase-root': {
			background: '#FFFFFF',
			textTransform: 'none',
			color: '#D91E15',
			fontSize: 17,
			paddingInline: 34,
			marginBlockStart: 18,
			transition: 'all 0.2s',
			letterSpacing: 0.75,
			'&:hover': {
				transform: 'scale(1.06)',
			},
		},
	},
}))

function index() {
	const classes = useStyles()

	return (
		<div className={classes.trialContainer}>
			<div className={classes.trial}>
				<div className={classes.trialLeft}>
					<Typography variant='h3'>Try LYFnGO for a 7-day free trial.</Typography>
					<Typography variant='subtitle1'>
						Create an account in minutes. No credit or debit card details are required and there are no contracts, commitments, or setup or signup
						fees. Simply sign-up and explore our software. It's completely free for 7 days.
					</Typography>
				</div>
				<div className={classes.trialRight}>
					<Button variant='contained' onClick={flashRegister}>
						Start free trail
					</Button>
				</div>
			</div>
		</div>
	)
}

export default index
