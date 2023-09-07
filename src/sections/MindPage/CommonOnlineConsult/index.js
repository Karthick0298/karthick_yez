import React, {useState, useEffect} from 'react'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import HealthSymptomsApi from '../../../../Service/LandingPage/Mind/HealthSymptoms'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import CommonOnlineConsultData from '../../../model/YogaCommonOnlineConsultData/data'
import {makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
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
				textColor='#23CA9D'
			/>
			<ExploreCentresCardContainer
				btnColor={classes.findMorebtn}
				btnContent='Find More'
				loading={loading}
				cardData={healthSymptomsList.slice(0, 5)}
				priceTagColor='#23CA9D'
			/>
		</>
	)
}
