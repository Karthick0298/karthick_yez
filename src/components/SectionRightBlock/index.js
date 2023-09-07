import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	dashBoard: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse',
			gap: 22,
			paddingBlock: '18px',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'column-reverse',
			gap: 22,
			paddingBlock: '18px',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},
	dashBoardContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: 18,
		'& .MuiTypography-h5': {
			lineHeight: '29px',
			wordSpacing: '4px',
			letterSpacing: '2px',
			fontSize: 14,
		},
		'& .MuiTypography-h2': {
			fontSize: 28,
			letterSpacing: '2px',
			lineHeight: '35px',
		},
		'& .MuiButton-root': {
			color: '#fff',
background: theme.palette.lyfngo.backgroundImage,			boxShadow: '0px 6px 18px #0000001A',
			borderRadius: '6px',
			paddingInline: 22,
			opacity: 1,
			fontFamily: theme.typography.h6.fontFamily,
			'&:hover': {
				transform: 'scale(1.1)',
	background: theme.palette.lyfngo.backgroundImage,			},
		},
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			paddingInline: '16px',
		},
		[theme.breakpoints.up('sm')]: {
			width: '100%',
			paddingInline: '30px',
		},
		[theme.breakpoints.up('md')]: {
			width: '50%',
			paddingInline: '50px',
		},
	},
	imageSection: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			paddingInline: 18,
		},
		[theme.breakpoints.up('sm')]: {
			width: '100%',
			paddingInline: 18,
		},
		[theme.breakpoints.up('md')]: {
			width: '50%',
		},
	},
	rightContent: {
		textAlign: 'end',
	},
}))

export default function SectionRightBlock({sideImageUrl, headingtext, paragraphText, WidthImage, HightImage}) {
	const classes = useStyles()

	return (
		<>
			<div className={classes.dashBoard}>
				<div className={classes.dashBoardContent}>
					<Typography variant='h2'>{headingtext || ''}</Typography>
					<Typography variant='h5'>{paragraphText || ''} </Typography>
				</div>

				<div className={classes.imageSection}>
					<Image src={sideImageUrl || ''} alt='module display example' width={WidthImage} height={HightImage} />{' '}
				</div>
			</div>
			<div className={classes.rightContent}>
				<Image
					src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/landingImage/missContOne.svg'}
					alt='module display example'
					width={102}
					height={102}
				/>
			</div>
		</>
	)
}
