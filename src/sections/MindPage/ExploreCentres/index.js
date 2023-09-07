import {makeStyles, Typography} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import CentersData from '../../../model/SpecialistCentersData/data'
import React, {useState, useEffect} from 'react'
import ExploreCenterApi from '../../../../Service/LandingPage/Mind/ExploreCenter'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function ExploreCenters() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: '2nzdfwug',
		mastTentTypename: 'Yoga',
	})
	const {loading, setLoading} = useContextApi()
	const [exploreList, setExploreList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setExploreList(res?.data?.data)
				setLoading(false)
			} else {
				setExploreList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		ExploreCenterApi.ExploreCenter({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading
				heading='Explore - '
				boldText='Centres Near You'
				subheading='Find best yoga centers across all platform'
				textColor='#23CA9D'
			/>
			<ExploreCentresCardContainer
				loading={loading}
				btnColor={classes.findMorebtn}
				btnContent='Find Centres'
				cardData={exploreList.slice(0, 5)}
				priceTagActive={false}
			/>
		</>
	)
}
