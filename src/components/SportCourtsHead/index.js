import SectionHead from '../SectionHead'

export default function SportsCourtsHead() {
	return (
		<SectionHead
			title='Courts'
			Subhead='Hospitals/ Clinic Consultations includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Sports/courts.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Cleaned and Sanitized courts'},
				{id: 2, content: 'Lockers for Storage'},
				{id: 3, content: 'Indoor game court with Synthetic Flooring'},
				{id: 4, content: 'Multiple time slots to book with your Convenience'},
				{id: 5, content: 'Indoor Courts with Good Ventilation'},
			]}
		/>
	)
}
