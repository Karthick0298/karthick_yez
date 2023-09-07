import React, {useState, useEffect} from 'react'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import TopOnlineConsultationApi from '../../../../Service/LandingPage/Spa/TopOnlineConsultation'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import SpaPersonalisedBeauticiansCardData from '../../../model/SpaPersonalisedBeauticiansCardData/data'
import {makeStyles} from '@material-ui/core'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function TopSpecialities() {
	const classes = useStyles()
	const {loading, setLoading} = useContextApi()
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
	return (
		<>
			<HeadingWithSubheading
				heading='Top Specialities for - '
				boldText='Online Consultations'
				subheading='Consult with Top Beautician Across Specialist Through Video/ Audio call'
				textColor='#E4208A'
			/>

			<PersonalisedTrainerMasterCard
				loading={loading}
				cardData={topConsultList.slice(0, 5)}
				btnContent='Find Beautician'
				btnColor={classes.findMorebtn}
				textColor='#E4208A'
				priceTagColor='#E4208A'
			/>
		</>
	)
}
