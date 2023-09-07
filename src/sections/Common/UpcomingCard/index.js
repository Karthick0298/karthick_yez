import {makeStyles} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
	rootCard: {
		padding: 12,
		width: '100%',
		background: '#EEEAFB 0% 0% no-repeat padding-box',
		boxShadow: 'inset 0px 0px 10px #00000024, 0px 0px 8px #FFFFFF29',
		borderRadius: 7,
		opacity: 1,
		[theme.breakpoints.down('xs')]: {
			padding: 4,
		},
		[theme.breakpoints.down('md')]: {
			padding: 8,
		},
	},
}))

export default function Upcoming({children}) {
	const classes = useStyles()
	return <div className={classes.rootCard}>{children}</div>
}
