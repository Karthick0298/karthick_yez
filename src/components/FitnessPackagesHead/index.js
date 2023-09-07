import SectionHead from '../SectionHead'

export default function FitnessPackagesHead() {
	return (
		<SectionHead
			title='Packages'
			Subhead='Fitness Packages includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/fitnesspackages-head.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'Fitness packages at your home'},
				{id: 2, content: 'Explore packages that fits you'},
				{id: 3, content: 'Online Reports'},
				{id: 4, content: '100% Safe & Hygienic'},
				{id: 5, content: 'Quality assurance'},
				{id: 6, content: 'Accurate test results'},
			]}
		/>
	)
}
