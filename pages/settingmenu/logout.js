import React from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import AccountLogout from '../../src/sections/Settingspage/Logout'
import SettingLayout from '../../src/sections/Settingspage/SettingList'
import Head from 'next/head'

function Delete() {
	const [toggleState, setToggleState] = React.useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<SettingLayout toggleState={toggleState} setToggleState={setToggleState}>
					<AccountLogout toggleState={toggleState} setToggleState={setToggleState} />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default Delete
