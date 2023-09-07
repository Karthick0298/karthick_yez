import React, {useState, useEffect} from 'react'
import HeroBlockImageSlider from '../../../components/HeroBlockImageSlider'
import MindPageSliderData from '../../../model/Slider/MindPageSlider/data'
import MindBannerApi from '../../../../Service/LandingPage/Mind/index'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

export default function TopBlockImageSlider() {
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
		MindBannerApi.MindBanner().then(onSuccess, onFailure)
	}, [])
	return (
		<HeroBlockImageSlider
			SliderData={bannerImg}
			loading={loading}
			imgTextColor='#0CC593'
			textContent='For the body mind and soul. We have the best masters for the best experience in yoga and therapies who will help you reconstruct your body and mind.'
		/>
	)
}
