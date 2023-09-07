import HealthConcern from '../../../components/SpecialistDoctor/HealthConcern'
import ConsultHead from '../../../components/ConsultHead'
import TopSpecialities from '../TopSpecialities'
import CommonHealth from '../CommonHealth'

export default function Consult() {
	return (
		<>
			<ConsultHead />
			<TopSpecialities />
			<CommonHealth />
			{/* <HealthConcern /> */}
		</>
	)
}
