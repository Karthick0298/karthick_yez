import React from 'react'
import Head from 'next/head'
import meta from '../../src/model/seo/inventory/data'
import Inventory from '../../src/sections/Landingpage/InventoryExpenses'

const InventoryExpenses = () => {
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/Inventory_Expenses.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/inventory-and-expenses' />
			</Head>
			<Inventory />
		</div>
	)
}

export default InventoryExpenses
