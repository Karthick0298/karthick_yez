import SpaPackagesHead from '../../../components/SpaPackageHead'
import PopularPackages from '../PopularPackages'
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
}))

export default function AidivaPackages() {
	const classes = useStyles()

	return (
		<>
			<SpaPackagesHead />
			<div className={classes.commingSoonSection}>
				<PopularPackages />
				<div className={classes.blurBackground}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/SpaWellness/commingSoon.png' alt='Comming Soon' width={290} height={110} />
				</div>
			</div>
		</>
	)
}
