import React, {useState} from 'react'
import {Typography, IconButton, Button} from '@material-ui/core'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded'
import useStyles from './style'
import DropDown from './dropDown'

const TabSearch = () => {
	const classes = useStyles()
	const [toggleState, setToggleState] = useState(false)
	const toggleDropdown = () => {
		setToggleState(!toggleState)
	}
	return (
		<>
			<div className={classes.root}>
				<section className={classes.popularSearch}>
					<div className={classes.labelWrapper}>
						<Typography variant='h5' className={classes.label}>
							Popular Searches
						</Typography>
					</div>
					<Typography variant='h5' className={classes.btn}>
						Dermatologist
					</Typography>
					<Typography variant='h5' className={classes.btn}>
						Pediatrician
					</Typography>
					<Typography variant='h5' className={classes.btn}>
						Gynecologist
					</Typography>
				</section>
				<section>
					<IconButton onClick={toggleDropdown} className={classes.downArrow}>
						{toggleState ? <ExpandLessRoundedIcon fontSize='small' /> : <KeyboardArrowDownRoundedIcon fontSize='small' />}
					</IconButton>
				</section>
			</div>
			<DropDown toggleState={toggleState} />
		</>
	)
}

export default TabSearch
