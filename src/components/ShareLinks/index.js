import React, {useState} from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import {IconButton, makeStyles, Typography} from '@material-ui/core'
import {WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon} from 'next-share'
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial'
import useAuth from '../../../lib/Utils/hooks/UseAuth'
import _ from 'lodash'
import HealthRecordsFileListApi from '../../../Service/MyAccount/HealthRecordsFile'
import {ToastContainer, toast} from 'react-toastify'

const useStyles = makeStyles(theme => ({
	Sharemain: {
		display: 'flex',
		flexDirection: 'column',
	},
	whatsappShare: {
		display: 'flex',
		gap: 12,
	},
	emailShare: {
		display: 'flex',
		gap: 12,
	},
	menuStyle: {
		'&.MuiMenu-list': {
			display: 'flex',
			alignItems: 'baseline',
			padding: 12,
			flexDirection: 'column',
		},
		'& .MuiPopover-paper': {
			// boxShadow: 'none',
			border: '1px solid #ccc',
			[theme.breakpoints.up('1087')]: {
				marginLeft: 326,
			},
		},
	},
	styleItem: {
		'&.MuiMenuItem-root': {
			color: '#767676',
			fontSize: 16,
		},
	},
	practiceShare: {
		display: 'flex',
		gap: 12,
	},
}))
function Sharelist({image, documentation, imageUuid, handleCloseMain}) {
	const classes = useStyles()
	const {practiceName, practicelist} = useAuth()
	const [anchorEl, setAnchorEl] = useState(null)
	const [loading, setLoading] = useState(null)
	const open = Boolean(anchorEl)
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const shareData = (data, uuid) => {
		const body = {
			custUuid: data?.custUuid,
			mastTentUuid: data?.mastTentUuid,
			docDriveUuid: uuid,
		}
		setLoading(false)
		const onSuccess = res => {
			if (res?.data?.status === 'SUCCESS') {
				handleCloseMain()
				setLoading(true)
				toast.success(
					<Typography variant='h5' style={{zIndex: 9999}}>
						File shared successfully
					</Typography>
				)
			}
		}
		const onFailure = err => {
			setLoading(true)
			toast.error(
				<Typography variant='h5' style={{zIndex: 9999}}>
					Please try after sometime or you have shared already
				</Typography>
			)
		}
		HealthRecordsFileListApi.RecordShare(body).then(onSuccess, onFailure)
	}

	return (
		<div className={classes.Sharemain}>
			<MenuItem>
				<WhatsappShareButton url={image} quote={'next-share is a social share buttons for your next React apps.'} hashtag={'#nextshare'}>
					<div className={classes.whatsappShare}>
						<WhatsappIcon size={26} round />
						<Typography>Whatsapp</Typography>
					</div>
				</WhatsappShareButton>
			</MenuItem>
			<Divider />
			<MenuItem>
				<EmailShareButton url={documentation} quote={'next-share is a social share buttons for your next React apps.'} hashtag={'#nextshare'}>
					<div className={classes.emailShare}>
						<EmailIcon size={26} round />
						<Typography>Email</Typography>
					</div>
				</EmailShareButton>
			</MenuItem>
			<Divider />
			<MenuItem>
				<div
					className={classes.practiceShare}
					onClick={handleClick}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}>
					{/* <IconButton size='small' sx={{ml: 2}}> */}
					<FolderSpecialIcon style={{color: '#ccc !important'}} />
					{/* </IconButton> */}
					<Typography>Practice share</Typography>
				</div>
			</MenuItem>
			<Menu
				className={classes.menuStyle}
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
				<Typography style={{borderBottom: '1px solid #cccccc', paddingInline: 12, paddingBlock: 4, fontSize: 14}} variant='h5'>
					Please select the practice to share the file
				</Typography>
				{_.map(practicelist, (data, i) => (
					<>
						<MenuItem
							className={classes.styleItem}
							onClick={() => {
								shareData(data, imageUuid)
							}}>
							{data?.tentName}
						</MenuItem>
					</>
				))}
			</Menu>
		</div>
	)
}
export default Sharelist
