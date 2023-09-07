import {makeStyles} from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	background: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(8),
		'& .MuiTypography-h1': {
			color: theme.palette.lyfngo.main,
		},
	},
}))

function help() {
	const classes = useStyles()
	return (
		<div className={classes.background}>
			<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/comingSoon.png' width={400} height={80} />
			<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noConnection.png' width={1150} height={650} />
		</div>
	)
}

export default help
