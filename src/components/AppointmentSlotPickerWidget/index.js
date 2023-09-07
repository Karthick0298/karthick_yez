import React, {useEffect} from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import Slots from '../SlotsBooking'
import AppointmentSlotPicker from '../AppointmentSlotPicker'
import OutlinedGratientButton from '../OutlinedGratientButton'
import Button from '../GradientButton'
import ApppointmentTab from '../../components/AppointmentModalTab'
import BookingAppointmentApi from '../../../Service/AppointmentBooking/BookingAppointment'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import {ToastContainer, toast} from 'react-toastify'
import useAuth from '../../../lib/Utils/hooks/UseAuth'
import SignUpEntry from '../Authentication/SignUpEntry'
import _ from 'lodash'
import AddCartApi from '../../../Service/ChatBot/AddCart'
import axios from 'axios'
import {csrf} from '../../../lib/Utils/csrf'

const useStyles = makeStyles(theme => ({
	AppointmentSlotLocation: {
		background: 'transparent linear-gradient(122deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		padding: 8,
		maxWidth: 488,
		[theme.breakpoints.down('xs')]: {
			paddingBlock: 0,
			paddingInline: 14,
		},
		[theme.breakpoints.down('md')]: {
			gap: 4,
			maxWidth: 888,
		},
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		paddingBlock: 12,
		paddingInline: 0,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
		},
		'& .MuiTypography-h6': {
			fontSize: 12,
			color: '#475677',
			paddingBlock: 3,
		},
		'& .MuiTypography-h5': {
			fontSize: 16,
			color: '#475677',
		},
	},
	buttonList: {
		display: 'flex',
		flexDirection: 'row',
		paddingBlock: 12,
		gap: 14,
		'& .MuiButton-outlinedPrimary': {
			color: '#7047EA',
			border: ' 1px solid #7047EA',
		},
		'& .MuiButton-outlined': {
			padding: '3px 37px',
			[theme.breakpoints.down('sm')]: {
				padding: '5px 15px',
			},
		},
	},
	buttonCont: {
		display: 'flex',
		justifyContent: 'space-evenly',
		borderRadius: 33,
		paddingBlockEnd: 16,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'flex-end',
		},
		[theme.breakpoints.down('md')]: {
			justifyContent: 'space-evenly',
		},
		'& .MuiButton-contained.Mui-disabled': {
			background: 'rgb(0 0 0 / 8%)',
		},
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))
function AppointmentSlotPickerWidget({mastTentUuid, tentUserUuid, availableData, consultFee}) {
	const classes = useStyles()
	const {token} = useAuth()
	const {dateContext, tabList, value, state, time} = useContextApi()
	const [openDialogSigning, setOpenDialogSignin] = React.useState(false)

	const tentIdCal = mastTentUuid
	const tentUserIdCal = tentUserUuid

	const handlClosePopup = () => {
		setOpenDialogSignin(false)
	}

	const isAuth = !!token
	const [apptId, setApptId] = React.useState('')
	const [cartId, setCartId] = React.useState('')

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
				onOff: '1',
				plannedProcedure: '',
			}
			// setLoading(true)
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					// setLoading(false)
					setApptId(res?.data?.data?.appointmentUuid)
					// toast.success(<Typography variant='h5'>Appointment Booked</Typography>)
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
				custId: secureLocalStorage.getItem('userId'),
				appointmentId: apptId,
				qty: 1,
				discountPrice: 0,
				price: consultFee,
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
			amount: consultFee,
			cartIds: [cartId],
			currency: 'INR',
			gwName: 'RAZOR',
			productInfo: 'appointment',
			subscriptionMode: 'B2C',
			userUuid: secureLocalStorage.getItem('userId'),
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
			<div className={classes.AppointmentSlotLocation}>
				<ApppointmentTab mastTentUuid={mastTentUuid} tentUserUuid={tentUserIdCal} availableData1={availableData} />
				<div className={classes.buttonCont}>
					<Button findMorebtn={classes.findMorebtn} onClick={() => cusBooking()} disabled={_.isEmpty(tabList) ? _.isEmpty(tabList) : _.isEmpty(time)}>
						Book with Pay
					</Button>
					<Button
						findMorebtn={classes.findMorebtn}
						onClick={() => cusBooking()}
						disabled={value === 1 ? value === 1 : _.isEmpty(tabList) ? _.isEmpty(tabList) : _.isEmpty(time)}>
						Book Now
					</Button>
				</div>
			</div>
			<SignUpEntry handleClosePopup={handlClosePopup} openDialogSigning={openDialogSigning} />
			{/* <ToastContainer /> */}
		</>
	)
}

export default AppointmentSlotPickerWidget
