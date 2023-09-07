import React, {useState, useEffect} from 'react'
import HeroBlockImageSlider from '../../../components/HeroBlockImageSlider'
import CareSlider from '../../../model/Slider/CarePageSlider/data'
import CareBannerApi from '../../../../Service/LandingPage/Care/index'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

export default function CareBoard() {
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
		CareBannerApi.CareBanner().then(onSuccess, onFailure)
	}, [])

	return (
		<>
			<HeroBlockImageSlider
				SliderData={bannerImg}
				loading={loading}
				imgTextColor='#7047EA'
				textContent='Need specialist advice. Get in touch with our top rated specialist, trusted doctors. Get all your questions answered online. Now book hassle free online consultation.'
			/>
		</>
	)
}
