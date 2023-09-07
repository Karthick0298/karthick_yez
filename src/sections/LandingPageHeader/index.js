import React, {useState, useEffect} from 'react'
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
import {makeStyles} from '@material-ui/core/styles'
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Link, Menu, MenuItem, Typography} from '@material-ui/core'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useRouter} from 'next/router'
import {flashLink, flashRegister} from '../../../lib/Utils/linkWindow'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DemoModal from './demoModal'
import countryCodeApi from '../../../Service/Login'
import Image from 'next/image'
import {DensityLarge, Close} from '@mui/icons-material'
import Axios from 'axios'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	mainRoot: {
		background: '#f5f5f58c',
		backdropFilter: 'blur(8px)',
		position: 'sticky',
		top: 0,
		zIndex: 100,
		display: 'flex',
		justifyContent: 'center',
		boxShadow: '0px 3px 6px #00000026',
	},
	desktopRoot: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 14,
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			paddingInline: 14,
			paddingBlock: 12,
			maxWidth: '100%',
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 22,
		},
		[theme.breakpoints.up('xl')]: {
			maxWidth: 1320,
		},
	},
	secTwo: {
		'& .MuiButton-contained': {
			background: 'linear-gradient(180deg, #0062DD 0%, #2EB2FF 100%)',
			color: '#FFFFFF',
			letterSpacing: 0.75,
			fontFamily: 'Poppins',
			fontSize: 16,
			textTransform: 'none',
			paddingInline: 26,
		},
		'& .MuiButton-outlined': {
			color: '#0062DD',
			letterSpacing: 0.75,
			fontFamily: 'Poppins',
			fontSize: 16,
			textTransform: 'none',
			paddingInline: 46,
			border: 'solid 1px transparent',
			backgroundImage: 'linear-gradient(180deg, #0062DD 0%, #2EB2FF 100%)',
			backgroundOrigin: 'border-box',
			boxShadow: '1px 1000px 1px #FFFFFF inset',
			marginInlineEnd: 22,
		},
	},
	demo: {
		'& .MuiButton-contained': {
			background: 'rgba(46, 178, 255, 1)',
			color: '#FFFFFF',
			letterSpacing: 0.75,
			fontFamily: 'Poppins',
			fontSize: 16,
			textTransform: 'none',
		},
	},
	secOne: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			gap: 32,
		},
		[theme.breakpoints.up('lg')]: {
			gap: 92,
		},
	},
	secOneOne: {
		cursor: 'pointer',
		'& .MuiAvatar-root': {
			width: 199,
			height: 59,
			marginBlock: -10,
		},
		'& img': {
			objectFit: 'contain',
		},
	},
	secOneTwo: {
		display: 'flex',
		alignItems: 'center',
		gap: 40,
		fontFamily: 'Poppins',

		'& .MuiLink-root': {
			fontFamily: 'Poppins',

			color: '#343434',
			fontSize: 16,
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: 'Poppins',
			color: '#343434',
			fontSize: 16,
			cursor: 'pointer',
		},
	},
	mobSecTwoOne: {
		'& .MuiLink-root': {
			fontFamily: 'Poppins',
			color: '#343434',
			fontSize: 16,
			display: 'block',
			paddingBlock: 14,
			borderBottom: '1px solid #34343480',
		},
	},
	mobSecTwoTwo: {
		marginBlock: 32,
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		'& .MuiButton-contained': {
			fontFamily: 'Poppins',
			fontSize: 16,
			background: 'linear-gradient(180deg, #0062DD 0%, #2EB2FF 100%)',
			color: '#FFFFFF',
			letterSpacing: 0.75,
			textTransform: 'none',
			paddingInline: 46,
			paddingBlock: 8,
			marginInlineEnd: 0,
		},
		'& .MuiButton-outlined': {
			fontFamily: 'Poppins',
			color: '#0062DD',
			letterSpacing: 0.75,
			textTransform: 'none',
			paddingInline: 46,
			paddingBlock: 8,
			fontSize: 16,
			border: 'solid 1px transparent',
			backgroundImage: 'linear-gradient(180deg, #0062DD 0%, #2EB2FF 100%)',
			backgroundOrigin: 'border-box',
			boxShadow: '1px 1000px 1px #FFF inset',
		},
	},

	mobileRoot: {
		width: '100%',
		boxShadow: '0px 0px 5px #00000045',
		position: 'relative',
		zIndex: 100,
	},
	mobSecOne: {
		paddingBlock: 14,
		paddingInline: 18,
		background: '#FFFFFF99',
		backdropFilter: 'blur(200px)',

		display: 'flex',
		alignItems: 'center',
	},
	mobSecTwoHide: {
		zIndex: 10,
		background: '#FFFFFF',
		backdropFilter: 'blur(200px)',

		padding: 20,
		height: '100vh',
		width: '100%',
		position: 'absolute',
		transform: 'translateX(-100vw)',
		transition: 'transform 0.65s',
	},
	mobSecTwoShow: {
		zIndex: 10,
		background: '#FFFFFF',
		backdropFilter: 'blur(100px)',
		padding: 20,
		height: '100vh',
		width: '100%',
		position: 'absolute',
		transform: 'translateX(0)',
		transition: 'transform 0.65s',
	},
	hamburger: {
		'& .MuiSvgIcon-root': {
			color: '#0062DD',
		},
	},
	mobileLogo: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		'& .MuiAvatar-root': {
			marginBlock: -5,
			width: 170,
			height: 52,
			cursor: 'pointer',
		},
		'& img': {
			objectFit: 'contain',
		},
	},
	featuresContainer: {
		'& .MuiPaper-root': {
			marginBlockStart: 52,
			borderRadius: 14,
			'&:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: 0,
				right: 14,
				width: 10,
				height: 10,
				// background: 'red',
				transform: 'translateY(-50%) rotate(45deg)',
				zIndex: 0,
			},
		},
	},
	featuresListItem: {
		// border: '1px solid green',
		cursor: 'pointer',
		padding: 4,
		paddingBlockEnd: 10,
		// '& .MuiLink-root': {
		display: 'flex',
		gap: 14,
		alignItems: 'center',
		// },

		'& .MuiTypography-subtitle1': {
			color: '#343434',
			fontFamily: 'Poppins',
			fontSize: 16,
		},

		'&:hover': {
			background: '#34343410',
			borderRadius: 8,
		},
	},
	featuresListItemMobile: {
		width: '100%',
		cursor: 'pointer',
		padding: 4,
		'& .MuiLink-root': {
			display: 'flex',
			gap: 14,
			alignItems: 'center',
			paddingBlock: 0,
			width: '100%',
			borderBottom: 'none',
		},

		'& .MuiTypography-subtitle1': {
			color: '#343434',
			fontSize: 16,
		},

		'&:hover': {
			background: '#34343410',
			borderRadius: 8,
		},
	},
	featuresListLeft: {
		padding: 8,
	},
	featuresListRight: {
		padding: 8,
	},
	featuresList: {
		display: 'flex',
		position: 'relative',
	},
	featuresListPointer: {
		position: 'absolute',
		top: 0,
		left: 0,
		// background: 'yellow',
		position: 'absolute',
		height: 20,
		width: 20,
	},
	acoordionroot: {
		borderBottom: '1px solid #34343480',

		'& .MuiAccordion-root': {
			background: 'unset',
			boxShadow: 'none',
			borderRadius: 0,
		},
		'& .MuiAccordionSummary-root': {
			padding: 0,
			paddingInlineEnd: 20,
			color: '#343434',
			fontSize: 16,
		},
		'& .MuiAccordionDetails-root': {
			display: 'block',
			maxHeight: 242,
			overflowY: 'scroll',
		},
	},
	featuresListItemdata: {
		maxWidth: 284,
		'& .MuiTypography-subtitle2': {
			fontFamily: 'Poppins',
			color: '#343434',
			fontSize: 13,
		},
	},
	modeuleIcon: {
		'& div': {
			boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
			borderRadius: 6,
		},
	},
}))

export default function LandingPageHeader({toast}) {
	const classes = useStyles()
	const router = useRouter()
	// Getting Current URL Path
	const currentPath = typeof window !== 'undefined' ? window.location.pathname : null
	const pathName = currentPath && currentPath?.split('/')?.pop()

	const isMobileHeader = useMediaQuery('(min-width:928px)')
	const [menuClicked, setMenuClicked] = useState(false)
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const [modalOpen, modalSetOpen] = useState(false)
	const [country, setCountry] = useState(null)
	const [countryCode, setcountryCode] = useState([])
	const [moblen, setMoblen] = useState(null)

	const handleFeaturesClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleFeaturesClose = () => {
		setAnchorEl(null)
	}
	// start: Get IP for Current location //
	const getLocationDetails = async () => {
		const res = await Axios.get('https://ipapi.co/json/')
		console.log(res?.data)
		secureLocalStorage.setItem('countryCode', res?.data?.country_calling_code)
		// setCountryCodeLength(parseInt(code?.mastLookupValue))
	}
	useEffect(() => {
		getLocationDetails()
	}, [])

	const getDialCodeDetails = () => {
		const onSuccess = res => {
			if (res?.data?.status === true) {
				// let data = res.data.data
				const code = _.orderBy(res?.data?.data, 'mastLookupKey', 'desc')
				setcountryCode(code)
			} else {
				// window.alert('no')
			}
		}
		const onFailure = err => {
			console.log('error', err)
		}
		countryCodeApi.CountryCodeGet().then(onSuccess, onFailure)
	}

	useEffect(() => {
		modalOpen && getDialCodeDetails()
	}, [modalOpen])

	useEffect(() => {
		if (!_.isEmpty(countryCode)) {
			let findCountry = secureLocalStorage?.getItem('countryCode')
			let temp = findCountry?.slice(1)
			let initialCountryCode = _.find(countryCode, {mastLookupKey: temp})
			setMoblen(initialCountryCode?.mastLookupValue)
			console.log('initialCountryCode', initialCountryCode)
			setCountry(initialCountryCode)
		}
	}, [countryCode])

	const handleclick = () => {
		modalSetOpen(true)
	}

	const activeLink = {color: '#0062DD', fontWeight: 500}

	return (
		<div className={classes.mainRoot}>
			{isMobileHeader ? (
				<div className={classes.desktopRoot}>
					<div className={classes.secOne}>
						<div
							className={classes.secOneOne}
							onClick={() => {
								router.push(`/`)
							}}>
							<Avatar src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/LYFnGO_logo_full.svg' variant='square' alt='LYFnGO logo' />
						</div>
						<div className={classes.secOneTwo}>
							<Typography
								variant='subtitle1'
								onClick={() => {
									router.push(`/features`)
								}}
								style={pathName === 'features' ? activeLink : {}}>
								Services
							</Typography>
							<Typography
								variant='subtitle1'
								onClick={handleFeaturesClick} 
								// onMouseLeave={(e)=> setAnchorEl(null)}
								style={pathName !== 'features' && pathName !== 'pricing' && pathName !== 'contact' && pathName !== 'about' ? activeLink : {}}>
								Features
							</Typography>
							<Menu
								className={classes.featuresContainer}
								anchorEl={anchorEl}
								id='account-menu'
								open={open}
								onClose={handleFeaturesClose}
								onClick={handleFeaturesClose}
								transformOrigin={{horizontal: 'center', vertical: 'center'}}
								anchorOrigin={{horizontal: 'center', vertical: 'center'}}>
								<div className={classes.featuresList}>
									<div className={classes.featuresListPointer}></div>

									<div className={classes.featuresListLeft}>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/dashboard-and-reports`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresDashboarrd.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Dashboard & Reports`}</Typography>
												<Typography variant='subtitle2'>{`Simplified data analysis helps in monitoring
													 finances and reports.`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/consultation-and-facility`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresConsult.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Consultation & Facility Booking`}</Typography>
												<Typography variant='subtitle2'>{`Book an appointment or facility from anywhere in the world.`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/whatsapp-bot`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresWhatsapp.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`WhatsApp Bot & Online Consult`}</Typography>
												<Typography variant='subtitle2'>{`The most user-friendly mode of communication.`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/emr-billing`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresEmr.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`EMR`}</Typography>
												<Typography variant='subtitle2'>{`Reports and data on the go. Access it from
													 anywhere at any time.`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/pharma-and-billing`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresPharma.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Pharma & Billing`}</Typography>
												<Typography variant='subtitle2'>{`Manage your pharma and billing on one platform.`}</Typography>
											</div>
										</div>
									</div>

									<div className={classes.featuresListRight}>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/inventory-and-expenses`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresInventory.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Inventory & Expenses`}</Typography>
												<Typography variant='subtitle2'>{`Simply add item and maintain the consumed 
													stocks with better usablity`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/quick-sale`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresQuickSale.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Quick Sale`}</Typography>
												<Typography variant='subtitle2'>{`An instant one-stop sale point.`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/diet-plan-and-workout-plan`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresDiet.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Diet Plan & Workout Plan`}</Typography>
												<Typography variant='subtitle2'>{`Recommend to your customers on customized plans`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/membership-and-events`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresMembership.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Membership & Events`}</Typography>
												<Typography variant='subtitle2'>{`Promote your practice and check-up drives 
													for more conversions.`}</Typography>
											</div>
										</div>
										<div
											className={classes.featuresListItem}
											onClick={() => {
												router.push(`/integration`)
											}}>
											<div className={classes.modeuleIcon}>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresIntegration.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
											</div>
											<div className={classes.featuresListItemdata}>
												<Typography variant='subtitle1'>{`Integration`}</Typography>
												<Typography variant='subtitle2'>{`Various payment methods for hassle-free transactions`}</Typography>
											</div>
										</div>
									</div>
								</div>
							</Menu>

							<Typography
								variant='subtitle1'
								onClick={() => {
									router.push(`/pricing`)
								}}
								style={pathName === 'pricing' ? activeLink : {}}>
								Pricing
							</Typography>

							<Typography
								variant='subtitle1'
								onClick={() => {
									router.push(`/contact`)
								}}
								style={pathName === 'contact' ? activeLink : {}}>
								Support
							</Typography>

							<div className={classes.demo}>
								<Button variant='contained' onClick={handleclick}>
									Request Demo
								</Button>
							</div>
						</div>
					</div>
					<div className={classes.secTwo}>
						<Button variant='outlined' onClick={flashLink}>
							Login
						</Button>
						<Button variant='contained' onClick={flashRegister}>
							Start Free Trial
						</Button>
					</div>
				</div>
			) : (
				<div className={classes.mobileRoot}>
					<div className={classes.mobSecOne}>
						<div
							className={classes.hamburger}
							onClick={() => {
								setMenuClicked(prev => !prev)
							}}>
							{!menuClicked ? <DensityLarge /> : <Close />}
						</div>
						<div className={classes.mobileLogo}>
							<Avatar
								src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/LYFnGO_logo_full.svg'
								variant='square'
								alt='LYFnGO logo'
								onClick={() => {
									router.push(`/`)
								}}
							/>
						</div>
					</div>
					<div className={!menuClicked ? classes.mobSecTwoHide : classes.mobSecTwoShow}>
						<div className={classes.mobSecTwoOne}>
							<Link href='/features' underline='none'>
								Services
							</Link>
							<div className={classes.acoordionroot}>
								<Accordion disableGutters={true}>
									<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
										<Typography>Features</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<div className={classes.featuresListItemMobile}>
											<Link href='/dashboard-and-reports' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresDashboarrd.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Dashboard & Reports`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/consultation-and-facility' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresConsult.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Consultation & Facility Booking`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/whatsapp-bot' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresWhatsapp.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`WhatsApp Bot & Online Consult`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/emr-billing' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresEmr.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`EMR`}</Typography>
											</Link>
										</div>

										<div className={classes.featuresListItemMobile}>
											<Link href='/pharma-and-billing' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresPharma.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Pharma & Billing`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/inventory-and-expenses' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresInventory.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Inventory & Expenses`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/quick-sale' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresQuickSale.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Quick Sale`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/diet-plan-and-workout-plan' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresDiet.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Diet Plan & Workout Plan`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/membership-and-events' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresMembership.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Membership & Events`}</Typography>
											</Link>
										</div>
										<div className={classes.featuresListItemMobile}>
											<Link href='/integration' underline='none'>
												<Image
													src={'https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/featuresIntegration.svg'}
													alt='module icon'
													width={48}
													height={48}
												/>
												<Typography variant='subtitle1'>{`Integration`}</Typography>
											</Link>
										</div>
									</AccordionDetails>
								</Accordion>
							</div>
							<Link href='/pricing' underline='none'>
								Pricing
							</Link>
							<Link href='/contact' underline='none'>
								Support
							</Link>
						</div>
						<div className={classes.mobSecTwoTwo}>
							<Button className={classes.demo} style={{background: 'rgba(46, 178, 255, 1)'}} variant='contained' onClick={handleclick}>
								Request Demo
							</Button>
							<Button variant='outlined' onClick={flashLink}>
								Login
							</Button>
							<Button variant='contained' onClick={flashRegister}>
								Start Free Trial
							</Button>
						</div>
					</div>
				</div>
			)}
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
				scriptProps={{
					async: false,
					defer: false,
					appendTo: 'head',
					nonce: undefined,
				}}>
				<DemoModal
					open={modalOpen}
					handleClose={() => modalSetOpen(false)}
					setOpen={modalSetOpen}
					country={country}
					setCountry={setCountry}
					countryCode={countryCode}
					setcountryCode={setcountryCode}
					moblen={moblen}
					setMoblen={setMoblen}
				/>
			</GoogleReCaptchaProvider>
		</div>
	)
}
