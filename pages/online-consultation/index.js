import React from 'react'
import Head from 'next/head'
import meta from '../../src/model/seo/onlineConsult/data'
import OnlineConsult from '../../src/sections/Landingpage/OnlineConsultation'

const OnlineConsultation = () => {
	return (
		<div>
			<Head>
				<title>LYFnGO</title>
				<link rel='canonical' href='https://lyfngo.com/online-consultation' />
			</Head>
			<OnlineConsult />
		</div>
	)
}

export default OnlineConsultation
