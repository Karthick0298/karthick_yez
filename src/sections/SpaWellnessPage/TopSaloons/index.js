import React, {useState, useEffect} from 'react'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import {makeStyles} from '@material-ui/core'
import CentresCardContainer from '../../../components/CentresCardContainer'
import SpaSaloonDetails from '../../../model/SpaSaloonDetails/data'
import CardSlider from '../../../components/CardSlider'
import SaloonCenterApi from '../../../../Service/LandingPage/Spa/SaloonSlider'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function TopSaloons() {
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
		SaloonCenterApi.SaloonCenter().then(onSuccess, onFailure)
	}, [])
	return (
		<div>
			<HeadingSubheadingButton
				heading='Top '
				boldText='Saloons'
				subheading='Explore Saloons in Chennai'
				textColor='#E4208A'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			{/* <CentresCardContainer cardData={SpaSaloonDetails} ratingBoxColor='#E4208A' /> */}
			<CardSlider cardData={sliderList} loading={loading} ratingBoxColor='#E4208A' />
		</div>
	)
}
