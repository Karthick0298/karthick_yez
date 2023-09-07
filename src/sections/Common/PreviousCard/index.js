import {makeStyles} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
	rootCard: {
		width: '100%',
		padding: 12,
		background: 'transparent linear-gradient(95deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		boxShadow: '0px 3px 6px #00000026',
		borderRadius: 7,
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		opacity: 1,
		[theme.breakpoints.down('xs')]: {
			padding: 4,
		},
		[theme.breakpoints.down('md')]: {
			padding: 8,
		},
	},
}))

export default function Previous({children}) {
	const classes = useStyles()
	return <div className={classes.rootCard}>{children}</div>
}
