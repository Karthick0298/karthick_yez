import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/spaWellness-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	},
}))

export default function SpaWellnessBackground({children}) {
	const classes = useStyles()
	return <div className={classes.background}>{children}</div>
}
