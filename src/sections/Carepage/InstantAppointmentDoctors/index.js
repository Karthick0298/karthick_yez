import HeadingWithButton from '../../../components/HeadingWithButton'
import {makeStyles} from '@material-ui/core'
import SpecialisedPersonCard from '../../../components/SpecialisedPersonCard'
import AppoinmentImage from '../../../model/DoctorAppoinmentCardDetails/data'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import useCareContext from '../../../../lib/Utils/hooks/useCareContext'
import useSearchContext from '../../../../lib/Utils/hooks/useSearchContext'
import appointmentModeList from '../../../model/AppointementModeFilter'
import DistanceList from '../../../model/DistanceList'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function InstantAppointmentDoctors() {
	const classes = useStyles()
	const router = useRouter()
	const {handleDoctorSearch} = useSearchContext()
	const {setSearchKey, searchGroup} = useContextApi()
	const {
		setHasMore,
		doctorResetFilters,
		doctorSearchFilters,
		setDoctorSearchFilters,
		doctorClearFilters,
		setDoctorOffset,
		setDoctorLimit,
		custUuid,
		doctorProfileSearch,
	} = useCareContext()

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

	const SearchAllDoctors = async () => {
		await setSearchKey('')
		await setDoctorOffset(1)
		await setDoctorLimit(30)
		await setHasMore(true)
		let searchKey = ''
		let offset = 1
		await handleDoctorSearch(searchKey, offset)
		router.push(searchGroup?.careDoctorLink)
	}

	const doctorSearch = async id => {
		if (id === 1) {
			await setSearchKey('')
			await setDoctorOffset(1)
			await setDoctorLimit(30)
			await setHasMore(true)
			await setDoctorSearchFilters({
				...doctorSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: DistanceList?.[0]?.value || null,
			})
			router.push(searchGroup?.careDoctorLink)
		} else if (id === 2) {
			await setSearchKey('')
			await setDoctorOffset(1)
			await setDoctorLimit(30)
			await setHasMore(true)
			await setDoctorSearchFilters({
				...doctorSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: appointmentModeList?.[0]?.value || '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: null,
			})
			router.push(searchGroup?.careDoctorLink)
		} else if (id === 3) {
			await setSearchKey('')
			await setDoctorOffset(1)
			await setDoctorLimit(30)
			await setHasMore(true)
			await setDoctorSearchFilters({
				...doctorSearchFilters,
				sortByIndex: 0,
				sortByFilter: '',
				budgetFilter: null,
				appointmentMode: appointmentModeList?.[2]?.value || '',
				availabilityFilter: 'all',
				genderFilter: '',
				locationFilter: `${11.018888988757334}${','}${77.00694826760964}`,
				distanceFilter: null,
			})
			router.push(searchGroup?.careDoctorLink)
		} else if (id === 4) {
		}
	}

	return (
		<>
			<HeadingWithButton
				heading='Instant Appointment with '
				boldText='Doctors'
				textColor='#7047EA'
				btnColor={classes.findMorebtn}
				btnContent='All Doctors'
				btnLink='/care/doctorprofile1'
				onClick={SearchAllDoctors}
			/>
			<SpecialisedPersonCard onClick={doctorSearch} CardData={AppoinmentImage} btnColor={classes.findMorebtn} />
		</>
	)
}
