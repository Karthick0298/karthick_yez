import {useState} from 'react'
import {makeStyles, Accordion, AccordionSummary, Typography, Slider, AccordionDetails, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'
import {ExpandMore, MyLocation} from '@material-ui/icons'
import GradientButton from '../GradientButton'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	heading: {
		fontFamily: 'poppins',
		color: theme.palette.paragraph.main,
		fontSize: 16,
	},

	// ### Budget filter Style Starts #########
	budgetfilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
			'& .MuiSlider-root': {
				paddingBlockStart: 20,
				color: theme.palette.care.main,
			},
			'& .MuiSlider-valueLabel': {
				color: theme.palette.care.main,
			},
		},
		'& .MuiSlider-markLabel': {
			fontSize: theme.typography.body1.fontSize,
			fontWeight: theme.typography.h2.fontWeight,
		},
		'& .MuiAccordionDetails-root': {
			padding: 0,
			paddingInline: 12,
			paddingBlock: 8,
			paddingBlockStart: 14,
		},
	},
	searchBtnContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		paddingBlock: 12,
		paddingInlineEnd: 12,
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
	slideLabel: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingInline: 12,
		paddingBlockEnd: 8,
		fontFamily: theme.typography.h5.fontFamily,
		'& .MuiTypography-body1': {
			color: '#475677',
			fontWeight: 600,
		},
	},
	// ### Budget filter Style Ends #########

	// ### Appointment filter Style Starts #########
	appointmentfilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: theme.palette.care.main,
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},

		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				color: theme.palette.paragraph.main,
				fontSize: 15,
			},
		},
	},
	// ### Appointment filter Style Ends #########

	// ### operational Hours Filter  Style Starts #########
	operationalHoursFilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: theme.palette.care.main,
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},

		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				color: theme.palette.paragraph.main,
				fontSize: 15,
			},
		},
	},
	// ### operational Hours Filter  Style Ends #########

	// ### accredited Filter  Style Starts #########
	accreditedFilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: theme.palette.care.main,
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},

		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				color: theme.palette.paragraph.main,
				fontSize: 15,
			},
		},
	},
	// ### accredited Filter  Style Ends #########

	// ### distance Filter  Style Starts #########
	distanceFilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: theme.palette.care.main,
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},

		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				color: theme.palette.paragraph.main,
				fontSize: 15,
			},
		},
	},
	// ### distance Filter  Style Ends #########

	// ### speciality Filter  Style Starts #########
	specialityFilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: theme.palette.care.main,
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},

		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				color: theme.palette.paragraph.main,
				fontSize: 15,
			},
		},
	},
	// ### speciality Filter Style Ends #########

	// ### ammenities Filter  Style Starts #########
	ammenitiesFilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: theme.palette.care.main,
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},

		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				color: theme.palette.paragraph.main,
				fontSize: 15,
			},
		},
	},
	// ### ammenities Filter Style Ends #########

	// ### Location Filter  Style Starts #########
	locationFilter: {
		marginBlockEnd: 12,
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAccordionDetails-root': {
			alignItems: 'flex-start',
			flexDirection: 'column',
			paddingInlineStart: 16,
		},
		'& .MuiCheckbox-colorPrimary.Mui-checked': {
			color: theme.palette.care.main,
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
		'& .MuiCollapse-wrapperInner': {
			maxHeight: 170,
			overflowY: 'scroll',
		},

		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				color: theme.palette.paragraph.main,
				fontSize: 15,
			},
		},
	},
	currentLocation: {
		paddingBlockEnd: 10,
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
	// ### Location Filter Style Ends #########
}))

const HospitalFilters = () => {
	const classes = useStyles()
	const [getBudget, setGetBudget] = useState()
	const {setBudgetFilter} = useContextApi()
	const [checked, setChecked] = useState(true)

	const handleBudgetFilter = () => {
		setBudgetFilter(getBudget)
	}

	const {appointmentMode, setAppointmentMode} = useContextApi()
	// const {is_direct, is_online, is_home} = appointmentMode
	const handleChange = event => {
		setAppointmentMode(prevState => ({...prevState, [event.target.name]: event.target.checked}))
	}

	const specialityFilterSampleData = [
		{filterType: 'All Specialities', label: 'All Specialities'},
		{filterType: 'Cardiology', label: 'Cardiology'},
		{filterType: 'Psychology', label: 'Psychology'},
		{filterType: 'Neurology', label: 'Neurology'},
		{filterType: 'Pediatricians', label: 'Pediatricians'},
		{filterType: 'Dermatologists', label: 'Dermatologists'},
		{filterType: 'Gynecologist', label: 'Gynecologist'},
		{filterType: 'ENT Specialist', label: 'ENT Specialist'},
		{filterType: 'Dentist', label: 'Dentist'},
	]
	const locationFilterSampleData = [
		{filterType: 'Anna Nager', label: 'Anna Nager'},
		{filterType: 'Besant Nagar', label: 'Besant Nagar'},
		{filterType: 'Chengelpet', label: 'Chengelpet'},
		{filterType: 'Chrompet', label: 'Chrompet'},
		{filterType: 'Purasaivakam', label: 'Purasaivakam'},
		{filterType: 'Alwarpet', label: 'Alwarpet'},
		{filterType: 'Perungudi', label: 'Perungudi'},
		{filterType: 'Koyambedu', label: 'Koyambedu'},
		{filterType: 'T Nagar', label: 'T Nagar'},
	]
	const ammenitiesFilterSampleData = [
		{filterType: '24x7 Pharmacy', label: '24x7 Pharmacy'},
		{filterType: 'Cafteria', label: 'Cafteria'},
		{filterType: 'Parking', label: 'Parking'},
		{filterType: 'Blood Bank', label: 'Blood Bank'},
		{filterType: 'Bank/ Atm', label: 'Bank/ Atm'},
		{filterType: 'Lab Center', label: 'Lab Center'},
	]

	return (
		<div className={classes.root}>
			<div className={classes.budgetfilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Budget</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Slider
							defaultValue={150}
							getAriaValueText={value => setGetBudget(value)}
							aria-labelledby='range-slider'
							step={50}
							valueLabelDisplay='auto'
							min={0}
							max={500}
						/>
					</AccordionDetails>
					<section className={classes.slideLabel}>
						<Typography>₹ 0</Typography>
						<Typography>₹ 500</Typography>
					</section>
					<div className={classes.searchBtnContainer}>
						<GradientButton onClick={handleBudgetFilter} findMorebtn={classes.findMorebtn}>
							Search
						</GradientButton>
					</div>
				</Accordion>
			</div>

			<div className={classes.appointmentfilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Appointment Mode</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_online' />}
								label='Video Consultation'
							/>
							<FormControlLabel
								control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_direct' />}
								label='In-person Consultation'
							/>
							<FormControlLabel control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_home' />} label='Home Visit' />
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</div>

			<div className={classes.operationalHoursFilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Operational hours</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<FormGroup>
							<FormControlLabel control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_direct' />} label='24x7' />
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</div>

			<div className={classes.accreditedFilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Accredited</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_direct' />}
								label='Only Accredited hospitals'
							/>
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</div>

			<div className={classes.locationFilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Location</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography className={classes.currentLocation}>
							<MyLocation /> Use Current Location
						</Typography>

						<FormGroup>
							{locationFilterSampleData?.map(filter => (
								<FormControlLabel
									key={filter?.label}
									control={<Checkbox color='primary' checked={checked} onChange={handleChange} name={filter?.filterType} />}
									label={filter?.label}
								/>
							))}
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</div>

			<div className={classes.ammenitiesFilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Ammenities</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<FormGroup>
							{ammenitiesFilterSampleData?.map(filter => (
								<FormControlLabel
									key={filter?.label}
									control={<Checkbox color='primary' checked={checked} onChange={handleChange} name={filter?.filterType} />}
									label={filter?.label}
								/>
							))}
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</div>

			<div className={classes.specialityFilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Speciality</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<FormGroup>
							{specialityFilterSampleData?.map(filter => (
								<FormControlLabel
									key={filter?.label}
									control={<Checkbox color='primary' checked={checked} onChange={handleChange} name={filter?.filterType} />}
									label={filter?.label}
								/>
							))}
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</div>

			<div className={classes.distanceFilter}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
						<Typography className={classes.heading}>Distance</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_online' />}
								label='Around 5km'
							/>
							<FormControlLabel control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_direct' />} label='5 to 10km' />
							<FormControlLabel
								control={<Checkbox color='primary' checked={checked} onChange={handleChange} name='is_home' />}
								label='More than 10km'
							/>
						</FormGroup>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	)
}

export default HospitalFilters
