import SectionHead from '../SectionHead'

export default function ConsultHead() {
	return (
		<SectionHead
			title='Consult'
			Subhead='Health Consult includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/consult-head.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Consult top doctor consultant'},
				{id: 2, content: '100% Safe consultations'},
				{id: 3, content: 'Free Follow up'},
				{id: 4, content: 'Convenient and easy'},
				{id: 5, content: 'Similar clinic experience'},
			]}
		/>
	)
}
