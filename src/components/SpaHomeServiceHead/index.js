import SectionHead from '../SectionHead'

export default function SpaHomeServiceHead() {
	return (
		<SectionHead
			title='Home Service'
			Subhead='Book appointment for Home services:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/homeServiceHead.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Avoid Waiting time'},
				{id: 2, content: 'Services at your comfort'},
				{id: 3, content: 'Budget friendly'},
				{id: 4, content: 'Hygienic surroundings'},
				{id: 5, content: 'Prolonged therapies'},
				{id: 6, content: 'Post treatment care at your convenience'},
			]}
		/>
	)
}
