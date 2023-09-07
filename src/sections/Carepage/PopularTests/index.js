import {makeStyles} from '@material-ui/core'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import PolularTestsDetails from '../../../model/PolularTestsDetails/data'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function PopularTests() {
	const classes = useStyles()

	return (
		<>
			<HeadingWithSubheading heading='Popular ' boldText='Tests' subheading='Explore test packages' textColor='#7047EA' />
			<PersonalisedTrainerMasterCard cardData={PolularTestsDetails} btnContent='Find More' btnColor={classes.findMorebtn} textColor='#7047EA' />
		</>
	)
}
