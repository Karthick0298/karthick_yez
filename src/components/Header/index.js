import React, {useState, useEffect} from 'react'
import {makeStyles, Button, Typography, Popover, IconButton} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Image from 'next/image'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SignUp from './SignUp'
import Link from 'next/link'
// import Location from '../Location'
// import Search from '../Search'
// import useContextApi from '../../../lib/Utils/hooks/useContextApi'
// import MobileSearchWrapper1 from '../Search/MobileSearchWrapper1'
import useAuth from '../../../lib/Utils/hooks/UseAuth'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'sticky',
		// width: '100%',
		top: 0,
		zIndex: 8999,
		'& .MuiToolbar-regular': {
			paddingInline: 16,
			[theme.breakpoints.down('sm')]: {
				padding: 8,
			},
			[theme.breakpoints.down('1187')]: {
				paddingInline: 8,
			},
		},
	},
	header: {
		background: '#f5f5f58c',
		backdropFilter: 'blur(8px)',
		border: '1px solid #FFFFFF80',
		boxShadow: '0px 3px 6px #00000026',
		justifyContent: 'center',
		alignItems: 'center',
	},
	burgerMenu: {
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			position: 'relative',
			top: 6,
			left: -3,
		},
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexGrow: 1,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
	},
	rightIcons: {
		display: 'flex',
		alignItems: 'center',
		gap: 24,
		// [theme.breakpoints.down('xs')]: {
		// 	display: 'none',
		// },
		[theme.breakpoints.up('sm')]: {
			gap: 24,
			alignItems: 'center',
		},
		'& .MuiSvgIcon-root': {
			fontSize: 24,
			color: '#4b6072',
		},
		'& .MuiIconButton-root': {
			padding: 0,
		},
		'& .MuiDivider-flexItem': {
			height: 30,
			marginTop: 8,
		},
	},
	formControl: {
		display: 'flex',
		gap: 12,
		minWidth: 120,
		marginRight: 20,
		cursor: 'pointer',
		[theme.breakpoints.down('850')]: {
			display: 'none',
		},
		[theme.breakpoints.down('xs')]: {
			minWidth: 100,
			marginRight: 0,
		},
		[theme.breakpoints.down('911')]: {
			marginRight: 0,
		},
		'& .MuiButton-text': {
			textTransform: 'capitalize',
		},
		'& .MuiButton-label': {
			gap: 4,
		},
		'& .MuiButton-text': {
			textTransform: 'capitalize',
		},
		'& .MuiButton-label': {
			gap: 8,
		},
	},
	formControlMobile: {
		display: 'flex',
		gap: 12,
		minWidth: 120,
		marginRight: 20,
		cursor: 'pointer',
		[theme.breakpoints.down('xs')]: {
			minWidth: 100,
			marginRight: 0,
		},
		[theme.breakpoints.down('911')]: {
			marginRight: 0,
		},
		'& .MuiButton-text': {
			textTransform: 'capitalize',
		},
		'& .MuiButton-label': {
			gap: 4,
		},
		'& .MuiButton-text': {
			textTransform: 'capitalize',
		},
		'& .MuiButton-label': {
			gap: 8,
		},
	},
	containerArow: {
		height: 12,
		width: 12,
		position: 'absolute',
		left: 65,
	},
	Arrow: {
		/* Border */
		borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
		borderTop: '1px solid rgba(0, 0, 0, 0.08)',
		transform: 'translate(222%, -250%) rotate(45deg)',
		background: 'transparent linear-gradient(135deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		backdropFilter: 'blur(30px)',
		[theme.breakpoints.down('xs')]: {
			transform: 'translate(158px, -250%) rotate(45deg)',
		},
	},
	// containerArow: {
	// 	height: 12,
	// 	width: 12,
	// 	position: 'absolute',
	// },
	// Arrow: {
	// 	/* Border */
	// 	borderLeft: '1px solid rgb(0 0 0 / 15%)',
	// 	borderTop: '1px solid rgb(0 0 0 / 12%)',
	// 	transform: 'translate(222%, -44%) rotate(45deg)',
	// 	background: 'transparent linear-gradient(135deg, #f6f6f600 0%, #e2e2e200 100%) 0% 0% no-repeat padding-box',
	// 	backdropFilter: 'blur(120px)',
	// 	[theme.breakpoints.down('xs')]: {
	// 		transform: 'translate(164px, -55%) rotate(45deg)',
	// 	},
	// },
	popover: {
		'& .MuiPopover-paper': {
			overflowX: 'visible',
			overflowY: 'visible',
			paddingInline: 24,
			paddingBottom: 12,
		},
		'& .MuiPaper-root': {
			background: 'transparent linear-gradient(135deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
			backdropFilter: 'blur(30px)',
		},
		'& .MuiPaper-elevation8': {
			boxShadow: '0px 3px 6px #00000026',
		},
	},
	mobileSearchWrapper: {
		display: 'none',
		[theme.breakpoints.up('600')]: {
			display: 'none',
		},
		[theme.breakpoints.down('600')]: {
			display: 'flex',
			alignItems: 'center',
		},
	},
	mobileSearchIcon: {
		alignSelf: 'end',
		lineHeight: '1.1',
		paddingInlineEnd: 20,
		[theme.breakpoints.up('850')]: {
			display: 'none',
		},
	},
}))

export default function Home(props) {
	const classes = useStyles()
	const {setAnchorEl, openLocation, setOpenLocation, setLocationData} = useAuth()
	const matches = useMediaQuery('(max-width:600px)')
	// const {setEnableMobileSearch} = useContextApi()
	// const [lat, setLat] = useState(null)
	// const [lng, setLng] = useState(null)
	// const [status, setStatus] = useState(null)
	// const [cityName, setCityName] = useState(null)
	// const [suburbName, setSuburbName] = useState(null)

	const closeOtherModals = () => {
		setAnchorEl(null)
		setOpenLocation(null)
	}

	const handleClick = event => {
		event.preventDefault()
		setAnchorEl(null)
		setOpenLocation(event.currentTarget)
	}

	const handleClose = () => {
		setOpenLocation(null)
	}
	const open = Boolean(openLocation)
	const id = open ? 'simple-popover' : undefined

	// const toggleMobileSearch = () => {
	// 	setEnableMobileSearch(true)
	// }

	// Get current user lat,lon
	// const getLocation = () => {
	// 	if (!navigator.geolocation) {
	// 		setStatus('Geolocation is not supported by your browser')
	// 	} else {
	// 		setStatus('Locating...')
	// 		navigator.geolocation.getCurrentPosition(
	// 			position => {
	// 				setStatus(null)
	// 				setLat(position.coords.latitude)
	// 				setLng(position.coords.longitude)
	// 			},
	// 			() => {
	// 				setStatus('Unable to retrieve your location')
	// 			}
	// 		)
	// 	}
	// }
	// useEffect(() => {
	// 	getLocation()
	// }, [])

	// Get current cityName
	// const getCurrentCityName = async () => {
	// 	if (lat && lng) {
	// 		const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
	// 		try {
	// 			let response = await fetch(url)
	// 			if (response?.status === 200) {
	// 				let data = await response.json()
	// 				setCityName(data?.address?.county)
	// 				setSuburbName(data?.address?.suburb)
	// 				setLocationData(data)
	// 			} else {
	// 				setCityName(null)
	// 			}
	// 		} catch (err) {
	// 			console.log('current city name', err)
	// 		}
	// 	}
	// }
	// useEffect(() => {
	// 	getCurrentCityName()
	// }, [lat, lng])

	return (
		<>
			<div className={classes.root}>
				<div className={classes.header}>
					<Toolbar>
						<div className={classes.title}>
							{/* <div className={classes.burgerMenu}>
								<DrawerComponent />
							</div> */}
							<section onClick={closeOtherModals}>
								<Link href='/' passHref={true}>
									<div
										style={{
											cursor: 'pointer',
											display: 'flex',
											alignItems: 'center',
											position: 'relative',
										}}>
										<Image
											alt='LYFnGO logo'
											src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/LYFnGO_logo_full.svg'
											width={170}
											height={46}
										/>
									</div>
								</Link>
							</section>
							{/* <section style={{display: 'none'}}>
								<Search />
							</section>
							<div className={classes.formControl}>
								{cityName && (
									<Button aria-describedby={id} onClick={event => handleClick(event)}>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/mark_location.svg' alt='logo' width={18} height={18} />
										<Typography>{suburbName || (cityName && cityName?.split(' ')?.[0]) || cityName || ''}</Typography>
									</Button>
								)}
							</div> */}

							{/* search for below 850px screen */}
							{/* <section className={classes.mobileSearchWrapper}>
								<div onClick={toggleMobileSearch} className={classes.mobileSearchIcon}>
								<div className={classes.mobileSearchIcon} style={{display: 'none'}}>
									<MobileSearchWrapper1 />
								</div>
								<div style={{display: 'none'}}><Search /></div>
								<div className={classes.formControlMobile}>
									{cityName && (
										<Button aria-describedby={id} onClick={event => handleClick(event)}>
										<Button aria-describedby={id}>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/mark_location.svg' alt='logo' width={18} height={18} />
											<Typography>{suburbName || (cityName && cityName?.split(' ')?.[0]) || cityName || ''}</Typography>
										</Button>
									)}
								</div>
							</section> */}
						</div>
						<div className={classes.rightIcons}>
							{/* {cityName && <Divider orientation='vertical' flexItem />} */}
							<SignUp matches={matches} />
							{/* <IconButton>
								<Link href='/commingsoon'>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/notification-b2c.svg' alt='logo' width={40} height={40} />
								</Link>
							</IconButton> */}
							{/* <IconButton>
								<Link href='/commingsoon'>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/cart-b2c.svg' alt='logo' width={40} height={40} />
								</Link>
							</IconButton> */}
						</div>
					</Toolbar>
				</div>
			</div>
			<Popover
				className={classes.popover}
				id={id}
				open={open}
				anchorEl={openLocation}
				onClose={handleClose}
				anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
				transformOrigin={{vertical: -30, horizontal: 70}}>
				<div className={clsx(classes.containerArow, classes.Arrow)}></div>
				{/* <Location lat={lat} lng={lng} getLocation={getLocation} status={status} /> */}
			</Popover>
		</>
	)
}
