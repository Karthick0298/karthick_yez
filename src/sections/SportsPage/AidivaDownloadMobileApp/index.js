import {makeStyles} from '@material-ui/core'
import DownloadMobileApp from '../../../components/DownloadMobileApp'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
	inputBases: {
		'& .MuiTypography-colorTextSecondary': {
			color: '#EF5618',
		},
	},
}))

export default function AidivaDownloadMobileApp() {
	const classes = useStyles()

	return (
		<DownloadMobileApp
			textColor='#EF5618'
			buttonColor={classes.findMorebtn}
			inputBaseColor={classes.inputBases}
			imgAddress={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/downloadSports.png'}
		/>
	)
}
