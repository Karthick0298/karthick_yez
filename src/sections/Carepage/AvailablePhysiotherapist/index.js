import {makeStyles} from '@material-ui/core'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import CategoryCard from '../../../components/CategoryCard'
import NurseAvailable from '../../../model/NurseAvailable/data'
import React, {useState, useEffect} from 'react'
import AvailablePhysioApi from '../../../../Service/LandingPage/Care/AvailablePhysio'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function AvailablePhysioTherapist() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'fyi6pmtm',
		mastRoleName: 'Doctor',
	})
	const {loading, setLoading} = useContextApi()
	const [availablePhysio, setAvailablePhysio] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setAvailablePhysio(res?.data?.data)
				setLoading(false)
			} else {
				setAvailablePhysio([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		AvailablePhysioApi.AvailablePhysio({...params}).then(onSuccess, onFailure)
	}, [])

	return (
		<>
			<HeadingSubheadingButton
				heading='Available '
				boldText='Physiotherapist'
				subheading='Qualified expert visits your home for an assessment and initiates the therapy'
				textColor='#7047EA'
				btnColor={classes.findMorebtn}
				btnContent='Find more'
			/>
			<CategoryCard cardData={availablePhysio.slice(0, 5)} loading={loading} />
		</>
	)
}
