import {makeStyles, Typography} from '@material-ui/core'
import Button from '../GradientButton'

const useStyles = makeStyles(theme => ({
	root: {
		border: '1px solid green',
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
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',

		'& .MuiTypography-h2': {
			fontWeight: 600,
			color: '#7047EA',

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

	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},

	articlesContainer: {
		backgroundColor: 'pink',
		display: 'grid',
	},

	articlesContainer: {
		border: '1px solid blue',
		display: 'grid',
		gridTemplateRows: 'repeat(2, 160px)',
		gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
		gridColumnGap: 22,
		gridRowGap: 16,
		[theme.breakpoints.down('sm')]: {},
		[theme.breakpoints.up('sm')]: {},
		[theme.breakpoints.down('md')]: {
			border: '1px solid black',
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
		},
		[theme.breakpoints.up('md')]: {},
	},
	boxOne: {
		backgroundColor: 'green',
		gridArea: '1 / 1 / 3 / 5',
		borderRadius: 14,
	},
	boxTwo: {
		backgroundColor: 'blue',
		gridArea: '1 / 5 / 2 / 7',
		borderRadius: 14,
	},
	boxThree: {
		backgroundColor: 'yellow',
		gridArea: '1 / 7 / 2 / 9',
		borderRadius: 14,
	},
	boxFour: {
		backgroundColor: '#4DE2AA',
		gridArea: '1 / 9 / 2 / 11',
		borderRadius: 14,
	},
	boxFive: {
		backgroundColor: 'violet',
		gridArea: '2 / 5 / 3 / 7',
		borderRadius: 14,
	},
	boxSix: {
		backgroundColor: 'skyblue',
		gridArea: '2 / 7 / 3 / 9',
		borderRadius: 14,
	},
	boxSeven: {
		backgroundColor: 'crimson',
		gridArea: '2 / 9 / 3 / 11',
		borderRadius: 14,
	},
}))

export default function ArticlesContainer() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<Typography variant='h2'>Health & Wellness Articles</Typography>
				<Button findMorebtn={classes.findMorebtn}>View All</Button>
			</div>
			<div className={classes.articlesContainer}>
				<div className={classes.boxOne}>box one</div>
				<div className={classes.boxTwo}>Box two</div>
				<div className={classes.boxThree}>box three</div>
				<div className={classes.boxFour}>box four</div>
				<div className={classes.boxFive}>box five</div>
				<div className={classes.boxSix}>box six</div>
				<div className={classes.boxSeven}>box seven</div>
			</div>
		</div>
	)
}
