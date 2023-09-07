import {makeStyles} from '@material-ui/core/styles'
import BudgetFilter from '../BudgetFilter'
import AppointmentFilterMode from '../AppointmentModeFilter'
import AvailabilityFilter from '../AvailabilityFilter'
import GenderFilter from '../GenderFilter'
import LocationFilter from '../LocationFilter'
import DistanceFilter from '../DistanceFilter'

const useStyles = makeStyles(theme => ({
	filtersmain: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}))

function Filter(props) {
	const classes = useStyles()
	const {
		searchFilters,
		setSearchFilters,
		budgetValue,
		clearFilters,
		setClearFilters,
		appointmentChecked,
		setAppointmentChecked,
		setOffset,
		locationFilters,
		primaryColor,
	} = props
	return (
		<div className={classes.filtersmain}>
			<BudgetFilter
				budgetValue={budgetValue}
				searchFilters={searchFilters}
				setSearchFilters={setSearchFilters}
				setOffset={setOffset}
				primaryColor={primaryColor}
			/>
			<AppointmentFilterMode
				appointmentChecked={appointmentChecked}
				setAppointmentChecked={setAppointmentChecked}
				searchFilters={searchFilters}
				setSearchFilters={setSearchFilters}
				setOffset={setOffset}
			/>
			<AvailabilityFilter searchFilters={searchFilters} setSearchFilters={setSearchFilters} setOffset={setOffset} />
			<GenderFilter searchFilters={searchFilters} setSearchFilters={setSearchFilters} setOffset={setOffset} />
			<LocationFilter searchFilters={searchFilters} setSearchFilters={setSearchFilters} setOffset={setOffset} locationFilters={locationFilters} />
			<DistanceFilter searchFilters={searchFilters} setSearchFilters={setSearchFilters} setOffset={setOffset} />
		</div>
	)
}
export default Filter
