import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Button from '../GradientButton'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
	root: {
		marginInline: 100,
		paddingBlock: 36,
		display: 'flex',
		gap: 16,
		// justifyContent: 'space-between',
		flexWrap: 'wrap',

		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-evenly',
			marginInline: 16,
		},
	},

	card: {
		width: 170,
		height: 170,
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		border: '2px solid #00000008',
		borderRadius: 15,
		background: 'transparent linear-gradient(134deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',

		'& .MuiTypography-h5': {
			paddingBlockStart: 15,
			fontFamily: 'Source Sans Pro,sans-serif',
			fontWeight: 600,
			fontSize: 18,
			letterSpacing: 0.5,
		},

		[theme.breakpoints.down('sm')]: {
			width: 140,
			height: 140,
		},
	},

	btnContainer: {
		width: 170,
		height: 170,
		display: 'flex',
		justifyContent: 'center',

		[theme.breakpoints.down('sm')]: {
			width: 140,
			height: 140,
		},

		'& .MuiButton-label': {
			display: 'flex',
			flexDirection: 'column',
			paddingBlockStart: 26,
			fontSize: 18,
			color: '#FFF',

			'& .MuiSvgIcon-root': {
				fontSize: 34,
			},

			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	priceTag: {
		position: 'absolute',
		top: 12,
		left: -5,
		// backgroundColor: '#00B592',
		paddingInline: 16,
		paddingBlock: 4,
		borderRadius: '0px 20px 20px 0px',

		[theme.breakpoints.down('sm')]: {
			paddingInline: 8,
			paddingBlock: 4,
		},

		'& .MuiTypography-h6': {
			color: '#fff',
			fontSize: 14,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
}))

export default function PersonalisedTrainerCardOffer({cardData, btnContent, textColor, btnColor, priceTagColor}) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{cardData.map(({id, image, heading, price}) => (
				<div key={id} className={classes.card}>
					<Image src={image} alt='icon' width={44} height={52} />
					<Typography variant='h5' style={{color: textColor}}>
						{heading}
					</Typography>
					<div className={classes.priceTag} style={{backgroundColor: priceTagColor}}>
						<Typography variant='h6'>₹ {price}</Typography>
					</div>
				</div>
			))}
			<div className={classes.btnContainer}>
				<Button findMorebtn={btnColor}>
					<AddIcon />
					{btnContent}
				</Button>
			</div>
		</div>
	)
}
