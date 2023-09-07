import {useState} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Filtertabs from './Filtertabs'

const useStyles = makeStyles(theme => ({
	baseRoot: {
		display: 'none',

		'& .MuiDrawer-root ': {
			'& MuiPaper-root': {
				borderRadius: 20,
			},
		},

		[theme.breakpoints.down('md')]: {
			display: 'block',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},

	mobileScreenFilterButton: {
		border: `2px solid ${theme.palette.spa.main}`,
		paddingBlock: 8,
		display: 'flex',
		alignItems: 'center',
		paddingInline: 22,
		borderRadius: 30,
		[theme.breakpoints.down('sm')]: {
			paddingBlock: 4,
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			fontSize: 15,
			color: theme.palette.spa.main,
			fontWeight: 500,
			fontFamily: 'Poppins',
			paddingInlineEnd: 12,
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.spa.main,
			fontSize: 18,
			// display: 'none',
		},
	},
	Container: {
		borderRadius: 20,

		[theme.breakpoints.down('sm')]: {
			paddingInline: 0,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
		},
	},
	closeButton: {
		fontSize: 17,
		textAlign: 'right',
		paddingInline: 24,
		paddingBlock: 6,
		color: '#2C3E50',
	},
	drawerContainer: {
		'& .MuiPaper-root': {
			borderTopRightRadius: 24,
			borderTopLeftRadius: 24,
		},
	},
	greyLine: {
		marginBlockStart: 6,
		height: 4,
		width: '15%',
		borderRadius: 10,
		backgroundColor: '#ABB2B9',
		margin: 'auto',
	},
}))

export default function MobileFilter() {
	const classes = useStyles()

	const [state, setState] = useState({
		bottom: false,
	})

	const toggleDrawer = (anchor, open) => event => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}
		setState({...state, [anchor]: open})
	}

	return (
		<div className={classes.baseRoot}>
			<div className={classes.mobileScreenFilterButton} onClick={toggleDrawer('bottom', true)}>
				<Typography variant='h5'>Filter</Typography>
				<CloseIcon />
			</div>

			<SwipeableDrawer
				className={classes.drawerContainer}
				anchor={'bottom'}
				open={state['bottom']}
				onClose={toggleDrawer('bottom', false)}
				onOpen={toggleDrawer('bottom', true)}>
				<div className={classes.Container}>
					<div className={classes.greyLine}></div>
					<div className={classes.closeButton} onClick={toggleDrawer('bottom', false)}>
						Close
					</div>
					<Filtertabs />
				</div>
			</SwipeableDrawer>
		</div>
	)
}
