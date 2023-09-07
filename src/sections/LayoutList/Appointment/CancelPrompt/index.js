import React from 'react'
import {makeStyles} from '@material-ui/core'
import AlertDialog from '../../../../components/AlertDialog'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiButton-text': {
			color: theme.palette.lyfngo.main,
			textTransform: 'capitalize',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			borderRadius: 24,
		},
		'& .MuiButton-root': {
			boxShadow: 'none',
			padding: 0,
		},
	},
}))

function CancelPrompt({open, handleClose, setOpenModal, onClick}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AlertDialog
				title='Alert'
				children={'Are you sure you want to Cancel your Appointment'}
				open={open}
				handleClose={handleClose}
				okBtn={(onClick, handleClose)}
				cancelBtn={setOpenModal}
				handleConfirm={onClick}
			/>
		</div>
	)
}

export default CancelPrompt
