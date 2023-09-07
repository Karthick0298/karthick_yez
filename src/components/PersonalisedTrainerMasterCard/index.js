import {makeStyles, Typography, useCallback, useEffect} from '@material-ui/core'
import Image from 'next/image'
import Button from '../GradientButton'
import AddIcon from '@material-ui/icons/Add'
import Link from 'next/link'
// import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'grid',

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 16,
			paddingInline: 10,
			gap: 10,
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 20,
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
			gridTemplateColumns: 'repeat(3, 1fr)',
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 24,
			paddingInline: 100,
			gap: 16,
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
		[theme.breakpoints.up('lg')]: {
			paddingBlock: 24,
			paddingInline: 100,
			gap: 16,
			gridTemplateColumns: 'repeat(6, 1fr)',
		},
	},

	card: {
		width: '100%',
		cursor: 'pointer',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		border: '2px solid #00000008',
		borderRadius: 15,
		background: 'transparent linear-gradient(134deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		[theme.breakpoints.down('sm')]: {
			padding: 12,
			height: 120,
		},
		[theme.breakpoints.up('sm')]: {
			padding: 12,
			height: 140,
		},
		[theme.breakpoints.up('md')]: {
			padding: 12,
			height: 160,
		},

		'& .MuiTypography-h5': {
			textAlign: 'center',
			paddingBlockStart: 15,
			fontFamily: 'Source Sans Pro,sans-serif',
			fontWeight: 600,
			fontSize: 18,
			letterSpacing: 0.5,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
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

export default function PersonalisedTrainerMasterCard({cardData, btnContent, textColor, btnColor, priceTagColor, onClick}) {
	const classes = useStyles()
	const router = useRouter()

	return (
		<div className={classes.root}>
			{cardData?.map((item, index) => (
				<div
					key={item?.specialityUuid || item?.index}
					className={classes.card}
					onClick={e => onClick(e, item?.specialityName, item?.b2cSubsriptionName, item?.b2cSubscriptionMaxPrice)}>
					<Image
						src={item?.imageUrl ? item?.imageUrl : 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/glassycard/general.svg'}
						alt='speciality'
						width={44}
						height={52}
					/>
					<Typography variant='h5' style={{color: textColor}}>
						{item?.specialityName ? item?.specialityName : item?.b2cSubsriptionName}
					</Typography>

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
				{/* <Link href='https://www.apple.com/in/app-store/'> */}
				<Button findMorebtn={btnColor}>
					<AddIcon />
					<Typography variant='h5'>{btnContent}</Typography>
				</Button>
				{/* </Link> */}
			</div>
		</div>
	)
}
