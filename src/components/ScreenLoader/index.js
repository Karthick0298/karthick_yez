import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core'
import LoadingScreen from '../../../public/lottieFiles/loading1.json'
import Lottie from 'react-lottie'

const useStyles = makeStyles(theme => ({
	spinnerWrapper: {
		height: '100vh',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'fixed',
		top: 0,
		left: 0,
		backgroundColor: 'rgb(255, 255, 255)',
		zIndex: 99999,
	},
	spinner: {
		position: 'absolute',
		margin: '0px auto',
	},
}))

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: LoadingScreen,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}

function Loader() {
	const classes = useStyles()
	return (
		<div className={classes.spinnerWrapper}>
			<div className={classes.spinner}>
				<Lottie options={defaultOptions} height={200} width={280} />
			</div>
		</div>
	)
}

export default Loader
