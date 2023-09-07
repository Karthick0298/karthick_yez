import HeadingWithButton from '../../../components/HeadingWithButton'
import {makeStyles, Typography} from '@material-ui/core'
import SpecialisedPersonCard from '../../../components/SpecialisedPersonCard'
import EnrollYogaTherapistCardDetails from '../../../model/EnrollYogaTherapistCardDetails'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function EnrollYogaTherapist() {
	const classes = useStyles()

	return (
		<>
			<HeadingWithButton
				heading='Enroll your '
				boldText='Yoga Therapist'
				textColor='#0CC593'
				btnColor={classes.findMorebtn}
				btnContent='All Therapist'
				btnLink='/mind/therapistProfile'
			/>
			<SpecialisedPersonCard CardData={EnrollYogaTherapistCardDetails} btnColor={classes.findMorebtn} />
		</>
	)
}
