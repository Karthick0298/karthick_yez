import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles(theme => ({
	root: {
		borderRadius: 22,
		textTransform: 'none',
		padding: '4px 20px',
		boxShadow: 'none',
		[theme.breakpoints.down('xs')]: {
			// padding: '4px 36px',
		},
		[theme.breakpoints.up('sm')]: {
			padding: '8px 20px',
			minWidth: 170,
		},
		'& .MuiButton-label': {
			fontWeight: 100,
			fontSize: 14,
			color: '#fff',
			fontFamily: 'poppins',
			gap: 8,
			whiteSpace: 'nowrap',
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h6.fontSize,
				whiteSpace: 'nowrap',
			},
		},
	},
	'& .MuiButton-contained.Mui-disabled': {
		backgroundColor: 'red',
	},
}))

const ButtonComps = ({children, disabled, color, onClick, findMorebtn, type, onClose, onChange}) => {
	const classes = useStyles()
	return (
		<Button
			className={`${classes.root} ${findMorebtn}`}
			variant='contained'
			type={type}
			color={color}
			onClick={onClick}
			onClose={onClose}
			onChange={onChange}
			disabled={disabled}>
			{children}
		</Button>
	)
}
ButtonComps.propTypes = {
	color: PropTypes.string,
}

export default ButtonComps
