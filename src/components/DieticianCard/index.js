import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	StayHome: {
		top: 1379,
		left: 579,
		width: 348,
		height: 391,
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/weightbg1.png'})`,
		opacity: 1,
	},
}))

function Index() {
	const classes = useStyles()
	return (
		<div className={classes.StayHome}>
			<h3>dinesh</h3>
		</div>
	)
}

export default Index
