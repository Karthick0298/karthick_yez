import * as React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const List = [{option: 'Search Issues'}, {option: 'General'}, {option: 'Septoplasty'}, {option: 'Trachestomy'}]

const useStyles = makeStyles(theme => ({
	infofilter: {
		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
			padding: 0,
			maxWidth: '63%',
			paddingInline: 4,
			paddingBlock: 4,
			background: 'transparent linear-gradient(105deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
			opacity: 0.8,
			backdropFilter: 'blur(6px)',
		},
		'& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
			paddingRight: 34,
		},
		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
			padding: '8px 4px',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'& .MuiFormControl-fullWidth': {
			minWidth: 246,
		},
	},
}))
export default function ProfileDetailsTabFilter(props) {
	const classes = useStyles()
	return (
		<div className={classes.infofilter}>
			<Autocomplete
				options={props?.options}
				ListboxProps={{
					style: {
						maxHeight: '9rem',
						fontSize: 14,
						background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
						fontFamily: ['"Poppins"', 'sans-serif'].join(','),
					},
				}}
				disableClearable='true'
				name={props?.name}
				id={props?.id}
				onChange={props?.onChange}
				// value={props?.value}
				style={{width: 182}}
				// defaultValue={props?.options?.find(v => v.option[0])}
				getOptionLabel={props?.getOptionLabel}
				closeIcon=''
				fullWidth='false'
				renderInput={params => <TextField {...params} placeholder={props?.placeholder} variant='outlined' />}
			/>
		</div>
	)
}
