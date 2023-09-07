import {Button, makeStyles} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
	root: {
		color: '',
		background: '#F5F5F5',
		borderRadius: 56,
		boxShadow: 'none',
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: 'Poppins',
			paddingInline: 10,
			fontSize: theme.typography.h5.fontSize,
		},
	},
}))

export default function SettingButton({children, onClick, disabled, findMorebtn, color}) {
	const classes = useStyles()
	return (
		<Button variant='contained' className={`${classes.root} ${findMorebtn}`} onClick={onClick} disabled={disabled} color={color}>
			{children}
		</Button>
	)
}
