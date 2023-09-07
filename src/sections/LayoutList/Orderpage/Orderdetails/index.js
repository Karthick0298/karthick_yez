import {makeStyles, Typography} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {useRouter} from 'next/router'
import orderlist from '../../../../model/OrderApoinmentPageDetails/data'
import OrderDetailsList from '../../../../../Service/MyAccount/OrderDetailsList'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	OrderMainsubPosition: {
		paddingInline: 20,
		'& .MuiTypography-subtitle1': {
			fontFamily: theme.typography.h5.fontFamily,
			fontSize: 16,
			fontWeight: 500,
			color: '#3D4756',
		},
		'& .MuiTypography-h3': {
			fontSize: 24,
			color: '#707070',
		},
		'& .MuiTypography-h5': {
			opacity: 0.8,
			[theme.breakpoints.down('xs')]: {
				paddingBlock: 6,
			},
		},
	},
	OrderidMaindetails: {
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: 25,
		[theme.breakpoints.down('xs')]: {
			paddingBottom: 0,
		},
	},
	orderdetails: {
		background: '#00B592 0% 0% no-repeat padding-box',
		padding: 7,
		borderRadius: 5,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 24,
			padding: 0,
		},
		'& .MuiTypography-h5': {
			color: '#ffff',
		},
	},
	OrderMainPosition: {
		display: 'flex',
		paddingBlock: 20,
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
	},
	OrderDetailssubPosition: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'center',
	},
	Orderiddetails: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			order: 1,
			paddingBlock: 12,
		},
		[theme.breakpoints.up('sm')]: {
			order: 0,
			flexDirection: 'column',
		},
	},
	Orderplaceddetails: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: theme.typography.h5.fontFamily,
			fontSize: 16,
			color: '#3D4756',
			fontWeight: 500,
		},
	},
	Orderbookeddetails: {
		display: 'flex',
		justifyContent: 'space-between',
		borderBottom: '1px solid #3D4756',
		borderTop: '1px solid #3D4756',
		flexDirection: 'column',
		gap: 20,
		paddingBlock: 12,
	},
	Orderbookdetails: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: 12,
	},
	amountdetails: {
		display: 'flex',
		alignItems: 'center',
	},
	productdetails: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlock: 10,
	},
	OrderidMainsubdetails: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			paddingBottom: 12,
		},
	},
	DeliveryAddress: {
		paddingBlock: 16,
		'& .MuiTypography-h5': {
			paddingBlock: 2,
			letterSpacing: '0.5px',
		},
	},
	needhelp: {
		'& .MuiTypography-h5': {
			color: '#00B592',
			fontSize: 14,
		},
	},
	Totalamount: {
		display: 'flex',
		justifyContent: 'space-between',
		borderTop: '1px dotted #70707080',
		borderBottom: '1px dotted #70707080',
		paddingBlock: 12,
	},
	Totalamountsaved: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlock: 12,
	},
	carddetailsPosition: {
		paddingInline: 12,
		paddingBlock: 8,
	},
}))

export default function Index({orderPlaced, backgroundColor, fontColor}) {
	const classes = useStyles()
	const router = useRouter()
	const [list, setList] = useState([])
	const [orderlist, setOrderList] = useState([])
	const [loading, setLoading] = useState(true)

	const location = typeof window !== 'undefined' ? window.location.search : null
	const currentUuid = location && location.split('=').pop()

	useEffect(() => {
		if (currentUuid) {
			setLoading(true)
			OrderDetailsList.OrderDetailsList(currentUuid)
				.then(response => {
					setLoading(false)
					setList(response.data)
					setOrderList(response.data.data[0])
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [currentUuid])
	// if (loading) {
	// 	return (
	// 		<div className={classes.dataNil}>
	// 			<Typography variant='h5'>Data Not Found</Typography>
	// 		</div>
	// 	)
	// }

	return (
		<div className={classes.OrderMainsubPosition}>
			{!_.isEmpty(list) &&
				list?.data.map(profilecarddetails => (
					<div style={{borderBottom: '1px solid #70707080'}}>
						<div className={classes.OrderMainPosition}>
							<div className={classes.OrderDetailsbackground}>
								<ArrowBackIosIcon onClick={() => router.back()} />
							</div>

							<div className={classes.OrderDetailssubPosition}>
								<Typography variant='h3'>Order Details</Typography>
							</div>
						</div>
						<div className={classes.OrderidMaindetails}>
							<div className={classes.OrderidMainsubdetails}>
								<div className={classes.Orderplaceddetails}>
									<div>
										<Typography variant='subtitle1'>Order id: {profilecarddetails.custOrderUuid}</Typography>
									</div>
									<div>
										<Typography
											variant='h5'
											className={classes.carddetailsPosition}
											style={{color: '#FF9C00', background: '#FFF0D9', borderRadius: 8}}>
											{profilecarddetails?.orderProcessStatus}
										</Typography>
									</div>
								</div>
								<div className={classes.Orderiddetails}>
									<div className={classes.orderdetails}>
										<Typography variant='h5'>{profilecarddetails?.processStatus}</Typography>
									</div>
									<div className={classes.needhelp}>
										<Typography variant='h5'>Need Help?</Typography>
									</div>
								</div>
							</div>
							<div>
								<Typography variant='h5'>{profilecarddetails?.orderDescription}</Typography>
							</div>
						</div>
						<div className={classes.DeliveryAddress}>
							<Typography variant='subtitle1'>Delivery Address</Typography>
							<Typography variant='subtitle1' style={{color: '#707070'}}>
								{profilecarddetails?.custName}
							</Typography>
							<Typography variant='h5' style={{color: '#707070'}}>
								{profilecarddetails?.address1}
							</Typography>
							<Typography variant='h5' style={{color: '#707070'}}>
								{profilecarddetails?.address2}
							</Typography>
							<Typography variant='h5' style={{color: '#707070'}}>
								{profilecarddetails?.address3} - <span>{profilecarddetails?.districtCode}</span>
							</Typography>
							<Typography variant='subtitle1'>Phone number</Typography>
							<Typography variant='h5' style={{color: '#707070'}}>
								{profilecarddetails?.custMobileNo}
							</Typography>
						</div>
					</div>
				))}
			<div style={{borderBottom: '1px solid #70707080', paddingBottom: 12}}>
				{!_.isEmpty(orderlist) &&
					orderlist?.orderDetail.map(orderdetailslist => (
						<div className={classes.Orderbookdetails}>
							<div>
								<div>
									<Typography variant='subtitle1'>{orderdetailslist?.itemName}</Typography>
								</div>
								<div>
									<Typography variant='h5' style={{color: '#707070'}}>
										Quantity: {orderdetailslist?.qty}
									</Typography>
								</div>
							</div>
							<div className={classes.amountdetails}>
								<Typography variant='h5'>
									<span style={{fontWeight: 'bolder', fontFamily: 'Roboto'}}>&#8377; </span>
									{orderdetailslist?.totalAmount}
								</Typography>
							</div>
						</div>
					))}
			</div>
			{!_.isEmpty(list) &&
				list?.data?.map(orderdetailslist => (
					<div>
						<div className={classes.productdetails}>
							<Typography variant='h5' style={{color: '#707070'}}>
								price({orderdetailslist?.countItems} items)
							</Typography>
							<Typography variant='h5'>
								<span style={{fontWeight: 'bolder', fontFamily: 'Roboto'}}>&#8377;</span> {orderdetailslist?.totalItemsPrice}
							</Typography>
						</div>
						<div className={classes.productdetails}>
							<Typography variant='h5' style={{color: '#707070'}}>
								Discount
							</Typography>
							<Typography variant='h5' style={{color: '#1BCE46'}}>
								<span style={{fontWeight: 'bolder', fontFamily: 'Roboto'}}>&#8377;</span> {orderdetailslist.discountAmount}
							</Typography>
						</div>
						<div className={classes.Totalamount}>
							<Typography variant='subtitle1'>Total Amount</Typography>
							<Typography variant='h5' style={{fontWeight: 600, fontFamily: 'Poppins'}}>
								<span style={{fontWeight: 'bolder', fontFamily: 'Roboto'}}>&#8377;</span> {orderdetailslist.paidAmount}
							</Typography>
						</div>
						<div className={classes.Totalamountsaved}>
							<Typography variant='h6' style={{color: '#1BCE46'}}>
								You will save <span style={{fontWeight: 500}}>&#8377;</span> {orderdetailslist.discountAmount} on this order
							</Typography>
						</div>
					</div>
				))}
		</div>
	)
}
