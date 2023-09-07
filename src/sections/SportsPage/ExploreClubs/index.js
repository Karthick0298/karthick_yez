import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import ExploreClubsCardDetails from '../../../model/ExploreClubsCardDetails/data'
import React, {useState, useEffect} from 'react'
import SportsDynamicLandApi from '../../../../Service/LandingPage/Sports/SportsDynamicLand'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function ExploreClubs() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'ztyxtevg',
		mastTentTypename: 'Multi Sports Center',
	})
	const {loading, setLoading} = useContextApi()
	const [assistList, setAssistList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setAssistList(res?.data?.data)
				setLoading(false)
			} else {
				setAssistList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		SportsDynamicLandApi.SportsDynamicLand({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading heading='Explore - ' boldText='Clubs Near You' subheading='Find best club across all platform' textColor='#F0662E' />
			<ExploreCentresCardContainer
				loading={loading}
				btnColor={classes.findMorebtn}
				cardData={assistList.slice(0, 5)}
				btnContent='Find Clubs'
				priceTagActive={false}
			/>
		</>
	)
}
