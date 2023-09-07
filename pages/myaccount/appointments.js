import React, {useState} from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout/index'
import Appointment from '../../src/sections/LayoutList/Appointment/AppointmentList'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import Head from 'next/head'
import useAuth from '../../lib/Utils/hooks/UseAuth'
import Loader from '../../src/components/ScreenLoader'

function MyAccount() {
	const {load} = useAuth()
	const [toggleState, setToggleState] = useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			{/* {load ? (
				<Loader />
			) : ( */}
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
					<Appointment toggleState={toggleState} setToggleState={setToggleState} />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default MyAccount
