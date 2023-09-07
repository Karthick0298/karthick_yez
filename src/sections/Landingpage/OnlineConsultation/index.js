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
const OnlineConsultation = () => {
	const classes = useStyles()
	return (
		<div className={classes.backColor}>
			<Header />
			<div className={classes.root}>
				<FadeVariant>
					<HeadingContent
						heading={'Online Consultation'}
						content={
							'Give your customers the flexibility to make online bookings for appointments	book appointment instantly with a 24x7 and Start an instant consultation within 5 minutes in video or voice call. We assured that your online consultation will be fully secured.'
						}
						children={'Start free trial'}
						image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/LapOnlineConsult.png'}
						swap={false}
					/>
				</FadeVariant>
				<FadeVariantContent>
					<SectionLeftBlock
						sideImageUrl={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/consultOnline.png'}
						WidthImage={345}
						HightImage={417}
						headingtext={'Collaborate Instantaneously for Any Discussion'}
						paragraphText={
							'Chat with professionals at anytime from anywhere, share your queries and get consultation immediately. we assured that health records of your customers will be fully safe and secured.'
						}
					/>
				</FadeVariantContent>
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

export default OnlineConsultation
