import {Button, makeStyles, Typography, NativeSelect, FormControl, InputLabel} from '@material-ui/core'
import React, {useState} from 'react'
const useStyles = makeStyles(theme => ({
	ordercardmonthposition: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 0.5,
		flexDirection: 'column',
		padding: 9,
		borderRadius: 20,
		background: '#E0EAFF',
		boxShadow: 'inset 0px 3px 6px #00000029',
		borderRadius: 20,
		opacity: 1,
		[theme.breakpoints.down('xs')]: {
			maxHeight: 70,
			maxWidth: '50%',
			alignItems: 'center',
			justifyContent: 'center',
		},

		[theme.breakpoints.up('sm')]: {
			maxHeight: 70,
		},
		'& .MuiTypography-body1': {
			fontSize: 16,
			fontStyle: 'normal',
			fontFamily: 'Poppins',
			textTransform: 'uppercase',
			fontWeight: 500,
		},
	},
}))

export default function Cardmonth({children}) {
	const classes = useStyles()
	return <div className={classes.ordercardmonthposition}>{children}</div>
}
