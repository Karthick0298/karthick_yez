import React from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import NotificationSetting from '../../src/sections/Settingspage/NotificationSetting'
import SettingLayout from '../../src/sections/Settingspage/SettingList'
import Head from 'next/head'

function Notification() {
	const [toggleState, setToggleState] = React.useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<SettingLayout toggleState={toggleState} setToggleState={setToggleState}>
					<NotificationSetting toggleState={toggleState} setToggleState={setToggleState} />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default Notification
