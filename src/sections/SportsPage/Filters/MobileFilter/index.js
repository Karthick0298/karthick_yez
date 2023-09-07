import {useState} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Filtertabs from './Filtertabs'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'
import Button from '../../../../components/GradientButton'

const useStyles1 = makeStyles(theme => ({
	root: {
		// display: 'none',

		'& .MuiDrawer-root ': {
			'& MuiPaper-root': {
				borderRadius: 20,
			},
		},

		// [theme.breakpoints.down('md')]: {
		// 	display: 'block',
		// },
		// [theme.breakpoints.up('md')]: {
		// 	display: 'none',
		// },
	},

	mobileScreenFilterButton: {
		border: '2px solid',
		// borderColor: 'green',
		borderColor: props => props.mainColor,
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
			color: props => props.mainColor,
			fontWeight: 500,
			fontFamily: 'Poppins',
			paddingInlineEnd: 12,
		},
		'& .MuiSvgIcon-root': {
			color: props => props.mainColor,
			fontSize: 18,
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
			borderTopRightRadius: 18,
			borderTopLeftRadius: 18,
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
	btnWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBlockStart: 4,
	},
	clearAll: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		fontSize: 16,
		paddingInline: 24,
		// fontWeight: 600,
		color: '#2C3E50',
		fontFamily: theme.typography.h5.fontFamily,
	},
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function MobileFilter(props) {
	const {btnColor} = props

	const classes = useStyles1(props)
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
				<Typography variant='h5'>Filter</Typography>
				<CloseIcon />
			</div>

			<SwipeableDrawer
				className={classes.drawerContainer}
				anchor={'bottom'}
				open={drawerState['bottom']}
				onClose={toggleDrawer('bottom', false)}
				onOpen={toggleDrawer('bottom', true)}>
				<div className={classes.Container}>
					<div className={classes.greyLine}></div>
					<section className={classes.btnWrapper}>
						<div onClick={resetFilters} className={classes.clearAll}>
							Clear All <CloseIcon size='small' style={{paddingInlineStart: '2px'}} />
						</div>
						<div className={classes.closeButton} onClick={toggleDrawer('bottom', false)}>
							Close
						</div>
					</section>
					<Filtertabs toggleDrawer={toggleDrawer} mainColor={props.mainColor} backgroundColor={props.backgroundColor} buttonColor={props.btnColor} />
				</div>
			</SwipeableDrawer>
		</div>
	)
}
