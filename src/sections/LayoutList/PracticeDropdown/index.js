import React, {useEffect} from 'react'
import {TextField, makeStyles} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import secureLocalStorage from 'react-secure-storage'
import {useRouter} from 'next/router'
import CountIntegration from '../../../../Service/MyAccount/badgeCount'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiInputBase-root ': {
			color: '#000',
			fontSize: 14,
			paddingRight: '2px !important',
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			'& .MuiSvgIcon-root ': {
				color: '#000',
			},
		},
		'& .MuiAutocomplete-endAdornment': {
			position: 'relative',
		},
		'& .MuiFormControl-fullWidth': {
			[theme.breakpoints.down('xs')]: {
				width: '100%',
			},
			[theme.breakpoints.up('sm')]: {
				width: '100%',
			},
			[theme.breakpoints.up('lg')]: {
				width: 320,
			},
		},
	},
	establishmentName: {
		background: 'whitesmoke',
		borderRadius: 12,
		paddingInline: 12,
		paddingBlock: 8,
		'& .Mui-disabled': {
			background: '#f5f5f57a',
		},
	},
}))
export default function PracticeDropdown(props) {
	const classes = useStyles()
	const router = useRouter()
	const {
		query: {id},
	} = router
	const isAppt = router.pathname === '/myaccount/userappointmentdetails'
	const isWork = router.pathname === '/myaccount/workoutdetail'
	const isDiet = router.pathname === '/myaccount/dietplandetails'
	const isMem = router.pathname === '/myaccount/membershipdetails'
	const isClinical = id === 'clinicalnotes'
	const isFiles = id === 'files'

	// const isBoolean = detailsPath === '/myaccount/dietplandetails' || '/myaccount/membershipdetails' || '/myaccount/workoutdetail'
	const { menuListData, setPracticeName, practiceName, practicelist, setCustUuid, custUuid, tentUuid, setList } = useAuth()
	const displayTenentValue = value => {
		secureLocalStorage.setItem('tentUuid', value?.mastTentUuid)
		// secureLocalStorage.setItem('custUuid', value?.custUuid)
		// setCustUuid(value?.custUuid)
	}
	// useEffect(() => {
	// 	const onSuccess = res => {
	// 		if (res?.data?.status === 'success') {
	// 			setList(res.data)
	// 		} else {
	// 			setList([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('Error', err)
	// 	}
	// 	CountIntegration.CountIntegration(custUuid, tentUuid).then(onSuccess, onFailure)
	// }, [custUuid, setList, tentUuid])
	useEffect(() => {
		if (tentUuid !== null) {
			let obj = practicelist.find(item => item?.mastTentUuid === tentUuid)
			setPracticeName(obj)
			secureLocalStorage.setItem('custList', JSON.stringify(obj?.custListB2CVOS))
		} else {
			setPracticeName(practicelist[0])
			secureLocalStorage.setItem('custList', JSON.stringify(practicelist[0]?.custListB2CVOS))
		}
	}, [practicelist, setPracticeName, tentUuid])
	return (
		<>
			{isAppt || isWork || isDiet || isMem || isClinical || isFiles ? (
				<div className={classes.root}></div>
			) : (
				<div className={classes.root}>
					<Autocomplete
						id='combo-box-demo'
						options={practicelist}
						getOptionLabel={option => option.tentName || ''}
						value={practiceName}
						getOptionSelected={(option, value) => {
							return option?.tentName === value?.tentName
						}}
						onChange={(e, value) => {
							setPracticeName(value)
							displayTenentValue(value)
						}}
						disableClearable={true}
						renderInput={params => (
							<TextField
								{...params}
								variant='standard'
								size='small'
								placeholder='Establishment Name'
								className={classes.establishmentName}
								InputProps={{...params.InputProps, disableUnderline: true}}
							/>
						)}
					/>
				</div>
			)}
		</>
	)
}
