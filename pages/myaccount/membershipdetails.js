import Head from 'next/head'
import React, {useState} from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import MembershipDetails from '../../src/sections/LayoutList/MembershipSection/MembershipDetails'
import {useRouter} from 'next/router'

const membershipdetails = () => {
	const router = useRouter()
	const [toggleState, setToggleState] = useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
					<MembershipDetails toggleState={toggleState} setToggleState={setToggleState} membershipDetails={router.query} />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}

export default membershipdetails
