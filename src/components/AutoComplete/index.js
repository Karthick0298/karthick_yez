import React from 'react'
import {TextField, makeStyles, Paper, InputAdornment, OutlinedInput} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'

export const movies = [
	{title: 'The Shawshank Redemption', year: 1994},
	{title: 'The Godfather', year: 1972},
	{title: 'The Godfather: Part II', year: 1974},
	{title: 'The Dark Knight', year: 2008},
	{title: '12 Angry Men', year: 1957},
	{title: "Schindler's List", year: 1993},
	{title: 'Pulp Fiction', year: 1994},
	{title: 'The Lord of the Rings: The Return of the King', year: 2003},
	{title: 'The Good, the Bad and the Ugly', year: 1966},
	{title: 'Fight Club', year: 1999},
	{title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001},
	{title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980},
	{title: 'Forrest Gump', year: 1994},
	{title: 'Inception', year: 2010},
	{title: 'The Lord of the Rings: The Two Towers', year: 2002},
	{title: "One Flew Over the Cuckoo's Nest", year: 1975},
	{title: 'Goodfellas', year: 1990},
	{title: 'The Matrix', year: 1999},
	{title: 'Seven Samurai', year: 1954},
	{title: 'Star Wars: Episode IV - A New Hope', year: 1977},
	{title: 'City of God', year: 2002},
	{title: 'Se7en', year: 1995},
	{title: 'The Silence of the Lambs', year: 1991},
	{title: "It's a Wonderful Life", year: 1946},
	{title: 'Life Is Beautiful', year: 1997},
	{title: 'The Usual Suspects', year: 1995},
	{title: 'Léon: The Professional', year: 1994},
	{title: 'Spirited Away', year: 2001},
	{title: 'Saving Private Ryan', year: 1998},
	{title: 'Once Upon a Time in the West', year: 1968},
	{title: 'American History X', year: 1998},
	{title: 'Interstellar', year: 2014},
	{title: 'Casablanca', year: 1942},
	{title: 'City Lights', year: 1931},
	{title: 'Psycho', year: 1960},
	{title: 'The Green Mile', year: 1999},
	{title: 'The Intouchables', year: 2011},
	{title: 'Modern Times', year: 1936},
	{title: 'Raiders of the Lost Ark', year: 1981},
	{title: 'Rear Window', year: 1954},
	{title: 'The Pianist', year: 2002},
	{title: 'The Departed', year: 2006},
	{title: 'Terminator 2: Judgment Day', year: 1991},
	{title: 'Back to the Future', year: 1985},
	{title: 'Whiplash', year: 2014},
	{title: 'Gladiator', year: 2000},
	{title: 'Memento', year: 2000},
	{title: 'The Prestige', year: 2006},
	{title: 'The Lion King', year: 1994},
	{title: 'Apocalypse Now', year: 1979},
	{title: 'Alien', year: 1979},
	{title: 'Sunset Boulevard', year: 1950},
	{title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964},
	{title: 'The Great Dictator', year: 1940},
	{title: 'Cinema Paradiso', year: 1988},
	{title: 'The Lives of Others', year: 2006},
	{title: 'Grave of the Fireflies', year: 1988},
	{title: 'Paths of Glory', year: 1957},
	{title: 'Django Unchained', year: 2012},
	{title: 'The Shining', year: 1980},
	{title: 'WALL·E', year: 2008},
]

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
			borderRadius: 10,
			background: `#f5f5f5`,
			opacity: 0.8,
			backdropFilter: 'blur(6px)',
		},
	},
	autoComplete: {
		// maxWidth: 210,
		borderRadius: 30,
	},
}))

const AutoComplete = props => {
	const {AutoCompleteStyle, paperListStyle, AutoCompleteRootStyle} = props
	const classes = useStyles()
	return (
		<>
			<div className={`${classes.root} ${AutoCompleteRootStyle}`}>
				<Autocomplete
					disableClearable={props?.disableClearable}
					loading={true}
					loadingText='No Options...'
					autoHighlight={true}
					openOnFocus={props?.openOnFocus}
					size={props?.size}
					// closeIcon=''
					id={props?.id}
					name={props?.name}
					className={`${AutoCompleteStyle} ${classes.autoComplete}`}
					open={props?.open}
					groupBy={props?.groupBy}
					defaultValue={props?.defaultValue}
					inputvalue={props?.inputvalue}
					value={props?.value}
					onChange={props?.onChange}
					onInputChange={props?.onInputChange}
					options={props?.options}
					getOptionLabel={props?.getOptionLabel}
					freeSolo={props?.freeSolo}
					PopperComponent={props?.PopperComponent}
					PaperComponent={({children}) => <Paper className={paperListStyle}>{children}</Paper>}
					renderOption={props?.renderOption}
					renderInput={params => (
						<TextField
							{...params}
							name={props?.name}
							InputProps={{
								...params.InputProps,
								startAdornment: (
									<InputAdornment position='start'>
										<>{props?.startAdornment}</>
									</InputAdornment>
								),
							}}
							onKeyDown={props?.onKeyDown}
							placeholder={props?.placeholder}
							variant='outlined'
						/>
					)}
				/>
			</div>
		</>
	)
}

export default AutoComplete
