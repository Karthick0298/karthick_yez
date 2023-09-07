import {makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	titleSection: {
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

export default function Heading({heading, boldText, textColor}) {
	const classes = useStyles()
	return (
		<div className={classes.titleSection}>
			<Typography variant='h2' style={{color: textColor}}>
				{heading}
				<span>{boldText}</span>
			</Typography>
		</div>
	)
}
