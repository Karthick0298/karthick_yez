import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			paddingBlockStart: 26,
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockStart: 34,
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockStart: 40,
			paddingInline: 100,
		},

		'& .MuiTypography-h2': {
			fontSize: 26,
			fontWeight: 500,
			textAlign: 'center',

			'& span': {
				fontWeight: 600,
			},

			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
			},
		},
	},

	cardContainer: {
		paddingBlockStart: 34,
		display: 'flex',
		alignItems: 'center',
		gap: 24,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},

	healthCash: {
		// height: 290,
		maxWidth: 570,
		borderRadius: 15,
		padding: 38,
		backgroundImage: `url(https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/healthCashBgImg1.png)`,
		backgroundPosition: 'center',
		// backgroundAttachment: 'fixed',
		backgroundSize: 'cover',

		'& .MuiTypography-h3': {
			fontSize: 24,
			color: '#FAFAFA',
			fontWeight: 500,

			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
			},
		},
		'& .MuiTypography-h5': {
			fontSize: 20,
			color: '#FAFAFA',
			paddingBlock: 18,

			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},

		[theme.breakpoints.down('sm')]: {
			padding: 24,
			maxWidth: 500,
		},
	},

	downloadButtonContainer: {
		paddingBlockStart: 18,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 22,
		[theme.breakpoints.down('sm')]: {
			paddingBlockStart: 0,
		},
	},
	dwnldBtn: {
		cursor: 'pointer',
	},
}))
export default function DownloadAidivaApp({textColor}) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Typography variant='h2' style={{color: textColor}}>
				Leading Healthcare Providers. <span>Trust us for Business</span>
			</Typography>
			<div className={classes.cardContainer}>
				<div className={classes.healthCash}>
					<Typography variant='h3'>LFYnGO Healthcash</Typography>
					<Typography variant='h5'>Download the App Now and Get RS. 100 on Your LFYnGO Wallet</Typography>
					<div className={classes.downloadButtonContainer}>
						<Link href='https://www.apple.com/in/app-store/'>
							<Image
								src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/appstore.png'
								alt='app store'
								width={168}
								height={58}
								className={classes.dwnldBtn}
							/>
						</Link>
						<Link href='https://play.google.com/store'>
							<Image
								src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/playbutton.png'
								alt='play store'
								width={168}
								height={58}
								className={classes.dwnldBtn}
							/>
						</Link>
					</div>
				</div>

				<div className={classes.healthCash} style={{backgroundImage: `url(https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/healthCashBgImg2.png)`}}>
					<Typography variant='h3'>LFYnGO Offers</Typography>
					<Typography variant='h5'>Get Unlimited Consultations for You Starting at Just Rs.199</Typography>
					<div className={classes.downloadButtonContainer}>
						<Link href='https://www.apple.com/in/app-store/'>
							<Image
								src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/appstore.png'
								alt='app store'
								width={168}
								height={58}
								className={classes.dwnldBtn}
							/>
						</Link>
						<Link href='https://play.google.com/store'>
							<Image
								src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/playbutton.png'
								alt='play store'
								width={168}
								height={58}
								className={classes.dwnldBtn}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
