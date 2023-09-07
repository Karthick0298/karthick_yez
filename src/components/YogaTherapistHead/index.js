import SectionHead from '../SectionHead'

export default function YogaTherapistHead() {
	return (
		<SectionHead
			title='Yoga Therapist'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/mind-yogaTherapist.png'
			Subhead='Improve your health and wellbeing with our therapist also well versed in:'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Helping in Self-healing'},
				{id: 2, content: 'Cultivating the sense of Grounding'},
				{id: 3, content: 'Skillful Speech'},
				{id: 4, content: 'Good listener with Careful Listening'},
				{id: 5, content: 'Using Tools and Techniques'},
				{id: 6, content: 'Having Integral Vision'},
			]}
		/>
	)
}
