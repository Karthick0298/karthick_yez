import {useState} from 'react'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import Labtest from '../../src/sections/LayoutList/Labtest/LabTestList'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import Head from 'next/head'

function LabTest() {
	const [toggleState, setToggleState] = useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
					<Labtest toggleState={toggleState} setToggleState={setToggleState} />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default LabTest
