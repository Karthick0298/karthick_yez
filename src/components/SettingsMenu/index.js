import {makeStyles} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import MenuAppointment from '../../model/SettingsList/data'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	MenuListToggle: {
		display: 'none',
	},
	MenuListstyle: {
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
		'& .MuiList-padding': {
			padding: '60px 32px',
			display: 'flex',
			flexDirection: 'column',
			gap: 8,
			[theme.breakpoints.down('xs')]: {
				borderRight: '0px solid #707070',
				display: 'none',
			},
		},
		'& .MuiMenuItem-root': {
			textAlign: 'left',
			fontFamily: theme.typography.h4.fontFamily,
			letterSpacing: 0.54,
			color: '#475677',
			opacity: 1,
			fontSize: theme.typography.h5.fontSize,
			lineHeight: 2.2,
			borderRadius: 6,
			fontWeight: 500,
		},
		'& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
			backgroundColor: '#FCEAEA',
		},
	},
	RouterPosition: {
		flex: 1,
	},
}))

function Index(props) {
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const [selectedIndex, setSelectedIndex] = useState()
	const router = useRouter()
	// const handleListItemClick = (event, index, url) => {
	// 	setSelectedIndex(index)
	// 	router.push(url, undefined, {shallow: true})
	// }
	const handleListItemClick = (event, index) => {
		setSelectedIndex(index)
	}
	const pathName = typeof window !== 'undefined' ? window.location.pathname : null
	const [currentPath, setCurrentPath] = useState('')
	useEffect(() => {
		if (pathName) {
			setCurrentPath(pathName.split('/').pop())
		}
	}, [pathName])
	return (
		<div className={toggleState ? classes.MenuListToggle : classes.MenuListstyle}>
			<MenuList>
				<MenuItem
					className={currentPath === 'myprofile' ? classes.selectedBg : classes.background}
					selected={currentPath === 'myprofile'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/myprofile', undefined, {shallow: true}))}>
					My profile
				</MenuItem>
				{/* <MenuItem
					className={currentPath === 'changepassword' ? classes.selectedBg : classes.background}
					selected={currentPath === 'changepassword'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/changepassword', undefined, {shallow: true}))}>
					Change Password
				</MenuItem> */}
				{/* <MenuItem
					className={currentPath === 'twofactor' ? classes.selectedBg : classes.background}
					selected={currentPath === 'twofactor'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/twofactor', undefined, {shallow: true}))}>
					2-factor auth
				</MenuItem> */}
				<MenuItem
					className={currentPath === 'changepin' ? classes.selectedBg : classes.background}
					selected={currentPath === 'changepin'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/changepin', undefined, {shallow: true}))}>
					Change PIN
				</MenuItem>
				<MenuItem
					className={currentPath === 'notificationsetting' ? classes.selectedBg : classes.background}
					selected={currentPath === 'notificationsetting'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/notificationsetting', undefined, {shallow: true}))}>
					Notification setting
				</MenuItem>
				<MenuItem
					className={currentPath === 'activedevice' ? classes.selectedBg : classes.background}
					selected={currentPath === 'activedevice'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/activedevice', undefined, {shallow: true}))}>
					Active devices
				</MenuItem>
				<MenuItem
					className={currentPath === 'deleteaccount' ? classes.selectedBg : classes.background}
					selected={currentPath === 'deleteaccount'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/deleteaccount', undefined, {shallow: true}))}>
					Delete account
				</MenuItem>
				<MenuItem
					className={currentPath === 'logout' ? classes.selectedBg : classes.background}
					selected={currentPath === 'logout'}
					onClick={event => handleListItemClick(event, router.push('/settingmenu/logout', undefined, {shallow: true}))}>
					Logout
				</MenuItem>
			</MenuList>
		</div>
	)
}
export default Index
