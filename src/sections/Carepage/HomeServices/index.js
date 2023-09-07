import HomeServicesHead from '../../../components/HomeServicesHead'
import NurseAssistance from '../../CareSubMenus/HomeServices/NurseAssistance'
import PhysioAssistance from '../../CareSubMenus/HomeServices/PhysioAssistance'
import AvailableHomeService from '../AvailableHomeService'
import AvailablePhysioTherapist from '../AvailablePhysiotherapist'

export default function HomeServices() {
	return (
		<>
			<HomeServicesHead />
			<NurseAssistance />
			<AvailableHomeService />
			<PhysioAssistance />
			<AvailablePhysioTherapist />
		</>
	)
}
