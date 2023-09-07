import {makeStyles} from '@material-ui/core'
import FitenessCoach from '../../../model/CoachAppoinmentCardDetails/data'
import SpecialisedPersonCard from '../../../components/SpecialisedPersonCard'
import HeadingWithButton from '../../../components/HeadingWithButton'
import {useRouter} from 'next/router'
import appointmentModeList from '../../../model/AppointementModeFilter'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useFitnessContext from '../../../../lib/Utils/hooks/useFitnessContext'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function InstantAppointmentDoctors() {
	const classes = useStyles()
	const router = useRouter()
	const {setSearchKey, searchGroup} = useContextApi()
	const {fitnessProfileSearch, setOffset, setHasMore, setTrainerSearchFilters, trainerSearchFilters, offset, limit, custUuid} = useFitnessContext()

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
	const searchAllTrainers = () => {
		setSearchKey('')
		setOffset(1)
		setHasMore(true)
		let searchKey = ''
		// fitnessProfileSearch(searchKey)
	}

	const handleTrainerSearch = async id => {
		if (id === 1) {
			setSearchKey('')
			setOffset(1)
			setHasMore(true)
			await setTrainerSearchFilters({
				...trainerSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: 5,
			})
			router.push(searchGroup?.fitnessLink)
		} else if (id === 2) {
			setSearchKey('')
			setOffset(1)
			setHasMore(true)
			await setTrainerSearchFilters({
				...trainerSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: appointmentModeList?.[0]?.value || '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: null,
			})
			router.push(searchGroup?.fitnessLink)
		} else if (id === 3) {
			setSearchKey('')
			setOffset(1)
			setHasMore(true)
			await setTrainerSearchFilters({
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
		} else if (id === 4) {
		}
	}

	return (
		<>
			<HeadingWithButton
				heading='Enroll Your '
				boldText='Trainer'
				textColor='#0095EB'
				btnColor={classes.findMorebtn}
				btnContent='All Trainers'
				btnLink='/fitness/trainerProfile'
				onClick={searchAllTrainers}
			/>
			<SpecialisedPersonCard onClick={handleTrainerSearch} CardData={FitenessCoach} btnColor={classes.findMorebtn} />
		</>
	)
}
