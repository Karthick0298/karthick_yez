import PersonalisedTrainerMasterCard from '../../../../components/PersonalisedTrainerMasterCard'
import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../../components/HeadingWithSubheading'
import NurseAssistanceData from '../../../../model/NurseAssistance/data'
import React, {useState, useEffect} from 'react'
import NurseAssistApi from '../../../../../Service/LandingPage/Care/NurseAssit'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'
import useCareContext from '../../../../../lib/Utils/hooks/useCareContext'
import appointmentModeList from '../../../../model/AppointementModeFilter'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function NurseAssistance() {
	const classes = useStyles()
	const router = useRouter()
	const {loading, setLoading, setSearchKey, searchGroup, setSearchProfileRole, searchProfileRole} = useContextApi()
	const {setDoctorOffset, setHasMore, setDoctorSearchFilters, doctorSearchFilters, setDoctorLimit} = useCareContext()
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

	const [params, setParams] = useState({
		mastTentGroupUuid: 'fyi6pmtm',
		mastTentTypename: 'Home Service',
		mastRoleName: 'Nurse',
	})
	const [NurseList, setNurseList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setNurseList(res?.data?.data)
				setLoading(false)
			} else {
				setNurseList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		NurseAssistApi.NurseAssist({...params}).then(onSuccess, onFailure)
	}, [])

	// Care Nurse Profile List
	const handleNurseSearch = async (e, specialityName) => {
		await setSearchKey(specialityName)
		await setDoctorOffset(1)
		await setDoctorLimit(30)
		await setHasMore(true)
		await setSearchProfileRole({...searchProfileRole, group: searchGroup?.careGroup, role: searchGroup?.careNurseGroup})
		let searchKey = specialityName
		let offset = 1
		let roleUuid = searchGroup?.careNurseGroup
		await handleDoctorSearch(searchKey, offset, roleUuid)
		await setDoctorSearchFilters({
			...doctorSearchFilters,
			sortByIndex: 0,
			sortByFilter: '',
			budgetFilter: null,
			appointmentMode: appointmentModeList?.[2]?.value,
			availabilityFilter: 'all',
			genderFilter: '',
			locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
			distanceFilter: null,
		})
		router.push(searchGroup?.careNurseLink)
	}

	return (
		<>
			<HeadingWithSubheading
				heading='Nursing Assistance at your '
				boldText='Home'
				subheading='Home nursing procedures that reduces you need to visit hospital often'
				textColor='#7047EA'
			/>
			<PersonalisedTrainerMasterCard
				cardData={NurseList.slice(0, 5)}
				loading={loading}
				btnContent='Find More'
				btnColor={classes.findMorebtn}
				textColor='#7047EA'
				onClick={handleNurseSearch}
			/>
		</>
	)
}
