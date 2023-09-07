import React, {useState} from 'react'
import DashboardLayout from '../../src/components/HomeLayout/DashboardLayout/index'
import DietPlanList from '../../src/sections/LayoutList/DietPlan/DietPlanList'
import MyaccountLayout from '../../src/sections/LayoutList/MyaccountLayout'

function DietPlan() {
	const [toggleState, setToggleState] = useState(false)

	return (
		<DashboardLayout>
			<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState} >
				<DietPlanList toggleState={toggleState} setToggleState={setToggleState}  />
			</MyaccountLayout>
		</DashboardLayout>
	)
}
export default DietPlan
