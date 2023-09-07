import React, {useState, useRef} from 'react'
import {makeStyles, Typography, Grid, Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import ProfileCard from '../../../components/profileCard'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {useRouter} from 'next/router'
import ProfileFilter from '../../../components/ProfileFilter'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from 'next/link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

// import MobFilter from '../MobFilter'
import GradientButton from '../../../components/GradientButton'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
// import MobileFilter from '../../../components/MobileFilter'
// import MobileFilter from '../../../sections/Carepage/Filters/MobileFilter'
import MobileFilter from '../../../components/MobileFilter'
import {useTheme, useMediaQuery} from '@material-ui/core'

const sortByOptions = [
	{suggestion: 'Sort By', value: ''},
	{suggestion: 'Relevance', value: 'relevance'},
	{suggestion: 'Earliest Available', value: 'earliestAvailable'},
	{suggestion: 'Price- Low to High', value: 'ASC'},
	{suggestion: 'Price- High to Low', value: 'DESC'},
	{suggestion: 'Experience', value: 'experience'},
	{suggestion: 'Ratings', value: 'ratings'},
]

const useStyles = makeStyles(theme => ({
	Positionroot: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		// padding: 8,
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
	searchroot: {
		paddingBlock: 12,
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
	},
	textname: {
		marginBlock: 12,
		marginInlineStart: 100,
		[theme.breakpoints.down('xs')]: {
			marginInlineStart: 0,
		},
		'& .MuiTypography-body1': {
			fontFamily: 'Poppins',
			color: theme.palette.primary.contrastText,
		},
	},
	textchildname: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		gap: 12,
	},
	nearmeposition: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
		},
	},
	maincontentPosition: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			paddingBottom: 12,
		},
		'& .MuiTypography-body1': {
			color: theme.palette.care.main,
		},
	},
	flexdivision: {
		flex: 1,
	},
	flexsplitdivisionmain: {
		display: 'flex',
		gap: 12,
	},
	flexsubsivisionone: {
		flex: 3,
	},
	flexsubsivisiontwo: {
		flex: 1,
		display: 'block',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	Breadcrumbscs: {
		paddingInline: 100,
		cursor: 'pointer',
	},
	filters: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		gap: 12,
		// '& .MuiButton-label': {
		// 	color: theme.palette.paragraph.main,
		// 	fontWeight: theme.typography.h1.fontWeight,
		// },
		// '& .MuiButton-contained': {
		// 	background: 'transparent linear-gradient(109deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		// 	boxShadow: '0px 4px 15px #0000000D',
		// 	border: '1px solid #FFFFFF80',
		// 	borderRadius: 10,
		// },
	},
	filterone: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	filtertwo: {
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
		'& .MuiDrawer-paper': {
			top: 58,
			[theme.breakpoints.up('sm')]: {
				top: 65,
				left: 83,
				width: 685,
			},
		},
		'& .MuiToolbar-regular': {
			width: 0,
			minHeight: 0,
		},
		'& .makeStyles-content': {
			padding: 0,
		},
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	filterWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#000',
		fontWeight: '400',
		fontSize: 17,
		fontFamily: theme.typography.h5.fontFamily,
		letterSpacing: 1,
	},
	filterCloseIcon: {
		display: 'flex',
		alignItems: 'center',
		marginInlineStart: 2,
		cursor: 'pointer',
		color: theme.palette.care.dark,
	},
	sortbyPopper: {
		marginBlockStart: 8,
		position: 'relative',
		zIndex: 100,
	},
	sortbyGrow: {
		background: 'transparent linear-gradient(93deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		borderRadius: 10,
	},
	sortbyBtn: {
		width: 150,
		maxWidth: 200,
		// borderRadius: 10,
		background: 'transparent',
		border: 'none !important',
		color: '#000',
		fontWeight: 500,
		'&:hover': {
			background: 'transparent',
		},
		'&:focus': {
			background: 'transparent',
		},
		'& .Mui-focusVisible': {
			background: 'transparent',
		},
		'& .MuiButton-label': {
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textAlign: 'left',
			display: 'block',
		},
	},
	sortbyArrow: {
		minWidth: 20,
		background: 'transparent',
		border: 'none',
		color: '#000',
		'&:hover': {
			background: 'transparent',
		},
		'&:focus': {
			background: 'transparent',
		},
	},
	break: {
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},

	breadCrumbsNavigation: {
		paddingBlock: 12,

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 6,
		},

		'& a': {
			fontSize: 18,
			color: '#475677',
			textDecoration: 'none',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			fontSize: 18,
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},
}))

const items = [
	{to: '/care', label: 'care'},
	{to: '/care/DoctorProfile', label: 'Doctorlist'},
]
export default function Index() {
	const classes = useStyles()
	const {sortByIndex, setSortByIndex, setSortByFilter, setDoctorSearchFilters, trainerSearchFilters, resetFilters, searchData} = useContextApi()
	const router = useRouter()
	const {currency} = router.query

	// sort by

	// sort by
	const [open, setOpen] = useState(false)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const anchorRef = useRef(null)
	const handleMenuItemClick = (event, index, value) => {
		setSortByFilter(value)
		setSortByIndex(index)
		setOpen(false)
	}
	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen)
	}
	const handleClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}
		setOpen(false)
	}

	return (
		<div className={classes.Positionroot}>
			<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb' className={classes.breadCrumbsNavigation}>
				<Link href='/care'>Care</Link>
				<Typography variant='h5'>Doctors list</Typography>
			</Breadcrumbs>

			{/* <Breadcrumbs Care={"care"} Doctorlist={"Doctorlist"} /> */}
			<div className={classes.maincontentPosition}>
				<div className={classes.textname}>
					<Typography variant='body1'>Best Doctors @ Chennai</Typography>
					<div className={classes.nearmeposition}>
						<Typography variant='h5'>{searchData?.length} Results |</Typography>
						<Typography variant='h5'>Find near me</Typography>
					</div>
				</div>

				{/* Clear Filters */}
				<div className={classes.textchildname}>
					<div className={classes.filters}>
						<div className={classes.filterone}>
							<div className={classes.filterWrapper}>
								Filters
								<span
									onClick={resetFilters}
									className={classes.filterCloseIcon}
									style={doctorClearFilters ? {visibility: 'visible'} : {visibility: 'hidden'}}>
									<HighlightOffIcon />
								</span>
							</div>
						</div>
						{isMobile && (
							<div>
								<MobileFilter mainColor='#7047ea' backgroundColor='#F4ECF7' btnColor={classes.findMorebtn} />
							</div>
						)}
						<div>
							<Grid container direction='column' alignItems='center'>
								<Grid item xs={12}>
									<ButtonGroup disableElevation variant='contained' ref={anchorRef} aria-label='split button'>
										<Button
											disableElevation
											disableFocusRipple
											disableRipple
											className={classes.sortbyBtn}
											aria-controls={open ? 'split-button-menu' : undefined}
											aria-expanded={open ? 'true' : undefined}
											aria-label='select merge strategy'
											aria-haspopup='menu'
											onClick={handleToggle}>
											{sortByOptions?.[sortByIndex]?.suggestion}
										</Button>
										<Button
											className={classes.sortbyArrow}
											disableElevation
											size='small'
											aria-controls={open ? 'split-button-menu' : undefined}
											aria-expanded={open ? 'true' : undefined}
											aria-label='select merge strategy'
											aria-haspopup='menu'
											onClick={handleToggle}>
											<ArrowDropDownIcon />
										</Button>
									</ButtonGroup>
									<Popper className={classes.sortbyPopper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
										{({TransitionProps, placement}) => (
											<Grow
												className={classes.sortbyGrow}
												{...TransitionProps}
												style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}>
												<Paper>
													<ClickAwayListener onClickAway={handleClose}>
														<MenuList id='split-button-menu'>
															{sortByOptions.map((option, index) => (
																<MenuItem
																	key={option?.value}
																	selected={index === sortByIndex}
																	onClick={event => handleMenuItemClick(event, index, option?.value)}>
																	{option?.suggestion}
																</MenuItem>
															))}
														</MenuList>
													</ClickAwayListener>
												</Paper>
											</Grow>
										)}
									</Popper>
								</Grid>
							</Grid>
						</div>

						{/* ------------------------------------------------------------- */}
					</div>
					<div onClick={() => router.push('/care/DoctorProfile/MapFilter')}>
						<GradientButton findMorebtn={classes.findMorebtn}>
							Maps View
							<span style={{display: 'flex'}}>
								<ArrowForwardIcon />
							</span>
						</GradientButton>
					</div>
				</div>
			</div>
			<div className={classes.flexsplitdivisionmain}>
				<div className={classes.flexsubsivisionone}>
					<ProfileCard />
				</div>

				{!isMobile && (
					<div className={classes.flexsubsivisiontwo}>
						<ProfileFilter />
					</div>
				)}
			</div>
		</div>
	)
}
