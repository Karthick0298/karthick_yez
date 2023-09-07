import {makeStyles} from '@material-ui/core'
// import Search from '../../../components/Search'
import CareCard from '../../../sections/HealthCareCard'
import MoreExplore from '../HomeServices/HomeExploreMore'
import Achievements from '../../../../src/sections/Homepage/Achievements'
import FAQ from '../../../components/FrequentlyAskingQuestions'
import Wellness from '../../../components/GridCard'
import Download from '../../../components/Download'
import DoctorSlider from '../../../components/DoctorSlider'
import Bannerimage from '../../../components/BannerImage'
import NurseAvailable from './NurseAvailable'
import PhysiotherapistAvailable from './PhysiotherapistAvailable'
import NurseAssistance from './NurseAssistance'
import PhysioAssistance from './PhysioAssistance'
import HomeServiceBenefits from './HomeServiceBenefits'
import UserExperience from '../../../components/CareUserExperience'
import UserQueries from '../../../components/CareUserQueries'
import ServiceHead from '../HomeServices/HeadServices'
const useStyles = makeStyles(theme => ({
	homeservicesmain: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		[theme.breakpoints.down('xs')]: {
			paddingInlineStart: 0,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 92,
		},
	},
	servicemain: {
		paddingBlock: 36,
		maxWidth: 1320,
		margin: 'auto',
      
	},
	searchroot: {
		paddingBlock: 60,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
	},
}))
function HomeServices() {
	const classes = useStyles()

	return (
		<div className={classes.homeservicesmain}>
			<div className={classes.servicemain}>
				{/* <Search /> */}
				<ServiceHead />
				<MoreExplore />
				<NurseAssistance />
				<NurseAvailable />
				<CareCard />
				<PhysioAssistance />
				<PhysiotherapistAvailable />
				<Achievements />
				<HomeServiceBenefits />
				<Bannerimage />
				<FAQ />
				<UserExperience />
				<UserQueries />
				<Wellness />
				<Download />
				<DoctorSlider />
			</div>
		</div>
	)
}
export default HomeServices
