import {Button, makeStyles} from '@material-ui/core'
import React, {useState} from 'react'

const useStyles = makeStyles(theme => ({
	hidden: {
		[theme.breakpoints.down('sm')]: {
			display: '-webkit-box',
			WebkitLineClamp: 2,
			overflow: 'hidden',
			WebkitBoxOrient: 'vertical',
		},
		[theme.breakpoints.up('sm')]: {
			display: '-webkit-box',
			WebkitLineClamp: 4,
			overflow: 'hidden',
			WebkitBoxOrient: 'vertical',
		},
	},
	root: {
		padding: 0,
		'& .MuiButton-label': {
			fontSize: 14,
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			color: '#fff',
			fontStyle: 'italic',
			fontWeight: 100,
			justifyContent: 'flex-start',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}))

function ReadMore({children}) {
	const classes = useStyles()
	const [isHidden, setIsHidden] = useState(true)
	return (
		<>
			<div className={isHidden ? classes.hidden : null}>{children}</div>
			<Button className={classes.root} size='small' onClick={() => setIsHidden(!isHidden)}>
				{isHidden ? 'More' : 'Less'}
			</Button>
		</>
	)
}

export default ReadMore
