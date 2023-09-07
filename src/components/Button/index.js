import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles(theme => ({
	root: {
		background: '#FAFCFC 0% 0% no-repeat padding-box',
		borderRadius: 12,
		textTransform: 'none',
		padding: '4px 40px',
		boxShadow: 'none',
		'& .MuiButton-label': {
			fontWeight: 600,
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
}))

const ButtonComps = ({children, onClick}) => {
	const classes = useStyles()
	return (
		<Button className={classes.root} variant='contained' onClick={onClick}>
			{children}
		</Button>
	)
}
ButtonComps.propTypes = {
	color: PropTypes.string,
}

export default ButtonComps
