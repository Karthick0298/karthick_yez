import {Typography, makeStyles, Divider, List, ListItemIcon, ListItemText, withStyles} from '@material-ui/core'
import MuiListItem from '@material-ui/core/ListItem'
import React, {useState} from 'react'
import Links from 'next/link'

const settingsList = [
	{id: 1, label: 'My profile', toLink: '/settingmenu/myprofile'},
	{id: 3, label: 'Notification setting', toLink: '/settingmenu/notificationsetting'},
	{id: 4, label: 'Active devices', toLink: '/settingmenu/activedevice'},
	{id: 5, label: 'Delete account', toLink: '/settingmenu/deleteaccount'},
	{id: 6, label: 'Logout', toLink: '/settingmenu/logout'},
]

const ListItem = withStyles({
	root: {
		'&$selected': {
			background: '#FCEAEA',
		},
	},

	selected: {},
})(MuiListItem)

const useStyles = makeStyles(theme => ({
	settingWrapper: {
		height: '10vh',
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h5': {color: '#7070707 !important'},
	},
	settingLabel: {
		paddingInlineStart: 12,
		fontSize: '18px',
		letterSpacing: 0.5,
		textTransform: 'capitalize',
	},
	settingsList: {
		paddingInline: 12,
		paddingBlockStart: 8,
	},
	listContainer: {
		paddingBlock: 16,
	},
	listText: {
		paddingInlineStart: 30,
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: 14,
		color: '#475677',
	},
}))

const MobileSettings = () => {
	const classes = useStyles()
	const [selectedIndex, setSelectedIndex] = useState(0)

	const handleListItemClick = (event, currentIndex) => {
		setSelectedIndex(currentIndex)
	}

	return (
		<>
			<section className={classes.settingWrapper}>
				<Typography className={classes.settingLabel} variant='h5'>
					Settings
				</Typography>
			</section>
			<Divider />
			<section className={classes.settingsList}>
				<List component='nav'>
					{settingsList?.map((data, index) => (
						<>
							<Links key={data?.id} href={data?.toLink}>
								<ListItem
									className={classes.listContainer}
									button
									selected={index === selectedIndex}
									onClick={event => handleListItemClick(event, index)}>
									<Typography className={classes.listText} variant='h5'>
										{data?.label}
									</Typography>
								</ListItem>
							</Links>
						</>
					))}
				</List>
			</section>
		</>
	)
}

export default MobileSettings
