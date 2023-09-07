import React, {useState, useEffect} from 'react'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import {makeStyles, Typography} from '@material-ui/core'
import YogaCenterDetails from '../../../model/YogaCenterDetails/data'
import CardSlider from '../../../components/CardSlider'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import YogaCentersApi from '../../../../Service/LandingPage/Mind/YogaSliders'

const useStyles = makeStyles(theme => ({
	textColor: {
		color: theme.palette.yoga.main,
	},
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function TopYogaCentres() {
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
		YogaCentersApi.YogaCenters().then(onSuccess, onFailure)
	}, [])
	return (
		<div>
			<HeadingSubheadingButton
				heading='Top '
				boldText='Yoga Centers'
				subheading='Explore Yoga Centers in Chennai'
				textColor='#23CA9D'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			<CardSlider cardData={sliderList} loading={loading} ratingBoxColor='#23CA9D' />
		</div>
	)
}
