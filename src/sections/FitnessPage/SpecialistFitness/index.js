import {makeStyles} from '@material-ui/core'
import SpecialistCoach from './SpecialistCoach'
import CentersNearYou from './ExploreCentersNearyou'
import CalculatorTest from './FitnessCalculators'
const useStyles = makeStyles(theme => ({}))

export default function SpecialistFitness() {
	const classes = useStyles()
	return (
		<>
			<div>
				<SpecialistCoach />
				<CentersNearYou />
				<CalculatorTest />
			</div>
		</>
	)
}
