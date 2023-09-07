import SectionHead from '../SectionHead'

export default function spaWellnessHead() {
	return (
		<SectionHead
			title='Beauticians'
			Subhead='Booking appointment with us includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/spaWellnessHead.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Latest updated grooming practices'},
				{id: 2, content: 'Suggests the right treatment for your need'},
				{id: 3, content: 'Sanitized beauty tools '},
				{id: 4, content: 'Makeover based on Analysis based on each Individual'},
				{id: 5, content: 'Long term Results'},
				{id: 6, content: 'Services that fit lowest to highest budgets'},
			]}
		/>
	)
}
