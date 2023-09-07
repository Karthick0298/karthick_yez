import {makeStyles} from '@material-ui/core'
import DownloadMobileApp from '../../../components/DownloadMobileApp'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
	inputBases: {
		'& .MuiTypography-colorTextSecondary': {
			color: '#E1087E',
		},
	},
}))

export default function AidivaDownloadMobileApp() {
	const classes = useStyles()

	return (
		<DownloadMobileApp
			textColor='#E1087E'
			buttonColor={classes.findMorebtn}
			inputBaseColor={classes.inputBases}
			imgAddress={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/downloadSpa.png'}
		/>
	)
}
