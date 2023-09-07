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
	booksection: {
		display: 'flex',
		gap: 20,
		paddingBlock: 12,
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
						Choose the doctor
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Book a slot
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Make Payment
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Be present in the consult room at the time of consult
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Receive prescriptions instantly 
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Follow up for 7 days
					</Typography>
					
				</List>
			</div>
			<div className={classes.booksection}>
				<GardientButton>Book Session</GardientButton>
				<Typography variant='body2'>
					RS.200  <del>Rs.600</del>
				</Typography>
			</div>
		</div>
	)
}
