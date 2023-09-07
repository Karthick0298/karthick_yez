/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React, {useCallback, useEffect, useState} from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import {Autocomplete, TextField, Typography} from '@mui/material'
import {createTheme, makeStyles} from '@material-ui/core'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import {ThemeProvider} from 'styled-components'
import DateFnsUtils from '@date-io/date-fns'
import AvailableAppointmentApi from '../../../../../Service/AppointmentBooking/AvailableAppointment'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'
import moment from 'moment'
import TentUserList from '../../../../../Service/AppointmentBooking/TentList'
import ApptBooking from '../../../../../Service/AppointmentBooking/BookingAppointment/index'
import {toast, ToastContainer} from 'react-toastify'
import Image from 'next/image'
import Button from '@mui/lab/LoadingButton'
import secureLocalStorage from 'react-secure-storage'

const materialTheme = createTheme({
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: '#7047ea',
			},
		},
		MuiPickersCalendarHeader: {
			switchHeader: {
				backgroundColor: 'white',
				color: '#000',
			},
		},
		MuiPickersDay: {
			daySelected: {
				backgroundColor: '#7047ea',
			},
		},
	},
})
const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiDialog-paperWidthSm': {
			width: 430,
			borderRadius: 10,
		},
		'& .MuiAutocomplete-root': {
			marginTop: 8,
		},
	},
	btnContainer: {
		display: 'flex',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btn: {
		'& .MuiButtonBase-root': {
			border: '1px solid #000',
			borderRadius: 10,
			paddingInline: 10,
			paddingBlock: 5,
			marginInline: 10,
			background: '#fff',
			color: '#000',
			fontFamily: 'Poppins',
			textTransform: 'none',
		},
	},
	activeBtn: {
		'& .MuiButtonBase-root': {
			border: `1px solid #7C60DC`,
			borderRadius: 10,
			paddingInline: 10,
			paddingBlock: 5,
			marginInline: 10,
			background: '#7C60DC',
			color: '#fff',
			fontFamily: 'Poppins',
			textTransform: 'none',
		},
	},
	timeBtn: {
		'& .MuiButtonBase-root': {
			border: '1px solid #000',
			borderRadius: 10,
			padding: 5,
			width: 165,
			height: 35,
			// marginInline: 10,
			background: '#fff',
			color: '#000',
			fontFamily: 'Poppins',
			textTransform: 'none',
		},
	},
	activeTimeBtn: {
		'& .MuiButtonBase-root': {
			border: `1px solid #7C60DC`,
			borderRadius: 10,
			padding: 5,
			width: 165,
			height: 35,
			// marginInline: 10,
			background: '#7C60DC',
			color: '#fff',
			fontFamily: 'Poppins',
			textTransform: 'none',
		},
	},
	timeSlots: {
		display: 'flex',
		gap: 10,
		flexWrap: 'wrap',
		marginTop: 10,
		justifyContent: 'space-evenly',
		maxHeight: 150,
		maxWidth: 400,
		overflowY: 'scroll',
	},
	text: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		maxHeight: 200,
		maxWidth: 430,
	},
	saveBtn: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		marginTop: 10,
		'& .MuiButtonBase-root': {
			border: `1px solid #7C60DC`,
			borderRadius: 10,
			padding: 5,
			background: '#7C60DC',
			color: '#fff',
			fontFamily: 'Poppins',
			textTransform: 'none',
		},
		'& .Mui-disabled': {
			backgroundColor: 'rgb(0,0,0,0.26)',
			color: '#000',
			border: 'none',
		},
	},
	custField: {
		paddingBottom: 5,
	},
}))
const BookAppointment = props => {
	const classes = useStyles()
	const {tentUuid, menuListData} = useAuth()
	const { open, handleClose, setAppointmentFilter } = props
	const [custList,setCustList] =useState([])
	const AppModes = [
		{
			appKey: 0,
			modeType: 'In-Person',
			label: 'at-clinic',
		},
		{
			appKey: 1,
			modeType: 'Online',
			label: 'on-line',
		},
		{
			appKey: 2,
			modeType: 'Home Visit',
			label: 'at-home',
		},
	]
	const [activeIdx, setActiveIndex] = useState(0)
	const [modeData, setModeData] = useState(AppModes[0])
	const [specialistName, setSpecialistName] = useState(null)
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [userList, setUserList] = useState([])
	const [timeSlots, setTimeSlots] = useState([])
	const [activeTimeIdx, setActiveTimeIndex] = useState(0)
	const [apptData, setApptData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [saveAppt, setSaveAppt] = useState(false)
	useEffect(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setUserList(res?.data?.data)
			}
		}
		const onFailure = () => {
			setUserList([])
		}
		open && TentUserList.tentUserList({tentId: tentUuid}).then(onSuccess, onFailure)
	}, [open, tentUuid])

	useEffect(() => {
		if (specialistName !== null) {
			setLoading(true)
			const data = {
				appointmentMode: modeData?.label,
				tentUserId: specialistName?.tentUserUuid,
				tentId: tentUuid,
				scheduledOn: moment(selectedDate).format('YYYY-MM-DD'),
			}
			const onSuccess = res => {
				setLoading(false)
				if (res?.data?.status === 'success') {
					setTimeSlots(res?.data?.data)
					setApptData(res?.data?.data[0])
				}
			}
			const onFailure = err => {
				setLoading(false)
				setTimeSlots([])
			}
			open && AvailableAppointmentApi.AvailableAppointment({...data}).then(onSuccess, onFailure)
		}
	}, [open, tentUuid, selectedDate, modeData, specialistName])
	const handleCloseDialog = () => {
		setTimeSlots([])
		setUserList([])
		setActiveTimeIndex(0)
		setModeData(AppModes[0])
		setCustomerName(null)
		setActiveIndex(0)
		setSpecialistName(null)
		setSelectedDate(new Date())
		handleClose()
	}
	const saveAppointment = () => {
		setSaveAppt(true)
		const body = {
			custId: customerName?.custUuid,
			tentUserId: specialistName?.tentUserUuid,
			tentId: tentUuid,
			apptCatId: '',
			scheduledOn: moment(selectedDate).format('YYYY-MM-DD'),
			scheduledTime: moment(apptData?.startTime, 'hh:mm A').format(`HH:mm:ss+05:30`),
			scheduledPeriod: apptData?.intervalInMins,
			scheduledPeriodType: 'Mins',
			onOff: modeData?.appKey,
			custMail: true,
			custSms: true,
			tentMail: true,
			tentSms: true,
			plannedProcedure: [],
			type: 'CUST',
			totalAppointmentPrice: apptData?.consultantionFees,
			// ...(e?.appointmentSpecialityUuid && {
			// 	specialityId: [e?.appointmentSpecialityUuid],
			// }),
			// ...(appointmentDetails?.specialityUuid && {
			// 	specialityId: [appointmentDetails?.specialityUuid],
			// }),
			// ...(appointmentDetails?.appointmentSpecialityUuid && {
			// 	specialityId: [appointmentDetails?.appointmentSpecialityUuid],
			// }),
			appointmentSource: 'b2cweb',
		}
		const onSuccess = res => {
			setSaveAppt(false)
			if (res?.data?.status === 'success') {
				toast.success(
					<Typography variant='h5' style={{zIndex: 9999}}>
						Appointment booked successfully
					</Typography>
				)
				handleCloseDialog()
				setAppointmentFilter([
					{
						id: 0,
						label: 'Upcoming',
						value: 'upcoming',
						checked: true,
					},
					{id: 1, label: 'Prevoius', value: 'previous', checked: false},
				])
				menuListData()
			}
		}
		const onFailure = err => {
			setSaveAppt(false)
			toast.error(
				<Typography variant='h5' style={{zIndex: 9999}}>
					Failed to book appointment
				</Typography>
			)
		}
		ApptBooking.BookingAppointment(body).then(onSuccess, onFailure)
	}
	const [customerName, setCustomerName] = useState(null)
	useEffect(() => {
		let cust = JSON.parse(secureLocalStorage.getItem('custList'))
		setCustList(cust)
		if (open && !_.isEmpty(cust)) {
			setCustomerName(cust[0])
		}
	}, [open])
	return (
		<Dialog open={open} className={classes.root} keepMounted onClose={handleCloseDialog} aria-describedby='alert-dialog-slide-description'>
			<DialogContent>
				<div className={classes.custField}>
					<Autocomplete
						disableClearable={true}
						fullWidth
						value={customerName}
						className={classes.specialist}
						options={custList}
						getOptionLabel={option => option?.custName || ''}
						renderInput={params => <TextField {...params} size='small' label='Choose a customer' variant='outlined' />}
						onChange={(e, value) => {
							setCustomerName(value)
						}}
					/>
				</div>
				<div>
					<Typography pb={1} fontFamily='Poppins'>
						Select mode :
					</Typography>
					<div className={classes.btnContainer}>
						{AppModes.map((item, idx) => {
							return (
								<div className={activeIdx === idx ? classes.activeBtn : classes.btn}>
									<Button onClick={() => (setActiveIndex(idx), setModeData(item))}>{item?.modeType}</Button>
								</div>
							)
						})}
					</div>
				</div>
				<div>
					<div className={classes.datepicker}>
						<Typography pt={1} pb={1} fontFamily='Poppins'>
							Select date :
						</Typography>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<ThemeProvider theme={materialTheme}>
								<KeyboardDatePicker
									disablePast
									fullWidth
									margin='dense'
									inputVariant='outlined'
									format='dd-MM-yyyy'
									placeholder='dd-mm-yyyy'
									value={selectedDate}
									InputAdornmentProps={{position: 'end'}}
									onChange={date => setSelectedDate(date)}
								/>
							</ThemeProvider>
						</MuiPickersUtilsProvider>
					</div>

					<Autocomplete
						disableClearable={true}
						fullWidth
						value={specialistName}
						className={classes.specialist}
						options={userList}
						getOptionLabel={option => `${option.tentUserSalutation}. ${option.tentUserFirstName}` || ''}
						renderInput={params => <TextField {...params} size='small' label='Choose a specialist' variant='outlined' />}
						onChange={(e, value) => {
							setSpecialistName(value)
						}}
					/>
					<div>
						{specialistName !== null && timeSlots.length !== 0 ? (
							<>
								<Typography pt={1} fontFamily='Poppins'>
									Choose a time slot:
								</Typography>
								<div className={classes.timeSlots}>
									{timeSlots.map((item, idx) => {
										return (
											<div className={activeTimeIdx === idx ? classes.activeTimeBtn : classes.timeBtn}>
												<Button
													onClick={() => {
														setActiveTimeIndex(idx)
														setApptData(item)
													}}>{`${moment(item?.startTime, 'HH:mm:ss').format(' hh:mm a')}-${moment(item?.endTime, 'HH:mm:ss').format(
													'hh:mm a'
												)}`}</Button>
											</div>
										)
									})}
								</div>
							</>
						) : (
							<div className={classes.text}>
								{specialistName === null ? (
									<Image
										src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/no_specialists.png?updatedAt=1674460098909&ik-s=f3101e7cac5dd85779992647b73a0df7412857c7'
										width={200}
										height={180}
									/>
								) : loading ? (
									<Typography align='center' px={2} py={2}>
										Loading please wait...
									</Typography>
								) : timeSlots.length === 0 ? (
									<Image
										src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/No_Timeslots.png?updatedAt=1674460116162&ik-s=0aa73017959ee26bb21e8d9ca23af1406e77051c'
										width={200}
										height={180}
									/>
								) : null}
							</div>
						)}
					</div>
					<div className={classes.saveBtn}>
						<Button variant='contained' disabled={timeSlots.length === 0 || specialistName === null || saveAppt} onClick={() => saveAppointment()}>
							{saveAppt ? 'Saving...' : 'Save'}
						</Button>
					</div>
				</div>
			</DialogContent>
			<ToastContainer hideProgressBar={true} position='top-right' autoClose={4000} draggable style={{top: '3em'}} />
		</Dialog>
	)
}

export default BookAppointment
