import React, {useState} from 'react'
import MyaccountLayout from '../../../src/sections/LayoutList/MyaccountLayout'
import UserDetail from '../../../src/sections/LayoutList/Appointment/UserAppointmentDetails'
import DashboardLayout from '../../../src/components/HomeLayout/DashboardLayout'
import Head from 'next/head'

function Details(props) {
	const [toggleState, setToggleState] = useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}  >
					<UserDetail toggleState={toggleState} setToggleState={setToggleState}  />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default Details
