import {makeStyles} from '@material-ui/core'
import SpecialistDoctor from './SpecialistDoctor'
import HealthConcern from './HealthConcern'
import HomeVisit from './HomeVisit'
const useStyles = makeStyles(theme => ({}))

export default function Specialist() {
	const classes = useStyles()
	return (
		<>
			<div>
				<SpecialistDoctor />
				<HealthConcern />
				<HomeVisit />
			</div>
		</>
	)
}
