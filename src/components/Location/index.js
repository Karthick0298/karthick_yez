import React, {useState, useEffect} from 'react'
import {makeStyles, Button, Divider, Box, Typography} from '@material-ui/core'
import Image from 'next/image'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			color: '#464444',
			fontSize: theme.typography.h5.fontSize,
		},
		'& .MuiButton-text': {
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
	},
	locationDetect: {
		display: 'flex',
		cursor: 'pointer',
		alignItems: 'center',
		'& .MuiButton-label': {
			gap: 12,
			textTransform: 'capitalize',
			color: theme.palette.lyfngo.main,
			fontSize: theme.typography.h5.fontSize,
			fontWeight: 600,
		},
	},
	locateFind: {
		'& .MuiTypography-h5': {
			color: '#464444',
			fontSize: theme.typography.h5.fontSize,
		},
	},
}))

export default function Location(props) {
	const classes = useStyles()
	const {lat, lng, getLocation, status} = props
	const {currentLocation, setCurrentLocation} = useContextApi()
	const [show, setShow] = useState(false)

	// setup Lat and Lng for context api
	useEffect(() => {
		setCurrentLocation({...currentLocation, latitude: lat, longitude: lng})
	}, [lat, lng])

	return (
		<>
			<Box className={classes.root}>
				<div className={classes.locationDetect}>
					<Button
						onClick={() => {
							getLocation()
							setShow(!show)
						}}>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/landing-location.svg' alt='logo' width={18} height={18} />
						Use current location
					</Button>
					​​​​​​​​
				</div>
				{show ? (
					<>
						<Button className={classes.locateFind}>
							<Typography variant='h5'>{status}</Typography>
							{lat && <Typography variant='h5'>Latitude: {lat}</Typography>}
							{lng && <Typography variant='h5'>Longitude: {lng}</Typography>}
						</Button>
						<Divider />
					</>
				) : null}
			</Box>
		</>
	)
}
