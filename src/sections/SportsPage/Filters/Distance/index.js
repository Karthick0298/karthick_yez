import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DistanceList from '../../../../model/DistanceList'
import Checkbox from '@material-ui/core/Checkbox'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.h5.fontSize,
	},
	distancefilter: {
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
			padding: '0px 8px 0px',
			alignItems: 'center',
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: '#EF5618',
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
	},
}))

export default function Distance() {
	const classes = useStyles()
	const {distanceFilter, setDistanceFilter} = useContextApi()

	const handleChange = event => {
		setChecked(event.target.checked)
	}
	return (
		<div className={classes.distancefilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading} style={{fontSize: 17}}>
						Distance
					</Typography>
				</AccordionSummary>
				{DistanceList.map(DistanceLists => (
					<AccordionDetails key={DistanceLists.id}>
						<Checkbox defaultChecked color='primary' inputProps={{'aria-label': 'secondary checkbox'}} />
						<Typography>{DistanceLists.name} </Typography>
					</AccordionDetails>
				))}
			</Accordion>
		</div>
	)
}
