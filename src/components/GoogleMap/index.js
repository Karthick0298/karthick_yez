import React, {useState, useEffect} from 'react'
import {makeStyles, Typography, IconButton} from '@material-ui/core'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import {GOOGLE_API_ENDPOINTS} from '../../../src/constants'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import BookNow from '../GradientButton'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	container: {
		top: 283,
		left: 128,
		height: 617,
		'& .gm-style .gm-style-iw-t': {
			right: 0,
			bottom: 46,
		},
	},
	infoWindow: {},
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& .MuiTypography-h6': {
			color: '#686868',
			fontSize: 11,
		},
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiTypography-subtitle1': {
			fontWeight: 500,
			fontFamily: theme.typography.h6.fontFamily,
		},
	},
	body: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h5': {
			fontSize: 12,
			color: '#0078d7',
			marginLeft: 4,
			marginRight: 8,
		},
		'& .MuiTypography-h6': {
			marginRight: 72,
		},
		'& .MuiIconButton-root': {
			padding: 0,
		},
		'& .MuiSvgIcon-root': {
			color: '#0078d7',
			fontSize: 18,
		},
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	// mapContain: {
	//   "& .gm-style .gm-style-iw-t": {
	//     right: 0,
	//     bottom: 46
	//   }
	// }

	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

const locations = [
	{
		id: 1,
		name: 'Dr.Karthick',
		location: {
			lat: 11.1226148888888888,
			lng: 76.9987877,
		},
	},
	{
		id: 2,
		name: 'Dr.ThiruMoorthi',
		location: {
			lat: 11.0312326,
			lng: 77.04169829450647,
		},
	},
	{
		id: 3,
		name: 'Dr.Dinesh',
		location: {
			lat: 11.1854809,
			lng: 77.03281796953655,
		},
	},
	{
		id: 4,
		name: 'Dr.Ranjith Kumar',
		location: {
			lat: 11.3054809,
			lng: 77.03281796953655,
		},
	},
]
const center = {
	lat: 11.022614899999999,
	lng: 76.9987877,
}

function BookingMap() {
	const classes = useStyles()
	const mapStyles = {
		height: '100%',
		width: '100%',
	}
	const [selected, setSelected] = useState({})
	const onSelect = item => {
		setSelected(item)
	}
	const [currentPosition, setCurrentPosition] = useState({})
	const success = position => {
		const currentPosition = {
			lat: position.coords.latitude,
			lng: position.coords.longitude,
		}
		setCurrentPosition(currentPosition)
	}
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success)
	})
	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds()
		map.fitBounds(bounds)
		setMap(map)
	}, [])
	const router = useRouter()
	const {currency} = router.query
	return (
		<div className={classes.container}>
			<LoadScript googleMapsApiKey={GOOGLE_API_ENDPOINTS.GOOGLE_API}>
				<GoogleMap mapContainerStyle={mapStyles} zoom={12} center={currentPosition} onLoad={onLoad}>
					{locations.map((item, index) => {
						return (
							<>
								<Marker key={item.id} position={currentPosition} onClick={() => onSelect(item)} />
								<Marker
									icon={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/map_icon.svg'}
									position={item.location}
									onClick={() => onSelect(item)}
								/>
							</>
						)
					})}
					{selected.location && (
						<InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})} className={classes.infoWindow}>
							<div className={classes.root}>
								<div className={classes.title}>
									<Typography variant='subtitle1'>{selected.name}</Typography>
									<Typography variant='subtitle1'>
										<span
											style={{
												fontWeight: '500',
												fontFamily: 'Roboto',
											}}>
											&#8377;
										</span>
										500
									</Typography>
								</div>
								<Typography variant='h6'>3 years, Cardiologist</Typography>
								<div className={classes.flex}>
									<div className={classes.body}>
										<IconButton>
											<ThumbUpAltIcon />
										</IconButton>
										<Typography variant='h5'>99%</Typography>
										<Typography variant='h6'>(258 Review)</Typography>
									</div>
									<div onClick={() => router.push('/care/DoctorProfile/DoctorProfileDetails')}>
										<BookNow findMorebtn={classes.findMorebtn}>Book</BookNow>
									</div>
								</div>
							</div>
						</InfoWindow>
					)}
				</GoogleMap>
			</LoadScript>
		</div>
	)
}

export default BookingMap
