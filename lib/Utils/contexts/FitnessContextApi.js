import React, {createContext, useState, useCallback, useEffect} from 'react'
import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import useContextApi from '../hooks/useContextApi'
import appointmentModeList from '../../../src/model/AppointementModeFilter'

const FitnessContextApi = createContext()

export const FitnessContextProvider = ({children}) => {
	const {searchKey, loading, setLoading, currentLocation, searchGroup, setEnableMobileSearch} = useContextApi()
	const {fitnessGroup, fitnessTrainerGroup} = searchGroup
	const [trainerSearchData, setTrainerSearchData] = useState([])
	const [trainerSearchFilters, setTrainerSearchFilters] = useState({
		sortByFilter: '',
		sortByIndex: 0,
		budgetFilter: null,
		appointmentMode: '',
		availabilityFilter: 'all',
		genderFilter: '',
		locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
		distanceFilter: null,
	})
	const [trainerClearFilter, setTrainerClearFilter] = useState(false)
	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = trainerSearchFilters

	// Filter value State
	const [budgetValue, setBudgetValue] = useState({defaultValue: 150, min: 0, max: 500, step: 50})
	const [appointmentChecked, setAppointmentChecked] = useState(new Array(appointmentModeList?.length).fill(false))

	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : ''
	const [searchDataCount, setSearchDataCount] = useState(0)
	const [trainerOffset, setTrainerOffset] = useState(1)
	const [trainerLimit, setTrainerLimit] = useState(30)
	const [totalSearchCount, setTotalSearchCount] = useState(0)
	const [hasMore, setHasMore] = useState(true)

	const getSearchData = data => {
		if (
			sortByFilter === '' &&
			budgetFilter === null &&
			appointmentMode === '' &&
			availabilityFilter === 'all' &&
			genderFilter === '' &&
			locationFilter === `${11.018888988757334}${','}${77.00694826760964}` &&
			distanceFilter === null
		) {
			setTrainerSearchData(prevState => [...prevState, ...data])
		} else {
			setTrainerSearchData(data)
		}
	}

	// Fitness Trainer Profile List
	const fitnessTrainerProfileSearch = (searchKeys, offset) => {
		setLoading(true)
		const data = {
			appointmentMode: `${appointmentMode}`,
			availability: availabilityFilter,
			distance: distanceFilter,
			feesRangeFrom: 0,
			feesRangeTo: budgetFilter,
			gender: genderFilter,
			latlon: locationFilter,
			searchKey: searchKeys,
			sortBy: sortByFilter,
			pageNum: offset,
			pageItem: trainerLimit,
			mastTentGroupUuid: fitnessGroup,
			mastRoleUuid: fitnessTrainerGroup,
			custUuid: custUuid || '',
		}
		setTrainerSearchData([])
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				const data = res?.data?.data
				getSearchData(data)
				setSearchDataCount(res?.data?.pageItemCount)
				setTotalSearchCount(res?.data?.totalCount)
				setEnableMobileSearch(false)
			} else {
				setTrainerSearchData([])
				setSearchDataCount(0)
				setTotalSearchCount(0)
				setLoading(false)
				setEnableMobileSearch(false)
			}
		}
		const onFailure = err => {
			console.log('Fitness Search profile list', err)
			setLoading(false)
			setEnableMobileSearch(false)
		}
		searchListProfileApi.searchProfileList(data).then(onSuccess, onFailure)
	}
	useEffect(() => {
		fitnessTrainerProfileSearch(searchKey?.suggestionKey, trainerOffset)
	}, [sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter, trainerOffset])

	// Fetching More Search Data
	// Lazy Loading
	const fetchMoreData = async () => {
		setTimeout(() => {
			const totalDataReached = trainerSearchData?.length === totalSearchCount
			if (totalDataReached) {
				setHasMore(false)
			} else {
				setHasMore(true)
				setOffset(offset + 1)
			}
		}, 1500)
	}

	// Clear Search Filters
	useEffect(() => {
		if (
			sortByIndex === 0 &&
			sortByFilter === '' &&
			budgetFilter === null &&
			appointmentMode === '' &&
			availabilityFilter === 'all' &&
			genderFilter === '' &&
			locationFilter == `${11.018888988757334}${','}${77.00694826760964}` &&
			distanceFilter === null
		) {
			setTrainerClearFilter(false)
		} else {
			setTrainerClearFilter(true)
		}
	}, [sortByIndex, sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter])

	// Reset Search Filters
	const trainerResetFilters = () => {
		setTrainerSearchFilters({
			...trainerSearchFilters,
			sortByIndex: 0,
			sortByFilter: '',
			budgetFilter: null,
			appointmentMode: '',
			availabilityFilter: 'all',
			genderFilter: '',
			locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
			distanceFilter: null,
		})
		setAppointmentChecked(new Array(appointmentModeList?.length).fill(false))
	}
	return (
		<FitnessContextApi.Provider
			value={{
				trainerSearchData,
				setTrainerSearchData,
				setSearchDataCount,
				setTotalSearchCount,
				getSearchData,
				searchDataCount,
				trainerSearchFilters,
				trainerClearFilter,
				setTrainerClearFilter,
				setTrainerSearchFilters,
				budgetValue,
				appointmentChecked,
				setAppointmentChecked,
				fetchMoreData,
				hasMore,
				setHasMore,
				trainerResetFilters,
				trainerLimit,
				setTrainerLimit,
				trainerOffset,
				setTrainerOffset,
				custUuid,
				fitnessTrainerProfileSearch,
			}}>
			{children}
		</FitnessContextApi.Provider>
	)
}

export default FitnessContextApi
