import SectionHead from '../SectionHead'

export default function SportsCoachesHead() {
	return (
		<SectionHead
			title='Coaches'
			Subhead='Booking appointment with our coaches include:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Sports/sportCoaches.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'All of our coaches have extensive coaching experience'},
				{id: 2, content: 'We ensure high-quality coaches with verified reviews.'},
				{id: 3, content: 'Personalized training plan to help you reach your unique goals'},
				{id: 4, content: 'Hundreds of curated journals to help with your training'},
				{id: 5, content: 'Receive actionable feedback from your coach'},
				{id: 6, content: 'Every coaching session can be booked in minutes'},
			]}
		/>
	)
}
