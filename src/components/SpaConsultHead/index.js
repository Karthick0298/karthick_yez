import SectionHead from '../SectionHead'

export default function SpaConsultHead() {
	return (
		<SectionHead
			title='Consult'
			Subhead='Hospitals/ Clinic Consultations includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/consultHead.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Personalized chat with preferred Beauticians'},
				{id: 2, content: 'Customized Services'},
				{id: 3, content: 'Maintaining records'},
				{id: 4, content: 'Chat up to three days paying for one'},
				{id: 5, content: 'View chat history anytime'},
				{id: 6, content: 'Get your questions answered right away'},
			]}
		/>
	)
}
