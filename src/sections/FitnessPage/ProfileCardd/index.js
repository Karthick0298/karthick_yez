import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Image from 'next/image'
import GradientButton from '../../../components/GradientButton'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import HomeIcon from '@material-ui/icons/Home'
import VideocamIcon from '@material-ui/icons/Videocam'
import _ from 'lodash'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import {useRouter} from 'next/router'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import AvailableAppointmentApi from '../../../../Service/AppointmentBooking/AvailableAppointment'
import BookAppoinmentModal from '../../../components/BookAppointmentModal'

const useStyles = makeStyles(theme => ({
	cardContainer: {},
	card: {
		background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		borderRadius: 12,
		padding: 16,
		marginBlockEnd: 14,

		[theme.breakpoints.down('sm')]: {
			padding: 8,
		},
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			justifyContent: 'space-between',
		},
	},
	firstSection: {
		display: 'flex',
		gap: 14,
	},
	imageSection: {
		'& .MuiTypography-h4': {
			paddingBlockStart: 6,
			maxWidth: 120,
			textAlign: 'center',
			fontSize: 14,
			fontStyle: 'normal',
			cursor: 'pointer',
			color: theme.palette.fitness.main,
			[theme.breakpoints.down('md')]: {
				fontSize: 12,
				maxWidth: 100,
			},
		},
	},
	imageContainer: {
		[theme.breakpoints.down('sm')]: {
			height: 120,
			width: 100,
		},
	},
	profileImage: {
		borderRadius: 12,
		objectFit: 'cover',
	},
	detailsSection: {},
	name: {
		'& .MuiTypography-h3': {
			fontFamily: 'Source Sans Pro',
			fontSize: 22,
			fontWeight: 600,
			letterSpacing: 0.2,
			color: theme.palette.fitness.main,
			paddingBlockEnd: 10,
			[theme.breakpoints.down('md')]: {
				fontSize: 17,
				paddingBlockEnd: 6,
			},
		},
	},
	experience: {
		display: 'flex',
		alignItems: 'flex-start',

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			fontSize: 16,
			color: '#475677',
			paddingBlockEnd: 8,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
				paddingInlineStart: 4,
				paddingBlockEnd: 2,
			},
		},
	},
	location: {
		display: 'flex',
		alignItems: 'flex-start',

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			fontSize: 16,
			color: '#475677',
			paddingBlockEnd: 8,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
				paddingInlineStart: 4,
				paddingBlockEnd: 2,
			},
		},
	},
	phone: {
		display: 'flex',
		alignItems: 'center',

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			fontSize: 16,
			color: '#475677',
			paddingBlockEnd: 8,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
				paddingInlineStart: 4,
				paddingBlockEnd: 2,
			},
		},
	},
	review: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingInlineStart: 10,

		[theme.breakpoints.down('sm')]: {},
	},

	reviewLike: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: '#1A73E8',
			fontSize: 20,
		},

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			fontSize: 18,
			color: '#1A73E8',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	reviewStories: {
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			textDecoration: 'underline',
			fontSize: 16,
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},

	// consultSection
	consultSectionPrice: {
		[theme.breakpoints.down('sm')]: {
			marginBlockStart: 6,
		},
	},
	priceHeader: {
		display: 'flex',
		justifyContent: 'space-around',
		paddingBlockEnd: 8,
		[theme.breakpoints.down('sm')]: {
			paddingBlockEnd: 2,
		},

		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro',
			fontSize: 16,
			fontFamily: 'Source Sans Pro',
			fontStyle: 'normal',
			color: '#475677',
		},
	},
	priceNumber: {
		display: 'flex',
		justifyContent: 'space-evenly',

		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro',
			fontStyle: 'normal',
			color: '#475677',
			fontWeight: 600,

			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 17,
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: 20,
			},
			'& span': {
				marginRight: 6,
			},
		},
	},
	consultSectionAvailablity: {},
	availablity: {
		'& .MuiTypography-h5': {
			textAlign: 'center',
			fontSize: 18,
			fontStyle: 'normal',
			color: '#475677',

			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
				paddingBlock: 6,
			},
			[theme.breakpoints.up('md')]: {
				paddingBlock: 4,
			},
			[theme.breakpoints.up('lg')]: {
				paddingBlock: 14,
			},
		},
	},
	availablityOptions: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		[theme.breakpoints.up('sm')]: {
			gap: 16,
		},
	},
	homeVisit: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: theme.palette.fitness.main,
			fontSize: 20,
			marginRight: 4,
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
			},
		},

		'& .MuiTypography-h5': {
			fontSize: 16,
			color: theme.palette.fitness.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	videoConsult: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: theme.palette.fitness.main,
			fontSize: 20,
			marginRight: 4,
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
			},
		},

		'& .MuiTypography-h5': {
			fontSize: 16,
			color: theme.palette.fitness.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	buttonContainer: {
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingBlockStart: 4,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockStart: 6,
		},
		[theme.breakpoints.up('lg')]: {
			paddingBlockStart: 12,
		},
	},

	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
	secondarySection: {},
}))

export default function ProfileCardd(props) {
	const {date, availState, availSetState, setApptPrice, setLoading} = useContextApi()
	const {searchData} = props
	const classes = useStyles()
	const router = useRouter()

	const [state, setState] = useState([
		{
			appOnline: true,
			appClinic: true,
		},
	])
	const {appOnline, appClinic} = state

	const [openModal, setOpenModal] = useState(false)
	const [tentId, setTentId] = useState('')
	const [tentUserId, setTentUserId] = useState('')

	const onClickAppointment = (fees, tentId, tentUserId) => {
		setOpenModal(true)
		if (fees && tentId && tentUserId) {
			setApptPrice(fees)
			availableDoctor(tentId, tentUserId)
			setTentId(tentId)
			setTentUserId(tentUserId)
		}
	}

	//available appointment
	const availableDoctor = (tentId, tentUserId) => {
		const data = {
			tentUserId: tentUserId,
			tentId: tentId,
			date: date,
		}
		setLoading(true)
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				availSetState(res?.data?.data)
				setLoading(false)
			} else {
				availSetState([])
				setLoading(false)
			}
		}
		const onFailure = err => {
			availSetState([])
			console.log('Error', err)
		}
		AvailableAppointmentApi.AvailableAppointment(data).then(onSuccess, onFailure)
	}

	return (
		<>
			{!_.isEmpty(searchData) ? (
				<>
					{searchData?.map(data => (
						<div className={classes.cardContainer} key={data?.tentUserId}>
							<div className={classes.card}>
								<div>
									<div className={classes.firstSection}>
										<div className={classes.imageSection}>
											<div className={classes.imageContainer}>
												<Image
													src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/doctorSample.jpg'
													alt=''
													width={120}
													height={140}
													className={classes.profileImage}
												/>
											</div>
											<Typography
												variant='h4'
												onClick={() =>
													router.push({
														pathname: '/fitness/trainerProfile/TrainerProfileDetails',
														query: {mastUuid: data?.mastTentUuid, uuid: data?.tentUserUuid, fees: data?.consultantionFees},
													})
												}>
												View Profile
											</Typography>
										</div>

										<div className={classes.detailsSection}>
											<div className={classes.name}>
												<Typography variant='h3'>Mr.{data?.tentUserFirstName}</Typography>
											</div>
											<div className={classes.experience}>
												<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/stethoscope.svg'} alt='' width={24} height={24} />
												<Typography variant='h5'>
													{data?.specialityName}, {data?.experienceYear} Years Experience Overall
												</Typography>
											</div>
											<div className={classes.location}>
												<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/location.svg'} alt='' width={24} height={24} />
												<Typography variant='h5'>
													{data?.address} {data?.tentName} {data?.pincode}
												</Typography>
											</div>
											<div className={classes.phone}>
												<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/phone.svg'} alt='' width={24} height={24} />
												<Typography variant='h5'>{data?.tentUserPhone}</Typography>
											</div>
										</div>
									</div>

									<div className={classes.review}>
										<div className={classes.reviewLike}>
											<ThumbUpIcon />
											<Typography variant='h5'>{data?.feedback?.like}%</Typography>
										</div>
										<div className={classes.reviewStories}>
											<Typography variant='h5'>({data?.feedback?.reviews} Reviews)</Typography>
										</div>
									</div>
								</div>

								<div className={classes.secondarySection}>
									<div className={classes.consultSectionPrice}>
										<div className={classes.priceHeader}>
											<Typography variant='h4' checked={appClinic}>
												For Online
											</Typography>
											<Typography variant='h4' checked={appClinic}>
												For Clinic
											</Typography>
										</div>
										<div className={classes.priceNumber}>
											<Typography variant='h4'>
												<span
													style={{
														fontWeight: 'bolder',
														fontFamily: 'Roboto',
														color: '#475677',
													}}>
													&#8377;
												</span>
												{data?.consultantionFees}
											</Typography>
											<Typography variant='h4'>|</Typography>
											<Typography variant='h4'>
												<span
													style={{
														fontWeight: 'bolder',
														fontFamily: 'Roboto',
														color: '#475677',
													}}>
													&#8377;
												</span>
												{data?.consultantionFees}
											</Typography>
										</div>
									</div>
									<div className={classes.consultSectionAvailablity}>
										<div className={classes.availablity}>
											<Typography variant='h5'>Available</Typography>
										</div>
										<div className={classes.availablityOptions}>
											<div className={classes.homeVisit}>
												<HomeIcon />
												<Typography variant='h5'>Home Visit</Typography>
											</div>
											<div className={classes.videoConsult}>
												<VideocamIcon />
												<Typography variant='h5'>Video Call</Typography>
											</div>
										</div>
									</div>
									<div className={classes.buttonContainer}>
										<GradientButton
											onClick={() => {
												onClickAppointment(data?.consultantionFees, data?.mastTentUuid, data?.tentUserUuid)
											}}
											findMorebtn={classes.findMorebtn}>
											Book Appointment
										</GradientButton>
									</div>
								</div>
							</div>
						</div>
					))}
				</>
			) : (
				<>
					{/* Empty Data */}
					<section style={{height: '60vh'}}>
						<section style={{display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
							<FindInPageIcon style={{fontSize: '60px', color: 'gray'}} />
							<Typography style={{textAlign: 'center', color: 'gray', fontStyle: 'normal'}} variant='h4'>
								Oops No Search Results Found!
							</Typography>
							<Typography style={{textAlign: 'center', color: 'gray', fontStyle: 'normal'}} variant='h4'>
								Try changing filters or use general search keys!
							</Typography>
						</section>
					</section>
				</>
			)}
			<BookAppoinmentModal
				open={openModal}
				handleClose={() => {
					setOpenModal(false)
				}}
				setOpenModal={setOpenModal}
				availableData={availState}
				tentId={tentId}
				tentUserId={tentUserId}
			/>
		</>
	)
}
