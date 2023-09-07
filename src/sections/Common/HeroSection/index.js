import {Typography} from '@material-ui/core'
import React from 'react'
import {makeStyles, List, ListItemIcon} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import {Button} from 'react-scroll'
import GardientButton from '../../../components/GradientButton'
const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('xs')]: {
			marginInline: 12,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 22,
		},
	},
	listItem: {
		'& .MuiTypography-h5': {
			display: 'flex',
			alignItems: 'center',
			paddingBlock: 4,
		},
		'& .MuiListItemIcon-root': {
			color: 'red',
			minWidth: 35,
		},
		'& .MuiList-padding': {
			padding: 0,
		},
		'& .MuiSvgIcon-root': {
			width: 15,
		},
	},
}))
export default function Header() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className={classes.listItem}>
				<List>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Morning Care
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Bed-Making For Seniors
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Bed-Sore Care
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Oxygen Management
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Support in All Daily Activities
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Medication Support for Elderly Patients
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Proactive Nursing Assistance
					</Typography>
				</List>
			</div>
			<GardientButton>Book Session</GardientButton>
		</div>
	)
}
