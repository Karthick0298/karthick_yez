import {makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		marginBlockStart: 24,
		marginInline: 100,
		[theme.breakpoints.down('sm')]: {
			marginInline: 16,
		},
		'& .MuiTypography-h2': {
			color: theme.palette.yoga.main,
			fontSize: 24,
			fontWeight: 300,
			'& span': {
				fontWeight: 500,
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
			},
		},
		'& .MuiTypography-h3': {
			color: theme.palette.yoga.main,
			paddingBlock: 10,
			fontSize: 18,
			fontWeight: 300,

			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},
}))

export default function PopularPackages(props) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant='h2'>
				Popular <span>Packages</span>
			</Typography>
			<Typography variant='h3'>Exploring top rated packages</Typography>
		</div>
	)
}
