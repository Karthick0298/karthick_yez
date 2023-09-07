import {useState} from 'react'
import Order from '../../src/sections/LayoutList/Orderpage/Order'
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
			<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}  >
					<Order toggleState={toggleState} setToggleState={setToggleState} />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default Index
