import React, {useState, useEffect} from 'react'
import CardSlider from '../../../components/CardSlider2'
import AvailableHomeServiceDetails from '../../../model/AvailableHomeServiceDetails/data'
import {makeStyles} from '@material-ui/core'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import HomeServiceApi from '../../../../Service/LandingPage/Care/HomeServiceSlider'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function AvailableHomeService() {
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
		HomeServiceApi.HomeService().then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingSubheadingButton
				heading='Available '
				boldText='Homeservice'
				subheading='Explore Homeservices in Chennai'
				textColor='#7047EA'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			<CardSlider cardData={sliderList} loading={loading} ratingBoxColor='#7047EA' />
		</>
	)
}
