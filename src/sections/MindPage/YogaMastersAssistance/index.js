import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import YogaMastersAssistanceCardData from '../../../model/YogaMastersAssistanceCardData/data'
import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import {makeStyles, Typography} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import YogaAssistanceApi from '../../../../Service/LandingPage/Mind/YogaAssistance'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function YogaMastersAssistance() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: '2nzdfwug',
		mastTentTypename: 'Home Service',
		mastRoleName: 'Yoga coach',
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
		YogaAssistanceApi.YogaAssistance({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading
				heading='Yoga Masters assistance at your'
				boldText=' Home'
				subheading='Find experienced yoga masters across all platform'
				textColor='#23CA9D'
			/>
			<PersonalisedTrainerMasterCard
				loading={loading}
				cardData={assistList.slice(0, 5)}
				btnContent='Find Trainers'
				btnColor={classes.findMorebtn}
				textColor='#23CA9D'
			/>
		</>
	)
}
