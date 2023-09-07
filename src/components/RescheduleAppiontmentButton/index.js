import {Button, makeStyles, Typography, NativeSelect, FormControl, InputLabel} from '@material-ui/core'
import React, {useState} from 'react'
const useStyles = makeStyles(theme => ({
	ButtonColor: {
		color: '#FFFFFF',
		background: ' #00B592 0% 0% no-repeat padding-box',
		borderRadius: 4,
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: theme.typography.h5.fontFamily,
		},
		'& .MuiTypography-h5': {
			fontSize: 15,
			textTransform: 'none',
			color: '#fff',
		},
		[theme.breakpoints.down('sm')]: {
			gap: 18,
		},
	},
}))

export default function CancelButton({children}) {
	const classes = useStyles()
	return (
		<Button variant='contained' color='primary' className={classes.ButtonColor}>
			{children}
		</Button>
	)
}
