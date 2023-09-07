import {Typography} from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import {makeStyles} from '@material-ui/core/styles'
import data from '../../../../model/NumeroListData/data'
const useStyles = makeStyles(theme => ({
	container: {
		paddingInline: 124,
		paddingBlock: 20,
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			paddingInline: 8,
		},
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'column',
			paddingInline: 10,
		},
	},
	wrapper: {
		width: '100%',
		margin: '4px 0',
	},
	root: {
		display: 'flex',
		gap: 12,
		paddingBlock: 14,
		paddingInlineStart: 100,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
		},
		[theme.breakpoints.down('md')]: {
			paddingInline: 0,
		},
	},
	buttonColor: {
		color: '#ffff',
		height: 7,
		display: 'flex',
		padding: 20,

		alignItems: 'center',
		borderRadius: 6,
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 18,
		},
	},
	head: {
		marginInline: 124,
		paddingTop: 46,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 0,
		},
		'& .MuiTypography-h3': {
			color: theme.palette.care.main,
			fontSize: 28,
			fontWeight: 400,
		},
	},
	ListContent: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		paddingTop: 12,
		'& .MuiTypography-h4': {
			fontSize: 20,
			fontStyle: 'normal',
			fontWeight: 600,
			color: '#475677',
			fontFamily: 'Source Sans Pro',
		},
		'& .MuiTypography-h5': {
			fontSize: 16,
			color: '#475677',
			fontFamily: 'Source Sans Pro',
		},
	},
}))
export default function NumeroList() {
	const classes = useStyles()
	return (
		<>
			<div className={classes.head}>
				<Typography variant='h3'>Our Satisfied Lab Partners</Typography>
			</div>
			<div className={classes.container}>
				{data.map(data => (
					<div key={data.id} className={classes.wrapper}>
						<div className={classes.root}>
							<div className={classes.buttonColor} style={{background: data.color}}>
								<Image src={data.image} width={73} height={40} />
							</div>
							<div className={classes.ListContent}>
								<Typography variant='h4'>{data.heading}</Typography>
								<Typography variant='h5'>{data.desc}</Typography>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
