import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles(theme => ({
	root: {
		background: 'transparent linear-gradient(109deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 4px 15px #0000000D',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		textTransform: 'capitalize',
		[theme.breakpoints.down('sm')]: {
			padding: '16px 20px',
			whiteSpace: 'nowrap',
			borderRadius: 0,
		},
		'& .MuiButton-label': {
			// fontWeight: 100,
			// fontSize: 14,
			// color: '#fff',
			color: theme.palette.paragraph.main,
			fontWeight: theme.typography.h1.fontWeight,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h6.fontSize,
			},
		},
	},
}))

const FilterButtonComps = ({children, color}) => {
	const classes = useStyles()
	return (
		<Button className={classes.root} variant='contained' color={color}>
			{children}
		</Button>
	)
}
FilterButtonComps.propTypes = {
	color: PropTypes.string,
}

export default FilterButtonComps
