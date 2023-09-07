import {ThumbUp, Apartment, Videocam, Home} from '@material-ui/icons'
import {makeStyles, Tooltip, Paper, Typography} from '@material-ui/core'
import React, {useEffect, useState, useCallback} from 'react'
import doctorDetailsApi from '../../../Service/ProfileList/DoctorDetails'
import _ from 'lodash'
import {SyncLoader} from 'react-spinners'
import Image from 'next/image'
import ReadMoreContent from '../ReadMoreContent'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiPaper-root': {
			background: 'transparent linear-gradient(130deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
			borderRadius: 10,

			[theme.breakpoints.up('xs')]: {
				padding: 12,
			},
			[theme.breakpoints.up('sm')]: {
				padding: 20,
			},
		},
	},
	profilePicture: {
		borderRadius: 10,
	},

	container: {
		display: 'flex',
		[theme.breakpoints.up('xs')]: {
			gap: 12,
		},
		[theme.breakpoints.up('sm')]: {
			gap: 18,
		},
	},

	rightSection: {
		'& .MuiTypography-h3': {
			fontWeight: 600,
			color: theme.palette.care.main,

			[theme.breakpoints.up('xs')]: {
				fontSize: 18,
				paddingBlockEnd: 4,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
				paddingBlockEnd: 8,
			},
		},
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
				paddingBlockEnd: 4,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				paddingBlockEnd: 6,
			},
		},
		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			color: theme.palette.paragraph.main,
			'& span': {
				color: theme.palette.care.main,
				// color: props => props.mainColorrrrrrrr,
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
				paddingBlockEnd: 4,
				paddingBlockStart: 2,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				paddingBlockEnd: 6,
				paddingBlockStart: 4,
			},
		},
	},

	reviewContainer: {
		maxWidth: 120,
	},
	like: {
		display: 'flex',
		alignItems: 'center',
		gap: 4,
		'& .MuiSvgIcon-root': {
			color: '#3498DB',
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
			},
		},
		'& .MuiTypography-h6': {
			color: theme.palette.paragraph.main,
			whiteSpace: 'pre',
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	review: {
		'& .MuiTypography-h6': {
			textAlign: 'center',
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	aboutContainer: {
		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			color: theme.palette.paragraph.main,
			'& span': {
				color: theme.palette.care.main,
				fontWeight: 500,
			},
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
				paddingBlockEnd: 4,
				paddingBlockStart: 2,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				paddingBlockEnd: 6,
				paddingBlockStart: 4,
			},
		},
	},
	stories: {
		textAlign: 'right',
		color: theme.palette.care.main,
		[theme.breakpoints.up('xs')]: {
			fontSize: 12,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 14,
		},
	},
	availablity: {
		display: 'flex',
		alignItems: 'center',
		gap: 14,

		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			color: theme.palette.paragraph.main,
			fontWeight: 500,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
				paddingBlockEnd: 4,
				paddingBlockStart: 2,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
				paddingBlockEnd: 6,
				paddingBlockStart: 4,
			},
		},
	},
	availablityIconContainer: {
		display: 'flex',
		gap: 14,
		color: theme.palette.care.main,
	},
	imageLoader: {
		width: '120px',
		height: '124px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}))

const DetailedProfileCard = props => {
	const classes = useStyles(props)
	const {groupType, profileContent} = props

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
		doctorDetailsApi.DoctorDetails(mastTentUuid, tentUserUuid).then(onSuccess).catch(onFailure)
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
		<div className={classes.root}>
			<Paper>
				<div className={classes.container}>
					<div className={classes.leftSection}>
						<div>
							{_.isEmpty(profilePic) ? (
								<div className={classes.imageLoader}>
									<SyncLoader size={7} margin={2} color='blue' />
								</div>
							) : (
								<Image src={profilePic} alt='Profile Pic' width={120} height={124} className={classes.profilePicture} />
							)}
						</div>
						<div className={classes.reviewContainer}>
							<div className={classes.like}>
								<ThumbUp /> <Typography variant='h6'>{profileDetails?.feedback?.like}% popularity</Typography>
							</div>
							<div className={classes.review}>
								<Typography variant='h6'>({profileDetails?.feedback?.reviews} Reviews)</Typography>
							</div>
						</div>
					</div>
					<div className={classes.rightSection}>
						<Typography variant='h3'>
							{profileDetails?.tenantUserVO?.tentUserSalutation || ''}
							{profileDetails?.tenantUserVO?.tentUserSalutation && '.'}
							{profileDetails?.tenantUserVO?.tentUserFirstName || ''}
						</Typography>

						<Typography variant='h5'>
							{!_.isEmpty(profileDetails) ? profileDetails?.educationDtoList?.map(val => val?.degreeName) + ',' : ''}
						</Typography>
						<Typography variant='h5'>{profileDetails?.tentMaster?.tentName}</Typography>
						<Typography variant='h5'>{totalExperience} years of overall experience</Typography>
						<Typography variant='h4'>
							<span>Speaks:</span> {profileDetails?.tenantUserVO?.tentUserLanguage}
						</Typography>
						<Typography variant='h4'>
							<span>Registration number:</span> {profileDetails?.tenantUserVO?.tentUserRegistrationNum}
						</Typography>
					</div>
				</div>
				<div className={classes.aboutContainer}>
					<Typography variant='h4'>
						<b>About: </b>
						<ReadMoreContent maxTextLength={150}>{`${profileDetails?.tenantUserVO?.aboutUs}`}</ReadMoreContent>
					</Typography>
				</div>
				<div className={classes.availablity}>
					{/* <Typography variant='h4'>{groupType} available for:</Typography> */}
					<Typography variant='h4'>{profileContent?.availableLabel} available for:</Typography>
					<div className={classes.availablityIconContainer}>
						{true && (
							<Tooltip title='At Clinic' arrow placement='top'>
								<Apartment />
							</Tooltip>
						)}

						{true && (
							<Tooltip title='Video Consulation' arrow placement='top'>
								<Videocam />
							</Tooltip>
						)}

						{true && (
							<Tooltip title='Home Visit' arrow placement='top'>
								<Home />
							</Tooltip>
						)}
					</div>
				</div>
				<Typography variant='h6' className={classes.stories}>
					Share your stories
				</Typography>
			</Paper>
		</div>
	)
}

export default DetailedProfileCard
