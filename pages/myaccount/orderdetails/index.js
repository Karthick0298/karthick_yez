import DashboardLayout from '../../../src/components/HomeLayout/DashboardLayout'
import MyaccountLayout from '../../../src/sections/LayoutList/MyaccountLayout'
import Orderdetail from '../../../src/sections/LayoutList/Orderpage/Orderdetails'
import Head from 'next/head'
import {useState} from 'react'
function Index() {
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
			<MyaccountLayout >
					<Orderdetail />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default Index
