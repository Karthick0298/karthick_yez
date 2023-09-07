import {makeStyles} from '@material-ui/core/styles'
import {useState, useEffect, useCallback} from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import {ExpandMore, MyLocation} from '@material-ui/icons'
import LocationList from '../../model/LocationList'
import Checkbox from '@material-ui/core/Checkbox'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import LocationFiltersApi from '../../../Service/ProfileList/LocationFilter'

const useStyles = makeStyles(theme => ({
	// root: {
	// 	width: '100%',
	// },
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.h5.fontSize,
	},
	locationfilter: {
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
			display: 'block',
			padding: '0px 8px 0px',
			alignItems: 'center',
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
	currentLocation: {
		paddingBlockEnd: 10,
		paddingInlineStart: 10,
		color: theme.palette.paragraph.main,
		fontSize: 15,
		cursor: 'pointer',
		display: 'flex',
		gap: 6,
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: theme.palette.care.main,
		},
	},
	checkboxText: {
		display: 'flex',
		alignItems: 'center',
	},
}))

function LocationFilter(props) {
	const classes = useStyles()
	const {currentLocation, searchGroup} = useContextApi()
	const {searchFilters, setSearchFilters, setOffset, locationFilters} = props
	const {locationFilter} = searchFilters
	const [locationOptions, setLocationOptions] = useState([])

	useEffect(() => {
		setLocationOptions(locationFilters)
	}, [locationFilters])

	const handleChange = (event, position) => {
		const updatedCheckedState = locationOptions?.map((data, index) => (index === position ? {...data, checked: !data?.checked} : {...data}))
		setLocationOptions(updatedCheckedState)
		let updatedLocations = updatedCheckedState?.map(data => (data?.checked === true ? data?.latlon : ''))
		let popLocation = _.compact(updatedLocations)?.pop()
		let getLocation = popLocation !== null && popLocation !== undefined ? popLocation : ''
		setSearchFilters({...searchFilters, locationFilter: getLocation})
	}

	return (
		<div className={classes.locationfilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading}>Location</Typography>
				</AccordionSummary>

				<AccordionDetails>
					<Typography className={classes.currentLocation}>
						<MyLocation /> Use Current Location
					</Typography>
					{locationOptions?.map((data, index) => (
						<div className={classes.checkboxText}>
							<Checkbox
								key={data?.latlon}
								name={data?.locality}
								id={data?.locality}
								value={data?.latlon}
								checked={data?.checked}
								onChange={event => handleChange(event, index)}
								color='primary'
								inputProps={{'aria-label': 'secondary checkbox'}}
							/>
							<Typography>{data?.locality}</Typography>
						</div>
					))}
				</AccordionDetails>

				{/* {locationOptions?.map((data, index) => (
					<AccordionDetails key={data?.latlon}>
						<Typography className={classes.currentLocation}>
							<MyLocation /> Use Current Location
						</Typography>
						<Checkbox
							name={data?.locality}
							id={data?.locality}
							value={data?.latlon}
							checked={data?.checked}
							onChange={event => handleChange(event, index)}
							color='primary'
							inputProps={{'aria-label': 'secondary checkbox'}}
						/>
						<Typography>{data?.locality}</Typography>
					</AccordionDetails>
				))} */}
			</Accordion>
		</div>
	)
}
export default LocationFilter
