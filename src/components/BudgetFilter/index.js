import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Slider from '@material-ui/core/Slider'
import SearchButton from '../../components/GradientButton/index'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

const marks = [
	{
		value: 0,
		label: '₹0',
	},
	{
		value: 100,
		label: '₹ 100',
	},
]

const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: 17,
	},
	margin: {
		height: theme.spacing(3),
	},
	budgetfilter: {
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
			'& .MuiSlider-root': {
				color: '#7047ea',
				// color: props => props.primaryColor,
			},
			'& .MuiSlider-valueLabel': {
				color: '#7047ea !important',
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
			paddingBlockStart: 18,
		},
	},
	search: {
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
}))

function BudgetFilter(props) {
	const classes = useStyles(props)
	const {searchFilters, setSearchFilters, budgetValue, setOffset} = props
	const {budgetFilter} = searchFilters
	const {defaultValue, min, max, step} = budgetValue
	const [getBudget, setGetBudget] = useState()
	// const {setBudgetFilter} = useContextApi()

	const handleBudgetFilter = () => {
		setOffset(1)
		setSearchFilters({...searchFilters, budgetFilter: getBudget})
	}

	return (
		<div className={classes.budgetfilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography className={classes.heading}>Budget</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Slider
						defaultValue={defaultValue}
						getAriaValueText={value => setGetBudget(value)}
						aria-labelledby='range-slider'
						step={step}
						valueLabelDisplay='auto'
						min={min}
						max={max}
						valueLabelDisplay='on'
					/>
				</AccordionDetails>
				<section className={classes.slideLabel}>
					<Typography>{`₹ ${min}`}</Typography>
					<Typography>{`₹ ${max}`}</Typography>
				</section>
				<div className={classes.search}>
					<SearchButton onClick={handleBudgetFilter} findMorebtn={classes.findMorebtn} className={classes.searchbutton}>
						Search
					</SearchButton>
				</div>
			</Accordion>
		</div>
	)
}
export default BudgetFilter
