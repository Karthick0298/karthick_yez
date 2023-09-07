import SectionHead from '../SectionHead'

export default function MindConsultHead() {
	return (
		<SectionHead
			title='Consult'
			Subhead='LFYnGO consult includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/mind-consult.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Personalized chat with preferred master'},
				{id: 2, content: 'Customized training'},
				{id: 3, content: 'Maintaining records'},
				{id: 4, content: 'Chat up to three days paying for one'},
				{id: 5, content: 'View chat history anytime'},
				{id: 6, content: 'Get your questions answered right away'},
			]}
		/>
	)
}
