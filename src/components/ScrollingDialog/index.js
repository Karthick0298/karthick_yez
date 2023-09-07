import React from 'react'
import {makeStyles} from '@material-ui/core'
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
		},
	},
}))

const ScrollDialog = ({title, children, handleClickOpen, descriptionElementRef, handleClose, open, scroll}) => {
	const classes = useStyles()
	return (
		<div>
			{/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
			<Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby='scroll-dialog-title' aria-describedby='scroll-dialog-description' className={classes.root}>
				<DialogTitle id='scroll-dialog-title'>{title}</DialogTitle>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
						{/* {[...new Array(50)]
							.map(
								() => `Cras mattis consectetur purus sit amet fermentum.
 Cras justo odio, dapibus ac facilisis in, egestas eget quam.
 Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
 Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
							)
							.join('\n')} */}
						{children}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Accept</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default ScrollDialog
