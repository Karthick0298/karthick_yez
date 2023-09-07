import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Avatar, Button, Link, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {},

	sectionOne: {
		'& .MuiTypography-h2': {
			textAlign: 'center',
			fontFamily: 'Poppins',

			fontSize: 28,
			[theme.breakpoints.up('xs')]: {
				paddingBlockStart: 20,
				marginBlockEnd: 8,
			},
			[theme.breakpoints.up('sm')]: {
				paddingBlockStart: 36,
				marginBlockEnd: 14,
			},
			[theme.breakpoints.up('lg')]: {
				paddingBlockStart: 78,
				marginBlockEnd: 28,
			},
		},
	},
	sectionOneSub: {
		display: 'flex',
		justifyContent: 'center',
		gap: 24,
		paddingInline: 16,
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	sectionOneOne: {
		width: '100%',
		background: '#00000005',
		borderRadius: 14,
		maxWidth: 532,
		padding: 20,
		alignItems: 'center',
		flexDirection: 'column',
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',

			fontSize: 22,
			paddingBlockStart: 14,
			textAlign: 'center',
		},
		'& .MuiTypography-h4': {
			fontFamily: 'Poppins',

			fontSize: 18,
			fontStyle: 'normal',
			paddingBlockStart: 10,
			textAlign: 'center',
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Poppins',

			fontSize: 16,
			fontWeight: 500,
			paddingBlockStart: 6,
			textAlign: 'center',
		},
		'& span': {
			color: '#0F83F6',
			cursor: 'pointer',
		},
	},
	sectionOneTwo: {
		width: '100%',

		background: '#00000005',
		borderRadius: 14,
		maxWidth: 532,
		padding: 20,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		'& .MuiTypography-h3': {
			fontFamily: 'Poppins',

			fontSize: 22,
			paddingBlockStart: 14,
			textAlign: 'center',
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Poppins',

			fontSize: 16,
			fontWeight: 500,
			paddingBlockStart: 16,
		},
		'& span': {
			color: '#0F83F6',
			cursor: 'pointer',
		},
	},
	sectionTwo: {
		'& .MuiTypography-h2': {
			textAlign: 'center',
			fontFamily: 'Poppins',

			fontSize: 28,
			[theme.breakpoints.up('xs')]: {
				paddingBlockStart: 20,
				marginBlockEnd: 8,
			},
			[theme.breakpoints.up('sm')]: {
				paddingBlockStart: 36,
				marginBlockEnd: 14,
			},
			[theme.breakpoints.up('lg')]: {
				paddingBlockStart: 78,
				marginBlockEnd: 28,
			},
		},
	},
	addressCard1: {
		backgroundImage: 'url(/images/landingImage/singaporebg.png)',
		backgroundSize: 'cover',
		backgroundPosition: 'initial',
		borderRadius: 14,
		minWidth: 500,
		maxWidth: 600,
		padding: 20,
		width: '100%',
		[theme.breakpoints.down('1064')]: {
			minWidth: 300,
			maxWidth: 600,
		},
		[theme.breakpoints.up('1065')]: {
			minWidth: 500,
			maxWidth: 600,
		},

		'& .MuiTypography-h4': {
			fontFamily: 'Poppins',
			color: '#FFFFFF',
			fontStyle: 'normal',
			fontSize: 20,
			paddingBlock: 8,
			textAlign: 'center',
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Poppins',
			color: '#FFFFFF',
			fontSize: 17,
			paddingBottom: 4,
			textAlign: 'center',
			lineHeight: '150%',
		},
	},
	addressCard2: {
		backgroundImage: 'url(/images/landingImage/indiaimg.png)',
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
		borderRadius: 14,
		minWidth: 500,
		maxWidth: 600,
		padding: 20,
		width: '100%',
		[theme.breakpoints.down('1064')]: {
			minWidth: 300,
			maxWidth: 600,
		},
		[theme.breakpoints.up('1065')]: {
			minWidth: 500,
			maxWidth: 600,
		},
		'& .MuiTypography-h4': {
			color: '#FFFFFF',
			fontStyle: 'normal',
			fontSize: 20,
			paddingBlock: 8,
			textAlign: 'center',
		},
		'& .MuiTypography-h5': {
			color: '#FFFFFF',
			fontSize: 17,
			paddingBottom: 4,
			textAlign: 'center',
		},
	},
	addressCard3: {
		backgroundImage: 'url(/images/landingImage/usabg.png)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: 14,
		minWidth: 399,
		padding: 20,
		width: '100%',
		'& .MuiTypography-h4': {
			color: '#FFFFFF',
			fontStyle: 'normal',
			fontSize: 20,
			paddingBlock: 8,
			textAlign: 'center',
		},
		'& .MuiTypography-h5': {
			color: '#FFFFFF',
			fontSize: 17,
			paddingBottom: 4,
			textAlign: 'center',
		},
	},
	sectionTwoOne: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	sectionTwoOneOne: {
		paddingInline: 16,
		display: 'flex',
		justifyContent: 'center',
		paddingBlockEnd: 24,
	},
	sectionTwoOneTwo: {
		paddingInline: 16,
		display: 'flex',
		justifyContent: 'center',
		gap: 24,
		paddingBlockEnd: 24,
		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
}))

function ContactPage() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.sectionOne}>
				<Typography variant='h2'>Get in Touch</Typography>

				<div className={classes.sectionOneSub}>
					<div className={classes.sectionOneOne}>
						<Typography variant='h3'>Want to talk to a sales specialist?</Typography>
						<Typography variant='h4'>Connect with a specialist </Typography>
						{/* <Typography variant='h5' onClick={() => (window.location = 'tel:')}>
							INDIA : <span>+91-422-4975770</span>
						</Typography>
						<Typography variant='h5' onClick={() => (window.location = 'tel:')}>
							SINGAPORE : <span>+91-422-4975770</span>
						</Typography> */}
						<Typography variant='h5' onClick={() => (window.location = 'mailto:')}>
							MAIL : <span>sales@lyfngo.com</span>
						</Typography>
					</div>
					<div className={classes.sectionOneTwo}>
						<Typography variant='h3'>Have questions about our software or other LYFnGO products?</Typography>
						<Typography variant='h5' onClick={() => (window.location = 'mailto:')}>
							MAIL : <span>support@lyfngo.com</span>
						</Typography>
					</div>
				</div>
			</div>

			<div className={classes.sectionTwo}>
				<Typography variant='h2'>Office Location</Typography>

				<div className={classes.sectionTwoOne}>
					<div className={classes.sectionTwoOneOne}>
						<div className={classes.addressCard1}>
							<Typography variant='h4'>Asia Headquarters</Typography>
							<Typography variant='h5'>
								22 Sin Ming Lane <br /> #06-76 Midview City <br /> Singapore 573969 <br /> Phone number: +65 88351745
							</Typography>
						</div>
					</div>
					<div className={classes.sectionTwoOneOne}>
						<div className={classes.addressCard2}>
							<Typography variant='h4'>India</Typography>
							<Typography variant='h5'>
								SF NO.431/1, S. Palayam <br /> FP 114, Block 1, Jain Cambrae East <br /> Avinashi Road, Peelamedu <br />
								Coimbatore, TamilNadu - 641004 <br /> Phone number: +91 8110071300
							</Typography>
						</div>
					</div>

					{/* <div className={classes.sectionTwoOneTwo}> */}
					{/* <div className={classes.addressCard2}>
							<Typography variant='h4'>INDIA</Typography>
							<Typography variant='h5'>LYFnGO Inc., </Typography>
							<Typography variant='h5'>
								FO-113, 1st Floor,
								<br /> 1st Block,
								<br /> Jain Cambrae East,
								<br /> Avinashi Road,
								<br /> Peelamedu,
								<br /> Coimbatore,
								<br /> Tamil Nadu- 641004
							</Typography>
						</div> */}
					{/* <div className={classes.addressCard3}>
							<Typography variant='h4'>USA</Typography>
							<Typography variant='h5'>LYFnGO Inc., </Typography>
							<Typography variant='h5'>
								Avinashi Road <br /> Peelamedu, Coimbatore <br /> Tamilnadu - 641004 <br /> India
							</Typography>
						</div> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	)
}

export default ContactPage
