import PopularPackages from '../../CareSubMenus/Package/PackageTabview'
import Head from '../../../components/PackagesAidivaHead'
import PopularTests from '../PopularTests'
import {makeStyles} from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	commingSoonSection: {
		position: 'relative',
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

export default function Packages() {
	const classes = useStyles()

	return (
		<>
			<Head />
			<div className={classes.commingSoonSection}>
				<PopularPackages />
				<PopularTests />
				<div className={classes.blurBackground}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/commingSoonSection.svg' alt='Comming Soon' width={300} height={100} />
				</div>
			</div>
		</>
	)
}
