import HeadingWithButton from '../../../components/HeadingWithButton'
import {makeStyles} from '@material-ui/core'
import SpecialisedPersonCard from '../../../components/SpecialisedPersonCard'
import EnrollSportsCoachesCardDetails from '../../../model/EnrollSportsCoachesCardDetails/data'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useSportsContext from '../../../../lib/Utils/hooks/useSportsContext'
import useSearchContext from '../../../../lib/Utils/hooks/useSearchContext'
import appointmentModeList from '../../../model/AppointementModeFilter'
import DistanceList from '../../../model/DistanceList'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function EnrollCoach() {
	const classes = useStyles()
	const router = useRouter()
	const {handleSportsCoachSearch} = useSearchContext()
	const {setSearchKey, searchGroup} = useContextApi()
	const {
		setHasMore,
		sportsCoachResetFilters,
		sportsCoachSearchFilters,
		setSportsCoachSearchFilters,
		sportsCoachClearFilters,
		setSportsCoachOffset,
		setSportsCoachLimit,
		custUuid,
		sportsCoachProfileSearch,
	} = useSportsContext()

	const {
		sortByFilter,
		sortByIndex,
		budgetFilter,
		appointmentMode,
		availabilityFilter,
		genderFilter,
		locationFilter,
		distanceFilter,
	} = sportsCoachSearchFilters

	const SearchAllCoaches = async () => {
		await setSearchKey('')
		await setSportsCoachOffset(1)
		await setSportsCoachLimit(30)
		await setHasMore(true)
		let searchKey = ''
		let offset = 1
		await handleSportsCoachSearch(searchKey, offset)
		router.push(searchGroup?.sportsCoachLink)
	}

	const coachSearch = async id => {
		if (id === 1) {
			await setSearchKey('')
			await setSportsCoachOffset(1)
			await setSportsCoachLimit(30)
			await setHasMore(true)
			await setSportsCoachSearchFilters({
				...sportsCoachSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: DistanceList?.[0]?.value || null,
			})
			router.push(searchGroup?.sportsCoachLink)
		} else if (id === 2) {
			await setSearchKey('')
			await setSportsCoachOffset(1)
			await setSportsCoachLimit(30)
			await setHasMore(true)
			await setSportsCoachSearchFilters({
				...sportsCoachSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: appointmentModeList?.[0]?.value || '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: null,
			})
			router.push(searchGroup?.sportsCoachLink)
		} else if (id === 3) {
			await setSearchKey('')
			await setSportsCoachOffset(1)
			await setSportsCoachLimit(30)
			await setHasMore(true)
			await setSportsCoachSearchFilters({
				...sportsCoachSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: appointmentModeList?.[2]?.value || '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: null,
			})
			router.push(searchGroup?.sportsCoachLink)
		} else if (id === 4) {
		}
	}


	return (
		<>
			<HeadingWithButton
				heading='Enroll your '
				boldText='Coach'
				textColor='#EF5618'
				btnColor={classes.findMorebtn}
				btnContent='All Coaches'
				btnLink='/sports/coachProfile'
				onClick={SearchAllCoaches}
			/>
			<SpecialisedPersonCard onClick={coachSearch} CardData={EnrollSportsCoachesCardDetails} btnColor={classes.findMorebtn} />
		</>
	)
}
