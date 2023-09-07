import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {makeStyles} from '@material-ui/core'
import _ from 'lodash'
import proceedPayment from '../../../Service/PaymentMode/ProceedPayment'
import paymentResponse from '../../../Service/PaymentMode/PaymentResponse'
import {BeatLoader} from 'react-spinners'
import secureLocalStorage from 'react-secure-storage'

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
function RazorPay(props) {
	const {cartId, paymentDetails, callBack} = props
	const [proceedPaymentState, setProceedPayment] = useState({})

	const Loader = () => {
		return <BeatLoader size={25} loading={true} />
	}

	const LoaderOff = () => {
		return <BeatLoader size={25} loading={false} />
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
		Loader()
		const body = {
			orderUuid: paymentDetails.orderUuid,
			userUuid: paymentDetails.userUuid,
			finalAmount: paymentDetails.finalAmount,
			subscriptionMode: 'B2C',
			orderId: paymentDetails.orderId,
			gateway: 'R',
		}
		const onSuccess = result => {
			console.log('razorRes', result?.data?.data)
			LoaderOff()
			setProceedPayment(result?.data?.data)
			const {currency, orderId} = result.data.data
			console.log('proceedPaymentState', proceedPaymentState, paymentDetails.finalAmount)
			const options = {
				key: 'rzp_test_UOzsBHb8pPWbB8',
				amount: paymentDetails.finalAmount,
				currency: currency,
				name: 'LYFnGO',
				description: 'Test Transaction',
				order_id: orderId,
				handler: async function(response) {
					console.log('payRes', response)
					const body = {
						amount: paymentDetails.finalAmount,
						paymentId: response.razorpay_payment_id,
						orderId: response.razorpay_order_id,
						payment_source: 'RAZOR',
						signature: response.razorpay_signature,
						subscriptionMode: 'B2C',
						gateway: 'R',
					}
					Loader()
					const onSuccess = result => {
						LoaderOff()
						if (result.data.status === 'success') {
							callBack(result?.data)
						}
					}
					const onFailure = result => {
						LoaderOff()
						if (result.data.status === 'failure') {
							callBack('failed')
						}
					}
					paymentResponse.PaymentResponse(body).then(onSuccess, onFailure)
				},
				prefill: {
					name: secureLocalStorage.getItem('userName') || '',
					email: secureLocalStorage.getItem('emailId') || '',
					contact: secureLocalStorage.getItem('mobileNumber') || '',
				},
				theme: {
					color: '#6c7fd6',
				},
			}
			const paymentObject = new window.Razorpay(options)
			paymentObject.open()
		}
		const onFailure = result => {
			LoaderOff()
			if (!result) {
				alert('Server error. Are you online?')
				return
			}
		}
		proceedPayment.ProceedPayment(body).then(onSuccess, onFailure)
	}

	useEffect(() => {
		if (cartId) {
			displayRazorpay(proceedPaymentState)
		}
	}, [cartId])

	return <>.</>
}

export default RazorPay
