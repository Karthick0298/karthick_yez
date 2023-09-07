import SectionHead from '../SectionHead'

export default function HomeServicesHead() {
	return (
		<SectionHead
			title='Home Services'
			Subhead='Nurses/ Physiotheraphy home services:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/homeservices-head.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Looking for post surgical care'},
				{id: 2, content: 'To bring an experienced nurse home'},
				{id: 3, content: 'Services for seniors that covers all the needs'},
				{id: 4, content: 'Support in all daily activities'},
				{id: 5, content: 'Monetary savings'},
				{id: 6, content: 'Centralized Information system'},
			]}
		/>
	)
}
