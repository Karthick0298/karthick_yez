import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		background: '#FFFFFF',
		display: 'flex',
		justifyContent: 'center',
	},
	container: {
		fontFamily: 'Poppins',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: 1320,
		},
	},
	sectionOne: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		paddingBlockStart: 50,
		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 20,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockEnd: 40,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockEnd: 50,
		},
	},
	sectionOneContainer: {
		textAlign: 'center',
		zIndex: 10,

		[theme.breakpoints.up('xs')]: {
			maxWidth: '100%',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '67%',
		},

		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',
			fontSize: 40,
			fontWeight: 600,
			lineHeight: '136%',
			color: '#0062DD',
			'& span': {
				fontWeight: 600,
				color: '#000',
			},

			[theme.breakpoints.up('xs')]: {
				fontSize: 28,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 36,
			},
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: 'Poppins',

			paddingInline: 12,
			color: '#303030',
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
				paddingBlock: 10,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
				paddingBlock: 14,
			},
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
				marginBlockStart: 12,
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				marginBlockStart: 24,
				fontSize: 16,
			},
		},
	},
	sectionOneImgOne: {
		position: 'absolute',
		top: 50,
		left: 10,
		zIndex: 5,

		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'unset',
		},
	},
	sectionOneImgTwo: {
		position: 'absolute',
		top: 50,
		right: 10,
		zIndex: 5,

		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'unset',
		},
	},
	sectionTwoContainer: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.up('xs')]: {
			paddingInline: 22,
		},
	},
	sectionTwoBackground: {
		clipPath: 'ellipse(53% 40% at 50% 2%)',
		position: 'absolute',
		background: '#ffffff',
		width: '100%',
		height: '100%',
	},
	sectionTwo: {
		paddingBlockEnd: 120,
	},
	availableModules: {
		paddingBlock: 32,
		paddingInline: 12,
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'space-around',
			gap: 15,
		},
	},
	moduleCard: {
		padding: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: '100%',
		[theme.breakpoints.down('md')]: {
			justifyContent: 'flex-start',
		},
		'&:hover': {
			cursor: 'pointer',
			'& .MuiTypography-h5': {
				fontFamily: 'Poppins',
				fontWeight: 500,
				paddingBlockStart: 6,
				color: '#0062dd',
				[theme.breakpoints.up('xs')]: {
					fontSize: 19,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 19,
				},
			},
			'& .MuiSvgIcon-root': {
				textTransform: 'none',
				color: '#0062DD',
				marginLeft: 4,
				[theme.breakpoints.up('xs')]: {
					fontSize: 28,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 30,
				},
			},
		},
		[theme.breakpoints.up('xs')]: {
			maxWidth: '100%',
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: 260,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 400,
			justifyContent: 'flex-start',
		},

		'& .MuiTypography-h5': {
			fontFamily: 'Poppins',
			fontWeight: 500,
			paddingBlockStart: 6,
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 19,
			},
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: 'Poppins',
			textAlign: 'justify',
			color: '#303030',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiButtonBase-root': {
			'& .MuiButton-label': {
				fontFamily: 'Poppins',
				textDecoration: 'underline',
				textTransform: 'none',
				color: '#0062DD',
				[theme.breakpoints.up('xs')]: {
					fontSize: 24,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 26,
				},
			},
			'& .MuiSvgIcon-root': {
				textTransform: 'none',
				color: '#000',
				marginLeft: 4,
				[theme.breakpoints.up('xs')]: {
					fontSize: 28,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 30,
				},
			},
		},
	},

	calenderDescSection: {
		paddingBlock: 32,
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '100%',
		paddingInline: 16,

		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},

	calenderDescSectionLeft: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '50%',
		},
	},
	calenderDescSectionRight: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '45%',
		},

		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',

			fontWeight: 500,
			textAlign: 'left',
			lineHeight: '136%',
			'& span': {
				color: '#0062DD',
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
	},
	calenderDescSectionRightt: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			width: '45%',
		},

		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',

			fontWeight: 500,
			textAlign: 'left',
			lineHeight: '136%',
			'& span': {
				color: '#0062DD',
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 26,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 32,
			},
		},
		'& .MuiTypography-subtitle1': {
			paddingBlock: 12,
			fontFamily: 'Poppins',
			textAlign: 'left',
			fontSize: 16,
			lineHeight: 1.75,
			letterSpacing: 0.6,
		},
		'& .MuiButtonBase-root': {
			background: theme.palette.lyfngo.backgroundImage,
			textTransform: 'none',
			fontFamily: 'Poppins',
			color: '#FFFFFF',
			paddingInline: 30,
			marginBlock: 18,
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
	},
	trialContainer: {
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 20,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 34,
		},
	},

	sectionThreeContainer: {
		display: 'flex',
		justifyContent: 'center',
		paddingBlockStart: 32,
		paddingInline: 18,
		transform: 'translateY(-120px)',
		marginBlockEnd: -66,
	},

	sectionThree: {
		borderRadius: 16,
		background: '#FFFFFF',
		boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
		padding: 12,
		maxWidth: 1100,
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'space-around',
		},
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
		},
	},
	bannerImg: {
		paddingInline: 8
		// paddingTop: 8,
		// [theme.breakpoints.down('sm')]: {
		// 	display: 'none',
		// },
	},
	sectionThreeCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',

		[theme.breakpoints.up('xs')]: {
			maxWidth: 200,
			padding: 6,
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: 218,
			padding: 8,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 248,
			padding: 10,
		},

		'& .MuiTypography-h5': {
			textAlign: 'center',
			fontFamily: 'Poppins',

			fontWeight: 500,
			paddingBlockStart: 6,

			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
			},
		},

		'& .MuiTypography-subtitle1': {
			textAlign: 'center',
			fontFamily: 'Poppins',

			color: '#303030',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
	sectionFour: {
		paddingBlockEnd: 32,
	},
	sectionFourHeading: {
		textAlign: 'center',
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',
			fontSize: 32,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 28,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 34,
			},
			color: '#0062DD',
			'& span': {
				fontWeight: 600,
				color: '#000',
			},
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Poppins',
			fontSize: 24,
			color: '#000',
			fontWeight: 400,
			marginTop: 8,
			// [theme.breakpoints.down('md')]: {
			// 	fontSize: 16,
			// },
		},
	},
	modulesHeader: {
		textAlign: 'center',
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',
			fontSize: 32,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 28,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 34,
			},
			color: '#000',
			'& span': {
				fontWeight: 600,
				color: '#0062dd',
			},
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Poppins',
			fontSize: 18,
			color: '#000',
			fontWeight: 400,
			marginTop: 8,
		},
	},
	sectionFourSliderContainer: {
		paddingBlock: 32,
		paddingInline: 12,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		// gap: 15,
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center',
		},
	},
	slidingcard: {
		maxHeight: 210,
		minHeight: 210,
		maxWidth: 210,
		minWidth: 210,
		display: 'flex',
		flexDirection: 'column',
		gap: 15,
		marginTop: 15,
		marginInline: 7,
		alignItems: 'center',
		height: '100%',
		width: '100%',
		position: 'relative',
		borderRadius: 14,
		overflow: 'hidden',
		[theme.breakpoints.up('xs')]: {
			maxHeight: 150,
			minHeight: 150,
			maxWidth: 150,
			minWidth: 150,
		},
		[theme.breakpoints.up('md')]: {
			maxHeight: 210,
			minHeight: 210,
			maxWidth: 210,
			minWidth: 210,
		},
	},
	groupImages: {
		width: 170,
		height: 170,
		[theme.breakpoints.down('md')]: {
			width: 130,
			height: 130
		}
	},
	slidingcardImageBox: {},
	slidingcardContent: {
		boxSizing: 'border-box',
		position: 'absolute',
		display: 'block',
		padding: 12,
		height: '100%',
		width: '100%',
		borderRadius: '50% 50% 0% 0% / 12% 12% 0% 0%',
		top: '76%',
		transition: 'all 400ms ease-out',
		transitionDuration: '0.6s',
		'&:hover': {
			borderRadius: '0% 0% 0% 0%',
			top: '0%',
		},

		'& .MuiTypography-h5': {
			paddingBlockStart: 4,
			fontFamily: 'Poppins',
			paddingBlockEnd: 20,
			fontWeight: 550,
			color: '#FFFFFF',
			textAlign: 'center',
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
				paddingBlockEnd: 0,
			},
			// [theme.breakpoints.up('sm')]: {
			// 	fontSize: 20,
			// },
		},
		'& .MuiTypography-subtitle1': {
			color: '#FFFFFF',
			textAlign: 'center',
			fontFamily: 'Poppins',
			[theme.breakpoints.down('sm')]: {
				fontSize: 11,
				paddingBlockEnd: 0,
			},
		},
	},

	swiperContainer: {
		'& .swiper-button-prev': {
			display: 'none',
		},

		'& .swiper-button-next': {
			display: 'none',
		},
	},
	sectionFive: {
		position: 'relative',
		paddingBlockStart: 16,
	},
	sectionFiveOne: {
		position: 'absolute',
		background: '#0062DD20',
		clipPath: 'polygon(0 0, 100% 0, 100% 24%, 0 100%)',
		width: '100%',
		height: '100%',
	},
	sectionFiveTwo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
		paddingInline: 16,

		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 22,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 32,
		},
	},
	sectionFiveThree: {
		'& .MuiTypography-h3': {
			fontWeight: 500,
			fontFamily: 'Poppins',
			textAlign: 'center',
			lineHeight: '136%',
			[theme.breakpoints.up('xs')]: {
				paddingBlockEnd: 22,
				paddingBlock: 18,
				fontSize: 26,
			},
			[theme.breakpoints.up('sm')]: {
				paddingBlock: 28,
				paddingBlock: 32,
				fontSize: 32,
			},

			'& span': {
				color: '#0062DD',
			},
		},
	},
	faqsection: {
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',
			fontWeight: 600,
			paddingBlockStart: 6,
			color: '#0062dd',
			textAlign: 'center',
			// fontSize: 32,
			[theme.breakpoints.up('xs')]: {
				fontSize: 20,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
			},
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: 'Poppins',
			fontWeight: 500,
			paddingBlockStart: 6,
			color: '#000',
			// textAlign: 'center',
			// fontSize: 32,
			// [theme.breakpoints.up('xs')]: {
			// 	fontSize: 20,
			// },
			// [theme.breakpoints.up('sm')]: {
			// 	fontSize: 32,
			// },
		},
		'& .MuiPaper-root': {
			boxShadow: 'none',
		},
		'& .MuiAccordion-root.Mui-expanded:first-child': {
			borderBottom: '1px solid #c8bfbf',
			margin: 0,
		},
		'& .MuiAccordion-root.Mui-expanded:last-child': {
			borderBottom: '1px solid #c8bfbf',
			margin: 0,
		},
		'& .MuiAccordion-root.Mui-expanded': {
			borderBottom: '1px solid #c8bfbf',
			margin: 0,
		},
		'& .MuiAccordionDetails-root': {
			padding: '0px 16px 16px',
		},
		'& .MuiButtonBase-root': {
			display: 'flex',
			justifyContent: 'space-between',
		},
	},
	accordion: {
		'& .MuiTypography-subtitle1': {
			fontWeight: 500,
			paddingBlockStart: 0,
			'& span': {
				fontWeight: 600,
				color: '#000',
			},
		},
	},
}))
