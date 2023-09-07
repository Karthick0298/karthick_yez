import {useState} from 'react'
import PaymentPage from '../../src/sections/LayoutList/Payments'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import Head from 'next/head'

function Index() {
	const [toggleState, setToggleState] = useState(false)

	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
					<PaymentPage toggleState={toggleState} setToggleState={setToggleState} />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default Index
