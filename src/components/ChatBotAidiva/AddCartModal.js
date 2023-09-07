import {Button, Dialog, DialogContent, Grid, Typography, makeStyles, DialogTitle, Backdrop, CircularProgress} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import consultApi from '../../../Service/ConsultChat'
import RazorPay from './RazorPay'
import {DateRange, Medication, AccessTime} from '@mui/icons-material'
import clsx from 'clsx'
import moment from 'moment'
import {ToastContainer, toast} from 'react-toastify'
import secureLocalStorage from 'react-secure-storage'

export default function AddCartModal(props) {
	const [cartDetails, setCartDetails] = useState({})
	const [isRazorpayOpen, setRazorpayOpen] = useState(false)
	const [cartId, setCartId] = useState('')
	const [paymentDetails, setPaymentDetails] = useState({})
	const classes = useStyles()

	const {handleClose, open, symptomDetails, callBack, loading, setLoading} = props
	const custUuid = secureLocalStorage.getItem('custUuid')

	const addTocartDetails = () => {
		if (symptomDetails) {
			setLoading(true)
			const token = secureLocalStorage.getItem('token')
			secureLocalStorage.setItem('token', token)
			const obj = {
				custId: secureLocalStorage.getItem('custUuid'),
				b2cSubscriptionId: symptomDetails.b2cSubscriptionUuid,
				qty: '1',
				discountPrice: symptomDetails.discountPrice,
				price: symptomDetails.b2cSubscriptionMaxPrice,
				taxAmount: '0',
			}
			consultApi
				.addToCart(obj, token)
				.then(response => {
					if (response && response.data && response.data.status === 'success') {
						setCartId(response?.data?.data?.custCartUuid)
						setLoading(false)
						getCartDetails()
					}
				})
				.catch(err => {
					setLoading(false)
					toast.error(<Typography variant='h5'>Error Occured</Typography>)
					console.log(err, 'Error occured in the method addToCart')
				})
		}
	}

	console.log(loading, 'loading')

	const createOrder = () => {
		setLoading(true)
		const obj = {
			userUuid: custUuid,
			finalAmount: symptomDetails.b2cSubscriptionMaxPrice,
			currency: 'INR',
			cartUuids: [cartId],
			subscriptionMode: 'B2C',
			gateway: 'R',
		}
		consultApi.createOrder(obj).then(response => {
			if (response && response?.data && response?.data?.status === 'success') {
				setPaymentDetails(response?.data?.data)
				setRazorpayOpen(true)
				setLoading(false)
				handleClose()
			}
		})
	}

	const getCartDetails = () => {
		setLoading(true)
		consultApi.getCartDetails(custUuid, secureLocalStorage.getItem('token')).then(response => {
			if (response && response?.data && response?.data?.status === 'success') {
				setCartDetails(response?.data?.data.pop())
				setLoading(false)
			}
		})
	}

	useEffect(() => {
		addTocartDetails()
	}, [])

	return (
		<>
			{/* <ToastContainer /> */}
			<Backdrop open={loading} style={{color: 'white'}}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='scroll-dialog-title'
				className={classes.dialogAddCart}
				aria-describedby='scroll-dialog-description'
				style={{width: '100%'}}>
				<DialogTitle id='scroll-dialog-title' className={classes.dialogAppointTitle}>
					Appointment Details
				</DialogTitle>
				<DialogContent>
					<Grid container md={12} lg={12} direction='row'>
						<Grid container item md={6} lg={6} direction='column' style={{padding: '0px 15px 0px 5px'}}>
							<Grid item direction='row' className={classes.flexDirection} style={{margin: '0px 0px 20px'}}>
								<div>
									<Typography className={clsx(classes.appointSubHeading)}>Book Appointment for</Typography>
									<Typography className={clsx(classes.appointDetails)}>
										<Medication className={classes.appointIconFont} style={{color: '#7C60DC'}} />
										<span>Online Consultation</span>
									</Typography>
								</div>
								<div>
									<Typography className={clsx(classes.appointDetails)}>
										<DateRange className={classes.appointIconFont} />
										<u>On {moment(cartDetails?.createdOn).format('MMM DD,YYYY')}</u>
									</Typography>
									<Typography className={clsx(classes.appointDetails)}>
										<AccessTime className={classes.appointIconFont} />
										<u>{moment(cartDetails?.createdOn).format('hh:mm A')}</u>
									</Typography>
								</div>
							</Grid>
							<Grid item direction='column' className={classes.flexDirection}>
								<Typography className={clsx(classes.appointSubHeading)} style={{margin: '0px 0px 4px 0px'}}>
									Appointment Booking for
								</Typography>
								<Typography className={clsx(classes.appointDetails)}>{cartDetails?.b2cSubsriptionName}</Typography>
							</Grid>
							<Grid item direction='column' className={classes.notesHeadWrap}>
								<Typography className={classes.notesTxt}>Notes</Typography>
								<ol className={classes.notesList}>
									<li>{`Number of Audio Calls ${cartDetails?.noOfAc} and duration for each call ${cartDetails?.noOfAcDuration} mins`}</li>
									<li>{`Number of Video Calls ${cartDetails?.noOfVc} and duration for each call ${cartDetails?.noOfVcDuration} mins`}</li>
								</ol>
							</Grid>
							<Grid style={{margin: 'auto 10px'}} onClick={() => handleClose()}>
								<Typography style={{fontSize: '12px', color: '#7047EA', cursor: 'pointer'}}>Back to results</Typography>
							</Grid>
						</Grid>
						<Grid container item md={6} lg={6} direction='column' style={{padding: '0px 5px 0px 15px'}}>
							<Grid item direction='row'>
								<Typography className={classes.appointmentColoredHead}>Appointment For:</Typography>
							</Grid>
							<Grid item direction='row' className={clsx(classes.smallWidthBox)}>
								<Typography>{secureLocalStorage.getItem('username')}</Typography>
							</Grid>
							<Grid item direction='row' className={clsx(classes.smallWidthBox)}>
								<Typography>{secureLocalStorage.getItem('mobileNumber')}</Typography>
							</Grid>
							<>
								{secureLocalStorage.getItem('emailId') ? (
									<Grid item direction='row' className={clsx(classes.smallWidthBox)}>
										<Typography>{secureLocalStorage.getItem('emailId')}</Typography>
									</Grid>
								) : null}
							</>

							{/* <Grid item direction="row" className={clsx(classes.smallWidthBox)}>
								<Typography>Enter Email Id</Typography>
							</Grid> */}
							{/* <Grid item direction="row" className={classes.flexDirection}>
								<Typography>Appointment For:</Typography>
							</Grid> */}
							<Grid item direction='column' className={classes.payDetailHeadWrap}>
								<Typography className={classes.payDetailTxt}>Payment Details:</Typography>
								<div className={classes.detailText}>
									<Typography>Consultation fees</Typography>
									<Typography>
										{' '}
										<span>&#8377;</span>
										{cartDetails?.price}
									</Typography>
								</div>
								{/* <div className={classes.detailText}>
									<Typography>Discount Price</Typography>
									<Typography> - <span>&#8377;</span> {cartDetails?.discountPrice}</Typography>
								</div> */}
								<div className={classes.withoutBgDetailTxt}>
									<Typography>Total Payable amount:</Typography>
									<Typography style={{fontWeight: 600}}>
										{' '}
										<span>&#8377;</span> {cartDetails?.totalAmount}
									</Typography>
								</div>
							</Grid>
							<Grid
								item
								direction='row'
								className={classes.flexProceedPayment}
								onClick={() => {
									createOrder()
								}}>
								<Typography style={{color: '#FFFFFF', fontSize: '16px'}}>Proceed to Payment</Typography>
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>

			{isRazorpayOpen && <RazorPay cartId={cartId} paymentDetails={paymentDetails} callBack={callBack} />}
		</>
	)
}

const useStyles = makeStyles(theme => ({
	borderStyle: {
		border: '1px solid #000000',
		borderRadius: '21px',
	},
	p12p20: {
		padding: '12px 20px',
	},
	pb_16: {
		paddingBottom: '16px',
	},
	dialogAddCart: {
		zIndex: '9999 !important',
		'& .MuiDialog-paperWidthSm': {
			width: '70%',
			maxWidth: '100%',
		},
	},
	flexDirection: {
		display: 'flex',
		justifyContent: 'space-between',
		border: '1px solid #EEEE',
		borderRadius: '21px',
		padding: '10px 20px',
	},
	appointSubHeading: {
		color: '#475677',
		fontSize: '16px',
		fontWeight: 500,
		fontFamily: 'Poppins',
	},
	appointDetails: {
		color: '#475677',
		fontSize: '12px',
		fontWeight: 500,
		fontFamily: 'Poppins',
	},
	appointIconFont: {
		fontSize: '18px !important',
		color: '#475677',
		margin: '6px 8px -4px 0px',
	},
	appointmentColoredHead: {
		color: '#8247EA',
		fontFamily: 'Poppins',
		fontSize: '16px',
		fontWeight: 500,
	},
	smallWidthBox: {
		width: '65%',
		margin: '10px 0px 0px',
		border: '1px solid #EEEE',
		borderRadius: '15px',
		padding: '8px 20px',
		'& p': {
			color: '#475677',
			fontSize: '14px',
			fontWeight: 400,
			fontFamily: 'Source Sans Pro',
		},
	},
	payDetailHeadWrap: {
		border: '1px solid #eeeeee',
		borderRadius: '21px',
		marginTop: '20px',
	},
	payDetailTxt: {
		color: '#7047EA',
		fontSize: '16px',
		fontFamily: 'Poppins',
		padding: '10px 20px',
	},
	detailText: {
		background: '#f8f6fe',
		padding: '6px 20px',
		margin: '0px 0px 10px 0px',
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiTypography-body1': {
			fontSize: '16px',
			color: '#475677',
		},
	},
	withoutBgDetailTxt: {
		padding: '2px 20px',
		margin: '0px 0px 12px 0px',
		color: '#475677',
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiTypography-body1': {
			fontSize: '16px',
			color: '#475677',
		},
	},
	flexProceedPayment: {
		borderRadius: '21px',
		justifyContent: 'center',
		display: 'flex',
		border: '1px solid #eeeeee',
		padding: '5px 10px',
		margin: '25px 0px 15px 0px',
		background: 'transparent linear-gradient(254deg,#7047EA, #9847EA) 0% 0% no-repeat padding-box',
		color: '#FFFFFF',
		cursor: 'pointer',
	},
	dialogAppointTitle: {
		background: '#EEEE',
		padding: '10px 30px',
		marginBottom: '20px',
		'& .MuiTypography-h6': {
			fontSize: '16px',
			fontWeight: 500,
		},
	},
	notesHeadWrap: {
		padding: '10px 20px',
		border: '1px solid #eeeeee',
		borderRadius: '21px',
		marginTop: '20px',
	},
	notesTxt: {
		color: '#7047EA',
		fontSize: '16px',
		fontFamily: 'Poppins',
	},
	notesList: {
		margin: '0px',
		padding: '5px 15px',
		'& li': {
			fontSize: '14px',
			paddingBottom: '5px',
		},
	},
}))
