import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Trial from './Trial'
import Features from './Features'
import BlockSection from './BlockSection'
import Work from './Work'
import FreeTrailCard from '../../components/FreeTrailCard'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		background: '#FFFFFF',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	mainRoot: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',

		[theme.breakpoints.up('xs')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('xl')]: {
			maxWidth: 1360,
		},
	},
	container: {
		// border: '1px solid green',
		fontFamily: 'Poppins',
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '100vw',
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: 1320,
		},
	},
	trailContainer: {
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 20,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 34,
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: 1320,
		},
	},
}))

export default function index() {
	const classes = useStyles()

	return (
		<>
			<div className={classes.root}>
				<div className={classes.mainRoot}>
					<BlockSection />
				</div>
				<div className={classes.container}>
					<Features />
				</div>
				{/* <div className={classes.mainRoot}>
					<Work />
				</div> */}
				<div className={classes.trailContainer}>
					<FreeTrailCard />
				</div>
			</div>
		</>
	)
}
