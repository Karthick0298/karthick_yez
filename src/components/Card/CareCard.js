import {useState, useEffect, useCallback} from 'react'
import {Typography, Card, CardContent, CardActions} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import ConsultButton from '../Button'
import ReadMore from '../ReadMore'
import Link from 'next/link'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	cardPos: {
		display: 'flex',
		position: 'absolute',
		transform: 'translateY(-50%)',
		right: 0,
		bottom: 0,
		justifyContent: 'flex-end',
		zIndex: 1,
		marginRight: 'auto',
		marginLeft: 'auto',
		[theme.breakpoints.down('sm')]: {
			transform: 'translateY(-80%)',
		},
	},
	root: {
		maxWidth: '606px',
		boxShadow: 'none',
		backgroundImage: theme.palette.care.backgroundImage,
		borderRadius: theme.shape.cardBorderRadius,
		'& .MuiTypography-h1': {
			color: theme.palette.care.contrastText,
			lineHeight: 1.5,
		},
		'& .MuiTypography-h4': {
			color: theme.palette.care.contrastText,
			letterSpacing: 1.1,
		},
		'& .MuiCardActions-root': {
			paddingTop: 26,
			padding: 0,
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '262px',
			'& .MuiTypography-h1': {
				fontSize: 30,
			},
			'& .MuiTypography-h4': {
				fontSize: 14,
			},
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '400px',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '606px',
		},
	},
	buttonColor: {
		'& .MuiButton-label': {
			color: theme.palette.care.main,
		},
	},
}))

export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.cardPos}>
			<Card className={classes.root}>
				<CardContent>
					<Typography variant='h1'>Care</Typography>
					<ReadMore>
						<Typography variant='h4'>
							Need Specialist advice, Consult trusted and professional doctors. Get all your questions answered online. Now book hassle free online
							consultation
						</Typography>
					</ReadMore>
					<CardActions className={classes.buttonColor}>
						<Link href='/care'>
							<ConsultButton>Explore</ConsultButton>
						</Link>
					</CardActions>
				</CardContent>
			</Card>
		</div>
	)
}
