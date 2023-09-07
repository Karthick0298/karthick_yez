import SectionHead from '../SectionHead'

export default function SpaSaloonHead() {
	return (
		<SectionHead
			title='Saloons'
			Subhead='Book appointment at our saloons:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/saloonsHead.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Embraced technology'},
				{id: 2, content: 'Sanitized and clean environment'},
				{id: 3, content: 'Services Rendered at the right time'},
				{id: 4, content: 'Comfortable Service spaces'},
				{id: 5, content: 'Lounge to make your wait comfortable'},
				{id: 6, content: 'Certified and top rated Stylist'},
			]}
		/>
	)
}
