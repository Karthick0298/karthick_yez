import {Button, makeStyles} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
	ButtonColor: {
		color: '#FFFFFF',
		background: theme.palette.lyfngo.main,
		borderRadius: 4,
		'&:hover': {
			backgroundColor: theme.palette.lyfngo.main,
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: 'Poppins',
			paddingInline: 18,
			alignItems: 'center',
			gap: 6,
		},
	},
}))

export default function SettingButton({children, onClick, type, disabled}) {
	const classes = useStyles()
	return (
		<Button variant='contained' color='primary' className={classes.ButtonColor} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</Button>
	)
}
