import React, {useState, useEffect} from 'react'
import HeroBlockImageSlider from '../../../components/HeroBlockImageSlider'
import SpaWellnessSlider from '../../../model/Slider/SpaWellnessSlider/data'
import SpaBannerApi from '../../../../Service/LandingPage/Spa/index'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

export default function SpaBoard() {
	const {loading, setLoading} = useContextApi()
	const [bannerImg, setBannerImg] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(false)
			if (res?.data?.status === 'success') {
				setBannerImg(res?.data?.data)
			} else {
				setBannerImg([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		SpaBannerApi.SpaBanner().then(onSuccess, onFailure)
	}, [])
	return (
		<HeroBlockImageSlider
			SliderData={bannerImg}
			loading={loading}
			imgTextColor='#E4208A'
			textContent='Refresh and Renew. LFYnGO to experience best beauty services with our top rated therapist with the latest therapy methods.'
		/>
	)
}
