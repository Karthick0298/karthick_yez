import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import Image from 'next/image'

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
}))

export default function Careers() {
	const classes = useStyles()

	return (
		<div className={classes.mainRoot}>
			<div className={classes.container}>
				<div className={classes.sectionOne}>
					<Typography variant='h2'>We are launching this feature in Q4 2022</Typography>
					<Typography variant='h5'>When you have update your profile to our platform, we will map your profile to our consumer site.</Typography>
					<Typography variant='h5'>
						Using this profile, you can get connected to recommended products and services based on your genetic traits!
					</Typography>
					<Typography variant='h4'>How it works</Typography>
				</div>
				<div className={classes.sectionTwo}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/careersCommingsoon.png' alt='careers upcomming' width={712} height={373} />
				</div>
			</div>
		</div>
	)
}
