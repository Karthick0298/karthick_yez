import React, {useState} from 'react'
import Head from 'next/head'
import DashboardLayout from '../../../src/components/HomeLayout/DashboardLayout'
import MyaccountLayout from '../../../src/sections/LayoutList/MyaccountLayout'
import WorkoutDetails from '../../../src/sections/LayoutList/workoutplan/workoutdetails'

const workoutdetail = () => {
	return (
		<>
			<Head>
				<title>LYFnGO</title>
			</Head>
			<DashboardLayout>
				<MyaccountLayout>
					<WorkoutDetails />
				</MyaccountLayout>
			</DashboardLayout>
		</>
	)
}

export default workoutdetail
