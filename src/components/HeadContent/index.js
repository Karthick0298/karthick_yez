import {Typography, Button, makeStyles} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import {flashLink, flashRegister} from '../../../lib/Utils/linkWindow'

const useStyles = makeStyles(theme => ({
	dashBoard: {
		display: 'flex',
		// [theme.breakpoints.down('sm')]: {
		// 	flexDirection: 'column-reverse',
		// 	gap: 22,
		// 	paddingBlock: '18px',
		// 	height: '100%',
		// },
		// [theme.breakpoints.up('sm')]: {
		// 	flexDirection: 'column-reverse',
		// 	gap: 22,
		// 	paddingBlock: '18px',
		// 	height: '100%',
		// },
		// [theme.breakpoints.up('md')]: {
		// 	flexDirection: 'row',
		// 	height: '75vh',
		// 	alignItems: 'center',
		// },
		// [theme.breakpoints.up('lg')]: {
		// 	flexDirection: 'row',
		// 	height: '100%',
		// },
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column-reverse',
			gap: 22,
			paddingBlock: '18px',
			height: '100%',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			height: '78vh',
			alignItems: 'center',
		},
		[theme.breakpoints.up('xl')]: {
			flexDirection: 'row',
			height: '100%',
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
const HeadingContent = ({image, children, content, heading, swap, alt}) => {
	const classes = useStyles()

	return (
		<div className={classes.dashBoard}>
			{!swap ? (
				<>
					<div className={classes.dashBoardContent}>
						<Typography variant='h3'>{heading || ''}</Typography>
						<Typography variant='subtitle1'>{content || ''}</Typography>
						<Button onClick={flashLink}>{children || ''}</Button>
					</div>
					<div className={classes.imageSection}>
						<Image src={image || ''} alt={`${alt || 'sample module'} working example`} width={582} height={412} />
					</div>
				</>
			) : (
				<>
					<div className={classes.imageSection}>
						<Image src={image} alt={`${heading} image`} width={582} height={412} />
					</div>
					<div className={classes.dashBoardContent}>
						<Typography variant='h3'>{heading}</Typography>
						<Typography variant='subtitle1'>{content}</Typography>
						<Button onClick={flashLink}>{children}</Button>
					</div>
				</>
			)}
		</div>
	)
}

export default HeadingContent
