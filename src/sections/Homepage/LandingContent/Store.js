import ConsumerPageSections from '../../../components/ConsumerPageSections'

export default function Store() {
	const CardData = [
		{
			id: 1,
			title: 'Health Products',
			background: 'transparent linear-gradient(90deg, #4E27C4 0%, #6537F1 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardstoreone.png',
		},
		{
			id: 2,
			title: 'Fitness Products',
			background: 'transparent linear-gradient(98deg, #0095EB 0%, #47B4F3 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardstoretwo.png',
		},
		{
			id: 3,
			title: 'Yoga Materials',
			background: 'transparent linear-gradient(98deg, #1AC698 0%, #61E6C3 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardstorethhree.png',
		},
		{
			id: 4,
			title: 'Sports Materials',
			background: 'transparent linear-gradient(98deg, #E55C26 0%, #FE814F 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardstorefour.png',
		},
		{
			id: 5,
			title: 'Beauty Products',
			background: 'transparent linear-gradient(98deg, #DF1181 0%, #FB43A7 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardstorefive.png',
		},
	]
	return (
		<div id='Store'>
			<ConsumerPageSections
				backgroundColor='transparent linear-gradient(245deg, #D91E150D 0%, #D91E1500 100%) 0% 0% no-repeat padding-box'
				groupName='STORE'
				groupColor='#D91E15'
				heading={`Coming soon`}
				subtitle={`We’ve got what you’re looking for, and more!`}
				CardData={CardData}
			/>
		</div>
	)
}
