import SectionHead from '../SectionHead'

export default function DoctorHead() {
	return (
		<SectionHead
			title='Doctors'
			Subhead='Book appointment with our top doctors:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctor-head.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Extensive range of Specialist'},
				{id: 2, content: 'Digitalized prescription'},
				{id: 3, content: 'Follow-up Screening'},
				{id: 4, content: '24/7 patient support'},
				{id: 5, content: 'Scheduling on persons convenient'},
				{id: 6, content: 'Maintaining health records'},
			]}
		/>
	)
}
