import SectionHead from '../SectionHead'

export default function HospitalsHead() {
	return (
		<SectionHead
			title='Hospitals'
			Subhead='Hospitals/ Clinic Consultations includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/hospitals-head.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Remote/Virtual Hospital Consultations'},
				{id: 2, content: 'Medical attention when you are sick'},
				{id: 3, content: 'Symptoms of a medical emergency'},
				{id: 4, content: '24 hours convenience'},
				{id: 5, content: 'Monetary savings'},
				{id: 6, content: 'Centralized Information system'},
			]}
		/>
	)
}
