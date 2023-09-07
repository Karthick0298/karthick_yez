import {useState} from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import Articles from '../../src/sections/LayoutList/Articles'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import Head from 'next/head'

function ArticlesLayout() {
	const [toggleState, setToggleState] = useState(false)

	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
					<Articles toggleState={toggleState} setToggleState={setToggleState}  />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}
export default ArticlesLayout
