import SectionHead from '../SectionHead'

export default function MindOnlineTrainingHead() {
	return (
		<SectionHead
			title='Online Training'
			Subhead='Get Access anywhere you go to our online sessions:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/mind-onlinetraining.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Prerecorded and live session'},
				{id: 2, content: 'Best pandemic hack to connect with people'},
				{id: 3, content: 'Handy Hassel free access'},
				{id: 4, content: 'Handle health  household blockers'},
				{id: 5, content: 'Be the master of setting your own time of wellness'},
				{id: 6, content: 'Stay home stay safe'},
			]}
		/>
	)
}
