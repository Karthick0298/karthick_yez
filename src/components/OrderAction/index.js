import {Button, makeStyles, Typography, NativeSelect, FormControl, InputLabel} from '@material-ui/core'
import React, {useState} from 'react'
const useStyles = makeStyles(theme => ({
	buttonalignment: {
		flex: 3,
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
}))

export default function Orderaction({children, color, backgroundShowdow}) {
	const classes = useStyles()
	return (
		<Typography className={classes.carddetailsPosition} style={{color: color, background: backgroundShowdow}}>
			{children}
		</Typography>
	)
}
