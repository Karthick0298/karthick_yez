import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../components/ExploreCentresCardContainer'
import ExploreSaloonCardDetails from '../../../model/ExploreSaloonCardDetails/data'
import React, {useState, useEffect} from 'react'
import SpaDynamicLandApi from '../../../../Service/LandingPage/Spa/SpaDynamicLand'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function ExploreSpa() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'irokb9b8',
		mastTentTypename: 'Spa Center',
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
		SpaDynamicLandApi.SpaDynamicLand({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading heading='Explore - ' boldText='Spa Center Near You' subheading='Find best spa across all platform' textColor='#E4208A' />
			<ExploreCentresCardContainer
				btnColor={classes.findMorebtn}
				cardData={assistList.slice(0, 5)}
				loading={loading}
				btnContent='Find Spa'
				priceTagActive={false}
			/>
		</>
	)
}
