import {makeStyles, Typography, IconButton, Divider} from '@material-ui/core'
import React from 'react'
import {useRouter} from 'next/router'
import YearPicker from '../../../../components/Yearpicker'
import Upcoming from '../../../../sections/Common/UpcomingCard'
import Previous from '../../../../sections/Common/PreviousCard'
import data from '../../../../model/LabTestData/data'
import Button from '@material-ui/core/Button'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		position: 'absolute',
		zIndex: '99999',
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
	// root: {
	// 	display: 'flex',
	// 	justifyContent: 'space-between',
	// 	[theme.breakpoints.down('xs')]: {
	// 		flexDirection: 'column',
	// 		gap: 4,
	// 	},
	// 	[theme.breakpoints.down('md')]: {
	// 		flexDirection: 'column',
	// 		gap: 8,
	// 	},
	// },
	// cardContainer: {
	// 	'& .MuiTypography-h5': {
	// 		fontSize: 16,
	// 		color: '#000',
	// 	},
	// },
	// listBox: {
	// 	display: 'flex',
	// 	gap: 88,
	// 	paddingTop: 7,
	// 	alignItems: 'center',
	// 	[theme.breakpoints.down('xs')]: {
	// 		justifyContent: 'space-between',
	// 		gap: 12,
	// 	},
	// 	[theme.breakpoints.down('md')]: {
	// 		gap: 20,
	// 	},
	// },
	// listBoxes: {
	// 	display: 'flex',
	// 	'& .MuiTypography-h6': {
	// 		color: '#707070',
	// 	},
	// },
	// dataTime: {
	// 	'& .MuiTypography-h6': {
	// 		color: '#707070',
	// 	},
	// },
	// listConnect: {
	// 	gap: 20,
	// 	display: 'flex',
	// 	padding: 7,
	// 	paddingInline: 15,
	// 	[theme.breakpoints.down('xs')]: {
	// 		paddingInline: 4,
	// 		padding: 2,
	// 		gap: 6,
	// 	},
	// 	[theme.breakpoints.down('md')]: {
	// 		paddingInline: 6,
	// 		padding: 4,
	// 		gap: 10,
	// 	},
	// },
	// buttonStyle: {
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// 	'& .MuiButton-outlined': {
	// 		border: '1px solid #7C60DC',
	// 	},
	// 	'& .MuiTypography-h6': {
	// 		fontSize: 14,
	// 		textTransform: 'none',
	// 		color: '#7C60DC',
	// 	},
	// },
	// calenderOne: {
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	flex: 1,
	// 	flexDirection: 'column',
	// 	padding: 14,
	// 	paddingInline: 26,
	// 	borderRadius: 20,
	// 	background: '#7C60DC 0% 0% no-repeat padding-box',
	// 	boxShadow: 'inset 0px 0px 10px #00000024, 0px 0px 8px #FFFFFF29',
	// 	borderRadius: 20,
	// 	opacity: 1,
	// 	'& .MuiTypography-h5': {
	// 		fontSize: 16,
	// 		color: '#fff',
	// 		fontWeight: 500,
	// 	},
	// 	[theme.breakpoints.down('xs')]: {
	// 		maxHeight: 64,
	// 		padding: 10,
	// 	},
	// 	[theme.breakpoints.down('md')]: {
	// 		maxHeight: 70,
	// 		padding: 10,
	// 	},
	// },
	// calenderTwo: {
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	flex: 1,
	// 	flexDirection: 'column',
	// 	padding: 14,
	// 	paddingInline: 26,
	// 	borderRadius: 20,
	// 	background: '#E0EAFF ',
	// 	boxShadow: 'inset 0px 3px 6px #00000029',
	// 	border: '1px solid #FFFFFF80',
	// 	backdropFilter: 'blur(30px)',
	// 	opacity: 1,
	// 	'& .MuiTypography-h5': {
	// 		fontSize: 16,
	// 		color: '#3D4756',
	// 		fontWeight: 500,
	// 	},
	// 	[theme.breakpoints.down('xs')]: {
	// 		maxHeight: 64,
	// 		padding: 10,
	// 	},
	// 	[theme.breakpoints.down('md')]: {
	// 		maxHeight: 70,
	// 		padding: 10,
	// 	},
	// },
	// buttonStyleTwo: {
	// 	display: 'flex',
	// 	justifyContent: 'space-evenly',
	// 	alignItems: 'center',
	// 	gap: 20,
	// 	'& .MuiButton-outlined': {
	// 		border: '1px solid #00B592',
	// 		[theme.breakpoints.down('xs')]: {
	// 			padding: '6px 1px',
	// 		},
	// 	},
	// 	'& .MuiButton-containedPrimary': {
	// 		color: '#fff',
	// 		backgroundColor: 'AliceBlue',
	// 		boxShadow: 'none',

	// 		'& .MuiTypography-h6': {
	// 			color: '#000',
	// 		},
	// 		[theme.breakpoints.down('xs')]: {
	// 			padding: '8px 8px',
	// 		},
	// 	},
	// 	'& .MuiTypography-h6': {
	// 		fontSize: 14,
	// 		color: '#00B592',
	// 		textTransform: 'none',
	// 		[theme.breakpoints.down('xs')]: {
	// 			fontSize: 11,
	// 		},
	// 	},
	// },
	// headLine: {
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	paddingInline: '4%',
	// 	paddingBlock: 7,
	// 	'& .MuiTypography-h5': {
	// 		fontSize: 15,
	// 		fontWeight: 400,
	// 		color: '#70707080',
	// 		padding: 2,
	// 		paddingInline: 30,
	// 		whiteSpace: 'nowrap',
	// 	},
	// },
	// lineBoder: {
	// 	borderColor: '#7070701c',
	// 	width: '100%',
	// 	maxWidth: 370,
	// },
	// Picker: {
	// 	display: 'flex',
	// 	paddingInline: 11,
	// },
	position: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		position: 'relative',
		height: '80vh',
	},
	blurBackground: {
		position: 'absolute',
		backdropFilter: 'blur(6px)',
		height: '100%',
		width: '100%',
		zIndex: 100,
		top: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))

export default function LabTest(props) {
	const {toggleState, setToggleState} = props
	const classes = useStyles()
	const router = useRouter()
	const {currency} = router.query

	// Handling Toggling btn Menu List and Menu List Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}
	const yearProps = () => {
		console.log('data')
	}

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.position}>
				<Image alt='no data pic' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoLabTest.svg' width={324} height={324} />
				<div className={classes.blurBackground}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/commingSoonSection.svg'
						alt='Comming Soon'
						width={300}
						height={100}
					/>
				</div>
			</div>
			{/* <div className={classes.headLine}>
				<hr className={classes.lineBoder} />
				<Typography variant='h5'>Upcoming</Typography>
				<hr className={classes.lineBoder} />
			</div> */}
			{/* {data.map(upcoming => (
				<div key={upcoming.id} className={classes.listConnect}>
					<div className={classes.calenderOne}>
						<Typography variant='h5'>{upcoming.month}</Typography>
						<Typography variant='h5'>{upcoming.date}</Typography>
					</div>
					<Upcoming>
						<div className={classes.root}>
							<div className={classes.cardContainer}>
								<Typography variant='h5'>{upcoming.test}</Typography>
								<div className={classes.listBox}>
									<div className={classes.listBoxes}>
										<Typography variant='h6'>{upcoming.day}</Typography>
										<Typography variant='h6'>{upcoming.time}</Typography>
									</div>
									<div className={classes.dataTime}>
										<Typography variant='h6'>{upcoming.care}</Typography>
									</div>
								</div>
							</div>
							<div className={classes.buttonStyle} onClick={() => router.push('/myaccount/Labdetails/?LabDetail=1', undefined, {shallow: true})}>
								<Button variant='outlined' color='primary'>
									<Typography variant='h6'>View details</Typography>
								</Button>
							</div>
						</div>
					</Upcoming>
				</div>
			))}
			{/* <_--previous--></_--previous--> */}
			{/* <div className={classes.headLine}>
				<hr className={classes.lineBoder} />
				<Typography variant='h5'>Previous Record</Typography>
				<hr className={classes.lineBoder} />
			</div>
			<div className={classes.Picker}>
				<YearPicker yearProps={yearProps} />
			</div>
			{data.map(upcoming => (
				<div key={upcoming.id} className={classes.listConnect}>
					<div className={classes.calenderTwo}>
						<Typography variant='h5'>{upcoming.month}</Typography>
						<Typography variant='h5'>{upcoming.date}</Typography>
					</div>
					<Previous>
						<div className={classes.root}>
							<div className={classes.cardContainer}>
								<Typography variant='h5'>{upcoming.test}</Typography>
								<div className={classes.listBox}>
									<div className={classes.listBoxes}>
										<Typography variant='h6'>{upcoming.day}</Typography>
										<Typography variant='h6'>{upcoming.time}</Typography>
									</div>
									<div className={classes.dataTime}>
										<Typography variant='h6'>{upcoming.care}</Typography>
									</div>
								</div>
							</div>
							<div className={classes.buttonStyleTwo} onClick={() => router.push('/myaccount/userappointmentdetails/?appointment=1', undefined, {shallow: true})}>
								<Button variant='outlined' color='primary'>
									<Typography variant='h6'>Book again</Typography>
								</Button>
								<Button variant='contained' color='primary'>
									<Typography variant='h6'>View details</Typography>
								</Button>
							</div>
						</div>
					</Previous>
				</div>
			))}  */}
		</>
	)
}
