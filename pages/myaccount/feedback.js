import {useState} from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout/index'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import FeedbackPage from '../../src/sections/LayoutList/FeedBack'
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
					<FeedbackPage toggleState={toggleState} setToggleState={setToggleState}  />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default Index
