import {makeStyles, Typography, Breadcrumbs, useTheme, useMediaQuery, Divider} from '@material-ui/core'
import DeleteAccountData from '../../../model/DeleteAccountData/LogoutData/data'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import React, {useState, useEffect} from 'react'
import DeleteButton from '../../../components/SettingButton'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import {useRouter} from 'next/router'
import deleteUserApi from '../../../../Service/Setting/DeleteUser'
import {IconButton} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import AlertDialog from '../../../components/AlertDialog'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import logoutApi from '../../../../Service/Setting/Logout'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import {toast} from 'react-toastify'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
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
	ordercardsubposition: {
		padding: 24,
		'& .MuiTypography-h5': {
			fontSize: 18,
			color: theme.palette.lyfngo.main,
		},
	},
	ordercarddetails: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		paddingBlock: 24,
		'& .MuiTypography-h6': {
			color: '#475677',
			fontSize: 16,
			fontFamily: theme.typography.h5.fontFamily,
			fontWeight: 500,
		},
	},
	textleavingcontent: {
		display: 'flex',
		flexDirection: 'column',
		paddingBlock: 12,
		gap: 6,
		'& .MuiTypography-h5': {
			fontSize: 16,
			color: '#475677',
		},
		'& .MuiTypography-h6': {
			fontSize: 18,
			color: '#000000b0',
		},
	},
	textlistcontent: {
		display: 'flex',
		flexDirection: 'column',
		paddingBlock: 12,
		gap: 6,
		'& .MuiFormControlLabel-root': {
			'& .MuiTypography-body1': {
				fontFamily: theme.typography.h5.fontFamily,
				fontSize: 16,
				color: theme.palette.paragraph.main,
			},
			'& .MuiRadio-colorSecondary.Mui-checked': {
				color: '#1976d2',
			},
		},
	},
	backgroundcolor: {
		color: '#1371E3',
		cursor: 'pointer',
	},
	textflex: {
		display: 'flex',
		gap: 8,
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			fill: '#475677',
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

function Logout(props) {
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const {setUser, token, setToken, setUserId, setLoggedVia, setOtpVerified, setOpenLocation} = useAuth()
	// const {setSearchSuggestions} = useContextApi()
	const [openModal, setOpenModal] = useState(false)
	const [value, setValue] = useState('female')
	const [showResults, setShowResults] = useState(false)
	const expandMore = () => setShowResults(true)
	const handleChange = event => {
		setValue(event.target.value)
	}
	const router = useRouter()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

	const deviceUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('DeviceUuuid') : null

	const DeviceLogOut = () => {
		if (deviceUuid) {
			const onSuccess = res => {
				secureLocalStorage.clear()
				router.push('/marketplace')
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
			logoutApi.LogoutDevice(deviceUuid, token).then(onSuccess, onFailure)
		} else {
			toast.error(<Typography variant='h5'>Please try after sometime </Typography>)
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
								logout
							</Typography>
						</Breadcrumbs>
					</section>
					<Divider />
				</>
			)}
			<div className={classes.OrderMainPosition}>
				{DeleteAccountData.map(
					({
						id,
						textcontent1, // textcontent2,
						textcontent3,
						textcontent4,
						textcontent5,
						textcontent6,
						textcontent7,
						textcontent8,
						textcontent9,
						textcontent10,
					}) => (
						<div key={id} className={classes.ordercardsubposition}>
							<div className={classes.ordercarddetails}>
								<Typography variant='h6'>{textcontent1}</Typography>
								{/* <Typography variant='h6'>{textcontent2}</Typography> */}
							</div>
							<DeleteButton onClick={() => DeviceLogOut()}>Logout</DeleteButton>
						</div>
					)
				)}
			</div>
		</>
	)
}

export default Logout
