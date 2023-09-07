import React, {useState, useEffect} from 'react'
import FitenessCenetersDetails from '../../../model/FitnessCentersCardDetails/data'
import {makeStyles} from '@material-ui/core'
import CardSlider from '../../../components/CardSlider'
import YogaCenterDetails from '../../../model/YogaCenterDetails/data'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import FitnessCentersApi from '../../../../Service/LandingPage/Fitness/FitnessCenterSlider'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function TopHospitals() {
	const classes = useStyles()
	const {loading, setLoading} = useContextApi()
	const [sliderList, setSliderList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setSliderList(res?.data?.data)
				setLoading(false)
			} else {
				setSliderList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		FitnessCentersApi.FitnessCenters().then(onSuccess, onFailure)
	}, [])

	return (
		<>
			<HeadingSubheadingButton
				heading='Top  '
				boldText='Fitness Centers'
				subheading='Explore Fitness Centers in Chennai'
				textColor='#2CB0F7'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			<CardSlider cardData={sliderList} loading={loading} ratingBoxColor='#2CB0F7' />
		</>
	)
}
