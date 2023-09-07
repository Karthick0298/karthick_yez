import SectionHead from '../SectionHead'

export default function FitnessHead() {
	return (
		<SectionHead
			title='Trainer'
			Subhead='Book appointment with our trainers which includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/fitness-head.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Certified and motivating trainers'},
				{id: 2, content: 'Regular workout monitoring'},
				{id: 3, content: 'Customized workout plans'},
				{id: 4, content: 'Training with the latest practices'},
				{id: 5, content: 'Customer friendly plans to avoid boredom'},
				{id: 6, content: 'Personalized nutrition plans'},
			]}
		/>
	)
}
