import React from 'react'
import Head from 'next/head'
import PharmaBilling from '../../src/sections/Landingpage/PharmaBilling'

const index = () => {
	const meta = {
		title: 'Pharma and Billing - LYFnGO’s Pharma for organized stock and billing made easy',
		description: `LYFnGO’s pharma will save you time and energy by keeping a tab on the organized stock and supplies. Billing of customers can be carried out from various pages. `,
	}

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/pharma_billing.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/consultation-and-facility' />
			</Head>
			<PharmaBilling />
		</>
	)
}

export default index
