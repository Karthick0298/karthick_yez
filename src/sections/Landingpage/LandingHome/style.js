import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: '1320px',
		margin: '0px auto',
		[theme.breakpoints.down('sm')]: {
			height: '100%',
			paddingBlockStart: '0px',
		},
		[theme.breakpoints.up('sm')]: {
			height: '100%',
			paddingBlockStart: '0px',
		},
		[theme.breakpoints.up('md')]: {
			height: '88.4vh',
			paddingBlockStart: '42px',
		},
	},
	backColor: {
		background: '#FFFFFF 0% 0% no-repeat padding-box',
		opacity: 1,
		backdropFilter: 'blur(46px)',
	},
	wrapper: {
		height: '100%',
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	imageSection: {
		textAlign: 'center',
		height: '100%',
		width: '100%',
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainWrapper: {
		height: '100%',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingInline: '30px',
	},
	contentColor: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		alignItems: 'flex-start',
		maxWidth: '330px',
		position: 'relative',
		bottom: 50,
		'& .MuiTypography-h2': {
			fontSize: 22,
			lineHeight: '41px',
			letterSpacing: '1.35px',
			color: '#343434',
		},
		'& .MuiTypography-h5': {
			fontSize: 18,
			fontWeight: 600,
			background: `linear-gradient(90deg, #8CC63F 0%, #0062DD 51.49%, #178AEE 101.53%)`,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
		'& .MuiButton-root': {
			color: '#fff',
			background: theme.palette.lyfngo.backgroundImage,
			boxShadow: '0px 6px 18px #0000001A',
			borderRadius: '6px',
			paddingInline: 22,
			opacity: 1,
			fontFamily: theme.typography.h6.fontFamily,
			transition: 'all 0.2s',
			'&:hover': {
				transform: 'scale(1.06)',
				background: theme.palette.lyfngo.backgroundImage,
			},
		},
	},
	contentColor1: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		alignItems: 'flex-start',
		maxWidth: '285px',
		position: 'relative',
		bottom: 50,
		'& .MuiTypography-h2': {
			fontSize: 22,
			lineHeight: '41px',
			letterSpacing: '1.35px',
			color: '#343434',
		},
		'& .MuiTypography-h5': {
			fontSize: 18,
			fontWeight: 600,
			background: `linear-gradient(90deg, #8CC63F 0%, #0062DD 51.49%, #178AEE 101.53%)`,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
		'& .MuiButton-root': {
			color: '#fff',
			background: 'linear-gradient(90deg, #2EB2FF 0%, #0062DD 101.53%)',
			boxShadow: '0px 6px 18px #0000001A',
			borderRadius: '6px',
			paddingInline: 22,
			opacity: 1,
			fontFamily: theme.typography.h6.fontFamily,
			transition: 'all 0.2s',

			'&:hover': {
				transform: 'scale(1.06)',
				background: 'linear-gradient(90deg, #2EB2FF 0%, #0062DD 101.53%)',
			},
		},
	},
	buttonLogin: {
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between',
		paddingInline: '30px',
		'& .MuiButton-root': {
			fontFamily: theme.typography.h6.fontFamily,
			padding: '8px',
			border: '2px solid #343434',
		},
	},
	//mobile
	mobileRoot: {
		paddingInline: '22px',
		paddingBlockEnd: 42,
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	ContentMobile: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		'& .MuiTypography-h2': {
			fontSize: 19,
			lineHeight: '41px',
			letterSpacing: '1.35px',
			color: '#343434',
		},
		'& .MuiTypography-h5': {
			fontSize: 15,
			fontWeight: 600,
			background: `linear-gradient(90deg, #8CC63F 0%, #0062DD 51.49%, #178AEE 101.53%)`,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
		'& .MuiButton-root': {
			color: '#fff',
			background: theme.palette.lyfngo.backgroundImage,
			boxShadow: '0px 6px 18px #0000001A',
			borderRadius: '6px',
			paddingInline: 22,
			opacity: 1,
			fontFamily: theme.typography.h6.fontFamily,
			transition: 'all 0.2s',

			'&:hover': {
				transform: 'scale(1.06)',
				background: theme.palette.lyfngo.backgroundImage,
			},
		},
	},
	buttonChange: {
		display: 'flex',
		justifyContent: 'end',
		padding: '20px',
		'& .MuiButton-root': {
			fontFamily: theme.typography.h6.fontFamily,
			padding: '8px',
			border: '2px solid #343434',
		},
	},
	//animation
	mainScroll: {
		height: '1.2em',
		lineHeight: '1.2em',
		position: 'relative',
		overflow: 'hidden',
		bottom: '32px',
		left: '100px',
		// width: '10em',
	},
	// secScroll: {
	// 	position: 'absolute',
	// 	top: 0,
	// 	listStyle: 'none',
	// 	animation: '$slide 5s infinite',
	// },
	//2
	mainScroll1: {
		height: '1.2em',
		lineHeight: '1.2em',
		position: 'relative',
		overflow: 'hidden',
		// bottom: '32px',
		// left: '62px',
		width: '10em',
		bottom: '32px',
		left: '60px',
	},
	// secScroll1: {
	// 	position: 'absolute',
	// 	top: 0,
	// 	listStyle: 'none',
	// 	animation: '$slide 7s infinite',
	// },
	//3
	mainScroll2: {
		height: '1.2em',
		lineHeight: '1.2em',
		position: 'relative',
		overflow: 'hidden',
		width: '10em',
	},
	// secScroll2: {
	// 	position: 'absolute',
	// 	top: 0,
	// 	listStyle: 'none',
	// 	animation: '$slide 7s infinite',
	// },
	//3
	mainScroll3: {
		height: '1.2em',
		lineHeight: '1.2em',
		position: 'relative',
		overflow: 'hidden',
	},
	// secScroll3: {
	// 	position: 'absolute',
	// 	top: 0,
	// 	listStyle: 'none',
	// 	animation: '$slide 7s infinite',
	// },

	/* Fade styling */

	business: {
		position: 'absolute',
		width: '100%',
		opacity: 0,
	},
	care: {
		color: theme.palette.care.main,
		animation: '$ani1 15s infinite',
	},
	fitness: {
		color: theme.palette.fitness.main,
		animation: '$ani2 15s infinite',
	},
	mind: {
		color: theme.palette.yoga.main,
		animation: '$ani3 15s infinite',
	},
	sports: {
		color: theme.palette.sports.main,
		animation: '$ani4 15s infinite',
	},
	spa: {
		color: theme.palette.spa.main,
		animation: '$ani5 15s infinite',
	},
	b1: {
		color: theme.palette.lyfngo.main,
		animation: '$ani1 15s infinite',
	},
	b2: {
		color: theme.palette.lyfngo.main,
		animation: '$ani2 15s infinite',
	},
	b3: {
		color: theme.palette.lyfngo.main,
		animation: '$ani3 15s infinite',
	},
	b4: {
		color: theme.palette.lyfngo.main,
		animation: '$ani4 15s infinite',
	},
	b5: {
		color: theme.palette.lyfngo.main,
		animation: '$ani5 15s infinite',
	},
	'@keyframes ani1': {
		'0%': {
			opacity: 0,
		},
		'10%': {
			opacity: 1,
		},
		'20%': {
			opacity: 0,
		},
	},
	'@keyframes ani2': {
		'20%': {
			opacity: 0,
		},
		'30%': {
			opacity: 1,
		},
		'40%': {
			opacity: 0,
		},
	},
	'@keyframes ani3': {
		'40%': {
			opacity: 0,
		},
		'50%': {
			opacity: 1,
		},
		'60%': {
			opacity: 0,
		},
	},
	'@keyframes ani4': {
		'60%': {
			opacity: 0,
		},
		'70%': {
			opacity: 1,
		},
		'80%': {
			opacity: 0,
		},
	},
	'@keyframes ani5': {
		'80%': {
			opacity: 0,
		},
		'90%': {
			opacity: 1,
		},
		'100%': {
			opacity: 0,
		},
	},
	backPink: {
		width: '155px',
		height: '155px',
		opacity: 0.1,
		zIndex: -1,
		position: 'absolute',
		background: '#ff232730',
		boxShadow: '1px 1px 26px 50px #ff232730',
		borderRadius: '4px 24px 117px 63px',
	},
}))
export default useStyles
