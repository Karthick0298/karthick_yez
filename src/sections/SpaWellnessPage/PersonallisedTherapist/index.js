import React, {useState, useEffect} from 'react'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import SpaPersonalisedBeauticiansCardData from '../../../model/SpaPersonalisedBeauticiansCardData/data'
import SpaDynamicLandApi from '../../../../Service/LandingPage/Spa/SpaDynamicLand'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function PersonalisedTrainer() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'irokb9b8',
		mastTentTypename: 'Spa Center',
		mastRoleName: 'Therapist',
	})
	const {loading, setLoading} = useContextApi()
	const [assistList, setAssistList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setAssistList(res?.data?.data)
				setLoading(false)
			} else {
				setAssistList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		SpaDynamicLandApi.SpaDynamicLand({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading
				heading='Personalised -'
				boldText='Therapist'
				subheading='Find experienced beauticians across all platform'
				textColor='#E4208A'
			/>
			<PersonalisedTrainerMasterCard
				cardData={assistList.slice(0, 5)}
				loading={loading}
				btnContent='Find Therapist'
				btnColor={classes.findMorebtn}
				textColor='#E4208A'
			/>
		</>
	)
}
