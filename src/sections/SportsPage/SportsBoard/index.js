import React, {useState, useEffect} from 'react'
import HeroBlockImageSlider from '../../../components/HeroBlockImageSlider'
import SportsPageSlider from '../../../model/Slider/SportsPageSlider/data'
import SportsBannerApi from '../../../../Service/LandingPage/Sports/index'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

export default function SportsBoard() {
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
		SportsBannerApi.SportsBanner().then(onSuccess, onFailure)
	}, [])
	return (
		<HeroBlockImageSlider
			SliderData={bannerImg}
			loading={loading}
			imgTextColor='#EF5618'
			textContent='Discover sport coaches to clubs, courts and sports events, you can search for drills, open your favourite training plans, our sports facilities have everything you need.'
		/>
	)
}
