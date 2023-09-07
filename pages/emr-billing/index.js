import React from 'react'
import Head from 'next/head'
import meta from '../../src/model/seo/emrBilling/data'
import EmrBill from '../../src/sections/Landingpage/emr-billing'

const EmrBilling = () => {
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/EMR_Billing.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/emr-billing' />
			</Head>
			<EmrBill />
		</div>
	)
}

export default EmrBilling
