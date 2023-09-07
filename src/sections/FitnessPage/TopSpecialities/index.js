import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core'
import SpecialstTrainee from '../../../model/SpecialistCoachData/data'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import TopOnlineConsultationApi from '../../../../Service/LandingPage/Fitness/TopOnlineConsultation'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
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
				boldText='Online consultations'
				subheading='Find top rated trainers online'
				textColor='#2CB0F7'
			/>

			<PersonalisedTrainerMasterCard
				cardData={topConsultList.slice(0, 5)}
				loading={loading}
				btnContent='Find More'
				btnColor={classes.findMorebtn}
				textColor='#0693EA'
				priceTagColor='#0693EA'
			/>
		</>
	)
}
