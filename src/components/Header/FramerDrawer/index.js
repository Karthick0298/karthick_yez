import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Divider, Typography, Link} from '@material-ui/core'
// import Link from 'next/link'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import {useRouter} from 'next/router'
import LogoutApi from '../../../../Service/Setting/Logout'
import {toast} from 'react-toastify'
import secureLocalStorage from 'react-secure-storage'

const AccountList = [
	{
		id: 1,
		list: 'Appointments',
		href: '/myaccount/appointments',
		isSelected: true,
	},
	{
		id: 2,
		list: 'Workout Plan',
		href: '/myaccount/workoutplan',
		isSelected: true,
	},
	{
		id: 3,
		list: 'Diet Plan',
		href: '/myaccount/dietplan',
		isSelected: true,
	},
	{
		id: 4,
		list: 'Member Ship',
		href: '/myaccount/membership',
		isSelected: true,
	},
	{
		id: 5,
		list: 'Health records',
		href: '/myaccount/healthrecords',
		isSelected: true,
	},
	{
		id: 6,
		list: 'Payments',
		href: '/myaccount/payment',
		isSelected: true,
	},
	{
		id: 7,
		list: 'Setting',
		href: '/settingmenu/myprofile',
		isSelected: true,
	},
	{
		id: 8,
		list: 'Logout',
		href: '/marketplace',
		isSelected: true,
	},
]

const itemVariants = {
	closed: {
		opacity: 0,
	},
	open: {opacity: 1},
}

const sideVariants = {
	closed: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: 1,
		},
	},
}

export default function FramerDrawer({open}) {
	const {token, userId, setUser, loggedVia, otpVerified, setToken, setUserId, setLoggedVia, setOtpVerified, setOpenLocation, custName} = useAuth()
	const isLoggedIn = !_.isEmpty(userId) && !_.isEmpty(token) && otpVerified
	const router = useRouter()
	const click_ref = React.useRef(null)

	const deviceUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('DeviceUuuid') : null
	const DeviceLogOut = (list, href) => {
		if (deviceUuid && list === 'Logout') {
			const onSuccess = res => {
				secureLocalStorage.clear()
				router.push(href)
				setUser(null)
				setToken(null)
				setUserId(null)
				setLoggedVia(null)
				setOtpVerified(null)
				setOpenLocation(null)
				// setSearchSuggestions([])
				toast.success(<Typography variant='h5'>Logged out successfully </Typography>)
			}
			const onFailure = err => {
				console.log('error', err)
				toast.error(<Typography variant='h5'>Please try after sometime </Typography>)
			}
			LogoutApi.LogoutDevice(deviceUuid, token).then(onSuccess, onFailure)
		}
	}
	console.log('custName', custName)
	return (
		<main>
			<AnimatePresence>
				{open && (
					<motion.aside
						initial={{width: 0}}
						animate={{
							width: 300,
						}}
						exit={{
							width: 0,
							transition: {delay: 0.7, duration: 0.9},
						}}>
						<motion.div className='container' initial='closed' animate='open' exit='closed' variants={sideVariants}>
							<motion.a variants={itemVariants}>{custName ? `Hello, ${custName}` : 'Hello, User'}</motion.a>
							<Divider />
							{AccountList.map(({id, list, href}) => (
								<Link href={href} key={id} style={{margin: 0, textDecoration: 'none'}}>
									{console.log('list', list === 'Logout' ? 'dinesh' : 'nil')}
									<motion.a
										key={id}
										onClick={() => {
											DeviceLogOut(list, href)
										}}
										whileHover={{scale: 1.1}}
										variants={itemVariants}>
										{list}
									</motion.a>
								</Link>
							))}
						</motion.div>
					</motion.aside>
				)}
			</AnimatePresence>
		</main>
	)
}
