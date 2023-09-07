import Care from './Care'
import Fitness from './Fitness'
import Yoga from './Yoga'
import Sports from './Sports'
import Spa from './Spa'
import {makeStyles} from '@material-ui/core'
import Store from './Store'

const useStyles = makeStyles(theme => ({
	// root: {
	// 	maxHeight: '100vh',
	// 	overflowY: 'auto',
	// 	scrollSnapType: 'mandatory',
	// 	msScrollSnapPointsY: 'repeat(100vh)',
	// 	scrollSnapType: 'y mandatory',
	// 	scrollBehavior: 'smooth',
	// 	'&::-webkit-scrollbar': {
	// 		width: 0,
	// 		background: 'transparent',
	// 	},
	// },
	// sections: {
	// 	maxHeight: '100vh',
	// 	scrollSnapAlign: 'start',
	// },
}))

export default function LandingPage() {
	const classes = useStyles()

	return (
		<>
			<section className={classes.root}>
				<section id='care' className={classes.sections}>
					<Care />
				</section>
				<section id='mind' className={classes.sections}>
					<Yoga />
				</section>
				<section id='fitness' className={classes.sections}>
					<Fitness />
				</section>
				<section id='sports' className={classes.sections}>
					<Sports />
				</section>
				<section id='store' className={classes.sections}>
					<Store />
				</section>
			</section>
		</>
	)
}
