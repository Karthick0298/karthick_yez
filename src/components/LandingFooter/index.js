import {makeStyles, Typography, IconButton, Button, useTheme, useMediaQuery} from '@material-ui/core'
import React from 'react'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FavoriteIcon from '@material-ui/icons/Favorite'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {getTwitter, getInstagram, getToutube, getFacebook, getLinkedIn} from '../../../lib/Utils/linkWindow'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useRouter} from 'next/router'
import Link from 'next/link'
import moment from 'moment/moment'

const useStyles = makeStyles(theme => ({
	topSecRoot: {
		background: '#000',
		textAlign: 'center',
		textAlign: '-webkit-center',
		// DONT REMOVE WEBKIT CENTER - IT WILL NOT SUPPORT IN ALL BROWSERS
	},
	bottomSecRoot: {
		background: '#FFF',
		textAlign: 'center',
		textAlign: '-webkit-center',
		// DONT REMOVE WEBKIT CENTER - IT WILL NOT SUPPORT IN ALL BROWSERS
	},
	topsec: {
		maxWidth: 1320,
		paddingBlockEnd: 28,
		paddingBlockStart: 44,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		gap: 8,
	},
	bottomSec: {
		maxWidth: 1320,
		paddingBlock: 8,
		width: '100%',
		display: 'flex',
		'& .MuiTypography-root': {
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 600,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},

		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	},
	copyRights: {
		display: 'flex',
		gap: 10,
		'& .MuiTypography-subtitle1': {
			background: theme.palette.lyfngo.gradientText1,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
	},
	copyRightsLogo: {
		'& .MuiTypography-subtitle1': {
			background: theme.palette.lyfngo.gradientText,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
	},
	madeLove: {
		'& .MuiTypography-subtitle1': {
			background: theme.palette.lyfngo.gradientText,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
	},
	termsPrivacy: {
		display: 'flex',
		alignItems: 'center',
		gap: 18,
		'& .MuiTypography-subtitle1': {
			background: theme.palette.lyfngo.gradientText1,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
			cursor: 'pointer',
		},
	},
	content: {
		display: 'block',
		'& .MuiTypography-root': {
			paddingBlockEnd: 10,
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: theme.palette.lyfngo.fontFamily,
			letterSpacing: 0.9,
			color: theme.palette.lyfngo.lightText,
			textAlign: 'left',
			cursor: 'pointer',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
	},

	address: {
		display: 'block',
		'& .MuiTypography-root': {
			paddingBlockEnd: 4,
		},
		'& .MuiTypography-subtitle1': {
			fontFamily: theme.palette.lyfngo.fontFamily,
			marginBlockEnd: -10,
			letterSpacing: 0.9,
			color: theme.palette.lyfngo.lightText,
			textAlign: 'left',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
	},
	heading: {
		display: 'flex',
		'& .MuiTypography-h5': {
			fontFamily: theme.palette.lyfngo.fontFamily,
			background: theme.palette.lyfngo.gradientText,
			fontSize: 18,
			fontWeight: 600,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
	},
	supportMail: {
		display: 'flex',
		gap: 10,
		'& .MuiSvgIcon-root': {
			color: theme.palette.lyfngo.lightText,
		},
		'& .MuiTypography-subtitle1': {
			cursor: 'pointer',
			fontFamily: theme.palette.lyfngo.fontFamily,
			letterSpacing: 0.9,
			color: theme.palette.lyfngo.lightText,
			textAlign: 'left',
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
	},
	socialMedia: {
		marginBlockStart: 14,
		display: 'flex',
		gap: 14,
		'& .MuiSvgIcon-root': {
			color: theme.palette.lyfngo.lightText,
		},
		'& .MuiIconButton-root': {
			padding: 0,
		},
		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 20,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockEnd: 'unset',
		},
	},

	mobileFooter: {
		maxWidth: 1320,
		width: '100%',
		paddingBlock: 18,
		'& .MuiPaper-root': {
			background: '#000',
		},
		'& .MuiSvgIcon-root': {
			color: '#fff',
		},
		'& .MuiAccordionDetails-root': {
			display: 'flex',
			flexDirection: 'column',
			padding: '0px 16px 0px',
		},
		'& .MuiListItem-gutters': {
			padding: 0,
		},

		'& .MuiTypography-h5': {
			fontFamily: 'Poppins',
			letterSpacing: 0.9,
			fontSize: 14,
			color: '#fff',
			textAlign: 'start',
		},
	},
}))

const LandingFooter = () => {
	const classes = useStyles()
	const router = useRouter()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const [expanded, setExpanded] = React.useState(false)
	const handleChange = panel => (event, isExpanded) => setExpanded(isExpanded ? panel : false)

	return (
		<div>
			<section className={classes.topSecRoot}>
				{!isMobile ? (
					<div className={classes.topsec}>
						<div className={classes.content}>
							<div className={classes.heading}>
								<Typography variant='h5'>COMPANY</Typography>
							</div>
							<Typography variant='subtitle1' onClick={() => router.push('/about')}>
								About Us
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/contact')}>
								Contact Us
							</Typography>
						</div>
						<div className={classes.content}>
							<div className={classes.heading}>
								<Typography variant='h5'>EXPLORE THE MARKETPLACE</Typography>
							</div>
							<Typography
								variant='subtitle1'
								onClick={() =>
									router.push(
										{
											pathname: '/marketplace',
											query: {navigationQuery: 'care'},
										},
										'/marketplace'
									)
								}>
								Health Care
							</Typography>
							<Typography
								variant='subtitle1'
								onClick={() =>
									router.push(
										{
											pathname: '/marketplace',
											query: {navigationQuery: 'mind'},
										},
										'/marketplace'
									)
								}>
								Wellness
							</Typography>
							<Typography
								variant='subtitle1'
								onClick={() =>
									router.push(
										{
											pathname: '/marketplace',
											query: {navigationQuery: 'fitness'},
										},
										'/marketplace'
									)
								}>
								Fitness
							</Typography>
							
							<Typography
								variant='subtitle1'
								onClick={() =>
									router.push(
										{
											pathname: '/marketplace',
											query: {navigationQuery: 'sports'},
										},
										'/marketplace'
									)
								}>
								Sports
							</Typography>
							<Typography
								variant='subtitle1'
								onClick={() =>
									router.push(
										{
											pathname: '/marketplace',
											query: {navigationQuery: 'store'},
										},
										'/marketplace'
									)
								}>
								Store
							</Typography>
						</div>
						<div className={classes.content}>
							<div className={classes.heading}>
								<Typography variant='h5'>EXPLORE THE FEATURES</Typography>
							</div>
							<Typography variant='subtitle1' onClick={() => router.push('/dashboard-and-reports')}>
								Dashboard & Reports
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/consultation-and-facility')}>
								Consultation & Facility Booking
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/whatsapp-bot')}>
								WhatsApp Bot & Online Consult
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/emr-billing')}>
								EMR
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/pharma-and-billing')}>
								Pharma & Billing
							</Typography>
						</div>
						<div className={classes.content}>
							<div className={classes.heading}>
								{/* <Typography variant='h5'></Typography> */}
								<div style={{marginBlock: 17}}></div>
							</div>
							<Typography variant='subtitle1' onClick={() => router.push('/inventory-and-expenses')}>
								Inventory & Expenses
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/quick-sale')}>
								Quick Sale
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/diet-plan-and-workout-plan')}>
								Diet Plan & Workout Plan
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/membership-and-events')}>
								Membership & Events
							</Typography>
							<Typography variant='subtitle1' onClick={() => router.push('/integration')}>
								Integration
							</Typography>
						</div>
						<div className={classes.address}>
							<div className={classes.heading}>
								<Typography variant='h5'>ADDRESS</Typography>
							</div>
							<Typography variant='subtitle1'>LYFnGO PTE. LTD.</Typography>
							<Typography variant='subtitle1'>22 Sin Ming Lane</Typography>
							<Typography variant='subtitle1'>06-76 Midview City</Typography>
							<Typography variant='subtitle1'>SINGAPORE - 573969</Typography>

							<div className={classes.heading} style={{marginBlockStart: 10}}>
								<Typography variant='h5'>CONTACT</Typography>
							</div>
							<div className={classes.supportMail} onClick={() => (window.location = 'mailto:support@lyfngo.com')}>
								<EmailIcon />
								<Typography variant='subtitle1'>support@lyfngo.com</Typography>
							</div>
							<div className={classes.socialMedia}>
								<IconButton>
									<a
										target='_blank'
										href='https://api.whatsapp.com/send/?phone=6588351745&text=Hello,%20welcome%20to%20LYFnGO.%20I%20am%20glad%20to%20assist%20you.%20Please%20type%20your%20questions%20here.'
										rel='noopener noreferrer'>
										<WhatsAppIcon />
									</a>
								</IconButton>
								<IconButton>
									<TwitterIcon onClick={getTwitter} />
								</IconButton>
								<IconButton>
									<LinkedInIcon onClick={getLinkedIn} />
								</IconButton>
								<IconButton>
									<YouTubeIcon onClick={getToutube} />
								</IconButton>
								<IconButton>
									<FacebookIcon onClick={getFacebook} />
								</IconButton>
								<IconButton>
									<InstagramIcon onClick={getInstagram} />
								</IconButton>
							</div>
						</div>
					</div>
				) : (
					<div className={classes.mobileFooter}>
						<Accordion style={{boxShadow: 'none'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
								<div className={classes.heading}>
									<Typography variant='h5'>COMPANY</Typography>
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<div className={classes.content}>
									<Typography variant='subtitle1' onClick={() => router.push('/about')}>
										About Us
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/contact')}>
										Contact Us
									</Typography>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion style={{boxShadow: 'none'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
								<div className={classes.heading}>
									<Typography variant='h5'>EXPLORE THE MARKETPLACE</Typography>
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<div className={classes.content}>
									<Typography
										variant='subtitle1'
										onClick={() =>
											router.push(
												{
													pathname: '/marketplace',
													query: {navigationQuery: 'care'},
												},
												'/marketplace'
											)
										}>
										Health Care
									</Typography>
									<Typography
										variant='subtitle1'
										onClick={() =>
											router.push(
												{
													pathname: '/marketplace',
													query: {navigationQuery: 'mind'},
												},
												'/marketplace'
											)
										}>
										Wellness
									</Typography>
									<Typography
										variant='subtitle1'
										onClick={() =>
											router.push(
												{
													pathname: '/marketplace',
													query: {navigationQuery: 'fitness'},
												},
												'/marketplace'
											)
										}>
										Fitness
									</Typography>
									<Typography
										variant='subtitle1'
										onClick={() =>
											router.push(
												{
													pathname: '/marketplace',
													query: {navigationQuery: 'sports'},
												},
												'/marketplace'
											)
										}>
										Sports
									</Typography>
									<Typography
										variant='subtitle1'
										onClick={() =>
											router.push(
												{
													pathname: '/marketplace',
													query: {navigationQuery: 'store'},
												},
												'/marketplace'
											)
										}>
										Store
									</Typography>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion style={{boxShadow: 'none'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
								<div className={classes.heading}>
									<Typography variant='h5'>EXPLORE THE FEATURES</Typography>
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<div className={classes.content}>
									<Typography variant='subtitle1' onClick={() => router.push('/dashboard-and-reports')}>
										Dashboard & Reports
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/consultation-and-facility')}>
										Consultation & Facility Booking
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/whatsapp-bot')}>
										WhatsApp Bot & Online Consult
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/emr-billing')}>
										EMR
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/pharma-and-billing')}>
										Pharma & Billing
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/inventory-and-expenses')}>
										Inventory & Expenses
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/quick-sale')}>
										Quick Sale
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/diet-plan-and-workout-plan')}>
										Diet Plan & Workout Plan
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/membership-and-events')}>
										Membership & Events
									</Typography>
									<Typography variant='subtitle1' onClick={() => router.push('/integration')}>
										Integration
									</Typography>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion style={{boxShadow: 'none'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
								<div className={classes.heading}>
									<Typography variant='h5'>ADDRESS</Typography>
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<div className={classes.address}>
									<Typography variant='subtitle1'>LYFnGO PTE. LTD.</Typography>
									<Typography variant='subtitle1'>22 Sin Ming Lane</Typography>
									<Typography variant='subtitle1'>06-76 Midview City</Typography>
									<Typography variant='subtitle1'>SINGAPORE - 573969</Typography>

									<div className={classes.heading} style={{marginBlockStart: 10}}>
										<Typography variant='h5'>CONTACT</Typography>
									</div>
									<div className={classes.supportMail} onClick={() => (window.location = 'mailto:support@lyfngo.com')}>
										<EmailIcon />
										<Typography variant='subtitle1'>support@lyfngo.com</Typography>
									</div>
									<div className={classes.socialMedia}>
										<IconButton>
											<a
												target='_blank'
												href='https://api.whatsapp.com/send/?phone=6588351745&text=Hello,%20welcome%20to%20LYFnGO.%20I%20am%20glad%20to%20assist%20you.%20Please%20type%20your%20questions%20here.'
												rel='noopener noreferrer'>
												<WhatsAppIcon />
											</a>
										</IconButton>
										<IconButton onClick={getTwitter}>
											<TwitterIcon />
										</IconButton>
										<IconButton>
											<LinkedInIcon onClick={getLinkedIn} />
										</IconButton>
										<IconButton>
											<YouTubeIcon onClick={getToutube} />
										</IconButton>
										<IconButton onClick={getFacebook}>
											<FacebookIcon />
										</IconButton>
										<IconButton>
											<InstagramIcon onClick={getInstagram} />
										</IconButton>
									</div>
								</div>
							</AccordionDetails>
						</Accordion>
					</div>
				)}
			</section>
			<section className={classes.bottomSecRoot}>
				<div className={classes.bottomSec}>
					<div className={classes.copyRights}>
						<Typography variant='subtitle1'>{`Copyrights © ${moment(new Date()).format('YYYY')}`}</Typography>
						<Typography variant='subtitle1' className={classes.copyRightsLogo}>
							LYFnGO
						</Typography>
						<Typography variant='subtitle1'>. All Rights Reserved</Typography>
					</div>
					<div className={classes.madeLove}>
						<Typography variant='subtitle1'>Made with Care</Typography>
					</div>
					<div className={classes.termsPrivacy}>
						<Typography variant='subtitle1'>
							<Link href='/terms-and-conditions'>
								<a target='_blank'>TERMS AND CONDITIONS</a>
							</Link>
						</Typography>
						<Typography variant='subtitle1'>
							<Link href='/privacy-policy'>
								<a target='_blank'>PRIVACY POLICY</a>
							</Link>
						</Typography>
					</div>
				</div>
			</section>
		</div>
	)
}
export default LandingFooter
