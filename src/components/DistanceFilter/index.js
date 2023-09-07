import {makeStyles} from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DistanceList from '../../model/DistanceList'
import React, {useState, useEffect} from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import _ from 'lodash'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	// root: {
	// 	width: '100%',
	// },
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

function DistanceFilter(props) {
	const classes = useStyles()
	const {searchFilters, setSearchFilters, setOffset} = props
	const {distanceFilter} = searchFilters

	const [checkedState, setCheckedState] = useState(new Array(DistanceList?.length).fill(false))
	const handleChange = (event, position) => {
		const updatedCheckedState = checkedState?.map((item, index) => (index === position ? !item : item))
		setCheckedState(updatedCheckedState)
		const values = updatedCheckedState?.map((data, index) => {
			if (data === true) {
				return DistanceList[index]?.value
			} else {
				return ''
			}
		})
		setOffset(1)
		let popDistance = _.compact(values)?.pop()
		let getDistance = popDistance !== undefined ? popDistance : null
		setSearchFilters({...searchFilters, distanceFilter: getDistance})
	}

	return (
		<div className={classes.distancefilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading}>Distance</Typography>
				</AccordionSummary>
				{DistanceList?.map((data, index) => (
					<AccordionDetails key={data?.id}>
						<Checkbox
							name={data?.name}
							id={data?.name}
							value={data?.value}
							checked={checkedState[index]}
							onChange={event => handleChange(event, index)}
							color='primary'
							inputProps={{'aria-label': 'secondary checkbox'}}
						/>
						<Typography>{data?.label} </Typography>
					</AccordionDetails>
				))}
			</Accordion>
		</div>
	)
}
export default DistanceFilter
