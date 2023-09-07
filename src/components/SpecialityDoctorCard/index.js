import {makeStyles, Badge, Divider, Typography} from '@material-ui/core'
import Image from 'next/image'
import GradientButton from '../GradientButton'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

const useStyles = makeStyles(theme => ({
	CardContainer: {
		paddingBlockStart: 10,
	},
	cardRoot: {
		marginBlockEnd: 14,
	},
	card: {
		// background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		// boxShadow: 'rgba(9, 30, 66, 0.20) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
		// borderRadius: 12,
		padding: 16,

		[theme.breakpoints.down('sm')]: {
			padding: 8,
		},
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			justifyContent: 'space-between',
		},
	},
	firstSection: {
		display: 'flex',
		gap: 14,
		cursor: 'pointer',
	},
	imageSection: {
		'& .MuiTypography-h4': {
			color: theme.palette.care.main,
			paddingBlockStart: 6,
			maxWidth: 120,
			textAlign: 'center',
			fontSize: 14,
			fontStyle: 'normal',
			cursor: 'pointer',
			[theme.breakpoints.down('md')]: {
				fontSize: 12,
				maxWidth: 100,
			},
		},
	},
	imageContainer: {
		[theme.breakpoints.down('sm')]: {
			height: 120,
			width: 100,
		},
	},
	profileImage: {
		borderRadius: 12,
		objectFit: 'cover',
	},
	detailsSection: {},
	name: {
		'& .MuiTypography-h3': {
			color: theme.palette.care.main,
			fontFamily: 'Source Sans Pro',
			fontSize: 20,
			fontWeight: 600,
			letterSpacing: 0.2,
			paddingBlockEnd: 10,
			textTransform: 'capitalize',
			[theme.breakpoints.down('md')]: {
				fontSize: 17,
				paddingBlockEnd: 6,
			},
		},
	},
	experience: {
		display: 'flex',
		alignItems: 'flex-start',

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 13,
			fontSize: 16,
			color: '#475677',
			paddingBlockEnd: 8,
			maxWidth: 300,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
				paddingInlineStart: 4,
				paddingBlockEnd: 2,
			},
		},
	},
	location: {
		display: 'flex',
		alignItems: 'flex-start',

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			fontSize: 16,
			color: '#475677',
			paddingBlockEnd: 8,
			maxWidth: 300,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
				paddingInlineStart: 4,
				paddingBlockEnd: 2,
			},
		},
	},
	phone: {
		display: 'flex',
		alignItems: 'center',

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			fontSize: 16,
			color: '#475677',
			paddingBlockEnd: 8,

			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
				paddingInlineStart: 4,
				paddingBlockEnd: 2,
			},
		},
	},
	review: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		// paddingInlineStart: 10,
		// marginBlockStart: 10,

		[theme.breakpoints.down('sm')]: {},
	},

	reviewLike: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: '#1A73E8',
			fontSize: 20,
		},

		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			fontSize: 18,
			color: '#1A73E8',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	reviewStories: {
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			paddingInlineStart: 8,
			textDecoration: 'underline',
			fontSize: 16,
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},

	// consultSection
	consultSectionPrice: {
		[theme.breakpoints.down('sm')]: {
			marginBlockStart: 6,
		},
	},
	priceHeader: {
		display: 'flex',
		justifyContent: 'space-around',
		paddingBlockEnd: 8,
		[theme.breakpoints.down('sm')]: {
			paddingBlockEnd: 2,
		},

		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro',
			fontSize: 16,
			fontFamily: 'Source Sans Pro',
			fontStyle: 'normal',
			color: '#475677',
		},
	},
	priceNumber: {
		display: 'flex',
		justifyContent: 'space-evenly',

		'& .MuiTypography-h4': {
			fontFamily: 'Source Sans Pro',
			fontStyle: 'normal',
			color: '#475677',
			fontWeight: 600,

			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 18,
			},

			'& span': {
				marginRight: 6,
			},
		},
	},
	consultSectionAvailablity: {},
	availablity: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiBadge-colorPrimary': {
			backgroundColor: '#44b700',
		},
		'& .MuiBadge-colorSecondary': {
			backgroundColor: 'transparent',
		},

		'& .MuiBadge-anchorOriginTopRightRectangle': {
			top: 16,
			right: -4,
			[theme.breakpoints.down('sm')]: {
				top: 8,
			},
		},

		'& .MuiTypography-h5': {
			textAlign: 'center',
			fontSize: 16,
			fontStyle: 'normal',
			color: '#475677',

			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
				paddingBlock: 6,
			},
			[theme.breakpoints.up('md')]: {
				paddingBlock: 4,
				// marginBlock: 4,
			},
			[theme.breakpoints.up('lg')]: {
				paddingBlock: 14,
				// marginBlock: 14,
			},
		},
	},

	onlineGreenDot: {
		width: 10,
		height: 10,
		// borderRadius: '50%',
		background: '#36B37E',
	},

	availablityOptions: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		[theme.breakpoints.up('sm')]: {
			gap: 16,
		},
	},

	homeVisit: {
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'pre',
		'& .MuiSvgIcon-root': {
			fontSize: 20,
			marginRight: 4,
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
			},
		},

		'& .MuiTypography-h5': {
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},

	buttonContainer: {
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			// paddingBlockStart: 4,
			paddingBlockStart: 12,
		},
		[theme.breakpoints.up('md')]: {
			// paddingBlockStart: 6,
			// paddingBlockStart: 26,
		},
		[theme.breakpoints.up('lg')]: {
			// paddingBlockStart: 12,
			paddingBlockStart: 6,
		},
	},
	secondarySection: {
		minWidth: '35%',
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

export default function SpecialityDoctorCard(props) {
	const classes = useStyles()
	const {searchData} = props

	return (
		<div className={classes.CardContainer}>
			{searchData?.map(data => (
				<div key={data?.id} className={classes.cardRoot}>
					<div className={classes.card}>
						<div>
							<div className={classes.firstSection}>
								<div className={classes.imageSection}>
									<div className={classes.imageContainer}>
										<Image
											src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/unsplashDoctor.jpg'
											alt=''
											width={120}
											height={130}
											className={classes.profileImage}
										/>
									</div>
									<Typography variant='h4'>View Profile</Typography>
								</div>
								<div className={classes.detailsSection}>
									<div className={classes.name}>
										<Typography variant='h3'>Dr. {data?.doctorName}</Typography>
									</div>
									<div>
										<div className={classes.experience}>
											<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/stethoscope.svg'} alt='' width={22} height={22} />
											<Typography variant='h5'>{data?.specialization},23 Years Experience Overall</Typography>
										</div>
										<div className={classes.location}>
											<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/clock.svg'} alt='' width={24} height={24} />
											<Typography variant='h5'>Mon-Sat | 10:00 AM - 06:30 PM</Typography>
										</div>
										<div className={classes.review}>
											<div className={classes.reviewLike}>
												<ThumbUpIcon />
												<Typography variant='h5'>{'89'}%</Typography>
											</div>
											<div className={classes.reviewStories}>
												<Typography variant='h5'>({'346'} Reviews)</Typography>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={classes.secondarySection}>
							<div className={classes.consultSectionPrice}>
								<div className={classes.priceHeader}>
									{data?.online && <Typography variant='h4'>{'For Online'}</Typography>}
									{data?.clinic && <Typography variant='h4'>{'For Clinic'}</Typography>}
									{data?.HomeVisit && <Typography variant='h4'>{'For Home'}</Typography>}
								</div>

								<div className={classes.priceNumber}>
									{data?.online && (
										<Typography variant='h4'>
											<span
												style={{
													fontWeight: 'bolder',
													fontFamily: 'Roboto',
													color: '#475677',
												}}>
												&#8377;
											</span>
											{data?.onlineFees}
										</Typography>
									)}

									{/* make this below condition true for getting | symbol if second price value exists   */}
									{data?.clinic && <Typography variant='h4'>|</Typography>}
									{data?.clinic && (
										<Typography variant='h4'>
											<span
												style={{
													fontWeight: 'bolder',
													fontFamily: 'Roboto',
													color: '#475677',
												}}>
												&#8377;
											</span>
											{data?.clinicFees}
										</Typography>
									)}

									{/* make this below condition true for getting | symbol if third price value exists   */}
									{data?.HomeVisit && <Typography variant='h4'>|</Typography>}
									{data?.HomeVisit && (
										<Typography variant='h4'>
											<span
												style={{
													fontWeight: 'bolder',
													fontFamily: 'Roboto',
													color: '#475677',
												}}>
												&#8377;
											</span>
											{data?.homeFees}
										</Typography>
									)}
								</div>
							</div>
							<div className={classes.consultSectionAvailablity}>
								<div className={classes.availablity}>
									<Badge variant='dot' color={data?.availablity ? 'primary' : 'secondary'}>
										<Typography variant='h5'>Available</Typography>
									</Badge>
								</div>
							</div>
							<div className={classes.buttonContainer}>
								<GradientButton findMorebtn={classes.findMorebtn}>Contact hospital</GradientButton>
							</div>
						</div>
					</div>
					<Divider />
				</div>
			))}
		</div>
	)
}
