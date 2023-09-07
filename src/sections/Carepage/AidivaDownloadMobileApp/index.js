import {makeStyles} from '@material-ui/core'
import DownloadMobileApp from '../../../components/DownloadMobileApp'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	inputBases: {
		'& .MuiTypography-colorTextSecondary': {
			color: '#7047EA',
		},
	},
}))

export default function AidivaDownloadMobileApp() {
	const classes = useStyles()

	return <DownloadMobileApp textColor='#7047EA' buttonColor={classes.findMorebtn} inputBaseColor={classes.inputBases} />
}
