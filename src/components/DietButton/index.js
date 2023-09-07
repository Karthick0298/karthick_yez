import {Button, makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	root: {
		background: '#FFFFFF 0% 0% no-repeat padding-box',
		borderRadius: 19,
		textTransform: 'none',
		padding: '4px 20px',
		boxShadow: 'none',
		[theme.breakpoints.down('sm')]: {
			padding: '4px 20px',
		},
		'& .MuiButton-label': {
			fontWeight: 100,
			fontSize: 12,
			color: '#AA2E90',
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h6.fontSize,
			},
		},
	},
}))
function DietButton(	{children}) {
	const classes = useStyles()

	return (
		<div>
			<Button className={classes.root} variant='contained'>
				{children}
			</Button>
		</div>
	)
}
export default DietButton
