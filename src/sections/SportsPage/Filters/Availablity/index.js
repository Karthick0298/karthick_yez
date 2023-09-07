import {makeStyles} from '@material-ui/core/styles'
import React, {useState} from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.h5.fontSize,
	},
	availabilityfilter: {
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
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: '#EF5618',
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
	},
}))

export default function Availability() {
	const classes = useStyles()
	const {availabilityDays, availabilityFilter, setAvailabilityFilter} = useContextApi()

	const handleChange = event => {
		setAvailabilityFilter(event.target.value)
	}

	return (
		<div className={classes.availabilityfilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading} style={{fontSize: 17}}>
						Availability
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl component='fieldset'>
						<RadioGroup value={availabilityFilter} onChange={handleChange}>
							<FormControlLabel value={availabilityDays?.today} control={<Radio />} label='Today' />
							<FormControlLabel value={availabilityDays?.tomorrow} control={<Radio />} label='Tomorrow' />
							<FormControlLabel value={availabilityDays?.allDays} control={<Radio />} label='Available in next 7 days' />
						</RadioGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
