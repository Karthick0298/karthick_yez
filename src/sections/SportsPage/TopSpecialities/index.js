import React, {useState, useEffect} from 'react'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import TopOnlineConsultationApi from '../../../../Service/LandingPage/Sports/TopOnlineConsultation'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import SportsCoachAssistanceHomeCardDetails from '../../../model/SportsCoachAssistanceHomeCardDetails/data'
import {makeStyles} from '@material-ui/core'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
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
				subheading='Consult with Top Coaches Across Specialist Through Video/ Audio call'
				textColor='#EF5618'
			/>

			<PersonalisedTrainerMasterCard
				loading={loading}
				cardData={topConsultList.slice(0, 5)}
				btnContent='Find Coaches'
				btnColor={classes.findMorebtn}
				textColor='#EF5618'
				priceTagColor='#EF5618'
			/>
		</>
	)
}
