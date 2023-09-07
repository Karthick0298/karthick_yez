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
		marginRight: 'auto',
	},
	root: {
		maxWidth: 606,
		backgroundImage: theme.palette.yoga.backgroundImage,
		borderRadius: theme.shape.cardBorderRadius,
		boxShadow: 'none',
		backgroundColor: 'transparent',
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
			color: theme.palette.yoga.main,
		},
	},
}))

export default function Index() {
	const classes = useStyles()
	return (
		<div className={classes.cardPos}>
			<Card className={classes.root}>
				<CardContent>
					<Typography variant='h1'>Mind</Typography>
					<ReadMore>
						<Typography variant='h4'>
							For the body mind and soul. We have the best masters for the best experience in yoga and therapies who will help you reconstruct your
							body and mind.
						</Typography>
					</ReadMore>
					<CardActions className={classes.buttonColor}>
						<Link href='/mind'>
							<ConsultButton>Explore</ConsultButton>
						</Link>
					</CardActions>
				</CardContent>
			</Card>
		</div>
	)
}
