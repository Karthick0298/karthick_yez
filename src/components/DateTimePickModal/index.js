import Image from 'next/image'
import React, {useEffect, useState, useCallback} from 'react'
import {makeStyles, Dialog, DialogTitle, DialogActions, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import AppiontmentButton from '../RescheduleAppiontmentButton'
import AppointmentSlot from '../AppointmentSlotPicker/RescheduleAppointment/index'
import DateButton from '../DateTimeButton'
import Slot from '../SlotPickModal'
import ButtonGradient from '../GradientButton'
import AppointmentDetails from '../../../Service/MyAccount/AppointmentDetails'
import _ from 'lodash'
import moment from 'moment'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import RescheduleAppointmentApi from '../../../Service/AppointmentBooking/RescheduleAppointment/index'
import {ToastContainer, toast} from 'react-toastify'
import {useRouter} from 'next/router'
import ReschedulePrompt from '../../sections/LayoutList/Appointment/ReschedulePrompt'
import AvailableAppointmentApi from '../../../Service/AppointmentBooking/AvailableAppointment'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiDialog-paperScrollPaper': {
			maxHeight: 'calc(100% - 164px)',
			borderRadius: 16,
		},
		'& .MuiDialogTitle-root': {
			padding: '0px 0px',
			paddingBlock: 16,
			paddingInline: 10,
		},
		'& .MuiDialogActions-root': {
			display: 'block',
			paddingInlineBlock: 10,
		},
		'& .MuiDialog-paperWidthSm': {
			minWidth: '60%',
			maxWidth: '60%',
			overflowX: 'hidden',
		},
	},
	borderColor: {
		border: 'none',
		background: 'none',
	},
	headCont: {
		display: 'flex',
		gap: 24,
		cursor: 'pointer',
		justifyContent: 'space-between',
	},
	contList: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlock: 10,
	},
	buttonList: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
	},
	buttonContain: {
		display: 'flex',
		justifyContent: 'center',
		'& .MuiButton-contained.Mui-disabled': {
			background: 'rgb(0 0 0 / 18%)',
		},
	},
	doctorName: {
		'& .MuiTypography-h5': {
			textTransform: 'capitalize',
		},
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

const RescheduleApptModal = props => {
	const {open, handleClose, tentId, tentUuid, tentUserId, getUserAppointmentDetails, apptUuid, mode} = props
	const router = useRouter()
	const [loading, setLoading] = useState(true)
	const {dateContext, time, availState, availSetState, setDateContext} = useContextApi()
	const [list, setList] = useState([])
	const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
	const [day, setDay] = useState(moment().format('ddd'))
	const classes = useStyles()
	const [openModal, setOpenModal] = useState(false)
	const [state, setState] = useState('')
	const [availableApptParams, setAvailableApptParams] = useState({
		tentUserId: tentUserId,
		tentId: tentId,
		scheduledOn: date,
	})
	const [availableSlots, setAvailableSlots] = useState([])
	useEffect(() => {
		setAvailableApptParams({...availableApptParams, tentUserId: tentUserId, tentId: tentId, appointmentMode: mode})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tentUserId, tentId, mode])

	const location = typeof window !== 'undefined' ? window.location.search : null
	const currentUuid = location && location.split('=').pop()

	const slotData = availState
	const currentDay = day

	const promptOpen = () => {
		handleClose()
		setOpenModal(true)
	}
	const onDateChange = value => {
		setAvailableApptParams({...availableApptParams, scheduledOn: moment(new Date(value)).format('YYYY-MM-DD')})
		setDate(moment(new Date(value)).format('YYYY-MM-DD'))
		setDateContext(moment(new Date(value)).format('YYYY-MM-DD'))
		setDay(_.toLower(moment(new Date(value)).format('ddd')))
	}

	const availableSlot = React.useCallback(
		currentDay => {
			if (!_.isEmpty(currentDay)) {
				const slotSession = _.filter(slotData?.available, {dayOn: currentDay || 'all'})
				if (_.isEmpty(slotSession)) {
					const allSlotSession = _.filter(slotData?.available, {dayOn: 'all'})
					setState(allSlotSession || [])
				} else {
					setState(slotSession)
				}
			}
		},
		[slotData]
	)

	const getAppointmentDetails = useCallback(
		currentUuid => {
			if (currentUuid) {
				AppointmentDetails.AppointmentDetails(currentUuid, tentUuid)
					.then(response => {
						setList(response.data)
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		[tentUuid]
	)

	useEffect(() => {
		if (open) {
			getAppointmentDetails(currentUuid)
		}
	}, [currentUuid, getAppointmentDetails, open])

	const getAppointmentSlots = useCallback(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setAvailableSlots(res?.data?.data)
				availSetState(res.data.data)
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
		setLoading(true)
		availableApptParams?.tentId &&
			availableApptParams?.tentUserId &&
			AvailableAppointmentApi.AvailableAppointment({...availableApptParams}).then(onSuccess, onFailure)
		availableSlot(currentDay)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date, availableApptParams])

	useEffect(() => {
		if (open) {
			getAppointmentSlots()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date, availableApptParams, open])

	const rescheduleAppt = () => {
		const data = {
			uuid: currentUuid,
			scheduledTime: time,
			scheduledOn: dateContext,
			custMail: true,
			tentMail: true,
			custSms: true,
			tentSms: true,
		}
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				toast.success(<Typography variant='h5'>Appointment has been Rescheduled</Typography>)
				setOpenModal(false)
				getUserAppointmentDetails(apptUuid)
				// router.reload()
			} else if (res?.data?.status === 'failure') {
				toast.error(<Typography variant='h5'>Invalid Appointment or Appointment Closed</Typography>)
			}
		}
		const onFailure = err => {
			toast.error(<Typography variant='h5'>Please try after some time</Typography>)
			console.log('Appointment failure', err)
		}
		RescheduleAppointmentApi.RescheduleAppointment(data).then(onSuccess, onFailure)
	}
	return (
		<>
			<Dialog className={classes.root} open={!_.isEmpty(list) && open} onClose={handleClose}>
				<DialogTitle>
					<div className={classes.headCont}>
						<Typography variant='h5'>Reschedule Appointment</Typography>
						<CloseIcon onClick={handleClose} />
					</div>
				</DialogTitle>
				<DialogActions>
					{!_.isEmpty(list) &&
						list?.data.map(content => (
							<>
								<div className={classes.contList} key={content?.scheduledTime}>
									<div className={classes.doctorName}>
										<Typography variant='h5'>Specialist</Typography>
										<Typography variant='h5'>
											{content?.tentUserSalutation}. {content.tentUserFirstName ? content.tentUserFirstName : content.custName}
										</Typography>
									</div>
									<div className={classes.buttonList}>
										<DateButton>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/date-icon.svg' width={15} height={15} />
											<Typography variant='h5'>{moment(new Date(content?.scheduledOn)).format('MMM, D YYYY')}</Typography>
										</DateButton>
										<DateButton>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/time-icon.svg' width={15} height={15} />
											<Typography variant='h5'>{moment(content?.scheduledTime, 'HH:mm:ss').format('h:mm A')}</Typography>
										</DateButton>
									</div>
								</div>
								<AppointmentSlot
									tentId={tentId}
									tentUserId={tentUserId}
									currentDay={day}
									onDateChange={onDateChange}
									currentDate={date}
									availableData={availableSlots}
								/>
								<div className={classes.buttonContain}>
									<ButtonGradient findMorebtn={classes.findMorebtn} onClick={() => promptOpen()} disabled={_.isEmpty(time)}>
										Confirm
									</ButtonGradient>
								</div>
							</>
						))}
				</DialogActions>
			</Dialog>
			{/* <ToastContainer /> */}
			<ReschedulePrompt
				open={openModal}
				handleClose={() => {
					setOpenModal(false)
				}}
				onClick={() => {
					rescheduleAppt()
				}}
			/>
		</>
	)
}

export default RescheduleApptModal
