import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Button from '../GradientButton'
import AddIcon from '@material-ui/icons/Add'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	root: {
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

	cardContainer: {
		display: 'grid',

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 18,
			paddingBlockEnd: 36,
			gap: 12,
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns: 'repeat(3, 1fr)',
			paddingBlock: 14,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 16,
			gap: 16,
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
		[theme.breakpoints.up('lg')]: {
			paddingBlock: 18,
			gap: 18,
			gridTemplateColumns: 'repeat(6, 1fr)',
		},
	},

	card: {
		cursor: 'pointer',
		width: '100%',
		backgroundPosition: 'center',
		backgroundSize: '100% 100%',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderRadius: 15,
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',

		[theme.breakpoints.down('sm')]: {
			height: 120,
		},
		[theme.breakpoints.up('sm')]: {
			height: 140,
		},
		[theme.breakpoints.up('md')]: {
			height: 160,
		},
	},

	textContent: {
		width: '100%',
		background: '#00000060 0% 0% no-repeat padding-box',
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 15,

		'& .MuiTypography-h5': {
			color: '#FFF',
			fontSize: 16,
			paddingBlock: 10,
			textAlign: 'center',
			[theme.breakpoints.down('sm')]: {
				paddingBlock: 6,
				fontSize: 14,
			},
		},
	},

	btnContainer: {
		[theme.breakpoints.down('sm')]: {
			height: 120,
		},
		[theme.breakpoints.up('sm')]: {
			height: 140,
		},
		[theme.breakpoints.up('md')]: {
			height: 160,
		},

		'& .MuiButton-label': {
			display: 'flex',
			flexDirection: 'column',
			// gap: 24,
			alignItems: 'center',
			fontSize: 18,
			color: '#FFF',

			'& .MuiSvgIcon-root': {
				marginTop: 18,
				fontSize: 30,
			},
		},

		'& .MuiTypography-h5': {
			color: '#FFFFFF',
			marginTop: 18,
			fontFamily: 'Source Sans Pro,sans-serif',
			fontWeight: 600,
			fontSize: 18,
			letterSpacing: 0.5,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
				marginTop: 8,
				fontWeight: 500,
			},
		},

		'& .MuiButton-root': {
			height: '100%',
			width: '100%',
			borderRadius: 15,
		},
	},

	priceTag: {
		position: 'absolute',
		top: 12,
		left: -6,
		paddingBlock: 2,
		paddingInline: 14,
		borderRadius: '0px 20px 20px 0px',
		[theme.breakpoints.down('sm')]: {
			paddingBlock: 1,
			paddingInline: 12,
			left: -4,
		},

		'& .MuiTypography-h6': {
			color: '#FFFFFF',
			fontFamily: 'Source Sans Pro,sans-serif',
			fontWeight: 500,
			fontSize: 16,
			letterSpacing: 0.5,
			'& span': {
				marginRight: 8,
				[theme.breakpoints.down('sm')]: {
					marginRight: 6,
				},
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
}))

export default function ExploreCentresCardContainer({cardData, btnColor, priceTagColor, btnContent, onClick}) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				{cardData?.map((item, {image}) => (
					<div
						onClick={e => onClick(e, item?.b2cSubsriptionName, item?.b2cSubscriptionMaxPrice)}
						key={item?.slno}
						className={classes.card}
						style={{
							backgroundImage: `url(${
								item?.webBannerImageUrl ? item?.webBannerImageUrl : 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/general-care.png'
							})`,
						}}
						// style={{backgroundImage: `url(${item?.imageUrl ? item?.imageUrl : 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/general-care.png'})`}}
					>
						<div className={classes.textContent}>
							<Typography variant='h5'>{item?.b2cSubsriptionName ? item?.b2cSubsriptionName : item?.specialityName}</Typography>
						</div>
						{priceTagColor && (
							<div className={classes.priceTag} style={{backgroundColor: priceTagColor}}>
								<Typography variant='h6'>
									<span
										style={{
											fontWeight: 'bolder',
											fontFamily: 'Roboto',
										}}>
										&#8377;
									</span>
									{item?.b2cSubscriptionMaxPrice}
								</Typography>
							</div>
						)}
					</div>
				))}
				<div className={classes.btnContainer}>
					<Link href='/sports'>
						<Button findMorebtn={btnColor}>
							<AddIcon />
							<Typography variant='h5'>{btnContent}</Typography>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
