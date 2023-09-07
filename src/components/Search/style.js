import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 680,
		minWidth: 604,
		background: `#f5f5f5`,
		borderRadius: 30,
		border: '1px solid #bfbfbf',
		boxShadow: '-3px 5px 30px -10px rgba(0,0,0,0.39)',

		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
			padding: '6px 4px',
		},
		[theme.breakpoints.down('1187')]: {
			minWidth: 552,
		},
		[theme.breakpoints.down('1008')]: {
			minWidth: 420,
		},
		[theme.breakpoints.down('850')]: {
			display: 'none',
		},
		'@global': {
			'::-webkit-scrollbar': {
				width: 0,
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: '#7047EA00',
				borderRadius: 50,
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: '#7047EA00',
			},
		},
	},
	searchWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: `#f5f5f5`,
		borderRadius: 64,
		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
			border: 'none',
			background: `#f5f5f5`,
			opacity: 0.8,
			color: '#475677',
			backdropFilter: 'blur(6px)',
			'&:hover': {
				border: 'none',
			},
		},
		'&: focus': {
			border: '2px solid',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			border: 'none',
		},
		// '& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline': {
		// 	borderColor: 'gold !important',
		// 	borderWidth: '2px !important',
		// 	background: 'gold !important',
		// },
		// '&:hover .MuiOutlinedInput-notchedOutline': {
		// 	border: 'none',
		// },
		// '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		// 	// borderWidth: '2px',
		// 	// borderColor: 'red',
		// 	background: 'gold',
		// },
	},
	specialityWrapper: {
		// marginInlineStart: 12,
		display: 'flex',
		alignItems: 'center',
	},
	searchBar: {
		display: 'flex',
		// alignItems: 'flex-end',
		background: `#f5f5f5`,
	},
	searchIconWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	specialityAutocomplete: {
		minWidth: 150,
		// width: 172,
		maxWidth: 200,
		[theme.breakpoints.down('1187')]: {
			minWidth: 104,
		},
	},
	searchAutoComplete: {
		minWidth: 200,
		width: 340,
		[theme.breakpoints.down('1008')]: {
			width: 0,
			minWidth: 212,
		},
	},
	searchBtn: {
		cursor: 'pointer',
		'& .MuiIconButton-root': {
			padding: 10,
		},
	},
	specialitylistBox: {
		background: `#f5f5f5`,
		maxHeight: '40vh',
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: 14,
		color: '#475677',
		overflowY: 'scroll',
	},
	paperListStyle: {
		color: '#475677',
		minWidth: 200,
		width: 300,
		maxWidth: 450,
		background: `#f5f5f5`,
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: 14,
		borderRadius: 20,
		marginBlockStart: 16,
	},
	paperSearchStyle: {
		color: '#475677',
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: 14,
		marginBlockStart: 8,
		[theme.breakpoints.down('1008')]: {
			minWidth: 320,
		},
	},
	searchBox: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	searchOptions: {
		width: '100%',
		paddingBlock: 6,
		color: '#475677',
	},
	popperStyle: {
		position: 'relative',
		zIndex: 100,
		'& .MuiAutocomplete-listbox': {
			maxHeight: '90vh',
			background: `#f5f5f5`,
		},
	},
	removeBtn: {
		opacity: '0.5',
		textTransform: 'lowercase',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	specialityType: {
		opacity: '0.5',
	},
	card: {
		flex: 1,
		background: 'transparent linear-gradient(104deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000D',
		paddingBlock: 10,
		paddingInline: 12,
		borderRadius: 10,
		maxWidth: 260,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.down('1050')]: {
			display: 'none',
		},

		'& .MuiTypography-h4': {
			fontSize: 14,
			fontStyle: 'normal',
			color: '#475677',
			lineHeight: 1.5,
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.care.contrastText,
			fontSize: 11,
			background: '#E22C24',
			borderRadius: '100%',
			position: 'absolute',
		},
	},
	primeText: {
		color: '#E22C24',
		fontWeight: 500,
	},
}))

export default useStyles
