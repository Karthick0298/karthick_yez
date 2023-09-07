import SectionHead from '../SectionHead'

export default function FitnessHomeServiceHead() {
	return (
		<SectionHead
			title='Home Service'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/fitnesshomeservicehead.png'
			Subhead='Fitness home Service includes:'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Personal attention monitoring each action'},
				{id: 2, content: 'Privacy and comfort'},
				{id: 3, content: 'No equipment needed'},
				{id: 4, content: 'Saves Time and Money'},
				{id: 5, content: 'Creates Extra Funds For Self-Investment'},
				{id: 6, content: 'Encourages Consistency and Accountability'},
			]}
		/>
	)
}
