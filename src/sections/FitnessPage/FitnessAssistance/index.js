import {makeStyles} from '@material-ui/core'
import SpecialstTrainee from '../../../model/SpecialistCoachData/data'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import React, {useState, useEffect} from 'react'
import FitnessAssistanceApi from '../../../../Service/LandingPage/Fitness/FitnessAssistance'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useFitnessContext from '../../../../lib/Utils/hooks/useFitnessContext'
import appointmentModeList from '../../../model/AppointementModeFilter'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function FitnessAssistance() {
	const classes = useStyles()
	const router = useRouter()
	const {loading, setLoading, setSearchKey, searchGroup} = useContextApi()
	const {setOffset, setHasMore, setTrainerSearchFilters, trainerSearchFilters} = useFitnessContext()
	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = trainerSearchFilters

	const [params, setParams] = useState({
		mastTentGroupUuid: 'e7z11j8m',
		mastTentTypename: 'Home Service',
		mastRoleName: 'Trainer',
	})
	const [assistList, setAssistList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setAssistList(res?.data?.data)
				setLoading(false)
			} else {
				setAssistList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		FitnessAssistanceApi.FitnessAssistance({...params}).then(onSuccess, onFailure)
	}, [])

	// fitness Trainers Profile List
	const handleTrainersSearch = (e, specialityName) => {
		setOffset(1)
		setHasMore(true)
		setSearchKey(specialityName)
		setTrainerSearchFilters({
			...trainerSearchFilters,
			sortByIndex: 0,
			sortByFilter: '',
			budgetFilter: null,
			appointmentMode: appointmentModeList?.[2]?.value || '',
			availabilityFilter: 'all',
			genderFilter: '',
			locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
			distanceFilter: null,
		})
		router.push(searchGroup?.fitnessLink)
	}

	return (
		<>
			<HeadingWithSubheading
				heading='Fitness assistance at your '
				boldText='Home'
				subheading='Find expert trainers at your door step.'
				textColor='#0095EB'
			/>
			<PersonalisedTrainerMasterCard
				cardData={assistList.slice(0, 5)}
				loading={loading}
				btnContent='Find Trainers'
				btnColor={classes.findMorebtn}
				textColor='#0095EB'
				onClick={handleTrainersSearch}
			/>
		</>
	)
}
