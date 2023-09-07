import {makeStyles, Typography} from '@material-ui/core'
import React, {useState} from 'react'
import Image from 'next/image'
const useStyles = makeStyles(theme => ({
	rootCard: {
		width: 170,
		height: 170,
		paddingBlock: 18,
		paddingInline: 1,
		height: 'auto',
		background: 'transparent linear-gradient(134deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '2px solid #00000008',
		borderRadius: 15,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		opacity: 1,
		backdropFilter: 'blur(6px)',
		'-webkit-backdrop-filter': 'blur(6px)',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.down('md')]: {
			width: '100%',

			flexDirection: 'column',
		},
	},
	mainList: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		gap: 12,
		'& .MuiTypography-h5': {
			color: theme.palette.care.main,
			fontSize: 18,
			fontWeight: 600,
			fontFamily: 'Source Sans Pro',
		},
	},
}))

export default function GalssyCard({head, subhead, product, image}) {
	const classes = useStyles()
	return (
		<>
			<div className={classes.rootCard}>
				<div className={classes.mainList}>
					<Image src={image} width={62} height={60} />
					<Typography variant='h5'>{product}</Typography>
				</div>
			</div>
		</>
	)
}
