import React, {useEffect, useState} from 'react'
import {makeStyles, Button, Radio, RadioGroup, FormControl, TextField} from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Information from '../../model/AppointmentDetails/data'
import {Typography} from '@material-ui/core'
import CancelModal from '../CancelButton'
import ButtonGradient from '../GradientButton'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CancelAppointment from '../../../Service/MyAccount/CancelAppointmentList'
import CancelListPut from '../../../Service/MyAccount/CancelListPut'
import {ToastContainer, toast} from 'react-toastify'
import {useRouter} from 'next/router'
import CancelPrompt from '../../sections/LayoutList/Appointment/CancelPrompt'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		padding: 12,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		borderRadius: 14,
	},
	customButton: {
		border: 'none',
		background: 'none',
	},
	headCont: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		cursor: 'pointer',
		'& .MuiTypography-h5': {
			fontSize: 19,
			fontWeight: 500,
			color: theme.palette.paragraph.main,
		},
		'& .MuiTypography-h6': {
			fontSize: 15,
			color: theme.palette.paragraph.main,
		},
	},
	contList: {
		display: 'flex',
		flexDirection: 'column',
		paddingBlock: 10,
	},
	buttonList: {
		textAlign: 'center',
	},
	rootContent: {
		'& .MuiTypography-body1': {
			fontFamily: 'poppins',
			fontSize: 14,
			color: theme.palette.paragraph.main,
		},
	},
	checkContain: {
		paddingInlineEnd: 160,
		paddingBlock: 22,
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	cancelbtn: {
		'& .MuiButton-root': {
			minWidth: 160,
			borderRadius: 30,
			textTransform: 'none',
		},
	},
	scheduleAgainBtn: {
		borderRadius: 30,
		background: '#fff',
		textTransform: 'capitalize',
		boxShadow: 'none',
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: theme.typography.h5.fontSize,
		maxWidth: 170,
		// padding: '8px 24px',
	},
}))

export default function CancelModel({appointmentUuid, reason, disableBtn, setDisableBtn, isCancel, completedAppt}) {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [cancel, setCancel] = useState([])
	const [value, setValue] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const router = useRouter()
	const promptOpen = () => {
		setOpen(false)
		if (_.isEmpty(value)) {
			toast.warning(<Typography variant='h5'>Please select any one reason</Typography>)
		} else {
			setOpenModal(true)
		}
	}

	const handleOpen = () => {
		setOpen(true)
		CancelAppointment.CancelAppointmentList()
			.then(response => {
				const reason = value
				setCancel(response.data.data)
				secureLocalStorage.setItem('reason', reason)
			})
			.catch(err => {
				console.log(err)
			})
	}
	const cancelList = () => {
		CancelListPut.CancelListPutList(appointmentUuid)
			.then(response => {
				toast.success(<Typography variant='h5'>Appointment Cancelled</Typography>)
				setDisableBtn(true)
				// router.reload()
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<CancelModal customButton={classes.customButton} onClick={handleOpen} disabled={disableBtn || isCancel || completedAppt !== 'new'}>
				Cancel Appointment
			</CancelModal>
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
							<div className={classes.rootContent}>
								<div className={classes.headCont}>
									<Typography variant='h5'>Cancel Appointment</Typography>
									<Typography variant='h6'>Reason for cancellation</Typography>
								</div>
								<div className={classes.checkContain}>
									<FormControl component='fieldset'>
										<RadioGroup aria-label='owner' defaultValue='Establishment owner' name='deletereasonradiobutton'>
											{cancel?.map(content => {
												return (
													<FormControlLabel
														value={content?.mastLookupValue}
														onChange={(e, value) => setValue(e.target.value)}
														control={<Radio size='small' />}
														label={content?.mastLookupValue}
													/>
												)
												// <div className={classes.checkContain}>
												// 	<FormControl>
												// 		<RadioGroup aria-label='owner' defaultValue='Establishment owner' name='deletereasonradiobutton'>
												// 			<FormGroup key={content.id}>
												// 				<FormControlLabel
												// 					// value={content?.mastLookupValue}
												// 					// onChange={(e, value) => setValue(e.target.value)}
												// 					control={<Radio size='small' />}
												// 					label={content.mastLookupValue}
												// 				/>
												// 			</FormGroup>
												// 		</RadioGroup>
												// 	</FormControl>
												// 	{/* <FormGroup key={content.id}>
												// 		<FormControlLabel control={<Radio />} label={content.mastLookupValue}></FormControlLabel>
												// 	</FormGroup> */}
												// </div>
											})}
										</RadioGroup>
									</FormControl>
								</div>
							</div>
							<div style={{display: 'flex', justifyContent: 'space-evenly'}}>
								<div className={classes.cancelbtn} onClick={handleClose}>
									<Button>Cancel</Button>
								</div>

								<div className={classes.buttonList}>
									<ButtonGradient onClick={() => promptOpen()} findMorebtn={classes.findMorebtn}>
										Confirm
									</ButtonGradient>
								</div>
							</div>
						</div>
					</>
				</Fade>
			</Modal>
			{/* <ToastContainer /> */}
			<CancelPrompt
				open={openModal}
				handleClose={() => {
					setOpenModal(false)
				}}
				onClick={() => {
					cancelList()
				}}
			/>
		</div>
	)
}
