// import React, {useState, useEffect} from 'react'
// import CloseIcon from '@material-ui/icons/Close'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
// import {makeStyles, Box, Button, Popper, InputAdornment, TextField} from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
// import useContextApi from '../../../lib/Utils/hooks/useContextApi'
// import useSearchContext from '../../../lib/Utils/hooks/useSearchContext'
// import Autocomplete from '../AutoComplete'
// import AutoComplete from '@material-ui/lab/Autocomplete'
// import Image from 'next/image'

// const useStyles = makeStyles(theme => ({
// 	root: {},
// 	AutoCompleteRoot: {
// 		width: '100%',
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	specilaityWrapper: {
// 		width: '100%',
// 		marginBlockStart: 14,
// 		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
// 			borderRadius: 22,
// 			background: 'none',
// 			border: '1px solid #bfbfbf',
// 		},
// 	},
// 	closeIcon: {
// 		width: '5%',
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		cursor: 'pointer',
// 	},
// 	specialityAutocomplete: {
// 		width: '30%',
// 		[theme.breakpoints.down('514')]: {
// 			width: '40%',
// 		},
// 		[theme.breakpoints.down('410')]: {
// 			width: '50%',
// 		},
// 	},
// 	paperListStyle: {
// 		color: '#475677',
// 		minWidth: 200,
// 		width: 300,
// 		maxWidth: 450,
// 		background: `#f5f5f5`,
// 		fontFamily: theme.typography.h5.fontFamily,
// 		fontSize: 14,
// 		borderRadius: 20,
// 		marginBlockStart: 16,
// 		[theme.breakpoints.down('514')]: {
// 			minWidth: 100,
// 			width: 'auto',
// 		},
// 	},
// 	searchBox: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		width: '100%',
// 	},
// 	searchWrapper: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		paddingInline: 40,
// 		marginBlockStart: 12,
// 		[theme.breakpoints.down('410')]: {
// 			paddingInline: 16,
// 		},
// 	},
// 	paperSearchStyle: {
// 		color: '#475677',
// 		fontFamily: theme.typography.h5.fontFamily,
// 		fontSize: 14,
// 		marginBlockStart: 8,
// 	},
// 	searchAutoComplete: {
// 		width: '100%',
// 	},
// 	popperStyle: {
// 		position: 'relative',
// 		zIndex: 9999,
// 		'& .MuiAutocomplete-listbox': {
// 			maxHeight: '50vh',
// 			background: `#f5f5f5`,
// 			overflowY: 'scroll',
// 		},
// 	},
// 	searchOptions: {
// 		width: '100%',
// 		paddingBlock: 4,
// 		// display: 'flex',
// 		// alignItems: 'center',
// 		color: '#475677',
// 	},
// 	removeBtn: {
// 		opacity: '0.5',
// 		textTransform: 'lowercase',
// 		'&:hover': {
// 			textDecoration: 'underline',
// 		},
// 	},
// 	specialityType: {
// 		position: 'absolute',
// 		right: '2%',
// 		opacity: '0.5',
// 	},
// 	searchField: {
// 		width: '95%',
// 		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
// 			borderRadius: 30,
// 			border: '1px solid #bfbfbf',
// 			boxShadow: '3px 3px 16px 1px rgba(135,127,127,0.60)',
// 			'-webkit-box-Shadow': '3px 3px 16px 1px rgba(135,127,127,0.60)',
// 			'-moz-box-shadow': '3px 3px 16px 1px rgba(135,127,127,0.60)',
// 		},
// 	},
// 	optionCategory: {
// 		backgroundColor: '#d9d9d9',
// 	},
// }))

// const MobileSearch1 = () => {
// 	const classes = useStyles()
// 	const {
// 		searchKey,
// 		setEnableMobileSearch,
// 		// functionality Data
// 		specialityDropdown,
// 		setSpecialityDropdown,
// 		specialityOptions,
// 		searchSuggestions,
// 		handleSearchKey,
// 		deleteRecentSearch,
// 		handleChangeSearch,
// 	} = useContextApi()
// 	const {handleSearch} = useSearchContext()

// 	const closeSearchModal = () => {
// 		setEnableMobileSearch(false)
// 	}

// 	// Designing Autocomplete Popper
// 	const CustomPopper = function(props) {
// 		const classes = useStyles()
// 		return (
// 			<Popper
// 				{...props}
// 				className={classes.popperStyle}
// 				placement='bottom'
// 				// disablePortal={false}
// 				// modifiers={{
// 				// 	flip: {
// 				// 		enabled: true,
// 				// 	},
// 				// 	preventOverflow: {
// 				// 		enabled: true,
// 				// 		boundariesElement: 'scrollParent',
// 				// 	},
// 				// 	arrow: {
// 				// 		enabled: false,
// 				// 		element: arrowRef,
// 				// 	},
// 				// }}
// 			/>
// 		)
// 	}

// 	return (
// 		<>
// 			<section className={classes.root}>
// 				<section className={classes.specilaityWrapper}>
// 					<Autocomplete
// 						disableClearable={true}
// 						size={'medium'}
// 						id={'mobileSpeciality'}
// 						name={'mobileSpeciality'}
// 						options={specialityOptions}
// 						value={specialityDropdown}
// 						getOptionLabel={option => {
// 							return option?.mastLookupValue || ''
// 						}}
// 						onChange={(e, value) => {
// 							setSpecialityDropdown(value)
// 						}}
// 						AutoCompleteRootStyle={classes.AutoCompleteRoot}
// 						AutoCompleteStyle={classes.specialityAutocomplete}
// 						paperListStyle={classes.paperListStyle}
// 						PopperComponent={CustomPopper}
// 						renderOption={option => {
// 							return (
// 								<Box component='li' className={classes.searchBox}>
// 									<div style={{minWidth: '30px', opacity: '0.6'}}>
// 										<Image height={20} width={20} src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/specialityShield.svg'} />
// 									</div>
// 									<div>{option?.mastLookupValue}</div>
// 								</Box>
// 							)
// 						}}
// 					/>
// 				</section>
// 				<section className={classes.searchWrapper}>
// 					<section onClick={closeSearchModal} className={classes.closeIcon}>
// 						<ArrowBackIosIcon style={{color: '#808080'}} />
// 					</section>
// 					<section className={classes.searchField}>
// 						<AutoComplete
// 							disableClearable={false}
// 							size={'medium'}
// 							id={'search'}
// 							name={'search'}
// 							// open={true}
// 							options={searchSuggestions}
// 							groupBy={option => {
// 								return option?.category
// 							}}
// 							getOptionLabel={option => {
// 								return option?.suggestionKey || ''
// 							}}
// 							freeSolo={true}
// 							value={searchKey}
// 							onChange={(e, value) => handleChangeSearch(e, value)}
// 							onInputChange={(event, value, reason) => {
// 								handleSearchKey(event, value)
// 							}}
// 							AutoCompleteRootStyle={classes.AutoCompleteRoot}
// 							paperListStyle={classes.paperSearchStyle}
// 							AutoCompleteStyle={classes.searchAutoComplete}
// 							PopperComponent={CustomPopper}
// 							renderInput={params => (
// 								<TextField
// 									{...params}
// 									InputProps={{
// 										...params.InputProps,
// 										startAdornment: <InputAdornment position='start'>{<SearchIcon style={{color: '#bfbfbf'}} />}</InputAdornment>,
// 										endAdornment: (
// 											<InputAdornment position='end'>
// 												{<ArrowForwardIcon onClick={handleSearch} style={{color: '#7047ea', cursor: 'pointer'}} />}
// 											</InputAdornment>
// 										),
// 									}}
// 									placeholder={'Find Doctors, Specialities.'}
// 									variant='outlined'
// 								/>
// 							)}
// 							renderOption={option => {
// 								return (
// 									<Box className={classes.searchBox}>
// 										<div className={classes.searchOptions}>
// 											{option?.category === 'Recent Searches' ? (
// 												<>
// 													<section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
// 														<section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
// 															<span style={{minWidth: '50px'}}>
// 																<Image
// 																	height={18}
// 																	width={20}
// 																	opacity={0.5}
// 																	src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/search.svg'}
// 																/>
// 															</span>
// 															<div style={{display: 'inline'}}>{option?.suggestionKey}</div>
// 														</section>
// 														<section>
// 															<Button
// 																className={classes.removeBtn}
// 																onClick={e => deleteRecentSearch(e, option?.searchHistoryUuid)}
// 																size='small'
// 																disableElevation>
// 																<CloseIcon size='small' />
// 															</Button>
// 														</section>
// 													</section>
// 												</>
// 											) : (
// 												<>
// 													<section>
// 														<section style={{display: 'flex', alignItems: 'center'}}>
// 															<span style={{minWidth: '50px'}}>
// 																<Image
// 																	height={18}
// 																	width={20}
// 																	opacity={0.5}
// 																	src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/search.svg'}
// 																/>
// 															</span>
// 															<div style={{display: 'inline'}}>{option?.suggestionKey}</div>
// 														</section>
// 													</section>
// 												</>
// 											)}
// 										</div>
// 									</Box>
// 								)
// 							}}
// 						/>
// 					</section>
// 				</section>
// 			</section>
// 		</>
// 	)
// }

// export default MobileSearch1
