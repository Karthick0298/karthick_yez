import React, {useState, useEffect} from 'react'
import FitnessSlider from '../../model/Slider/FitnessPageSlider/data'
import HeroBlockImageSlider from '../../../src/components/HeroBlockImageSlider'
import FitnessBannerApi from '../../../Service/LandingPage/Fitness/index'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

export default function SliderCoverFlow() {
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
			SliderData={bannerImg}
			loading={loading}
			imgTextColor='#0095EB'
			textContent='Lorem Mind dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'
		/>
	)
}
