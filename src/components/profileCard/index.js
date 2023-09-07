import React, {useEffect, useState, useCallback} from 'react'
import {makeStyles, Typography, Button} from '@material-ui/core'
import {useRouter} from 'next/router'
import Profilecarddetail from '../../model/ProfileCardDetail/data'
import Image from 'next/image'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import Bookappoinment from '../GradientButton/index'
import BookAppoinmentModal from '../BookAppointmentModal'
import {ProfileUrlDetails} from '../../../lib/Utils/profileUrlImage'
import _ from 'lodash'
// import BookAppoinmentModal from '../../components/DateTimePickModal'
import HomeIcon from '@material-ui/icons/Home'
import VideocamIcon from '@material-ui/icons/Videocam'
import ButtonGradient from '../GradientButton/index'
import AvailableAppointmentApi from '../../../Service/AppointmentBooking/AvailableAppointment'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	profilecardlist: {
		display: 'flex',
		border: '0px solid',
		flexDirection: 'column',
		marginInline: 100,
		marginBottom: 12,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
			paddingInline: '0.1rem',
		},
		[theme.breakpoints.up('sm')]: {
			marginInline: 88,
			marginInlineEnd: 0,
		},
	},
	profilesection: {
		display: 'flex',
		gap: 24,
		cursor: 'pointer',
		[theme.breakpoints.down('xs')]: {
			padding: 4,
			gap: 20,
			borderBottom: '1px solid #FFFFFF80',
		},
	},
	ProfileCard: {
		display: 'flex',
		gap: 60,
		background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		paddingInline: 23,
		paddingBlock: 24,
		marginBlock: 8,
		transition: '0.8s',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 3,
			paddingBlock: 3,
			gap: 0,
			flexWrap: 'wrap',
		},
		[theme.breakpoints.up('sm')]: {
			gap: 5,
		},
	},
	Profiledetail: {
		display: 'flex',
	},
	viewprofile: {
		color: '#7047EA',
		fontSize: 14,
		fontFamily: 'sans-serif',
		cursor: 'pointer',
		textAlign: 'center',
		paddingBlockStart: 8,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	dcotorname: {
		textAlign: 'left',
		letterSpacing: 0,
		color: theme.palette.care.main,
		fontSize: theme.typography.body2.fontSize,
		fontWeight: theme.typography.h2.fontWeight,
		opacity: 1,
		[theme.breakpoints.down('xs')]: {
			fontSize: 16,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 20,
		},
	},
	experience: {
		display: 'flex',
		paddingBlockStart: 12,
		gap: 12,
		alignItems: 'center',
	},
	doctorexperience: {
		letterSpacing: 0.24,
		color: '#475677',
		opacity: 1,
		fontSize: 14,
		[theme.breakpoints.down('xs')]: {
			fontSize: 12,
		},
	},
	address: {
		display: 'flex',
		paddingBlock: 6,
		gap: 12,
		alignItems: 'center',
	},
	contact: {
		display: 'flex',
		paddingBlock: 2,
		gap: 12,
		alignItems: 'center',
	},
	review: {
		display: 'flex',
		paddingBlock: 2,
		gap: 4,
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			fill: '#1A73E8',
			cursor: 'pointer',
			[theme.breakpoints.down('xs')]: {
				height: 16,
				gap: 2,
			},
		},
		[theme.breakpoints.up('sm')]: {
			gap: 8,
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	profilereviewone: {
		letterSpacing: 0.24,
		color: '#1A73E8',
		opacity: 1,
		fontSize: 14,
		[theme.breakpoints.down('xs')]: {
			fontSize: 12,
		},
	},
	profilereviewtwo: {
		letterSpacing: 0.24,
		color: '#475677',
		opacity: 1,
		fontSize: 14,
		[theme.breakpoints.down('xs')]: {
			fontSize: 11,
		},
	},
	doctorfees: {
		display: 'flex',
		gap: 5,
	},
	pricesection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		gap: 16,
		color: theme.palette.paragraph.main,
		fontFamily: theme.palette.h5,
		'& .MuiTypography-body1': {
			display: 'flex',
			gap: 4,
		},
		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			fontSize: 20,
			display: 'flex',
			gap: 4,
			[theme.breakpoints.down('xs')]: {
				fontSize: 14,
			},
		},
		[theme.breakpoints.down('xs')]: {
			gap: 4,
			alignItems: 'flex-start',
			paddingInline: 8,
			paddingBlock: 8,
			flexBasis: '100%',
		},
	},
	pricesubsection: {
		display: 'flex',
		flexDirection: 'column',
		gap: 14,
		alignItems: 'center',
		'& .MuiButton-root': {
			borderRadius: 24,
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			justifyContent: 'space-between',
		},
	},
	procesectionsub: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'space-evenly',
		},
	},
	statussection: {
		display: 'flex',
		gap: 12,
		alignItems: 'center',
		// [theme.breakpoints.down('xs')]: {
		// 	display:'none'
		// },
	},
	statussectionmob: {
		display: 'flex',
		gap: 12,
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	availablestatus: {
		color: '#475677',
		fontSize: 14,
		[theme.breakpoints.down('xs')]: {
			fontSize: 12,
		},
	},
	doctordetail: {
		display: 'flex',
		flexDirection: 'column',
		gap: 6,
		[theme.breakpoints.down('xs')]: {
			gap: 0,
		},
	},
	availablecalendar: {
		[theme.breakpoints.down('xs')]: {
			width: 12,
			height: 12,
		},
	},
	reviewsub: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'pace-evenly',
		gap: 13,
		[theme.breakpoints.down('xs')]: {
			gap: 8,
		},
		'& .MuiTypography-h5': {
			color: '#1A73E8',
		},
	},
	viewprofilesub: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			fill: '#1A73E8',
			cursor: 'pointer',
			[theme.breakpoints.down('xs')]: {
				height: 16,
				gap: 2,
			},
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			paddingInline: 12,
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	reviewsubone: {
		color: theme.palette.paragraph.main,
		opacity: 1,
		fontSize: theme.typography.h5.fontSize,
	},
	reviewDetails: {
		'& .MuiTypography-h5': {
			color: '#475677',
		},
	},
	dataNil: {
		display: 'flex',
		justifyContent: 'center',
	},
	priceheadermode: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-around',
		'& .MuiTypography-h4': {
			color: theme.palette.paragraph.main,
			fontSize: theme.typography.h5.fontSize,
		},
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'space-around',
			fontSize: 12,
		},
	},
	availablesection: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-around',
		gap: 12,
		'& .MuiTypography-h4': {
			color: theme.palette.paragraph.main,
			fontSize: theme.typography.h5.fontSize,
		},
		'& .MuiSvgIcon-root': {
			fill: '#7047EA',
			width: '0.9em',
		},
	},
	homevisit: {
		display: 'flex',
		alignItems: 'center',
		gap: 8,
		cursor: 'pointer',
		whiteSpace: 'nowrap',
	},
	videoconsult: {
		display: 'flex',
		alignItems: 'center',
		gap: 8,
		cursor: 'pointer',
		whiteSpace: 'nowrap',
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

function ProfileCard() {
	const {date, availState, availSetState, searchData, setApptPrice} = useContextApi()
	const [loading, setLoading] = useState(false)
	const classes = useStyles()
	const router = useRouter()
	const {currency} = router.query
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
		<div className={classes.profilecardlist}>
			{!_.isEmpty(searchData) ? (
				<>
					{searchData?.map(data => (
						<div className={classes.ProfileCard} key={data?.tentUserId}>
							<div className={classes.profilesection}>
								<div>
									<Image alt='' src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/Doctorprofilepic.png'} width={143} height={143} />
									<Typography
										className={classes.viewprofile}
										onClick={() =>
											router.push({
												pathname: '/care/DoctorProfile/DoctorProfileDetails',
												query: {mastUuid: data?.mastTentUuid, uuid: data?.tentUserUuid, fees: data?.consultantionFees},
											})
										}>
										View Profile
									</Typography>
									<div className={classes.viewprofilesub}>
										<div className={classes.reviewsub}>
											<ThumbUpIcon />
											<Typography variant='h5'>{data?.feedback?.like}%</Typography>
										</div>
										<div className={classes.reviewDetails}>
											<Typography variant='h5'>({data?.feedback?.reviews} Reviews)</Typography>
										</div>
									</div>
								</div>
								<div className={classes.doctordetail}>
									<Typography variant='h5' className={classes.dcotorname}>
										{data?.tentUserFirstName}
									</Typography>
									<div className={classes.experience}>
										<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/stethoscope.svg'} alt=' ' width={27} height={25} />
										<Typography className={classes.doctorexperience}>
											{data?.specialityName} {data?.experienceYear} Years Experience Overall
										</Typography>
									</div>
									<div className={classes.address}>
										<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/location.svg'} alt=' ' width={27} height={25} />
										<Typography className={classes.doctorexperience}>
											{data?.address} {data?.tentName} {data?.pincode}
										</Typography>
									</div>
									<div className={classes.contact}>
										<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/phone.svg'} alt=' ' width={27} height={25} />
										<Typography className={classes.doctorexperience}>{data?.tentUserPhone}</Typography>
									</div>
									<div className={classes.review}>
										<div className={classes.reviewsub}>
											<ThumbUpIcon />
											<Typography variant='h5'>{data?.feedback?.like}%</Typography>
										</div>
										<div className={classes.reviewDetails}>
											<Typography variant='h5'>({data?.feedback?.reviews} Reviews)</Typography>
										</div>
									</div>
								</div>
							</div>
							<div className={classes.pricesection}>
								<div className={classes.priceheadermode}>
									<Typography variant='h4' checked={appOnline}>
										For Online
									</Typography>
									<Typography variant='h4' checked={appClinic}>
										For Clinic
									</Typography>
								</div>
								<div className={classes.procesectionsub}>
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
									|
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
								<>
									<div className={classes.pricesubsection}>
										<div className={classes.statussection}>
											<Typography className={classes.availablestatus}>Available</Typography>
										</div>
										<div className={classes.availablesection}>
											<div className={classes.homevisit}>
												<HomeIcon />
												<Typography variant='h4'>Home Visit</Typography>
											</div>
											<div className={classes.videoconsult}>
												<VideocamIcon />
												<Typography variant='h4'>video Call</Typography>
											</div>
										</div>
										<ButtonGradient
											findMorebtn={classes.findMorebtn}
											onClick={() => {
												onClickAppointment(data?.consultantionFees, data?.mastTentUuid, data?.tentUserUuid)
												// availableDoctor()
											}}>
											Book Appointment
										</ButtonGradient>
									</div>
								</>
							</div>
						</div>
					))}
				</>
			) : (
				<>
					{/* Empty Data */}
					<section style={{height: '50vh'}}>
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
		</div>
	)
}
export default ProfileCard
