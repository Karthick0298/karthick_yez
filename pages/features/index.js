import React from 'react'
import Head from 'next/head'
import LandingPageHeader from '../../src/sections/LandingPageHeader'
import meta from '../../src/model/seo/explore/data'
import Footer from '../../src/components/LandingFooter/index'
import ExplorePage from '../../src/sections/ExplorePage'

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
				<link rel='canonical' href='https://lyfngo.com/explore' />
			</Head>
			<LandingPageHeader />
			<ExplorePage />
			<Footer />
		</>
	)
}

export default index
