import HeadingWithButton from '../../../components/HeadingWithButton'
import {makeStyles} from '@material-ui/core'
import SpecialisedPersonCard from '../../../components/SpecialisedPersonCard'
import EnrollSpaTherapistCardDetails from '../../../model/EnrollSpaTherapistCardDetails/data'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function EnrollTherapist() {
	const classes = useStyles()

	return (
		<>
			<HeadingWithButton
				heading='Enroll your '
				boldText='Therapist'
				textColor='#E1087E'
				btnColor={classes.findMorebtn}
				btnContent='All Therapist'
				btnLink='/spawellness/therapistsProfile'
			/>
			<SpecialisedPersonCard CardData={EnrollSpaTherapistCardDetails} btnColor={classes.findMorebtn} />
		</>
	)
}
