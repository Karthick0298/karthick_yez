import {makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Lottie from 'react-lottie'

const useStyles = makeStyles(theme => ({
	lottieContainer: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
}))

const LottiePlayerForStaticPages = ({LottieFile, loop = true, width = '50%'}) => {
	const classes = useStyles()

	const DefaultOptions = {
		loop: loop,
		autoplay: true,
		animationData: LottieFile,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<div className={classes.lottieContainer}>
			<div style={{width: width}}>
				<Lottie options={DefaultOptions} height={'100%'} width={'100%'} />
			</div>
		</div>
	)
}

export default LottiePlayerForStaticPages
