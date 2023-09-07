import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import {useTheme} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import CloseIcon from '@material-ui/icons/Close'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Button from '../../../components/GradientButton'
// import MobViewFilter from '../../../components/MobTabFilter';
import ProfileFilterTab from '../../../components/MobTabFilter'
const drawerWidth = 'auto'
const useStyles = makeStyles(theme => ({
	drawermain: {
		[theme.breakpoints.down('sm')]: {
			width: 76,
			display: 'flex',
		},
		'& .MuiTypography-h5': {
			paddingInline: 12,
			paddingBlock: 16,
		},
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		// width: drawerWidth,
		// flexShrink: 0,
		width: 'auto',
		'& .MuiList-padding': {
			[theme.breakpoints.down('xs')]: {
				padding: '0px 0px',
				display: 'flex',
				flexDirection: 'column',
				// maxWidth: 116,
			},
			[theme.breakpoints.up('sm')]: {
				display: 'flex',
				flexDirection: 'column',
				maxWidth: 206,
			},
			'& .MuiButton-contained': {
				borderRadius: 0,
				padding: '28px 22px',
			},
		},
		'& .MuiButtonGroup-root': {
			[theme.breakpoints.down('xs')]: {
				display: 'flex',
				flexDirection: 'column',
				maxWidth: 128,
			},
		},
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/BackgroundCare.jpg'})`,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'space-between',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -59,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	borderColor: {
		border: 'none',
		background: 'none',
	},
	filterbuttons: {
		'& filterbuttons': {
			borderRadius: 10,
		},
	},
	belowbutttons: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 4,
		[theme.breakpoints.down('xs')]: {
			paddingBlock: 12,
			paddingInline: 8,
		},
	},
	test: {
		display: 'flex',
	},
}))
function MobFilter(props) {
	const classes = useStyles()
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	const clickToCheck = () => {
		// console.log('checking...')
	}
	const router = useRouter()
	return (
		<div className={classes.drawermain}>
			<button className={classes.borderColor} type='button'>
				<Button onClick={handleOpen}>Filters</Button>
			</button>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleOpen}
					edge='start'
					className={clsx(classes.menuButton, open && classes.hide)}></IconButton>
			</Toolbar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='bottom'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<Typography>Categories</Typography>
					<IconButton onClick={handleClose}>{theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}</IconButton>
				</div>
				<Divider />
				<ProfileFilterTab />
				<Divider />
				<div className={classes.belowbutttons}>
					<Button>Apply</Button>
					<Button>Clear All</Button>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />
			</main>
		</div>
	)
}
export default MobFilter
