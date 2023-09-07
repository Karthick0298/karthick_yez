import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import Image from 'next/image'
const useStyles = makeStyles(theme => ({
	exploremain: {
		paddingInline: 56,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 12,
		},
	},
	explorecardmain: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& .MuiTypography-h5': {
			fontFamily: theme.typography.h3.fontFamily,
			fontSize: theme.typography.subtitle1.fontSize,
			color: '#475677',
			paddingBottom: 8,
			fontWeight: theme.typography.h2.fontWeight,
		},
		'& .MuiTypography-h6': {
			fontFamily: theme.typography.h3.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			paddingBottom: 8,
			color: '#475677',
			textAlign: 'center',
		},
	},
}))
export default function ExploreMoreCard({image, heading, subheading}) {
	const classes = useStyles()
	return (
		<div className={classes.exploremain}>
			<Image src={image} width={60} height={60} />
			<div className={classes.explorecardmain}>
				<Typography variant='h5'>{heading}</Typography>
				<Typography variant='h6'>{subheading}</Typography>
			</div>
		</div>
	)
}
