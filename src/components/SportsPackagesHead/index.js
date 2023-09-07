import SectionHead from '../SectionHead'

export default function SportsPackagesHead() {
	return (
		<SectionHead
			title='Packages'
			Subhead='Sports Packages includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Sports/packages.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Professional players train you'},
				{id: 2, content: 'indoor and Outdoor games'},
				{id: 3, content: 'Train in groups'},
				{id: 4, content: 'Good listener with Careful Listening'},
				{id: 5, content: 'Using Tools and Techniques'},
				{id: 6, content: 'Having Integral Vision'},
			]}
		/>
	)
}
