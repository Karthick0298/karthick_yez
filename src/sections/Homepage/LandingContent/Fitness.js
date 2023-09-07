// import {Typography, Card, CardContent, CardActions} from '@material-ui/core'
// import {makeStyles} from '@material-ui/core'
// import Image from 'next/image'
// import FitnessCard from '../../../components/Card/FitnessCard'

// const useStyles = makeStyles(theme => ({
// 	bgImage: {
// 		position: 'relative',
// 	},
// 	imageView: {
// 		position: 'relative',
// 		width: '100%',
// 		height: '100vh',
// 		[theme.breakpoints.down('sm')]: {},
// 	},
// }))

// export default function Fitness() {
// 	const classes = useStyles()
// 	return (
// 		<>
// 			<div className={classes.bgImage} id='Fitness'>
// 				<div className={classes.imageView}>
// 					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/fitness_bg.jpg' alt='fitness' layout='fill' objectFit='cover' objectPosition='25% 25%' quality={100} />
// 				</div>
// 				<FitnessCard />
// 			</div>
// 		</>
// 	)
// }

import ConsumerPageSections from '../../../components/ConsumerPageSections'

export default function Fitness() {
	const CardData = [
		{
			id: 1,
			title: 'Trainers',
			background: 'transparent linear-gradient(98deg, #F5C980 0%, #DFB36B 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardtrainer.png',
		},
		{
			id: 2,
			title: 'Fitness Centers',
			background: 'transparent linear-gradient(286deg, #E6A091 0%, #E5B2A5 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardfitnesscenters.png',
		},
		{
			id: 3,
			title: (
				<>
					Online <br /> Training
				</>
			),
			background: 'transparent linear-gradient(98deg, #9FC6E5 0%, #72B5E9 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardonlinetraining.png',
		},
		{
			id: 4,
			title: 'Home Service',
			background: 'transparent linear-gradient(98deg, #89B4C4 0%, #5A95AB 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/cardfithomeservice.png',
		},
		{
			id: 5,
			title: 'Consult',
			background: 'transparent linear-gradient(93deg, #E6B300 0%, #D6BA54 100%) 0% 0% no-repeat padding-box',
			backgroundImg: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/carrdfitnessconsult.png',
		},
	]

	return (
		<div id='Fitness'>
			<ConsumerPageSections
				backgroundColor='transparent linear-gradient(244deg, #189DEA12 0%, #189DEA00 100%) 0% 0% no-repeat padding-box'
				groupName='FITNESS'
				groupColor='#0095EB'
				heading={`Coming soon for simplifying wellness`}
				subtitle={`To improve lives, LYFnGO Fitness is your source for memberships,
				 diet and exercise schedules, and instant appointments through online, in-person, and home service.`}
				CardData={CardData}
			/>
		</div>
	)
}
