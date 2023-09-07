import {makeStyles} from '@material-ui/core'
import DownloadMobileApp from '../../../components/DownloadMobileApp'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
	inputBases: {
		'& .MuiTypography-colorTextSecondary': {
			color: '#2CB0F7',
		},
	},
}))

export default function AidivaDownloadMobileApp() {
	const classes = useStyles()

	return (
		<DownloadMobileApp
			textColor='#2CB0F7'
			buttonColor={classes.findMorebtn}
			inputBaseColor={classes.inputBases}
			imgAddress={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/downloadfitness.png'}
		/>
	)
}
