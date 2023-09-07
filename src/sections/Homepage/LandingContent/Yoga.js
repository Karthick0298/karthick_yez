import ConsumerPageSections from '../../../components/ConsumerPageSections'

export default function Fitness() {
	const CardData = [
		{
			id: 1,
			title: 'Yoga Masters',
			background: 'transparent linear-gradient(287deg, #D49F99 0%, #BC3F81 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardmindyogmas.png',
		},
		{
			id: 2,
			title: 'Yoga Centers',
			background: 'transparent linear-gradient(98deg, #AF9E2B 0%, #C9B848 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardmindyogcentres.png',
		},
		{
			id: 3,
			title: (
				<>
					Online <br /> Training
				</>
			),
			background: 'transparent linear-gradient(98deg, #553973 0%, #553973 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardmindyogonl.png',
		},
		{
			id: 4,
			title: 'Home Service',
			background: 'transparent linear-gradient(98deg, #E29D68 0%, #F6C6A0 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardfithomeservice.png',
		},
		{
			id: 5,
			title: 'Consult',
			background: 'transparent linear-gradient(90deg, #FDBC5E 0%, #FBCF90 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardmindyogcons.png',
		},
	]

	return (
		<div id='Mind'>
			<ConsumerPageSections
				backgroundColor='transparent linear-gradient(237deg, #0CC5931A 0%, #0CC59300 100%) 0% 0% no-repeat padding-box'
				groupName='WELLNESS'
				groupColor='#1AC698'
				heading={`Coming soon for simplifying wellness`}
				subtitle={`Let’s jointly move your business forward by leading innovation,
				 co-creating customer-centric solutions, and capturing new markets.`}
				CardData={CardData}
			/>
		</div>
	)
}
