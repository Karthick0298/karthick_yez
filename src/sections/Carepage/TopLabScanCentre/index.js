import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core'
import HeadingWithSubheading from '../../../components/HeadingWithSubheading'
import CardSlider2 from '../../../components/CardSlider2'
import TopScanCenterDetails from '../../../model/TopScanCenterDetails/data'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import LabScanApi from '../../../../Service/LandingPage/Care/LabScanSlider'

const useStyles = makeStyles(theme => ({
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function TopLabScanCenter() {
	const classes = useStyles()
	const {loading, setLoading} = useContextApi()
	const [labScansliderList, setLabScansliderList] = useState([])

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setLabScansliderList(res?.data?.data)
				setLoading(false)
			} else {
				setLabScansliderList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		LabScanApi.LabScan().then(onSuccess, onFailure)
	}, [])

	return (
		<>
			<HeadingWithSubheading
				heading='Top Lab/Scan centre for '
				boldText='Consultations'
				subheading='Explore scan centres in Chennai'
				textColor='#7047EA'
			/>
			<CardSlider2 cardData={labScansliderList} loading={loading} ratingBoxColor='#7047EA' />
		</>
	)
}
