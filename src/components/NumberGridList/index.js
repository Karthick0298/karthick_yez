import {Typography} from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 400,
	},
	mainCont: {
		display: 'flex',
		gap: 8,
		alignItems: 'baseline',
		'& .MuiTypography-h3': {
			width: 50,
			fontSize: 22,
			color: '#FFFFFF',
			display: 'flex',
			justifyContent: 'center',
			paddingBlock: 10,
			boxShadow: '0px 3px 6px #0000001A',
			borderRadius: 15,
			opacity: 1,
		},
	},
	headContain: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		'& .MuiTypography-h4': {
			fontSize: 20,
			color: theme.palette.paragraph.main,
			fontStyle: 'normal',
			fontWeight: 600,
			fontFamily: 'Source Sans Pro',
		},
		'& .MuiTypography-h5': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
			fontFamily: 'Source Sans Pro',
		},
	},
	allMain: {},
}))
export default function NumberList({Number, Heading, Subheading, color}) {
	const classes = useStyles()
	return (
		<>
			<div className={classes.root}>
				<div className={classes.mainCont}>
					<div style={{background: color, borderRadius: '12px'}}>
						<Typography variant='h3'>{Number}</Typography>
					</div>
					<div className={classes.headContain}>
						<Typography variant='h4'>{Heading}</Typography>
						<Typography variant='h5'>{Subheading}</Typography>
					</div>
				</div>
			</div>
		</>
	)
}
