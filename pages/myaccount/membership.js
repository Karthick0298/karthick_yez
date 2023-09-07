import Head from 'next/head'
import React, {useState} from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import MembershipSection from '../../src/sections/LayoutList/MembershipSection/index'

const membership = () => {
	const [toggleState, setToggleState] = useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
					<MembershipSection toggleState={toggleState} setToggleState={setToggleState} />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}

export default membership
