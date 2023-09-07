import {makeStyles} from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import LocationList from '../../model/LocationList'
import React, {useState} from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: 17,
	},
	appointmentfilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiTypography-body1': {
			color: theme.palette.paragraph.main,
			fontSize: theme.typography.h5.fontSize,
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: '#32B4F9',
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},
	},
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: 17,
	},
}))

export default function AppointmentMode() {
	const classes = useStyles()
	const {appointmentMode, setAppointmentMode} = useContextApi()
	const {is_direct, is_online, is_home} = appointmentMode
	const handleChange = event => {
		setAppointmentMode(prevState => ({...prevState, [event.target.name]: event.target.checked}))
	}
	return (
		<div className={classes.appointmentfilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading}>Appointment Mode</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox color='primary' checked={is_online} onChange={handleChange} name='is_online' />}
							label='Video Consultation'
						/>
					</FormGroup>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox color='primary' checked={is_direct} onChange={handleChange} name='is_direct' />}
							label='In-person Consultation'
						/>
					</FormGroup>
					<FormGroup>
						<FormControlLabel control={<Checkbox color='primary' checked={is_home} onChange={handleChange} name='is_home' />} label='Home Visit' />
					</FormGroup>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
