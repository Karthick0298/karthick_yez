import {useState} from 'react'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import Healthrecord from '../../src/sections/LayoutList/Healthrecord/Folderspage'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import Head from 'next/head'

function Index() {
	const [toggleState, setToggleState] = useState(false)
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState} >
					<Healthrecord toggleState={toggleState} setToggleState={setToggleState}/>
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default Index
