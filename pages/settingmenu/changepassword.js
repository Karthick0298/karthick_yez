import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import ChangePassword from '../../src/sections/Settingspage/ChangePassword'
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
					<ChangePassword />
				</SettingLayout>
			</DashboardLayout>
		</>
	)
}
export default PasswordChange
