import {Button, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		borderRadius: 6,
		textTransform: 'none',
		padding: '16px 20px',
		boxShadow: 'none',
		[theme.breakpoints.down('sm')]: {
			padding: '4px 20px',
		},
		'& .MuiButton-label': {
			fontWeight: 100,
			fontSize: 14,
			color: '#fff',
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h6.fontSize,
			},
		},
	},
}))

const ButtonComps = ({children, backgroundColor}) => {
	const classes = useStyles()
	return (
		<Button className={classes.root} style={{backgroundColor: backgroundColor}}>
			{children}
		</Button>
	)
}
export default ButtonComps
