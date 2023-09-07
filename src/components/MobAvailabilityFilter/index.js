import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.h5.fontSize,
	},
	availabilityfilter: {
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
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: '#7047EA',
		},
	},
}))

function AvailabilityFilter() {
	const classes = useStyles()
	const [value, setValue] = React.useState('today')

	const handleChange = event => {
		setValue(event.target.value)
	}
	return (
		<div className={classes.availabilityfilter}>
			{/* <Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading}>Availability</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl component='fieldset'>
						<RadioGroup value={value} onChange={handleChange}>
							<FormControlLabel value='today' control={<Radio />} label='Today' />
							<FormControlLabel value='tomorrow' control={<Radio />} label='Tomorrow' />
							<FormControlLabel value='available in next 7 days' control={<Radio />} label='Available in next 7 days' />
						</RadioGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion> */}
				<FormControl component='fieldset'>
						<RadioGroup value={value} onChange={handleChange}>
							<FormControlLabel value='today' control={<Radio />} label='Today' />
							<FormControlLabel value='tomorrow' control={<Radio />} label='Tomorrow' />
							<FormControlLabel value='available in next 7 days' control={<Radio />} label='Available in next 7 days' />
						</RadioGroup>
					</FormControl>
		</div>
	)
}
export default AvailabilityFilter
