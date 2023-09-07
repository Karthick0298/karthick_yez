import React from 'react'
import {makeStyles, Typography, Box, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Image from 'next/image'
import Button from '../GradientButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useState, useEffect} from 'react'
import SignUpEntry from '../Authentication/SignUpEntry'
import useAuth from '../../../lib/Utils/hooks/UseAuth'
import Link from 'next/link'
import AppLinkModal from '../../components/AppLinkModal'

const useStyles = makeStyles(theme => ({
	backgroundImageColor: {
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		// transform: 'translateY(67px)',
	},
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		'& .MuiTypography-h2': {
			fontWeight: 100,
			color: theme.palette.heading.main,
			paddingBottom: theme.typography.body1.fontSize,
		},
		'& .MuiButton-containedPrimary': {
			marginTop: 24,
		},
		'& .MuiTypography-h5': {
			color: '#481CA9',
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h5.fontSize,
				whiteSpace: 'nowrap',
			},
		},
		'& .MuiButton-root': {
			padding: '4px 58px',
			[theme.breakpoints.down('sm')]: {
				padding: '4px 20px',
			},
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			'& .MuiTypography-h2': {
				fontSize: theme.typography.subtitle1.fontSize,
				whiteSpace: 'nowrap',
			},
		},
	},
	logo: {
		[theme.breakpoints.down('sm')]: {
			order: 1,
			display: 'flex',
			justifyContent: 'center',
		},
	},
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		paddingTop: 72,
		paddingBottom: 28,
		display: 'flex',
		gap: 72,
		'& .MuiTypography-h5': {
			color: '#481CA9',
			fontWeight: 900,
			fontSize: theme.typography.body1.fontSize,
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 12,
			padding: 18,
		},
	},
	sectionOne: {
		display: 'flex',
		gap: 72,
		'& .MuiListItem-gutters': {
			padding: 0,
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
			fontFamily: 'Poppins, sans-serif',
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h5.fontSize,
			},
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 0,
			'& .MuiTypography-h5': {
				fontSize: theme.typography.subtitle1.fontSize,
			},
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			gap: 54,
		},
	},
	downloadIcon: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			gap: 6,
		},
	},
	sectionTwo: {
		display: 'flex',
		gap: 72,
		'& .MuiListItem-gutters': {
			padding: 0,
		},
		'& .MuiTypography-body1': {
			color: '#475677',
			fontSize: 16,
			fontFamily: 'Poppins, sans-serif',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 0,
			'& .MuiTypography-h5': {
				fontSize: theme.typography.subtitle1.fontSize,
			},
		},
	},
	SocialMediaIcon: {
		display: 'flex',
		'& .MuiList-root': {
			display: 'flex',
			gap: 16,
		},
		'& .MuiListItem-gutters': {
			borderRadius: '50%',
		},
		'& .MuiSvgIcon-root': {
			width: 20,
			color: '#fff',
		},
		'& .MuiListItemIcon-root': {
			minWidth: 36,
			padding: '4px 8px',
		},
	},
	footerBottomSection: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		whiteSpace: 'nowrap',
		paddingBlock: 10,
		'& .MuiTypography-h5': {
			color: '#481CA9',
			fontWeight: 100,
			fontSize: 14,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
	community: {
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	support: {
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	foldItems: {
		borderBottom: '1px solid #5730b0',
		'& .MuiPaper-elevation1': {
			boxShadow: 'none',
		},
		'& .MuiPaper-root': {
			backgroundColor: 'transparent',
		},
		'& .MuiAccordionSummary-root': {
			padding: 0,
		},
		'& .MuiSvgIcon-root': {
			// color: '#5730b0',
		},
		'& .MuiAccordionSummary-root.Mui-expandedt': {
			height: 0,
		},
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},

	aTag: {
		color: 'transparent',
	},

	BasicBackgroundbtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	careBackgroundbtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	fitnessBackgroundbtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
	mindBackgroundbtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
	sportsBackgroundbtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
	spaBackgroundbtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function Footer(props) {
	const classes = useStyles()
	const {token} = useAuth()
	const [backgroundImage, setBackgroundImage] = useState('https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png')
	const [textColor, setTextColor] = useState('#7047EA')
	const [btnColor, setBtnColor] = useState(classes.BasicBackgroundbtn)

	// Getting Current URL Path
	const currentPath = typeof window !== 'undefined' ? window.location.pathname : null
	const pathName = currentPath && currentPath?.split('/')?.pop()
	const [openDialogSigning, setOpenDialogSignin] = React.useState(false)

	const handlClosePopup = () => {
		setOpenDialogSignin(false)
	}

	const isAuth = !!token

	const createAccnt = () => {
		if (isAuth === true) {
			// setOpenModal(false)
		} else {
			setOpenDialogSignin(true)
		}
	}

	const [openModal, setOpenModal] = useState(false)

	const openLinkModal = () => {
		setOpenModal(true)
	}

	useEffect(() => {
		if (pathName === '') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png')
			setTextColor('#7047EA')
			setBtnColor(classes.BasicBackgroundbtn)
		} else if (pathName === 'care') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/care-bg.svg')
			setTextColor('#7047EA')
			setBtnColor(classes.careBackgroundbtn)
		} else if (pathName === 'fitness') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/fitness-bg.svg')
			setTextColor('#39B8FB')
			setBtnColor(classes.fitnessBackgroundbtn)
		} else if (pathName === 'mind') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/mind-bg.svg')
			setTextColor('#0CC593')
			setBtnColor(classes.mindBackgroundbtn)
		} else if (pathName === 'sports') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/sports-bg.svg')
			setTextColor('#F0662E')
			setBtnColor(classes.sportsBackgroundbtn)
		} else if (pathName === 'spawellness') {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/footer-bg/spaWellness-bg.svg')
			setTextColor('#E1087E')
			setBtnColor(classes.spaBackgroundbtn)
		} else {
			setBackgroundImage('https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png')
			setTextColor('#7047EA')
			setBtnColor(classes.BasicBackgroundbtn)
		}
	}, [pathName])

	return (
		<>
			<div className={classes.backgroundImageColor} style={{backgroundImage: `url(${backgroundImage})`}}>
				<Box className={classes.root} p={2}>
					<Typography variant='h2' style={{color: textColor}}>
						To Get Latest News & Further Update
					</Typography>
					<Typography variant='h2' style={{fontWeight: 500, color: textColor}}>
						Subscribe Our Newsletter
					</Typography>
					<Button findMorebtn={btnColor}>Subscribe</Button>
				</Box>
				<div className={classes.wrapper}>
					<div className={classes.container}>
						<div className={classes.logo}>
							<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/lyfngo_redtext2x.png' width={100} height={18} />
						</div>
						<div className={classes.sectionOne}>
							<div className={classes.community}>
								<Typography variant='h5' style={{color: textColor}}>
									Community
								</Typography>
								<List>
									<ListItem button onClick={() => createAccnt()}>
										<ListItemText primary={isAuth ? 'Account activated' : 'Create Account'} />
									</ListItem>
									<Link href='/premium'>
										<a target='_blank' style={{textDecoration: 'none'}}>
											<ListItem button>
												<ListItemText primary='Go to Premium' />
											</ListItem>
										</a>
									</Link>
									<ListItem button onClick={() => openLinkModal()}>
										<ListItemText primary='Prefer A Friend' />
									</ListItem>
									<Link href='coupon'>
										<a target='_blank' style={{textDecoration: 'none'}}>
											<ListItem button>
												<ListItemText primary='Get Coupon Code' />
											</ListItem>
										</a>
									</Link>
								</List>
							</div>
							<div className={classes.foldItems} style={{borderBottom: `1px solid ${textColor}`}}>
								<Accordion>
									<AccordionSummary expandIcon={<ExpandMoreIcon style={{color: textColor}} />}>
										<Typography variant='h5' style={{color: textColor}}>
											Community
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<List>
											<ListItem button onClick={() => createAccnt()}>
												<ListItemText primary={isAuth ? 'Account activated' : 'Create Account'} />
											</ListItem>
											<Link href='/premium'>
												<a target='_blank' style={{textDecoration: 'none'}}>
													<ListItem button>
														<ListItemText primary='Go to Premium' />
													</ListItem>
												</a>
											</Link>
											<ListItem button onClick={() => openLinkModal()}>
												<ListItemText primary='Prefer A Friend' />
											</ListItem>
											<Link href='coupon'>
												<a target='_blank' style={{textDecoration: 'none'}}>
													<ListItem button>
														<ListItemText primary='Get Coupon Code' />
													</ListItem>
												</a>
											</Link>
										</List>
									</AccordionDetails>
								</Accordion>
							</div>
							<div className={classes.support}>
								<Typography variant='h5' style={{color: textColor}}>
									Support
								</Typography>
								<List>
									<ListItem button>
										<Link href='/tnc/'>
											<a target='_blank' className={classes.aTag}>
												<ListItemText primary='Terms Condition' />
											</a>
										</Link>
									</ListItem>
									<ListItem button>
										<Link href='/privacy-policy/'>
											<a target='_blank' className={classes.aTag}>
												<ListItemText primary='Privacy & Policy' />
											</a>
										</Link>
									</ListItem>
									<ListItem button>
										{/* <Link href='/copyright-issues/'>
											<a target='_blank' className={classes.aTag}>
												<ListItemText primary='Copyright Issue' />
											</a>
										</Link> */}
									</ListItem>
									<Link href='/help'>
										<a target='_blank' style={{textDecoration: 'none'}}>
											<ListItem button>
												<ListItemText primary='Get Help' />
											</ListItem>
										</a>
									</Link>
								</List>
							</div>
							<div className={classes.foldItems} style={{borderBottom: `1px solid ${textColor}`}}>
								<Accordion>
									<AccordionSummary expandIcon={<ExpandMoreIcon style={{color: textColor}} />}>
										<Typography variant='h5' style={{color: textColor}}>
											Support
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<List>
											<ListItem button>
												<Link href='/tnc/'>
													<a target='_blank' className={classes.aTag}>
														<ListItemText primary='Terms Condition' />
													</a>
												</Link>
											</ListItem>
											<ListItem button>
												<Link href='/privacy-policy/'>
													<a target='_blank' className={classes.aTag}>
														<ListItemText primary='Privacy & Policy' />
													</a>
												</Link>
											</ListItem>
											{/* <ListItem button>
												<Link href='/copyright-issues/'>
													<a target='_blank' className={classes.aTag}>
														<ListItemText primary='Copyright Issue' />
													</a>
												</Link>
											</ListItem> */}
											<Link href='/help'>
												<a target='_blank' style={{textDecoration: 'none'}}>
													<ListItem button>
														<ListItemText primary='Get Help' />
													</ListItem>
												</a>
											</Link>
										</List>
									</AccordionDetails>
								</Accordion>
							</div>
						</div>
						<div className={classes.sectionTwo}>
							<div className={classes.media}>
								<Typography variant='h5' style={{color: textColor}}>
									Join Us
								</Typography>
								<List>
									<Link href='/member'>
										<a target='_blank' style={{textDecoration: 'none'}}>
											<ListItem button>
												<ListItemText primary='Become a Member' />
											</ListItem>
										</a>
									</Link>
								</List>
							</div>
							<div>
								<Typography variant='h5' style={{color: textColor}}>
									Find us
								</Typography>
								<div className={classes.SocialMediaIcon}>
									<List>
										<ListItem button style={{backgroundColor: '#4267B2'}}>
											<ListItemIcon>
												<FacebookIcon />
											</ListItemIcon>
										</ListItem>
										<ListItem
											button
											style={{
												background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
											}}>
											<ListItemIcon>
												<InstagramIcon />
											</ListItemIcon>
										</ListItem>
										<ListItem button style={{backgroundColor: '#0077b5'}}>
											<ListItemIcon>
												<LinkedInIcon />
											</ListItemIcon>
										</ListItem>
										<ListItem button style={{backgroundColor: '#1DA1F2'}}>
											<ListItemIcon>
												<TwitterIcon />
											</ListItemIcon>
										</ListItem>
									</List>
								</div>
								<div className={classes.downloadIcon}>
									<List>
										<ListItem>
											<ListItemIcon>
												<Image
													src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/playstore.png'
													alt='playstore'
													width={128}
													height={38}
												/>
											</ListItemIcon>
										</ListItem>
									</List>
									<List>
										<ListItem>
											<ListItemIcon>
												<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/appstore.png' alt='appstore' width={128} height={38} />
											</ListItemIcon>
										</ListItem>
									</List>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Box className={classes.footerBottomSection}>
					<Typography variant='h5' style={{color: textColor}}>
						Copyright © 2022 LFYnGO | All Rights Reserved
					</Typography>
				</Box>
				<SignUpEntry handleClosePopup={handlClosePopup} openDialogSigning={openDialogSigning} />
				<AppLinkModal
					open={openModal}
					handleClose={() => {
						setOpenModal(false)
					}}
					setOpenModal={setOpenModal}
				/>
			</div>
		</>
	)
}
