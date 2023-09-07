import {makeStyles, Typography} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import YogaOnlineTrainersCardData from '../../../model/YogaOnlineTrainersCardData/data'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function SuitableOnlineTrainers() {
	const classes = useStyles()

	return (
		<>
			<HeadingWithSubheading heading='Find Suitable online trainers' boldText='' subheading='Find experienced Yoga masters across all platform' textColor='#23CA9D' />
			<PersonalisedTrainerMasterCard cardData={YogaOnlineTrainersCardData} btnContent='Find Trainers' btnColor={classes.findMorebtn} textColor='#23CA9D' />
		</>
	)
}
