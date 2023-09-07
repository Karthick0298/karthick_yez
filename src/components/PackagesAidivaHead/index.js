import SectionHead from '../SectionHead'

export default function PackagesAidivaHead() {
	return (
		<SectionHead
			title='Packages'
			Subhead='Health Packages includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/packages-head.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'LFYnGO Packages Health check at your home'},
				{id: 2, content: 'Visit Lab near you'},
				{id: 3, content: 'Online Reports'},
				{id: 4, content: '100% Safe & Hygienic'},
				{id: 5, content: 'Quality assurance'},
				{id: 6, content: 'Accurate test results'},
			]}
		/>
	)
}
