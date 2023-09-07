import {makeStyles, Typography} from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
	root: {
		// border: '1px dashed purple',
		paddingInline: 16,
		paddingBlock: 14,
	},

	establishmentGroup: {
		backgroundColor: 'red',
		'& .MuiTypography-h3': {
			color: theme.palette.yoga.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 18,
			},
		},
		'& .MuiTypography-body1': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},

			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
	},
}))

const Info = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.establishmentGroup}>
				<Typography variant='h3'>Pradi Yoga Center</Typography>
				<Typography variant='body1'>
					Launched in 2000, Naturals is today India's No. 1 unisex hair and beauty salon. With a strong network of over 680 salons, evenly spread
					across the country, it aims to reach a target of 3000 salons by the year 2025.
				</Typography>
			</div>
		</div>
	)
}

export default Info
