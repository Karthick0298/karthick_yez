import React from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import Profile from '../../src/sections/Settingspage/MyProfile'
import SettingLayout from '../../src/sections/Settingspage/SettingList'
import Head from 'next/head'

function Device() {
	const [toggleState, setToggleState] = React.useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<SettingLayout toggleState={toggleState} setToggleState={setToggleState}>
					<Profile toggleState={toggleState} setToggleState={setToggleState} />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default Device
