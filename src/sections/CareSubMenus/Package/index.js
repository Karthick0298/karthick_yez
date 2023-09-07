import React from 'react'
import {makeStyles} from '@material-ui/core'
import Head from '../../../sections/CareSubMenus/Package/PakageHead'
// import Search from '../../../components/Search'
import ExploreContent from '../../../sections/CareSubMenus/Package/ExploreContent'
import TabView from '../../../sections/CareSubMenus/Package/PackageTabview'
import Faq from '../../../sections/Carepage/questions'
import Wellness from '../../../components/GridCard'
import Userqueries from '../../../components/CareUserQueries'
import Userexperience from '../../../components/CareUserExperience'
import DoctorSlider from '../../../components/DoctorSlider'
import Download from '../../../components/Download'
import TestResult from './PopularTest'
import Cardidiva from '../../../sections/HealthCareCard'
import Archivement from '../../../sections/Homepage/Achievements'
import Banner from '../../../components/BannerImage'
const useStyles = makeStyles(theme => ({
	backImageHospital: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	},
}))
export default function index() {
	const classes = useStyles()
	return (
		<div className={classes.backImageHospital}>
			<div style={{maxWidth: 1320, margin: 'auto'}}>
				{/* <Search /> */}
				<Head />
				<ExploreContent />
				<TabView />
				<Cardidiva />
				<TestResult />
				<Archivement />
				<Banner />
				<Faq />
				<Wellness />
				<Userexperience />
				<Userqueries />
				<Download />
				<DoctorSlider />
			</div>
		</div>
	)
}
