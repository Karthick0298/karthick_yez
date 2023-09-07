import SectionHead from '../SectionHead'

export default function FitnessHead() {
	return (
		<SectionHead
			title='Fitness Centers'
			Subhead='Our fitness centres are more than just a gym:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/fitnesscenter-head.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Fully equipped centers'},
				{id: 2, content: 'Ac/Locker facilities'},
				{id: 3, content: 'Sanitized after each batch timeslot'},
				{id: 4, content: 'Gender-specific work-out spaces'},
				{id: 5, content: 'Regular workout and nutrition monitoring'},
				{id: 6, content: 'Indoor/outdoor workout space'},
			]}
		/>
	)
}
