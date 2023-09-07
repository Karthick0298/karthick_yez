import SectionHead from '../SectionHead'

export default function SpaTherapistHead() {
	return (
		<SectionHead
			title='Therapist'
			Subhead='Booking appointment with our therapist includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/therapistHead.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Latest therapy methods'},
				{id: 2, content: 'Budget friendly therapies'},
				{id: 3, content: 'Visual results after each therapy'},
				{id: 4, content: 'Comfortable and clean environment for the therapy process'},
				{id: 5, content: 'Certified therapist '},
			]}
		/>
	)
}
