import {useState} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
// import Filtertabs from './Filtertabs'
import Filtertabs from './FilterTabs'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'

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
		border: `2px solid ${theme.palette.care.main}`,
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
			color: theme.palette.care.main,
			fontWeight: 500,
			fontFamily: 'Poppins',
			paddingInlineEnd: 12,
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.care.main,
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
	btnWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBlockStart: 4,
	},
	closeButton: {
		fontSize: 16,
		fontWeight: 600,
		color: '#2C3E50',
		fontFamily: theme.typography.h5.fontFamily,
	},
	clearAll: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		fontSize: 16,
		fontWeight: 600,
		color: '#2C3E50',
		fontFamily: theme.typography.h5.fontFamily,
	},
	drawer: {},
}))

export default function MobileFilter() {
	const classes = useStyles()
	const {resetFilters} = useContextApi()

	const [drawerState, setDrawerState] = useState({
		bottom: false,
	})
	const toggleDrawer = (anchor, open) => event => {
		if (event && event?.type === 'keydown' && (event?.key === 'Tab' || event?.key === 'Shift')) {
			return
		}
		setDrawerState({...drawerState, [anchor]: open})
	}

	return (
		<div className={classes.root}>
			<div className={classes.mobileScreenFilterButton} onClick={toggleDrawer('bottom', true)}>
				<Typography variant='h5'>Filters</Typography>
			</div>
			<SwipeableDrawer anchor={'bottom'} open={drawerState['bottom']} onClose={toggleDrawer('bottom', false)} onOpen={toggleDrawer('bottom', true)}>
				<div className={classes.Container}>
					<section className={classes.btnWrapper}>
						<div onClick={resetFilters} className={classes.clearAll}>
							Clear All <CloseIcon size='small' style={{paddingInlineStart: '2px'}} />
						</div>
						<div className={classes.closeButton} onClick={toggleDrawer('bottom', false)}>
							CLOSE
						</div>
					</section>
					<Filtertabs toggleDrawer={toggleDrawer} />
				</div>
			</SwipeableDrawer>
		</div>
	)
}
