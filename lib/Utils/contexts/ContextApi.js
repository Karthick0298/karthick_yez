import React, {createContext, useState, useCallback, useEffect} from 'react'
import _ from 'lodash'
import moment from 'moment'
// import getSpecialityOptionsApi from '../../../Service/SearchBar/getSpeciality'
// import getSpecificSpecialityApi from '../../../Service/SearchBar/getSpecificSpeciality'
// import searchOptionsApi from '../../../Service/SearchBar/getSearchOptions'
// import deleteRecentSearchApi from '../../../Service/SearchBar/deleteRecentSearch'
// import {useRouter} from 'next/router'
import SymptomsListApi from '../../../Service/ChatBot/SymptomsList'
import SymptomsPriceListApi from '../../../Service/ChatBot/SymptomsPriceList'
import LocationFiltersApi from '../../../Service/ProfileList/LocationFilter'
import useAuth from '../hooks/UseAuth'

const ContextApi = createContext()

export const ContextApiProvider = ({children}) => {
	// const {token, userId, loggedVia, otpVerified} = useAuth()
	// const classes = useStyles()
	const [loading, setLoading] = useState(true)
	// const [country, setCountry] = useState(null)
	const [triggerFile, setTriggerFile] = useState(null)

	//bookAPpt
	const [apptPrice, setApptPrice] = useState('')

	// datepicker doctor appointment
	const [tabList, setTabList] = useState([])
	const [dateContext, setDateContext] = useState(moment().format('YYYY-MM-DD'))
	const [statusProps, setStatusProps] = useState('')
	const [state, setState] = useState()
	const [scheduleTime, setScheduleTime] = useState('')
	const [schedulePeriod, setSchedulePeriod] = useState('')
	const [time, setTime] = useState('')
	const [availState, availSetState] = useState([])
	const [value, setValue] = useState(0)
	const [dayContext, setDayContext] = useState(moment().format('ddd'))

	// Side Menu Bar Data
	const [mainMenuList, setMainMenuList] = useState([])
	const [rowMenuList, setRowMenuList] = useState([])
	const [careMenuList, setCareMenuList] = useState([])
	const [fitnessMenuList, setFitnessMenuList] = useState([])
	const [mindMenuList, setMindMenuList] = useState([])
	const [sportsMenuList, setSportsMenuList] = useState([])
	const [spaMenuList, setSpaMenuList] = useState([])

	// Profile Search Related Data
	// const [searchKey, setSearchKey] = useState(null)
	// const [searchInput, setSearchInput] = useState(0)
	// Mobile Search
	// const [enableMobileSearch, setEnableMobileSearch] = useState(false)
	// const [searchProfileRole, setSearchProfileRole] = useState({group: null, role: null})
	// const [searchGroup, setSearchGroup] = useState({
	// 	careGroup: 'fyi6pmtm',
	// 	careLink: '/care/profile',
	// 	careDoctorGroup: '5ayrhezg',
	// 	careDoctorLink: '/care/profile',
	// 	careNurseGroup: 'j3yb542l',
	// 	careNurseLink: '/care/profile',
	// 	careOwnerGroup: '6x5b4gg',
	// 	careOwnerLink: '/care/establishmentlist',
	// 	fitnessGroup: 'e7z11j8m',
	// 	fitnessLink: '/fitness/trainerProfile',
	// 	fitnessTrainerGroup: 'ktwemku5',
	// 	fitnessTrainerLink: '/fitness/trainerProfile',
	// 	mindGroup: '2nzdfwug',
	// 	mindLink: '/mind/masterProfile',
	// 	mindMasterGroup: 'uihi2yj9',
	// 	mindMasterLink: '/mind/masterProfile',
	// 	mindTherapistGroup: 'hm77e61',
	// 	mindTherapistLink: 'mind/therapistProfile',
	// 	spaGroup: 'irokb9b8',
	// 	spaLink: '/spawellness/beauticianprofile',
	// 	spaBeauticianGroup: 'qnz79hr',
	// 	spaBeauticianLink: '/spawellness/beauticianprofile',
	// 	spaTherapistGroup: 'hm77e61',
	// 	spaTherapistLink: '/spawellness/therapistsprofile',
	// 	sportsGroup: 'ztyxtevg',
	// 	sportsLink: '/sports/coachProfile',
	// 	sportsCoachGroup: 'qoe4srkm',
	// 	sportsCoachLink: '/sports/coachProfile',
	// })
	// const [currentLocation, setCurrentLocation] = useState({
	// 	latitude: null,
	// 	longitude: null,
	// })
	// const {latitude, longitude} = currentLocation

	// Location  filters state for all groups
	// const [careLocFilters, setCareLocFilters] = useState([])
	// const [fitnessLocFilters, setFitnessLocFilters] = useState([])
	// const [mindLocFilters, setMindLocFilters] = useState([])
	// const [spaLocFilters, setSpaLocFilters] = useState([])
	// const [sportsLocFilters, setSportsLocFilters] = useState([])
	// params for search location filters
	// const [careLocParams, setCareLocParams] = useState({
	// 	latlon: `${latitude}${','}${longitude}`,
	// 	mastTentGroupUuid: searchGroup?.careGroup,
	// 	pageNum: 1,
	// 	pageItem: 10,
	// 	distance: 20,
	// })
	// const [fitnessLocParams, setFitnessLocParams] = useState({
	// 	latlon: `${latitude}${','}${longitude}`,
	// 	mastTentGroupUuid: searchGroup?.fitnessGroup,
	// 	pageNum: 1,
	// 	pageItem: 10,
	// 	distance: 20,
	// })
	// const [mindLocParams, setMindLocParams] = useState({
	// 	latlon: `${latitude}${','}${longitude}`,
	// 	mastTentGroupUuid: searchGroup?.mindGroup,
	// 	pageNum: 1,
	// 	pageItem: 10,
	// 	distance: 20,
	// })
	// const [spaLocParams, setSpaLocParams] = useState({
	// 	latlon: `${latitude}${','}${longitude}`,
	// 	mastTentGroupUuid: searchGroup?.spaGroup,
	// 	pageNum: 1,
	// 	pageItem: 10,
	// 	distance: 20,
	// })
	// const [sportsLocParams, setSportsLocParams] = useState({
	// 	latlon: `${latitude}${','}${longitude}`,
	// 	mastTentGroupUuid: searchGroup?.sportsGroup,
	// 	pageNum: 1,
	// 	pageItem: 10,
	// 	distance: 20,
	// })

	// Updating LocationFilters Params when current location changing
	// useEffect(() => {
	// 	setCareLocParams({...careLocParams, latlon: `${latitude}${','}${longitude}`})
	// 	setFitnessLocParams({...fitnessLocParams, latlon: `${latitude}${','}${longitude}`})
	// 	setMindLocParams({...mindLocParams, latlon: `${latitude}${','}${longitude}`})
	// 	setSpaLocParams({...spaLocParams, latlon: `${latitude}${','}${longitude}`})
	// 	setSportsLocParams({...sportsLocParams, latlon: `${latitude}${','}${longitude}`})
	// }, [latitude, longitude])

	// Care LocationFilters
	// useEffect(() => {
	// 	if (currentLocation?.latitude && currentLocation?.longitude) {
	// 		const onSuccess = res => {
	// 			if (res?.data?.status === 'success') {
	// 				setCareLocFilters(res?.data?.data)
	// 			} else {
	// 				setCareLocFilters([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			console.log('Search Locations Filters', err)
	// 		}
	// 		LocationFiltersApi.LocationFilters({...careLocParams}).then(onSuccess, onFailure)
	// 	}
	// }, [careLocParams])
	// Fitness LocationFilters
	// useEffect(() => {
	// 	if (currentLocation?.latitude && currentLocation?.longitude) {
	// 		const onSuccess = res => {
	// 			if (res?.data?.status === 'success') {
	// 				setFitnessLocFilters(res?.data?.data)
	// 			} else {
	// 				setFitnessLocFilters([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			console.log('Search Locations Filters', err)
	// 		}
	// 		LocationFiltersApi.LocationFilters({...fitnessLocParams}).then(onSuccess, onFailure)
	// 	}
	// }, [fitnessLocParams])
	// Mind LocationFilters
	// useEffect(() => {
	// 	if (currentLocation?.latitude && currentLocation?.longitude) {
	// 		const onSuccess = res => {
	// 			if (res?.data?.status === 'success') {
	// 				setMindLocFilters(res?.data?.data)
	// 			} else {
	// 				setMindLocFilters([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			console.log('Search Locations Filters', err)
	// 		}
	// 		LocationFiltersApi.LocationFilters({...mindLocParams}).then(onSuccess, onFailure)
	// 	}
	// }, [mindLocParams])
	// Spa LocationFilters
	// useEffect(() => {
	// 	if (currentLocation?.latitude && currentLocation?.longitude) {
	// 		const onSuccess = res => {
	// 			if (res?.data?.status === 'success') {
	// 				setSpaLocFilters(res?.data?.data)
	// 			} else {
	// 				setSpaLocFilters([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			console.log('Search Locations Filters', err)
	// 		}
	// 		LocationFiltersApi.LocationFilters({...spaLocParams}).then(onSuccess, onFailure)
	// 	}
	// }, [spaLocParams])
	// sports LocationFilters
	// useEffect(() => {
	// 	if (currentLocation?.latitude && currentLocation?.longitude) {
	// 		const onSuccess = res => {
	// 			if (res?.data?.status === 'success') {
	// 				setSportsLocFilters(res?.data?.data)
	// 			} else {
	// 				setSportsLocFilters([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			console.log('Search Locations Filters', err)
	// 		}
	// 		LocationFiltersApi.LocationFilters({...sportsLocParams}).then(onSuccess, onFailure)
	// 	}
	// }, [sportsLocParams])

	// Search Functionality Data
	// Getting Current URL Path
	// const currentWindowPath = typeof window !== 'undefined' ? window.location.pathname : null
	// const windowPathname = currentWindowPath && currentWindowPath?.split('/')?.pop()

	// const [specialityDropdown, setSpecialityDropdown] = useState({})
	// const [specialityOptions, setSpecialityOptions] = useState([])
	// const [mainSpecialityOptions, setMainSpecialityOptions] = useState([])
	// const [careSpeciality, setCareSpeciality] = useState([])
	// const [fitnessSpeciality, setFitnessSpeciality] = useState([])
	// const [mindSpeciality, setMindSpeciality] = useState([])
	// const [spaSpeciality, setSpaSpeciality] = useState([])
	// const [sportsSpeciality, setSportsSpeciality] = useState([])
	// const [searchSuggestions, setSearchSuggestions] = useState([])
	// const [popularSearches, setPopularSearches] = useState(false)
	// const [autoSuggest, setAutoSuggest] = useState(false)
	// const [availabilityDays, setAvailabilityDays] = useState({
	// 	today: moment()?.format('dddd'),
	// 	tomorrow: moment()
	// 		?.add(1, 'days')
	// 		?.format('dddd'),
	// 	allDays: 'all',
	// })
	// const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null

	//common Get Speciality Dropdown Api
	// const getCommonSpecialityOptions = useCallback(() => {
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'success') {
	// 			setMainSpecialityOptions(res?.data?.data)
	// 		} else {
	// 			setMainSpecialityOptions([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('search speciality options', err)
	// 		setLoading(false)
	// 	}
	// 	getSpecialityOptionsApi.getSpecialityOptions('CDD').then(onSuccess, onFailure)
	// }, [])

	// useEffect(() => {
	// 	getCommonSpecialityOptions()
	// }, [getCommonSpecialityOptions])

	//care Get Speciality Dropdown Api
	// const getCareSpecialityOptions = useCallback(() => {
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'success') {
	// 			setCareSpeciality(res?.data?.data)
	// 		} else {
	// 			setCareSpeciality([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('search speciality options', err)
	// 		setLoading(false)
	// 	}
	// 	getSpecificSpecialityApi.getSpecificSpeciality('HDD,CDD').then(onSuccess, onFailure)
	// }, [])

	// useEffect(() => {
	// 	getCareSpecialityOptions()
	// }, [getCareSpecialityOptions])

	// fitness Get Speciality Dropdown Api
	// useEffect(() => {
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'success') {
	// 			setFitnessSpeciality(res?.data?.data)
	// 		} else {
	// 			setFitnessSpeciality([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('search speciality options', err)
	// 		setLoading(false)
	// 	}
	// 	getSpecificSpecialityApi.getSpecificSpeciality('CDD,FDD').then(onSuccess, onFailure)
	// }, [])

	// Mind Get Speciality Dropdown Api
	// useEffect(() => {
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'success') {
	// 			setMindSpeciality(res?.data?.data)
	// 		} else {
	// 			setMindSpeciality([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		setLoading(false)
	// 		console.log('search speciality options', err)
	// 	}
	// 	getSpecificSpecialityApi.getSpecificSpeciality('CDD,MDD').then(onSuccess, onFailure)
	// }, [])

	// Spa Get Speciality Dropdown Api
	// useEffect(() => {
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'success') {
	// 			setSpaSpeciality(res?.data?.data)
	// 		} else {
	// 			setSpaSpeciality([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('search speciality options', err)
	// 		setLoading(false)
	// 	}
	// 	getSpecificSpecialityApi.getSpecificSpeciality('CDD,SWD').then(onSuccess, onFailure)
	// }, [])

	// sports Get Speciality Dropdown Api
	// useEffect(() => {
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'success') {
	// 			setSportsSpeciality(res?.data?.data)
	// 		} else {
	// 			setSportsSpeciality([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('search speciality options', err)
	// 		setLoading(false)
	// 	}
	// 	getSpecificSpecialityApi.getSpecificSpeciality('CDD,SDD').then(onSuccess, onFailure)
	// }, [])

	// setting default value for speciality dropdown
	// useEffect(() => {
	// 	if (!_.isEmpty(specialityOptions)) {
	// 		let initialSpeciality = _.find(specialityOptions, {mastLookupValue: 'ALL'})
	// 		setSpecialityDropdown(initialSpeciality)
	// 	}
	// }, [specialityOptions])

	// recent searches api
	// const getRecentSearches = useCallback(() => {
	// 	if (token && userId && loggedVia && otpVerified) {
	// 		const onSuccess = res => {
	// 			setLoading(false)
	// 			if (res?.data?.status === 'Success') {
	// 				const sliceData = res?.data?.data
	// 				const getSlicedData = sliceData?.length <= 3 ? sliceData : sliceData?.slice(0, 3)
	// 				setSearchSuggestions(_.compact(_.merge(searchSuggestions, getSlicedData)))
	// 			} else {
	// 				setSearchSuggestions([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			setLoading(false)
	// 			console.log('recent searches', err)
	// 		}
	// 		searchOptionsApi.getSpecialityOptions(`all/${custUuid}`).then(onSuccess, onFailure)
	// 	}
	// }, [loggedVia, otpVerified])

	// useEffect(() => {
	// 	getRecentSearches()
	// }, [getRecentSearches, loggedVia, otpVerified])

	// Search OnChange
	// const handleChangeSearch = (e, value) => {
	// 	setSearchKey(value)
	// 	// setSearchProfileRole({...searchProfileRole, group: role?.groupUuid, role: role?.roleUuid})
	// 	setSearchProfileRole({...searchProfileRole, group: value?.groupUuid, role: value?.roleUuid})
	// }

	// Trigger Popular Searches && Autosuggest Searches
	// const handleSearchKey = (e, value) => {
	// 	setSearchInput(value)
	// 	if (value?.length > 2) {
	// 		setPopularSearches(true)
	// 		setAutoSuggest(true)
	// 	} else {
	// 		setPopularSearches(false)
	// 		setAutoSuggest(false)
	// 	}
	// }

	// popular searches api
	// const getPopularSearches = useCallback(() => {
	// 	if (popularSearches) {
	// 		const onSuccess = res => {
	// 			setLoading(false)
	// 			if (res?.data?.status === 'Success') {
	// 				const sliceData = res?.data?.data
	// 				const getSlicedData = sliceData?.slice(0, 5) || sliceData?.map(val => val)
	// 				const mergeArrays = searchSuggestions?.concat(getSlicedData)
	// 				setSearchSuggestions(_.merge(searchSuggestions, mergeArrays))
	// 			} else {
	// 				setSearchSuggestions([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			setLoading(false)
	// 			console.log('popular searches', err)
	// 		}
	// 		searchOptionsApi.getSpecialityOptions(`popularsearch/${searchInput}`).then(onSuccess, onFailure)
	// 	}
	// }, [popularSearches])

	// useEffect(() => {
	// 	getPopularSearches()
	// }, [getPopularSearches, popularSearches])

	// AutoSuggest searches api
	// const getAutoSuggestSearches = useCallback(() => {
	// 	if (autoSuggest) {
	// 		const onSuccess = res => {
	// 			setLoading(false)
	// 			if (res?.data?.status === 'Success') {
	// 				const sliceData = res?.data?.data
	// 				const getSlicedData = sliceData?.slice(0, 2) || sliceData?.map(val => val)
	// 				const mergeArrays = searchSuggestions?.concat(getSlicedData)
	// 				setSearchSuggestions(_.merge(searchSuggestions, mergeArrays))
	// 			} else {
	// 				setSearchSuggestions([])
	// 			}
	// 		}
	// 		const onFailure = err => {
	// 			setLoading(false)
	// 			console.log('autosuggest searches', err)
	// 		}
	// 		searchOptionsApi.getSpecialityOptions(`ngramautosuggest/${specialityDropdown?.mastLookupValue}/${searchInput}`).then(onSuccess, onFailure)
	// 	}
	// }, [autoSuggest])

	// useEffect(() => {
	// 	getAutoSuggestSearches()
	// }, [getAutoSuggestSearches, autoSuggest])

	// const updateRecentSearches = () => {
	// 	setLoading(true)
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'Success') {
	// 			const data = res?.data?.data
	// 			const slicedData = data?.length <= 3 ? data : data?.slice(0, 3)
	// 			setSearchSuggestions(_.compact(_.merge(searchSuggestions, slicedData)))
	// 		} else {
	// 			setSearchSuggestions([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		setLoading(false)
	// 		console.log('recent searches', err)
	// 	}
	// 	searchOptionsApi.getSpecialityOptions(`all/${custUuid}`).then(onSuccess, onFailure)
	// }

	// Delete specific searches
	// const deleteRecentSearch = (e, searchHistoryUuid) => {
	// 	e.stopPropagation()
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		let newSearchSuggestions = searchSuggestions?.filter(data => data?.searchHistoryUuid !== searchHistoryUuid)
	// 		const getSlicedData = newSearchSuggestions?.length <= 3 ? newSearchSuggestions : newSearchSuggestions?.slice(0, 3)
	// 		setSearchSuggestions(getSlicedData)
	// 		updateRecentSearches()
	// 	}
	// 	const onFailure = err => {
	// 		setLoading(false)
	// 		console.log('delete recent search', err)
	// 	}
	// 	deleteRecentSearchApi.deleteRecentSearch(searchHistoryUuid).then(onSuccess, onFailure)
	// }

	// Handling Random specilaity options
	// const dynamicSpeciality = () => {
	// 	if (windowPathname === '') {
	// 		setSpecialityOptions(mainSpecialityOptions)
	// 	} else if (windowPathname === 'care') {
	// 		setSpecialityOptions(careSpeciality)
	// 	} else if (windowPathname === 'fitness') {
	// 		setSpecialityOptions(fitnessSpeciality)
	// 	} else if (windowPathname === 'mind') {
	// 		setSpecialityOptions(mindSpeciality)
	// 	} else if (windowPathname === 'spawellness') {
	// 		setSpecialityOptions(spaSpeciality)
	// 	} else if (windowPathname === 'sports') {
	// 		setSpecialityOptions(sportsSpeciality)
	// 	} else {
	// 		setSpecialityOptions(mainSpecialityOptions)
	// 	}
	// }
	// useEffect(() => {
	// 	if (windowPathname === '') {
	// 		setSearchKey(null)
	// 	}
	// }, [windowPathname])

	// useEffect(() => {
	// 	dynamicSpeciality()
	// }, [dynamicSpeciality, windowPathname])

	// Reset Recent Searches
	// const resetRecentSearches = () => {
	// 	if (searchInput?.length === 0) {
	// 		if (custUuid) {
	// 			if (token && userId && loggedVia && otpVerified) {
	// 				const onSuccess = res => {
	// 					setLoading(false)
	// 					if (res?.data?.status === 'Success') {
	// 						const data = res?.data?.data
	// 						const slicedData = data?.length <= 3 ? data : data?.slice(0, 3)
	// 						setSearchSuggestions(_.compact(slicedData))
	// 					} else {
	// 						setSearchSuggestions([])
	// 					}
	// 				}
	// 				const onFailure = err => {
	// 					setLoading(false)
	// 					console.log('recent searches', err)
	// 				}
	// 				searchOptionsApi.getSpecialityOptions(`all/${custUuid}`).then(onSuccess, onFailure)
	// 			}
	// 		} else {
	// 			setSearchSuggestions([])
	// 		}
	// 	}
	// }
	// useEffect(() => {
	// 	resetRecentSearches()
	// }, [searchInput, loggedVia, otpVerified])

	//Online Consult
	const [symptomsList, setSymptomsList] = useState([])
	const [symptomsPriceList, setSymptomsPriceList] = useState([])
	const [symtomsUuid, setSymptomsUuid] = useState('')
	const [subId, setSubId] = useState('')
	const [prices, setPrice] = useState('')
	const [specialities, setSpecialities] = useState('')
	const [groupId, setGroupId] = useState(null)
	const [groupUuid, setGroupUuid] = useState(null)
	const [careId, setCareId] = useState('care')
	const [fitnessId, setFitnessId] = useState('fitness')
	const [mindId, setMindId] = useState('mind')
	const [spaId, setSpaId] = useState('spa')
	const [sportsId, setSportsId] = useState('sports')

	const pathName = () => {
		if (careId === groupId) {
			setGroupUuid('fyi6pmtm')
		} else if (fitnessId === groupId) {
			setGroupUuid('e7z11j8m')
		} else if (mindId === groupId) {
			setGroupUuid('2nzdfwug')
		} else if (spaId === groupId) {
			setGroupUuid('irokb9b8')
		} else if (sportsId === groupId) {
			setGroupUuid('ztyxtevg')
		}
	}
	useEffect(() => {
		pathName()
		setSymptomsList([])
	}, [groupId])
	//Symptoms List
	useEffect(() => {
		if (groupUuid) {
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					setSymptomsList(res?.data?.data)
				} else {
					setSymptomsList([])
				}
			}
			const onFailure = err => {
				console.log('Symptoms List', err)
			}
			SymptomsListApi.SymptomsList(groupUuid).then(onSuccess, onFailure)
		}
	}, [groupUuid])

	//Pricetag List
	const priceList = useCallback(
		symtomsUuid => {
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					setSymptomsPriceList(res?.data?.data)
				} else {
					setSymptomsPriceList([])
				}
			}
			const onFailure = err => {
				console.log('Pricetag List', err)
			}
			SymptomsPriceListApi.SpecialitiesPriceList(symtomsUuid).then(onSuccess, onFailure)
		},
		[symtomsUuid]
	)
	useEffect(() => {
		if (!_.isEmpty(symtomsUuid)) {
			priceList(symtomsUuid)
		}
	}, [symtomsUuid])

	return (
		<ContextApi.Provider
			value={{
				loading,
				triggerFile,
				setTriggerFile,
				apptPrice,
				setApptPrice,
				setLoading,
				// currentLocation,
				// setCurrentLocation,
				// searchKey,
				// setSearchKey,
				// searchProfileRole,
				// searchGroup,
				// careLocFilters,
				// fitnessLocFilters,
				// mindLocFilters,
				// spaLocFilters,
				// sportsLocFilters,
				// enableMobileSearch,
				// setEnableMobileSearch,
				// availabilityDays,
				// ---End of search data ---
				// --- Search Functionality Data ---
				// specialityDropdown,
				// setSpecialityDropdown,
				// specialityOptions,
				// setSpecialityOptions,
				// mainSpecialityOptions,
				// setMainSpecialityOptions,
				// careSpeciality,
				// setCareSpeciality,
				// searchSuggestions,
				// setSearchSuggestions,
				// popularSearches,
				// setPopularSearches,
				// autoSuggest,
				// setAutoSuggest,
				// handleSearchKey,
				// handleChangeSearch,
				// deleteRecentSearch,
				// updateRecentSearches,
				// ---End of Search Functionality Data ---
				scheduleTime,
				setScheduleTime,
				schedulePeriod,
				setSchedulePeriod,
				time,
				dateContext,
				setDateContext,
				setTime,
				availState,
				availSetState,
				statusProps,
				setStatusProps,
				// sideNavbar data
				mainMenuList,
				setMainMenuList,
				rowMenuList,
				setRowMenuList,
				careMenuList,
				setCareMenuList,
				fitnessMenuList,
				setFitnessMenuList,
				mindMenuList,
				setMindMenuList,
				sportsMenuList,
				setSportsMenuList,
				spaMenuList,
				setSpaMenuList,
				state,
				setState,
				value,
				setValue,
				tabList,
				setTabList,
				dayContext,
				setDayContext,
				//online consult
				symptomsList,
				symptomsPriceList,
				setSymptomsPriceList,
				symtomsUuid,
				setSymptomsUuid,
				subId,
				setSubId,
				prices,
				setPrice,
				specialities,
				setSpecialities,
				groupId,
				setGroupId,
			}}>
			{children}
		</ContextApi.Provider>
	)
}

export default ContextApi
