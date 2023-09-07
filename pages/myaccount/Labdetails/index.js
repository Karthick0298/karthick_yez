import MyaccountLayout from '../../../src/sections/LayoutList/MyaccountLayout'
import LabDetail from '../../../src/sections/LayoutList/Labtest/LabDetails'
import DashboardLayout from '../../../src/components/HomeLayout/DashboardLayout'
import Head from 'next/head'
import {useState} from 'react'
function Details() {
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout >
					<LabDetail />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default Details
