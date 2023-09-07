import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import FactAuth from '../../src/sections/Settingspage/TwoFactor'
import SettingLayout from '../../src/sections/Settingspage/SettingList'
import Head from 'next/head'

function PasswordChange() {
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<SettingLayout>
					<FactAuth />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default PasswordChange
