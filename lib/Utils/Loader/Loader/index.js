import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
	progressColor: {
		color: theme.palette.lyfngo.main,
	},
}))

export default function Loader({loading}) {
	const classes = useStyles()

	return (
		<div>
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress className={classes.progressColor} />
			</Backdrop>
		</div>
	)
}
