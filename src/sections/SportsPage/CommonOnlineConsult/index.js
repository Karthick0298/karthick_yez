import React, {useState, useEffect} from 'react'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import SportsCommonOnlineCardDetails from '../../../model/SportsCommonOnlineCardDetails/data'
import {makeStyles} from '@material-ui/core'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import HealthSymptomsApi from '../../../../Service/LandingPage/Sports/HealthSymptoms'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function CommonOnlineConsult() {
	const classes = useStyles()
	const {loading, setLoading} = useContextApi()
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
	return (
		<>
			<HeadingWithSubheading
				heading='Common Online - '
				boldText='Consult'
				subheading='Consult with Top Yoga Masters Across Specialist Through Video/ Audio call'
				textColor='#EF5618'
			/>
			<ExploreCentresCardContainer
				btnContent='Find'
				loading={loading}
				btnColor={classes.findMorebtn}
				cardData={healthSymptomsList.slice(0, 5)}
				priceTagActive={true}
				priceTagColor='#EF5618'
			/>
		</>
	)
}
