import Head from 'next/head'
import React, {useState} from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'
import Workoutplan from '../../src/sections/LayoutList/workoutplan/workoutplan'

const workoutplan = () => {
	const [toggleState, setToggleState] = useState(false)

	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState} >
					<Workoutplan toggleState={toggleState} setToggleState={setToggleState} />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}

export default workoutplan
