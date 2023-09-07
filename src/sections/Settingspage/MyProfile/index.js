import React, {useState, useEffect, useCallback} from 'react'
import {
	Breadcrumbs,
	makeStyles,
	Typography,
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormLabel,
	FormControlLabel,
	InputLabel,
	Select,
	MenuItem,
	FormControl,
	Avatar,
	InputAdornment,
	useTheme,
	useMediaQuery,
	Divider,
} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import data from '../../../model/AccountFields/data'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import {createTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import Image from 'next/image'
import Autocomplete from '@material-ui/lab/Autocomplete'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import {IconButton} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import {ToastContainer, toast} from 'react-toastify'
import LookUpApi from './lookupApi'
import moment from 'moment'
import userProfileListApi from '../../../../Service/Setting/ProfileSettings/UserProfileList'
import _ from 'lodash'
import userProfileListUpdateApi from '../../../../Service/Setting/ProfileSettings/UserProfileListUpdate'
import PhotoUploadApi from '../../../../Service/Setting/ProfileSettings/PhotoUpload'
import GetProfileUploadApi from '../../../../Service/Setting/ProfileSettings/GetProfileUpload'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import {useRouter} from 'next/router'
import CityOptionsApi from '../../../../Service/Setting/ProfileSettings/CityOptions'
import {useStyles} from './style'
import {SignalCellularNullOutlined} from '@material-ui/icons'
import {getProfileImgUrl} from '../../../../lib/Utils/profileUrlImage'
import secureLocalStorage from 'react-secure-storage'
import {decryption, encryption, failureLogin} from '../../../../lib/Utils/AES'

const materialTheme = createTheme({
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: '#7047ea',
			},
		},
		MuiPickersCalendarHeader: {
			switchHeader: {
				backgroundColor: 'white',
				color: '#000',
			},
		},
		MuiPickersDay: {
			daySelected: {
				backgroundColor: '#7047ea',
			},
		},
	},
})

export default function Forms({toggleState, setToggleState}) {
	const [genderGroup, setGenderGroup] = useState('')
	const [bloodGroup, setBloodGroup] = useState('')
	const [bloodGroupCode, setBloodGroupCode] = useState([])
	const [timeZone, setTimeZone] = useState('')
	const [timeZoneCode, setTimeZoneCode] = useState([])
	const [countryName, setCountryName] = useState('')
	const [countryGroupCode, setCountryGroupCode] = useState([])
	const [language, setLanguage] = useState('')
	const [languageGroupCode, setLanguageGroupCode] = useState([])
	const [languageOptions, setLanguageOptions] = useState('')
	const [state, setState] = useState('')
	const [stateGroupCode, setStateGroupCode] = useState([])
	const [getValue, setGetValue] = useState({})

	const [cityParams, setCityParams] = useState({
		mastCountryCode: '',
		offset: 1,
		limit: 50,
		search: '',
	})
	const [cityOptionsParams, setCityOptionsParams] = useState({
		mastCountryCode: '',
		offset: 1,
		limit: 50,
		team: 'react',
		mastState: '',
		search: '',
	})
	const [cityOptions, setCityOptions] = useState([])
	const [city, setCity] = useState(null)
	const [selectedDate, setSelectedDate] = useState(null)
	const [toggledView, setToggledView] = useState(false)
	let str = '+'
	//Profile Pic updation
	const [imgAttach, setImgAttach] = useState(null)
	const [image, setImage] = useState(null)
	const [logoUuid, setLogoUuid] = useState(null)
	// const {user, getCustomerProfilePic, setGetProfilePic, country, setCountry, countryCodeOptions} = useAuth()
	const {
		user,
		getCustomerProfilePic,
		setGetProfilePic,
		country,
		setCountry,
		countryCodeOptions,
		secondaryCountry,
		setSecondaryCountry,
		token,
		userLogo,
	} = useAuth()

	const mobnolen = country?.mastLookupValue
	const alternateMobNumLen = secondaryCountry?.mastLookupValue
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
	const [isNewProfile, setIsNewProfile] = useState(false)
	const router = useRouter()

	const onAddAttachments = e => {
		let imgArray = Array.from(e.target.files)
		let result = _.find(imgArray, function(file) {
			if (_.get(file, 'size', 0) >= 2097152) return true
		})

		let isFileExceeded = result ? true : false

		if (isFileExceeded) {
			toast.error(<Typography variant='h5'>File size is too large. Maximum file size is 2 MB.</Typography>)
			e.target.value = ''
		} else {
			setImgAttach(...e.target.files)

			e.target.value = ''
		}
	}
	//File Upload
	useEffect(() => {
		if (imgAttach) {
			var formData1 = new FormData()
			formData1.append('FILE', imgAttach)
			const onSuccess = res => {
				if (res?.data?.status === 'SUCCESS') {
					setImage(res?.data?.data?.uuid)
					setLogoUuid(res?.data?.data?.uuid)
					return <>{toast.success(<Typography variant='h5'>Profile pic uploaded successfully </Typography>)}</>
				} else {
					toast.error(<Typography variant='h5'>Invalid Upload</Typography>)
				}
			}
			const onFailure = err => {
				toast.error(<Typography variant='h5'>Please upload the valid file</Typography>)
			}
			PhotoUploadApi.sendUploadFile(formData1).then(onSuccess, onFailure)
		}
	}, [imgAttach])

	const deleteImage = () => {
		const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
		const body = {
			type: 'CUS',
			uuid: custUuid,
		}
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setImage(null)
				setLogoUuid(null)
				return <>{toast.success(<Typography variant='h5'>Profile pic removed successfully </Typography>)}</>
			}
		}
		const onFailure = err => {
			toast.error(<Typography variant='h5'>Update failed</Typography>)
		}
		PhotoUploadApi.deleteFile(body, logoUuid).then(onSuccess, onFailure)
	}
	const onDateChange = date => {
		setSelectedDate(date)
	}

	const classes = useStyles()
	// Handling Toggling btn Menu listYear and Menu listYear Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}
	const schema = yup.object().shape({
		Names: yup
			.string()
			.nullable()
			.required('Please enter your name'),
		PhoneNumber: yup
			.string()
			.required('Pleaes enter the mobile number')
			.nullable()
			.matches(/^([1-9][0-9]*)?$/, 'Please enter the valid mobile number')
			.min(mobnolen, `Must be exactly ${mobnolen} digit`)
			.max(mobnolen, `Must be exactly ${mobnolen} digit`),
		Email: yup
			.string()
			.nullable()
			.required('Please enter your email')
			.email('Please enter a valid email'),
		country: yup
			.object()
			.nullable()
			.required('Please select any country'),
		AlternatePhoneNumber: yup
			.string()
			.nullable()
			.matches(/^([1-9][0-9]*)?$/, 'Please enter the valid mobile number')
			.min(alternateMobNumLen, `Must be exactly ${alternateMobNumLen} digit`)
			.max(alternateMobNumLen, `Must be exactly ${alternateMobNumLen} digit`),
		Pincode: yup
			.string()
			.notRequired()
			.nullable()
			.matches(/^([1-9][0-9]*)?$/, 'Please enter the valid mobile number')
			.max(6, 'Must be exactly 6 characters')
			.transform((v, o) => (o === '' ? null : v)),
		height: yup
			.number('Only numbers are allowed')
			.typeError('Height must be a number')
			.test('maxDigitsAfterDecimal', 'height field must have 2 digits after decimal or less', number => Number.isInteger(number * 10 ** 2))
			.notRequired()
			.positive('Height must be a positive value')
			.min(1, 'Min value is 1')
			.max(900, 'Max value is 900')
			.nullable(true)
			.transform((v, o) => (o === '' ? null : v)),
		weight: yup
			.number('Only numbers are allowed')
			.typeError('Weight must be a number')
			.test('maxDigitsAfterDecimal', 'weight field must have 2 digits after decimal or less', number => Number.isInteger(number * 10 ** 2))
			.notRequired()
			.positive('Weight must be a positive value')
			.min(1, 'Min value is 1')
			.max(700, 'Max value is 700')
			.nullable(true)
			.transform((v, o) => (o === '' ? null : v)),
	})

	// const defaultValues = {
	// 	country: countryName || '',
	// }
	const {
		register,
		handleSubmit,
		value,
		setValue,
		control,
		reset,
		resetField,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schema),
		// defaultValues,
	})
	const handleChange = (event, value) => {
		setGenderGroup(value)
	}
	// const phoneNumberChange = (e, value) => {
	// 	setValue('PhoneNumber', value)
	// 	// setPhoneNumber(value)
	// }
	const onChange = (e, value) => {
		setBloodGroup(value)
	}
	const onChangeTime = (e, value) => {
		setTimeZone(value)
	}
	const onChangeLanguage = (e, value) => {
		setLanguage(value)
	}
	const onInputState = (e, value) => {
		setCityParams({...cityParams, search: value})
	}
	const onChangeState = (e, value) => {
		setState(value)
		toggleField()
	}

	const onChangeCity = (e, value) => {
		setCity(value)
		toggleField()
	}
	const onInputCity = (e, value) => {
		setCityOptionsParams({...cityOptionsParams, search: value})
	}

	const [trigger, setTrigger] = useState(null)
	// update list
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null

	const onSubmit = data => {
		let countryStr = '+'
		const datas = {
			address1: data?.HouseNo,
			address2: data?.Locality,
			city: city,
			custAlternateContactNo: data?.AlternatePhoneNumber,
			custCountryCode: country ? `${countryStr + country?.mastLookupKey}` : null,
			custSecCountryCode: secondaryCountry ? countryStr + secondaryCountry?.mastLookupKey : null,
			custBloodGroup: bloodGroup?.mastLookupValue,
			custDob: (selectedDate && moment(selectedDate).format('YYYY-MM-DD')) || null,
			custTimezone: timeZone?.mastLookupValue,
			langPreference: language?.mastLookupValue,
			country: data?.country,
			state: state,
			custEmail: data?.Email,
			custGender: genderGroup,
			custMobileNo: data?.PhoneNumber,
			custName: data?.Names,
			isAddress: true,
			custIdentityUuid: typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null,
			postalCode: data?.Pincode,
			height: data?.height,
			weight: data?.weight,
			genderChanged: false,
			custLogoUuid: !_.isEmpty(logoUuid) ? logoUuid : null,
		}
		const decryptKey = encryption(datas)
		const onSuccess = res => {
			const successData = decryption(res)
			if (successData?.status === 'success') {
				getCustomerProfilePic()
				toast.success(<Typography variant='h5'>{isNewProfile ? 'Profile is Saved Successfully' : 'Profile is Updated Successfully'}</Typography>)
				setTrigger('trigger')
			} else {
				toast.error(<Typography variant='h5'>Update failed</Typography>)
			}
		}
		const onFailure = err => {
			// const failureData = failureLogin(err)
			toast.error(<Typography variant='h5'>Update failed</Typography>)
		}
		userProfileListUpdateApi.UserProfileListUpdate(decryptKey?.plainText, decryptKey?.publicKey).then(onSuccess, onFailure)
	}

	useEffect(() => {
		const onSuccess = res => {
			const successData = decryption(res)
			if (successData?.status === 'success') {
				setGetValue(successData)
				setState(successData?.data?.state)
				setCity(successData?.data?.city)
				setLogoUuid(successData?.data?.custLogoUuid)
				setGenderGroup(successData?.data?.custGender)
				setSelectedDate(successData?.data?.custDob)
				setValue('Names', successData?.data?.custName)
				setValue('PhoneNumber', successData?.data?.custMobileNo)
				setValue('Email', successData?.data?.custEmail)
				setValue('AlternatePhoneNumber', successData?.data?.custAlternateContactNo)
				setValue('Pincode', successData?.data?.postalCode)
				setValue('HouseNo', successData?.data?.address1)
				setValue('Locality', successData?.data?.address2)
				setValue('City', successData?.data?.city)
				setValue('height', successData?.data?.height)
				setValue('weight', successData?.data?.weight)
				let countryValue = successData?.data?.country?.mastLookupValue === undefined ? null : successData?.data?.country
				setValue('country', countryValue)
				let name = successData?.data?.custName
				let phoneNumer = successData?.data?.custMobileNo
				let email = successData?.data?.custEmail
				findIfNewProfile(name, phoneNumer, email)
				if (successData?.data?.custCountryCode && !_.isEmpty(countryCodeOptions)) {
					let initCode = _.find(countryCodeOptions, {
						mastLookupKey: successData?.data?.custCountryCode.slice(1),
					})
					setCountry(initCode)
				}

				if (successData?.data?.custSecCountryCode && !_.isEmpty(countryCodeOptions)) {
					let initCode = _.find(countryCodeOptions, {
						mastLookupKey: successData?.data?.custSecCountryCode.slice(1),
					})
					setSecondaryCountry(initCode)
				}
			}
		}
		const onFailure = err => {
			console.log('err', err)
		}
		userProfileListApi.UserProfileList(custUuid).then(onSuccess, onFailure)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countryCodeOptions, trigger])

	// setting default value for country field value
	// useEffect(() => {
	// 	setValue('country', countryName)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [countryName])

	// To find if new user or not
	const findIfNewProfile = (name, phoneNumer, email) => {
		if (name && phoneNumer && email) {
			setIsNewProfile(false)
		} else {
			setIsNewProfile(true)
		}
	}

	useEffect(() => {
		if (!_.isEmpty(languageGroupCode)) {
			let temp = _.find(languageGroupCode, {mastLookupValue: getValue?.data?.langPreference})
			setLanguage(temp)
		}
	}, [])

	useEffect(() => {
		if (countryName && getValue) {
			setCityParams({
				...cityParams,
				mastCountryCode: !_.isEmpty(countryName) ? countryName?.mastLookupKey : '',
				search: !_.isEmpty(getValue?.data?.state) ? getValue?.data?.state?.mastState : '',
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getValue, countryName])

	const toggleField = () => {
		setToggledView(!toggledView)
	}

	// Get City options
	const getCityOptions = useCallback(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setCityOptions(res?.data?.data)
			} else {
				setCityOptions([])
			}
		}
		const onFailure = err => {
			console.log('account settings city options get', err)
		}
		CityOptionsApi.CityOptions({...cityOptionsParams}).then(onSuccess, onFailure)
	}, [cityOptionsParams])
	useEffect(() => {
		if (!_.isEmpty(cityOptionsParams?.mastCountryCode) && !_.isEmpty(cityOptionsParams?.mastState)) {
			getCityOptions()
		}
	}, [cityOptionsParams, getCityOptions])

	useEffect(() => {
		if (!_.isEmpty(languageGroupCode)) {
			let options = _.find(languageGroupCode, {mastLookupValue: 'English'})
			setLanguageOptions(options)
		}
	}, [languageGroupCode])
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
								myprofile
							</Typography>
						</Breadcrumbs>
					</section>
					<Divider />
				</>
			)}

			<div className={classes.container}>
				<form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.head}>
						<Typography variant='body1'>My profile</Typography>
						<Button type='submit' variant='contained'>
							Save changes
						</Button>
					</div>
					<div className={classes.profileView}>
						<div className={classes.profileIcon}>
							<Typography className={classes.profileLabel} variant='h5'>
								Profile photo
							</Typography>
							{!_.isEmpty(userLogo || image) ? (
								<Avatar
									className={classes.avatarphoto}
									alt='user'
									src={getProfileImgUrl(userLogo || image ? userLogo || image : '', token)}
									sx={{width: 104, height: 104}}
								/>
							) : (
								<Avatar className={classes.avatarphoto} alt='user' src={''} sx={{width: 104, height: 104}} />
							)}
							<div className={classes.photoIcon}>
								<label htmlFor='icon-button-file'>
									<input accept='image/*' id='icon-button-file' type='file' className={classes.inputText} onChange={onAddAttachments} />
									<IconButton color='primary' aria-label='upload picture' component='span'>
										<PhotoCamera />
									</IconButton>
								</label>

								{image || logoUuid ? (
									<Button onClick={() => deleteImage()} className={classes.removeBtn}>
										Remove
									</Button>
								) : null}
							</div>

							{/* {user && <Avatar alt='Remy Sharp' 
							src={user.photoURL} width={90} height={90} style={{marginTop: 12, border: '2px solid #ccc'}} />} */}
						</div>
						<div className={classes.nameField}>
							{data.inputs
								.filter(name => name.id == 1)
								.map((input, id) => {
									return (
										<>
											<Typography key={id} variant='h5'>
												{input.label}
											</Typography>
											<TextField id='outlined-required' variant='outlined' margin='dense' type={input.type} {...register(input?.name)} />
											{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
										</>
									)
								})}
						</div>
					</div>
					<div className={classes.mailSection}>
						{data.inputs
							.filter(name => name.id === 2)
							.map((input, id) => {
								return (
									<>
										{/* <div className={classes.wrapper}>
											<div className={classes.wrapper1}>
												<Typography variant='h5'>{input.label}</Typography>
												<TextField
													key={id}
													id='outlined-required'
													variant='outlined'
													onChange={phoneNumberChange}
													inputProps={{maxLength: mobnolen}}
													InputProps={{
														startAdornment: (
															<InputAdornment position='start'>{getValue?.custCountryCode ? getValue?.custCountryCode : ''}</InputAdornment>
														),
													}}
													margin='dense'
													type={input.type}
													{...register(input?.name)}
												/>
											</div>
											<div className={classes.wrapper2}>
												{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
											</div>
										</div> */}
										<div className={classes.wrapper}>
											<div className={classes.wrapper1}>
												<Typography variant='h5'>{input.label}</Typography>
												<div className={classes.mobField}>
													<Autocomplete
														size='small'
														value={country}
														sx={{width: 20}}
														disableClearable
														className={classes.autocomplteCountryCode}
														options={_.orderBy(countryCodeOptions, 'mastLookupKey')}
														getOptionLabel={option => str.concat(option?.mastLookupKey || '')}
														// isOptionEqualToValue={(option, value) => option?.mastLookupKey === value}
														onChange={(e, value) => {
															setCountry(value)
															resetField('PhoneNumber')
														}}
														renderInput={params => (
															<TextField size='small' className={classes.TextField} color='secondary' variant='outlined' {...params} />
														)}
													/>
													<TextField
														key={id}
														id='outlined-required'
														variant='outlined'
														inputProps={{maxLength: mobnolen}}
														margin='dense'
														type={input.type}
														{...register(input?.name)}
													/>
												</div>
											</div>
											<div className={classes.wrapper2}>
												{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
											</div>
										</div>
									</>
								)
							})}
						{data.inputs
							.filter(name => name.id === 3)
							.map((input, id) => {
								return (
									<>
										<div className={classes.wrapper}>
											<div className={classes.wrapper1}>
												<Typography variant='h5'>{input.label}</Typography>
												<TextField key={id} id='outlined-required' variant='outlined' margin='dense' type={input.type} {...register(input?.name)} />
											</div>
											<div className={classes.wrapper2}>
												{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
											</div>
										</div>
									</>
								)
							})}
						<div className={classes.wrapper3}>
							<FormLabel component='legend'>Gender</FormLabel>
							<RadioGroup name='gender' value={genderGroup} onChange={handleChange} style={{display: 'flex'}}>
								<FormControlLabel value='M' control={<Radio />} label='Male' />
								<FormControlLabel value='F' control={<Radio />} label='Female' />
								<FormControlLabel value='O' control={<Radio />} label='Other' />
							</RadioGroup>
						</div>
					</div>
					<div className={classes.timeSection}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<FormControl classsName={classes.datePicker}>
								<Typography variant='h5' style={{color: '#475677'}}>
									Date of birth
								</Typography>
								<ThemeProvider theme={materialTheme}>
									<KeyboardDatePicker
										disableFuture
										margin='dense'
										inputVariant='outlined'
										format='dd-MM-yyyy'
										placeholder='dd-mm-yyyy'
										value={selectedDate}
										InputAdornmentProps={{position: 'end'}}
										onChange={date => onDateChange(date)}
									/>
								</ThemeProvider>
							</FormControl>
						</MuiPickersUtilsProvider>
						<FormControl variant='outlined' className={classes.bloodForm}>
							<Typography variant='h5'>Blood group</Typography>
							<Autocomplete
								ListboxProps={{
									style: {
										maxHeight: '9rem',
										fontSize: 14,
										background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
										fontFamily: ['"Poppins"', 'sans-serif'].join(','),
									},
								}}
								disableClearable={true}
								options={bloodGroupCode}
								getOptionLabel={option => option.mastLookupValue || ''}
								value={bloodGroup}
								onChange={onChange}
								fullWidth
								className={classes.test}
								renderInput={params => <TextField {...params} placeholder='Select a blood group' variant='outlined' />}
							/>
						</FormControl>
						<FormControl variant='outlined' className={classes.timezoneForm}>
							<Typography variant='h5'>Time zone</Typography>
							<Autocomplete
								disableClearable={true}
								ListboxProps={{
									style: {
										maxHeight: '9rem',
										fontSize: 14,
										background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
										fontFamily: ['"Poppins"', 'sans-serif'].join(','),
									},
								}}
								onChange={onChangeTime}
								value={timeZone}
								options={timeZoneCode}
								getOptionLabel={option => option.mastLookupValue || ''}
								// style={{width: 182}}
								fullWidth
								className={classes.test}
								renderInput={params => <TextField {...params} placeholder='Select a time zone' variant='outlined' />}
							/>
						</FormControl>
					</div>
					<div className={classes.head}>
						<Typography variant='body1'>Address</Typography>
					</div>
					<div className={classes.addressOne}>
						{data.inputs
							.filter(name => name.id >= 4 && name.id <= 5)
							.map((input, id) => {
								return (
									<>
										<div className={classes.wrapper}>
											<div className={classes.wrapper1}>
												<Typography variant='h5'>{input.label}</Typography>
												<TextField key={id} id='outlined-required' variant='outlined' margin='dense' type={input.type} {...register(input.name)} />
											</div>
										</div>
									</>
								)
							})}
						<section className={classes.bloodForm}>
							<Typography variant='h5'>Country *</Typography>
							<Controller
								render={({field}) => (
									<Autocomplete
										{...field}
										disableClearable={true}
										ListboxProps={{
											style: {
												maxHeight: '9rem',
												fontSize: 14,
												background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
												fontFamily: ['"Poppins"', 'sans-serif'].join(','),
											},
										}}
										fullWidth
										value={countryName}
										className={classes.test}
										options={countryGroupCode}
										getOptionLabel={option => option.mastLookupValue || ''}
										renderInput={params => <TextField {...params} placeholder='Choose a country' variant='outlined' />}
										onChange={(_, data) => {
											field.onChange(data)
											setCountryName(data)
											setCityParams({...cityParams, mastCountryCode: data?.mastLookupKey})
											setCityOptionsParams({...cityOptionsParams, mastCountryCode: data?.mastLookupKey})
										}}
									/>
								)}
								name='country'
								control={control}
							/>
							{errors['country'] && (
								<Typography variant='h6' style={{color: 'red'}}>
									{errors['country']?.message}
								</Typography>
							)}
						</section>
					</div>
					<div className={classes.addressTwo}>
						<FormControl variant='outlined' className={classes.bloodForm}>
							<Typography variant='h5'>State</Typography>
							<Autocomplete
								disableClearable={true}
								ListboxProps={{
									style: {
										maxHeight: '9rem',
										fontSize: 14,
										background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
										fontFamily: ['"Poppins"', 'sans-serif'].join(','),
									},
								}}
								options={stateGroupCode}
								value={state}
								onChange={(e, value) => {
									onChangeState(e, value)
									setCityOptionsParams({...cityOptionsParams, mastState: value?.mastState})
								}}
								onInputChange={onInputState}
								getOptionLabel={option => {
									return option.mastState || ''
								}}
								noOptionsText={_.isEmpty(countryName) ? 'Please Select Country' : 'No Options'}
								fullWidth
								className={classes.test}
								renderInput={params => <TextField {...params} placeholder='Choose a state' variant='outlined' />}
							/>
						</FormControl>
						<div className={classes.addressTwo}>
							<FormControl variant='outlined' className={classes.bloodForm}>
								<Typography variant='h5'>City</Typography>
								<Autocomplete
									name={'city'}
									disableClearable={true}
									ListboxProps={{
										style: {
											maxHeight: '9rem',
											fontSize: 14,
											background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
											fontFamily: ['"Poppins"', 'sans-serif'].join(','),
										},
									}}
									options={cityOptions}
									value={city}
									// onBlur={toggleField}
									// openOnFocus
									onChange={(e, value) => {
										onChangeCity(e, value)
									}}
									onInputChange={onInputCity}
									getOptionLabel={option => {
										return option.mastCities || ''
									}}
									noOptionsText={_.isEmpty(state) ? 'Please Select Country & State' : 'No Options'}
									fullWidth
									className={classes.test}
									renderInput={params => <TextField {...params} placeholder='Choose a city' variant='outlined' />}
								/>
							</FormControl>
						</div>
						{data.inputs
							.filter(name => name.id == 8)
							.map((input, id) => {
								return (
									<>
										<div className={classes.wrapper}>
											<Typography variant='h5'>{input.label}</Typography>
											<TextField key={id} id='outlined-required' variant='outlined' margin='dense' type={input.type} {...register(input.name)} />
											{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
										</div>
									</>
								)
							})}
					</div>
					<div className={classes.addressThree}>
						{data.inputs
							.filter(name => name.id == 9)
							.map((input, id) => {
								return (
									<>
										<div className={classes.wrapper}>
											<div className={classes.wrapper1}>
												<Typography variant='h5'>{input.label}</Typography>
												<div className={classes.alternatemobField}>
													<Autocomplete
														size='small'
														value={secondaryCountry}
														sx={{width: 20}}
														disableClearable
														className={classes.alternateCountryCode}
														options={_.orderBy(countryCodeOptions, 'mastLookupKey')}
														getOptionLabel={option => str.concat(option?.mastLookupKey || '')}
														onChange={(e, value) => {
															setSecondaryCountry(value)
															resetField('AlternatePhoneNumber')
														}}
														renderInput={params => (
															<TextField size='small' className={classes.TextField} color='secondary' variant='outlined' {...params} />
														)}
													/>
													<TextField
														key={id}
														variant='outlined'
														inputProps={{maxLength: alternateMobNumLen}}
														margin='dense'
														type={input.type}
														{...register(input?.name)}
													/>
												</div>
											</div>
											<div className={classes.wrapper2}>
												{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
											</div>
										</div>
									</>
								)
							})}
						<FormControl variant='outlined' className={classes.bloodForm}>
							<Typography variant='h5'>Language</Typography>
							<Autocomplete
								disableClearable={true}
								readOnly
								ListboxProps={{
									style: {
										maxHeight: '9rem',
										fontSize: 14,
										background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
										fontFamily: ['"Poppins"', 'sans-serif'].join(','),
									},
								}}
								options={languageGroupCode}
								onChange={onChangeLanguage}
								value={languageOptions}
								getOptionLabel={option => option.mastLookupValue || ''}
								fullWidth
								className={classes.test}
								renderInput={params => <TextField {...params} placeholder='Choose a language' variant='outlined' />}
							/>
						</FormControl>
					</div>
					<section className={classes.basicInfoWrapper}>
						<div className={classes.basicInfoText}>
							<Typography variant='body1'>Basics informations</Typography>
						</div>
						<div className={classes.basicInfoFields}>
							{data?.inputs
								.filter(name => name.id === 10)
								.map((input, id) => {
									return (
										<>
											<div className={classes.wrapper}>
												<Typography variant='h5'>{input.label}</Typography>
												<TextField key={id} id='outlined-required' variant='outlined' margin='dense' type={input.type} {...register(input.name)} />
												{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
											</div>
										</>
									)
								})}
							{data?.inputs
								.filter(name => name.id === 11)
								.map((input, id) => {
									return (
										<>
											<div className={classes.wrapper}>
												<Typography variant='h5'>{input.label}</Typography>
												<TextField
													key={id}
													id='outlined-required'
													variant='outlined'
													margin='dense'
													type={input.type}
													{...register(input.name)}
													step='any'
												/>
												{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
											</div>
										</>
									)
								})}
						</div>
					</section>
					<div className={classes.headTwo}>
						<Button type='submit' variant='contained'>
							Save changes
						</Button>
					</div>
				</form>
			</div>
			<LookUpApi
				setBloodGroupCode={setBloodGroupCode}
				setTimeZoneCode={setTimeZoneCode}
				setCountryGroupCode={setCountryGroupCode}
				setLanguageGroupCode={setLanguageGroupCode}
				setStateGroupCode={setStateGroupCode}
				cityParams={cityParams}
				setCityParams={setCityParams}
				getValue={getValue}
				bloodGroupCode={bloodGroupCode}
				setBloodGroup={setBloodGroup}
				timeZoneCode={timeZoneCode}
				setTimeZone={setTimeZone}
				languageGroupCode={languageGroupCode}
				setLanguage={setLanguage}
				countryGroupCode={countryGroupCode}
				setCountry={setCountryName}
				stateGroupCode={stateGroupCode}
				setState={setState}
			/>
			{/* <ToastContainer  /> */}
		</>
	)
}
