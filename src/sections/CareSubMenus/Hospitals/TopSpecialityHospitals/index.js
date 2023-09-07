import PersonalisedTrainerMasterCard from '../../../../components/PersonalisedTrainerMasterCard'
import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../../components/HeadingWithSubheading'
import Doctorspecialist from '../../../../model/Doctorspecialist/data'
import React, {useState, useEffect} from 'react'
import HospitalClinicApi from '../../../../../Service/LandingPage/Care/HospitalClinic'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'
import useCareContext from '../../../../../lib/Utils/hooks/useCareContext'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function TopSpecialityHospitals() {
	const classes = useStyles()
	const {loading, setLoading, setSearchKey} = useContextApi()
	// const {careProfileSearch, setOffset, setHasMore} = useCareContext()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'fyi6pmtm',
		mastTentTypename: 'Hospital',
	})
	const [clinicList, setClinicList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setClinicList(res?.data?.data)
				setLoading(false)
			} else {
				setClinicList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		HospitalClinicApi.HospitalClinic({...params}).then(onSuccess, onFailure)
	}, [])

	// Care Doctor Profile List
	// const handleDoctorSearch = (e, specialityName) => {
	// 	setOffset(1)
	// 	setHasMore(true)
	// 	setSearchKey(specialityName)
	// 	careProfileSearch(specialityName)
	// }

	return (
		<>
			<HeadingWithSubheading
				heading='25+ Specialised Hospitals - '
				boldText='Clinics'
				subheading='Explore Top Speciality Hospitals - Clinics in Chennai'
				textColor='#7047EA'
			/>
			<PersonalisedTrainerMasterCard
				cardData={clinicList.slice(0, 5)}
				loading={loading}
				btnContent='Find More'
				btnColor={classes.findMorebtn}
				textColor='#7047EA'
				// onClick={handleDoctorSearch}
			/>
		</>
	)
}
