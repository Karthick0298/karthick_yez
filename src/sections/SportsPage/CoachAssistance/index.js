import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import {makeStyles} from '@material-ui/core'
import SportsPersonalisedCoachCardDetails from '../../../model/SportsPersonalisedCoachCardDetails/data'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import React, {useState, useEffect} from 'react'
import SportsDynamicLandApi from '../../../../Service/LandingPage/Sports/SportsDynamicLand'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function CoachAssistance() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'ztyxtevg',
		mastTentTypename: 'Home Service',
		mastRoleName: 'Coach',
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
			<HeadingWithSubheading
				heading='Coach assistance at your '
				boldText='Home'
				subheading='Find experienced trainers/coach across all platform'
				textColor='#F0662E'
			/>
			<PersonalisedTrainerMasterCard
				loading={loading}
				cardData={assistList.slice(0, 5)}
				btnContent='Find Coaches'
				btnColor={classes.findMorebtn}
				textColor='#F0662E'
			/>
		</>
	)
}
