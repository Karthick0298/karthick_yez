import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import Doctorspecialist from '../../../model/Doctorspecialist/data'
import TopSpecialityLabsDetails from '../../../model/TopSpecialityLabsDetails/data'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function TopSpecialityLabs() {
	const classes = useStyles()
	return (
		<>
			<HeadingWithSubheading heading='25+ Top Radiology and Pathology Tests' boldText='' subheading='Explore Top Radiology & Pathology Tests' textColor='#7047EA' />
			<PersonalisedTrainerMasterCard cardData={TopSpecialityLabsDetails} btnContent='Find More' btnColor={classes.findMorebtn} textColor='#7047EA' />
		</>
	)
}
