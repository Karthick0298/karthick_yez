import {makeStyles, Breadcrumbs, Typography, Tooltip, Paper} from '@material-ui/core'
import {ThumbUpAlt, NavigateNext} from '@material-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import ReadMoreWrapper from '../ReadMoreWrapper'
import React, {useEffect, useState, useCallback} from 'react'
import doctorDetailsApi from '../../../Service/ProfileList/DoctorDetails'
import _ from 'lodash'
import {SyncLoader} from 'react-spinners'
import ReadMore from '../ProfileDetailsTabView/QuestionAnsTab/ReadMore'

const useStyles = makeStyles(theme => ({
	profileDetailsRoot: {
		// [theme.breakpoints.down('sm')]: {
		// 	paddingInline: 10,
		// },
		// [theme.breakpoints.up('sm')]: {
		// 	paddingInlineStart: 100,
		// 	paddingInlineEnd: 30,
		// },
		// [theme.breakpoints.up('md')]: {
		// 	paddingInline: 100,
		// },
		minWidth: '100%',

		'& .MuiPaper-root': {
			minWidth: '100%',
			maxWidth: '100%',
			background: 'transparent linear-gradient(130deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			border: '2px solid #FFFFFF80',
			borderRadius: 12,
			padding: 18,
			[theme.breakpoints.down('sm')]: {
				padding: 8,
			},
		},
	},

	breadCrumbsNavigation: {
		paddingBlock: 8,

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 4,
			paddingBlockEnd: 6,
		},

		'& a': {
			fontSize: 16,
			color: '#475677',
			textDecoration: 'none',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiSvgIcon-root': {
			color: '#475677',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h5': {
			fontFamily: 'Source Sans Pro',
			fontSize: 16,
			color: '#253252',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	detailsDivision: {
		'& .MuiTypography-h3': {
			color: props => props.fontColor,
			fontSize: 22,
			paddingBlockEnd: 4,
			[theme.breakpoints.down('sm')]: {
				fontSize: 17,
			},
		},
		'& .MuiTypography-h4': {
			color: '#253252',
			fontSize: 16,
			fontStyle: 'normal',
			paddingBlock: 4,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h5': {
			color: '#253252',
			fontSize: 16,
			paddingBlock: 4,
			[theme.breakpoints.down('sm')]: {
				fontSize: 13,
			},

			'& span': {
				color: props => props.fontColor,
				fontWeight: 500,
			},
		},
	},
	profileSectionOne: {
		display: 'flex',
		gap: 18,
		[theme.breakpoints.down('sm')]: {
			gap: 12,
		},
	},
	profileSectionTwo: {
		[theme.breakpoints.down('sm')]: {
			// display: 'none',
		},
		'& .MuiTypography-h5': {
			color: '#253252',
			fontSize: 16,
			paddingBlock: 6,
			// textAlign: 'justify',
			[theme.breakpoints.down('sm')]: {
				fontSize: 13,
			},

			'& span': {
				color: props => props.fontColor,
				fontWeight: 500,
			},
		},
	},
	imageSection: {
		[theme.breakpoints.down('sm')]: {
			maxWidth: 100,
			maxHeight: 100,
		},
	},
	profileImage: {
		borderRadius: 8,
	},
	imageDivision: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	likeAndReview: {},
	// likeSectionn: {
	// 	display: 'flex',
	// 	gap: 6,
	// 	alignItems: 'center',
	// 	'& .MuiSvgIcon-root': {
	// 		fontSize: 18,
	// 		color: props => props.fontColor,
	// 		[theme.breakpoints.down('sm')]: {
	// 			fontSize: 16,
	// 		},
	// 	},
	// 	'& .MuiTypography-h5': {
	// 		color: '#253252',
	// 		fontSize: 13,
	// 		paddingBlock: 3,
	// 		[theme.breakpoints.down('sm')]: {
	// 			fontSize: 12,
	// 		},
	// 	},
	// },
	reviewChunk: {
		'& .MuiTypography-h5': {
			color: '#253252',
			fontSize: 13,
			paddingBlock: 3,
			cursor: 'pointer',
			textDecoration: 'underline',

			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
	availablity: {
		display: 'flex',
		alignItems: 'center',
		gap: 18,

		'& .MuiTypography-h5': {
			color: '#253252',
			fontSize: 16,
			paddingBlock: 4,
			fontWeight: 500,

			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
		},
	},
	availablityIconContainer: {
		display: 'flex',
		gap: 14,
	},
	availablityIcon: {
		width: 35,
		height: 35,
		borderRadius: '20%',
		[theme.breakpoints.down('sm')]: {
			backgroundPosition: 'center',
			width: 25,
			height: 25,
		},
	},
	shareStories: {
		display: 'flex',
		justifyContent: 'flex-end',
		'& .MuiTypography-h5': {
			color: props => props.fontColor,
			fontSize: 14,

			[theme.breakpoints.down('sm')]: {
				paddingBlock: 4,
				fontSize: 11,
				fontFamily: theme.typography.h5.fontFamily,
			},
		},
	},
	readMoreStyles: {
		color: '#253252',
		fontSize: 17,
		[theme.breakpoints.down('sm')]: {
			fontSize: 15,
		},
	},
	imageLoader: {
		width: '120px',
		height: '120px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}))

export default function ProfileDetail(props) {
	const classes = useStyles(props)
	const {fontColor} = props
	// console.log('fontColor', fontColor)
	const [profileDetails, setProfileDetails] = useState([])
	const [profilePic, setProfilePic] = useState([])
	const [totalExperience, setTotalExperience] = useState(null)
	const [loading, setLoading] = useState(true)

	// Getting mastTentUuid and tentUserUuid from browser window
	const location = typeof window !== 'undefined' ? window.location.search : null
	const Uuid = location && location?.split('?')?.pop()
	const splitUuid = Uuid?.split('&')
	const getMastTentUuid = splitUuid?.[0]?.split('=')
	const mastTentUuid = getMastTentUuid?.[1]
	const getTentUserUuid = splitUuid?.[1]?.split('=')
	const tentUserUuid = getTentUserUuid?.[1]

	const getDoctorProfileDetails = useCallback(() => {
		setLoading(true)
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setLoading(false)
				setProfileDetails(res?.data?.data)
				setProfilePic(res?.data?.data?.tenantUserVO?.profilePicEncryptedKey?.filePath)
			} else {
				setProfileDetails([])
				setProfilePic([])
				setLoading(false)
			}
		}
		const onFailure = err => {
			console.log('Doctor Profile Details ', err)
		}
		doctorDetailsApi
			.DoctorDetails(mastTentUuid, tentUserUuid)
			.then(onSuccess)
			.catch(onFailure)
	}, [mastTentUuid, tentUserUuid])

	useEffect(() => {
		getDoctorProfileDetails()
	}, [getDoctorProfileDetails, location])

	const getExperience = () => {
		const experiencesLists = profileDetails?.experiencesLists?.map(val => val?.experienceYear)
		setTotalExperience(experiencesLists?.reduce((total, sum) => total + sum, 0))
	}

	useEffect(() => {
		getExperience()
	}, [getExperience])

	return (
		<div className={classes.profileDetailsRoot}>
			<Paper elevation={0}>
				<div className={classes.profileSectionOne}>
					<div className={classes.imageDivision}>
						<div className={classes.imageSection}>
							{_.isEmpty(profilePic) ? (
								<div className={classes.imageLoader}>
									<SyncLoader size={7} margin={2} color={fontColor} />
								</div>
							) : (
								<Image src={profilePic} alt='Profile Pic' width={140} height={140} className={classes.profileImage} />
							)}
						</div>
						<div className={classes.likeAndReview}>
							{/* <div className={classes.likeSectionn}>
								<ThumbUpAlt />
								<Typography variant='h5'>{profileDetails?.feedback?.like}% popularity</Typography>
							</div> */}
							<div className={classes.reviewChunk}>
								<Link href='/care'>
									<Typography variant='h5'>({profileDetails?.feedback?.reviews} Patient stories)</Typography>
								</Link>
							</div>
						</div>
					</div>
					{/* <div className={classes.detailsDivision}>
						<Typography variant='h3'> Dr.{profileDetails?.tenantUserVO?.tentUserFirstName || ''}</Typography>
						<Typography variant='h4'>
							{!_.isEmpty(profileDetails) ? profileDetails?.educationDtoList?.map(val => val?.degreeName) + ',' : ''}
						</Typography>
						<Typography variant='h4'>{profileDetails?.tentMaster?.tentName}</Typography>
						<Typography variant='h4'>{totalExperience} years of overall experience</Typography>
						<Typography variant='h5'>
							<span>Speaks:</span> {profileDetails?.tenantUserVO?.tentUserLanguage}
						</Typography>
						<Typography variant='h5'>
							<span>Registration number:</span> {profileDetails?.tenantUserVO?.tentUserRegistrationNum}
						</Typography>
					</div> */}
				</div>

				{/* <div className={classes.profileSectionTwo}>
					<Typography variant='h5'>
						<span>About: </span>
						{!_.isEmpty(profileDetails) ? (
							<ReadMoreWrapper
								text={`${profileDetails?.tenantUserVO?.aboutUs}`}
								moreText={'view more'}
								lessText={'show less'}
								textColor='#7047EA'
								classProps={classes.readMoreStyles}
								sliceLength={150}
								maxTextLength={170}
							/>
						) : (
							' '
						)}
					</Typography>
				</div> */}

				<div className={classes.availablity}>
					<Typography variant='h5'>Doctor available for:</Typography>
					<div className={classes.availablityIconContainer}>
						{true && (
							<Tooltip title='Video Consulation' arrow placement='top'>
								<div
									style={{backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/video-one.svg'})`}}
									className={classes.availablityIcon}></div>
							</Tooltip>
						)}

						{true && (
							<Tooltip title='Home Visit' arrow placement='top'>
								<div
									style={{backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/home-two.svg'})`}}
									className={classes.availablityIcon}></div>
							</Tooltip>
						)}

						{true && (
							<Tooltip title='Hospital' arrow placement='top'>
								<div
									style={{backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/hospital-two.svg'})`}}
									className={classes.availablityIcon}></div>
							</Tooltip>
						)}
					</div>
				</div>
				{/* <div className={classes.shareStories}>
					<Link href=''>
						<Typography variant='h5'>Share your stories</Typography>
					</Link>
				</div> */}
			</Paper>
		</div>
	)
}
