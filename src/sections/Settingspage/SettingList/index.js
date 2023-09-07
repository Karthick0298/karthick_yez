import {makeStyles, MenuList, Typography} from '@material-ui/core'
import {Height} from '@material-ui/icons'
// import MenuListFolder from '../../../components/MenuList/index';
import MenuListFolder from '../../../components/SettingsMenu'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import DashboardEllusion from '../../../components/BackgroundEllusion/DashboardEllusion/index'

const useStyles = makeStyles(theme => ({
	'@global': {
		'::-webkit-scrollbar': {
			width: 6,
		},

		/* Handle */
		'::-webkit-scrollbar-thumb': {
			background: '#ccc',
			borderRadius: 57,
		},

		/* Handle on hover */
		'::-webkit-scrollbar-thumb:hover': {
			background: '#888',
		},
	},
	appoinmentBgcolor: {
		paddingLeft: 105,
		paddingRight: 57,
		paddingTop: 22,
		paddingBottom: 44,
		[theme.breakpoints.down('xs')]: {
			padding: 14,
			// height: '100vh',
		},
		[theme.breakpoints.up('sm')]: {
			paddingLeft: 105,
			paddingRight: 33,
		},
		'& .MuiTypography-h6': {
			textTransform: 'initial',
			color:'red',
		},
	},
	appoinmentMain: {
		display: 'grid',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		gridTemplateColumns: 'repeat(6, 1fr)',
		marginTop: 14,
		background: 'transparent linear-gradient(116deg, #FFFFFFC2 0%, #FFFFFFc2 100%)',
		boxShadow: '0px 3px 6px #00000026',
		backdropFilter: 'blur(30px)',
		[theme.breakpoints.down('xs')]: {
			gridTemplateColumns: '0fr',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},

		'& .makeStyles-MenuListstyle-22': {
			display: 'flex',
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
			},
		},
		'@global': {
			'::-webkit-scrollbar': {
				width: 6,
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: 'transparent linear-gradient(116deg, #ffffff00 0%, #FFFFFFc2 100%)',
				borderRadius: 57,
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: 'transparent linear-gradient(116deg, #FFFFFFC2 0%, #FFFFFFc2 100%)',
			},
		},
	},
	appoinmentMainone: {
		display: 'flex',
		borderRight: '1px solid #707070',
		[theme.breakpoints.down('xs')]: {
			borderRight: 0,
		},
		[theme.breakpoints.up('sm')]: {
			borderRight: '1px solid #707070',
		},
	},
	appoinmentMaintwo: {
		cursor: 'pointer',
		'& .MuiList-padding': {
			padding: '51px 38px',
		},
		'& .MuiMenuItem-root': {
			textAlign: 'left',
			font: 'normal normal normal 18px/27px Poppins',
			letterSpacing: 0.54,
			color: '#3D4756',
			opacity: 1,
			fontSize: 14,
			lineHeight: 2.2,
			borderRadius: 6,
			'&:hover': {
				backgroundColor: '#FCEAEA',
			},
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	gridToggle: {
		borderRight: '1px solid #e4e4e4',
		gridColumn: '0',
		gridRow: '1/5',
		opacity: 0,
		transition: 'all 1s ease .1s',
	},
	grid: {
		transition: 'width 1s',
		borderRight: '2px solid #7070705e',
		gridColumn: '1',
		gridRow: '1/5',
		opacity: 1,
		transition: 'all 1s ease .1s',
		[theme.breakpoints.down('xs')]: {
			borderRight: 'none',
		},
	},
	childrenToggle: {
		width: '100%',
		overflow: 'auto',
		gridColumn: '1 / 7',
		gridRow: '1 / 3',
		// height: '80vh',
	},
	children: {
		width: '100%',
		height: '80vh',
		overflowY: 'auto',
		overflow: 'hidden',
		gridColumn: '2 / 7',
		gridRow: '1 / 3',
		'@global': {
			'::-webkit-scrollbar': {
				width: 6,
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: '#ccc',
				borderRadius: 57,
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: 'transparent linear-gradient(116deg, #FFFFFFC2 0%, #FFFFFFc2 100%)',
			},
		},
	},
}))
function AppoinmentLayout(props) {
	const classes = useStyles()
	const {toggleState, setToggleState} = props
	const {user} = useAuth()

	return (
		<DashboardEllusion>
			<div className={classes.appoinmentBgcolor}>
				{user && <Typography variant='h6'>{user.displayName} records : </Typography>}
				<div className={classes.appoinmentMain}>
					<div className={toggleState ? classes.gridToggle : classes.grid}>
						<MenuListFolder toggleState={toggleState} setToggleState={setToggleState} />
					</div>
					<div className={toggleState ? classes.childrenToggle : classes.children}>{props.children}</div>
				</div>
			</div>
		</DashboardEllusion>
	)
}
export default AppoinmentLayout
