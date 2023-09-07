import React, {useEffect, useState, useCallback} from 'react'
import {
	Divider,
	makeStyles,
	Typography,
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	IconButton,
	Grid,
	Icon,
	Avatar,
} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import DietPlanDetailsList from '../../../../../Service/MyAccount/DietPlanDetails'
import {useRouter} from 'next/router'
import _ from 'lodash'
import moment from 'moment'
import {getProfileImgUrl} from '../../../../../lib/Utils/profileUrlImage'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'

import TabComponent from '../TabComponent/MealType'
import DataGridComponent from '../DataGridComponent'
import DatePicker from '../DatePicker'
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
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	root: {
		padding: '20px',

		'& .MuiTypography-h4': {
			color: '#707070',
			fontStyle: 'normal',
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		[theme.breakpoints.down('xs')]: {
			gap: '10%',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		[theme.breakpoints.down('md')]: {
			gap: '10%',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
	},
	OrderDetailsbackground: {
		cursor: 'pointer',
		'& .MuiSvgIcon-root': {
			width: 16,
		},
	},
	headerWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up('lg')]: {
			flexDirection: 'row',
		},
	},
	dateContainer: {
		minWidth: 24,
		display: 'flex',
		flexDirection: 'column',
		color: '#0B8D01',
	},
	quantityContainer: {
		display: 'flex',
		gap: 2,
		color: '#0B8D01',
	},
}))
const DientPlanDetail = props => {
	const {toggleState, setToggleState, dietplandetails} = props
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : ''
	const tentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('tentUuid') : ''
	const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : ''
	const {practiceName} = useAuth()
	const router = useRouter()
	const {
		query: {startDate, endDate},
	} = router
	const [dietPlanList, setDietPlanList] = useState([])
	const [value, setValue] = useState([`${moment(startDate).format('YYYY-MM-DD 00:00:00')}`, `${moment(endDate).format('YYYY-MM-DD 23:59:59')}`])
	console.log('value', value, startDate, endDate)
	const [date, setDate] = useState([`${moment(startDate).format('YYYY-MM-DD 00:00:00')}`, `${moment(endDate).format('YYYY-MM-DD 23:59:59')}`])
	const [pageSize, setPageSize] = useState(5)
	const classes = useStyles()
	const location = typeof window !== 'undefined' ? window.location.search : null
	const Uuid = location && location?.split('?')?.pop()
	const splitUuid = Uuid?.split('&')
	const getMastTentUuid = splitUuid?.[0]?.split('=')
	const mastTentUuid = getMastTentUuid?.[1]
	const [typeModetabValue, setTypeModeTabValue] = useState('Morning')
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	const handleModeTypeTab = (event, value) => {
		setTypeModeTabValue(value)
	}

	const DietPlanDetail = useCallback(() => {
		const body = {
			custUuid: custUuid,
			mealType: typeModetabValue,
			mastTentUuid: tentUuid,
			startDate: _.isEqual(date.length, 1) ? date[0] : date[0],
			endDate: _.isEqual(date.length, 1) ? date[0] : date[1],
		}

		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setDietPlanList(res?.data?.data?.dietPlanDtoList)
			}
		}
		const onFailure = err => {}

		DietPlanDetailsList.DietPlanDetails(body).then(onSuccess, onFailure)
	}, [custUuid, date, mastTentUuid, typeModetabValue, practiceName])

	useEffect(() => {
		DietPlanDetail()
	}, [DietPlanDetail])
	const columns = [
		{
			field: 'docDriveUuid',
			headerName: 'Image',
			width: 120,
			renderCell: params => {
				return (
					<>
						<Avatar
							alt={params?.row?.mealName}
							src={
								params?.row?.docDriveUuid
									? getProfileImgUrl(params?.row?.docDriveUuid, token)
									: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/doctor-image.png'
							}
						/>
					</>
				)
			},
		},
		{field: 'mealName', headerName: 'Food', width: 120},
		{field: 'mealType', headerName: 'Meal type', width: 120},
		{
			field: 'mealTime',
			headerName: 'Meal time',
			width: 120,
			renderCell: params => {
				console.log('params', params?.row?.mealTime)
				return (
					<>
						<Typography variant='body' style={{color: '#0B8D01'}}>
							{_.isEqual(params?.row?.mealTime, '-') ? params?.row?.mealTime : moment(params?.row?.mealTime).format('hh:mm A')}
						</Typography>
					</>
				)
			},
		},
		{
			field: 'quantity',
			headerName: 'Quantity',
			width: 120,
			renderCell: params => {
				return (
					<div className={classes.quantityContainer}>
						{_.isEqual(params?.row?.quantity, '-') && _.isEqual(params?.row?.unit, '-')
							? '-'
							: !_.isEqual(params?.row?.quantity, '-') && (
									<>
										<Typography variant='body'>{params?.row?.quantity}</Typography>
										<Typography variant='body'>{params?.row?.unit}</Typography>
									</>
							  )}
					</div>
				)
			},
		},
		{
			field: 'startDate',
			headerName: 'Date',
			width: 120,
			renderCell: params => {
				return (
					<div className={classes.dateContainer}>
						<Typography variant='body'>
							{_.isEqual(params?.row?.startDate, '-') ? params?.row?.startDate : moment(params?.row?.startDate).format('YYYY-MM-DD')}
						</Typography>
						<Typography variant='body'>
							{_.isEqual(params?.row?.endDate, '-') ? params?.row?.endDate : moment(params?.row?.endDate).format('YYYY-MM-DD')}
						</Typography>
					</div>
				)
			},
		},
		{field: 'mealCalories', headerName: 'Calories', width: 100},
		{field: 'mealProtein', headerName: 'Protein', width: 100},
		{field: 'mealCarbs', headerName: 'Carbs', width: 100},
		{field: 'mealFat', headerName: 'Fat', width: 100},
		{field: 'mealFiber', headerName: 'Fiber', width: 100},
	]
	const rows = _.map(dietPlanList || [], (item, index) => {
		return {
			id: item?.clientDietPlanUuid || index + 1,
			mealName: item?.mealName ? item?.mealName : '-',
			mealType: item?.mealType ? item?.mealType : '-',
			mealTime: item?.mealTime ? item?.mealTime : '-',
			quantity: item?.quantity ? item?.quantity : '-',
			unit: item?.unit ? item?.unit : '-',
			mealCalories: item?.mealCalories ? item?.mealCalories : '-',
			mealProtein: item?.mealProtein ? item?.mealProtein : '-',
			mealCarbs: item?.mealCarbs ? item?.mealCarbs : '-',
			mealFat: item?.mealFat ? item?.mealFat : '-',
			mealFiber: item?.mealFiber ? item?.mealFiber : '-',
			startDate: item?.startDate ? item?.startDate : '-',
			endDate: item?.endDate ? item?.endDate : '-',
			docDriveUuid: item?.docDriveUuid ? item?.docDriveUuid : '-',
		}
	})
	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.root}>
				<div className={classes.headerWrapper}>
					<div className={classes.OrderDetailsbackground}>
						<ArrowBackIosIcon onClick={() => router.back()} />
					</div>
					<Typography variant='h4'>Diet Details</Typography>
					<DatePicker
						setValue={setValue}
						value={value}
						getDateRange={dateFromPicker => {
							setDate(dateFromPicker)
						}}
					/>
				</div>
			</div>

			<Grid container lg={12} className={classes.root}>
				<TabComponent typeModetabValue={typeModetabValue} handleModeTypeTab={handleModeTypeTab} />
				<DataGridComponent columns={columns} rows={rows} pageSize={pageSize} setPageSize={setPageSize} />
			</Grid>
		</>
	)
}

export default DientPlanDetail
