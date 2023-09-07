import SectionHead from '../SectionHead'

export default function YogaCentersHead() {
	return (
		<SectionHead
			title='Yoga Centers'
			Subhead='Yoga centers consultation includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/mind-yogaCentres.png'
			imgPositionLeft={true}
			listData={[
				{id: 1, content: 'Personal care for each individual'},
				{id: 2, content: 'Clean and sanitized centers'},
				{id: 3, content: 'Vaccinated employees'},
				{id: 4, content: 'Provided with accessories'},
				{id: 5, content: 'Inbuilt library'},
				{id: 6, content: 'Nature trails for strolling'},
			]}
		/>
	)
}
