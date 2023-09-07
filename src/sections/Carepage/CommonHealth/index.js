import React, {useState, useEffect} from 'react'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import {makeStyles} from '@material-ui/core'
import OnlineCare from '../../../model/OnlineCare/data'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useCareContext from '../../../../lib/Utils/hooks/useCareContext'
import HealthSymptomsApi from '../../../../Service/LandingPage/Care/HealthSymptoms'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function CommonHealth() {
	const classes = useStyles()
	const router = useRouter()
	const {loading, setLoading, setSearchKey, searchGroup} = useContextApi()
	// const {careProfileSearch, setOffset, setHasMore, setSearchFilters, searchFilters} = useCareContext()
	const [healthSymptomsList, setHealthSymptomsList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setHealthSymptomsList(res?.data?.data)
				setLoading(false)
			} else {
				setHealthSymptomsList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		HealthSymptomsApi.HealthSymptoms().then(onSuccess, onFailure)
	}, [])

	// const handleDoctorSearch = (e, subscriptionName, feesRange) => {
	// 	setOffset(1)
	// 	setHasMore(true)
	// 	setSearchKey(subscriptionName)
	// 	setSearchFilters({
	// 		...searchFilters,
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
	console.log('healthSymptomsList', healthSymptomsList)

	return (
		<>
			<HeadingWithSubheading
				heading='Common Health - '
				boldText='Symptoms'
				subheading='Consult with Top Doctors Across Specialist Through Video/ Audio call'
				textColor='#7047EA'
			/>
			<ExploreCentresCardContainer
				btnColor={classes.findMorebtn}
				btnContent='Find More'
				cardData={healthSymptomsList.slice(0, 5)}
				priceTagColor='#7047EA'
				loading={loading}
				// onClick={handleDoctorSearch}
			/>
		</>
	)
}
