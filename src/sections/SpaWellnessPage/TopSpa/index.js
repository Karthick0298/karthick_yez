import React, {useState, useEffect} from 'react'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import {makeStyles} from '@material-ui/core'
import CentresCardContainer from '../../../components/CentresCardContainer'
import SpaSpaCentersCardDetails from '../../../model/SpaSpaCentersCardDetails/data'
import CardSlider from '../../../components/CardSlider'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import TopSpaApi from '../../../../Service/LandingPage/Spa/TopSpaSlider'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function TopSpaCenter() {
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
		TopSpaApi.TopSpa().then(onSuccess, onFailure)
	}, [])
	return (
		<div>
			<HeadingSubheadingButton
				heading='Top '
				boldText='Spa Center'
				subheading='Explore Spa Center in Chennai'
				textColor='#E4208A'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			{/* <CentresCardContainer cardData={SpaSpaCentersCardDetails} ratingBoxColor='#E4208A' /> */}
			<CardSlider cardData={sliderList} loading={loading} ratingBoxColor='#E4208A' />
		</div>
	)
}
