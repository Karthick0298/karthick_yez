import {makeStyles} from '@material-ui/core'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import SpecialstTrainee from '../../../model/SpecialistCoachData/data'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function SuitableOnlineTrainers() {
	const classes = useStyles()
	return (
		<>
			<HeadingWithSubheading
				heading='Personalised Online - '
				boldText='Trainers'
				subheading='Find experienced trainers/coach across all platform'
				textColor='#0095EB'
			/>
			<PersonalisedTrainerMasterCard cardData={SpecialstTrainee} btnContent='Find Trainers' btnColor={classes.findMorebtn} textColor='#0693EA' />
		</>
	)
}
