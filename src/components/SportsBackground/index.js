import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Sports/sports-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	},
}))

export default function SportsBackground({children}) {
	const classes = useStyles()
	return <div className={classes.background}>{children}</div>
}
