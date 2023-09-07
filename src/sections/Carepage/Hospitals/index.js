import TopSpecialityHospitals from '../../CareSubMenus/Hospitals/TopSpecialityHospitals'
import HospitalsHead from '../../../components/HospitalsHead'
import TopHospitals from '../TopHospitals'

export default function Hospitals() {
	return (
		<>
			<HospitalsHead />
			<TopHospitals />
			<TopSpecialityHospitals />
		</>
	)
}
