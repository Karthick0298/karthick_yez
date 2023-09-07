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
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import _ from 'lodash'
import appointmentModeList from '../../model/AppointementModeFilter'

const useStyles = makeStyles(theme => ({
	// root: {
	// 	width: '100%',
	// },
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: 17,
	},
	appointmentfilter: {
		paddingBlock: 12,
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
			// padding: '0px 8px 0px',
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: '#7047EA',
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'auto',
		},
	},
}))

function AppointmentModeFilter(props) {
	const classes = useStyles()
	const {searchFilters, setSearchFilters, appointmentChecked, setAppointmentChecked, setOffset} = props
	const {appointmentMode} = searchFilters

	const handleChange = (event, position) => {
		const updatedCheckedState = appointmentChecked?.map((item, index) => (index === position ? !item : item))
		setAppointmentChecked(updatedCheckedState)
		const values = updatedCheckedState?.map((data, index) => {
			if (data === true) {
				return appointmentModeList[index]?.value
			} else {
				return ''
			}
		})
		setOffset(1)
		setSearchFilters({...searchFilters, appointmentMode: _.toString(_.compact(values))})
	}

	return (
		<div className={classes.appointmentfilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading}>Appointment Mode</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{appointmentModeList?.map((data, idx) => (
						<>
							<FormGroup key={data?.id}>
								<FormControlLabel
									control={
										<Checkbox
											color='primary'
											name={data?.name}
											id={data?.name}
											checked={appointmentChecked?.[idx]}
											value={appointmentMode}
											onChange={event => handleChange(event, idx)}
										/>
									}
									label={data?.label}
								/>
							</FormGroup>
						</>
					))}
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
export default AppointmentModeFilter
