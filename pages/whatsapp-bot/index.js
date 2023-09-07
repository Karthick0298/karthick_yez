import React from 'react'
import Head from 'next/head'
import WhatsAppPage from '../../src/sections/Landingpage/WhatsAppPage'

const index = () => {
	const meta = {
		title: 'Whatsapp bot and Consult - WhatsApp now with LYFnGO Consult or book an appointment with your specialist',
		description: `WhatsApp now with LYFnGO Consult or book an appointment with your specialist anytime from the comfort of your home. Send records and documents to the specialist online.`,
	}

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/whatsappbot_online.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/dashboards-and-reports' />
			</Head>
			<WhatsAppPage />
		</>
	)
}

export default index
