import {makeStyles} from '@material-ui/core'
// import Search from '../../../components/Search'
import DoctorSlider from '../../../components/DoctorSlider'
import Download from '../../../components/Download'
import FAQ from '../../../components/FrequentlyAskingQuestions'
import Bannerimage from '../../../components/BannerImage'
import Achievements from '../../../../src/sections/Homepage/Achievements'
import Caredoctors from '../../../components/CareDoctors'
import Carespecialist from '../../../components/CareSpecialist'
import Userexperience from '../../../components/CareUserExperience'
import Userqueries from '../../../components/CareUserQueries'
import Careclinical from '../../../sections/CareClinicalConsultation'
import Carevideo from '../../../sections/CareVideo'
import Carebenefits from './ConsultList'
import CareCard from '../../../sections/HealthCareCard'
import ClinicalCard from '../../../sections/ClinicalCard'
import Wellness from '../../../components/GridCard'
// import CareDoctors from '../../Common/CareSlider';
import DoctorExploreCard from '../Doctors/DoctorExploreCard'

const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	},
	doctormain: {
		paddingBlock: 36,
		maxWidth: 1320,
		margin: '0px auto',
	},
	searchroot: {
		paddingBlock: 12,
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
	},
	doctor: {
		paddingInline: 100,
	},
}))

const Doctors = () => {
	const classes = useStyles()
	return (
		<div className={classes.background}>
			<div className={classes.doctormain}>
				<div className={classes.searchroot}>
					{/* <Search /> */}
				</div>
				<Careclinical />
				{/* <ClinicalCard /> */}
				<DoctorExploreCard />
				<Carespecialist />
				<CareCard />
				{/* <div className={classes.doctor}>
            <CareDoctors/>
            </div> */}
				<Caredoctors />
				<Achievements />
				<Carebenefits />
				<Bannerimage />
				<FAQ />
				<Userexperience />
				{/* <Carevideo /> */}
				<Userqueries />
				<Wellness />
				<Download />
				<DoctorSlider />
			</div>
		</div>
	)
}

export default Doctors
