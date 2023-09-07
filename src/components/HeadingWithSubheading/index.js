import {makeStyles, Typography} from '@material-ui/core'

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

		'& .MuiTypography-h4': {
			color: '#484755',
			fontWeight: 300,
			fontStyle: 'normal',

			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h4.sm.fontSize,
				paddingBlock: 6,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: theme.typography.h4.md.fontSize,
				paddingBlock: 10,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: theme.typography.h4.lg.fontSize,
				paddingBlock: 10,
			},
		},
	},
}))

export default function HeadingWithSubheading({heading, boldText, subheading, textColor}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant='h2' style={{color: textColor}}>
				{heading}
				<span>{boldText}</span>
			</Typography>
			<Typography variant='h4'>{subheading}</Typography>
		</div>
	)
}
