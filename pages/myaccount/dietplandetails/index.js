import {useState} from 'react'
import MyaccountLayout from '../../../src/sections/LayoutList/MyaccountLayout'
import DietPlanDetails from '../../../src/sections/LayoutList/DietPlan/DietPlanDetails'
import DashboardLayout from '../../../src/components/HomeLayout/DashboardLayout'

function DietPlanDetail() {
	const [toggleState, setToggleState] = useState(false)
	return (
		<DashboardLayout>
			<MyaccountLayout toggleState={toggleState} setToggleState={setToggleState}>
				<DietPlanDetails toggleState={toggleState} setToggleState={setToggleState}  />
			</MyaccountLayout>
		</DashboardLayout>
	)
}
export default DietPlanDetail
