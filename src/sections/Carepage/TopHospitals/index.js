import React, {useState, useEffect} from 'react'
import CardSlider from '../../../components/CardSlider'
import YogaCenterDetails from '../../../model/YogaCenterDetails/data'
import {makeStyles} from '@material-ui/core'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import HospitalConsultationApi from '../../../../Service/LandingPage/Care/Hospitals'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function TopHospitals() {
	const classes = useStyles()
	const {loading, setLoading} = useContextApi()
	const [hospitalConsultList, setHospitalConsultList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setHospitalConsultList(res?.data?.data)
				setLoading(false)
			} else {
				setHospitalConsultList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		HospitalConsultationApi.HospitalConsultation().then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingSubheadingButton
				heading='Top Hospitals for - '
				boldText='Consultations'
				subheading='Explore hospitals in Chennai'
				textColor='#7047EA'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			<CardSlider loading={loading} cardData={hospitalConsultList} ratingBoxColor='#7047EA' />
		</>
	)
}
