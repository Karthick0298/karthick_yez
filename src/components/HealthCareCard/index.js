import {Card, makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import PlayButton from '../../components/ButtonCom/PlayButton'
import StoreButton from '../../components/ButtonCom/StoreButton'
const useStyles = makeStyles(theme => ({
	healthcarecardmain: {
		display: 'flex',
		justifyContent: 'center',
		'& .MuiTypography-h5': {
			fontFamily: theme.typography.h3.fontFamily,
			// fontSize: theme.typography.h4.fontSize,
			fontSize: 26,
			color: '#FAFAFA',
			paddingBottom: 8,
			[theme.breakpoints.down('xs')]: {
				fontSize: 20,
			},
		},
		'& .MuiTypography-h6': {
			fontFamily: theme.typography.h3.fontFamily,
			fontSize: theme.typography.subtitle1.fontSize,
			color: '#FAFAFA',
			paddingBottom: 8,
			paddingInlineEnd: 16,
			[theme.breakpoints.down('xs')]: {
				fontSize: 12,
			},
		},
		[theme.breakpoints.down('xs')]: {
			padding: 8,
		},
	},
	appstore: {
		display: 'flex',
		gap: 22,
		justifyContent: 'center',
		'& img': {
			width: 154,
			height: 58,
		},
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
		},
	},
	healthCard: {
		paddingInline: 32,
		paddingBlock: 24,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'column',
		gap: 14,
		[theme.breakpoints.down('xs')]: {
			paddingBlock: 12,
			gap: 4,
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
}))
export default function HealthCareCard({Heading, Subheading, background}) {
	const classes = useStyles()

	return (
		<div className={classes.healthcarecardmain}>
			<div className={classes.healthCard} style={{background: background}}>
				<Typography variant='h5'>{Heading}</Typography>
				<Typography variant='h6'>{Subheading}</Typography>
				<div className={classes.appstore}>
					<StoreButton />
					<PlayButton />
				</div>
			</div>
		</div>
	)
}
