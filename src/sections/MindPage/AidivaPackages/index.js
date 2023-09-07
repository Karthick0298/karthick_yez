import MindPackagesHead from '../../../components/MindPackagesHead'
import Packagess from '../Packagess'
import {makeStyles} from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	commingSoonSection: {
		position: 'relative',
		paddingBlockEnd: 20,
	},

	blurBackground: {
		position: 'absolute',
		backdropFilter: 'blur(6px)',
		height: '100%',
		width: '100%',
		zIndex: 100,
		top: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function AidivaPackages() {
	const classes = useStyles()

	return (
		<>
			<MindPackagesHead />
			<div className={classes.commingSoonSection}>
				<Packagess />
				<div className={classes.blurBackground}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/commingSoon.png' alt='Comming Soon' width={290} height={110} />
				</div>
			</div>
		</>
	)
}
