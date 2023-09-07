import SectionHead from '../SectionHead'

export default function SpaCenterHead() {
	return (
		<SectionHead
			title='Spa Center'
			Subhead='Book with our spa centers to enjoy:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/spaCenterHead.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Latest spa methods to satisfy your requirements'},
				{id: 2, content: 'Refreshed and renewed fell after each procedure'},
				{id: 3, content: 'Long-lasting results'},
				{id: 4, content: 'Budget friendly'},
				{id: 5, content: 'Clean and sanitized centers'},
				{id: 6, content: 'Certified Therapist'},
			]}
		/>
	)
}
