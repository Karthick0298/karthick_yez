import React, {useState, useEffect} from 'react'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import HealthSymptomsApi from '../../../../Service/LandingPage/Spa/HealthSymptoms'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import ExploreSaloonCardDetails from '../../../model/ExploreSaloonCardDetails/data'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
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
				subheading='Consult with Top Beautician Across Specialist Through Video/ Audio call'
				textColor='#E4208A'
			/>
			<ExploreCentresCardContainer
				btnContent='Find spa'
				loading={loading}
				btnColor={classes.findMorebtn}
				cardData={healthSymptomsList.slice(0, 5)}
				priceTagActive={true}
				priceTagColor='#E4208A'
			/>
		</>
	)
}
