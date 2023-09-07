import SectionHead from '../SectionHead'

export default function FitnessOnlineTrainingHead() {
	return (
		<SectionHead
			title='Online Training'
			Subhead='Booking appointments for online training includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/fitnessonline-training-head.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Distance is never a demerit to connect with best trainers'},
				{id: 2, content: 'Flexibility'},
				{id: 3, content: 'Access all prerecorded videos any time of your choice'},
				{id: 4, content: 'At affordable cost'},
				{id: 5, content: 'Time saving'},
				{id: 6, content: 'Enjoy the same results as in going to the gym.'},
			]}
		/>
	)
}
