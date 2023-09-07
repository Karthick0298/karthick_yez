import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SectionLeftBlock from '../../components/SectionLeftBlock'
import Image from 'next/image'
import HeadingContent from '../../components/HeadContent'
import FreeTrailCard from '../../components/FreeTrailCard'
import FadeVariantContent from '../../components/FramerMotion/PageFadeContent'
import FadeVariant from '../../components/FramerMotion/PageFade'

const useStyles = makeStyles(theme => ({
	mainRoot: {
		background: '#FFFFFF',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	container: {
		fontFamily: 'Poppins',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: 1360,
		},
	},
	sectionOne: {
		paddingInline: 16,
		paddingBlockStart: 16,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		'& .MuiTypography-h2': {
			fontWeight: 500,
			lineHeight: '126%',
			width: '100%',
			textAlign: 'center',
			fontSize: 34,
			paddingBlock: 18,
		},
		'& .MuiTypography-h5': {
			fontWeight: 500,
			lineHeight: '146%',
			fontSize: 18,
			letterSpacing: 1.6,
			maxWidth: 742,
			width: '100%',
			textAlign: 'center',
			paddingBlock: 12,
		},
		'& .MuiTypography-h4': {
			fontWeight: 500,
			lineHeight: '126%',
			letterSpacing: 1.6,
			color: '#DE3F37',
			width: '100%',
			textAlign: 'center',
			fontSize: 22,
			fontStyle: 'normal',
			paddingBlockStart: 16,
		},
	},
	sectionTwo: {
		paddingBlockStart: 16,
		paddingBlockEnd: 24,
		paddingInline: 16,
		textAlign: 'center',
	},
	FreeTrailCard: {
		paddingBlockEnd: 34,
	},
}))

export default function LeadsManagement() {
	const classes = useStyles()

	return (
		<div className={classes.mainRoot}>
			<div className={classes.container}>
				<FadeVariant>
					<HeadingContent
						heading={'Leads Generation'}
						content={
							'Qualified leads come from a quality audience.Manage leads, post reaches, multiple opportunities all in one place to generate leads to valuable customers. With different features like lead capture, lead distribution, dashboard and reports'
						}
						children={'Start free trial'}
						image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/lapExpenses.png'}
						swap={false}
					/>
				</FadeVariant>
				<FadeVariantContent>
					<SectionLeftBlock
						sideImageUrl={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/addlead.png'}
						WidthImage={606}
						HightImage={353}
						headingtext={'How to track every activity of your posts'}
						paragraphText={`Every action performed by your leads by liking your posts, viewing as well as your posts is tracked with the help of automated reminders and task notifications and you can intervene if a lead has been sitting untouched`}
					/>
				</FadeVariantContent>
				<FadeVariantContent>
					<div className={classes.FreeTrailCard}>
						<FreeTrailCard />
					</div>
				</FadeVariantContent>
			</div>
		</div>
	)
}
