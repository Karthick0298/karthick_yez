import React from 'react'
import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
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

function ReschedulePrompt({open, handleClose, setOpenModal, onClick}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AlertDialog
				title='Alert'
				children={'Are you sure you want to Reschedule your Appointment'}
				open={open}
				handleClose={handleClose}
				okBtn={onClick}
				cancelBtn={setOpenModal}
				handleConfirm={onClick}
			/>
		</div>
	)
}

export default ReschedulePrompt
