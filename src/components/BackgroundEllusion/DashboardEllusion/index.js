import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/DahboardBackground.svg'})`,
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height: '100%',
		// [theme.breakpoints.down('xs')]: {
		// 	height: '92vh',
		// },
		// [theme.breakpoints.down('sm')]: {
		// 	height: '92vh',
		// },
		// [theme.breakpoints.up('md')]: {
		// 	height: '92vh',
		// },
		// [theme.breakpoints.up('lg')]: {
		// 	height: '92vh',
		// },
	},
}))

const DashboardEllusion = ({children}) => {
	const classes = useStyles()
	return <div className={classes.background}>{children}</div>
}
export default DashboardEllusion
