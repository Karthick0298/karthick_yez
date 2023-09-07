import React, {useState} from 'react'
import {makeStyles, Grid, Typography, Box, Modal, Backdrop, Dialog, Avatar, Button, ClickAwayListener} from '@material-ui/core'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import clsx from 'clsx'
import Videocam from '@material-ui/icons/Videocam'
import WorkHistory from '@material-ui/icons/Work'
import Send from '@material-ui/icons/Send'
import {useRouter} from 'next/router'

export default function ChatWithUsModal(props) {
	const {open, setChatWithUsOpen, tenetDisplayDetails} = props
	const classes = useStyles()
	const router = useRouter()
	console.log(tenetDisplayDetails, 'tenetDisplayDetails.tenantUserResponseDTO')

	return (
		<>
			<Dialog
				fullWidth
				maxWidth='xs'
				onClose={() => {
					setChatWithUsOpen(false)
				}}
				open={open}
				aria-labelledby='Loader Popup'
				aria-describedby='scroll-dialog-description'
				className={classes.dialogLayer}>
				<Grid container>
					<Grid className={classes.upperLayer}>
						<Typography align='center' className={clsx(classes.consultMsg, classes.fontColor)}>
							Your consultation is booked with
						</Typography>
						<Grid className={classes.profileLayer} direction='row' alignItems='flex-end' justifyContent='center' container>
							<div className={classes.imgLayer}>
								<Avatar alt='PROFILE' src={tenetDisplayDetails.tenantUserResponseDTO.profilePic} className={classes.avatarImg}></Avatar>
							</div>
							<div className={classes.percent}>
								<ThumbUpAlt className={classes.thumbIcon} />
								<span style={{fontSize: '14px'}}>{tenetDisplayDetails?.successRate ? tenetDisplayDetails?.successRate : 99}</span>
							</div>
						</Grid>
						<Typography className={clsx(classes.nameStyle)}>
							{tenetDisplayDetails.tenantUserResponseDTO.tentUserFirstName || '-'}
							{tenetDisplayDetails.tenantUserResponseDTO.tentUserLastName}
						</Typography>
						<Typography style={{fontSize: '16px'}} className={classes.fontColor}>
							{tenetDisplayDetails?.tenantUserResponseDTO?.doctorProfession}
						</Typography>
						<Grid className={classes.infoLayer} container direction='row' wrap='nowrap'>
							<Grid direction='row' container alignItems='center' style={{display: 'flex'}}>
								<Videocam fontSize='20.5' />
								<Typography noWrap>{tenetDisplayDetails?.totalConsultation} Consultation</Typography>
							</Grid>
							<Grid direction='row' item alignItems='center' style={{display: 'flex'}}>
								<WorkHistory fontSize='16' />
								<Typography noWrap>{tenetDisplayDetails?.experienceYear} Year Experiance</Typography>
							</Grid>
						</Grid>
						{/* <Typography className={classes.fontColor} style={{fontSize: '14px', paddingTop: '14px', paddingBottom: '5px'}}>
							Get the LFYnGO app download link in your mobile
						</Typography>
						<div style={{margin: '0px 20px'}}>
							<Button className={classes.btnLayer}>Send app link</Button>
							<Grid direction='row' container wrap='nowrap'>
								<Button href='/chatArea' className={classes.linkBtnLayer}>
									<img src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/appstore.png' alt='appstore' width={128} height={38} />
									<a href='https://www.apple.com/in/app-store/' target='_blank' />
								</Button>
								<Button href='/chatArea' className={classes.linkBtnLayer} style={{marginLeft: '15px'}}>
									<img src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/playstore.png' alt='playstore' width={128} height={38} />
									<a href='https://play.google.com/store' target='_blank' />
								</Button>
							</Grid>
						</div> */}
					</Grid>
					<Grid className={classes.bottomLayer} style={{opacity: !tenetDisplayDetails.custSubscriptionStatus ? '0.6' : '1'}}>
						<Typography
							onClick={
								tenetDisplayDetails.custSubscriptionStatus
									? () => {
											setChatWithUsOpen(false)
											router.push('/consult')
									  }
									: () => {}
							}>
							Continue with chat
						</Typography>
					</Grid>
				</Grid>
			</Dialog>
		</>
	)
}

const useStyles = makeStyles(theme => ({
	upperLayer: {
		paddingTop: 24,
		borderRadius: '24px',
		width: '100%',
		textAlign: 'center',
	},
	consultMsg: {
		fontSize: '18px',
		fontFamily: 'Poppins',
		fontStyle: 'normal',
	},
	profileLayer: {
		color: '#1A73E8',
		paddingTop: '12px',
		paddingBottom: '12px',
		position: 'relative',
	},
	imgLayer: {
		width: '96px',
		height: '96px',
		img: {
			width: '100%',
			borderRadius: '50%',
		},
	},
	nameStyle: {
		fontSize: '20px',
		paddingBottom: '9px',
		color: '#2A2727',
		fontFamily: 'Poppins',
		fontStyle: 'normal',
	},
	fontColor: {
		color: '#2A2727',
		opacity: '64%',
		fontFamily: 'Poppins',
		fontStyle: 'normal',
	},
	infoLayer: {
		color: '#7047EA',
		padding: '13px 25px 13px 25px',
		// borderBottom: '0.5px solid #707070',
		'& p': {
			color: '#7047EA',
			paddingLeft: '5px',
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			fontSize: '14px',
		},
	},
	btnLayer: {
		border: '1px solid #00000000',
		borderRadius: '5px',
		background: '#9847EA',
		color: '#FFFFFF',
		padding: '11px',
		width: '100%',
		margin: '10px 0px',
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontSize: '16px',
		fontWeight: 'unset',
		textTransform: 'capitalize',
		'&:hover': {
			background: '#9847EA',
			color: '#FFFFFF',
		},
	},
	bottomLayer: {
		background: '#f2e9fc',
		padding: '15px',
		marginTop: '30px',
		width: '100%',
		cursor: 'pointer',
		'& p': {
			color: '#7E47EA',
			fontSize: '18px',
			textAlign: 'center',
			fontFamily: 'Poppins',
			fontStyle: 'normal',
		},
	},
	dialogLayer: {
		'& div p span': {
			fontFamily: 'Poppins',
			fontStyle: 'normal',
		},
		'& .MuiDialog-paperScrollPaper': {
			top: '35px',
			maxHeight: 'calc(100% - 97px)',
			borderRadius: '24px',
			maxWidth: '404px',
		},
	},
	avatarImg: {
		width: '100%',
		height: '100%',
	},
	thumbIcon: {
		width: '17px',
		height: '19px',
		marginLeft: '-13px',
	},
	linkBtnLayer: {
		padding: '0px',
		'& img': {
			width: '100%',
			maxWidth: '100%',
			height: '100%',
		},
	},
	percent: {
		position: 'absolute',
		right: '98px',
		display: 'flex',
	},
}))
