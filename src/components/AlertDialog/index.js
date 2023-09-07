import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiDialog-paperScrollPaper': {
			maxHeight: 'calc(100% - 164px)',
			maxWidth: 864,
		},
		'& .MuiDialogTitle-root': {
			'& .MuiTypography-h6': {
				fontSize: theme.typography.body1.fontSize,
				color: theme.palette.lyfngo.main,
			},
		},
		'& .MuiButton-text': {
			textTransform: 'capitalize',
			fontSize: theme.typography.h5.fontSize,
			color: theme.palette.lyfngo.main,
			background: '#FCEAEA',
			fontFamily: theme.typography.h5.fontFamily,
		},
	},
}))

const ScrollDialog = ({title, children, handleClose, handleConfirm, open}) => {
	const classes = useStyles()
	return (
		<div>
			{/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
			<Dialog open={open} onClose={handleClose} aria-labelledby='scroll-dialog-title' aria-describedby='scroll-dialog-description' className={classes.root}>
				<DialogTitle id='scroll-dialog-title'>{title}</DialogTitle>
				<DialogContent>
					<Typography variant='h5'>{children}</Typography>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							handleConfirm(), handleClose()
						}}>
						Ok
					</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default ScrollDialog
