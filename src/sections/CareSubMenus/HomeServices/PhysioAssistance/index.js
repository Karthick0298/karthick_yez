import {makeStyles} from '@material-ui/core'
import PersonalisedTrainerMasterCard from '../../../../components/PersonalisedTrainerMasterCard'
import HeadingWithSubheading from '../../../../components/HeadingWithSubheading'
import PhysioAssistanceData from '../../../../model/PhysioAssistance/data'
import React, {useState, useEffect} from 'react'
import PhysioAssistApi from '../../../../../Service/LandingPage/Care/PhysioAssist'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function PhysioAssistance() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'fyi6pmtm',
		mastTentTypename: 'Home Service',
		mastRoleName: 'Physiotherapist',
	})
	const {loading, setLoading} = useContextApi()
	const [physioList, setPhysioList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setPhysioList(res?.data?.data)
				setLoading(false)
			} else {
				setPhysioList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		PhysioAssistApi.PhysioAssist({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading
				heading='Physio Assistance at your '
				boldText='Home'
				subheading='Home Physio Assistance procedures that reduces your visit to centers everyday'
				textColor='#7047EA'
			/>
			<PersonalisedTrainerMasterCard
				cardData={physioList.slice(0, 5)}
				loading={loading}
				btnContent='Find More'
				btnColor={classes.findMorebtn}
				textColor='#7047EA'
			/>
		</>
	)
}
