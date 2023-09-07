import React from 'react'
import Head from 'next/head'
import ConsulatationAndFacility from '../../src/sections/Landingpage/ConsulatationAndFacility'

const DashboardReports = () => {
	const meta = {
		title: 'Consultation and Facility Booking - LYFnGO’s booking approach on consultation, appointments, and follow-up reminders',
		description: `LYFnGO sets forth the ultramodern LYFnGO’s booking approach on consultation, appointments, and follow-up reminders. Additionally, book amenities of your interest for healthy living.`,
	}

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
				<link rel='canonical' href='https://lyfngo.com/consultation-and-facility' />
			</Head>
			<ConsulatationAndFacility />
		</>
	)
}

export default DashboardReports
