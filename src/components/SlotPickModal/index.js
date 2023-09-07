/* eslint-disable max-len */
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {makeStyles} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import {Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Information from '../../model/AppointmentDetails/data'
import SlotPick from '../SlotsBooking'
import DateButton from '../DateTimeButton'
import ButtonGradient from '../GradientButton'
import AppointmentDetails from '../../../Service/MyAccount/AppointmentDetails'
import _ from 'lodash'
import moment from 'moment'
const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		padding: 12,
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #fff',
		boxShadow: theme.shadows[5],
		borderRadius: 14,
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
		'& .makeStyles-root': {
			background: 'red',
		},
	},
	buttonContain: {
		display: 'flex',
		justifyContent: 'center',
	},
	doctorName: {
		'& .MuiTypography-h5': {
			textTransform: 'capitalize',
		},
	},
}))

export default function SlotPicker() {
	const classes = useStyles()
	const [list, setList] = useState([])
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	useEffect(() => {
		AppointmentDetails.AppointmentDetails()
			.then(response => {
				setList(response.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	return (
		<div>
			<button className={classes.borderColor} type='button' onClick={handleOpen}>
				<ButtonGradient>Confirm</ButtonGradient>
			</button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<>
						<div className={classes.paper}>
							{!_.isEmpty(list) &&
								list?.data.map(content => (
									<div key={content.id}>
										<div className={classes.headCont}>
											<Typography variant='h5'>Reschedule Appointment</Typography>
											<CloseIcon onClick={handleClose} />
										</div>
										<div className={classes.contList}>
											<div className={classes.doctorName}>
												<Typography variant='h5'>Specialist</Typography>
												<Typography variant='h5'>{content.tentUserFirstName}</Typography>
											</div>
											<div className={classes.buttonList}>
												<DateButton>
													<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/date-icon.svg' alt='date' width={15} height={15} />
													<Typography variant='h5'>{moment(new Date(content?.scheduledOn)).format('MMM, D YYYY')}</Typography>
												</DateButton>
												<DateButton>
													<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/time-icon.svg' alt='time' width={15} height={15} />
													<Typography variant='h5'>{moment(content?.scheduledTime, 'HH:mm:ss').format('h:mm A')}</Typography>
												</DateButton>
											</div>
										</div>
										<SlotPick date={content?.scheduledOn} tentUserId={content?.tentUserUuid} tentId={content?.mastTentUuid} />
										<div className={classes.buttonContain}>
											<ButtonGradient>Confirm</ButtonGradient>
										</div>
									</div>
								))}
						</div>
					</>
				</Fade>
			</Modal>
		</div>
	)
}
