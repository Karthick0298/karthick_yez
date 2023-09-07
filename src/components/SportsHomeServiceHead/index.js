import SectionHead from '../SectionHead'

export default function SportsHomeService() {
	return (
		<SectionHead
			title='Home Service'
			Subhead='Book Appointment for home service:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Sports/homeService.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Learn the game with personal care'},
				{id: 2, content: 'Make your learning space comfortable'},
				{id: 3, content: 'Convenience makes you consistent'},
				{id: 4, content: 'Each move is monitored which gives better Results'},
				{id: 5, content: 'At a Budget friendly cost'},
			]}
		/>
	)
}
