import SectionHead from '../SectionHead'

export default function FitnessHead() {
	return (
		<SectionHead
			title='Consult'
			Subhead='Book appointment for consultation with our trainers:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/fitnessconsult-head.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Defining your goals for better results'},
				{id: 2, content: 'Evaluating your condition and assigning workouts accordingly'},
				{id: 3, content: 'Monitors your workout for you to stay on the graph'},
				{id: 4, content: 'Plans for your convenience'},
				{id: 5, content: 'Maintaining records'},
				{id: 6, content: 'Book online consultation to your convenience'},
			]}
		/>
	)
}
