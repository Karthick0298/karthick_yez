import {makeStyles} from '@material-ui/core'
import AppointmentTab from '../AppointmentTab'
import Button from '../GradientButton'
import SignUpEntry from '../Authentication/SignUpEntry'
import {ToastContainer, toast} from 'react-toastify'

const useStyles = makeStyles(theme => ({
	containerRoot: {
		border: '1px solid black',
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
		borderRadius: 20,
	},
}))

export default function AppointmentBookingTab() {
	const classes = useStyles()

	return (
		<div className={classes.containerRoot}>
			<AppointmentTab />
			<div className={classes.buttonCont}>
				<Button findMorebtn={classes.findMorebtn}>Book with Pay</Button>
				<Button findMorebtn={classes.findMorebtn}>Book Now</Button>
			</div>
			{/* <SignUpEntry handleClosePopup={handlClosePopup} openDialogSigning={openDialogSigning} /> */}
			{/* <ToastContainer  /> */}
		</div>
	)
}
