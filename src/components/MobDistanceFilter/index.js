import {makeStyles} from '@material-ui/core/styles'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import DistanceList from '../../model/DistanceList'
import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.h5.fontSize,
	},
	distancefilter: {
		paddingBlock: 0,
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
			color: '#7047EA',
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
	},
}))

function MobDistanceFilter() {
	const classes = useStyles()
	const [checked, setChecked] = React.useState(true)

	const handleChange = event => {
		setChecked(event.target.checked)
	}
	return (
		<div className={classes.distancefilter}>
			{DistanceList.map(DistanceLists => (
					<AccordionDetails key={DistanceLists.id}>
						<Checkbox defaultChecked color='primary' inputProps={{'aria-label': 'secondary checkbox'}} />
						<Typography>{DistanceLists.name} </Typography>
					</AccordionDetails>
				))}
		</div>
	)
}
export default MobDistanceFilter
