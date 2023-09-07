import {Typography, Breadcrumbs, useTheme, useMediaQuery, Divider} from '@material-ui/core'
import {makeStyles, Button} from '@material-ui/core'
import Activedevicelist from '../../../model/ActiveDeviceList/data'
import _ from 'lodash'
import activeDeviceList from '../../../../Service/Setting/ActiveDevice'
import activeDeviceLogout from '../../../../Service/Setting/ActiveDevice/deviceLogout'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import SettingButton from '../../../components/SettingButton'
import moment from 'moment'
import {IconButton} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import {BeatLoader} from 'react-spinners'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	activedevicemain: {},
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		position: 'absolute',
		zIndex: '9',
		padding: 8,
		transform: 'translate(-17px,20px)',
		// '&:hover': {
		// 	backgroundColor: theme.palette.care.dark,
		// 	'& .MuiSvgIcon-root': {
		// 		fill: '#FFFFFF80',
		// 	},
		// },
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	activedevicesubmain: {
		display: 'flex',
		background: 'transparent linear-gradient(96deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		border: '1px solid #FFFFFF80',
		boxShadow: '0px 3px 6px #00000026',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginInline: 73,
		marginBlock: 36,
		borderRadius: 12,
		paddingInline: 52,
		paddingBlock: 32,
		opacity: 1,
		backdropFilter: 'blur(30px)',
		[theme.breakpoints.down('xs')]: {
			marginBlock: 19,
			borderRadius: 12,
			marginInline: 8,
			paddingBlock: 12,
			paddingInline: 8,
			gap: 22,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlock: 19,
			borderRadius: 12,
			marginInline: 8,
			paddingBlock: 12,
			paddingInline: 8,
			gap: 22,
		},
		[theme.breakpoints.up('md')]: {
			marginBlock: 19,
			borderRadius: 12,
			marginInline: 8,
			paddingBlock: 31,
			paddingInline: 58,
		},
	},
	activedevicename: {
		color: '#475677',
		opacity: 1,
		fontSize: 16,
		[theme.breakpoints.down('xs')]: {
			fontSize: 14,
		},
	},
	activedevicestatus: {
		color: '#475677',
		opacity: 1,
		fontSize: 16,
		cursor: 'pointer',
		color: 'blue',
		[theme.breakpoints.down('xs')]: {
			fontSize: 14,
		},
	},
	statusButton: {
		'& .MuiButton-label': {
			color: '#ffffff',
			fontSize: 16,
			textTransform: 'capitalize',
			fontFamily: theme.typography.h5.fontFamily,
			fontWeight: 400,
		},
	},
	currentStatus: {
		'& .MuiTypography-h5': {
			color: '#08AA6D',
			fontSize: 16,
		},
	},
	breadcrumbContainer: {
		paddingBlock: 14,
		paddingInlineStart: 12,
	},
	breadcrumbone: {
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
		color: '#707070',
		letterSpacing: 0.5,
		cursor: 'pointer',
	},
	breadcrumbtwo: {
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
		color: '#707070',
		letterSpacing: 0.5,
	},
}))

export default function PasswordChange(props) {
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const [list, setList] = useState()

	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

	const getActiveDevices = () => {
		setLoading(true)
		activeDeviceList
			.ActiveDeviceList()
			.then(response => {
				setList(response?.data?.data)
				setLoading(false)
			})
			.catch(err => {
				setLoading(false)
				console.log(err)
			})
	}

	useEffect(() => {
		getActiveDevices()
	}, [])

	const deviceLogout = deviceUuid => {
		setLoading(true)
		let logoutData = {
			status: false,
		}
		const onSuccess = res => {
			setLoading(false)
			getActiveDevices()
		}
		const onFailure = err => {
			setLoading(false)
			console.log('active device logout', err)
		}
		activeDeviceLogout.activeDeviceLogout(deviceUuid, logoutData).then(onSuccess, onFailure)
	}

	const currentDevice = typeof window !== 'undefined' ? secureLocalStorage.getItem('DeviceUuuid') : null
	const deviceStatus = activeDeviceList => {
		let sameDevice = _.isEqual(currentDevice, activeDeviceList?.deviceUuid)
		if (sameDevice) {
			return (
				<div className={classes.currentStatus}>
					<Typography variant='h5'>Current Device</Typography>
				</div>
			)
		} else {
			return (
				<div className={classes.statusButton}>
					<SettingButton
						onClick={() => {
							deviceLogout(activeDeviceList?.deviceUuid)
						}}>
						Logout
					</SettingButton>
				</div>
			)
		}
	}
	// Handling Toggling btn Menu listYear and Menu listYear Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			{isMobile && (
				<>
					<section className={classes.breadcrumbContainer}>
						<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb' className={classes.breadCrumbsNavigation}>
							<Typography onClick={() => router.push('/settingmenu')} className={classes.breadcrumbone} variant='h5'>
								settingmenu
							</Typography>
							<Typography className={classes.breadcrumbtwo} variant='h5'>
								activedevice
							</Typography>
						</Breadcrumbs>
					</section>
					<Divider />
				</>
			)}
			{loading ? (
				<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<BeatLoader size={12} margin={2} color={'#24A0ED'} />
				</div>
			) : (
				<>
					<div className={classes.activedevicemain}>
						{!_.isEmpty(list) &&
							list.map(activeDeviceList => (
								<div key={activeDeviceList.deviceUuid} className={classes.activedevicesubmain}>
									<div>
										<Typography variant='h5' className={classes.activedevicename}>
											{activeDeviceList.osName}-{activeDeviceList.osVersion} {activeDeviceList.browserName}
										</Typography>
									</div>
									<div>
										<Typography variant='h5' className={classes.activedevicename}>
											Last logged in: {activeDeviceList.locCity}, {activeDeviceList.locCountry}{' '}
											{moment(new Date(activeDeviceList.loginTime)).fromNow()}
										</Typography>
									</div>
									{deviceStatus(activeDeviceList)}
								</div>
							))}
					</div>
				</>
			)}
		</>
	)
}
