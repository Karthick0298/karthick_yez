import React, {useEffect, useState, useCallback} from 'react'
import Image from 'next/image'
import listItem from '../../../../model/AppointmentDetails/data'
import {
	Divider,
	makeStyles,
	Typography,
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	IconButton,
	Tooltip,
} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Button from '@material-ui/core/Button'
import CancelModal from '../../../../components/CancelModal'
import DateButton from '../../../../components/DateTimeButton'
import {useRouter} from 'next/router'
import RescheduleApptModal from '../../../../components/DateTimePickModal'
import AppointmentDetails from '../../../../../Service/MyAccount/AppointmentDetails'
import _ from 'lodash'
import moment from 'moment'
import ButtonGradient from '../../../../components/GradientButton'
import Link from 'next/link'
import PrintReceipt from './PrintReceipt'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'
import {getProfileImgUrl} from '../../../../../lib/Utils/profileUrlImage'

const useStyles = makeStyles(theme => ({
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		position: 'absolute',
		zIndex: '9',
		padding: 8,
		transform: 'translate(-17px,20px)',
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	root: {
		display: 'flex',
		padding: '3%',
		gap: '33%',
		cursor: 'pointer',
		'& .MuiTypography-h4': {
			color: '#707070',
			fontStyle: 'normal',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		[theme.breakpoints.down('xs')]: {
			gap: '10%',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		[theme.breakpoints.down('md')]: {
			gap: '10%',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
	},
	appointmentList: {
		display: 'flex',
		justifyContent: 'space-around',
		gap: 30,
		paddingBlock: 5,
		paddingBottom: 16,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			padding: 29,
		},
	},
	informationList: {
		display: 'flex',
		flexDirection: 'column',
		gap: 13,
	},
	appointmentDate: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBlock: 20,
		gap: 35,
	},
	hoverColor: {
		'& .MuiButton-root:hover': {
			backgroundColor: '#00B592',
		},
	},
	listContent: {
		'& .MuiTypography-h6': {
			color: '#707070',
			fontSize: theme.typography.h5.fontSize,
		},
		'& .MuiTypography-h5': {
			color: '#707070',
			fontSize: 16,
			textTransform: 'capitalize',
		},
	},
	buttonList: {
		display: 'flex',
		flexDirection: 'row',
		gap: 12,
		'& .MuiTypography-h5': {
			fontSize: theme.typography.h5.fontSize,
			textTransform: 'none',
			color: '#3D4756',
			fontWeight: 600,
		},
		'& .MuiButton-root:hover': {
			backgroundColor: '#E0EAFF',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	rootCont: {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: 20,
		paddingBlock: '3%',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 20,
			paddingInline: 7,
		},
	},
	cardColor: {
		background: '#00B59217',
		boxShadow: '0px 3px 8px #00000029',
		borderRadius: '20px',
		display: 'flex',
		alignItems: 'center',
		paddingRight: 30,
		borderRadius: 20,
		gap: 12,
		[theme.breakpoints.down('sm')]: {
			paddingRight: 10,
		},
	},
	doctorInfo: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		textTransform: 'capitalize',
		'& .MuiTypography-h6': {
			fontSize: 16,
			color: '#707070 !important',
		},
		'& .MuiTypography-h5': {
			color: '#707070 !important',
		},
	},
	doctorImage: {
		borderRadius: 12,
	},
	cardAddress: {
		background: 'aliceblue',
		display: 'flex',
		alignItems: 'center',
	},
	addressInfo: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		'& .MuiTypography-h6': {
			fontSize: 16,
			color: '#707070',
		},
		'& .MuiTypography-h5': {
			color: '#707070',
		},
	},
	splitContent: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
	},
	OrderDetailsbackground: {
		background: '#0000 0% 0% no-repeat padding-box',
		borderRadius: 14,
		opacity: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 12,
		cursor: 'pointer',
		'& .MuiSvgIcon-root': {
			fontSize: '1.5rem',
			position: 'relative',
			left: 4,
		},
		[theme.breakpoints.down('xs')]: {
			padding: 5,
		},
	},
	custEmail: {
		textTransform: 'lowercase',
		'& .MuiTypography-h6': {
			color: '#707070',
			fontSize: theme.typography.h5.fontSize,
		},
		'& .MuiTypography-h5': {
			color: '#707070',
			fontSize: 16,
		},
	},
	findMorebtn: {
		background: '#00B592',
		borderRadius: 8,
		'&:hover': {
			backgroundColor: '#00B592',
		},
	},
	tableContain: {
		'& .MuiTableCell-root': {
			padding: 8,
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: '14px',
		},
	},
	billingTableContainer: {
		paddingTop: 16,
		maxWidth: 740,
		margin: 'auto',
		[theme.breakpoints.up('1440')]: {
			maxWidth: 804,
			margin: 'auto',
		},
		[theme.breakpoints.up('1600')]: {
			maxWidth: 894,
			margin: 'auto',
		},
		[theme.breakpoints.up('1800')]: {
			maxWidth: 982,
			margin: 'auto',
		},
	},
	headColor: {
		positoin: 'relative',
		transform: 'translateX(7px)',
	},
	NodataTxt: {
		textAlign: 'center',
	},
}))
export default function Detail(props) {
	const {toggleState, setToggleState} = props
	const router = useRouter()
	const {query} = useRouter()
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)
	// const [emptylist, setEmptyList] = useState([])
	const classes = useStyles()
	const location = typeof window !== 'undefined' ? window.location.search : null
	const apptUuid = router?.query?.uuid
	const [openModal, setOpenModal] = useState(false)
	const [tentId, setTentId] = useState('')
	const [tentUserId, setTentUserId] = useState('')
	const [mode, setMode] = useState('')
	const [disableBtn, setDisableBtn] = useState(false)
	const [billingList, setBillingList] = useState([])

	const handleToggle = () => {
		setToggleState(!toggleState)
	}
	const {token, practiceName, tentUuid} = useAuth()
	const onClickAppointment = (tentId, tentUserId, appointmentTypeMode) => {
		setOpenModal(true)
		if (tentId && tentUserId && appointmentTypeMode) {
			setTentId(tentId)
			setTentUserId(tentUserId)
			setMode(appointmentTypeMode)
		}
	}

	const getUserAppointmentDetails = useCallback(() => {
		if (apptUuid) {
			setLoading(true)
			AppointmentDetails.AppointmentDetails(apptUuid, tentUuid)
				.then(response => {
					setLoading(false)
					setList(response.data)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [apptUuid, tentUuid])
	const getBilling = useCallback(
		data => {
			if (apptUuid) {
				const onSuccess = res => {
					if (res?.data?.status === 'success') {
						setBillingList(res?.data?.data?.[0]?.custPaymentGetDtoList)
					}
				}
				const onFailure = err => {}

				AppointmentDetails.BillingDetails(data).then(onSuccess, onFailure)
			}
		},
		[apptUuid]
	)
	useEffect(() => {
		getBilling(apptUuid)
		getUserAppointmentDetails(apptUuid)
	}, [apptUuid, getBilling, getUserAppointmentDetails])
	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			{!_.isEmpty(list) &&
				list?.data?.map(listItem => {
					console.log('list?.data', list?.data)
					return (
						<div key={listItem.appointmentUuid}>
							<div className={classes.root}>
								<div className={classes.OrderDetailsbackground}>
									<ArrowBackIosIcon onClick={() => router.back()} />
								</div>
								<Typography variant='h4'>Appointment Details</Typography>
							</div>
							<div className={classes.appointmentList}>
								<div className={classes.informationList}>
									<div className={classes.listContent}>
										<Typography variant='h6'>Appointment ID</Typography>
										<Typography variant='h5'>{listItem.appointmentNumber}</Typography>
									</div>
									<div className={classes.listContent}>
										<Typography variant='h6'>Patient Name</Typography>
										<Typography variant='h5'>{listItem.custName}</Typography>
									</div>
									{listItem.custEmail && (
										<div className={classes.custEmail}>
											<Typography variant='h6'>Email ID</Typography>
											<Typography variant='h5'>{listItem.custEmail}</Typography>
										</div>
									)}
									{listItem.custMobileNo && (
										<div className={classes.listContent}>
											<Typography variant='h6'>Mobile</Typography>
											<Typography variant='h5'>
												{listItem?.custCountryCode} {listItem.custMobileNo}
											</Typography>
										</div>
									)}
									<div className={classes.listContent}>
										<Typography variant='h6'>Appointment Mode</Typography>
										<Typography variant='h5'>{listItem?.appointmentMode === 'direct' ? 'In-person': listItem?.appointmentMode}</Typography>
									</div>
								</div>
								<div className={classes.appointmentDate}>
									<div className={classes.buttonList}>
										<DateButton>
											<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/date-icon.svg'} width={15} height={15} />
											<Typography variant='h5'>{moment(new Date(listItem?.scheduledOn)).format('MMM, D YYYY')}</Typography>
										</DateButton>
										<DateButton>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/time-icon.svg' width={15} height={15} />
											<Typography variant='h5'>{moment(listItem?.scheduledTime, 'HH:mm:ss').format('h:mm A')}</Typography>
										</DateButton>
									</div>
									<div className={classes.hoverColor}>
										<ButtonGradient
											disabled={listItem?.isCanceled || disableBtn || listItem?.appointmentModeStatus !== 'new'}
											findMorebtn={classes.findMorebtn}
											onClick={() => {
												onClickAppointment(listItem?.mastTentUuid, listItem?.tentUserUuid, listItem?.appointmentTypeMode)
											}}>
											Reschedule Appointment
										</ButtonGradient>
									</div>
									<CancelModal
										appointmentUuid={listItem.appointmentUuid}
										disableBtn={disableBtn}
										isCancel={listItem?.isCanceled}
										completedAppt={listItem?.appointmentModeStatus}
										setDisableBtn={setDisableBtn}
									/>
								</div>
							</div>
							<Divider style={{marginInline: 100}} />
							<div className={classes?.billingTableContainer}>
								{!_.isEmpty(billingList) ? (
									<>
										<div className={classes.headColor}>
											<Typography variant='body1'>Receipt Details</Typography>
										</div>
										<TableContainer className={classes.tableContain}>
											<Table aria-label='simple table'>
												<TableHead>
													<TableRow>
														<TableCell align='left'>Receipt no</TableCell>
														<TableCell align='right'>Invoice no</TableCell>
														<TableCell align='right'>{`Paid amount(₹)`}</TableCell>
														<TableCell align='right'>Mode of payment</TableCell>
														<TableCell align='right'></TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{billingList?.map((data, idx) => (
														<>
															<TableRow key={data?.paymentUuid} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
																<TableCell key={data.paymentUuid} align='left'>
																	{data?.custPaymentNo}
																</TableCell>
																<TableCell key={data.paymentUuid} align='right'>{` ${data?.custInvoiceNo}`}</TableCell>
																<TableCell key={data.paymentUuid} align='right'>
																	₹ {Number(data?.paymentAmount).toFixed(2)}
																</TableCell>
																<TableCell key={data.paymentUuid} align='right'>
																	{data?.paymentMode}
																</TableCell>
																<TableCell align='right'>
																	<IconButton key={data?.paymentUuid}>
																		<PrintReceipt idx={idx} ReceiptData={data} ListData={listItem} />
																	</IconButton>
																</TableCell>
															</TableRow>
														</>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</>
								) : (
									<Typography className={classes.NodataTxt}>No billings available</Typography>
								)}
							</div>

							<div className={classes.rootCont}>
								<div className={classes.cardColor}>
									<Image
										src={
											listItem.docDriveUuid
												? getProfileImgUrl(listItem.docDriveUuid, token)
												: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/doctor-image.png'
										}
										alt='doctor'
										width={150}
										height={150}
										className={classes.doctorImage}
									/>
									<div className={classes.doctorInfo}>
										<Typography variant='h6'>
											{listItem.tentUserSalutation} {listItem.tentUserFirstName}
										</Typography>
										<Typography variant='h5'>{listItem.degreeName}</Typography>
										<Typography variant='h5'>{listItem.specialization}</Typography>
									</div>
								</div>
								<div className={classes.cardColor}>
									<div>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/cogent.png' alt='care' width={134} height={150} />
									</div>
									<div className={classes.splitContent}>
										<div className={classes.addressInfo}>
											<Typography variant='h6'>{listItem.tentName}</Typography>
											<Typography variant='h5'>{listItem.address1}</Typography>
											<Typography variant='h5'>{listItem.address2}</Typography>
										</div>
										{/* <div>
											<Link href='/commingsoon'>
												<Button color='primary' style={{textTransform: 'none', padding: 0}}>
													Get Directions
												</Button>
											</Link>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					)
				})}
			<RescheduleApptModal
				open={openModal}
				handleClose={() => {
					setOpenModal(false)
				}}
				tentId={tentId}
				tentUserId={tentUserId}
				tentUuid={tentUuid}
				mode={mode}
				getUserAppointmentDetails={getUserAppointmentDetails}
				apptUuid={apptUuid}
			/>
		</>
	)
}
