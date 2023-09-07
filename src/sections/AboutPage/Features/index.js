import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	mainRoot: {
		// border: '1px solid blue',
		position: 'relative',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 4,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 60,
		},
	},
	containerbgOne: {
		position: 'absolute',
		top: 0,
		left: 0,
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'unset',
		},
	},
	containerbgTwo: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'unset',
		},
	},
	missionContainerRoot: {
		display: 'flex',
		justifyContent: 'center',
	},

	missionContainer: {
		textAlign: 'center',
		paddingBlock: 32,
		[theme.breakpoints.up('xs')]: {
			paddingInline: 16,
			maxWidth: '100%',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '76%',
		},

		'& .MuiTypography-h3': {
			fontWeight: 500,
			lineHeight: '136%',
			fontFamily: 'Poppins',

			[theme.breakpoints.up('xs')]: {
				fontSize: 28,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 34,
			},
		},
		'& .MuiTypography-subtitle1': {
			paddingInline: 12,
			color: theme.palette.lyfngo.content1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,

			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
				paddingBlock: 10,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
				paddingBlock: 14,
			},
		},
	},
	featuresContainer: {
		display: 'flex',
		justifyContent: 'center',
		paddingBlock: 32,
		flexWrap: 'wrap',
		[theme.breakpoints.up('xs')]: {
			paddingInline: 16,
		},
	},
	featuresCard: {
		// border: '1px solid green',
		display: 'flex',
		borderRadius: 16,
		justifyContent: 'flex-start',
		flexDirection: 'column',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			maxWidth: '100%',
			padding: 22,
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: 280,
			padding: 30,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 360,
			padding: 34,
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: 504,
			padding: 34,
		},

		'& .MuiTypography-h5': {
			fontWeight: 500,
			lineHeight: '126%',
			textAlign: 'center',
			marginBlockStart: 18,
			fontFamily: 'Poppins',

			[theme.breakpoints.up('xs')]: {
				fontSize: 22,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 28,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 32,
			},
		},
		'& .MuiTypography-subtitle1': {
			color: theme.palette.lyfngo.content1,
			fontFamily: theme.palette.lyfngo.fontFamily,
			fontWeight: 500,
			textAlign: 'center',

			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
	},
}))

function index() {
	const classes = useStyles()

	return (
		<div className={classes.mainRoot}>
			<div className={classes.missionContainerRoot}>
				<div className={classes.missionContainer}>
					<Typography variant='h3'>Our Mission and Values</Typography>
					<Typography variant='subtitle1'>
						LYFnGO's mission is to help small enterprises and independent service providers achieve their objectives by delivering technical solutions
						that support the growth of their businesses. Through innovative product offerings, LYFnGO restores a company owner's most precious
						resource: time. Our products and services are designed to take the guesswork out of business operations, allowing any organization, no
						matter how large or small, to succeed.
					</Typography>
				</div>
			</div>

			<div className={classes.featuresContainer}>
				<div className={classes.featuresCard} style={{background: '#00000005'}}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/icons/smiley.svg' alt='Team Work icon' width={70} height={70} />
					<Typography variant='h5'>Team Work</Typography>
					<Typography variant='subtitle1'>
						By working as one team with shared goals, we believe we can achieve great things. We recognize, respect and value diversity in the team.
						We develop strong bonds by communicating and sharing knowledge. We encourage open discussion and commit to an agreed position.
					</Typography>
				</div>
				<div className={classes.featuresCard}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/icons/integration.svg'
						alt='Integrity icon'
						width={70}
						height={70}
					/>
					<Typography variant='h5'>Integrity</Typography>
					<Typography variant='subtitle1'>
						Our reputation is based upon our ability to fulfill promises to service providers and customers. we do so by being honest in our dealings,
						taking responsibility and being accountable for our actions. We ensure that the highest ethical standards guide us in making decisions.
					</Typography>
				</div>
				<div className={classes.featuresCard}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/icons/focus.svg'
						alt='Customer Focus icon'
						width={70}
						height={70}
					/>
					<Typography variant='h5'>Customer Focus</Typography>
					<Typography variant='subtitle1'>
						Our success is based upon our customer focus. We listen to, and connect with, customers and treat them with dignity and respect. By
						understanding and anticipating their needs, we make it easy for our customers to do business with us. We aim to offer them value and
						quality services to enrich lives and enhance business success.
					</Typography>
				</div>
				<div className={classes.featuresCard} style={{background: '#00000005'}}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/icons/award.svg'
						alt='Personal Excellence icon'
						width={70}
						height={70}
					/>
					<Typography variant='h5'>Personal Excellence</Typography>
					<Typography variant='subtitle1'>
						Leadership and superior performance are achieved through the pursuit of personal excellence. We are committed to doing and being the best.
						We acknowledge the potential of the individual and create opportunities for all to grow and excel. Together, we celebrate our success and
						achievements.
					</Typography>
				</div>
			</div>
			<div className={classes.containerbgOne}>
				<Image src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/TileLeft.svg' alt='module icon' width={140} height={140} />
			</div>
			<div className={classes.containerbgTwo}>
				<Image src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Icons/TileRight.svg' alt='module icon' width={140} height={140} />
			</div>
		</div>
	)
}

export default index
