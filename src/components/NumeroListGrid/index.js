import {Typography} from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import data from '../../model/NumeroListData/data'
const useStyles = makeStyles(theme => ({
	container: {
		'-webkit-column-count': 2,
		/* Chrome, Safari, Opera */
		'-moz-column-count': 2,
		/* Firefox */
		columnCount: 2,
		width: '100%',
		'-webkit-column-gap': 10,
		/* Chrome, Safari, Opera */
		'-moz-column-gap': 10,
		/* Firefox */
		columnGap: 70,
		paddingInline: 100,
		paddingBlock: 20,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			paddingInline: 8,
		},
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'column',
			paddingInlineStart: 100,
		},
	},
	wrapper: {
		width: '100%',
		margin: '4px 0',
		display: 'inline-block',
		verticalAlign: 'top',
	},
	root: {
		display: 'flex',
		gap: 12,
		paddingBlock: 14,
		paddingInline: 100,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 0,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 0,
		},
	},
	buttonColor: {
		color: '#ffff',
		height: 7,
		display: 'flex',
		padding: 20,
		boxShadow: '0px 3px 6px #0000001A',
		alignItems: 'center',
		borderRadius: 6,
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 18,
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
			color: '#475677',
		},
		'& .MuiTypography-h5': {
			fontSize: 14,
			color: '#475677',
		},
	},
}))
export default function NumeroList() {
	const classes = useStyles()
	return (
		<>
			<div className={classes.container}>
				{data.map(data => (
					<div key={data.id} className={classes.wrapper}>
						<div className={classes.root}>
							<div className={classes.buttonColor} style={{background: data.color}}>
								<Typography variant='h5'>{data.id}</Typography>
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
