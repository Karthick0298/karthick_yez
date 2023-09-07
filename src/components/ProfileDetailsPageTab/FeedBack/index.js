import {makeStyles, Divider, Typography} from '@material-ui/core'
import Image from 'next/image'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
	root: {
		// border: '1px solid black',
		padding: 10,
	},
	cardContainer: {
		paddingBlockStart: 8,
	},
	personDetails: {
		// border: '1px solid green',
		display: 'flex',
		gap: 12,
		alignItems: 'center',
		'& .MuiTypography-h5': {
			// fontFamily: 'Poppins',
			fontSize: 16,
			fontWeight: 500,
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: 15,
			},
		},
		'& .MuiTypography-h6': {
			fontSize: 14,
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: 13,
			},
		},
	},
	timeAgo: {
		'& .MuiTypography-h6': {
			fontSize: 14,
			color: '#ABB2B9',

			[theme.breakpoints.down('xs')]: {
				fontSize: 12,
			},
		},
	},
	profileContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	profilePic: {
		borderRadius: '50%',
		objectFit: 'cover',
		[theme.breakpoints.down('xs')]: {
			height: 40,
			width: 40,
		},
		[theme.breakpoints.down('sm')]: {
			height: 40,
			width: 40,
		},
	},
	reviewContainer: {
		paddingBlockStart: 6,
		'& .MuiTypography-h5': {
			// fontFamily: 'Poppins',
			fontSize: 16,
			fontWeight: 500,
			color: '#475677',
			paddingBlockEnd: 4,

			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h6': {
			fontSize: 16,
			color: '#475677',
			lineHeight: 1.2,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: 13,
			},
		},
	},
	recommend: {
		paddingBlockStart: 4,
		paddingBlockEnd: 8,
		'& .MuiTypography-h5': {
			// fontFamily: 'Poppins',
			display: 'flex',
			alignItems: 'center',
			fontSize: 16,
			fontWeight: 500,
			color: '#475677',
			paddingBlockEnd: 4,
			'& span': {
				fontSize: 13,
				// paddingInline: 4,
				marginInlineStart: 10,
				border: `1px solid ${theme.palette.care.main}`,
				borderRadius: 4,
				color: theme.palette.care.main,
				paddingInline: 3,
				[theme.breakpoints.down('sm')]: {
					fontSize: 12,
				},
				[theme.breakpoints.down('xs')]: {
					fontSize: 11,
				},
			},

			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: 14,
			},
		},
	},

	//  No Data
	noData: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 220,
		[theme.breakpoints.down('sm')]: {
			height: 160,
		},
		'& .MuiTypography-h5': {
			color: '#475677',
			fontWeight: 500,
			marginBlockStart: 12,

			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
			},
		},
	},
}))

export default function FeedBack() {
	const classes = useStyles()

	const cardDatas = [
		{
			id: 1,
			name: 'John Doe',
			age: 26,
			time: '2022-01-04T11:54:21+05:30',
			commentTitle: 'Visited for chest pain',
			commentDesc: 'The Doctor was Physicians should be personable, great listeners, and empathetic to the concerns of their patients The Doctor was',
			friendliness: true,
			satisfaction: true,
		},
		{
			id: 2,
			name: 'Jhony wick',
			age: 28,
			time: '2022-01-01T11:54:21+05:30',
			commentTitle: 'Visited for Leg fracture',
			commentDesc: 'The Doctor was Physicians should be personable, great listeners, and empathetic to the concerns of their patients The Doctor was',
			friendliness: false,
			satisfaction: true,
		},
	]

	return (
		<div className={classes.root}>
			{cardDatas.map(data => (
				<div className={classes.cardContainer} key={data.id}>
					<div className={classes.profileContainer}>
						<div className={classes.personDetails}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/endcustomer.jpg' alt='' width={54} height={54} className={classes.profilePic} />
							<div>
								<Typography variant='h5'>{data.name}</Typography>
								<Typography variant='h6'>{data.age} years</Typography>
							</div>
						</div>
						<div className={classes.timeAgo}>
							<Typography variant='h6'>{moment(`${data.time}`).startOf('hour').fromNow()}</Typography>
						</div>
					</div>
					<div className={classes.reviewContainer}>
						<Typography variant='h5'>{data.commentTitle}</Typography>
						<Typography variant='h6'>{data.commentDesc} </Typography>
					</div>
					<div className={classes.recommend}>
						<Typography variant='h5'>
							Recommends for:
							<div>
								{data.friendliness && <span>Friendliness</span>}
								{data.satisfaction && <span>Satisfaction</span>}
							</div>
						</Typography>
					</div>
					<Divider />
				</div>
			))}

			{/* When no feed back data then, the below block renders */}
			{false && (
				<div className={classes.noData}>
					<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noFeedbackData.png' alt='' width={100} height={100} className={classes.noDataImg} />
					<Typography variant='h5'>No feedback yet</Typography>
				</div>
			)}
		</div>
	)
}
