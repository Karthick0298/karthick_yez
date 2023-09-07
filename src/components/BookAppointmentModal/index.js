import React, {useEffect, useState, useCallback} from 'react'
import Image from 'next/image'
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import AppiontmentButton from '../RescheduleAppiontmentButton'
import {Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Information from '../../model/AppointmentDetails/data'
import AppointmentSlot from '../AppointmentSlotPicker'
import DateButton from '../DateTimeButton'
import ButtonGradient from '../GradientButton'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import ScheduleIcon from '@material-ui/icons/Schedule'
import BookAppointmentSlot from '../AppointmentSlotModal'
import AppointmentModalTab from '../../components/AppointmentModalTab'
import BookButton from '../../components/GradientButton'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import BookingAppointmentApi from '../../../Service/AppointmentBooking/BookingAppointment'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import {ToastContainer, toast} from 'react-toastify'
import SignUpEntry from '../Authentication/SignUpEntry'
import useAuth from '../../../lib/Utils/hooks/UseAuth'
import _ from 'lodash'
import AddCartApi from '../../../Service/ChatBot/AddCart'
import {csrf} from '../../../lib/Utils/csrf'

const useStyles = makeStyles(theme => ({
	borderColor: {
		border: 'none',
		background: 'none',
	},

	buttonList: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		'& .MuiButton-root': {
			background: '#00B592',
			color: '#fff',
			'& .MuiTypography-h5': {
				color: '#fff',
			},
			'& .MuiSvgIcon-root': {
				width: '0.7em',
			},
		},
	},
	buttonContain: {
		display: 'flex',
		justifyContent: 'center',
	},
	appointmenbelow: {
		// display: 'flex',
		justifyContent: 'space-between',
		paddingInline: 32,
		backgroundColor: '#00000026',
		paddingBlock: 24,
		borderRadius: 12,
	},
	amountsession: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		fontSize: theme.typography.h4.fontSize,
		paddingBlockEnd: 12,
	},
	amountsub: {
		display: 'flex',
		gap: 4,
		alignItems: 'center',
		fontWeight: 600,
		fontSize: theme.typography.body1.fontSize,
	},
	appointmentmain: {
		'@global': {
			'::-webkit-scrollbar': {
				width: 5,
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: '#757575cc',
				borderRadius: 50,
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: '#757575cc',
			},
		},
		'& .MuiDialog-paperScrollPaper': {
			maxHeight: 'calc(100% - 164px)',
			borderRadius: 16,
		},
		'& .MuiDialogActions-root': {
			display: 'block',
		},
		'& .MuiDialogTitle-root': {
			paddingBlock: 16,
			padding: '0px 0px',
		},
		'& .MuiDialog-paperWidthSm': {
			maxWidth: 469,
		},
	},
	bookButton: {
		display: 'flex',
		justifyContent: 'space-evenly',
		'& .MuiButton-contained.Mui-disabled': {
			background: 'rgb(0 0 0 / 8%)',
		},
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function BookAppoinmentModal({open, handleClose, availableData, tentId, tentUserId, setOpenModal}) {
	const classes = useStyles()
	const {dateContext, dayContext, availState, time, state, value, tabList, apptPrice} = useContextApi()
	const {token} = useAuth()
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const [openDialogSigning, setOpenDialogSignin] = React.useState(false)

	const tentIdCal = tentId
	const tentUserIdCal = tentUserId

	const handlClosePopup = () => {
		setOpenDialogSignin(false)
	}

	const slotData = availState
	const currentDay = dayContext
	const isAuth = !!token

	const [apptId, setApptId] = useState('')
	const [cartId, setCartId] = useState('')
	const cusBooking = () => {
		if (isAuth === true) {
			const body = {
				custId: secureLocalStorage.getItem('userId'),
				tentUserId: tentUserIdCal,
				tentId: state,
				apptCatId: '',
				scheduledOn: dateContext,
				scheduledTime: time,
				scheduledPeriod: '15',
				scheduledPeriodType: 'Mins',
				notes: 'notes',
				onOff: value,
				plannedProcedure: '',
			}
			// setLoading(true)
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					// setLoading(false)
					setOpenModal(false)
					setApptId(res?.data?.data?.appointmentUuid)
					// toast.success(<Typography variant='h5'>Your Appointment has been Confirmed</Typography>)
				} else {
					// toast.error(<Typography variant='h5'>Invalid Appointment or Appointment Closed</Typography>)
				}
			}
			const onFailure = err => {
				console.log('Appointment failure', err)
			}
			BookingAppointmentApi.BookingAppointment(body).then(onSuccess, onFailure)
		} else {
			setOpenDialogSignin(true)
		}
	}

	//Add to cart
	const AddtoCart = () => {
		if (isAuth === true) {
			const body = {
				custId: userId,
				appointmentId: apptId,
				qty: 1,
				discountPrice: 0,
				price: apptPrice,
				taxAmount: 0,
			}
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					// toast.success(<Typography variant='h5'>Cart Added</Typography>)
					setCartId(res?.data?.data?.custCartUuid)
				} else {
					// toast.error(<Typography variant='h5'></Typography>)
					setCartId([])
				}
			}
			const onFailure = err => {
				console.log('Appointment failure', err)
			}
			AddCartApi.AddCart(body).then(onSuccess, onFailure)
		} else {
			setOpenDialogSignin(true)
		}
	}
	useEffect(() => {
		if (apptId) {
			AddtoCart()
		}
	}, [apptId])

	function loadScript(src) {
		return new Promise(resolve => {
			const script = document.createElement('script')
			script.src = src
			script.onload = () => {
				resolve(true)
			}
			script.onerror = () => {
				resolve(false)
			}
			document.body.appendChild(script)
		})
	}
	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const headers = {
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': 'true',
			Authorization: typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null,
			withCredentials: false,
		}

		const body = {
			amount: apptPrice,
			cartIds: [cartId],
			currency: 'INR',
			gwName: 'RAZOR',
			productInfo: 'appointment',
			subscriptionMode: 'B2C',
			userUuid: userId,
		}
		const result = await axios.post('https://sit.rigelsoft.com:8443/services/payment/payment/proceedPayment', body, {
			headers: {...headers, 'X-SECURITY': csrf()},
		})

		if (!result) {
			alert('Server error. Are you online?')
			return
		}

		const {amount, orderId, currency} = result?.data?.data

		const options = {
			key: 'rzp_test_ObS2Wh8U7gMHQP',
			amount: amount.toString(),
			currency: currency,
			name: 'LFYnGO',
			description: 'Test Transaction',
			// image: {logo},
			order_id: orderId,
			handler: async function(response) {
				const data = {
					amount: currency,
					paymentId: response.razorpay_payment_id,
					orderId: response.razorpay_order_id,
					payment_source: 'RAZOR',
					signature: response.razorpay_signature,
					subscriptionMode: 'B2C',
				}

				const result = await axios.post('https://sit.rigelsoft.com:8443/services/payment/payment/paymentResponse', data, {
					headers: {...headers, 'X-SECURITY': csrf()},
				})
				if (result) {
					return <>{toast.success(<Typography variant='h5'>Appointment has been confirmed</Typography>)}</>
				} else {
					return <>{toast.error(<Typography variant='h5'>Appointment Closed or Invalid Appointment</Typography>)}</>
				}
			},
			prefill: {
				name: 'Karthick',
				email: 'Karthick@example.com',
				contact: '7639064648',
			},
			notes: {
				address: 'Coimbatore',
			},
			theme: {
				color: '#61dafb',
			},
		}

		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	useEffect(() => {
		if (cartId) {
			displayRazorpay()
		}
	}, [cartId])

	return (
		<>
			<div>
				<Dialog open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title' className={classes.appointmentmain}>
					<DialogTitle>
						<AppointmentModalTab availableData={availableData} tentId={tentId} tentUserId={tentUserId} />
					</DialogTitle>
					<DialogActions>
						<div className={classes.appointmenbelow}>
							<div className={classes.amountsession}>
								<Typography variant='h5' className={classes.amountsub}>
									<span
										style={{
											fontWeight: 'bolder',
											fontFamily: 'Roboto',
										}}>
										&#8377;
									</span>
									100
								</Typography>
								<Typography variant='h6' className={classes.amounttext}>
									View Payment Breakup
								</Typography>
							</div>
							<div className={classes.bookButton}>
								<BookButton
									findMorebtn={classes.findMorebtn}
									onClick={() => cusBooking()}
									disabled={_.isEmpty(tabList) ? _.isEmpty(tabList) : _.isEmpty(time)}>
									Book with pay
								</BookButton>
								<BookButton
									findMorebtn={classes.findMorebtn}
									onClick={() => cusBooking()}
									disabled={value === 1 ? value === 1 : _.isEmpty(tabList) ? _.isEmpty(tabList) : _.isEmpty(time)}>
									Book Now
								</BookButton>
							</div>
						</div>
					</DialogActions>
				</Dialog>
				<SignUpEntry handleClosePopup={handlClosePopup} openDialogSigning={openDialogSigning} />
			</div>
			<>{/* <ToastContainer style={{transform: 'translateY(50px)'}} /> */}</>
		</>
	)
}
