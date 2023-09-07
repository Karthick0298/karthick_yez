import {Grid, Paper, Popper, ClickAwayListener, Grow, IconButton, Tooltip} from '@material-ui/core'
import {Image, CameraAlt, DescriptionOutlined, Help} from '@material-ui/icons'
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {fileStyles} from '../styles'
import clsx from 'clsx'

export const AttachmentModal = props => {
	const {fileDetails = {}, handleAttachmentClose, anchorRef, setFileDetails = () => {}, handleUploadingFileToCustomer = () => {}} = props
	const classes = fileStyles()

	const handleChange = event => {
		handleUploadingFileToCustomer(event.target.files)
	}

	return (
		<>
			<Popper placement='top-end' open={fileDetails.showFileModal} anchorEl={anchorRef.current} transition disablePortal>
				{({TransitionProps, placement}) => (
					<Grow {...TransitionProps}>
						<Paper>
							<ClickAwayListener onClickAway={handleAttachmentClose}>
								<Grid container direction='row' alignItems='center' className={classes.gridStyle}>
									<Tooltip title='Accept file format jpg/jpeg/png/mp4/pdf' placement='right-end' style={{cursor: 'pointer'}}>
										<Help className={classes.helpIcon} />
									</Tooltip>
									<IconButton className={clsx(classes.items, classes.docImg)}>
										<label htmlFor='selectFile' className={classes.labelStyle}>
											<DescriptionOutlined style={{color: '#FFFFFF'}} />
										</label>
									</IconButton>
									<input
										name='docFile'
										id='selectFile'
										type='file'
										accept='application/pdf'
										style={{display: 'none'}}
										onChange={handleChange}
										multiple
									/>
									<IconButton className={clsx(classes.items, classes.gallaryImg)}>
										<label htmlFor='selectGallery' className={classes.labelStyle}>
											<Image style={{color: '#FFFFFF'}} />
										</label>
									</IconButton>
									<input
										name='galleryFile'
										id='selectGallery'
										type='file'
										style={{display: 'none'}}
										accept='image/png,video/mp4,image/jpeg,image/jpg'
										onChange={handleChange}
										multiple
									/>
									<IconButton className={clsx(classes.items, classes.photoImg)} onClick={() => setFileDetails({...fileDetails, showCamera: true})}>
										<label htmlFor='openCamera' className={classes.labelStyle}>
											<CameraAlt style={{color: '#FFFFFF'}} />
										</label>
									</IconButton>
									<input name='photoFile' id='openCamera' style={{display: 'none'}} accept='image/*' capture='environment' onChange={handleChange} />
								</Grid>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	)
}
