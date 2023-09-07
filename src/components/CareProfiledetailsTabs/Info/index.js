import {makeStyles, Divider, Typography} from '@material-ui/core'
import {LocationOn, Phone} from '@material-ui/icons'
import GradientButton from '../../GradientButton'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	card: {
		padding: 12,
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	leftSection: {
		// border: '1px solid black',
	},
	title: {
		'& .MuiTypography-h3': {
			color: theme.palette.care.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
				paddingBlock: 8,
				paddingInlineStart: 22,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				paddingBlock: 10,
				paddingInlineStart: 27,
			},
		},
	},
	address: {
		display: 'flex',
		gap: 4,
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiSvgIcon-root': {
			color: '#3498DB',
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
			},
		},
	},
	phone: {
		display: 'flex',
		gap: 4,
		paddingBlock: 6,
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiSvgIcon-root': {
			color: '#3498DB',
			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
			},
		},
	},
	time: {
		display: 'flex',
		gap: 12,
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
				paddingInlineStart: 22,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
				paddingInlineStart: 27,
			},
		},
	},
	rightSection: {
		paddingBlockStart: 20,
		// border: '1px solid #2ECC71',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			paddingBlockStart: 4,
			flexDirection: 'row',
			paddingInlineStart: 28,
			paddingInlineEnd: 4,
		},

		'& .MuiTypography-h6': {
			fontWeight: 500,
			color: theme.palette.paragraph.main,

			'& span': {
				marginRight: 4,
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 15,
			},
		},
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
		paddingBlock: 6,
	},
}))

export default function Info() {
	const classes = useStyles()
	const cardDatas = [
		{
			id: 1,
			title: 'Global HealthCare Hospitals',
			namehospital: 'SRM Hospital',
			street: 'Civil Aerodrome Post',
			city: 'Coimbatore, Tamilnadu – 641014.',
			phNumber: '+91 9876543210',
			startday: 'Mon - Sat',
			startdate: '6.00PM to 9.00AM',
			price: '199',
			link: '',
		},
		{
			id: 2,
			title: 'Apollo Hospitals',
			namehospital: 'SRM Hospital',
			street: 'Thiyagaraya nagar',
			city: 'Chennai, Tamilnadu – 641014.',
			phNumber: '+91 9876543210',
			startday: 'Mon - Fri',
			startdate: '6.00PM to 9.00AM',
			price: '399',
			link: '',
		},
	]
	return (
		<>
			{cardDatas.map(data => (
				<div key={data.id}>
					<div className={classes.card}>
						<div className={classes.leftSection}>
							<div className={classes.title}>
								<Typography variant='h3'>{data.title}</Typography>
							</div>
							<div className={classes.address}>
								<LocationOn />
								<div>
									<Typography variant='h5'>{data.namehospital}</Typography>
									<Typography variant='h5'>{data.street}</Typography>
									<Typography variant='h5'>{data.city}</Typography>
								</div>
							</div>
							<div className={classes.phone}>
								<Phone />
								<Typography variant='h5'>{data.phNumber}</Typography>
							</div>
							<div className={classes.time}>
								<Typography variant='h5'>{data.startday}:</Typography>
								<Typography variant='h5'>{data.startdate}</Typography>
							</div>
						</div>
						<div className={classes.rightSection}>
							<Typography variant='h6'>
								<span
									style={{
										fontWeight: 'bolder',
										fontFamily: 'Roboto',
									}}>
									&#8377;
								</span>
								{data.price}
							</Typography>
							<Link href={data.link}>
								<GradientButton findMorebtn={classes.findMorebtn}>Book Appointment</GradientButton>
							</Link>
						</div>
					</div>
					<Divider />
				</div>
			))}
		</>
	)
}
