import React from 'react'
import card from '../../model/AppointmentDetails/cardData'
import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: 20,
		paddingBlock: '3%',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 20,
			paddingInline: 7,
		},
	},
	cardColor: {
		background: 'aliceblue',
		display: 'flex',
		alignItems: 'center',
		paddingRight: 30,
		borderRadius: 20,
		gap: 12,
		[theme.breakpoints.down('sm')]: {
			paddingRight: 10,
		},
	},
	doctorInfo: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
	},
	doctorImage: {
		display: 'flex',
		position: 'relative',
		top: 3,
		[theme.breakpoints.down('sm')]: {
			top: 0,
		},
	},
	cardAddress: {
		background: 'aliceblue',
		display: 'flex',
		alignItems: 'center',
	},
	addressInfo: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
	},
	splitContent: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
	},
}))
export default function CardList() {
	const classes = useStyles()
	return (
		<div>
			{card.map(cardItem => (
				<div key={card.id} className={classes.root}>
					<div className={classes.cardColor}>
						<div className={classes.doctorImage}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/doctor-image.png' alt='doctor' width={150} height={150} />
						</div>
						<div className={classes.doctorInfo}>
							<Typography variant='h5'>{cardItem.doctorname}</Typography>
							<Typography variant='h5'>{cardItem.course}</Typography>
							<Typography variant='h5'>{cardItem.profession}</Typography>
						</div>
					</div>
					<div className={classes.cardColor}>
						<div>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/cogent.png' alt='care' width={134} height={150} />
						</div>
						<div className={classes.splitContent}>
							<div className={classes.addressInfo}>
								<Typography variant='h5'>{cardItem.care}</Typography>
								<Typography variant='h5'>{cardItem.street}</Typography>
								<Typography variant='h5'>{cardItem.city}</Typography>
							</div>
							{/* <div>
								<Button href='#text-buttons' color='primary' style={{textTransform: 'none'}}>
									Get Directions
								</Button>
							</div> */}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
