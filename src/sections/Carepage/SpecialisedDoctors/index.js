import React, {useState, useEffect} from 'react'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import Doctorspecialist from '../../../model/Doctorspecialist/data'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useCareContext from '../../../../lib/Utils/hooks/useCareContext'
import DoctorInpersonApi from '../../../../Service/LandingPage/Care/DoctorInsperson'
import appointmentModeList from '../../../model/AppointementModeFilter'
import sortByOptions from '../../../model/SearchSortBy'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function SpecialisedDoctors() {
	const classes = useStyles()
	const router = useRouter()
	const {loading, setLoading, setSearchKey, searchGroup} = useContextApi()
	const {setDoctorOffset, setHasMore, setDoctorLimit, setDoctorSearchFilters, doctorSearchFilters} = useCareContext()
	const [list, setList] = useState([])
	// const sortedList = list.slice(0, size)

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setList(res?.data?.data)
				setLoading(false)
			} else {
				setList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		DoctorInpersonApi.DoctorInperson().then(onSuccess, onFailure)
	}, [])

	// Care Doctor Profile List
	const handleDoctorSearch = async (e, specialityName) => {
		await setSearchKey(specialityName)
		await setDoctorOffset(1)
		await setDoctorLimit(30)
		await setHasMore(true)
		await setDoctorSearchFilters({
			...doctorSearchFilters,
			sortByIndex: 4,
			sortByFilter: sortByOptions?.[4]?.value,
			budgetFilter: null,
			appointmentMode: appointmentModeList?.[1]?.value,
			availabilityFilter: 'all',
			genderFilter: '',
			locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
			distanceFilter: null,
		})
		router.push(searchGroup?.careDoctorLink)
	}

	return (
		<>
			<HeadingWithSubheading
				heading='25+ Specialised Doctors - '
				boldText='In-person'
				subheading='Find experienced doctors across all platform'
				textColor='#7047EA'
			/>
			<PersonalisedTrainerMasterCard
				cardData={list?.slice(0, 5)}
				loading={loading}
				btnContent='Find More'
				btnColor={classes.findMorebtn}
				textColor='#7047EA'
				onClick={handleDoctorSearch}
			/>
		</>
	)
}
