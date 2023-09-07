import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import {makeStyles, Typography} from '@material-ui/core'
import PersonalisedYogaTherapistCardData from '../../../model/PersonalisedYogaTherapistCardData/data'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import React, {useState, useEffect} from 'react'
import YogaTherapistApi from '../../../../Service/LandingPage/Mind/YogaTherpist'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function PersonalisedYogaTherapist() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: '2nzdfwug',
		mastTentTypename: 'Theraphy',
		mastRoleName: 'Therapist',
	})
	const {loading, setLoading} = useContextApi()
	const [therapistList, setTherapistList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setTherapistList(res?.data?.data)
				setLoading(false)
			} else {
				setTherapistList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		YogaTherapistApi.YogaTherapist({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading
				heading='Yoga therapist by '
				boldText='index'
				subheading='Find experienced therapist across all platforms'
				textColor='#23CA9D'
			/>
			<PersonalisedTrainerMasterCard
				cardData={therapistList.slice(0, 5)}
				btnContent='Find Therapist'
				btnColor={classes.findMorebtn}
				loading={loading}
				textColor='#23CA9D'
			/>
		</>
	)
}
