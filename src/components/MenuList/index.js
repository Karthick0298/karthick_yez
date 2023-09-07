import {makeStyles, Typography} from '@material-ui/core'
import React, {useState, useEffect, useCallback} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
// import CircularProgress from '@material-ui/core/CircularProgress'
import Skeleton from '@material-ui/lab/Skeleton'
// import MenuAppointment from '../../model/MenuAppointmentList/data'
import {useRouter} from 'next/router'
import _ from 'lodash'
import useAuth from '../../../lib/Utils/hooks/UseAuth'
import Badge from '@material-ui/core/Badge'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	MenuListToggle: {
		display: 'none',
	},
	MenuListstyle: {
		flexDirection: 'row',
		overflow: 'scroll',
		height: '70vh',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
		'& .MuiList-padding': {
			display: 'flex',
			flexDirection: 'column',
			gap: 12,
			[theme.breakpoints.down('xs')]: {
				borderRight: '0px solid #e4e4e4',
				display: 'none',
			},
			[theme.breakpoints.up('sm')]: {
				padding: 12,
			},
			[theme.breakpoints.up('md')]: {
				padding: '51px 38px',
			},
		},
		'& .MuiMenuItem-root': {
			textAlign: 'left',
			font: 'normal normal normal 18px/27px Poppins',
			letterSpacing: 0.54,
			color: '#3D4756',
			opacity: 1,
			fontSize: 14,
			lineHeight: 2.2,
			borderRadius: 6,
			display: 'flex',
			justifyContent: 'space-between',
			padding: 0,
			paddingInlineStart: 12,
			gap: 38,
		},
		// '& .MuiListItem-button:hover': {
		// 	backgroundColor: '#FCEAEA',
		// },
		'& .MuiListItem-root.Mui-selected': {
			backgroundColor: '#FCEAEA',
		},

		'& .MuiBadge-anchorOriginTopLeftRectangle': {
			left: -19,
		},
		'& .MuiBadge-anchorOriginTopRightRectangle': {
			top: 8,
			right: 10,
		},
		'& .MuiBadge-badge': {
			height: 0,
			fontSize: 'revert',
		},
	},
	RouterPosition: {
		flex: 1,
	},
	badgerbackground: {
		backgroundColor: '#FCEAEA',
		padding: 10,
		borderRadius: 6,
		color: 'red',
		fontFamily: 'Poppins',
	},
	opacityZero: {
		opacity: 0,
		backgroundColor: '#FCEAEA',
		padding: 10,
		borderRadius: 6,
		fontFamily: 'Poppins',
	},
	badge: {
		// backgroundColor: '#FCEAEA',
		padding: 8,
		backgroundColor: '#FCEAEA',
		padding: 10,
		borderRadius: 6,
		color: 'red',
		fontFamily: 'Poppins',
	},
	root: {
		'& .MuiTypography-body1': {
			fontSize: theme.typography.h5.fontSize,
			color: theme.palette.paragraph.main,
			fontWeight: 500,
		},
		'& .MuiTypography-h5': {
			fontSize: 16,
		},
	},
}))

export default function MenuListComponent(props) {
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const {setList, list, menuListData, practiceName} = useAuth()
	// const [list, setList] = useState([])
	// console.log('listlist', list)
	const [loading, setLoading] = useState(true)
	const [selectedIndex, setSelectedIndex] = useState()
	const router = useRouter()
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

	// const menuListData = useCallback(() => {
	// 	setLoading(true)
	// 	const onSuccess = res => {
	// 		if (res?.data?.status === 'success') {
	// 			setList(res.data)
	// 			setLoading(false)
	// 		} else {
	// 			setList([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('Error', err)
	// 		setLoading(false)
	// 	}
	// 	CountIntegration.CountIntegration().then(onSuccess, onFailure)
	// }, [])
	useEffect(() => {
		menuListData()
	}, [menuListData])

	useEffect(() => {
		if (!list.length) {
			const data = secureLocalStorage.getItem('count')
			if (data) {
				setList(data)
			}
		}
	}, [])

	useEffect(() => {
		secureLocalStorage.setItem('count', list)
	}, [])

	// const skeletonArray = Array(1).fill('')
	return (
		<>
			{/* {loading &&
				skeletonArray.map((item, index) => (
					<div key={index} style={{width: '26%', padding: '51px 38px', borderRight: '1px solid #e4e4e4'}}>
						<MenuList>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
							<MenuItem>
								<Skeleton animation='wave' width='100%' height={42} />
							</MenuItem>
						</MenuList>
					</div>
				))} */}
			{list && (
				<div className={toggleState ? classes.MenuListToggle : classes.MenuListstyle}>
					<MenuList className={classes.root}>
						<MenuItem
							// component={Typography}
							className={currentPath === 'appointments' ? classes.selectedBg : classes.background}
							selected={currentPath === 'appointments'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/appointments', undefined, {shallow: true}))}>
							Appointments
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.AppointmentCount}>
										<>
											<Badge badgeContent={item.AppointmentCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem>
						{/* <MenuItem
							className={currentPath === 'onlineconsultation' ? classes.selectedBg : classes.background}
							selected={currentPath === 'onlineconsultation'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/onlineconsultation', undefined, {shallow: true}))}>
							Online consultations
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.OnlineConsultCount}>
										<>
											<Badge badgeContent={item.OnlineConsultCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem> */}
						{/* <MenuItem
							className={currentPath === 'labtest' ? classes.selectedBg : classes.background}
							selected={currentPath === 'labtest'}
							onClick={event => {
								handleListItemClick(event, router.push('/myaccount/labtest', undefined, {shallow: true}))
							}}>
							Lab Test
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.labtest}>
										<>
											<Badge badgeContent={item.labtest} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem> */}

						<MenuItem
							// component={Typography}
							className={currentPath === 'workoutplan' ? classes.selectedBg : classes.background}
							selected={currentPath === 'workoutplan'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/workoutplan', undefined, {shallow: true}))}>
							Workout Plan
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.WorkoutPlanCount}>
										<>
											<Badge badgeContent={item.WorkoutPlanCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem>

						{/* <MenuItem
							className={currentPath === 'order' ? classes.selectedBg : classes.background}
							selected={currentPath === 'order'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/order', undefined, {shallow: true}))}>
							Orders
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.OrderCount}>
										<>
											<Badge badgeContent={item.OrderCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem> */}
						<MenuItem
							className={currentPath === 'dietplan' ? classes.selectedBg : classes.background}
							selected={currentPath === 'dietplan'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/dietplan', undefined, {shallow: true}))}>
							Diet Plan
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.DietPlanCount}>
										<>
											<Badge badgeContent={item.DietPlanCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem>

						<MenuItem
							className={currentPath === 'membership' ? classes.selectedBg : classes.background}
							selected={currentPath === 'membership'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/membership', undefined, {shallow: true}))}>
							Membership
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.MembershipCount}>
										<>
											<Badge badgeContent={item.MembershipCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem>
						<MenuItem
							// component={Typography}
							className={currentPath === 'healthrecords' ? classes.selectedBg : classes.background}
							selected={currentPath === 'healthrecords'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/healthrecords', undefined, {shallow: true}))}>
							Health Records
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.HealthRecord}>
										<>
											<Badge badgeContent={item.HealthRecord} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem>
						<MenuItem
							// component={Typography}
							className={currentPath === 'payment' ? classes.selectedBg : classes.background}
							selected={currentPath === 'payment'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/payment', undefined, {shallow: true}))}>
							Payments
							{/* {!_.isEmpty(list) ? (
								list?.data?.map(item => <Typography className={classes.badgerbackground}>{item.PaymentCount}</Typography>)
							) : (
								<Typography className={classes.opacityZero}>{'6'}</Typography>
							)} */}
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.PaymentCount}>
										<>
											<Badge badgeContent={item.PaymentCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem>
						{/* <MenuItem
							className={currentPath === 'feedback' ? classes.selectedBg : classes.background}
							selected={currentPath === 'feedback'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/feedback', undefined, {shallow: true}))}>
							Feedback
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.feedBackCount}>
										<>
											<Badge badgeContent={item.feedBackCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem> */}

						{/* <MenuItem
							className={currentPath === 'articles' ? classes.selectedBg : classes.background}
							selected={currentPath === 'articles'}
							onClick={event => handleListItemClick(event, router.push('/myaccount/articles', undefined, {shallow: true}))}>
							Articles
							{!_.isEmpty(list) ? (
								list?.data?.map(item => (
									<Typography variant='h5' className={classes.badgerbackground} key={item.ArticleCount}>
										<>
											<Badge badgeContent={item.ArticleCount} showZero className={classes.badgerbackground}></Badge>
										</>
									</Typography>
								))
							) : (
								<Typography variant='h5' className={classes.opacityZero}>
									{'6'}
								</Typography>
							)}
						</MenuItem> */}
					</MenuList>
				</div>
			)}
		</>
	)
}
