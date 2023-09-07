import {makeStyles, Typography, TextField, Breadcrumbs, useTheme, useMediaQuery, Divider} from '@material-ui/core'
import DeleteAccountData from '../../../model/DeleteAccountData/data'
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
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
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
	activedevicesubmain: {
		display: 'flex',
		background: 'transparent linear-gradient(96deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		border: '1px solid #FFFFFF80',
		boxShadow: '0px 3px 6px #00000026',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginInline: 73,
		marginBlock: 0,
		marginBlockEnd: 24,
		borderRadius: 8,
		opacity: 1,
		maxWidth: 673,
		backdropFilter: 'blur(30px)',
		[theme.breakpoints.down('xs')]: {
			marginBlock: 0,
			marginBlockEnd: 18,
			borderRadius: 12,
			marginInline: 8,
			paddingBlock: 12,
			paddingInline: 8,
			gap: 22,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlock: 0,
			marginBlockEnd: 18,
			borderRadius: 12,
			marginInline: 8,
			paddingBlock: 12,
			paddingInline: 8,
			gap: 22,
		},
		[theme.breakpoints.up('md')]: {
			marginBlock: 0,
			marginBlockEnd: 18,
			borderRadius: 12,
			marginInline: 8,
			paddingBlock: 8,
			paddingInline: 12,
		},
		'& .MuiTypography-h6': {
			fontSize: 13,
			color: theme.palette.paragraph.main,
		},
	},
	inputStyle: {
		'& .MuiInputBase-root': {
			maxWidth: 458,
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

function DeleteAccount(props) {
	function CancelPrompt({open, handleClose, setOpenModal, onClick}) {
		const useStyles = makeStyles(theme => ({
			root: {
				'& .MuiButton-text': {
					color: theme.palette.lyfngo.main,
					textTransform: 'capitalize',
					fontFamily: theme.typography.h6.fontFamily,
					fontSize: theme.typography.h6.fontSize,
					borderRadius: 24,
				},
				'& .MuiButton-root': {
					boxShadow: 'none',
					padding: 0,
				},
			},
		}))
		const classes = useStyles()
		return (
			<div className={classes.root}>
				<AlertDialog
					title='Alert'
					children={'Are you sure you want to Delete your account ?'}
					open={open}
					handleClose={handleClose}
					okBtn={(onClick, handleClose)}
					cancelBtn={setOpenModal}
					handleConfirm={onClick}
				/>
			</div>
		)
	}
	const {toggleState, setToggleState} = props

	const classes = useStyles()

	const schema = yup.object().shape({
		otherField: yup
			.string()
			.nullable()
			.min(3, 'Please enter minimum 3 characters required')
			.max(100, 'Maximum allowed only 100 characters'),
	})
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(schema)})
	const [openModal, setOpenModal] = useState(false)
	const [value, setValue] = useState(null)
	const [showResults, setShowResults] = useState(false)
	const [notes, setNotes] = useState(false)
	const [textBox, setTextBox] = useState(false)
	const [change, setChange] = useState('')
	const expandMore = () => setShowResults(true)
	const expandNotificationPage = () => setNotes(true)
	const collapseNotification = () => setNotes(false)
	const expandInputBox = () => setTextBox(true)
	const collapseInputBox = () => setTextBox(false)
	const router = useRouter()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
	const handleChange = event => {
		setChange('')
		setValue(event.target.value)
	}
	const handleChangeText = event => {
		setChange('')
		setChange(event.target.value)
	}

	const promptOpen = () => {
		setOpenModal(true)
	}

	const {setToken, setUserId, setLoggedVia, setOtpVerified} = useAuth()

	const click_ref = React.useRef(null)

	const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null

	// const handleSubmit = evt => {
	// 	// evt.preventDefault()
	// 	console.log('others:', change, 'Value:', value)
	// }

	const deleteReason = (value, changeText) => {
		if (value) {
			if (value === 'text4') {
				return changeText
			} else {
				return value
			}
		}
	}

	useEffect(() => {
		const handleClick = () => {
			const data = {
				deleteReason: deleteReason(value, change),
				userType: 'CUS',
				uuid: userId,
				custB2C: true,
			}
			console.log('data', data)
			const onSuccess = res => {
				if (res?.data?.status === 'success') {
					secureLocalStorage.clear()
					router.push('/')
					setToken(null)
					setUserId(null)
					setLoggedVia(null)
					setOtpVerified(null)
				}
			}
			const onFailure = err => {
				console.log('Error', err)
			}
			deleteUserApi.DeleteUser(data).then(onSuccess, onFailure)
		}
		click_ref.current = handleClick
	}, [value, change])

	// Handling Toggling btn Menu listYear and Menu listYear Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}
	const onSubmit = data => console.log('data', data?.otherField)

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
								deleteaccount
							</Typography>
						</Breadcrumbs>
					</section>
					<Divider />
				</>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={classes.OrderMainPosition}>
					{/* <form onSubmit={handleSubmit}> */}
					{DeleteAccountData.map(
						({
							id,
							textcontent1,
							textcontent2,
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
									<Typography variant='h6'>{textcontent2}</Typography>
								</div>
								<Typography variant='h5' className={classes.backgroundcolor} onClick={expandMore}>
									{textcontent3}
								</Typography>
								{showResults ? (
									<>
										<div className={classes.textleavingcontent}>
											<Typography variant='h6' style={{fontWeight: 500}}>
												{textcontent4}
											</Typography>
											<Typography variant='h5'>{textcontent5}</Typography>
										</div>
										<div className={classes.textlistcontent}>
											<FormControl component='fieldset'>
												<RadioGroup aria-label='gender' name='gender1' value={value} onChange={handleChange}>
													<FormControlLabel
														value='I received too many notifications, emails and messages from LFYnGO'
														control={<Radio />}
														onClick={() => {
															expandNotificationPage()
															collapseInputBox()
														}}
														label='I received too many notifications, emails and messages from LFYnGO'
													/>
													{notes ? (
														<div className={classes.activedevicesubmain}>
															<Typography variant='h6'>
																<b>Note:</b> You can unsubscribe entirely from receiving promotional communication from LFYnGO In{' '}
																<Link href='notificationsetting'>
																	<a style={{textDecoration: 'none', color: 'rgb(0 208 0)', fontFamily: 'poppins', fontSize: 13}}>
																		Notification Settings
																	</a>
																</Link>
															</Typography>
														</div>
													) : null}
													<FormControlLabel
														value='I have another LFYnGO account'
														control={<Radio />}
														onClick={() => {
															collapseNotification()
															collapseInputBox()
														}}
														label='I have another LFYnGO account'
													/>
													<FormControlLabel
														value='I dont find LFYnGO useful'
														onClick={() => {
															collapseNotification()
															collapseInputBox()
														}}
														control={<Radio />}
														label='I dont find LFYnGO useful'
													/>
													<FormControlLabel
														value='text4'
														control={<Radio />}
														label='Others'
														onClick={() => {
															collapseNotification()
															expandInputBox()
														}}
													/>
													{textBox ? (
														<div className={classes.inputStyle}>
															<TextField
																name='otherField'
																id='otherField'
																value={change}
																type='text'
																{...register('otherField')}
																InputLabelProps={{
																	style: {
																		color: '#475677',
																		fontFamily: ['"Poppins"', 'sans-serif'].join(','),
																		fontSize: 14,
																	},
																}}
																variant='outlined'
																margin='dense'
																fullWidth
																onChange={handleChangeText}
																placeholder='Please enter the reason'
																error={errors.otherField}
															/>
															{errors?.otherField && (
																<Typography variant='h6' style={{color: 'red'}}>
																	{errors?.otherField?.message}
																</Typography>
															)}
														</div>
													) : null}
												</RadioGroup>
											</FormControl>
										</div>
										{change ? (
											<DeleteButton type='submit' onClick={() => (change.length >= 3 && change.length <= 100 ? promptOpen() : null)}>
												{textcontent10}
											</DeleteButton>
										) : value === 'I received too many notifications, emails and messages from LFYnGO' ? (
											<DeleteButton type='submit' onClick={() => promptOpen()}>
												{textcontent10}
											</DeleteButton>
										) : value === 'I have another LFYnGO account' ? (
											<DeleteButton type='submit' onClick={() => promptOpen()}>
												{textcontent10}
											</DeleteButton>
										) : value === 'I dont find LFYnGO useful' ? (
											<DeleteButton type='submit' onClick={() => promptOpen()}>
												{textcontent10}
											</DeleteButton>
										) : (
											<DeleteButton type='submit' onClick={() => promptOpen()} disabled={true}>
												{textcontent10}
											</DeleteButton>
										)}
									</>
								) : null}
							</div>
						)
					)}
					{/* </form> */}
					{/* onClick={() => click_ref.current()} */}
				</div>
			</form>
			<CancelPrompt
				open={openModal}
				handleClose={() => {
					setOpenModal(false)
				}}
				onClick={() => click_ref.current()}
			/>
		</>
	)
}

export default DeleteAccount
