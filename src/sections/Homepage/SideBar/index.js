import {makeStyles} from '@material-ui/core'
import SideBar from '../../../components/Sidebar'
const useStyles = makeStyles(theme => ({}))

export default function Index() {
	const classes = useStyles()

	return (
		<div className={classes.Positionroot}>
			<SideBar
				Care={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/care.svg'}
				Fitness={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/fitness.svg'}
				Yoga={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/yoga.svg'}
				Sports={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/sport.svg'}
				Spa={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/spa.svg'}
				ShoppingCart={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/stpre.svg'}
				Live={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/Icon material-live-tv.svg'}
				Heading1={'Health Care'}
				Heading2={'Fitness'}
				Heading3={'Wellness'}
				Heading4={'Sports'}
				Heading5={'Spa & Wellness'}
				Heading6={'Shopping Cart'}
				Heading7={'Live'}
			/>
		</div>
	)
}
