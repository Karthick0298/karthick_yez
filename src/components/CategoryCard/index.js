import {makeStyles} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
		},
	},

	cardContainer: {
		paddingBlock: 18,
		display: 'grid',

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 14,
			gap: 10,
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 14,
			gridTemplateColumns: 'repeat(3, 1fr)',
		},
		[theme.breakpoints.up('md')]: {
			gap: 16,
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
		[theme.breakpoints.up('lg')]: {
			gap: 26,
			gridTemplateColumns: 'repeat(5, 1fr)',
		},
	},

	card: {
		background: 'transparent linear-gradient(121deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '2px solid #FFFFFF80',
		borderRadius: 15,
		minWidth: '100%',
		maxWidth: '100%',

		'& .MuiCardActionArea-root': {
			padding: 16,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',

			[theme.breakpoints.down('sm')]: {
				padding: 6,
			},
		},

		'& .MuiTypography-h3': {
			color: '#475677',
			paddingBlock: 12,
			fontSize: 16,
			fontWeight: 600,
			letterSpacing: 0.2,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},

		'& .MuiTypography-h4': {
			color: '#475677',
			paddingBlockEnd: 6,
			fontStyle: 'normal',
			textAlign: 'center',
			fontSize: 14,
			letterSpacing: 0.2,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},

		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: 14,
			letterSpacing: 0.2,
			[theme.breakpoints.down('sm')]: {
				fontSize: 13,
			},
		},
	},

	avatarContainer: {
		[theme.breakpoints.down('sm')]: {
			height: 80,
			width: 80,
		},
	},
	avatar: {
		borderRadius: '50%',
	},
}))

export default function CategoryCard({cardData}) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				{cardData?.map(data => (
					<Card key={data?.slno} className={classes.card}>
						<CardActionArea>
							<div className={classes.avatarContainer}>
								<Image
									src={data.imageUrl ? data.imageUrl : 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/HomeCareNurse.jpg'}
									alt='available Physio'
									width={100}
									height={100}
									className={classes.avatar}
								/>
							</div>
							<Typography variant='h3'>{data?.category}</Typography>
							<Typography variant='h4'>{data?.experience} years of experience</Typography>
							<Typography variant='h5'>{data?.address1 ? data?.address1 : 'Coimbatore'}</Typography>
						</CardActionArea>
					</Card>
				))}
			</div>
		</div>
	)
}
