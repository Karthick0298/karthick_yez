import React, {useState, useEffect} from 'react'
import HeroBlockImageSlider from '../../../components/HeroBlockImageSlider'
import FitnessSliderData from '../../../model/Slider/FitnessPageSlider/data'
import FitnessBannerApi from '../../../../Service/LandingPage/Fitness/index'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

export default function FitnessBoard() {
	const {loading, setLoading} = useContextApi()
	const [bannerImg, setBannerImg] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setBannerImg(res?.data?.data)
				setLoading(false)
			} else {
				setBannerImg([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		FitnessBannerApi.FitnessBanner().then(onSuccess, onFailure)
	}, [])
	return (
		<HeroBlockImageSlider
			loading={loading}
			SliderData={bannerImg}
			imgTextColor='#0095EB'
			textContent='Fitness is not a practice it is a lifestyle. You have made the right choice by choosing LFYnGO to become the best version of you. We have the top-rated experts to help you achieve all your fitness goals.'
		/>
	)
}
