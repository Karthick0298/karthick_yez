import {makeStyles, Typography} from '@material-ui/core'
// import Search from '../../../components/Search'
import Head from '../../../sections/CareSubMenus/Lab/LabHead'
import ExploreHead from '../../../sections/CareSubMenus/Lab/ExploreLabScan'
import ListCont from './LabCenter'
import ScanCenter from './ScanCenter'
import Cardidiva from '../../../sections/HealthCareCard'
import TestCentre from './TestCenter'
import Archivement from '../../../sections/Homepage/Achievements'
import Banner from '../../../components/BannerImage'
import Faq from '../../../sections/Carepage/questions'
import Wellness from '../../../components/GridCard'
import Userqueries from '../../../components/CareUserQueries'
import Userexperience from '../../../components/CareUserExperience'
import DoctorSlider from '../../../components/DoctorSlider'
import Download from '../../../components/Download'
import Numero from './LabPartners'
const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	},
}))

const Lab = () => {
	const classes = useStyles()
	return (
		<div className={classes.background}>
			<div style={{maxWidth: 1320, margin: 'auto'}}>
				{/* <Search /> */}
				<Head />
				<ExploreHead />
				<ListCont />
				<ScanCenter />
				<Cardidiva />
				<TestCentre />
				<Archivement />
				<Numero />
				<Banner />
				<Faq />
				<Userexperience />
				<Userqueries />
				<Wellness />
				<Download />
				<DoctorSlider />
			</div>
		</div>
	)
}

export default Lab
