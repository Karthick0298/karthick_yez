import {makeStyles, Typography} from '@material-ui/core'
import Link from 'next/link'
import Button from '../GradientButton'

const useStyles = makeStyles(theme => ({
	titleSection: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',

		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
			flexDirection: 'row',
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
			flexDirection: 'row',
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
			flexDirection: 'row',
		},

		'& .MuiTypography-h2': {
			fontWeight: 300,
			'& span': {
				fontWeight: 600,
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h2.sm.fontSize,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: theme.typography.h2.md.fontSize,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: theme.typography.h2.lg.fontSize,
			},
		},
	},

	buttonContainer: {
		[theme.breakpoints.down('sm')]: {
			// alignSelf: 'flex-end',
		},
	},
}))

export default function HeadingWithButton({heading, boldText, textColor, btnContent, btnColor, btnLink, onClick}) {
	const classes = useStyles()
	return (
		<div className={classes.titleSection}>
			<Typography variant='h2' style={{color: textColor}}>
				{heading}
				<span>{boldText}</span>
			</Typography>
			<div className={classes.buttonContainer} onClick={onClick}>
				{/* <Link href={btnLink}> */}
				<Button findMorebtn={btnColor}>{btnContent}</Button>
				{/* </Link> */}
			</div>
		</div>
	)
}
