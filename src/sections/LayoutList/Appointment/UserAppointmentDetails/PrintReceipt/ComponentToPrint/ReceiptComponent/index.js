import React from 'react'
import {makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'
import useAuth from '../../../../../../../../lib/Utils/hooks/UseAuth'
import Image from 'next/image'
import _ from 'lodash'
import {getProfileImgUrl} from '../../../../../../../../lib/Utils/profileUrlImage'
const useStyles = makeStyles(theme => ({
	root: {
		background: '#FFFFFF',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	headerLeft: {
		display: 'flex',
		gap: 8,
		'& h3': {
			fontSize: 28,
			fontWeight: 600,
			margin: 0,
			padding: 0,
		},
	},
	headerRight: {
		display: 'flex',
		flexDirection: 'column',
	},
	printDate: {
		display: 'flex',
		flexDirection: 'column',
		width: 200,
		alignItems: 'flex-end',
		'& p': {
			fontSize: 13,
			fontWeight: 400,
			margin: 0,
			padding: 0,
		},
		'& h5': {
			fontSize: 12,
			fontWeight: 400,
			margin: 0,
			padding: 0,
		},
	},
	patientDetails: {
		'& p': {
			fontSize: 14,
			fontWeight: 400,
			margin: 0,
			padding: 0,
		},
		'& h3': {
			fontSize: 14,
			fontWeight: 600,
			margin: 0,
			padding: 0,
		},
	},
	address: {
		display: 'flex',
		flexDirection: 'column',
		'& p': {
			fontSize: 14,
			fontWeight: 600,
			margin: 0,
			padding: 0,
		},
	},
	paymentText: {
		fontSize: 14,
		paddingBlock: 4,
	},
	table: {},
	tableHead: {
		backgroundColor: '#808080',
	},
	tableCell: {
		fontSize: 14,
	},
	doctorImage: {
		display: 'flex',
		position: 'relative',
		top: 3,
		[theme.breakpoints.down('sm')]: {
			top: 0,
		},
	},
}))
const ReceiptComponent = ({ReceiptData, ListData}) => {
	const classes = useStyles()
	const current = new Date()
	const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`
	const {token, userLogo} = useAuth()
	let docDriveUuid = ListData?.tentDocDriveUuid
	return (
		<>
			<div className={classes.root}>
				<div className={classes.header}>
					<div className={classes.headerLeft}>
						{!_.isEmpty()}
						{docDriveUuid && (
							<div>
								<img src={getProfileImgUrl(docDriveUuid, token)} alt='img' style={{width: '130px', height: '100px'}} />
							</div>
						)}
						<h3>{ReceiptData?.tentName}</h3>
					</div>
					<div className={classes.headerRight}>
						<div className={classes.printDate}>
							<h5>Printed On:</h5>
							<p>{date}</p>
						</div>
						<div className={classes.address}>
							<p>{ListData?.address1 || ''}</p>
							<p>{ListData?.address2 || ''}</p>
						</div>
					</div>
				</div>
				<hr />
				<div className={classes.patientDetails}>
					<h3>{ListData?.custName}</h3>
					<p>Patient ID:{ListData?.custCustomId || '-'}</p>
					<p>
						Mobile number: {ListData?.custCountryCode || '-'} - {ListData?.custMobileNo || '-'}
					</p>
					<p>Email ID: {ListData?.custEmail || '-'}</p>
				</div>
				<hr />
				<div>
					{!_.isEmpty(ReceiptData) ? (
						<>
							<div style={{marginBottom: '12px'}}>
								<Typography className={classes.paymentText}>RECEIPT DETAILS</Typography>
								<TableContainer>
									<Table className={classes.table}>
										<TableHead className={classes.tableHead}>
											<TableRow>
												<TableCell className={classes.tableCell} align='center'>
													RECEIPT NO
												</TableCell>
												<TableCell className={classes.tableCell} align='center'>
													INVOICE NO
												</TableCell>
												<TableCell className={classes.tableCell} align='right'>
													PAID AMOUNT(₹)
												</TableCell>
												<TableCell className={classes.tableCell} align='center'>
													MODE OF PAYMENT
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell align='center' className={classes.tableCell}>
													{ReceiptData?.custPaymentNo}
												</TableCell>
												<TableCell align='center' className={classes.tableCell}>
													{ReceiptData?.custInvoiceNo}
												</TableCell>
												<TableCell align='right' className={classes.tableCell}>
													₹ {Number(ReceiptData?.paymentAmount).toFixed(2)}
												</TableCell>
												<TableCell align='center' className={classes.tableCell}>
													{ReceiptData?.paymentMode}
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</div>
						</>
					) : (
						<p>No receipt found</p>
					)}
				</div>
			</div>
		</>
	)
}

export default ReceiptComponent
