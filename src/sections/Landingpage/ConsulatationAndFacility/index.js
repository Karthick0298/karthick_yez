import {makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import LandingFooter from '../../../components/LandingFooter'
import Header from '../../LandingPageHeader'
import FadeVariant from '../../../components/FramerMotion/PageFade'
import PageFadeEffect from '../../../components/FramerMotion/PageFadeEffect'
import PageFadeHorizondal from '../../../components/FramerMotion/PageFadeHorizondal'
import WhatsAppBot from '../WhatsAppBot'
import LottiePlayerForStaticPages from '../../../components/LottiePlayerForStaticPages'
import ConsulationJSON from '../../../../public/lottieFiles/staticPagesLottie/consultation.json'
import appointmentBookingJSON from '../../../../public/lottieFiles/staticPagesLottie/appointment booking.json'
import addAppointmentJSON from '../../../../public/lottieFiles/staticPagesLottie/add appointment.json'
import addRemainderJSON from '../../../../public/lottieFiles/staticPagesLottie/add remainder.json'
import addDetailsJSON from '../../../../public/lottieFiles/staticPagesLottie/appointment details.json'
import facilityBookingJSON from '../../../../public/lottieFiles/staticPagesLottie/facility_booking.json'

const useStyles = makeStyles(theme => ({
	baseRoot: {
		background: '#FFFFFF',
	},
	maxWidthControl: {
		maxWidth: 1320,
		margin: '0px auto',
		position: 'relative', // for WhatsApp Bot
		[theme.breakpoints.up('xs')]: {
			paddingInline: 12,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 8,
		},

		'& .MuiTypography-subtitle1': {
			color: theme.palette.lyfngo.content1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,
			textAlign: 'justify',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
				paddingBlockStart: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
				paddingBlockStart: 26,
			},
		},
	},
	mobileModuleImage: {
		[theme.breakpoints.up('xs')]: {
			display: 'unset',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	secHeading: {
		display: 'flex',
		alignItems: 'center',
		gap: 14,
		'& .MuiTypography-h3': {
			background: theme.palette.lyfngo.gradientText,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 26,
			},
		},
	},
	normalHeading: {
		'& .MuiTypography-h3': {
			textAlign: 'left',
			color: theme.palette.lyfngo.main,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 26,
			},
		},
	},
	ellipseContainer: {
		textAlign: 'end',
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	whatsAppBot: {
		borderRadius: 8,
		position: 'sticky',
		bottom: 20,
		right: 20,
		zIndex: 1,
		height: 62,
		width: '100%',
	},

	sec1: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 38,
		},
	},
	sec11: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
			display: 'unset',
		},
	},
	sec12: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec5: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 38,
		},
	},
	sec51: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	moduleImg: {
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			justifyContent: 'center',
		},
	},
	sec7: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 28,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 68,
		},
	},
	sec71: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
			display: 'unset',
		},
	},
	sec72: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec2: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 40,
		},
	},
	sec21: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec22: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
			display: 'unset',
		},
	},
	sec3: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},
	sec31: {
		textAlign: 'center',
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
	sec6: {
		display: 'flex',
		gap: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			paddingBlockStart: 18,
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingBlockStart: 24,
		},
	},
	sec61: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
			display: 'unset',
		},
	},
	sec62: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '48%',
		},
	},
}))

const ConsulatationAndFacility = () => {
	const classes = useStyles()
	return (
		<div className={classes.baseRoot}>
			<Header />
			<div className={classes.maxWidthControl}>
				<div className={classes.ellipseContainer}>
					<Image src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/blueEllipseBall.svg'} alt='blue ball' width={270} height={72} />
				</div>

				<FadeVariant>
					<div className={classes.sec1}>
						<div className={classes.sec11}>
							{/* <Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/worldMap.svg'}
								alt='module functioning example'
								width={508}
								height={293}
							/> */}
							<LottiePlayerForStaticPages LottieFile={ConsulationJSON} width={'90%'} />
						</div>
						<div className={classes.sec12}>
							<div className={classes.secHeading}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/consultationIcon.svg'}
									alt='dashboard icon'
									width={28}
									height={28}
								/>
								<Typography variant='h3'>Consultation</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/worldMap.svg'}
									alt='module functioning example'
									width={508}
									height={293}
								/> */}
								<LottiePlayerForStaticPages LottieFile={ConsulationJSON} width={'90%'} />
							</div>
							<Typography variant='subtitle1'>
								Technology is evolving every day, and so are jobs. The authentic way of making an appointment is very familiar to all of us. But now,
								with the advancement of information technology, there is a massive shift to doing things virtually than physically. The world has
								moved from the original form of taking an appointment to <b>virtual methods.</b>
							</Typography>
						</div>
					</div>
				</FadeVariant>

				<PageFadeEffect>
					<div className={classes.sec2}>
						<div className={classes.sec21}>
							<div className={classes.normalHeading}>
								<Typography variant='h3'>Appointment Booking</Typography>
							</div>
							<div style={{textAlign: 'center'}}>
								<div className={classes.mobileModuleImage}>
									<div style={{marginBlock: 20}}></div>
									{/* <Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/calenderAppt.svg'}
										alt='module functioning example'
										width={424}
										height={374}
									/> */}
									<LottiePlayerForStaticPages LottieFile={appointmentBookingJSON} width={'90%'} />
								</div>
							</div>
							<Typography variant='subtitle1'>
								Today, <b>an appointment booking </b>is possible from anywhere in the world. Online consultation with specialists has become a
								cakewalk. Prescriptions, payments, and reports are available online.
							</Typography>
							<Typography variant='subtitle1'>
								And this is where LYFnGO offers you a <b>virtual diary or calendar</b> where every detail of an appointment is available. A reminder
								option for the specialist as well as the customer.
							</Typography>
							<Typography variant='subtitle1'>
								Making a task easier is what we believe at LYFnGO. As a result, we have <b>WhatsApp</b> integrated into our software for an{' '}
								<b>effortless approach.</b>
								The customer can book an appointment and even get reminders smoothly by sending a message through WhatsApp.
							</Typography>
						</div>
						<div className={classes.sec22}>
							{/* <Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/calenderAppt.svg'}
								alt='module functioning example'
								width={504}
								height={456}
							/> */}
							<LottiePlayerForStaticPages LottieFile={appointmentBookingJSON} width={'75%'} />
						</div>
					</div>
				</PageFadeEffect>

				<PageFadeEffect>
					<div className={classes.sec3}>
						<div className={classes.sec31}>
							<Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/CalenderApointmentBooking.svg'}
								alt='calender module functioning example'
								width={546}
								height={420}
							/>
						</div>
						<div className={classes.sec31}>
							<Typography variant='subtitle1'>
								Following is the description of the Calendar page of our website. On the <b>calendar page,</b> we provide you with a section with the
								date, so you can check if any specialist is available on the given date.
							</Typography>
							<Typography variant='subtitle1'>
								To be more precise, a specialist and category have to be selected. The category dropdown has selection like follow-ups, in-clinics or
								any specific meet-up.
							</Typography>
							<Typography variant='subtitle1'>
								One of the finest features on this page is the <b>crisp and clear</b> data of all the types of appointments. You can see the total
								number of appointments in a day, the number of waiting, engaged, completed, and missed customers of the day. It filters the above data
								according to in-person, online, and home service appointments. It can also block and send reminders to customers.
							</Typography>
						</div>
					</div>
				</PageFadeEffect>

				<div style={{overflow: 'hidden'}}>
					<PageFadeHorizondal fromNegative={true}>
						<div className={classes.sec5}>
							<div className={classes.sec51}>
								<div className={classes.moduleImg}>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/addAppointment.svg'}
										alt='module functioning example'
										width={507}
										height={255}
									/>
								</div>
								<div className={classes.normalHeading}>
									<Typography variant='h3'>Add Appointment</Typography>
								</div>
								<div className={classes.mobileModuleImage}>
									<div style={{marginBlock: 20}}></div>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/addAppointment.svg'}
										alt='module functioning example'
										width={507}
										height={255}
									/>
								</div>
								<Typography variant='subtitle1'>
									You can add an online appointment, in-person or home visit by furnishing the customer details like name, id, and contact numbers. It
									also facilitates <b>notification</b> to customers and specialist by SMS, email, and Whatsapp.
								</Typography>
							</div>
							<div className={classes.sec51}>
								<div className={classes.moduleImg}>
									{/* <Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/addReminder.svg'}
										alt='module functioning example'
										width={420}
										height={261}
									/> */}
									<LottiePlayerForStaticPages LottieFile={addRemainderJSON} width={'90%'} />
								</div>
								<div className={classes.normalHeading}>
									<Typography variant='h3'>Add Reminder</Typography>
								</div>
								<div className={classes.mobileModuleImage}>
									<div style={{marginBlock: 20}}></div>
									{/* <Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/addReminder.svg'}
										alt='module functioning example'
										width={420}
										height={261}
									/> */}
									<LottiePlayerForStaticPages LottieFile={addRemainderJSON} width={'90%'} />
								</div>
								<Typography variant='subtitle1'>
									The reminder option informs the specialist of different types of appointments during the day. It can be a follow-up visit, a new
									consultation, or any special case. It gives the option to select the reminder to remind for a short period of time or a whole day.
								</Typography>
							</div>
						</div>
					</PageFadeHorizondal>
				</div>

				<div style={{overflow: 'hidden'}}>
					<PageFadeHorizondal>
						<div className={classes.sec6}>
							<div className={classes.sec61}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/AppointmentDetails.svg'}
									alt='module functioning example'
									width={560}
									height={612}
								/>
							</div>
							<div className={classes.sec62}>
								<div className={classes.normalHeading}>
									<Typography variant='h3'>Appointment Details</Typography>
								</div>
								<div className={classes.mobileModuleImage}>
									<div style={{marginBlock: 20}}></div>
									<Image
										src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/AppointmentDetails.svg'}
										alt='module functioning example'
										width={460}
										height={512}
									/>
								</div>
								<Typography variant='subtitle1'>
									The <b>check-in</b> option shows the appointment has started, <b>engage</b>the appointment is still in progress, <b>check-out</b>
									signifies the customer has finished his appointment with the specialist, and <b>complete</b> shows that the next customer can check
									in.
								</Typography>
								<Typography variant='subtitle1'>
									This application can be used across all the health and wellness sectors. A gym, health centre, special care centre, beauty, and
									wellness centre, etc.
								</Typography>
								<Typography variant='subtitle1'>
									You have the facility to add the invoice and generate a bill soon as the appointment is completed.
								</Typography>
								<div style={{marginBlock: 30}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/ApptStepButton.svg'}
									alt='module functioning example'
									width={602}
									height={264}
								/> */}
								<LottiePlayerForStaticPages LottieFile={addDetailsJSON} width={'90%'} />
							</div>
						</div>
					</PageFadeHorizondal>
				</div>

				<PageFadeEffect>
					<div className={classes.sec7}>
						<div className={classes.sec71}>
							{/* <Image
								src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/facilityBooking.svg'}
								alt='module functioning example'
								width={419}
								height={350}
							/> */}
							<LottiePlayerForStaticPages LottieFile={facilityBookingJSON} width={'80%'} />
						</div>
						<div className={classes.sec72}>
							<div className={classes.secHeading}>
								<Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/facilityBookinIcon.svg'}
									alt='dashboard icon'
									width={28}
									height={28}
								/>
								<Typography variant='h3'>Facility booking</Typography>
							</div>
							<div className={classes.mobileModuleImage}>
								<div style={{marginBlock: 20}}></div>
								{/* <Image
									src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/facilityBooking.svg'}
									alt='module functioning example'
									width={419}
									height={350}
								/> */}
								<LottiePlayerForStaticPages loop={true} LottieFile={facilityBookingJSON} width={'90%'} />
							</div>
							<Typography variant='subtitle1'>
								We facilitate you with services beyond the medical arena. LYFnGO not only caters to specialists and customers, but we also cater to
								all the services related to health.
							</Typography>
							<Typography variant='subtitle1'>
								You have already read about the appointment procedures above. Here in the facility booking option, we extend our help in booking
								facilities like labs, scan centres,
								<b> prenatal care centres, home care centres, therapists, sports facilities, gyms, or yoga centres.</b>
							</Typography>
							<Typography variant='subtitle1'>
								A wide range of facilities to select from <b>Health Care, Wellness, Fitness and Sports.</b> Engage yourself with facilities of your
								interest and requirements.
							</Typography>
						</div>
					</div>
				</PageFadeEffect>

				<div className={classes.whatsAppBot}>
					<WhatsAppBot />
				</div>
			</div>
			<LandingFooter />
		</div>
	)
}

export default ConsulatationAndFacility
