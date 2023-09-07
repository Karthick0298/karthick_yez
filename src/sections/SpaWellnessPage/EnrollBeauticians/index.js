import HeadingWithButton from '../../../components/HeadingWithButton'
import {makeStyles} from '@material-ui/core'
import SpecialisedPersonCard from '../../../components/SpecialisedPersonCard'
import EnrollBeauticiansCardData from '../../../model/EnrollBeauticiansCardData/data'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function EnrollBeauticians() {
	const classes = useStyles()

	return (
		<>
			<HeadingWithButton
				heading='Enroll your '
				boldText='Beauticians'
				textColor='#E1087E'
				btnColor={classes.findMorebtn}
				btnContent='All Beauticians'
				btnLink='/spawellness/beauticianProfile'
			/>
			<SpecialisedPersonCard CardData={EnrollBeauticiansCardData} btnColor={classes.findMorebtn} />
		</>
	)
}
