import React from 'react'
import Head from 'next/head'
import {makeStyles} from '@material-ui/core'
import Consult from '../../src/sections/CareConsultChatAreaPage'
import Header from '../../src/components/Header'
import HomeLayout from '../../src/components/HomeLayout'
import {useRouter} from 'next/router'
import SideNavbar from '../../src/components/SideNavbar'

const useStyles = makeStyles(theme => ({
	root: {
		scrollBehavior: 'smooth',
	},
}))

export default function Consultation() {
	const classes = useStyles()
	const router = useRouter()
	const navigationQuery = router.query.navigationQuery

	return (
		<>
			<Head>
				<title>Health & Wellness App lets you access your records and book appointments via web and mobile</title>
				<meta name='LYFnGO' content='Online consultation' />
				<meta property='og:title' content='Online consultation' />
				{/* <meta name='robots' content='noindex,nofollow' /> */}
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
			</Head>
			<section style={{position: 'relative'}}>
				<Header />
				<div className={classes.root}>
					{/* <SideNavbar navigationQuery={navigationQuery} /> */}
					<Consult />
				</div>
			</section>
		</>
	)
}
