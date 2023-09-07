import {makeStyles} from '@material-ui/core'
import DownloadMobileApp from '../../../components/DownloadMobileApp'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
	inputBases: {
		'& .MuiTypography-colorTextSecondary': {
			color: '#23CA9D',
		},
	},
}))

export default function AidivaDownloadMobileApp() {
	const classes = useStyles()

	return (
		<DownloadMobileApp
			textColor='#23CA9D'
			buttonColor={classes.findMorebtn}
			inputBaseColor={classes.inputBases}
			imgAddress={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/downloadMind.png'}
		/>
	)
}
