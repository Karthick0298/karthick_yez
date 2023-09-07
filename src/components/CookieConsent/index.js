import React, {useEffect, useState} from 'react'
import {setCookie, hasCookie} from 'cookies-next'
import {makeStyles, Button, Typography, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	container: {
		position: 'fixed',
		bottom: 6,
		zIndex: 999,
		width: '90%',
		right: 4,
		padding: 12,
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgb(226 232 240)',
		justifyContent: 'space-between',
		boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	heading: {
		width: 'calc(100% - 272px)',
		'& .MuiTypography-h5': {
			color: '#000',
			fontSize: 16,
			fontFamily: theme.typography.h6.fontFamily,
			// textAlign: 'center',
			// overflow: 'hidden',
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
		},
	},
	wrapper: {
		// width: 500,
		// padding: '0px 50px 0px 0px',
	},
	saveBtn: {
		padding: 8,
		borderRadius: 6,
		backgroundColor: 'rgb(0 0 0 / 12%)',
		textTransform: 'capitalize',
		boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
		'&:hover': {
			backgroundColor: 'rgb(0 0 0 / 13%)',
		},
	},
	denyBtn: {
		padding: 8,
		borderRadius: 6,
		backgroundColor: 'rgb(0 0 0 / 12%)',
		marginRight: 24,
		textTransform: 'capitalize',
		boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
		'&:hover': {
			backgroundColor: 'rgb(0 0 0 / 13%)',
		},
	},
}))

function Consent() {
	const classes = useStyles()
	const [consent, setConsent] = useState(true)
	useEffect(() => {
		setConsent(hasCookie('localConsent'))
	}, [])

	const acceptCookie = () => {
		setConsent(true)
		setCookie('localConsent', 'true', {maxAge: 60 * 60 * 24 * 365})
		gtag('consent', 'update', {
			ad_storage: 'granted',
			analytics_storage: 'granted',
		})
	}
	const closeP = () => {
		setConsent(true)
	}
	const denyCookie = () => {
		setConsent(true)
		setCookie('localConsent', 'false', {maxAge: 60 * 60 * 24 * 365})
	}
	if (consent === true) {
		return null
	}
	return consent ? (
		''
	) : (
		<div className={`${classes.container}`}>
			<div className={classes.heading}>
				<Typography variant='h5'>
					We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and
					analyse website traffic.{' '}
					<span>
						<Link href='https://policies.google.com/technologies/cookies' passHref>
							<a target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
								Learn more
							</a>
						</Link>
					</span>
				</Typography>
			</div>
			<div className={classes.wrapper}>
				<Button onClick={e => denyCookie()} className={classes.denyBtn}>
					Deny All
				</Button>
				<Button
					onClick={() => {
						acceptCookie()
					}}
					className={classes.saveBtn}>
					Accept All
				</Button>
				<IconButton
					onClick={e => {
						closeP()
					}}>
					<CloseIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default Consent
