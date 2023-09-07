import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Slider from '@material-ui/core/Slider'
import SearchButton from '../../../../components/GradientButton/index'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: 17,
	},
	margin: {
		height: theme.spacing(3),
	},
	budgetfilter: {
		marginBlockEnd: 12,

		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
			'& .MuiSlider-root': {
				color: '#32B4F9',
			},
			'& .MuiSlider-valueLabel': {
				color: '#32B4F9 !important',
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
	search: {
		display: 'flex',
		justifyContent: 'flex-end',
		paddingBlock: 12,
		paddingInlineEnd: 12,
	},
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
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

export default function BudgetFilter() {
	const classes = useStyles()
	const [getBudget, setGetBudget] = useState()
	const {setBudgetFilter} = useContextApi()

	const handleBudgetFilter = () => {
		setBudgetFilter(getBudget)
	}

	return (
		<div className={classes.budgetfilter}>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
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
						valueLabelDisplay='on'
					/>
				</AccordionDetails>
				<section className={classes.slideLabel}>
					<Typography>{`₹ 0`}</Typography>
					<Typography>{`₹ 500`}</Typography>
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
