import React, {createContext, useState, useCallback, useEffect} from 'react'
import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import useContextApi from '../hooks/useContextApi'
import appointmentModeList from '../../../src/model/AppointementModeFilter'

const SportsContextApi = createContext()

export const SportsContextProvider = ({children}) => {
	const {searchKey, loading, setLoading, currentLocation, searchGroup, setEnableMobileSearch} = useContextApi()
	const {sportsGroup, sportsCoachGroup} = searchGroup
	const [sportsCoachSearchData, setSportsCoachSearchData] = useState([])
	const [sportsCoachSearchFilters, setSportsCoachSearchFilters] = useState({
		sortByFilter: '',
		sortByIndex: 0,
		budgetFilter: null,
		appointmentMode: '',
		availabilityFilter: 'all',
		genderFilter: '',
		locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
		distanceFilter: null,
	})

	const [sportsCoachClearFilters, setSportsCoachClearFilters] = useState(false)

	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = sportsCoachSearchFilters

	// Filter value State
	const [budgetValue, setBudgetValue] = useState({defaultValue: 150, min: 0, max: 500, step: 50})
	const [appointmentChecked, setAppointmentChecked] = useState(new Array(appointmentModeList?.length).fill(false))

	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : ''
	const [searchDataCount, setSearchDataCount] = useState(0)
	const [sportsCoachOffset, setSportsCoachOffset] = useState(1)
	const [sportsCoachLimit, setSportsCoachLimit] = useState(30)
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
			setSportsCoachSearchData(prevState => [...prevState, ...data])
		} else {
			setSportsCoachSearchData(data)
		}
	}
	// Sports Coach Profile List
	const sportsCoachProfileSearch = (searchKeys, offset) => {
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
			pageItem: sportsCoachLimit,
			mastTentGroupUuid: sportsGroup,
			mastRoleUuid: sportsCoachGroup,
			custUuid: custUuid || '',
		}
		setSportsCoachSearchData([])
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				const data = res?.data?.data
				getSearchData(data)
				setSearchDataCount(res?.data?.pageItemCount)
				setTotalSearchCount(res?.data?.totalCount)
				setEnableMobileSearch(false)
			} else {
				setSportsCoachSearchData([])
				setSearchDataCount(0)
				setTotalSearchCount(0)
				setLoading(false)
				setEnableMobileSearch(false)
			}
		}
		const onFailure = err => {
			console.log('Sports Search profile list', err)
			setLoading(false)
			setEnableMobileSearch(false)
		}
		searchListProfileApi.searchProfileList(data).then(onSuccess, onFailure)
	}
	useEffect(() => {
		sportsCoachProfileSearch(searchKey?.suggestionKey, sportsCoachOffset)
	}, [sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter, sportsCoachOffset])

	// Fetching More Search Data
	// Lazy Loading
	const fetchMoreData = async () => {
		setTimeout(() => {
			const totalDataReached = sportsCoachSearchData?.length === totalSearchCount
			if (totalDataReached) {
				setHasMore(false)
			} else {
				setHasMore(true)
				setSportsCoachOffset(sportsCoachOffset + 1)
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
			locationFilter === `${11.018888988757334}${','}${77.00694826760964}` &&
			distanceFilter === null
		) {
			setSportsCoachClearFilters(false)
		} else {
			setSportsCoachClearFilters(true)
		}
	}, [sortByIndex, sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter])

	// Reset Search Filters
	const sportsCoachResetFilters = () => {
		setSportsCoachSearchFilters({
			...sportsCoachSearchFilters,
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
		<SportsContextApi.Provider
			value={{
				sportsCoachSearchData,
				setSportsCoachSearchData,
				setSearchDataCount,
				setTotalSearchCount,
				getSearchData,
				searchDataCount,
				sportsCoachSearchFilters,
				setSportsCoachSearchFilters,
				sportsCoachClearFilters,
				setSportsCoachClearFilters,
				budgetValue,
				appointmentChecked,
				setAppointmentChecked,
				fetchMoreData,
				hasMore,
				setHasMore,
				sportsCoachResetFilters,
				sportsCoachLimit,
				setSportsCoachLimit,
				sportsCoachOffset,
				setSportsCoachOffset,
				custUuid,
				sportsCoachProfileSearch,
			}}>
			{children}
		</SportsContextApi.Provider>
	)
}

export default SportsContextApi
