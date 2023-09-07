import {makeStyles, useState} from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import SearchButton from '../GradientButton/index'

const marks = [
	{
		value: 0,
		label: '0',
	},

	{
		value: 100,
		label: '100',
	},
]

function valuetext(value) {
	return `${value}`
}
const useStyles = makeStyles(theme => ({
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.h5.fontSize,
	},
	margin: {
		height: theme.spacing(3),
	},
	BudgetfilterMob: {
		'& .MuiAccordion-root': {
			background: 'transparent linear-gradient(118deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 1,
			backdropFilter: 'blur(6px)',
			'& .MuiSlider-root': {
				color: '#7047ea',
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
			padding: '24px 26px 16px',
		},
	},
	search: {
		display: 'flex',
		justifyContent: 'flex-end',
		paddingBlock: 12,
		paddingInlineEnd: 12,
	},
}))

function MobAvailabilityFilter() {
	const classes = useStyles()

	return (
		<div className={classes.BudgetfilterMob}>
			<Slider defaultValue={20} getAriaValueText={valuetext} aria-labelledby='range-slider' step={10} valueLabelDisplay='auto' marks={marks} />
			<div className={classes.search}>
					<SearchButton className={classes.searchbutton}>Search</SearchButton>
				</div>
		</div>
	)
}
export default MobAvailabilityFilter
