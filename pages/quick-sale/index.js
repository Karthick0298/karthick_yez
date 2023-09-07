import React from 'react'
import Head from 'next/head'
import QuickSale from '../../src/sections/Landingpage/QuickSale'

const index = () => {
	const meta = {
		title: 'Quick Sale - LYFnGO exhibits a one-stop sale point for all the products, services, and memberships',
		description: `Quick sale of service, products and membership of your practice. Customers can make a purchase instantly.`,
	}

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/QuickSale.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/dashboards-and-reports' />
			</Head>
			<QuickSale />
		</>
	)
}

export default index
