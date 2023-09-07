import React, {useState, useEffect} from 'react'
import {makeStyles, IconButton, Typography, Button, TextField, DialogActions} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Image from 'next/image'
import Link from 'next/link'
import DialogContent from '@material-ui/core/DialogContent'
import data from '../../../model/LoginFields/Email/data'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAuth from '../../../../lib/Utils/hooks/UseAuth'
import AuthButton from '../../AuthButton'
import ButtonLoader from '../../../../lib/Utils/Loader'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiBackdrop-root': {
			background: '#0000004D 0% 0% no-repeat padding-box',
			backdropFilter: 'blur(9px)',
		},
		'& .MuiDialog-paperScrollPaper': {
			// maxHeight: 'calc(100% - 164px)',
			maxHeight: '94vh',
		},
		'& .MuiDialog-paperWidthSm': {
			// maxWidth: '50%',
			// minWidth: '32%',
			background: 'transparent linear-gradient(141deg, #fffffff0 0%, #ffffffc9 100%) 0% 0% no-repeat padding-box',
			borderRadius: 24,
		},
		'& .MuiDialogTitle-root': {
			padding: '24px 24px 0px 24px',
		},
		'& .MuiTypography-h6': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			'& .MuiTypography-h5': {
				color: theme.palette.lyfngo.main,
				textTransform: 'capitalize',
			},
		},
		'& .MuiDialogContent-root': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBlock: 36,
			'& .MuiTypography-body1': {
				fontFamily: theme.typography.h6.fontFamily,
				fontWeight: 500,
			},
		},
		'& .MuiDialogActions-root': {
			justifyContent: 'center',
			paddingBlockEnd: 98,
			paddingTop: 24,
		},
	},
	buttonList: {
		'& .MuiButton-root': {
			borderRadius: 24,
			border: '1px solid #DDDDDD',
			width: '100%',
		},
		'& .MuiButton-text': {
			padding: 0,
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			gap: 38,
		},
	},
	mediaList: {
		'& .MuiButton-root': {
			borderRadius: 24,
			border: '1px solid #DDDDDD',
			width: '100%',
		},
		'& .MuiIconButton-root': {
			position: 'relative',
			left: 16,
		},
		'& .MuiButton-text': {
			padding: 0,
			background: '#F1F1F1 0% 0% no-repeat padding-box',
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			gap: 38,
		},
	},
	link: {
		color: theme.palette.lyfngo.main,
		textDecoration: 'none',
	},
	footer: {
		paddingInline: 16,
		paddingBlock: 18,
		'& .MuiTypography-h6': {
			display: 'block',
			textAlign: 'center',
			color: '#999999',
		},
	},
	//   linkRoot: {
	//     borderBottom: '1px solid #ccc',
	//     "& .MuiListItem-button:hover": {
	//       backgroundColor: "unset",
	//     },
	//     "& .MuiListItem-gutters": {
	//       paddingInline: 28,
	//       paddingBlock: 10
	//     },
	//     [theme.breakpoints.down('xs')]:{
	//       "& MuiButtonBase-root":{
	//         padding: 12
	//       }
	//     }
	//   },
	content: {
		[theme.breakpoints.down('xs')]: {
			paddingInlineStart: 8,
			paddingInlineEnd: 0,
		},
		'& .MuiList-padding': {
			padding: 0,
			[theme.breakpoints.down('xs')]: {
				padding: 12,
				borderBottom: '1px solid #ccc',
			},
		},
	},
	loginLink: {
		fontFamily: theme.typography.h5.fontFamily,
		fontSize: theme.typography.h5.fontSize,
		textDecoration: 'none',
		color: '#464444',
		'&:hover': {
			color: theme.palette.lyfngo.main,
		},
	},
	mobileButton: {
		[theme.breakpoints.down('xs')]: {
			'& .MuiButton-text': {
				padding: '6px 18px',
			},
		},
	},
	emailInput: {
		paddingInline: 16,
		'& .MuiInputBase-input': {
			fontSize: 13,
			fontFamily: theme.typography.h6.fontFamily,
			fontWeight: 400,
		},
		'& .MuiFormLabel-root .Mui-focused': {
			color: 'red !important',
		},
		'& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderBottom: 'red !important',
		},
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		'& .MuiTypography-h6': {
			paddingInline: 16,
			color: theme.palette.lyfngo.main,
			alignItems: 'baseline',
		},
	},
}))

const schema = yup.object().shape({
	Email: yup
		.string()
		.required('Please enter a email')
		.email('Please enter a valid email'),
})

export default function EmailLogin({handleContinue, open, handleClose, email, setEmail, loading}) {
	const classes = useStyles()
	// const [open, setOpen] = React.useState(false);

	// const handleClickOpen = () => {
	//   setOpen(true);
	// };

	// const handleClose = () => {
	//   setOpen(false);
	// };

	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	})
	const onSubmit = data => {
		emailsignin(data.Email)
		handleContinue()
		secureLocalStorage.setItem('emailId', data.Email)
		reset()
	}

	const {emailsignin} = useAuth()

	return (
		<>
			{/* <List className={classes.buttonList}>
    <ListItem>
      <Button
       onClick={handleClickOpen}
      >
        <IconButton disabled>
          <Image
            alt="logo"
            src="https://ik.imagekit.io/lyfngo/web_b2c/public/images/auth/email.svg"
            width={15}
            height={15}
          />
        </IconButton>
        Login With Email
      </Button>
    </ListItem>
  </List> */}
			<Dialog aria-labelledby='simple-dialog-title' style={{zIndex: 999}} open={open} className={classes.root} onClose={handleClose}>
				<DialogTitle id='simple-dialog-title'>
					<IconButton disabled>
						<Image alt='logo' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/lyfngo_redlogo2x.png' width={51} height={52} />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Typography variant='body1'>Sign Up</Typography>
				</DialogContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					{data.inputs.map((item, index) => {
						return (
							<div className={classes.wrapper} key={index}>
								<TextField
									id='outlined-required'
									margin='dense'
									className={classes.emailInput}
									placeholder={item.label}
									type={item.type}
									{...register(item.name)}
									error={!!errors.Email}
									value={email}
									onChange={(e, value) => {
										setEmail(e?.target?.value)
									}}
								/>
								{errors[item.name] && <Typography variant='h6'>{errors[item.name]?.message}</Typography>}
							</div>
						)
					})}
					<div className={classes.mediaList}>
						<div className={classes.footer}>
							<Typography variant='h6'>
								By signing up, I agree to the
								<Link href='/tnc/'>
									<a target='_blank' className={classes.link}>
										&nbsp;Terms and Condition
									</a>
								</Link>
							</Typography>
						</div>
					</div>
					<DialogActions>
						{/* <AuthButton type='submit'>Continue</AuthButton> */}
						{loading ? (
							<>
								<ButtonLoader size={10} color={'red'} />
							</>
						) : (
							<AuthButton type='submit'>Continue</AuthButton>
						)}
					</DialogActions>
				</form>
			</Dialog>
		</>
	)
}
