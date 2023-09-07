import React from 'react'
import Head from 'next/head'
import meta from '../../src/model/seo/partners/data'
import PartnersAndClients from '../../src/sections/Landingpage/PartnersAndClients'
import LandingPageHeader from '../../src/sections/LandingPageHeader'

function index() {
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
			</Head>
			<LandingPageHeader />
			<PartnersAndClients />
		</>
	)
}

export default index
