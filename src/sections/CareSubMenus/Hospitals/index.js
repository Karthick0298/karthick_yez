import React from 'react'
import {makeStyles} from '@material-ui/core'
import Archivement from '../../../sections/Homepage/Achievements'
import Benefits from '../Hospitals/ConsultList'
// import Benefits from '../../../components/NumeroListGrid'
import Banner from '../../../components/BannerImage'
import Faq from '../../../sections/Carepage/questions'
import Wellness from '../../../components/GridCard'
import AidivaApp from '../../../sections/HealthCareCard'
import DoctorSlider from '../../../components/DoctorSlider'
import Download from '../../../components/Download'
import Carespecialist from './TopSpecialClinic'
import TopHospital from '../../../sections/CareSubMenus/Hospitals/TopHospitals'
import Userqueries from '../../../components/CareUserQueries'
import Userexperience from '../../../components/CareUserExperience'
import Head from '../../../sections/CareSubMenus/Hospitals/HeadContent'
// import Search from '../../../components/Search'
import ExploreCont from './ExploreHospital'
const useStyles = makeStyles(theme => ({
	backImageHospital: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	},
}))
export default function Hospital() {
	const classes = useStyles()
	return (
		<div className={classes.backImageHospital}>
			<div style={{maxWidth: 1320, margin: 'auto'}}>
				{/* <Search /> */}
				<Head />
				<ExploreCont />
				<TopHospital />
				<AidivaApp />
				<Carespecialist />
				<Archivement />
				<Benefits />
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
