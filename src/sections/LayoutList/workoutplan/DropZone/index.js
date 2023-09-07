import {Button, Tooltip, Typography, makeStyles} from '@material-ui/core'
import React from 'react'
import {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {toast} from 'react-toastify'

const DropZone = props => {
	const useStyles = makeStyles(theme => ({
		thumbsContainer: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			marginTop: 5,
		},
		thumb: {
			display: 'inline-flex',
			borderRadius: 2,
			border: '1px solid #eaeaea',
			marginBottom: 5,
			marginRight: 8,
			width: 50,
			height: 50,
			padding: 4,
			boxSizing: 'border-box',
		},
		thumbInne: {
			display: 'flex',
			minWidth: 0,
			overflow: 'hidden',
		},
		img: {
			display: 'block',
			width: 'auto',
			height: 'auto',
			backgroundColor: 'red',
		},
		container: {
			// padding: 14,
			borderRadius: 14,
			display: 'flex',
			alignItems: 'center',
			gap: 16,
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
				alignItems: 'center',
				gap: 0,
			},
		},
		dropzone: {
			display: 'flex',
			cursor: 'pointer',
			gap: 8,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: 100,
			height: 100,
			boxShadow: '0 4px 8px 0 rgb(0 0 0 / 6%), 0px 1px 20px 0 rgb(255 255 255 /12%)',
			opacity: 1,
			marginBlock: 12,
			borderRadius: 18,
			backgroundColor: 'red',
			'& .MuiButton-root': {
				color: '#636669',
				border: '1px solid #636669',
			},
		},
		icon: {
			color: '#767676',
			marginTop: theme.spacing(1),
			fontSize: 38,
		},
		dragText: {
			color: '#767676',
			marginTop: theme.spacing(1),
		},
		mainImg: {
			width: 100,
			height: 100,
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			overflow: 'hidden',
			borderRadius: 12,
			marginBlock: 12,
		},
		deletIcon: {
			cursor: 'pointer',
		},
		mainImgUpload: {
			display: 'flex',
			gap: 6,
		},
		mainContainer: {
			display: 'flex',
			gap: 24,
			alignItems: 'center',
		},
		profileData: {
			display: 'flex',
			flexDirection: 'column',
			[theme.breakpoints.down('sm')]: {
				alignItems: 'center',
			},
		},
		userLogo: {
			width: 100,
			height: 100,
			borderRadius: 12,
		},
		tooltip: {
			background: '#fff',
			color: '000',
			'& .MuiTooltip-tooltip': {
				color: '#000',
				background: '#fff',
			},
		},
		profilephoto: {
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
				fontWeight: 600,
			},
			[theme.breakpoints.up('sm')]: {
				fontWeight: 600,
				fontSize: 16,
			},
		},
		removeBtn: {
			color: '#2A2A2A',
			backgroundColor: '#F5F4F6',
			'&:hover': {
				backgroundColor: '#f5f4f6',
			},
		},
	}))

	const {displayUploadImage, imgResponse, setEstablishmentFileResponse, title, details, deatilshere, dropzonestyle, hideUpload} = props
	const classes = useStyles()

	const formatBytes = (bytes, decimals = 2) => {
		if (bytes === 0) return '0 Bytes'
		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		const i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
	}

	const maxFileSize = 5242880

	const {getRootProps, getInputProps, open} = useDropzone({
		noClick: true,
		noKeyboard: true,
		maxSize: formatBytes(maxFileSize),
		maxFiles: 1,
		accept: 'image/jpg,image/jpeg,image/png,image/svg',
		onDrop: acceptedFiles => {
			let fileLength = acceptedFiles.map(file => file.size)
			if (fileLength > maxFileSize) {
				toast.error(<Typography variant='h5'>File size is too large. maximum file size is {formatBytes(maxFileSize)} mb.</Typography>)
			} else {
				displayUploadImage(acceptedFiles)
			}
		},
	})

	const deleteImage = () => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setEstablishmentFileResponse(null)
				toast.success(<Typography variant='h5'>Removed successfully</Typography>)
			}
		}
		const onFailure = err => {
			toast.error(<Typography variant='h5'>Please try later</Typography>)
		}
		// fileApi.deleteFile(imgResponse).then(onSuccess, onFailure)
	}

	var backgroundlogo = `url('${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/uploadcolor.svg'}')`

	return (
		<div className={`${classes.container} ${dropzonestyle}`}>
			{!_.isEmpty(imgResponse) ? (
				<div className={classes.mainImg} style={{backgroundImage: `url('${getImgUrl(imgResponse, BearerToken)}')`}}></div>
			) : (
				<div className={classes.mainImg} {...getRootProps()} style={{backgroundImage: backgroundlogo}}>
					<input {...getInputProps()} />
				</div>
			)}

			<div className={classes.profileData}>
				<Typography className={classes.profilephoto}>{title}</Typography>
				<Typography>
					{details}
					<Tooltip
						className={classes.tooltip}
						arrow='true'
						title='Do not use group photos, photos with pets or photos with sunglasses. 
               Do not expose contact details such as mobile number email or url. '>
						<span style={{color: 'red', cursor: 'pointer'}}> {deatilshere}</span>
					</Tooltip>
				</Typography>
				{hideUpload ? null : (
					<div className={classes.mainContainer}>
						<Button onClick={open} disabled={imgResponse ? true : false}>
							Upload
						</Button>
						<div className={classes.deletIcon}>
							{imgResponse ? (
								<Button onClick={() => deleteImage()} customStyle={classes.removeBtn}>
									Remove
								</Button>
							) : null}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default DropZone
