import SectionHead from '../SectionHead'

export default function YogaMastersHead() {
	return (
		<SectionHead
			title='Yoga Masters'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/mind-yogaMasters.png'
			Subhead='Book appointment with our Yoga masters:'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Building self-practice and self-study'},
				{id: 2, content: 'Peaceful/ Eco friendly environment'},
				{id: 3, content: 'Cleanse your soul'},
				{id: 4, content: 'Covering all kind of practices'},
				{id: 5, content: 'Certified masters'},
				{id: 6, content: 'Practiced until perfect'},
			]}
		/>
	)
}
