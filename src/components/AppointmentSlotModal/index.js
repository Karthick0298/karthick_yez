import React from 'react'
import Image from 'next/image'
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
}))

export default function BookAppoinmentModal() {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<div>
			<button className={classes.borderColor} type='button' onClick={handleOpen}>
				<ButtonGradient>Confirm </ButtonGradient>
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
					timeout: 0,
				}}>
				<Fade in={open}>
					<>
						<div className={classes.paper}>
							{Information.map(content => (
								<div key={content.id}>
									<div className={classes.headCont}>
										<Typography variant='h5'>PICK A TIME SLOT</Typography>
										<CloseIcon onClick={handleClose} />
									</div>
									<div className={classes.contList}>
										<div className={classes.doctorName}>
											<Typography variant='h5'>Specialist</Typography>
											<Typography variant='h5'>{content.doctorname}</Typography>
										</div>
										{/* <div className={classes.buttonList}>
											<DateButton>
												<CalendarTodayIcon />
												<Typography variant='h5'>{content.date}</Typography>
											</DateButton>
											<DateButton>
												<ScheduleIcon />
												<Typography variant='h5'>{content.time}</Typography>
											</DateButton>
										</div> */}
									</div>
									{/* <AppointmentSlot /> */}
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
