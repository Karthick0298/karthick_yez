import {Button, makeStyles, Typography, NativeSelect, FormControl, InputLabel} from '@material-ui/core'
import React, {useState} from 'react'
const useStyles = makeStyles(theme => ({
	rootCard: {
		width: 129,
		paddingBlock: 18,
		paddingInline: 1,
		height: 'auto',
		background: 'transparent linear-gradient(133deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		boxShadow: '15px 15px 50px #8721A329',
		border: '1px solid #FFFFFF80',
		borderRadius: 15,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		'-webkit-backdrop-filter': 'blur(6px)',
	},
}))

export default function GalssyCard({children}) {
	const classes = useStyles()
	return <div className={classes.rootCard}>{children}</div>
}
