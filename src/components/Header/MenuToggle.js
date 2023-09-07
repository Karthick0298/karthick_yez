import {motion} from 'framer-motion'
import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	zIndex: 99,
	cursor: 'pointer',
}))

const Path = props => <motion.path fill='transparent' strokeLinecap='round' strokeWidth='1.5' {...props} width='25px' />

const transition = {duration: 0.33}

export default function MenuToggle({toggle, isOpen}) {
	const classes = useStyles()
	return (
		<div className={classes.button} onClick={toggle}>
			<svg width='23' height='23' viewBox='0 0 23 23'>
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: {d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(3, 77%, 51%)'},
						open: {d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(3, 77%, 51%)'},
					}}
					transition={transition}
				/>
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: {d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(3, 77%, 51%)'},
						open: {d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(3, 77%, 51%)'},
					}}
					transition={transition}
				/>
			</svg>
		</div>
	)
}
