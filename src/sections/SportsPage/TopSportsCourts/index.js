import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import {makeStyles, Typography} from '@material-ui/core'
import CentresCardContainer from '../../../components/CentresCardContainer'
import SportsClubDetails from '../../../model/SportsClubDetails/data'
import SportsCourtDetails from '../../../model/SportsCourtDetails/data'
import CardSlider from '../../../components/CardSlider'

const useStyles = makeStyles(theme => ({
	textColor: {
		color: theme.palette.sports.main,
	},
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function TopSportsCourts() {
	const classes = useStyles()

	return (
		<div>
			<HeadingSubheadingButton
				heading='Top '
				boldText='Sports Courts'
				subheading='Explore Sports Clubs in Chennai'
				textColor='#F0662E'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			{/* <CentresCardContainer cardData={SportsCourtDetails} ratingBoxColor='#F0662E' /> */}
			<CardSlider cardData={SportsCourtDetails} ratingBoxColor='#F0662E' />
		</div>
	)
}
