import React, {useState, useEffect} from 'react'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import {makeStyles} from '@material-ui/core'
import OnlineCare from '../../../model/OnlineCare/data'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import HealthSymptomsApi from '../../../../Service/LandingPage/Fitness/HealthSymptoms'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function CommonHealth() {
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
			<HeadingWithSubheading heading='Common Health - ' boldText='Symptoms' subheading='Consult with top trainers Online' textColor='#2EB1F8' />
			<ExploreCentresCardContainer
				loading={loading}
				cardData={healthSymptomsList.slice(0, 5)}
				btnColor={classes.findMorebtn}
				btnContent='Find More'
				priceTagColor='#2EB1F8'
			/>
		</>
	)
}
