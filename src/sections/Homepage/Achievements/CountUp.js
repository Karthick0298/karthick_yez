import {makeStyles, Typography} from '@material-ui/core'
import React, {useState} from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const useStyles = makeStyles(theme => ({
	numbers: {
		fontSize: 26,
		fontStyle: 'normal',
		fontWeight: 400,
		[theme.breakpoints.down('sm')]: {
			fontSize: 22,
		},
	},
}))

const Ticker = ({color, ...rest}) => {
	const classes = useStyles()

	const [viewPortEntered, setViewPortEntered] = useState(false)

	return (
		<CountUp {...rest} start={viewPortEntered ? null : 0}>
			{({countUpRef}) => {
				return (
					<VisibilitySensor
						active={!viewPortEntered}
						onChange={isVisible => {
							if (isVisible) {
								setViewPortEntered(true)
							}
						}}
						delayedCall>
						<Typography variant='h4' style={{color: color}} className={classes.numbers} ref={countUpRef}></Typography>
					</VisibilitySensor>
				)
			}}
		</CountUp>
	)
}

export default Ticker
