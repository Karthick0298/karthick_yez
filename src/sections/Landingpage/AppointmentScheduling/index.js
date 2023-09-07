import {Button, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import FreeTrailCard from '../../../components/FreeTrailCard'
import LandingFooter from '../../../components/LandingFooter'
import HeadingContent from '../../../components/HeadContent'
import Header from '../../../sections/LandingPageHeader'
import SectionLeftBlock from '../../../components/SectionLeftBlock'
import SectionRightBlock from '../../../components/SectionRightBlock'
import FadeVariantContent from '../../../components/FramerMotion/PageFadeContent'
import FadeVariant from '../../../components/FramerMotion/PageFade'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: '1320px',
		margin: '0px auto',
		paddingBlockStart: '42px',
	},
	backColor: {
		background: '#FFFFFF 0% 0% no-repeat padding-box',
		opacity: 1,
		backdropFilter: 'blur(46px)',
	},
	contentCard: {
		paddingBlockEnd: '42px',
	},
}))
const AppiontmentScheduling = () => {
	const classes = useStyles()
	return (
		<div className={classes.backColor}>
			<Header />
			<div className={classes.root}>
				<FadeVariant>
					<HeadingContent
						heading={'Calendar'}
						content={`Each appointment is color-coded by status. Set a status for each booking by simply tapping on it
					and selecting one of the status options – Check-in, Engaged, Check-out Ready to Start Service Cancel or Delete.`}
						children={'Start free trial'}
						image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/lapCalender.png'}
						swap={false}
					/>
				</FadeVariant>
				<FadeVariantContent>
					<SectionLeftBlock
						sideImageUrl={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/addAppointmentPopup.png'}
						WidthImage={580}
						HightImage={438}
						headingtext={'Maximize your schedule with multi-booking features.'}
						paragraphText={`If you can handle it, we will book it. Specify your gap start time and duration and we will fill your schedule with our intelligent online booking algorithms.
Configure the starting day of the calendar. Select the order in which you want to see the service providers. It's your world, we just live in it.`}
					/>
				</FadeVariantContent>
				{/* <SectionRightBlock
					WidthImage={544}
					HightImage={390}
					sideImageUrl={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/dateView.png'}
					headingtext={'Overall sales of your appointments'}
					paragraphText={
						'While others brag about how many reports you can run with their system, we take pride on our simple, clear and concise reports. Get all the reports you need on any device.'
					}
				/> */}
				<FadeVariantContent>
					<div className={classes.contentCard}>
						<FreeTrailCard />
					</div>
				</FadeVariantContent>
			</div>
			<LandingFooter />
		</div>
	)
}

export default AppiontmentScheduling
