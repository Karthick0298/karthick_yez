import {makeStyles, Typography} from '@material-ui/core'
import CategoryCard from '../../../components/CategoryCard'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import YogaAvailableTrainersCardData from '../../../model/YogaAvailableTrainersCardData/data'

// import YogaOnlineTrainersCardData from '../../../model/YogaOnlineTrainersCardData/data'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function AvailableOnlineTrainers() {
	const classes = useStyles()

	return (
		<>
			<HeadingSubheadingButton
				heading='Available online'
				boldText=' Trainers'
				subheading='Nursing service offers personalized nursing care at home'
				textColor='#23CA9D'
				btnColor={classes.findMorebtn}
				btnContent='+ Find More'
			/>
			<CategoryCard cardData={YogaAvailableTrainersCardData} />
		</>
	)
}
