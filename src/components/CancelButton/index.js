import {Button, makeStyles, Typography, NativeSelect, FormControl, InputLabel} from '@material-ui/core'
import React, {useState} from 'react'
const useStyles = makeStyles(theme => ({
	root: {
		color: ' #00B592',
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: theme.typography.h5.fontFamily,
		},
	},
}))

export default function CancelButton({children, onClick, disabled, customButton}) {
	const classes = useStyles()
	return (
		<Button color='secondary' className={`${classes.root} ${customButton}`} onClick={onClick} disabled={disabled}>
			{children}
		</Button>
	)
}
