import {makeStyles} from '@material-ui/core/styles'
import BudgetFilter from './BudgetFilter'
import AppointmentMode from './AppointmentMode'
import Availability from './Availablity'
import Gender from './Gender'
import Location from './Location'
import Distance from './Distance'

const useStyles = makeStyles(theme => ({}))

export default function Filters() {
	const classes = useStyles()

	return (
		<div>
			<BudgetFilter />
			<AppointmentMode />
			<Availability />
			<Gender />
			<Location />
			<Distance />
		</div>
	)
}
