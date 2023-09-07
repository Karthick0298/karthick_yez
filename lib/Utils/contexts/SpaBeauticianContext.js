import React, {createContext, useState, useCallback, useEffect} from 'react'
import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import useContextApi from '../hooks/useContextApi'
import {useRouter} from 'next/router'
import appointmentModeList from '../../../src/model/AppointementModeFilter'

const SpaBeauticianContextApi = createContext()

export const SpaBeauticianContextProvider = ({children}) => {
	const router = useRouter()
	const {searchKey, loading, setLoading, currentLocation, searchGroup, setEnableMobileSearch} = useContextApi()
	const {spaGroup, spaBeauticianGroup} = searchGroup
	const [spaBeauticianSearchData, setSpaBeauticianSearchData] = useState([])
	const [spaBeauticianSearchFilters, setSpaBeauticianSearchFilters] = useState({
		sortByFilter: '',
		sortByIndex: 0,
		budgetFilter: null,
		appointmentMode: '',
		availabilityFilter: 'all',
		genderFilter: '',
		locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
		distanceFilter: null,
	})
	const [spaBeauticianClearFilters, setSpaBeauticianClearFilters] = useState(false)

	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = spaBeauticianSearchFilters

	// Filter value State
	const [budgetValue, setBudgetValue] = useState({defaultValue: 150, min: 0, max: 500, step: 50})
	const [appointmentChecked, setAppointmentChecked] = useState(new Array(appointmentModeList?.length).fill(false))

	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : ''
	const [searchDataCount, setSearchDataCount] = useState(0)
	const [spaBeauticianOffset, setSpaBeauticianOffset] = useState(1)
	const [spaBeauticianLimit, setSpaBeauticianLimit] = useState(30)
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
			setSpaBeauticianSearchData(prevState => [...prevState, ...data])
		} else {
			setSpaBeauticianSearchData(data)
		}
	}

	// Spa Beautician Profile List
	const spaBeauticianProfileSearch = (searchKeys, offset) => {
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
			pageItem: spaBeauticianLimit,
			mastTentGroupUuid: spaGroup,
			mastRoleUuid: spaBeauticianGroup,
			custUuid: custUuid || '',
		}
		setSpaBeauticianSearchData([])
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				const data = res?.data?.data
				getSearchData(data)
				setSearchDataCount(res?.data?.pageItemCount)
				setTotalSearchCount(res?.data?.totalCount)
				setEnableMobileSearch(false)
			} else {
				setSpaBeauticianSearchData([])
				setSearchDataCount(0)
				setTotalSearchCount(0)
				setLoading(false)
				setEnableMobileSearch(false)
			}
		}
		const onFailure = err => {
			console.log('Care Search profile list', err)
			setLoading(false)
			setEnableMobileSearch(false)
		}
		searchListProfileApi.searchProfileList(data).then(onSuccess, onFailure)
	}
	useEffect(() => {
		spaBeauticianProfileSearch(searchKey?.suggestionKey, spaBeauticianOffset)
	}, [sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter, spaBeauticianOffset])

	// Fetching More Search Data
	// Lazy Loading
	const fetchMoreData = async () => {
		setTimeout(() => {
			const totalDataReached = spaBeauticianSearchData?.length === totalSearchCount
			if (totalDataReached) {
				setHasMore(false)
			} else {
				setHasMore(true)
				setSpaBeauticianOffset(spaBeauticianOffset + 1)
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
			setSpaBeauticianClearFilters(false)
		} else {
			setSpaBeauticianClearFilters(true)
		}
	}, [sortByIndex, sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter])

	// Reset Search Filters
	const spaBeauticianResetFilters = () => {
		setSpaBeauticianSearchFilters({
			...spaBeauticianSearchFilters,
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
		<SpaBeauticianContextApi.Provider
			value={{
				spaBeauticianSearchData,
				setSpaBeauticianSearchData,
				setSearchDataCount,
				setTotalSearchCount,
				getSearchData,
				searchDataCount,
				spaBeauticianSearchFilters,
				setSpaBeauticianSearchFilters,
				spaBeauticianClearFilters,
				setSpaBeauticianClearFilters,
				budgetValue,
				appointmentChecked,
				setAppointmentChecked,
				fetchMoreData,
				hasMore,
				setHasMore,
				spaBeauticianResetFilters,
				spaBeauticianLimit,
				setSpaBeauticianLimit,
				spaBeauticianOffset,
				setSpaBeauticianOffset,
				custUuid,
				spaBeauticianProfileSearch,
			}}>
			{children}
		</SpaBeauticianContextApi.Provider>
	)
}

export default SpaBeauticianContextApi
