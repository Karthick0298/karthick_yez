import {Typography, makeStyles} from '@material-ui/core'
import React from 'react'
import slotItem from '../../model/SlotsBook/data'
import Slots from '../SlotsBooking'
import Calender from '../AppointmentSlotPicker'
import Button from '../OutlinedGratientButton'
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		'& .MuiTypography-h6': {
			fontSize: 12,
			color: '#475677',
			paddingBlock: 3,
		},
		'& .MuiTypography-h5': {
			fontSize: 16,
			color: '#475677',
		},
	},
	buttonList: {
		display: 'flex',
		flexDirection: 'row',
		gap: 5,
		'& .MuiButton-outlinedPrimary': {
			color: '#7047EA',
			border: ' 1px solid #7047EA',
		},
	},
}))
export default {
	title: 'components/AppointmentSlotPickerWidget',
}
const Template = () => {
	const classes = useStyles()
	return (
		<>
			<div>
				{slotItem.map(slotTime => (
					<div key={slotItem.id} className={classes.root}>
						<Typography variant='h5'>{slotTime.clinicName}</Typography>
						<Typography variant='h6'>{slotTime.address}</Typography>
					</div>
				))}
				<div className={classes.buttonList}>
					<Button>Whitefield</Button>
					<Button>Indra nagar</Button>
				</div>
				<Calender />
				<Slots />
			</div>
		</>
	)
}

export const CareCard = Template.bind({})
