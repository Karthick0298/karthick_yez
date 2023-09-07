import {makeStyles, Typography} from '@material-ui/core'
import Button from '../../../components/GradientButton'
import HeadingWithButton from '../../../components/HeadingWithButton'
import SpecialisedPersonCard from '../../../components/SpecialisedPersonCard'
import EnrollYogaMastersCardDetails from '../../../model/EnrollYogaMastersCardDetails'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function EnrollYogaMasters() {
	const classes = useStyles()
	return (
		<>
			<HeadingWithButton
				heading='Enroll Your '
				boldText='Yoga Masters'
				textColor='#0CC593'
				btnColor={classes.findMorebtn}
				btnContent='All Coaches'
				btnLink='/mind/masterProfile'
			/>
			<SpecialisedPersonCard CardData={EnrollYogaMastersCardDetails} btnColor={classes.findMorebtn} />
		</>
	)
}
