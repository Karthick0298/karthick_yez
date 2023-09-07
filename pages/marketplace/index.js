import Head from 'next/head'
import LandingContent from '../../src/sections/Homepage/LandingContent'
import Illusion from '../../src/components/BackgroundEllusion'
import MobileSideBar from '../../src/components/MobileSideBar'
import Achievements from '../../src/sections/Homepage/Achievements'
import Slider from '../../src/components/Slider'
import Download from '../../src/components/Download'
import DoctorSlider from '../../src/components/DoctorSlider'
import Layout1 from '../../src/components/Layout1'
import Sidebar from '../../src/components/Sidebar'
import Header from '../../src/components/Header'
import {makeStyles} from '@material-ui/core'
import HomeLayout from '../../src/components/HomeLayout'
// import useContextApi from '../../lib/Utils/hooks/useContextApi'
// import MobileSearch1 from '../../src/components/Search/MobileSearch1'
import CallNotification from '../../src/components/CallNotification'
import CareBot from '../../src/sections/Carepage/CareBot'
import {useRouter} from 'next/router'
import useAuth from '../../lib/Utils/hooks/UseAuth'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	root: {
		scrollBehavior: 'smooth',
	},
	sections: {
		maxHeight: '100vh',
		scrollSnapAlign: 'start',
	},
	mobileSearch: {
		position: 'absolute',
		zIndex: 9999,
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100vh',
		display: 'none',
	},
}))

function LandingPage() {
	const classes = useStyles()
	const router = useRouter()
	const navigationQuery = router.query.navigationQuery
	const {loggedVia} = useAuth()

	console.log('loggedVia', loggedVia)

	// const {enableMobileSearch} = useContextApi()

	return (
		<>
			<Head>
				<title>Health & Wellness App lets you access your records and book appointments via web and mobile</title>
				<meta
					name='LYFnGO'
					content='LYFnGO is a cloud software management suite for your Hospital, Fitness Studio, Gym, Therapy / Yoga center, Spa, Beauty Parlor, Saloon, Stadium, Sports Acadamy'
				/>
				<meta
					property='og:title'
					content='LYFnGO is a cloud software management suite for your Hospital, Fitness Studio, Gym, Therapy / Yoga center, Spa, Beauty Parlor, Saloon, Stadium, Sports Acadamy'
				/>
				{/* <meta name='robots' content='noindex,nofollow' /> */}
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
			</Head>
			{/* {enableMobileSearch ? (
				<section className={classes.mobileSearch}>
					<MobileSearch1 />
				</section>
			) : ( */}
			<>
				<section style={{position: 'relative'}}>
					<Header />
					<div className={classes.root}>
						{/* <Layout1> */}
						<HomeLayout navigationQuery={navigationQuery}>
							<MobileSideBar />
							<LandingContent />
							{/* <Illusion> */}
							<div style={{maxWidth: '1320px', margin: ' 0px auto'}}>
								{/* <Achievements /> */}
								{/* <Slider /> */}
								{/* <Download /> */}
								{/* <DoctorSlider /> */}
							</div>
							{_.isEqual(loggedVia, 'phone') ? <CareBot /> : ''}
							{/* </Illusion> */}
						</HomeLayout>
						<CallNotification />

						{/* </Layout1> */}
					</div>
				</section>
			</>
			{/* )} */}
		</>
	)
}

export default LandingPage
