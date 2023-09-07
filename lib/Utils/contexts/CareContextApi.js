import router from 'next/router'
import React, {createContext, useState, useCallback, useEffect} from 'react'
import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import useContextApi from '../hooks/useContextApi'
import appointmentModeList from '../../../src/model/AppointementModeFilter'

const CareContextApi = createContext()

export const CareContextProvider = ({children}) => {
	const {searchKey, loading, setLoading, currentLocation, searchGroup, setEnableMobileSearch} = useContextApi()
	const {careGroup, careDoctorGroup} = searchGroup
	const [doctorSearchData, setDoctorSearchData] = useState([])
	const [doctorSearchFilters, setDoctorSearchFilters] = useState({
		sortByFilter: '',
		sortByIndex: 0,
		budgetFilter: null,
		appointmentMode: '',
		availabilityFilter: 'all',
		genderFilter: '',
		locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
		distanceFilter: null,
	})
	const [doctorClearFilters, setDoctorClearFilters] = useState(false)
	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = doctorSearchFilters

	// Filter value State
	const [budgetValue, setBudgetValue] = useState({defaultValue: 150, min: 0, max: 500, step: 50})
	const [appointmentChecked, setAppointmentChecked] = useState(new Array(appointmentModeList?.length).fill(false))

	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : ''
	const [searchDataCount, setSearchDataCount] = useState(0)
	const [doctorOffset, setDoctorOffset] = useState(1)
	const [doctorLimit, setDoctorLimit] = useState(30)
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
			setDoctorSearchData(prevState => [...prevState, ...data])
		} else {
			setDoctorSearchData(data)
		}
	}

	// Care Doctor Profile List
	const doctorProfileSearch = (searchKeys, offset) => {
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
			pageItem: doctorLimit,
			mastTentGroupUuid: careGroup,
			mastRoleUuid: careDoctorGroup,
			custUuid: custUuid || '',
		}
		setDoctorSearchData([])
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				const data = res?.data?.data
				getSearchData(data)
				setSearchDataCount(res?.data?.pageItemCount)
				setTotalSearchCount(res?.data?.totalCount)
				setEnableMobileSearch(false)
			} else {
				setDoctorSearchData([])
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
		doctorProfileSearch(searchKey?.suggestionKey, doctorOffset)
	}, [sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter, doctorOffset])

	// Fetching More Search Data
	// Lazy Loading
	const fetchMoreData = async () => {
		setTimeout(() => {
			const totalDataReached = doctorSearchData?.length === totalSearchCount
			if (totalDataReached) {
				setHasMore(false)
			} else {
				setHasMore(true)
				setDoctorOffset(doctorOffset + 1)
			}
		}, 1000)
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
			setDoctorClearFilters(false)
		} else {
			setDoctorClearFilters(true)
		}
	}, [sortByIndex, sortByFilter, budgetFilter, appointmentMode, availabilityFilter, genderFilter, locationFilter, distanceFilter])

	// Reset Search Filters
	const doctorResetFilters = () => {
		setDoctorSearchFilters({
			...doctorSearchFilters,
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
		<CareContextApi.Provider
			value={{
				doctorSearchData,
				setDoctorSearchData,
				setSearchDataCount,
				setTotalSearchCount,
				getSearchData,
				searchDataCount,
				doctorSearchFilters,
				setDoctorSearchFilters,
				doctorClearFilters,
				setDoctorClearFilters,
				budgetValue,
				appointmentChecked,
				setAppointmentChecked,
				fetchMoreData,
				hasMore,
				setHasMore,
				doctorResetFilters,
				doctorLimit,
				setDoctorLimit,
				doctorOffset,
				setDoctorOffset,
				custUuid,
				doctorProfileSearch,
			}}>
			{children}
		</CareContextApi.Provider>
	)
}

export default CareContextApi
