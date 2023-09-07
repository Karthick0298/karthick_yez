import ConsumerPageSections from '../../../components/ConsumerPageSections'

export default function Spa() {
	const CardData = [
		{
			id: 1,
			title: 'Coaches',
			background: 'transparent linear-gradient(90deg, #A89B28 0%, #C4B84F 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardsportscoach.png',
		},
		{
			id: 2,
			title: 'Venue / Clubs',
			background: 'transparent linear-gradient(90deg, #FDBC5E 0%, #FBCF90 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardsportscoachvenue.png',
		},
		{
			id: 3,
			title: 'Courts',
			background: 'transparent linear-gradient(98deg, #89B4C4 0%, #5A95AB 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardsportscourt.png',
		},
		{
			id: 4,
			title: 'Home Service',
			background: 'transparent linear-gradient(286deg, #E6A091 0%, #E5B2A5 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardfithomeservice.png',
		},
		{
			id: 5,
			title: 'Consult',
			background: 'transparent linear-gradient(269deg, #E2A2B2 0%, #F55F84 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardsportsconsult.png',
		},
	]

	return (
		<div id='Sports'>
			<ConsumerPageSections
				backgroundColor='transparent linear-gradient(244deg, #E55C261A 0%, #E55C2600 100%) 0% 0% no-repeat padding-box'
				groupName={`SPORTS`}
				groupColor='#E55C26'
				heading={`Coming soon for simplifying wellness`}
				// eslint-disable-next-line max-len
				subtitle={`Great opportunities come to those who make the most of small ones. So LYFnGO helps with coach assistance, memberships to follow in close`}
				CardData={CardData}
			/>
		</div>
	)
}
