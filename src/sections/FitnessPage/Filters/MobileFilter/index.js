import {useState} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Filtertabs from './Filtertabs'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'none',

		'& .MuiDrawer-paper': {
			borderRadius: 20,
		},
		'& .MuiPaper-root': {
			borderRadius: 20,
		},
		[theme.breakpoints.down('md')]: {
			display: 'block',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},

	mobileScreenFilterButton: {
		border: `2px solid ${theme.palette.fitness.main}`,
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
			color: theme.palette.fitness.main,
			fontWeight: 500,
			fontFamily: 'Poppins',
			paddingInlineEnd: 12,
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.fitness.main,
			fontSize: 18,
			// display: 'none',
		},
	},
	Container: {
		// border: '1px solid green',
		// borderRadius: 20,

		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
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
		fontSize: 16,
		textAlign: 'right',
		paddingInline: 12,
		paddingBlock: 6,
		fontWeight: 600,
		color: '#2C3E50',
	},
	drawer: {},
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
		<div className={classes.root}>
			<div className={classes.mobileScreenFilterButton} onClick={toggleDrawer('bottom', true)}>
				<Typography variant='h5'>Filter</Typography>
				<CloseIcon />
			</div>
			<SwipeableDrawer anchor={'bottom'} open={state['bottom']} onClose={toggleDrawer('bottom', false)} onOpen={toggleDrawer('bottom', true)}>
				<div className={classes.Container}>
					<div className={classes.closeButton} onClick={toggleDrawer('bottom', false)}>
						CLOSE
					</div>
					<Filtertabs />
				</div>
			</SwipeableDrawer>
		</div>
	)
}
