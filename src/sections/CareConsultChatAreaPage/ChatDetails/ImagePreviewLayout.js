import {Close, ArrowDownward} from '@material-ui/icons'
import {Grid, Typography, IconButton, Avatar, Button} from '@material-ui/core'
import clsx from 'clsx'
import _ from 'lodash'
import {makeStyles} from '@material-ui/core/styles'
import moment from 'moment'
import consultApi from '../../../../Service/ConsultChat'

export const ImagePreviewLayout = props => {
	const classes = imageStyles()
	const {handleClose, imageDetails, setImageDetails, activeCustDetails = {}} = props

	let bearerToken = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null

	return (
		<div className={classes.dialogLayer}>
			<Grid container direction='row' alignItems='center' style={{paddingBottom: '25px'}}>
				<Grid item className={classes.leftDetail}>
					<Avatar src={imageDetails?.activeImageObj?.file?.fileUploadedProfilePic} />
					<Grid container direction='column' alignItems='flex-start' style={{paddingLeft: '12px'}}>
						<Typography className={classes.name}>
							{imageDetails?.activeImageObj?.file?.fileUploaderName || imageDetails?.activeImageObj?.file?.fileUploadedUuid}
						</Typography>
						<Typography className={classes.fileUploadedTime}>
							{/* 12/03/2022 at 11:57 PM */}
							{moment(imageDetails?.activeImageObj.currentDateTime).format('DD/MM/YYYY [at] hh:mm A')}
							{/* {moment(imageDetails?.activeImageObj.currentDateTime).format('HH:mm')} */}
						</Typography>
					</Grid>
				</Grid>
				<a
					href={consultApi.getFileDownloadUrl(imageDetails?.activeImageObj?.file?.documentUuid, bearerToken)}
					download
					className={classes.videoLinkDoc}
					style={{padding: '8px 20px', marginRight: 'auto'}}>
					<Button
						endIcon={<ArrowDownward />}
						variant='outlined'
						className={clsx(classes.btnStyle)}
						style={{padding: '8px 20px', marginRight: 'auto'}}>
						Download
					</Button>
				</a>
				<IconButton className={clsx(classes.btnStyle)} style={{padding: '8px'}} onClick={handleClose}>
					<Close />
				</IconButton>
			</Grid>
			<Grid container direction='row'>
				<Grid item xs={9} className={classes.imageLayer}>
					<div
						style={{
							height: '100%',
							width: '100%',
						}}>
						<img src={imageDetails.activeImage} width='100%' />
					</div>
				</Grid>
				<Grid item xs={3} className={classes.imgLayout}>
					<Grid container direction='row' className={classes.imageListLayer}>
						{Object.keys(imageDetails.imageObj).map(data => {
							return (
								<div
									className={classes.docImage}
									onClick={() => {
										setImageDetails({
											...imageDetails,
											activeImage: imageDetails.imageObj[data].file.viewFileUrl,
											activeImageObj: imageDetails.imageObj[data],
										})
									}}>
									<img src={`${imageDetails.imageObj[data].file.viewFileUrl}`} alt='docImg' className={classes.imgDisplay} />
								</div>
							)
						})}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

const imageStyles = makeStyles(theme => ({
	dialogLayer: {
		// padding: '20px',
	},
	leftDetail: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: '230px',
	},
	name: {
		color: '#121213',
		fontSize: '18px',
		fontWeight: '500',
	},
	fileUploadedTime: {
		fontSize: '12px',
		color: 'grey',
		fontFamily: 'Poppins',
	},
	btnStyle: {
		borderRadius: '8px',
		border: '2px solid #242424',
		color: '#121213',
		fontWeight: 600,
		'&:hover': {
			border: '2px solid #242424',
		},
	},
	docImage: {
		width: '33.33%',
		borderRadius: '6px',
		height: '90px',
		maxWidth: 'calc(33.33% - 8px)',
		margin: '4px',
		cursor: 'pointer',
	},
	imgDisplay: {
		height: '100%',
		width: '100%',
		borderRadius: '6px',
	},
	imageLayer: {
		padding: '0px 70px',
		height: '73vh',
		'& img': {
			borderRadius: '6px',
			height: '100%',
		},
	},
	imgLayout: {
		paddingRight: '40px',
	},
	videoLinkDoc: {
		backgroundColor: 'transparent !important',
		borderBottom: 'transparent !important',
		textDecoration: 'unset',
	},
}))
