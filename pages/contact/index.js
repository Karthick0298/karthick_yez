import React from 'react'
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
import Head from 'next/head'
import meta from '../../src/model/seo/contact/data'
import ContactPage from '../../src/sections/contactPage'
import {makeStyles} from '@material-ui/core/styles'
import {Avatar, Button, Link} from '@material-ui/core'
import LandingPageHeader from '../../src/sections/LandingPageHeader'
import Footer from '../../src/components/LandingFooter/index'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		background: '#FFFFFF',
		display: 'flex',
		justifyContent: 'center',
	},
	container: {
		fontFamily: 'Poppins',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '100vw',
			paddingBottom: 30,
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: 1320,
			paddingBottom: 30,
		},
	},
}))

function index() {
	const classes = useStyles()

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/lyfngo1200.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/contact' />
			</Head>
			<LandingPageHeader />
			<div className={classes.root}>
				<div className={classes.container}>
					<ContactPage />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default index
