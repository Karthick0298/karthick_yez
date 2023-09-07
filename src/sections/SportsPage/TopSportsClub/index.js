import React, {useState, useEffect} from 'react'
import HeadingSubheadingButton from '../../../components/HeadingSubheadingButton'
import {makeStyles, Typography} from '@material-ui/core'
import SportsClubDetails from '../../../model/SportsClubDetails/data'
import CardSlider from '../../../components/CardSlider'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import TopSportsApi from '../../../../Service/LandingPage/Sports/TopSportsSlider/index'

const useStyles = makeStyles(theme => ({
	textColor: {
		color: theme.palette.sports.main,
	},
	findMorebtn: {
		background: theme.palette.sports.buttonBackgroundImage,
	},
}))

export default function TopSportsClub() {
	const classes = useStyles()
	const {loading, setLoading} = useContextApi()
	const [topSportsList, setTopSportsList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setTopSportsList(res?.data?.data)
				setLoading(false)
			} else {
				setTopSportsList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		TopSportsApi.TopSports().then(onSuccess, onFailure)
	}, [])
	return (
		<div>
			<HeadingSubheadingButton
				heading='Top '
				boldText='Sports Club'
				subheading='Explore Sports Clubs in Chennai'
				textColor='#F0662E'
				btnColor={classes.findMorebtn}
				btnContent='Explore'
			/>
			<CardSlider cardData={topSportsList} ratingBoxColor='#F0662E' />
		</div>
	)
}
