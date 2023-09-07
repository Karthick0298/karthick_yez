import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		marginInlineStart: 98,
		'& .MuiTypography-h5': {
			fontFamily: theme.typography.h5.fontFamily,
			fontSize: theme.typography.h5.fontSize,
			fontWeight: 400,
		},
		'& .MuiIconButton-root': {
			padding: 0,
			color: '#fff',
		},
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center',
			margin: 0,
		},
		[theme.breakpoints.down('756')]: {
			justifyContent: 'flex-start',
			marginInlineStart: 100,
		},
		[theme.breakpoints.down('600')]: {
			justifyContent: 'center',
			margin: 0,
		},
		[theme.breakpoints.down('491')]: {
			display: 'none',
		},
	},
	popularSearch: {
		display: 'flex',
		alignItems: 'center',
		paddingInline: 32,
		paddingBlock: 4,
		background: 'transparent linear-gradient(93deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		opacity: 1,
		borderRadius: 35,
		backdropFilter: 'blur(30px)',
		'& -webkit-backdrop-filter': 'blur(30px)',
		[theme.breakpoints.down('800')]: {
			paddingInline: 8,
		},
		[theme.breakpoints.down('664')]: {
			paddingInline: 4,
		},
		[theme.breakpoints.down('626')]: {
			paddingInline: 2,
		},
	},
	labelWrapper: {
		background: 'transparent linear-gradient(259deg, #7047EA 0%, #9847EA 100%) 0% 0% no-repeat padding-box',
		marginInlineEnd: 12,
		borderRadius: 16,
	},
	label: {
		paddingBlock: 4,
		paddingInline: 16,
		color: '#fff',
		fontWeight: '300',
		[theme.breakpoints.down('664')]: {
			paddingInline: 12,
		},
		[theme.breakpoints.down('626')]: {
			paddingInline: 8,
		},
	},
	btn: {
		cursor: 'pointer',
		paddingInline: 12,
		color: '#475677',
		opacity: 0.5,
		[theme.breakpoints.down('664')]: {
			paddingInline: 8,
		},
		[theme.breakpoints.down('626')]: {
			paddingInline: 4,
		},
	},
	downArrow: {
		backgroundColor: '#aba9a9',
		marginInlineStart: 12,
		opacity: 1,
		'&:hover': {
			backgroundColor: '#949392',
		},
		[theme.breakpoints.down('626')]: {
			marginInlineStart: 8,
		},
	},
}))

export default useStyles
