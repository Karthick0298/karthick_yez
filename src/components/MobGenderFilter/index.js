import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles(theme => ({
	// root: {
	// 	width: '100%',
	// },
	heading: {
		color: theme.palette.paragraph.main,
		fontSize: theme.typography.h5.fontSize,
	},
	genderfilter: {
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
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: '#7047EA',
		},
		'& .MuiSvgIcon-root': {
			width: '0.7em',
		},
	},
}))

function MobGenderFilter() {
	const classes = useStyles()
	const [value, setValue] = React.useState('male')

	const handleChange = event => {
		setValue(event.target.value)
	}
	return (
		<div className={classes.genderfilter}>
					<FormControl component='fieldset'>
						<RadioGroup value={value} onChange={handleChange}>
							<FormControlLabel value='male' control={<Radio />} label='Male' />
							<FormControlLabel value='female' control={<Radio />} label='Female' />
							<FormControlLabel value='No preference' control={<Radio />} label='No preference' />
						</RadioGroup>
					</FormControl>
		</div>
	)
}
export default MobGenderFilter
