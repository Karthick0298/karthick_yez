import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	dashBoard: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 22,
			paddingBlock: '18px',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'column',
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
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',
			fontWeight: 500,
			textAlign: 'left',
			lineHeight: '136%',
			'& span': {
				color: '#D91E15',
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 26,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 32,
			},
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: 'Poppins',
			paddingBlock: 12,
			textAlign: 'left',
			color: '#303030',
			fontSize: 16,
			lineHeight: 1.75,
			letterSpacing: 0.6,
		},
		'& .MuiButtonBase-root': {
			fontFamily: 'Poppins',
			background: theme.palette.lyfngo.backgroundImage,
			textTransform: 'none',
			color: '#FFFFFF',
			paddingInline: 30,
			marginBlockStart: 18,
			transition: 'all 0.2s',
			letterSpacing: 0.75,
			'&:hover': {
				transform: 'scale(1.06)',
			},

			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
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
}))

export default function SectionLeftBlock({sideImageUrl, headingtext, paragraphText, WidthImage, HightImage}) {
	const classes = useStyles()

	return (
		<>
			<div className={classes.dashBoard}>
				<div className={classes.imageSection}>
					<Image src={sideImageUrl || ''} alt={`${headingtext} image`} width={WidthImage} height={HightImage} />{' '}
				</div>
				<div className={classes.dashBoardContent}>
					<Typography variant='h3'>{headingtext || ''}</Typography>
					<Typography variant='subtitle1'>{paragraphText || ''} </Typography>
				</div>
			</div>
			<Image
				src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/icons/TileLeft.svg'}
				alt='module display example'
				width={102}
				height={102}
			/>
		</>
	)
}
