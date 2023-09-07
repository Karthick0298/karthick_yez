import SectionHead from '../SectionHead'

export default function MindHomeServiceHead() {
	return (
		<SectionHead
			title='Home Service'
			Subhead='Book with us for home visits which includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/mind-homeService.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Service at your convenience'},
				{id: 2, content: 'Special attention for better performance'},
				{id: 3, content: 'Avoiding ques'},
				{id: 4, content: 'Better communication'},
				{id: 5, content: 'Certified Masters at your service'},
				{id: 6, content: 'Vaccinated masters'},
			]}
		/>
	)
}
