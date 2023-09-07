import ConsumerPageSections from '../../../components/ConsumerPageSections'

export default function Care() {
	const CardData = [
		{
			id: 1,
			title: 'Doctors & Therapist',
			background: 'transparent linear-gradient(93deg, #E6B300 0%, #D6BA54 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/stethoscope.png',
		},
		{
			id: 2,
			title: 'Clinics & Hospitals',
			background: 'transparent linear-gradient(93deg, #66E6BF 0%, #60FFD0 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardhospital.png',
		},
		{
			id: 3,
			title: 'Lab / Scan Centers',
			background: 'transparent linear-gradient(90deg, #FDBC5E 0%, #FBCF90 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardlabscan.png',
		},
		{
			id: 4,
			title: 'Home Care Services',
			background: 'transparent linear-gradient(269deg, #E2A2B2 0%, #F55F84 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardhomeservice.png',
		},
		{
			id: 5,
			title: 'Online Consult',
			background: 'transparent linear-gradient(90deg, #A89B28 0%, #C4B84F 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardconsult.png',
		},
	]
	return (
		<div id='Care'>
			<ConsumerPageSections
				backgroundColor='transparent linear-gradient(244deg, #A489F345 0%, #6F47E700 100%) 0% 0% no-repeat padding-box'
				groupName='HEALTH CARE'
				groupColor='#5129CA'
				heading={`Coming soon for simplifying wellness`}
				subtitle={`Let’s jointly move your business forward by leading innovation,
				 co-creating customer-centric solutions, and capturing new markets.`}
				CardData={CardData}
			/>
		</div>
	)
}
