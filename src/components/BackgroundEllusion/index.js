import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png'})`,
		backgroundPosition: 'right',
		// backgroundAttachment: 'fixed',
		backgroundSize: '100% 100%',
	},
}))

const FixedBackground = ({children}) => {
	const classes = useStyles()
	return <div className={classes.background}>{children}</div>
}
export default FixedBackground
