import React, {createContext, useState, useCallback, useEffect} from 'react'
import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import useContextApi from '../hooks/useContextApi'
import appointmentModeList from '../../../src/model/AppointementModeFilter'

const SpaTherapistContextApi = createContext()

export const SpaTherapistContextProvider = ({children}) => {
	const {searchKey, loading, setLoading, currentLocation, searchGroup, setEnableMobileSearch} = useContextApi()
	const {spaGroup, spaTherapistGroup} = searchGroup
	const [spaTherapistSearchData, setSpaTherapistSearchData] = useState([])
	const [spaTherapistSearchFilters, setSpaTherapistSearchFilters] = useState({
		sortByFilter: '',
		sortByIndex: 0,
		budgetFilter: null,
		appointmentMode: '',
		availabilityFilter: 'all',
		genderFilter: '',
		locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
		distanceFilter: null,
	})
	const [spaTherapistClearFilters, setSpaTherapistClearFilters] = useState(false)
	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = spaTherapistSearchFilters

	// Filter value State
	const [budgetValue, setBudgetValue] = useState({defaultValue: 150, min: 0, max: 500, step: 50})
	const [appointmentChecked, setAppointmentChecked] = useState(new Array(appointmentModeList?.length).fill(false))

	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : ''
	const [searchDataCount, setSearchDataCount] = useState(0)
	const [spaTherapistOffset, setSpaTherapistOffset] = useState(1)
	const [spaTherapistLimit, setSpaTherapistLimit] = useState(30)
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
			setSpaTherapistSearchData(prevState => [...prevState, ...data])
		} else {
			setSpaTherapistSearchData(data)
		}
	}

	// Spa Therapist Profile List
	const spaTherapistProfileSearch = (searchKeys, offset) => {
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
			pageItem: spaTherapistLimit,
			mastTentGroupUuid: spaGroup,
			mastRoleUuid: spaTherapistGroup,
			custUuid: custUuid || '',
		}
		setSpaTherapistSearchData([])
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				const data = res?.data?.data
				getSearchData(data)
				setSearchDataCount(res?.data?.pageItemCount)
				setTotalSearchCount(res?.data?.totalCount)
				setEnableMobileSearch(false)
			} else {
				setSpaTherapistSearchData([])
				setSearchDataCount(0)
				setTotalSearchCount(0)
				setLoading(false)
				setEnableMobileSearch(false)
			}
		}
		const onFailure = err => {
			console.log('Spa Search profile list', err)
			setLoading(false)
			setEnableMobileSearch(false)
		}
		searchListProfileApi.searchProfileList(data).then(onSuccess, onFailure)
	}
	useEffect(() => {
		spaTherapistProfileSearch(searchKey?.suggestionKey, spaTherapistOffset)
	}, [sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter, spaTherapistOffset])

	// Fetching More Search Data
	// Lazy Loading
	const fetchMoreData = async () => {
		setTimeout(() => {
			const totalDataReached = spaTherapistSearchData?.length === totalSearchCount
			if (totalDataReached) {
				setHasMore(false)
			} else {
				setHasMore(true)
				setSpaTherapistOffset(spaTherapistOffset + 1)
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
			setSpaTherapistClearFilters(false)
		} else {
			setSpaTherapistClearFilters(true)
		}
	}, [sortByIndex, sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter])

	// Reset Search Filters
	const spaTherapistResetFilters = () => {
		setSpaTherapistSearchFilters({
			...spaTherapistSearchFilters,
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
		<SpaTherapistContextApi.Provider
			value={{
				spaTherapistSearchData,
				setSpaTherapistSearchData,
				setSearchDataCount,
				setTotalSearchCount,
				getSearchData,
				searchDataCount,
				spaTherapistSearchFilters,
				setSpaTherapistSearchFilters,
				spaTherapistClearFilters,
				setSpaTherapistClearFilters,
				budgetValue,
				appointmentChecked,
				setAppointmentChecked,
				fetchMoreData,
				hasMore,
				setHasMore,
				spaTherapistResetFilters,
				spaTherapistLimit,
				setSpaTherapistLimit,
				spaTherapistOffset,
				setSpaTherapistOffset,
				custUuid,
				spaTherapistProfileSearch,
			}}>
			{children}
		</SpaTherapistContextApi.Provider>
	)
}

export default SpaTherapistContextApi
