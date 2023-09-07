import React, {useState} from 'react'
import Image from 'next/image'
// import {makeStyles} from '@material-ui/core/styles'
import {Link, makeStyles} from '@material-ui/core'
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
import Carevideo from '../../model/CareVideo/data'

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
		'& .MuiSvgIcon-root': {
			fill: '#fff',
			cursor:'pointer',
		},
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
	OnlineMain: {
		display: 'flex',
		gap: 16,
		paddingBlock: 32,
		cursor:'pointer',
		// [theme.breakpoints.down('xs')]: {
		// 	display: 'none',
		// 	paddingInline: 12,
		// },
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			gap: 12,
			paddingInlineStart: 78,
		},
		[theme.breakpoints.up('md')]: {
			paddingInlineStart: 0,
		},
	},
	close: {
		display: 'flex',
		justifyContent: 'end',
		paddingBlock: 12,
		backgroundColor: '#7047EA',
		paddingInline: 12,
		borderRadius: 12,
	},
}))

export default function BookAppoinmentModal({link, image}) {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const [isShown, setIsShown] = useState(true)
	const [idcheck, setIdCheck] = useState(1)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
				<>
				<div className={classes.OnlineMain}>
					{idcheck && (
						<>
							{Carevideo.map(({id, link, image, linkone}) => (
								<Link
									key={id}
									onClick={() => {
										setIdCheck(id)
										setIsShown(true)
									}}>
									<Image src={image} width={280} height={188}
										onClick={handleOpen} />
								</Link>
							))}
						</>
					)}
				</div>
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
							{Carevideo.filter(onlineId => onlineId.id == idcheck).map(({id, link,linkone}) => (
								<div key={id} className={classes.paper}>
									<div className={classes.close}>
										<CloseIcon onClick={handleClose} />
									</div>
									<div className={classes.videosection}>
										<video controls src={link}  classsName={classes.framesection}></video>
									</div>
								</div>
							))}
						</>
					</Fade>
			</Modal>
			</>
	)
}
