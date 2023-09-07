import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import ChangePin from '../../src/sections/Settingspage/ChangePin'
import SettingLayout from '../../src/sections/Settingspage/SettingList'
import Head from 'next/head'

function PinChange() {
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<SettingLayout>
					<ChangePin />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default PinChange
