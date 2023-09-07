import {Skeleton} from '@material-ui/lab'
import React from 'react'
import CardMonth from '../../../../../components/CardMonth'
import ReorderButton from '../../../../../components/ReorderButton'

export default function Loader({classes}) {
	return _.range(7).map(item => (
		<div className={classes.ordercardsubposition}>
			<CardMonth>
				<Skeleton width='100%' height={40} />
			</CardMonth>
			<div className={classes.ordercarddetails}>
				<div className={classes.textmaincontent} onClick={() => router.push({pathname: '/myaccount/orderdetails', query: {uuid: item?.custOrderUuid}})}>
					{/* <Typography>{item?.itemName}</Typography>
					<Typography>
						<span
							style={{
								fontWeight: 'bolder',
								fontFamily: 'Roboto',
							}}>
							&#8377;
						</span>
						{item.totalAmount}
					</Typography> */}
					<Skeleton width='100%' height={40} />
				</div>
				<div className={classes.buttonalignment}>
					{/* <Typography className={classes.carddetailsPosition} style={{color: '#3D4756', background: '#FF9C0026'}}>
						{item.orderProcessStatus}
					</Typography>
					<ReorderButton onClick={reorderData()}>Re-order</ReorderButton> */}
					<Skeleton width='100%' height={40} />
				</div>
			</div>
		</div>
	))
}
