import PersonalisedTrainerMasterCard from '../../../components/PersonalisedTrainerMasterCard'
import {makeStyles, Typography} from '@material-ui/core'
import PersonalisedYogaMastersCardData from '../../../model/PersonalisedYogaMastersCardData/data'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import React, {useState, useEffect} from 'react'
import YogaMasterApi from '../../../../Service/LandingPage/Mind/YogaMaster'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function PersonalisedYogaMasters() {
	const classes = useStyles()
	const [params, setParams] = useState({
		mastTentGroupUuid: '2nzdfwug',
		mastTentTypename: 'Yoga',
		mastRoleName: 'Yoga coach',
	})
	const {loading, setLoading} = useContextApi()
	const [masterList, setMasterList] = useState([])
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setMasterList(res?.data?.data)
				setLoading(false)
			} else {
				setMasterList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		YogaMasterApi.YogaMaster({...params}).then(onSuccess, onFailure)
	}, [])
	return (
		<>
			<HeadingWithSubheading
				heading='Yoga Masters by '
				boldText='index'
				subheading='Find your preferred master for your concern'
				textColor='#23CA9D'
			/>
			<PersonalisedTrainerMasterCard
				cardData={masterList.slice(0, 5)}
				btnContent='Find Masters'
				loading={loading}
				btnColor={classes.findMorebtn}
				textColor='#23CA9D'
			/>
		</>
	)
}
