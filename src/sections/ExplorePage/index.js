/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, {useEffect, useRef, useState} from 'react'
import {Typography, Button, useMediaQuery} from '@material-ui/core'
import {useStyles} from './style'
import {ArrowCircleRight, ArrowCircleRightOutlined} from '@mui/icons-material'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useRouter} from 'next/router'
import {flashLink, flashRegister} from '../../../lib/Utils/linkWindow'
import FadeVariant from '../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../components/FramerMotion/PageFadeEffect'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from 'swiper/core'
import FreeTrailCard from '../../components/FreeTrailCard'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// install Swiper modules
SwiperCore.use([Navigation, Autoplay])

function ExplorePage() {
	const classes = useStyles()
	const router = useRouter()
	const swiperRef = useRef(null)
	const [click, setClick] = useState(false)
	const changes = Accordion => (event, Newexpanded) => {
		setClick(Newexpanded ? Accordion : false)
	}
	const [mouseOver, setMouseOver] = useState(false)
	const moduleCardsData = [
		{
			id: 1,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/dashboard.svg?updatedAt=1673950806483&ik-s=cd60fac5f94bc6f23d56c1e2d26f3ba7bf7b0c31',
			moduleName: 'Dashboard & Reports',
			moduleDescription: `Simplified statistics ease your job in monitoring finances.Plan your growth strategy by analysing reports and keep an eye on your niche anywhere-anytime.`,
			link: 'dashboard-and-reports',
			alt: 'dashboard management for hospital, gym, saloon, spa, and clinic with lyfngo software',
		},
		{
			id: 2,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/Consultation_and_Booking.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674040227471',
			moduleName: 'Consultation & Facility Booking',
			moduleDescription:
				'Booking a consultation or facility is now made easy with LYFnGO. Sit back and enjoy the facilities of your interest and requirement. From clinical to special care centers, from sports to wellness.',
			link: 'consultation-and-facility',
		},
		{
			id: 3,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/whatsappbot.svg?updatedAt=1673951120786&ik-s=31d78b7353bb7702bc110953a35e0a779eff2abf',
			moduleName: 'Online Consult & WhatsApp Bot',
			moduleDescription:
				'Consultation in the comfort of your own space. LYFnGO brings you the latest technology in the field of consultation. Interact with customers at your convenience using integrated WhatsApp chat.',
			link: 'whatsapp-bot',
		},

		{
			id: 4,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/SVG_EMR_IMAGE.svg?updatedAt=1673951281133&ik-s=81b569a467d70443e70c5d3724e7745ccb9491eb',
			moduleName: 'EMR',
			moduleDescription:
				'Reports and data on the go. Access it anywhere-anytime. An easy-to-use application to handle all the data and past notes. Connect with coordinating specialists and share clinical notes.',
			link: 'emr-billing',
		},
		{
			id: 5,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/integration.svg?updatedAt=1673955642120&ik-s=03be1364bb50c0158bc711e4df0241130c1ee6bb',
			moduleName: 'Integration & Marketplace',
			moduleDescription:
				'Integrated payment and accounting software to make your work all the easier, and more relaxed. Explore online stores like woo commerce and increase your revenue.',
			link: 'integration',
		},
	]

	const SliderData = [
		{
			id: 1,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/home_service.svg?updatedAt=1673957959121&ik-s=d975225ef57332fdf3a7ec4de6e51839ec1a868c',
			name: 'Home care services',
			description: 'At-home services for the elderly, without moving them out of their comfort zones.',
			bgColor: 'rgb(0, 149, 235,0.6)',
			cardBg: '#E5F4FD',
			alt: 'clinic and therapy with lyfngo free trial software near me',
		},
		{
			id: 2,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/clinical_services.svg?updatedAt=1673957879352&ik-s=170010690a5f9a8d0c045d82e8f4fef2f7718104',
			name: 'Clinical services',
			description: `Clinical management - all in one place, making it easy for you to run the clinic hassle-free.`,
			bgColor: 'rgb(0, 149, 235,0.6)',
			cardBg: '#E5F4FD',
			alt: 'push-ups and bench press lyfngo image near me',
		},

		{
			id: 3,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/fitness.svg?updatedAt=1673957879511&ik-s=10968c401b8fe16dbc4fb67babb32846ce0e194b',
			name: 'Gym & fitness center',
			description: 'A powerful engine to grow your business center',
			bgColor: 'rgb(128, 87, 250, 0.6)',
			cardBg: '#F2EEFE',
		},
		{
			id: 4,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/wellness.svg?updatedAt=1673957879322&ik-s=b46fa8000fe81c11c246c93856240ddfb630071f',
			name: 'Wellness & therapy',
			description: 'Trendy business, more customers. Increase your customers and business the smart way.',
			bgColor: 'rgb(0, 191, 127, 0.6)',
			cardBg: '#E7F9F4',
		},

		{
			id: 5,
			imgAddress:
				'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/multi_sports.svg?updatedAt=1673957879922&ik-s=2b7859f96383e829f45e2dbeda87bc7b8cbf8e79',
			name: 'Multi sports Center',
			description: 'Oversee your business from one platform and expand your branches far and wide.',
			bgColor: 'rgb(229, 82, 23, 0.6)',
			cardBg: '#FCEEE8',
		},
	]
	return (
		<>
			<div className={classes.root}>
				<div className={classes.container}>
					<FadeVariant>
						<div className={classes.sectionOne}>
							<div className={classes.sectionOneContainer}>
								<Typography variant='h3'>An amazingly precise management solution to manage your customers.</Typography>
								<Typography variant='subtitle1'>
									LYFnGO simplifies and provides professionals with automated practice management solutions so they can focus on uninterrupted
									treatment and care.
								</Typography>
								<Button variant='contained' onClick={flashLink}>
									Start Free Trial
								</Button>
							</div>
						</div>
					</FadeVariant>
					<div className={classes.bannerImg}>
						<img
							src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/Service_animation.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673948456708'
							alt='module icon'
							width={'100%'}
							height={'100%'}
						/>
					</div>
					<PageFadeEffect>
						<div className={classes.sectionFour}>
							<div className={classes.sectionFourHeading}>
								<Typography variant='h3'>
									<span>Your smart work</span> partner
								</Typography>
								<Typography variant='h5'>We can render our help if you are into:</Typography>
							</div>
							<div className={classes.sectionFourSliderContainer}>
								{SliderData?.map(item => (
									<div className={classes.slidingcard} style={{background: item?.cardBg}}>
										<div className={{...classes.slidingcardImageBox}}>
											<img src={item?.imgAddress} alt={`${item?.alt} icon`} className={classes.groupImages} />
										</div>
										<div className={classes.slidingcardContent} style={{background: item?.bgColor}}>
											<Typography variant='h5'>{item?.name}</Typography>
											<Typography variant='subtitle1'>{item?.description} </Typography>
										</div>
									</div>
								))}
							</div>
						</div>
					</PageFadeEffect>
					<PageFadeEffect>
						<div className={classes.modulesHeader}>
							<Typography variant='h3'>
								Explore the <span>features</span>
							</Typography>
							<Typography variant='h5'>We allow you to focus better on your job - taking care of clients.</Typography>
						</div>
						<div className={classes.availableModules}>
							{moduleCardsData?.map((data, id) => {
								return (
									<div
										key={data?.id}
										className={classes.moduleCard}
										onClick={() => {
											router.push(`/${data?.link}`)
										}}>
										<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
											<Image src={data?.imgAddress} alt={`${data?.alt} icon`} width={150} height={130} />
										</div>
										<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
											<Typography variant='h5' align='center'>
												{data?.moduleName}
											</Typography>
											<Button
												variant='text'
												onClick={() => {
													router.push(`/${data?.link}`)
												}}>
												<ArrowCircleRightOutlined />
											</Button>
										</div>
										<Typography variant='subtitle1'>{data?.moduleDescription} </Typography>
									</div>
								)
							})}
						</div>
					</PageFadeEffect>
					<PageFadeEffect>
						<div className={classes.faqsection}>
							<Typography variant='h3'>Frequently asked questions</Typography>
							<div style={{marginBlock: 12}}>
								<Accordion expanded={click === 'panel1'} onChange={changes('panel1')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											1. Does <span>the free trial period</span> give me access to all the features, and do I need to provide any payment information
											beforehand to start the trial period?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											We offer a <span>14-day agreement free trial period</span> to explore the software. You can sign up without providing payment
											details and get a hands-on experience by using the site. It helps you to understand, what you and your customers can benefit
											from joining us. Getting started only takes a few moments, and we assure you of our support at every step.{' '}
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel2'} onChange={changes('panel2')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											2. Is it possible to <span>switch plans</span>, and how?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											<span>Yes</span>, you can switch plans whenever you wish. Log in to your account or contact our support team for the same.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel3'} onChange={changes('panel3')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											3. Is there a <span>contract or bond</span> while becoming a member of LYFnGO?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											There is <span>no contract or bond</span>. No strings attached. You can pay six monthly or yearly according to the plans. If you
											need assistance, please feel free to, contact our sales team for a better understanding of the plans and benefits.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel4'} onChange={changes('panel4')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											4. What is the <span>security</span> of my and the customer’s data? Will it be safe and private?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											Your data is only yours.<span>It has just one owner -YOU</span>. It is encrypted end-to-end. We cannot use, sell or disclose
											your data to any third party or for commercial gains. All our plans include ISO 27001 and HIPPA to keep your{' '}
											<span>data safe</span>.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel5'} onChange={changes('panel5')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											5. My data is huge and saved in different formats and files. How do I <span>configure the data ?</span>
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											You can <span>import data</span> of your customers and members at any point of time. Log in to your account settings, and use
											the import feature to configure them. Our team can also support you in the process.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel6'} onChange={changes('panel6')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											6. I would like to have <span>customized</span> prescription and billing formats for my customers. Is it possible?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											<span>Yes, definitely</span>. You can add, delete or alter the prescription or billing formats according to your work. We can
											help you in help you in setting up customized formats.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel7'} onChange={changes('panel7')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											7. Is the <span>portal accessible from anywhere</span> other than the registered device or location?
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant='subtitle1' className={classes.accordion}>
											LYFnGO can be <span>accessed, from anywhere anytime</span>, and on any device. We have the widely used and latest two-way user
											interface applications and OTP enabling integrated into the system.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel8'} onChange={changes('panel8')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											8. Will it take too long to learn the system, and what <span>support</span> is available?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											Simplified and easy to use is the heart of our system. We understand the pain it takes to maintain your records on paper. And
											hence we have incorporated every detail in our paperless system in a simple way. You can understand and{' '}
											<span>get used to them in a few clicks.</span>
											<br />
											Our customer service, available <span>24/7</span>, will demonstrate and walk you through it, till you have an upper hand. Our
											team can also <span>train your staf</span>f to use the application.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel9'} onChange={changes('panel9')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											9. Is your application <span>updated regularly?</span>
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											<span>Yes</span>, our team updates the application which includes new and latest integrations. These updates are communicated to
											you through you through proper channels.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel10'} onChange={changes('panel10')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											10. I am already using a different application and would like to <span>migrate</span> to LYFnGO. Will your team help me with the
											migration?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											<span>Yes</span>, our sales and support team will help you with the migration.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel11'} onChange={changes('panel11')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											11. Are there any <span>hidden costs?</span>
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											<span>No, there are no hidden charges</span>. Add-ons can be purchased separately by the client.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel12'} onChange={changes('panel12')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											12. Who are <span>we</span>?
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											We are the LYFnGO team - <span>your smart business partner.</span> <br />
											We help you grow your practice effortlessly and paperless, big or small.
											<br />
											We have designed our application to meet the demands of new-age practitioners. It’s digital – It’s easy.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={click === 'panel13'} onChange={changes('panel13')}>
									<AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography variant='subtitle1'>
											13. What do <span>we have for you?</span>
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.accordion}>
										<Typography variant='subtitle1'>
											LYFnGO gives you <span>end-to-end digital solutions</span> for managing your work. Simple yet straightforward data
											visualizations, adaptable and personalized record arrangement.
											<br />
											Online and WhatsApp consultation, current payment, and inventory management system with <span>24/7 customer service.</span>
										</Typography>
									</AccordionDetails>
								</Accordion>
							</div>
						</div>
					</PageFadeEffect>
				</div>
			</div>
		</>
	)
}

export default ExplorePage
