import React, {useEffect, useState} from 'react'
import {makeStyles, Button, Typography, TextField} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import sendUploadFileApi from '../../../Service/MyAccount/UploadHealthRecords'
import {useRouter} from 'next/router'
import {ToastContainer, toast} from 'react-toastify'
import Image from 'next/image'
import _ from 'lodash'
import SaveButton from '../../components/GradientButton'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import {useDropzone} from 'react-dropzone'
import secureLocalStorage from 'react-secure-storage'
import {Autocomplete} from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiDialog-paperWidthSm': {
			minWidth: 398,
			paddingTop: 10,
			paddingInline: 30,
			paddingBlockEnd: 30,
		},
		'& .MuiTypography-h5': {
			fontSize: 12,
			color: '#475677',
			position: 'relative',
			transform: 'translate(68px, -80px)',
			maxWidth: 204,
		},
		// '& .MuiOutlinedInput-root': {
		// 	height: 34,
		// },
		'& .MuiTypography-h6': {
			color: '#475677',
			fontSize: 13,
			paddingBlockStart: 14,
			paddingLeft: 2,
		},
	},
	cancelButton: {
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontSize: 14,
			color: '#475677',
		},
		'& .MuiButton-text': {
			padding: 0,
		},
	},
	findMorebtn: {
		padding: 0,
		minWidth: 64,
		fontSize: 12,
		background: theme.palette.care.buttonBackgroundImage,
		'& .MuiButton-label': {
			fontSize: 12,
		},
	},
	agreeBtn: {
		padding: 0,
		minWidth: 64,
		fontSize: 12,
		textTransform: 'capitalize',
		borderRadius: 12,
		'& .MuiButton-label': {
			fontSize: 12,
		},
	},
	uploadButton: {
		textTransform: 'lowercase',
		fontSize: 12,
		color: '#054BE5',
		fontFamily: theme.typography.h5.fontFamily,
		'& .MuiButton-root': {
			minWidth: 50,
		},
	},
	input: {
		display: 'none',
	},
	fileName: {
		position: 'relative',
		textAlign: 'center',
		transform: 'translateY(113px)',
		maxWidth: 336,
		wordBreak: 'break-word',
		zIndex: 1,
		paddingInline: 20,
	},
	container: {
		height: '21vh',
		position: 'relative',
	},
	fileName: {
		width: '80%',
		margin: 'auto',
		textAlign: 'center',
		transform: ' translate(-50%, -50%)',
		position: 'absolute',
		top: '68%',
		left: '50%',
		wordBreak: 'break-all',
		zIndex: 1,
	},
}))
export default function FileUploadModal() {
	const router = useRouter()
	const classes = useStyles()
	const {setTriggerFile} = useContextApi()
	const [dialogOpen, setDialogOpen] = React.useState(false)
	const [attach, attachSetState] = useState()
	const [state, setState] = useState('')
	const [params, setParams] = useState({
		title: null,
	})
	const [change, setChange] = useState('')

	const handleClickOpen = () => {
		setDialogOpen(true)
		setState('')
		setChange('')
	}

	const handleClose = () => {
		setDialogOpen(false)
	}
	const fileTypeOptions = [
		{id: 1, label: 'Prescriptions'},
		{id: 2, label: 'Billing Summary'},
		{id: 3, label: 'Reports'},
	]
	const [fileType, setFileType] = useState(null)
	const location = typeof window !== 'undefined' ? window.location.search : null
	const folderName = typeof window !== 'undefined' ? window.location.pathname : null
	const currentUuids = location && location.split('&')
	const currentUuid = currentUuids?.[0]?.split('=').pop()
	const currentName = folderName && folderName.split('/').pop()
	console.log('folderName', folderName, currentName)
	// Converting bytes
	const formatBytes = (bytes, decimals = 2) => {
		if (bytes === 0) return '0 Bytes'
		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		const i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
	}
	const maxFileSize = 10485760

	// File  error handling
	const fileLengthValidator = file => {
		if (file.size > maxFileSize) {
			toast.error(<Typography variant='h5'>File size is too large. maximum file size is {formatBytes(maxFileSize)} mb.</Typography>)
			setState([])
		} else if (
			file.type !== 'image/jpeg' &&
			file.type !== 'image/jpg' &&
			file.type !== 'image/jpe' &&
			file.type !== 'image/jfif' &&
			file.type !== 'image/png' &&
			file.type !== 'application/pdf'
		) {
			toast.error(<Typography variant='h5'>Accepted file types are (jpeg,jpg,jpe,pdf,png) </Typography>)
			setState([])
		} else {
			attachSetState(file)
		}
		return null
	}

	const {getRootProps, getInputProps, open, acceptedFiles, fileRejections} = useDropzone({
		// Disable click and keydown behavior
		noClick: true,
		noKeyboard: true,
		maxSize: formatBytes(maxFileSize),
		maxFiles: 1,
		accept: 'image/jpeg, image/jpg, image/jpe, image/png ,image/jfif,application/pdf',
		validator: fileLengthValidator,
		onDrop: acceptedFiles => {
			// let fileLength = acceptedFiles.map(file => file.size)
			// if (acceptedFiles && fileLength < maxFileSize) {
			onAddAttachments(acceptedFiles)
			// }
		},
	})

	///
	const onAddAttachments = acceptedFiles => {
		setState(acceptedFiles?.[0])
		// let imgArray = Array.from(file)
		// setState(imgArray?.map(item => item.name))
		// let result = _.find(imgArray, function (file) {
		// 	if (_.get(file, 'size', 0) >= 2097152) return true
		// })

		// let isFileExceeded = result ? true : false

		// if (isFileExceeded) {
		// 	toast.error(<Typography variant='h5'>File size is too large. maximum file size is 2 mb.</Typography>)
		// 	e.target.value = ''
		// } else {
		// 	attachSetState(...e.target.files)

		// 	e.target.value = ''
		// }
	}

	//File Upload
	const onFileUpload = e => {
		let temp = {title: change}
		const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : null
		setParams(temp)
		var formData1 = new FormData()
		formData1.append('FILE', attach)
		if (currentUuid) {
			const onSuccess = res => {
				if (res?.data?.status === 'SUCCESS') {
					toast.success(<Typography variant='h5'>Upload Successfully</Typography>)
					setDialogOpen(false)
					setTriggerFile('trigger')
					setTriggerFile(null)
					// router.reload()
				} else {
					toast.error(<Typography variant='h5'>Invalid Upload</Typography>)
				}
			}
			const onFailure = err => {
				console.log('File upload error', err)
				toast.error(<Typography variant='h5'>Please upload the valid file</Typography>)
			}
			sendUploadFileApi.sendUploadFile(formData1, custUuid, currentUuid, {...temp}).then(onSuccess, onFailure)
		}
	}
	return (
		<div>
			<Button variant='contained' color='primary' component='span' onClick={handleClickOpen}>
				<ArrowUpwardIcon />
				Upload
			</Button>
			{/* <form enctype='multipart/form-data'> */}
			<Dialog
				open={dialogOpen}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
				className={classes.root}>
				<DialogContent>
					<div>
						<input {...getInputProps()} />
						<Typography variant='h5'>
							Drag and drop here, or
							<label for='filename'>
								<Button className={classes.uploadButton} onClick={open} component='span'>
									browse
								</Button>
							</label>
						</Typography>
					</div>
					<div style={{display: 'flex', width: '100%', flexDirection: 'column', gap: 2}}>
						<TextField
							// component='input'
							value={change}
							label='Title'
							InputLabelProps={{
								style: {
									color: '#475677',
									fontFamily: ['"Poppins"', 'sans-serif'].join(','),
								},
							}}
							variant='outlined'
							size='small'
							fullWidth
							onChange={e => setChange(e.target.value)}
						/>
						<Autocomplete
							disableClearable={true}
							fullWidth
							value={fileType}
							className={classes.specialist}
							options={fileTypeOptions}
							getOptionLabel={option => option.label}
							renderInput={params => (
								<TextField
									{...params}
									margin='dense'
									InputLabelProps={{
										style: {
											color: '#475677',
											fontFamily: ['"Poppins"', 'sans-serif'].join(','),
										},
									}}
									placeholder='Choose a file type*'
									variant='outlined'
									size='small'
								/>
							)}
							onChange={(e, value) => {
								setFileType(value)
							}}
						/>
					</div>
				</DialogContent>
				<DialogContentText>
					<Typography variant='h6'>File Type: .jpeg .png .pdf .jpg - Max file size: 10MB</Typography>
					<Typography variant='h6'>Type of record: {_.capitalize(currentName)}</Typography>
				</DialogContentText>
				<DialogActions>
					<Button className={classes.cancelButton} onClick={handleClose}>
						Cancel
					</Button>
					{!_.isEmpty(state?.name) ? (
						<SaveButton findMorebtn={classes.findMorebtn} onClick={e => onFileUpload(e)}>
							Agree
						</SaveButton>
					) : (
						<Button disabled variant='outlined' className={classes.agreeBtn}>
							Agree
						</Button>
					)}
				</DialogActions>
			</Dialog>
			{/* </form> */}
			{/* <ToastContainer /> */}
		</div>
	)
}
