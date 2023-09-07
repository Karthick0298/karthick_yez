import {makeStyles} from '@material-ui/core'
import Filter from '../Filter'
import Gender from '../GenderFilter'

const useStyles = makeStyles(theme => ({
	cardFilter: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		// padding: 12,
		marginBottom: 10,
	},
	cardadFiltername: {},
	cardadjustFilter: {},
	buttonfilter: {},
}))

function Mobiletab(props) {
	const classes = useStyles()
	const {
		searchFilters,
		setSearchFilters,
		clearFilters,
		setClearFilters,
		budgetValue,
		appointmentChecked,
		setAppointmentChecked,
		setOffset,
		locationFilters,
		primaryColor,
	} = props

	return (
		<div className={classes.cardFilter}>
			<div className={classes.cardadFiltername}>
				<Filter
					searchFilters={searchFilters}
					setSearchFilters={setSearchFilters}
					clearFilters={clearFilters}
					setClearFilters={setClearFilters}
					budgetValue={budgetValue}
					appointmentChecked={appointmentChecked}
					setAppointmentChecked={setAppointmentChecked}
					setOffset={setOffset}
					locationFilters={locationFilters}
					primaryColor={primaryColor}
				/>
			</div>
		</div>
	)
}
export default Mobiletab
