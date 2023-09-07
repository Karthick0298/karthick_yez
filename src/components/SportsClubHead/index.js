import SectionHead from '../SectionHead'

export default function SportsClubHead() {
	return (
		<SectionHead
			title='Clubs'
			Subhead='Book appointment at our sports club:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Sports/clubs.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Learn Team and player statistics'},
				{id: 2, content: 'Multiple sports in one place'},
				{id: 3, content: 'Earn Membership benefits'},
				{id: 4, content: 'Become a team player'},
				{id: 5, content: 'Fully Facilitated '},
			]}
		/>
	)
}
