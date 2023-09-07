import React from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import Account from '../../src/sections/Settingspage/DeleteAccount'
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
					<Account toggleState={toggleState} setToggleState={setToggleState} />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default Delete
