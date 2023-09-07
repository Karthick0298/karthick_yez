import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Image from 'next/image'
import GradientButton from '../GradientButton'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import HomeIcon from '@material-ui/icons/Home'
import VideocamIcon from '@material-ui/icons/Videocam'
import ApartmentIcon from '@material-ui/icons/Apartment'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import {useRouter} from 'next/router'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import AvailableAppointmentApi from '../../../Service/AppointmentBooking/AvailableAppointment'
import BookAppoinmentModal from '../BookAppointmentModal'
import _ from 'lodash'
import {BeatLoader} from 'react-spinners'

const useStyles = makeStyles(theme => ({
	card: {
		background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		boxShadow: 'rgba(9, 30, 66, 0.20) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
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
		cursor: 'pointer',
	},
	imageSection: {
		'& .MuiTypography-h4': {
			paddingBlockStart: 6,
			maxWidth: 120,
			textAlign: 'center',
			fontSize: 14,
			fontStyle: 'normal',
			cursor: 'pointer',
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
			fontSize: 20,
			fontWeight: 600,
			letterSpacing: 0.2,
			paddingBlockEnd: 10,
			textTransform: 'capitalize',
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
			paddingInlineStart: 13,
			fontSize: 16,
			color: '#475677',
			paddingBlockEnd: 8,
			maxWidth: 300,

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
			maxWidth: 300,

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
		// paddingInlineStart: 10,
		marginBlockStart: 10,

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
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiBadge-badge': {
			backgroundColor: '#44b700',
			// backgroundColor: 'transparent',
		},

		'& .MuiBadge-anchorOriginTopRightRectangle': {
			top: 16,
			right: -4,
			[theme.breakpoints.down('sm')]: {
				top: 8,
			},
		},

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
				// marginBlock: 4,
			},
			[theme.breakpoints.up('lg')]: {
				paddingBlock: 14,
				// marginBlock: 14,
			},
		},
	},

	onlineGreenDot: {
		width: 10,
		height: 10,
		// borderRadius: '50%',
		background: '#36B37E',
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
		whiteSpace: 'pre',
		'& .MuiSvgIcon-root': {
			fontSize: 20,
			marginRight: 4,
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
			},
		},

		'& .MuiTypography-h5': {
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},

	buttonContainer: {
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			// paddingBlockStart: 4,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			// paddingBlockStart: 6,
			// paddingBlockStart: 26,
		},
		[theme.breakpoints.up('lg')]: {
			// paddingBlockStart: 12,
			paddingBlockStart: 22,
		},
	},
	secondarySection: {
		minWidth: '35%',
	},
}))

export default function ProfileListCard2(props) {
	const classes = useStyles()
	const router = useRouter()
	const {date, availState, availSetState, setApptPrice, loading, setLoading} = useContextApi()
	const {
		fontColor,
		professionIcon,
		btnColor,
		searchData,
		profilePrefix,
		profilePath,
		searchLoading,
		InfiniteScroll,
		fetchMoreData,
		hasMore,
		consultMethod,
		availabilityMethod,
	} = props
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
			<>
				<InfiniteScroll
					dataLength={searchData?.length}
					next={fetchMoreData}
					hasMore={hasMore}
					loader={
						// loading ? (
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<BeatLoader size={12} margin={2} color={'#24A0ED'} />
						</div>
						// ) : (
						// 	<></>
						// )
					}>
					{loading ? (
						<></>
					) : !!loading && _.isEmpty(searchData) ? (
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
					) : (
						<>
							{!_.isEmpty(searchData) &&
								searchData?.map(data => (
									<div className={classes.card} key={data?.tentUserId}>
										<div>
											<div
												onClick={() =>
													router.push({
														pathname: profilePath,
														query: {mastUuid: data?.mastTentUuid, uuid: data?.tentUserUuid},
													})
												}
												className={classes.firstSection}>
												<div className={classes.imageSection}>
													<div className={classes.imageContainer}>
														<Image
															src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'
															alt=''
															width={120}
															height={130}
															className={classes.profileImage}
														/>
													</div>
													<Typography variant='h4' style={{color: fontColor}}>
														View Profile
													</Typography>
												</div>

												<div className={classes.detailsSection}>
													<div className={classes.name}>
														<Typography variant='h3' style={{color: fontColor}}>
															{data?.tentUserSalutation}.{data?.tentUserFirstName}
														</Typography>
													</div>

													<div style={{minHeight: 96}}>
														{data?.specialityName === null && data?.experienceYear == 0 ? null : (
															<div className={classes.experience}>
																<Image src={professionIcon} alt='' width={22} height={22} />
																<Typography variant='h5'>
																	{data?.specialityName}
																	{data?.specialityName && data?.experienceYear ? ', ' : null}
																	{data?.experienceYear != 0 ? `${data?.experienceYear} Years Experience Overall` : null}
																</Typography>
															</div>
														)}
														{data?.address || data?.tentName || data?.pincode ? (
															<div className={classes.location}>
																<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/location.svg'} alt='' width={24} height={24} />
																<Typography variant='h5'>
																	{data?.address} {data?.tentName} {data?.pincode}
																</Typography>
															</div>
														) : (
															''
														)}
														{data?.tentUserPhone && (
															<div className={classes.phone}>
																<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/phone.svg'} alt='' width={24} height={24} />
																<Typography variant='h5'>{data?.tentUserPhone}</Typography>
															</div>
														)}
													</div>

													{/* New review */}
													<div className={classes.review}>
														<div className={classes.reviewLike}>
															<ThumbUpIcon />
															<Typography variant='h5'>{data?.rattingPercentage}%</Typography>
														</div>
														<div className={classes.reviewStories}>
															<Typography variant='h5'>({data?.reviewCount} Reviews)</Typography>
														</div>
													</div>
													{/* New review */}
												</div>
											</div>
										</div>

										<div className={classes.secondarySection}>
											<div className={classes.consultSectionPrice}>
												<div className={classes.priceHeader}>
													{true && (
														<Typography variant='h4' checked={appClinic}>
															{consultMethod.methodOne}
														</Typography>
													)}
													{true && (
														<Typography variant='h4' checked={appClinic}>
															{consultMethod.methodTwo}
														</Typography>
													)}
													{true && (
														<Typography variant='h4' checked={appClinic}>
															{consultMethod.methodThree}
														</Typography>
													)}
												</div>
												<div className={classes.priceNumber}>
													{true && (
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
													)}
													{/* make this below condition true for getting | symbol if second price value exists   */}
													{true && <Typography variant='h4'>|</Typography>}
													{true && (
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
													)}
													{/* make this below condition true for getting | symbol if third price value exists   */}
													{true && <Typography variant='h4'>|</Typography>}
													{true && (
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
													)}
												</div>
											</div>
											<div className={classes.consultSectionAvailablity}>
												<div className={classes.availablity}>
													<Badge variant='dot' color='primary'>
														<Typography variant='h5'>Available</Typography>
													</Badge>
												</div>
												<div className={classes.availablityOptions} style={{color: fontColor}}>
													{true && (
														<div className={classes.homeVisit}>
															<ApartmentIcon />
															<Typography variant='h5' style={{color: fontColor}}>
																{availabilityMethod.methodOne}
															</Typography>
														</div>
													)}
													{true && (
														<div className={classes.homeVisit}>
															<VideocamIcon />
															<Typography variant='h5' style={{color: fontColor}}>
																{availabilityMethod.methodTwo}
															</Typography>
														</div>
													)}
													{true && (
														<div className={classes.homeVisit}>
															<HomeIcon />
															<Typography variant='h5' style={{color: fontColor}}>
																{availabilityMethod.methodThree}
															</Typography>
														</div>
													)}
												</div>
											</div>

											<div className={classes.buttonContainer}>
												<GradientButton
													onClick={() => {
														onClickAppointment(data?.consultantionFees, data?.mastTentUuid, data?.tentUserUuid)
													}}
													findMorebtn={btnColor}>
													Book Appointment
												</GradientButton>
											</div>
										</div>
									</div>
								))}
						</>
					)}
				</InfiniteScroll>
			</>
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
