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
const FacilityBooking = () => {
	const classes = useStyles()
	return (
		<div className={classes.backColor}>
			<Header />
			<div className={classes.root}>
				<FadeVariant>
					<HeadingContent
						heading={'Facility Booking'}
						content={`Enjoy simple visualizations about facility capacity and time slots to ensure that you're never overbooked.	Our communication tools empower customers and staff to be in sync. Whether you wish to send SMS, emails or app notifications to individuals or groups of customers`}
						children={'Start free trial'}
						image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/LapfacilityBooking.png'}
						swap={false}
					/>
				</FadeVariant>
				<FadeVariantContent>
					<SectionLeftBlock
						sideImageUrl={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/lapMembership.png'}
						WidthImage={580}
						HightImage={438}
						headingtext={'Memberships'}
						paragraphText={`Manage your organization’s members and their data, all from one system. Automate tasks like renewals and updating memberships. Store payment gateway options for future payments. Upload forms and documents and gain vital insight from robust reporting.`}
					/>
				</FadeVariantContent>

				{/* <SectionRightBlock
					WidthImage={544}
					HightImage={390}
					sideImageUrl={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/facilityList.png'}
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

export default FacilityBooking
