import ConsumerPageSections from '../../../components/ConsumerPageSections'

export default function Spa() {
	const CardData = [
		{
			id: 1,
			title: 'Beauticians',
			background: 'transparent linear-gradient(98deg, #9FC6E5 0%, #72B5E9 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardspabeautician.png',
		},
		{
			id: 2,
			title: 'Therapist',
			background: 'transparent linear-gradient(93deg, #44D5A9 0%, #60FFD0 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardspatherapist.png',
		},
		{
			id: 3,
			title: (
				<>
					Saloon & <br /> Spa center
				</>
			),
			background: 'transparent linear-gradient(98deg, #F5C980 0%, #DFB36B 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardspacenter.png',
		},
		{
			id: 4,
			title: 'Home Service',
			background: 'transparent linear-gradient(93deg, #E6B300 0%, #D6BA54 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardfithomeservice.png',
		},
		{
			id: 5,
			title: 'Consult',
			background: 'transparent linear-gradient(98deg, #89B4C4 0%, #5A95AB 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardspacenterconsult.png',
		},
	]

	return (
		<div id='Spa'>
			<ConsumerPageSections
				backgroundColor='transparent linear-gradient(244deg, #DF11811A 0%, #DF118100 100%) 0% 0% no-repeat padding-box'
				groupName={`SPA & WELLNESS`}
				groupColor='#DF1181'
				heading={`Coming soon for simplifying wellness`}
				subtitle={`It's not about perfection, all about practice. Tap into facilities to take up a level high on lives `}
				CardData={CardData}
			/>
		</div>
	)
}
