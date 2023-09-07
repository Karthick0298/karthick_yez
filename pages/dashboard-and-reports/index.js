import React from 'react'
import Head from 'next/head'
import meta from '../../src/model/seo/dashReport/data'
import DashboardReport from '../../src/sections/Landingpage/DashboardReports'

const DashboardReports = () => {
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/Dashboard_Report.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/dashboards-and-reports' />
			</Head>
			<DashboardReport />
		</>
	)
}

export default DashboardReports
