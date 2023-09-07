import React, {useState, useRef, useEffect, useCallback} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import CloseIcon from '@material-ui/icons/Close'
import {
	Breadcrumbs,
	Typography,
	Grid,
	Button,
	ButtonGroup,
	ClickAwayListener,
	Grow,
	Paper,
	Popper,
	MenuItem,
	MenuList,
	useTheme,
	useMediaQuery,
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import CancelIcon from '@material-ui/icons/Cancel'
import Link from 'next/link'
import GradientButton from '../../../components/GradientButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ProfileListCard from '../../../components/ProfileListCard'
// import MobileFilter from '../../../sections/SportsPage/Filters/MobileFilter'
import MobileFilter from '../../../components/MobileFilter'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import Filters from '../../../components/ProfileFilter'
// import Filters from '../../../sections/MindPage/Filters'
// import searchListProfileApi from '../../../../Service/ProfileList/SearchProfileList'
import InfiniteScroll from 'react-infinite-scroll-component'
import ProfileListCard2 from '../../../components/ProfileListCard2'
import useMindMasterContext from '../../../../lib/Utils/hooks/useMindMasterContext'

const sortByOptions = [
	// {suggestion: 'Sort By', value: ''},
	{suggestion: 'Relevance', value: ''},
	{suggestion: 'Earliest Available', value: '5'},
	{suggestion: 'Price- Low to High', value: 'ASC'},
	{suggestion: 'Price- High to Low', value: 'DESC'},
	{suggestion: 'Experience', value: 'EXP'},
	{suggestion: 'Ratings', value: 'RATING'},
]

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		// [theme.breakpoints.up('md')]: {
		// 	paddingInline: 100,
		// },
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

	topSection: {
		// background: `yellow`,
	},

	title: {
		fontSize: 22,
		color: theme.palette.yoga.main,
		fontWeight: 500,
		[theme.breakpoints.down('sm')]: {
			fontSize: 20,
		},
	},

	topSectionSub: {
		display: 'flex',
		justifyContent: 'space-between',
		// alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},

	topSectionSubLeft: {
		display: 'flex',
		paddingBlock: 5,

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			color: '#475677',
			fontSize: 18,
			'& span': {
				paddingInline: 12,
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},

		'& a': {
			fontSize: 18,
			color: theme.palette.yoga.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	topSectionSubRight: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		gap: 12,
	},

	mainSection: {
		display: 'flex',
		gap: 20,
		paddingBlockStart: 12,
		[theme.breakpoints.down('sm')]: {},
	},

	profileList: {
		flex: 3,
	},

	filters: {
		flex: 1,
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
	mobileScreenFilterButton: {
		border: `2px solid ${theme.palette.yoga.main}`,
		display: 'flex',
		alignItems: 'center',
		paddingInline: 12,
		borderRadius: 30,
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			fontSize: 16,
			color: theme.palette.yoga.main,
			fontWeight: 500,
			fontFamily: 'Poppins',
			paddingInlineEnd: 8,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiSvgIcon-root': {
			color: theme.palette.yoga.main,
			fontSize: 18,
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
				// display: 'none',
			},
		},
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},

	// Clear Filters Button
	filterWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#475677',
		fontWeight: '500',
		fontSize: 17,
		fontFamily: theme.typography.h5.fontFamily,
	},
	filterCloseIcon: {
		display: 'flex',
		alignItems: 'center',
		marginInlineStart: 4,
		cursor: 'pointer',
		color: theme.palette.yoga.dark,
		'& .MuiSvgIcon-root': {
			fontSize: 20,
			color: theme.palette.yoga.main,
		},
	},
	// sortBy Filter
	sortbyPopper: {
		marginBlockStart: 8,
		position: 'relative',
		zIndex: 100,
	},
	sortbyGrow: {
		background: 'transparent linear-gradient(93deg, #ffffff 0%, #ffffffd1 100%)',
		borderRadius: 10,
	},
	sortbyBtn: {
		width: 90,
		maxWidth: 200,

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
			textTransform: 'capitalize',
			fontFamily: theme.typography.h5.fontFamily,
			color: '#475677',
			fontWeight: '500',
			fontSize: 16,
			letterSpacing: 0.1,
		},
	},
	sortbyArrow: {
		// minWidth: 20,
		background: 'transparent',
		border: 'none',
		color: '#475677',
		'&:hover': {
			background: 'transparent',
		},
		'&:focus': {
			background: 'transparent',
		},
	},
	sortContainer: {
		'& .MuiButton-root': {
			paddingBlock: 0,
		},
	},

	// ############### mobileFilter ###############//
	mobileFilter: {},
}))

export default function MastersProfileList() {
	const classes = useStyles()

	const {loading, setLoading, mindLocFilters} = useContextApi()
	const {
		mindMasterSearchData,
		mindMasterSearchFilters,
		setMindMasterSearchFilters,
		mindMasterClearFilters,
		setMindMasterClearFilters,
		budgetValue,
		appointmentChecked,
		setAppointmentChecked,
		fetchMoreData,
		hasMore,
		mindMasterResetFilters,
		mindMasterOffset,
		setMindMasterOffset,
	} = useMindMasterContext()
	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = mindMasterSearchFilters

	// sort by
	const [open, setOpen] = useState(false)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const anchorRef = useRef(null)
	const handleMenuItemClick = (event, index, value) => {
		setMindMasterSearchFilters({...mindMasterSearchFilters, sortByIndex: index, sortByFilter: value})
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
		<div className={classes.root}>
			<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb' className={classes.breadCrumbsNavigation}>
				<Link href='/mind'>Mind</Link>
				<Typography variant='h5'>Yoga Masters list</Typography>
			</Breadcrumbs>

			<div className={classes.topSection}>
				<Typography variant='h2' className={classes.title}>
					Best Yoga Masters @ Chennai
				</Typography>

				<div className={classes.topSectionSub}>
					<div className={classes.topSectionSubLeft}>
						<Typography variant='h5'>
							{mindMasterSearchData?.length} Results<span>|</span>
						</Typography>
						<Link href='/mind'>Find near me</Link>
					</div>

					<div className={classes.topSectionSubRight}>
						{/* Clear Filters */}
						{!isMobile && (
							<div className={classes.filterWrapper}>
								Filters
								<span
									onClick={mindMasterResetFilters}
									className={classes.filterCloseIcon}
									style={mindMasterClearFilters ? {visibility: 'visible'} : {visibility: 'hidden'}}>
									<CancelIcon />
								</span>
							</div>
						)}
						{isMobile && (
							<div>
								<MobileFilter
									searchFilters={mindMasterSearchFilters}
									setSearchFilters={setMindMasterSearchFilters}
									clearFilters={mindMasterClearFilters}
									setClearFilters={setMindMasterClearFilters}
									budgetValue={budgetValue}
									appointmentChecked={appointmentChecked}
									setAppointmentChecked={setAppointmentChecked}
									setOffset={setMindMasterOffset}
									locationFilters={mindLocFilters}
									resetFilters={mindMasterResetFilters}
									mainColor='#0cc593'
									backgroundColor='#D5F5E3'
									btnColor={classes.findMorebtn}
								/>
							</div>
						)}
						{/* sort by */}
						<div className={classes.sortContainer}>
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

						<div>
							<Link href='/commingsoon'>
								<GradientButton findMorebtn={classes.findMorebtn}>
									Map View <ArrowForwardIcon />
								</GradientButton>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className={classes.mainSection}>
				<div className={classes.profileList}>
					<ProfileListCard2
						profilePrefix={'Mr.'}
						professionIcon={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Fitness/fitness-shield.svg'}
						searchData={mindMasterSearchData}
						profilePath=''
						fontColor='#0CC593'
						btnColor={classes.findMorebtn}
						InfiniteScroll={InfiniteScroll}
						fetchMoreData={fetchMoreData}
						hasMore={hasMore}
						consultMethod={{methodOne: 'For Center', methodTwo: 'For Online', methodThree: 'For Home'}}
						availabilityMethod={{methodOne: 'Center', methodTwo: 'Video call', methodThree: 'Home visit'}}
					/>
				</div>
				{!isMobile && (
					<div className={classes.filters}>
						<Filters
							searchFilters={mindMasterSearchFilters}
							setSearchFilters={setMindMasterSearchFilters}
							clearFilters={mindMasterClearFilters}
							setClearFilters={setMindMasterClearFilters}
							budgetValue={budgetValue}
							appointmentChecked={appointmentChecked}
							setAppointmentChecked={setAppointmentChecked}
							setOffset={setMindMasterOffset}
							locationFilters={mindLocFilters}
							btnColor={classes.findMorebtn}
							primaryColor={'#0cc593'}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
