import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	// scrollbarWidth: 'none',
	scrollBarContainer: {
		// display: 'none',
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
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	root: {
		width: 74,
		height: '89vh',
		overflowX: 'hidden',
		overflowY: 'auto',
		scrollbarWidth: 'none',
		position: 'fixed',
		zIndex: 8999,
		transform: 'translate(12px,14px)',
		borderRadius: 24,
		transition: 'width 0.5s',
		'& .MuiList-root': {
			// paddingBlockStart: 52,
			paddingBlockStart: 20,
			paddingLeft: 4,
			paddingInlineStart: 8,
			paddingInlineEnd: 8,
		},
		'& .MuiListItem-button': {
			'&:hover': {
				background: '#FFFFFF33 0% 0% no-repeat padding-box',
			},
		},
		'& .activeMenu': {
			'& .MuiListItem-root': {
				background: '#FFFFFF33 0% 0% no-repeat padding-box',
				'&:hover': {
					background: '#FFFFFF33 0% 0% no-repeat padding-box',
				},
			},
			// '& .scrollLink': {
			// 	'& .MuiListItem-root': {
			// 		backgroundColor: '#a775ff62',
			// 	},
			// },
		},
		'&:hover': {
			width: 320,
		},
	},

	sideNavBar: {
		// width: 74,
		// width: 324,
		// height: '80vh',
		// overflowY: 'auto',
		// transition: 'width 0.5s',
		paddingBlock: 32,
		// Mobile view
		// backgroundColor: '#E74C3C',
		// display: 'flex',
		// flexWrap: 'wrap',
		// Mobile view

		'& .MuiTypography-h5': {
			fontSize: 18,
			fontFamily: theme.typography.body1.fontFamily,
			color: '#fff',
			whiteSpace: 'nowrap',
			paddingInlineStart: 8,
			// Mobile view
			// display: 'none',
			// Mobile view
		},
		'& .MuiListItem-root': {
			paddingBlock: 14,
		},
		'&:hover': {
			// width: 324,
		},
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

		[theme.breakpoints.down('sm')]: {
			// display: 'none',
		},
	},
	scrollLink: {
		display: 'contents',
		// Mobile View
		// backgroundColor: '#F1C40F',
		// Mobile View
		'& .MuiListItem-root': {
			paddingtop: 4,
			marginBottom: 10,
			borderRadius: 10,
		},
	},
	membershipCard: {
		marginInline: 32,
		marginBlock: 32,
		marginInlineStart: 32,
		backgroundColor: '#CB212187',
		borderRadius: 24,
		boxShadow: 'none',
		'& .MuiTypography-root': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			color: '#fff',
		},
		'& .MuiCardContent-root:last-child': {
			paddingBottom: 14,
		},
		'& .MuiTypography-subtitle2': {
			fontSize: 13,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			color: '#fff',
		},
		'& .MuiAvatar-root': {
			position: 'absolute',
			marginTop: -34,
			left: 134,
		},
	},
	// Style for row menu bar
	rowMenuRoot: {
		// marginBlockStart: 28,
		marginBlockStart: 20,
		overflowX: 'hidden',
		'& .MuiListItem-root': {
			width: '100%',
			// paddingTop: 0,
			// paddingBottom: 0,
			paddingBlock: 12,
			// paddingInline: '12px !important',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: 4,
		},
		'& .MuiList-root': {
			paddingLeft: 4,
			paddingInlineEnd: 8,
			paddingBlockStart: 8,
			paddingInlineStart: 8,
		},
		'& .MuiListItem-gutters': {
			paddingLeft: 0,
			paddingRight: 0,
			minWidth: 58,
		},
		'& .MuiList-padding': {
			paddingTop: 0,
			paddingBottom: 0,
		},
		'& .MuiTypography-h5': {
			// fontSize: 18,
			fontFamily: theme.typography.body1.fontFamily,
			color: '#fff',
			// whiteSpace: 'nowrap',
			// paddingInlineStart: 8,
		},
	},
	rowNavBar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listWrap: {
		borderRadius: 10,
		paddingInline: 10,
		// marginInline: 16,
	},
	rowMenuContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))

export default useStyles
