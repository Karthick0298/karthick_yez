import React from 'react'
import Head from 'next/head'
import meta from '../../src/model/seo/pricing/data'
import Pricing from '../../src/sections/Landingpage/Pricing/index'
import Footer from '../../src/components/LandingFooter/index'

function Price() {
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/lyfngo1200.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/pricing' />
			</Head>
			<Pricing />
		</div>
	)
}

export default Price
