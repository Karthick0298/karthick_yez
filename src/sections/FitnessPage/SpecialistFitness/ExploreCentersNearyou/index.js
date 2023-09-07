import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../../components/HeadingWithSubheading'
import ExploreCentresCardContainer from '../../../../components/ExploreCentresCardContainer'
import CentersData from '../../../../model/SpecialistCentersData/data'
import React, {useState, useEffect} from 'react'
import ExploreCenterApi from '../../../../../Service/LandingPage/Fitness/ExploreCenter'
import useContextApi from '../../../../../lib/Utils/hooks/useContextApi'
import useFitnessContext from '../../../../../lib/Utils/hooks/useFitnessContext'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.fitness.buttonBackgroundImage,
	},
}))

export default function CommonHealth() {
	const classes = useStyles()
	const {loading, setLoading, setSearchKey} = useContextApi()
	const {fitnessProfileSearch, setOffset, setHasMore} = useFitnessContext()
	const [params, setParams] = useState({
		mastTentGroupUuid: 'e7z11j8m',
		mastTentTypename: 'Fitness Studio',
	})
	const [centerList, setCenterList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setCenterList(res?.data?.data)
				setLoading(false)
			} else {
				setCenterList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		ExploreCenterApi.ExploreCenter({...params}).then(onSuccess, onFailure)
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
				heading='Explore - '
				boldText='Centres Near You'
				subheading='Find fitness centers across all platform'
				textColor='#0095EB'
			/>
			<ExploreCentresCardContainer
				btnColor={classes.findMorebtn}
				btnContent='Find More'
				cardData={centerList.slice(0, 5)}
				loading={loading}
				onClick={handleTrainersSearch}
			/>
		</>
	)
}
