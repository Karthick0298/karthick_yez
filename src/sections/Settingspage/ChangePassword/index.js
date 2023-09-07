import React, {useState} from 'react'
import {makeStyles, Typography, Button, TextField} from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import data from '../../../model/AccountChangePassword/data'
import ChangePasswordApi from '../../../../Service/Setting/ChangePassword'
import {useRouter} from 'next/router'
import secureLocalStorage from 'react-secure-storage'

const useStyles = makeStyles(theme => ({
	container: {
		padding: 36,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: 42,
			margin: 0,
		},
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		'& .MuiInputBase-root': {
			maxWidth: 298,
		},
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
		},
		'& .MuiTypography-h6': {
			color: theme.palette.error.main,
		},
	},
	submitButton: {
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiButton-contained': {
			backgroundColor: '#1473e6',
			boxShadow: 'inset 0px 3px 6px #00000029, 0px 8px 13px #00000029',
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			color: '#fff',
			fontFamily: theme.typography.h5.fontFamily,
		},
		'& .MuiButton-root': {
			padding: '5px 28px',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
		},
	},
	fieldsAlign: {
		display: 'flex',
		flexDirection: 'column',
		gap: 18,
		paddingBottom: 24,
	},
}))
const schema = yup.object().shape({
	currentPassword: yup
		.string()
		.required('Password is required')
		.min(8),
	newPassword: yup
		.string()
		.required('Password is required')
		.min(8)
		.matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/, 'Need one Special characters'),
	confirmPassword: yup
		.string()
		.matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/, 'Need one Special characters')
		.oneOf([yup.ref('newPassword'), null], 'Password must match'),
})
export default function PasswordChange() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schema),
	})
	const emailId = typeof window !== 'undefined' ? secureLocalStorage.getItem('emailId') : null
	const mobile = typeof window !== 'undefined' ? secureLocalStorage.getItem('mobileNumber') : null
	const onSubmit = data => {
		const body = {
			confirmPassword: data.confirmPassword,
			currentPassword: data.currentPassword,
			newPassword: data.newPassword,
			userName: mobile ? mobile : emailId,
			userType: 'CUS',
		}
		ChangePasswordApi.ChangePassword(body)
		// router.reload()
	}
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={classes.fieldsAlign}>
					{data.inputs
						.filter(name => name.id >= 1)
						.map((input, id) => {
							return (
								<>
									<div key={id} className={classes.wrapper}>
										<Typography variant='h5'>{input.label}</Typography>
										<TextField id='outlined-required' variant='outlined' margin='dense' type={input.type} {...register(input.name)} />
										{errors[input.name] && <Typography variant='h6'>{errors[input.name]?.message}</Typography>}
									</div>
								</>
							)
						})}
				</div>
				<div className={classes.submitButton}>
					<Button type='submit' variant='contained'>
						Confirm
					</Button>
				</div>
			</form>
		</div>
	)
}
