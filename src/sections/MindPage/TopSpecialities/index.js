import React, {useState, useEffect} from 'react'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import TopOnlineConsultationApi from '../../../../Service/LandingPage/Mind/TopOnlineConsultation'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import PersonalisedTrainerCardOffer from '../../../components/PersonalisedTrainerCardOffer'
import YogaTopSpecialitiesCardData from '../../../model/YogaTopSpecialitiesCardData/data'
import {makeStyles} from '@material-ui/core'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
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
				heading='Top indexes for - '
				boldText='Online Consultations'
				subheading='Consult with top Yoga Masters Across all specialties for video/ audio consultation.'
				textColor='#23CA9D'
			/>
			<PersonalisedTrainerMasterCard
				loading={loading}
				cardData={topConsultList.slice(0, 5)}
				btnContent='Find More'
				btnColor={classes.findMorebtn}
				textColor='#23CA9D'
				priceTagColor='#23CA9D'
			/>
		</>
	)
}
