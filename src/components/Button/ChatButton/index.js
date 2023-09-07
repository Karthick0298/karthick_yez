import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles(theme => ({
	root: {
		background: '#00B592',
		textTransform: 'none',
		paddingInline: 12,
		borderRadius: 12,
		paddingBlock: 4,
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: '#00B592',
		},
		'& .MuiButton-label': {
			fontSize: theme.typography.h5.fontSize,
			fontFamily: theme.typography.h5.fontFamily,
			color: '#fff',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
}))

const ButtonComps = ({children, onClick, disabled}) => {
	const classes = useStyles()
	return (
		<Button className={classes.root} variant='contained' onClick={onClick} disabled={disabled}>
			{children}
		</Button>
	)
}
ButtonComps.propTypes = {
	color: PropTypes.string,
}

export default ButtonComps
