import {makeStyles} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import CareOnlineConsultCardDetails from '../../../model/CareOnlineConsultCardDetails/data'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useCareContext from '../../../../lib/Utils/hooks/useCareContext'
import TopOnlineConsultationApi from '../../../../Service/LandingPage/Care/TopOnlineConsultation'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function TopSpecialities() {
	const classes = useStyles()
	const router = useRouter()
	const {loading, setLoading, setSearchKey, searchGroup} = useContextApi()
	// const {setOffset, setHasMore, setDoctorSearchFilters, doctorSearchFilters} = useCareContext()
	// const {
	// 	sortByFilter,
	// 	sortByIndex,
	// 	budgetFilter,
	// 	appointmentMode,
	// 	availabilityFilter,
	// 	genderFilter,
	// 	locationFilter,
	// 	distanceFilter,
	// } = doctorSearchFilters
	const [topConsultList, setTopConsultList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setTopConsultList(res?.data?.data)
				setLoading(false)
			} else {
				setTopConsultList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		TopOnlineConsultationApi.TopOnlineConsultation().then(onSuccess, onFailure)
	}, [])

	// Care Doctor Profile List
	// const handleDoctorSearch = (e, specialityName, subscriptionName, feesRange) => {
	// 	setOffset(1)
	// 	setHasMore(true)
	// 	setSearchKey(subscriptionName)
	// 	setDoctorSearchFilters({
	// 		...doctorSearchFilters,
	// 		sortByIndex: 0,
	// 		sortByFilter: '',
	// 		budgetFilter: feesRange,
	// 		appointmentMode: '',
	// 		availabilityFilter: 'all',
	// 		genderFilter: '',
	// 		locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
	// 		distanceFilter: null,
	// 	})
	// 	router.push(searchGroup?.careLink)
	// }

	return (
		<>
			<HeadingWithSubheading
				heading='Top Specialities for - '
				boldText='Online Consultations'
				subheading='Consult with Top Doctors Across Specialist Through Video/ Audio call'
				textColor='#7047EA'
			/>
			<PersonalisedTrainerMasterCard
				loading={loading}
				cardData={topConsultList.slice(0, 5)}
				btnContent='Find More'
				btnColor={classes.findMorebtn}
				textColor='#7047EA'
				priceTagColor='#7047EA'
				// onClick={handleDoctorSearch}
			/>
		</>
	)
}
