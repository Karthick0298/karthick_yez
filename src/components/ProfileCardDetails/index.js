import {Avatar, Button, makeStyles, Typography} from '@material-ui/core'
// import {useRouter} from 'next/router'
import Doctordetail from '../../model/DoctorDetails/data'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import Bookappoinment from '../GradientButton/index'
import React, {useEffect, useState, useCallback} from 'react'
import doctorDetailsApi from '../../../Service/ProfileList/DoctorDetails'
import _ from 'lodash'
// import Image from 'next/image'

import {Tooltip} from '@material-ui/core'
import Image from 'next/image'
import {ProfileUrlDetails} from '../../../lib/Utils/profileUrlImage'
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded'
import {SyncLoader} from 'react-spinners'
import ReadMore from '../ProfileDetailsTabView/QuestionAnsTab/ReadMore'

// const useStyles = makeStyles(theme => ({
// 	cardlist: {
// 		marginInlineStart: 100,
// 		background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
// 		border: '1px solid #FFFFFF80',
// 		borderRadius: 10,
// 		opacity: 1,
// 		backdropFilter: 'blur(6px)',
// 		paddingInline: 23,
// 		paddingBlock: 24,
// 		marginBlock: 8,
// 		[theme.breakpoints.down('xs')]: {
// 			marginInline: 0,
// 			paddingInline: 8,
// 			paddingBlock: 12,
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			marginInline: 88,
// 			marginInlineEnd: 0,
// 			padding: 22,
// 			marginBlockStart: 0,
// 		},
// 	},
// 	doctorsection: {
// 		display: 'flex',
// 		justifyContent: 'space-around',
// 	},
// 	doctordetailsmain: {
// 		display: 'flex',
// 		gap: 20,
// 		justifyContent: 'flex-start',
// 		[theme.breakpoints.down('xs')]: {},
// 		[theme.breakpoints.up('sm')]: {
// 			justifyContent: 'flex-start',
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			justifyContent: 'flex-start',
// 		},
// 	},
// 	avatarsec: {
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		gap: 12,
// 		'& .MuiAvatar-root': {
// 			width: 116,
// 			height: 116,
// 			borderRadius: '16%',
// 			[theme.breakpoints.down('xs')]: {
// 				width: 76,
// 				height: 78,
// 			},
// 		},
// 		'& .MuiSvgIcon-root': {
// 			fill: '#1A73E8',
// 			cursor: 'pointer',
// 			height: 16,
// 		},
// 	},
// 	reviewsec: {
// 		display: 'flex',
// 		gap: 4,
// 		alignItems: 'center',
// 	},
// 	thumssection: {
// 		display: 'flex',
// 		alignItems: 'center',
// 	},
// 	likes: {
// 		fontSize: theme.typography.h6.fontSize,
// 		marginBlock: -7,
// 	},
// 	reviewone: {
// 		fontSize: theme.typography.h6.fontSize,
// 		marginBlock: -7,
// 	},
// 	detailsdcotorname: {
// 		letterSpacing: 1,
// 		color: theme.palette.care.main,
// 		fontSize: theme.typography.body2.fontSize,
// 		fontWeight: theme.typography.h2.fontWeight,
// 		opacity: 1,
// 		[theme.breakpoints.down('xs')]: {
// 			fontSize: 16,
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			fontSize: 18,
// 		},
// 	},
// 	doctordetailssub: {
// 		display: 'flex',
// 		gap: 56,
// 		flexDirection: 'column',
// 		[theme.breakpoints.down('xs')]: {
// 			gap: 4,
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			gap: 20,
// 		},
// 	},
// 	dcotor: {
// 		fontSize: theme.typography.subtitle1.fontSize,
// 		paddingBlock: 8,
// 		color: theme.palette.paragraph.main,
// 		[theme.breakpoints.down('xs')]: {
// 			fontSize: 12,
// 			paddingBlock: 4,
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			fontSize: 14,
// 			paddingBlock: 4,
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			fontSize: 14,
// 			paddingBlock: 4,
// 		},
// 	},
// 	languages: {
// 		color: theme.palette.care.main,
// 		fontSize: 14,
// 	},
// 	abouttext: {
// 		color: '#999',
// 	},
// 	aboutdoctor: {
// 		color: '#475677',
// 		fontSize: 16,
// 		paddingInline: 12,
// 		paddingBlock: 20,
// 		fontWeight: 600,
// 		[theme.breakpoints.down('xs')]: {
// 			fontSize: 12,
// 			paddingInline: 0,
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			fontSize: 14,
// 			paddingBlockStart: 12,
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			fontSize: 12,
// 			paddingBlock: 8,
// 		},
// 	},
// 	degreeName: {
// 		color: '#475677',
// 		fontSize: 12,
// 		paddingInlineStart: 4,
// 	},
// 	doctoravailablemode: {
// 		color: '#475677',
// 		fontSize: 16,
// 		paddingInline: 12,
// 		paddingBlock: 20,
// 		fontWeight: 600,
// 		display: 'flex',
// 		alignItems: 'center',
// 		gap: 12,
// 		cursor: 'pointer',
// 		[theme.breakpoints.down('xs')]: {
// 			fontSize: 12,
// 			paddingInline: 0,
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			fontSize: 14,
// 			paddingBlockStart: 12,
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			fontSize: 12,
// 			paddingBlock: 8,
// 		},
// 		'& .MuiSvgIcon-root': {
// 			fill: '#7047EA',
// 			width: '0.9em',
// 		},
// 	},
// 	sharestory: {
// 		display: 'flex',
// 		justifyContent: 'flex-end',
// 		color: theme.palette.care.main,
// 		cursor: 'pointer',
// 		[theme.breakpoints.down('xs')]: {
// 			paddingBlockEnd: 12,
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			paddingBlockEnd: 12,
// 			paddingInline: 12,
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			paddingBlockEnd: 12,
// 			paddingInline: 12,
// 		},
// 		[theme.breakpoints.up('lg')]: {
// 			paddingBlockEnd: 12,
// 			paddingInline: 12,
// 		},
// 	},
// 	appoinmentbutton: {
// 		whiteSpace: 'nowrap',
// 		[theme.breakpoints.down('xs')]: {
// 			display: 'none',
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			display: 'none',
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			display: 'none',
// 		},
// 	},
// 	mobileappointmentbutton: {
// 		[theme.breakpoints.down('xs')]: {
// 			display: 'block',
// 			display: 'flex',
// 			justifyContent: 'flex-end',
// 			paddindBlockStart: 12,
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			display: 'block',
// 			display: 'flex',
// 			justifyContent: 'flex-end',
// 			paddindBlockStart: 12,
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			display: 'none',
// 		},
// 	},
// 	doctorspeciality: {
// 		display: 'flex',
// 		// gap: 4,
// 	},
// 	video: {
// 		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/video-one.svg'})`,
// 		padding: 20,
// 		backgroundRepeat: 'no-repeat',
// 	},
// 	home: {
// 		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/home-two.svg'})`,
// 		padding: 20,
// 		backgroundRepeat: 'no-repeat',
// 	},
// 	hospital: {
// 		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/hospital-two.svg'})`,
// 		padding: 20,
// 		backgroundRepeat: 'no-repeat',
// 	},
// 	tooltip: {
// 		background: 'transparent linear-gradient(69deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
// 		boxShadow: '0px 3px 6px #00000026',
// 		border: '1px solid #FFFFFF80',
// 		opacity: 1,
// 		backdropFilter: 'blur(8px)',
// 		color: theme.palette.paragraph.main,
// 	},
// 	arrow: {
// 		color: theme.palette.common.white,
// 	},
// 	doctorreviewstories: {
// 		display: 'flex',
// 		gap: 4,
// 	},
// }))

const useStyles = makeStyles(theme => ({
	root: {
		background: 'transparent linear-gradient(130deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		'&::-webkit-backdrop-filter': 'blur(6px)',
		'& .MuiTypography-body1': {
			color: '#475677',
			// fontFamily: theme.typography.h5.fontFamily,
		},
	},
	sections: {
		borderRadius: 10,
		paddingInline: 28,
		paddingBlock: 24,
	},
	flexWrap: {
		display: 'flex',
	},
	align: {
		alignItems: 'baseline',
	},
	avatarWrapper: {
		marginInlineEnd: 28,
	},
	imageLoader: {
		width: '120px',
		height: '120px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileAvatar: {
		borderRadius: 10,
	},
	doctorName: {
		color: '#7047EA',
		fontWeight: 600,
		fontSize: 24,
		fontFamily: theme.typography.h5.fontFamily,
		marginInlineEnd: 4,
	},
	degreeName: {
		fontSize: 16,
	},
	spacing: {
		width: 176,
		maxWidth: 220,
		alignItems: 'center',
	},
	likeIcon: {
		color: '#2e6cf5',
		fontSize: 20,
	},
	popularity: {
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
	},
	patientStories: {
		textDecoration: 'underline',
		cursor: 'pointer',
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
	},
	storiesAlign: {
		alignItems: 'baseline',
	},
	about: {
		fontWeight: 600,
		letterSpacing: '0.3px',
	},
	videoIcon: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/home-two.svg'})`,
		padding: 20,
		backgroundRepeat: 'no-repeat',
		marginInline: 8,
	},
	homeIcon: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/home-two.svg'})`,
		padding: 20,
		backgroundRepeat: 'no-repeat',
		marginInline: 8,
	},
	hospitalIcon: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/hospital-two.svg'})`,
		padding: 20,
		backgroundRepeat: 'no-repeat',
		marginInline: 8,
	},
	arrow: {
		color: theme.palette.common.white,
	},
	tooltip: {
		position: 'relative',
		zIndex: 10,
		background: 'transparent linear-gradient(69deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		opacity: 1,
		backdropFilter: 'blur(8px)',
		color: theme.palette.paragraph.main,
	},
	availability: {
		marginInlineEnd: 12,
	},
	marginSpace: {
		marginBlockStart: 8,
	},
	communication: {
		marginBlockStart: 28,
	},
	highLighted: {
		color: '#7047EA',
	},
	shareLink: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		transform: 'translate(-32px, -20px)',
		cursor: 'pointer',
	},
	shareLinkText: {
		color: '#7047EA!important',
		fontSize: 12,
	},
}))
function ProfileDetails() {
	const classes = useStyles()
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
		<>
			<div className={classes.root}>
				<section className={classes.sections}>
					{/* section---1 */}
					<section className={classes.flexWrap}>
						<div className={classes.avatarWrapper}>
							{_.isEmpty(profilePic) ? (
								<div className={classes.imageLoader}>
									<SyncLoader size={7} margin={2} color='blue' />
								</div>
							) : (
								<Image className={classes.profileAvatar} src={profilePic} alt='Profile Pic' width={120} height={120} />
							)}
						</div>
						<div className={classes.doctorInfo}>
							<Typography variant='body1'>
								<span className={classes.doctorName}> Dr.{profileDetails?.tenantUserVO?.tentUserFirstName || ''}</span>
								<span className={classes.degreeName}>
									{!_.isEmpty(profileDetails) ? profileDetails?.educationDtoList?.map(val => val?.degreeName) + ',' : ''}
								</span>
							</Typography>
							<Typography variant='body1' className={classes.dcotor}>
								{profileDetails?.speciality?.map(val => val)}{' '}
							</Typography>
							<Typography variant='body1'>{profileDetails?.tentMaster?.tentName}</Typography>
							<Typography variant='body1'>{totalExperience} years of overall experience</Typography>
						</div>
					</section>

					{/* section---2 */}
					<section className={` ${classes.flexWrap} ${classes.marginSpace} `}>
						<section className={` ${classes.flexWrap} ${classes.spacing}  `}>
							<div>
								<ThumbUpIcon fontSize='small' className={classes.likeIcon} />{' '}
							</div>
							<div>
								<Typography variant='body1' className={classes.popularity}>
									{profileDetails?.feedback?.like}% popularity
								</Typography>
							</div>
						</section>
						<section>
							<Typography variant='body1'>
								<span className={classes.highLighted}>Speaks: </span>
								{profileDetails?.tenantUserVO?.tentUserLanguage}
							</Typography>
						</section>
					</section>

					{/* section---3 */}
					<section className={` ${classes.flexWrap} ${classes.storiesAlign} `}>
						<div className={classes.spacing}>
							<Typography variant='body1' className={classes.patientStories}>
								({profileDetails?.feedback?.reviews} Patient Stories)
							</Typography>
						</div>
						<div>
							<Typography variant='body1'>
								<span className={classes.highLighted}>Registration number: </span>
								{profileDetails?.tenantUserVO?.tentUserRegistrationNum}
							</Typography>
						</div>
					</section>
					{/* section---4 */}
					<section className={classes.marginSpace}>
						<Typography variant='body1'>
							<span className={classes.about}>About: </span>
							{!_.isEmpty(profileDetails) ? (
								<ReadMore text={`${profileDetails?.tenantUserVO?.aboutUs}`} moreText={'view more'} lessText={'show less'} />
							) : (
								''
							)}
						</Typography>
					</section>
					{/* section---5 */}
					<section className={classes.communication}>
						<Typography variant='body1' className={classes.flexWrap}>
							<span className={classes.availability}>Doctor available for :</span>
							<Tooltip title='Video' arrow placement='top' classes={classes}>
								<div className={classes.videoIcon}></div>
							</Tooltip>
							<Tooltip
								title='Home'
								arrow
								// arrow={{ arrow: classes.arrow }}
								placement='top'
								classes={classes}>
								<div className={classes.homeIcon}></div>
							</Tooltip>
							<Tooltip title='Hospital' arrow placement='top' classes={classes}>
								<div className={classes.hospitalIcon}></div>
							</Tooltip>
						</Typography>
					</section>
					{/* section---6 */}
					<section className={classes.shareLink}>
						<Typography variant='body1' className={classes.shareLinkText}>
							Share your stories
						</Typography>
					</section>
				</section>
			</div>
		</>

		// ******************************************************************
		// <div className={classes.cardlist}>
		// 	<div className={classes.doctordetailsmain}>
		// 		<div className={classes.doctordetailssub}>
		// 			<div className={classes.avatarsec}>
		// 				<Avatar
		// 					alt='profile pic'
		// 					src={ProfileUrlDetails(profilelist?.tenantUserVO?.profilePicEncryptedKey?.encodedFileString, profilelist?.tenantUserVO?.profilePicEncryptedKey?.encodedFileString)}
		// 				/>
		// 				<div className={classes.reviewsec}>
		// 					<div className={classes.thumssection}>
		// 						<ThumbUpIcon />
		// 						<Typography variant='h6' className={classes.likes}>
		// 							{profilelist?.feedback?.like}%
		// 						</Typography>
		// 					</div>
		// 					<Typography variant='h6' className={classes.reviewone}>
		// 						Popularity
		// 					</Typography>
		// 				</div>
		// 				<div className={classes.doctorreviewstories}>
		// 					<Typography variant='h6' className={classes.reviewone}>
		// 						({profilelist?.feedback?.reviews}
		// 					</Typography>
		// 					<Typography variant='h6' className={classes.reviewone}>
		// 						Reviews)
		// 					</Typography>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<Typography className={classes.detailsdcotorname} variant='h5'>
		// 				{' '}
		// 				Dr.{profilelist?.tenantUserVO?.tentUserFirstName}
		// 				<span className={classes.degreeName}>{profilelist?.educationDtoList?.map(val => val?.degreeName) + ','}</span>
		// 			</Typography>
		// 			{/* <div className={classes.doctorspeciality}>
		// 				{!_.isEmpty(profilelist) &&
		// 					profilelist?.educationDtoList.map(EducationDtoList => (
		// 						<Typography variant='h5' className={classes.dcotor}>
		// 							{EducationDtoList[0]?.degreeName},
		// 						</Typography>
		// 					))}
		// 			</div> */}
		// 			<div className={classes.doctorspeciality}>
		// 				{/* {!_.isEmpty(profilelist) &&
		// 					profilelist?.speciality.map(SpecialityList => ( */}
		// 				<Typography variant='h5' className={classes.dcotor}>
		// 					{profilelist?.speciality?.map(val => val)}
		// 				</Typography>
		// 				{/* ))} */}
		// 			</div>
		// 			<div className={classes.doctorspeciality}>
		// 				{!_.isEmpty(profilelist) &&
		// 					profilelist?.tentMaster.map(tentMasterList => (
		// 						<Typography variant='h5' className={classes.dcotor}>
		// 							{tentMasterList.tentName},
		// 						</Typography>
		// 					))}
		// 				{!_.isEmpty(profilelist) &&
		// 					profilelist?.experiencesLists.map(experiencesLists => (
		// 						<Typography variant='h5' className={classes.dcotor}>
		// 							{/* {experiencesLists.experienceDuration} */}
		// 						</Typography>
		// 					))}
		// 			</div>
		// 			<div>
		// 				<Typography variant='h5' className={classes.dcotor}>
		// 					<span className={classes.languages}>Speakes: </span>
		// 				</Typography>
		// 				<Typography variant='h5' className={classes.dcotor}>
		// 					<span className={classes.languages}>Registration number: </span>
		// 					{profilelist?.tenantUserVO?.tentUserRegistrationNum}
		// 				</Typography>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className={classes.doctormode}>
		// 		<Typography variant='h5' className={classes.aboutdoctor}>
		// 			<span>About: </span>
		// 		</Typography>
		// 		<Typography variant='h5' className={classes.doctoravailablemode}>
		// 			Doctor Available for:
		// 			<Tooltip title='Video' arrow placement='top' classes={classes}>
		// 				<div className={classes.video}></div>
		// 			</Tooltip>
		// 			<Tooltip title='Home' arrow={{arrow: classes.arrow}} placement='top' classes={classes}>
		// 				<div className={classes.home}></div>
		// 			</Tooltip>
		// 			<Tooltip title='Hospital' arrow placement='top' classes={classes}>
		// 				<div className={classes.hospital}></div>
		// 			</Tooltip>
		// 		</Typography>
		// 	</div>
		// 	<Typography variant='h6' className={classes.sharestory}>
		// 		Share your Stories
		// 	</Typography>
		// </div>
		// *****************************************************************************************************
	)
}

// {!_.isEmpty(profilelist) &&
// 		profilelist?.awardsList.map(Doctordetails => (
// 			<>
// 				<div key={Doctordetails.id} className={classes.doctordetailsmain}>
// 					<div className={classes.doctordetailssub}>
// 						<div className={classes.avatarsec}>
// 							<Avatar alt='profile pic' src={Doctordetails.profilepic} />
// 							<div className={classes.reviewsec}>
// 								<div className={classes.thumssection}>
// 									<ThumbUpIcon />
// 									<Typography variant='h6' className={classes.reviewone}>
// 										{Doctordetails.likes}
// 									</Typography>
// 								</div>
// 								<Typography variant='h6' className={classes.reviewone}>
// 									{Doctordetails.popularity}
// 								</Typography>
// 							</div>
// 							<div>
// 								<Typography variant='h6' className={classes.reviewone}>
// 									{Doctordetails.review}
// 								</Typography>
// 							</div>
// 						</div>
// 						<div>
// 							{!_.isEmpty(profilelist) &&
// 								profilelist?.experiencesLists.map(Doctordetails => (
// 									<>
// 										<Typography className={classes.detailsdcotorname} variant='h5'>
// 											{' '}
// 											{profilelist?.tenantUserVO.tentUserFirstName}
// 										</Typography>
// 										<Typography variant='h5' className={classes.dcotor}>
// 											{Doctordetails.specialityName}
// 										</Typography>
// 										<Typography variant='h5' className={classes.dcotor}>
// 											{' '}
// 											{Doctordetails.establishmentName},{Doctordetails.experienceDuration} experience
// 										</Typography>
// 										<Typography variant='h5' className={classes.dcotor}>
// 											{' '}
// 											{Doctordetails.experienceYear} Years Of overall experience
// 										</Typography>
// 										<Typography variant='h5' className={classes.dcotor}>
// 											<span className={classes.languages}>Speakes: </span>
// 											{Doctordetails.languagesknow}
// 										</Typography>
// 										<Typography variant='h5' className={classes.dcotor}>
// 											<span className={classes.languages}>Registration number: </span>
// 											{profilelist?.tenantUserVO.tentUserRegistrationNum}
// 										</Typography>
// 									</>
// 								))}
// 						</div>
// 					</div>
// 					<div className={classes.appoinmentbutton}>
// 						<Bookappoinment>Book Appoinment</Bookappoinment>
// 					</div>
// 				</div>
// 				<Typography variant='h5' className={classes.aboutdoctor}>
// 					<span className={classes.abouttext}>About: </span>
// 					{Doctordetails.about}
// 				</Typography>
// 				<Typography variant='h6' className={classes.sharestory}>
// 					{Doctordetails.story}
// 				</Typography>
// 				<div className={classes.mobileappointmentbutton}>
// 					<Bookappoinment>Book Appoinment</Bookappoinment>
// 				</div>
// 			</>
// 		))}

export default ProfileDetails
