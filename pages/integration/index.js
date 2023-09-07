import React from 'react'
import Head from 'next/head'
import Integration from '../../src/sections/Landingpage/Integration'

const index = () => {
	const meta = {
		title: 'Integration - LYFnGO has incorporated all payment methods in Integration',
		description: `Utilize them to make a trouble-free payment, and manage all your accounting details etc.`,
	}
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/Integration.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/dashboards-and-reports' />
			</Head>
			<Integration />
		</>
	)
}

export default index
