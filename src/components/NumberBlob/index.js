import {makeStyles, Typography} from '@material-ui/core'
import Ticker from '../../sections/Homepage/Achievements/CountUp'

const useStyles = makeStyles(theme => ({
	blob: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width: 150,
		height: 150,
		animation: ' $blob 10s infinite',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 120,
			maxHeight: 120,
		},
	},
	'@keyframes blob': {
		'0%, 100%': {
			borderRadius: '40% 60% 70% 30% / 47% 62% 38% 53%',
		},
		'25%': {
			borderRadius: '73% 27% 26% 38% / 73% 36% 64% 27%',
		},
		'50%': {
			borderRadius: '28% 72% 44% 56% / 49% 40% 60% 51%',
		},
		'75%': {
			borderRadius: '64% 36% 27% 73% / 52% 55% 42% 45%',
		},
	},
	name: {
		paddingBlockStart: 8,
		fontSize: 18,
		color: '#475677',
		fontWeight: 400,
		textTransform: 'capitalize',
		[theme.breakpoints.down('sm')]: {
			fontSize: 16,
		},
	},
}))
export default function NumberBlob({end, suffix, duration, blobName, backgroundColor, textColor, decimals, start}) {
	const classes = useStyles()
	return (
		<div className={classes.blob} style={{backgroundColor: backgroundColor}}>
			<Ticker decimals={decimals} start={start} end={end} duration={duration} suffix={suffix} color={textColor} />
			<Typography variant='h3' className={classes.name}>
				{blobName}
			</Typography>
		</div>
	)
}
