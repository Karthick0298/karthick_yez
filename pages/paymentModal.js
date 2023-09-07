import PaymentModal from '../src/components/PaymentModal'
import AppointmentConfirmedModal from '../src/components/AppointmentConfirmedModal'
import DashboardLayout from '../src/components/HomeLayout/DashboardLayout'
import CareBackgroundEllusion from '../src/components/CareBackgroundEllusion'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
		width: '100%',
	},
}))

export default function payment() {
	const classes = useStyles()

	return (
		<DashboardLayout>
			<CareBackgroundEllusion>
				<div
					style={{
						padding: '50px 100px',
					}}>
					<PaymentModal mainColor='#32B4F9' btnColor={classes.findMorebtn} />
				</div>
				<div
					style={{
						padding: '50px 100px',
					}}>
					<AppointmentConfirmedModal mainColor='#32B4F9' btnColor={classes.findMorebtn} />
				</div>
			</CareBackgroundEllusion>
		</DashboardLayout>
	)
}
