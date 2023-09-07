// import Image from 'next/image'
// import React, {useEffect, useState, useCallback, useRef} from 'react'
// import {Box, Popper, Button, IconButton} from '@material-ui/core'
// import useStyles from './style'
// import _ from 'lodash'
// import * as yup from 'yup'
// import useContextApi from '../../../lib/Utils/hooks/useContextApi'
// import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
// import Autocomplete from '../AutoComplete'
// import {useRouter} from 'next/router'
// import useAuth from '../../../lib/Utils/hooks/UseAuth'
// import useSearchContext from '../../../lib/Utils/hooks/useSearchContext'

// export const searchCategory = [
// 	{category: 'Recent Searches', name: 'Rahul', tentUserUuid: '85yr4zwo', mastTentUuid: 'b3s784ap'},
// 	{category: 'Recent Searches', name: 'vetri', tentUserUuid: 'e2rgnm1i', mastTentUuid: 'ipsuj7o'},
// 	{category: 'Recent Searches', name: 'RigelDoc', mastTentUuid: '6qpinz8f', tentUserUuid: 'ihgt31p'},
// 	{category: 'Popular Searches', name: 'Thiru', mastTentUuid: 'ipsuj7o', tentUserUuid: '7gf0jn2o'},
// 	{category: 'Popular Searches', name: 'vetri_a', tentUserUuid: 'xr45lt3c', mastTentUuid: 'hrpt0bkx'},
// 	{category: 'Popular Searches', name: 'Sekar', mastTentUuid: 'rcqwnt87', tentUserUuid: 'rt0v8ijj'},
// 	{category: 'Popular Searches', name: 'Sai', mastTentUuid: 'rcqwnt87', tentUserUuid: 'td2443oq'},
// 	{category: 'Popular Searches', name: 'santhosh', mastTentUuid: 'rcqwnt87', tentUserUuid: '5idqfoqk'},
// 	{category: 'Common Specialities', name: 'Radha', mastTentUuid: 'rcqwnt87', tentUserUuid: 'wayentko'},
// 	{category: 'Common Specialities', name: 'Babloo', mastTentUuid: 'rcqwnt87', tentUserUuid: 'ljntp1qp'},
// ]

// const schema = yup.object().shape({
// 	speciality: yup.string(),
// })

// export default function Search() {
// 	const classes = useStyles()
// 	const router = useRouter()
// 	const {token, setAnchorEl, setOpenLocation} = useAuth()
// 	// const {
// 	// 	searchKey,
// 	// 	setSearchKey,
// 	// 	enableMobileSearch,
// 	// 	setEnableMobileSearch,
// 	// 	// functionality Data
// 	// 	specialityDropdown,
// 	// 	setSpecialityDropdown,
// 	// 	specialityOptions,
// 	// 	searchSuggestions,
// 	// 	// handleSearch,
// 	// 	handleSearchKey,
// 	// 	handleChangeSearch,
// 	// 	deleteRecentSearch,
// 	// } = useContextApi()

// 	const {handleSearch} = useSearchContext()

// 	const currentWindowPath = typeof window !== 'undefined' ? window.location.pathname : null
// 	const windowPathname = currentWindowPath && currentWindowPath?.split('/')?.[1]

// 	// Designing Autocomplete Popper
// 	const CustomPopper = function(props) {
// 		const classes = useStyles()
// 		return <Popper {...props} className={classes.popperStyle} placement='bottom' />
// 	}
// 	// Close all standing dialog box in header
// 	const handleCloseDialogs = () => {
// 		setAnchorEl(null)
// 		setOpenLocation(null)
// 	}

// 	return (
// 		<>
// 			<section className={classes.root} onClick={handleCloseDialogs}>
// 				<section className={classes.searchWrapper}>
// 					<div className={classes.specialityWrapper}>
// 						<section style={{opacity: '0.6', display: 'flex', alignItems: 'center'}}>
// 							<Image
// 								height={18}
// 								width={20}
// 								opacity={0.5}
// 								src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/specialityShield.svg'}
// 							/>
// 						</section>
// 						<section>
// 							<Autocomplete
// 								disableClearable={true}
// 								openOnFocus={true}
// 								size={'medium'}
// 								id={'speciality'}
// 								name={'speciality'}
// 								options={specialityOptions}
// 								value={specialityDropdown}
// 								getOptionLabel={option => {
// 									return option?.mastLookupValue || ''
// 								}}
// 								onChange={(e, value) => {
// 									setSpecialityDropdown(value)
// 								}}
// 								AutoCompleteStyle={classes.specialityAutocomplete}
// 								paperListStyle={classes.paperListStyle}
// 								renderOption={option => {
// 									return (
// 										<Box component='li' className={classes.searchBox}>
// 											<div style={{minWidth: '30px', opacity: '0.6'}}>
// 												<Image
// 													height={20}
// 													width={20}
// 													src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/specialityShield.svg'}
// 												/>
// 											</div>
// 											<div>{option?.mastLookupValue}</div>
// 										</Box>
// 									)
// 								}}
// 							/>
// 						</section>
// 					</div>
// 					<div className={classes.searchBar}>
// 						<section className={classes.searchIconWrapper}>
// 							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/search.svg' alt='location' width={20} height={40} />
// 						</section>
// 						<section className={classes.autocompleteWrapper}>
// 							<Autocomplete
// 								disableClearable={false}
// 								size={'medium'}
// 								id={'searchKey'}
// 								name={'searchKey'}
// 								placeholder={
// 									windowPathname === 'care'
// 										? 'Find Doctors, Clinics, Hospital.,'
// 										: windowPathname === 'fitness'
// 										? 'Find Trainers, Fitness Center.,'
// 										: windowPathname === 'mind'
// 										? 'Find Yoga Instructors.,'
// 										: windowPathname === 'spawellness'
// 										? 'Find Beauticians, Therapist, Salon.,'
// 										: windowPathname === 'sports'
// 										? 'Find Coaches, Sports Academy.,'
// 										: 'Find Doctors, Specialities.,'
// 								}
// 								options={searchSuggestions}
// 								groupBy={option => option?.category}
// 								getOptionLabel={option => {
// 									return option?.suggestionKey || ''
// 								}}
// 								freeSolo={true}
// 								value={searchKey}
// 								onChange={(e, value) => handleChangeSearch(e, value)}
// 								onInputChange={(event, value, reason) => {
// 									// let role = _.find(searchSuggestions, {suggestionKey: value})
// 									handleSearchKey(event, value)
// 									// if (reason !== 'reset') {
// 									// 	setSearchKey(value)
// 									// }
// 								}}
// 								paperListStyle={classes.paperSearchStyle}
// 								AutoCompleteStyle={classes.searchAutoComplete}
// 								PopperComponent={CustomPopper}
// 								// open={false}
// 								onKeyDown={e => {
// 									if (e.code === 'Enter') {
// 										handleSearch()
// 									}
// 								}}
// 								renderOption={option => {
// 									return (
// 										<Box className={classes.searchBox}>
// 											<div className={classes.searchOptions}>
// 												{option?.category === 'Recent Searches' ? (
// 													<>
// 														<section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
// 															<section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
// 																<span style={{minWidth: '50px'}}>
// 																	<Image
// 																		height={18}
// 																		width={20}
// 																		opacity={0.5}
// 																		src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/search.svg'}
// 																	/>
// 																</span>
// 																<div style={{display: 'inline'}}>{option?.suggestionKey}</div>
// 															</section>
// 															<section>
// 																<Button
// 																	className={classes.removeBtn}
// 																	onClick={e => deleteRecentSearch(e, option?.searchHistoryUuid)}
// 																	size='small'
// 																	disableElevation>
// 																	remove
// 																</Button>
// 															</section>
// 														</section>
// 													</>
// 												) : (
// 													<>
// 														<section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
// 															<section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
// 																<span style={{minWidth: '50px'}}>
// 																	<Image
// 																		height={18}
// 																		width={20}
// 																		opacity={0.5}
// 																		src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/search.svg'}
// 																	/>
// 																</span>
// 																<div style={{display: 'inline'}}> {option?.suggestionKey}</div>
// 															</section>
// 															<section>
// 																<span className={classes.specialityType}>{option?.suggestionType}</span>
// 															</section>
// 														</section>
// 													</>
// 												)}
// 											</div>
// 										</Box>
// 									)
// 								}}
// 							/>
// 						</section>
// 					</div>
// 					<div className={classes.searchBtn} onClick={handleSearch}>
// 						{/* <Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/search arrow.svg' alt='location' width={50} height={50} /> */}
// 						<IconButton style={{backgroundColor: '#e22c24'}}>
// 							<ArrowForwardRoundedIcon style={{color: '#fff'}} />
// 						</IconButton>
// 					</div>
// 				</section>
// 				{/* <section className={classes.card}>
// 						<Typography variant='h4'>
// 							Fed up of endless wait? Look for clinic with <strong className={classes.primeText}>prime</strong>
// 							<DoneIcon />
// 						</Typography>
// 					</section> */}
// 			</section>
// 		</>
// 	)
// }
