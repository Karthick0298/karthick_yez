import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {makeStyles, Typography, Button} from '@material-ui/core'
import SignUp from '../../Authentication/SignUpEntry'
import AddCartApi from '../../../../Service/ChatBot/AddCart'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import {ToastContainer, toast} from 'react-toastify'
import {csrf} from '../../../../lib/Utils/csrf'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		gap: 62,
		'& .MuiTypography-h6': {
			fontSize: 13,
		},
		'& .MuiButton-root': {
			background: '#5F41C6',
			color: '#fff',
			borderRadius: 24,
			textTransform: 'capitalize',
			paddingInline: 26,
		},
	},
	subWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
}))
function RazorPay() {
	const classes = useStyles()
	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
	const {prices, subId, specialities} = useContextApi()
	const {token} = useAuth()
	const [cartId, setCartId] = useState('')

	const [openDialogSigning, setOpenDialogSignin] = React.useState(false)
	const handlClosePopup = () => {
		setOpenDialogSignin(false)
	}
	const isAuth = !!token
	const cusBooking = () => {
		if (isAuth === true) {
			const body = {
				custId: userId,
				b2cSubscriptionId: subId,
				qty: 1,
				discountPrice: 0,
				price: prices,
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
			amount: prices,
			cartIds: [cartId],
			currency: 'INR',
			gwName: 'RAZOR',
			productInfo: specialities,
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
					amount: '299',
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
					return <>{toast.success(<Typography variant='h5'>Payment Successfull</Typography>)}</>
				} else {
					return <>{toast.error(<Typography variant='h5'>Payment Failed</Typography>)}</>
				}
				alert(result.data.status)
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
			<div className={classes.wrapper}>
				<div className={classes.Subwrapper}>
					<Typography variant='h6'>Confirm and Pay</Typography>
					<Typography variant='h6'>
						<span style={{fontWeight: 'bolder', fontFamily: 'Roboto'}}>&#8377;</span> {prices}
					</Typography>
				</div>
				<Button
					onClick={() => {
						cusBooking()
					}}>
					Pay now
				</Button>
			</div>
			<SignUp handleClosePopup={handlClosePopup} openDialogSigning={openDialogSigning} />
		</>
	)
}

export default RazorPay
