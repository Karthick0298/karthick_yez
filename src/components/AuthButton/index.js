import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles(theme => ({
	root: {
		background: ' linear-gradient(90deg, #0062DD 0%, #2EB2FF 101.53%)',
		borderRadius: 24,
		textTransform: 'none',
		boxShadow: 'none',
		padding: '8px 36px',
		'&:hover': {
			background: ' linear-gradient(90deg, #0062DD 0%, #2EB2FF 101.53%)',
		},
		'& .MuiButton-label': {
			// fontWeight: 100,
			fontSize: 14,
			color: '#fff',
			letterSpacing: 0.4,
			fontFamily: theme.typography.h6.fontFamily,
		},
	},
}))

const AuthButton = ({children, color, type, onClick, onClose}) => {
	const classes = useStyles()
	return (
		<Button className={classes.root} variant='contained' color={color} type={type} onClick={onClick} onClose={onClose}>
			{children}
		</Button>
	)
}
AuthButton.propTypes = {
	color: PropTypes.string,
}

export default AuthButton
