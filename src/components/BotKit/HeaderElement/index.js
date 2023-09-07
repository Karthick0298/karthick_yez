import {IconButton, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import CallIcon from '@material-ui/icons/Call'
import VideocamIcon from '@material-ui/icons/Videocam'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		paddingBlock: 12,
		paddingInline: 12,
		alignItems: 'center',
		justifyContent: 'space-between',
		background: 'transparent linear-gradient(96deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		borderRadius: '10px 10px 0px 0px',
		opacity: 1,
		backdropFilter: 'blur(30px)',
		'& .MuiTypography-h5': {
			fontSize: 16,
			fontWeight: 500,
		},
	},
	headerIcon: {
		display: 'flex',
		alignItems: 'center',
		gap: 12,
		fill: '#7047EA',
		'& .MuiIconButton-root': {
			padding: 6,
		},
		'& .MuiSvgIcon-root': {
			fill: theme.palette.lyfngo.main,
		},
	},
}))

export default function BotHeader({handleChange}) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Typography variant='h5'>Consult with experts</Typography>
			{/* <div className={classes.headerIcon}>
				<IconButton>
					<CallIcon />
				</IconButton>
				<IconButton onClick={handleChange}>
					<VideocamIcon />
				</IconButton>
			</div> */}
		</div>
	)
}
