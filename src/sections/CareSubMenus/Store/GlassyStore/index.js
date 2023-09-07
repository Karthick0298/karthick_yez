import {Typography} from '@material-ui/core'
import Image from 'next/image'
import React from 'react'
import {makeStyles} from '@material-ui/core'
import data from '../../../../model/CareStoreData/data'
import GlassyCard from '../../../../components/GlassyCard'
const useStyles = makeStyles(theme => ({
	root: {
		marginInline: 100,
		marginBlock: 16,
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
			marginBlock: 10,
			gap: 12,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 0,
			marginBlock: 20,
			gap: 12,
		},
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		gap: 12,
		cursor: 'pointer',
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
	},
	careSpecial: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		gap: 4,
		'& .MuiTypography-h5': {
			fontSize: 12,
			textAlign: 'center',
			color: '#475677',
		},
	},
	imgHead: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 24,
		},
	},
}))
export default function Glassy() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<>
				<div className={classes.container}>
					{data.map(item => (
						<div key={item.id}>
							<GlassyCard>
								<div className={classes.careSpecial}>
									<Image src={item.image} alt='image' width={28} height={28}></Image>
									<Typography variant='h5'>{item.care}</Typography>
								</div>
							</GlassyCard>
						</div>
					))}
					<div className={classes.imgHead}>
						<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/glassycard/scroll.svg' width={28} height={28} alt='scroll' />
						<Typography variant='h6'>View All</Typography>
					</div>
				</div>
			</>
		</div>
	)
}
