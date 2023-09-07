import React from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import MobileSettings from '../../src/sections/Settingspage/MobileSettings'
import MobileSideBar from '../../src/components/MobileSideBar'


const MobileSettingsPage = () => {
	return (
		<DashboardLayout>
			<MobileSideBar />
			<MobileSettings />
		</DashboardLayout>
	)
}
export default MobileSettingsPage
