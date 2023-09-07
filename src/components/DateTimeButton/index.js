import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		gap: 12,
		background: '#E0EAFF 0% 0% no-repeat padding-box',
		color: '#fff',
		borderRadius: 56,
		'& .MuiButton-containedPrimary': {
			paddingInline: 25,
			boxShadow: 'none',
			'& .MuiButton-label': {
				gap: 9,
			},
		},
		'& .MuiButton-root:hover': {
			backgroundColor: 'none',
		},
		'& .MuiTypography-h5': {
			fontSize: 15,
			textTransform: 'none',
			color: 'black',
		},
		'& .MuiButton-label': {
			gap: 10,
			paddingInline: 12,
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
	},
}))

const ButtonComp = ({children}) => {
	const classes = useStyles()
	return <Button className={classes.root}>{children}</Button>
}

export default ButtonComp
