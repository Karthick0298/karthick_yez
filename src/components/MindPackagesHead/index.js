import SectionHead from '../SectionHead'

export default function MindPackagesHead() {
	return (
		<SectionHead
			title='Packages'
			Subhead='Mind & Yoga packages include:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/mind-packages.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'choose the pack the suits for you'},
				{id: 2, content: 'Exclusive benifits on selected packages'},
				{id: 3, content: 'Skillful Speech'},
				{id: 4, content: 'Quality assurance'},
				{id: 5, content: 'Using Tools and Techniques'},
				{id: 6, content: 'Having Integral Vision'},
			]}
		/>
	)
}
