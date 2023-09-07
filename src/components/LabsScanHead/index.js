import SectionHead from '../SectionHead'

export default function LabsScanHead() {
	return (
		<SectionHead
			title='Labs/Scan'
			Subhead='Lab/ Scan Consultations includes:'
			sideBlockImg='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/labscan-head.png'
			imgPositionLeft={false}
			listData={[
				{id: 1, content: 'NABH and NABL accredited Labs'},
				{id: 2, content: 'Get Reports Online'},
				{id: 3, content: 'High Quality Equipment'},
				{id: 4, content: '24*7 Customer Support'},
				{id: 5, content: 'Affordable Cost'},
				{id: 6, content: 'Advanced Technology'},
			]}
		/>
	)
}
