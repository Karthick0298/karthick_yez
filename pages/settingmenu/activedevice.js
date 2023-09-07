import React from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import Active from '../../src/sections/Settingspage/ActiveDevice'
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
					<Active toggleState={toggleState} setToggleState={setToggleState} />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default Device
