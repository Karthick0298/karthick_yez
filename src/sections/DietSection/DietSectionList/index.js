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
			// padding: 0,
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
						Choosing the weight loose program
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Don't Fall for Fad Diets
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						High-Protein Diet for Weight Loss
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						High-Protein,Low-Carb Diets
					</Typography>
					<Typography variant='h5'>
						<ListItemIcon>
							<DoneIcon />
						</ListItemIcon>
						Review All  Diet Plans A-Z
					</Typography>
				</List>
			</div>
			<GardientButton>Book Session</GardientButton>
		</div>
	)
}
