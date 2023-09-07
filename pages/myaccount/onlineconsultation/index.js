import {useState} from 'react'
import MyaccountLayout from '../../../src/sections/LayoutList/MyaccountLayout'
import OnlineConsultationPage from '../../../src/sections/LayoutList/OnlineConsultation'
import DashboardLayout from '../../../src/components/HomeLayout/DashboardLayout'
import Head from 'next/head'

function OnlineConsultation() {
	const [toggleState, setToggleState] = useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}  >
					<OnlineConsultationPage toggleState={toggleState} setToggleState={setToggleState}  />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default OnlineConsultation
