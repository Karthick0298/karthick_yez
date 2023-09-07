import React, {useEffect, useState, useCallback} from 'react'
import Image from 'next/image'
import {Divider, makeStyles, Typography} from '@material-ui/core'
import data from '../../../model/ProfileCardTabView/Q&A/data'
import ReadMore from './ReadMore'

const useStyles = makeStyles(theme => ({
	mainContain: {
		display: 'flex',
		gap: 24,
		alignItems: 'flex-start',
	},
	content: {
		width: '100%',
	},
	listQuery: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		paddingBlock: 12,

		'& .MuiTypography-body1': {
			fontSize: 14,
			color: '#475677',
			fontFamily: 'poppins',
		},
	},
	listName: {
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiTypography-h5': {
			fontSize: 14,
			fontWeight: 500,
			color: '#2A2A2A5C',
		},
		'& .MuiTypography-h4': {
			fontSize: 14,
			fontStyle: 'normal',
			fontWeight: 500,
		},
	},
	contList: {
		display: 'flex',
		gap: 12,
		paddingBlock: 12,
	},
	contListOne: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		width: '100%',

		'& .MuiTypography-body1': {
			fontSize: 14,
			color: '#475677',
			fontFamily: 'poppins',
		},
	},
	viewList: {
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiTypography-h5': {
			fontSize: 14,
			fontWeight: 500,
			color: '#1473E6',
		},
		'& .MuiTypography-h4': {
			fontSize: 14,
			fontWeight: 500,
			fontStyle: 'normal',
			color: '#2A2A2A5C',
		},
	},

	borderLine: {
		borderLeft: '2px solid #707070',
	},
}))

export default function TabVeiw(props) {
	const {QaAnsweredData} = props
	const classes = useStyles()
	return (
		<>
			{QaAnsweredData?.map(data => (
				<>
					<div key={data?.custAskAnsUuid} className={classes.mainContain}>
						<Image src={data?.thumbnailFilePath || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/logotab.svg'} alt='user-logo' width={70} height={70} />
						<div className={classes.content}>
							<div className={classes.listQuery}>
								<div className={classes.listName}>
									<Typography variant='h4'>{data?.title}</Typography>
									<Typography variant='h5'>{data?.interval} months ago</Typography>
								</div>
								<Typography variant='body1'>{data?.question}</Typography>
							</div>
							<div className={classes.contList}>
								<div className={classes.borderLine}></div>
								<div className={classes.contListOne}>
									<div className={classes.viewList}>
										<Typography variant='h5'>
											Answered by Dr.{data?.tentUserFirstName} {data?.tentUserLastName}
										</Typography>
										<Typography variant='h4'> {data?.views} views</Typography>
									</div>
									<ReadMore moreText={'view answer'} lessText={'less answer'} text={data?.answer} />
								</div>
							</div>
						</div>
					</div>
					<Divider />
				</>
			))}
		</>
	)
}
