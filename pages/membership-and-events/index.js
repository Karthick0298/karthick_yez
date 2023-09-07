import React from 'react'
import Head from 'next/head'
import MembershipEvents from '../../src/sections/Landingpage/MembershipEvents'

const DashboardReports = () => {
	const meta = {
		title: 'Membership & events - Membership and Events for special service to customers',
		description: `Using LYFnGO’s membership and Events segment you can send multiple messages to all your customers in one shot. `,
	}
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/membership_Events.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/dashboards-and-reports' />
			</Head>
			<MembershipEvents />
		</>
	)
}

export default DashboardReports
