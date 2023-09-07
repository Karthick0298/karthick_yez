import React, {createContext, useState, useCallback, useEffect} from 'react'
import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import useContextApi from '../hooks/useContextApi'
import {useRouter} from 'next/router'
import appointmentModeList from '../../../src/model/AppointementModeFilter'

const MindMasterContextApi = createContext()

export const MindMasterContextProvider = ({children}) => {
	const router = useRouter()
	const {searchKey, loading, setLoading, currentLocation, searchGroup, setEnableMobileSearch} = useContextApi()
	const {mindGroup, mindMasterGroup, mindMasterLink} = searchGroup
	const [mindMasterSearchData, setMindMasterSearchData] = useState([])
	const [mindMasterSearchFilters, setMindMasterSearchFilters] = useState({
		sortByFilter: '',
		sortByIndex: 0,
		budgetFilter: null,
		appointmentMode: '',
		availabilityFilter: 'all',
		genderFilter: '',
		locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
		distanceFilter: null,
	})
	const [mindMasterClearFilters, setMindMasterClearFilters] = useState(false)
	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = mindMasterSearchFilters

	// Filter value State
	const [budgetValue, setBudgetValue] = useState({defaultValue: 150, min: 0, max: 500, step: 50})
	const [appointmentChecked, setAppointmentChecked] = useState(new Array(appointmentModeList?.length).fill(false))

	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : ''
	const [searchDataCount, setSearchDataCount] = useState(0)
	const [mindMasterOffset, setMindMasterOffset] = useState(1)
	const [mindMasterLimit, setMindMasterLimit] = useState(30)
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
			setMindMasterSearchData(prevState => [...prevState, ...data])
		} else {
			setMindMasterSearchData(data)
		}
	}

	//mind master Profile List
	const mindMasterProfileSearch = (searchKeys, offset) => {
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
			pageItem: mindMasterLimit,
			mastTentGroupUuid: mindGroup,
			mastRoleUuid: mindMasterGroup,
			custUuid: custUuid || '',
		}
		setMindMasterSearchData([])
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				const data = res?.data?.data
				getSearchData(data)
				setSearchDataCount(res?.data?.pageItemCount)
				setTotalSearchCount(res?.data?.totalCount)
				setEnableMobileSearch(false)
			} else {
				setMindMasterSearchData([])
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
		mindMasterProfileSearch(searchKey?.suggestionKey, mindMasterOffset)
	}, [sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter, mindMasterOffset])

	// Fetching More Search Data
	// Lazy Loading
	const fetchMoreData = async () => {
		setTimeout(() => {
			const totalDataReached = mindMasterSearchData?.length === totalSearchCount
			if (totalDataReached) {
				setHasMore(false)
			} else {
				setHasMore(true)
				setMindMasterOffset(mindMasterOffset + 1)
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
			setMindMasterClearFilters(false)
		} else {
			setMindMasterClearFilters(true)
		}
	}, [sortByIndex, sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter])

	// Reset Search Filters
	const mindMasterResetFilters = () => {
		setMindMasterSearchFilters({
			...mindMasterSearchFilters,
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
		<MindMasterContextApi.Provider
			value={{
				mindMasterSearchData,
				setMindMasterSearchData,
				setSearchDataCount,
				setTotalSearchCount,
				getSearchData,
				searchDataCount,
				mindMasterSearchFilters,
				mindMasterClearFilters,
				setMindMasterClearFilters,
				setMindMasterSearchFilters,
				budgetValue,
				appointmentChecked,
				setAppointmentChecked,
				fetchMoreData,
				hasMore,
				setHasMore,
				mindMasterResetFilters,
				mindMasterLimit,
				setMindMasterLimit,
				mindMasterOffset,
				setMindMasterOffset,
				custUuid,
				mindMasterProfileSearch,
			}}>
			{children}
		</MindMasterContextApi.Provider>
	)
}

export default MindMasterContextApi
