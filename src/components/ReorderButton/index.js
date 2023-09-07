import {makeStyles, Typography} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	cardorderPlacedPosition: {
		background: '#E0EAFF 0% 0% no-repeat padding-box',
		border: '1px solid #E0EAFF',
		borderRadius: 3,
		opacity: 1,
		padding: 5,
	},
}))
export default function Reorder({children}) {
	const classes = useStyles()
	return <Typography className={classes.cardorderPlacedPosition}>{children}</Typography>
}
