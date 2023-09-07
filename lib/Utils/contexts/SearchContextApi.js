import React, {createContext, useState, useCallback, useEffect} from 'react'
import searchListProfileApi from '../../../Service/ProfileList/SearchProfileList'
import useContextApi from '../hooks/useContextApi'
import useCareContext from '../hooks/useCareContext'
import useFitnessContext from '../hooks/useFitnessContext'
import useMindMasterContext from '../hooks/useMindMasterContext'
import useMindTherapistContext from '../hooks/useMindTherapistContext'
import useSpaBeauticianContext from '../hooks/useSpaBeauticianContext'
import useSpaTherapistContext from '../hooks/useSpaTherapistContext'
import useSportsContext from '../hooks/useSportsContext'
import {useRouter} from 'next/router'

const SearchContextApi = createContext()

export const SearchContextProvider = ({children}) => {
	const router = useRouter()
	const {searchKey, setSearchKey, searchProfileRole, searchGroup} = useContextApi()
	const {group, role} = searchProfileRole
	const {
		careGroup,
		careLink,
		careDoctorGroup,
		careDoctorLink,
		fitnessGroup,
		fitnessLink,
		fitnessTrainerGroup,
		fitnessTrainerLink,
		mindGroup,
		mindLink,
		mindMasterGroup,
		mindMasterLink,
		mindTherapistGroup,
		mindTherapistLink,
		spaGroup,
		spaLink,
		spaBeauticianGroup,
		spaBeauticianLink,
		spaTherapistGroup,
		spaTherapistLink,
		sportsGroup,
		sportsLink,
		sportsCoachGroup,
		sportsCoachLink,
	} = searchGroup

	const {setDoctorOffset, setDoctorLimit, doctorClearFilters, doctorProfileSearch, doctorResetFilters} = useCareContext()
	const {setTrainerOffset, setTrainerLimit, trainerClearFilters, trainerResetFilters, fitnessTrainerProfileSearch} = useFitnessContext()
	const {setMindMasterOffset, setMindMasterLimit, mindMasterClearFilters, mindMasterResetFilters, mindMasterProfileSearch} = useMindMasterContext()
	const {
		setMindTherapistOffset,
		setMindTherapistLimit,
		mindTherapistClearFilters,
		mindTherapistResetFilters,
		mindTherapistProfileSearch,
	} = useMindTherapistContext()
	const {
		setSpaBeauticianOffset,
		setSpaBeauticianLimit,
		spaBeauticianClearFilters,
		spaBeauticianResetFilters,
		spaBeauticianProfileSearch,
	} = useSpaBeauticianContext()
	const {
		setSpaTherapistOffset,
		setSpaTherapistLimit,
		spaTherapistClearFilters,
		spaTherapistResetFilters,
		spaTherapistProfileSearch,
	} = useSpaTherapistContext()
	const {setSportsCoachOffset, setSportsCoachLimit, sportsCoachClearFilters, sportsCoachResetFilters, sportsCoachProfileSearch} = useSportsContext()

	//care doctor profile search
	const handleDoctorSearch = (searchKeys, offset) => {
		if (doctorClearFilters) {
			return doctorResetFilters()
		} else {
			return doctorProfileSearch(searchKeys, offset)
		}
	}

	// fitness trainer profile search
	const handleFitnessTrainerSearch = (searchKeys, offset) => {
		if (trainerClearFilters) {
			return trainerResetFilters()
		} else {
			return fitnessTrainerProfileSearch(searchKeys, offset)
		}
	}

	// mind master profile search
	const handleMindMasterSearch = (searchKeys, offset) => {
		if (mindMasterClearFilters) {
			return mindMasterResetFilters()
		} else {
			return mindMasterProfileSearch(searchKeys, offset)
		}
	}

	// mind therapist profile search
	const handleMindTherapistSearch = (searchKeys, offset) => {
		if (mindTherapistClearFilters) {
			return mindTherapistResetFilters()
		} else {
			return mindTherapistProfileSearch(searchKeys, offset)
		}
	}

	// spa beautician profile search
	const handleSpaBeauticianSearch = (searchKeys, offset) => {
		if (spaBeauticianClearFilters) {
			return spaBeauticianResetFilters()
		} else {
			return spaBeauticianProfileSearch(searchKeys, offset)
		}
	}

	// spa therapist profile search
	const handleSpaTherapistSearch = (searchKeys, offset) => {
		if (spaTherapistClearFilters) {
			return spaTherapistResetFilters()
		} else {
			return spaTherapistProfileSearch(searchKeys, offset)
		}
	}

	// sports coach profile search
	const handleSportsCoachSearch = (searchKeys, offset) => {
		if (sportsCoachClearFilters) {
			return sportsCoachResetFilters()
		} else {
			return sportsCoachProfileSearch(searchKeys, offset)
		}
	}

	// Search Navigate on onClick
	const handleSearch = async () => {
		const offset = 1
		if (searchKey) {
			if (group === careGroup && role === careDoctorGroup) {
				await setSearchKey(searchKey)
				await setDoctorOffset(1)
				await setDoctorLimit(30)
				await handleDoctorSearch(searchKey?.suggestionKey, offset)
				router.push(careDoctorLink)
			} else if (group === fitnessGroup && role === fitnessTrainerGroup) {
				await setSearchKey(searchKey)
				await setTrainerOffset(1)
				await setTrainerLimit(30)
				await handleFitnessTrainerSearch(searchKey?.suggestionKey, offset)
				router.push(fitnessTrainerLink)
			} else if (group === mindGroup && role === mindMasterGroup) {
				await setSearchKey(searchKey)
				await setMindMasterOffset(1)
				await setMindMasterLimit(30)
				await handleMindMasterSearch(searchKey?.suggestionKey, offset)
				router.push(mindMasterLink)
			} else if (group === mindGroup && role === mindTherapistGroup) {
				await setSearchKey(searchKey)
				await setMindTherapistOffset(1)
				await setMindTherapistLimit(30)
				await handleMindTherapistSearch(searchKey?.suggestionKey, offset)
				router.push(mindTherapistLink)
			} else if (group === spaGroup && role === spaBeauticianGroup) {
				await setSearchKey(searchKey)
				await setSpaBeauticianOffset(1)
				await setSpaBeauticianLimit(30)
				await handleSpaBeauticianSearch(searchKey?.suggestionKey, offset)
				router.push(spaBeauticianLink)
			} else if (group === spaGroup && role === spaTherapistGroup) {
				await setSearchKey(searchKey)
				await setSpaTherapistOffset(1)
				await setSpaTherapistLimit(30)
				await handleSpaTherapistSearch(searchKey?.suggestionKey, offset)
				router.push(spaTherapistLink)
			} else if (group === sportsGroup && role === sportsCoachGroup) {
				await setSearchKey(searchKey)
				await setSportsCoachOffset(1)
				await setSportsCoachLimit(30)
				await handleSportsCoachSearch(searchKey?.suggestionKey, offset)
				router.push(sportsCoachLink)
			}
		}
	}
	return (
		<SearchContextApi.Provider
			value={{
				handleSearch,
				handleDoctorSearch,
				handleSportsCoachSearch,
			}}>
			{children}
		</SearchContextApi.Provider>
	)
}

export default SearchContextApi
