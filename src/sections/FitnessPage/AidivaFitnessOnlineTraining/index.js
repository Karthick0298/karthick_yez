import {makeStyles} from '@material-ui/core'
import FitnessOnlineTrainingHead from '../../../components/FitnessOnlineTrainingHead'
import SuitableOnlineTrainers from '../SuitableOnlineTrainers'
import AvailableFitnessTrainers from '../AvailableTrainers'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	commingSoonSection: {
		position: 'relative',
		paddingBlockEnd: 20,
	},

	blurBackground: {
		position: 'absolute',
		backdropFilter: 'blur(6px)',
		height: '100%',
		width: '100%',
		zIndex: 100,
		top: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function AidivaFitnessOnlineTraining() {
	const classes = useStyles()

	return (
		<>
			<FitnessOnlineTrainingHead />
			<div className={classes.commingSoonSection}>
				<SuitableOnlineTrainers />
				<AvailableFitnessTrainers />
				<div className={classes.blurBackground}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/commingSoonSection.png' alt='Comming Soon' width={290} height={110} />
				</div>
			</div>
		</>
	)
}
