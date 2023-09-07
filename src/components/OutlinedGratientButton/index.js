import {Button, makeStyles} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
	ButtonColor: {
		padding: '7px 7px',
		'& .MuiButton-label': {
			textTransform: 'capitalize',
		},
		'& .MuiButton-root': {},
	},
}))

export default function OutlinedGratientButton({children}) {
	const classes = useStyles()
	return (
		<Button variant='outlined' color='primary' className={classes.ButtonColor}>
			{children}
		</Button>
	)
}
