import {makeStyles, Typography} from '@material-ui/core'
import SpecialstTrainee from '../../../../model/SpecialistCoachData/data'
import PersonalisedTrainerMasterCard from '../../../../components/PersonalisedTrainerMasterCard'
import HeadingWithSubheading from '../../../../components/HeadingWithSubheading'
import React, {useState, useEffect} from 'react'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'
import useFitnessContext from '../../../../../lib/Utils/hooks/useFitnessContext'
import InpersonApi from '../../../../../Service/LandingPage/Fitness/InPerson'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function SpecialistCoach() {
	const classes = useStyles()
	const {loading, setLoading, setSearchKey} = useContextApi()
	const {fitnessProfileSearch, setOffset, setHasMore} = useFitnessContext()
	const [inpersonList, setInpersonList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setInpersonList(res?.data?.data)
				setLoading(false)
			} else {
				setInpersonList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		InpersonApi.Inperson().then(onSuccess, onFailure)
	}, [])

	// fitness Trainers Profile List
	const handleTrainersSearch = (e, specialityName) => {
		setOffset(1)
		setHasMore(true)
		setSearchKey(specialityName)
		fitnessProfileSearch(specialityName)
	}

	return (
		<>
			<HeadingWithSubheading
				heading='Personalised - '
				boldText='Trainers'
				subheading='Find experienced trainers across all platforms'
				textColor='#2CB0F7'
			/>
			<PersonalisedTrainerMasterCard
				cardData={inpersonList.slice(0, 5)}
				loading={loading}
				btnContent='Find Trainers'
				btnColor={classes.findMorebtn}
				textColor='#0693EA'
				onClick={handleTrainersSearch}
			/>
		</>
	)
}
