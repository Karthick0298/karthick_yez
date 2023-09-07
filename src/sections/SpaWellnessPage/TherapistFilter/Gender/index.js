import {makeStyles} from '@material-ui/core/styles'
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
	genderfilter: {
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
			color: '#E1087E',
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
	},
}))

export default function Gender() {
	const classes = useStyles()
	const {genderFilter, setGenderFilter} = useContextApi()

	const handleChange = event => {
		setGenderFilter(event.target.value)
	}
	return (
		<div className={classes.genderfilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading} style={{fontSize: 17}}>
						Gender
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl component='fieldset'>
						<RadioGroup value={genderFilter} onChange={handleChange}>
							<FormControlLabel value='M' control={<Radio />} label='Male' />
							<FormControlLabel value='F' control={<Radio />} label='Female' />
							<FormControlLabel value='' control={<Radio />} label='No preference' />
						</RadioGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
