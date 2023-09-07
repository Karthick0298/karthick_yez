import LabsScanHead from '../../../components/LabsScanHead'
import TopLabScanCenter from '../TopLabScanCentre'
import TopSpecialityLabs from '../TopSecialityLabs'
import AidivaDownload from '../DownloadAidiva'
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

export default function LabsScan() {
	const classes = useStyles()

	return (
		<>
			<LabsScanHead />
			<TopLabScanCenter />
			<AidivaDownload />
			<div className={classes.commingSoonSection}>
				<TopSpecialityLabs />
				<div className={classes.blurBackground}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/commingSoonSection.svg'
						alt='Comming Soon'
						width={300}
						height={100}
					/>
				</div>
			</div>
		</>
	)
}
